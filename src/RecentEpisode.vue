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

        <div>
          <i @click.prevent="$emit ('play', podcast )" v-if="selected === false" class="fas fa-play"></i>
          <i @click.prevent="$emit ('pause', podcast  )" v-if="selected === true" class="fas fa-pause"></i>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

export default {

  name: 'RecentEpisode',

  props: ['podcast', 'selected'],

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
