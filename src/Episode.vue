<style>
</style>
<template>
  <div class="podcast-episode">
    <div class="row">
      <div class="col-lg-9 col-md-8">
        <div class="episode-item">
          <div class="photo-ep" id="'delayed-image-' + episode.uid ">
            <img :alt="'photo for ' + episode.uid" :src="episode.episodePhotoUri"/>
          </div>
          <div class="content-ep">
            <div class="heading-episode">
              <h4>
                <router-link class="active" :to="{name: 'episodes', params: {uid:  episode.uid }}">
                  {{ episode.title }}
                </router-link>
              </h4>
              <button type="button" class="btn-light-green"><i class="fas fa-share"></i>share this</button>
            </div>
            <P>{{ episode.dateAndTime }}</P>
            <div v-html=" episode.description "></div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4">
        <div class="controls-episode">
          <ul>
            <li class="control-ep">
              <div class="icon">

                <i @click.prevent="bubblePlay(episode)"   v-if="isPlaying(episode) === false" class="fas fa-play"></i>
                <i @click.prevent="bubblePause(episode)"  v-if="isPlaying(episode) === true" class="fas fa-pause"></i>
              </div>
              <span class="play-status" id="'episode-play-' + episode.uid +'-status' "></span>

            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

export default {

  name: 'Episode',

  props: ['episode', 'active'],

  mounted() {
  },

  created() {
  },

  methods: {
    bubblePlay(episode) {
      this.$emit('play', episode)
    },
    isPlaying (episode) {
      return this.$root.$data.playerService.isPlaying(episode)
    },
    bubblePause(episode) {
      this.$emit('pause', episode)
    }

  },

  data() {
    return {
    }
  },

  components: {}

}
</script>
