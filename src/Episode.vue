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
            <span class="cat-ep">Development</span>
            <div class="heading-episode">
              <h4><a href="#" class="active">{{ episode.title }}</a></h4>
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

                <i @click.prevent="$emit ('play', episode  )" v-if="selected === false" class="fas fa-play"></i>
                <i @click.prevent="$emit ('pause', episode  )" v-if="selected === true" class="fas fa-pause"></i>
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

  props: ['episode', 'selected', 'active'],

  mounted() {
  },

  created() {


  },

  methods: {},

  data() {
    return {}
  },

  components: {}

}
</script>
