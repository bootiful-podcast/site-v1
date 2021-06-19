<style>
</style>
<template>

  <div class="col-md-4 col-sm-12">
    <div class="latest-ep-item">
      <div class="photo"><img :src="podcast.episodePhotoUri " alt=""/>
      </div>
      <div class="content">
        <h4>

          <router-link class="active" :to="{name: 'episodes', params: {uid:  podcast.uid }}">
            {{ podcast.title }}
          </router-link>

        </h4>
        <P><strong> {{ podcast.dateAndTime }} </strong></P>
        <p>
        <p v-html="podcast.description">
          this is a description
        </p>

        <div>
          <i @click.prevent="bubblePlay(podcast)"
             v-if="selected === false"
             class="fas fa-play"
          ></i>
          <i @click.prevent="bubblePause(podcast)"
             v-if="selected === true"
             class="fas fa-pause"
          ></i>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

export default {

  name: 'RecentEpisode',

  props: ['podcast'],

  mounted() {
  },

  async created() {

    // this.podcast = null
    // this.selected = false
  },

  methods: {

    async isPlaying(episode) {
      return this.selected != null && this.selected.id === episode.id && this.playing
    },
    bubblePlay(episode) {
      this.selected = true
      this.$emit('play', episode)
    },
    bubblePause(episode) {
      this.selected = false
      this.$emit('pause', episode)
    }

  },

  data() {
    return {
      selected: false
    }
  },

  components: {}

}
</script>
