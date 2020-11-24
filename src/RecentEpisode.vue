<style>
</style>
<template>

  <div class="col-md-4 col-sm-12">
    <div class="latest-ep-item">
      <div class="photo"><img :src="podcast.episodePhotoUri " alt=""/>
      </div>
      <div class="content"><h4><a href="#">
        {{ podcast.title }} </a>
      </h4>
        <P><strong> {{ podcast.dateAndTime }} </strong></P>
        <p>
        <p v-html="podcast.description">
          this is a description
        </p>
        <a href="#" id="top3-play-dc4a4262-a7e2-4af0-879d-328a57fd86b4"
           class="listen-btn clicked"><span
            class="vid-icon-span"><i
            class="fas fa-play"></i></span>Listen
          Now</a>
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

  },

  methods: {},

  data() {
    return {}
  },

  components: {}

}
</script>
