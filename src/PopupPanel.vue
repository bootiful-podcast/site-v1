<script>


export default {

  name: 'PopupPanel',

  props: [],

  async created() {
  },

  async mounted() {
    const that = this
    const panel = this.$refs.panel
    const target = this.$refs.target
    that.visible = false
    // this.panelWidth = panel.getClientRects() [0].width
    this.$root.$data.popupPanels = this.$root.$data.popupPanels || {
      pairs: []
    }
    const pairs = this.$root.$data.popupPanels.pairs
    pairs.push({
      panel: panel, target: target
    })
    console.debug('there are ' + pairs.length + ' pairs')
    const popupPanelHideEvent = 'popup-panel-hide-event'
    this.$root.$data.bus.on(popupPanelHideEvent, () => {
      that.visible = false
    })

    if (pairs.length === 1) {
      console.debug('registering state management callbacks. This should only happen once per page')
      //  the following need to be registered once per browser window, and that's it!
      window.addEventListener('resize', () => {
        this.$root.$data.bus.emit(popupPanelHideEvent)
      })

      document.body.addEventListener('click', (event) => {
        console.log('click!')
        const elementsInWhichTheClickOccurred = pairs.filter((pair) => {
          const panel = pair.panel
          const target = pair.target
          return ((panel.contains(event.target) || target.contains(event.target)))
        })

        const wasOutside = elementsInWhichTheClickOccurred.length === 0
        if (wasOutside) {
          this.$root.$data.bus.emit(popupPanelHideEvent)
        }
        event.stopImmediatePropagation()
      })


    }
  },

  methods: {

    getScreenCordinates(element) {
      let top = 0
      let left = 0
      do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);

      return {
        top: top,
        left: left,
        x: left,
        y: top
      };

    },

    toggleVisibility() {
      this.visible = !this.visible
      console.log('it should be ' + this.visible)
      const target = this.$refs.target
      const panel = this.$refs.panel

      const coords = this.getScreenCordinates(target)

      // ok what about when the (width of the panel + x)  > the view port of the browser,
      // we don't want things being shown offscreen forcing scrolling, do we?
      /*
      const vpw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const newXBound = x + this.panelWidth
      if (newXBound > vpw) {
        const delta = (newXBound - vpw)
        x -= delta
       }
      */

      if (this.visible) {

        panel.style.left = coords.left // + 'px'
        panel.style.top = coords.top //+ 'px'
        console.log(panel.style.top + ':' + panel.style.left)
      }

    }

  },

  data() {
    return {
      panelWidth: 0,
      visible: false
    }
  },
  components: {}
}

</script>
<template>
  <div class="popup">
  <div @click.prevent="toggleVisibility()"  ref="target">
    <div class="popup-link">
      <slot name="target">
         the link or thing that should be clickable
      </slot>
    </div>
  </div>
    <div ref="panel" v-show="visible" class="popup-panel">
      <slot>
        This is a popover panel
      </slot>
    </div>
  </div>
</template>
<style>

.popup-link {
  cursor: pointer;
}

.popup-panel {

  display: block;
}
</style>