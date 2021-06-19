<style>

</style>
<template>

  <div>



    <section class="section" id="latest-podcasts">
      <div class="heading-section"><h5> Latest Podcasts</h5><a
          name="latest-episodes"></a></div>
      <div class="container-fluid">
        <div class="row">
          <RecentEpisode :selected="selected != null && selected.id === p.id && playing "
                         @pause="pause( p )" @play="play(p )" v-for="p in top3" v-bind:key="p.id" v-bind:podcast="p"/>
        </div>
      </div>
    </section>

    <section class="about">


      <a name="about"></a>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-10 col-12"><p>Josh Long (<a target="_blank"
                                                         href="http://twitter.com/starbuxman"><span
              class="text-primary">@starbuxman</span></a>), the host of
            <EM>A Bootiful Podcast</EM>, is a Spring
            Developer Advocate at VMware. Josh is a
            <a target="_blank"
               href="https://community.oracle.com/docs/DOC-922857">Java
              Champion</a>,
            author of 6 books including <a target="_blank" href="http://CloudNativeJava.io">
              <span class="text-underline">O'Reilly's Cloud Native Java: Designing Resilient Systems with Spring Boot, Spring Cloud , and Cloud Foundry</span>
            </a> and the <a href="http://ReactiveSpring.io"
                            target="_blank"><span
                class="text-underline">Reactive Spring</span></a>)
            and numerous best-selling video trainings (including <a
                target="_blank"
                href="http://joshlong.com/livelessons.html"><span
                class="text-underline">Building Microservices with Spring Boot Livelessons</span></a>
            with
            Spring Boot co-founder Phil Webb), and an open-source
            contributor (Spring Boot, Spring Integration,
            Spring Cloud, Activiti and Vaadin), a podcaster and a <a
                target="_blank"
                href="http://bit.ly/spring-tips-playlist"><span
                class="text-underline">screencaster</span></a>
            .</p></div>
        </div>
      </div>
    </section>




  </div>
</template>
<script>

import RecentEpisode from "@/RecentEpisode";
export default {

  name: 'About',

  props: [ ],

  mounted() {
  },

  async created() {
    this.top3 = await  this.$root.$data.podcastService.readTop3()
  },

  methods: {},

  data() {
    return {
      latest : [],
      selected : null,
      top3: []
    }
  },

  components: {RecentEpisode }

}

</script>
