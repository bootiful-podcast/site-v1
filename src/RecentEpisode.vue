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
             v-if="isPlaying(podcast) === false"
             class="fas fa-play"
          ></i>
          <i @click.prevent="bubblePause(podcast)"
             v-if="isPlaying(podcast) === true"
             class="fas fa-pause"
          ></i>
        </div>
      </div>


      <div class="share-panel">
        <SharePanel
            :title="podcast.title"
            :image-url="podcast.episodePhotoUri"
            :post-url="getUrlForEpisode(podcast)"
            :episode="podcast"
        />
      </div>

    </div>

  </div>
</template>
<script>

import SharePanel from "@/SharePanel";

export default {

  name: 'RecentEpisode',

  props: ['podcast'],

  async mounted() {
  },

  async created() {
  },

  methods: {


    getUrlForEpisode(episode) {
      return this.$root.$data.siteService.getUrlForEpisode(episode)
    },

    isPlaying(episode) {
      return this.$root.$data.playerService.isPlaying(episode)
    },
    bubblePlay(episode) {
      this.$emit('play', episode)
    },
    bubblePause(episode) {
      this.$emit('pause', episode)
    }
  },

  data() {
    return {}
  },

  components: {SharePanel }

}
</script>
