<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;700;900&display=swap');

@import url('assets/css/all.css');
@import url('assets/css/audioplayer.css');
@import url('assets/css/framework.css');
@import url('assets/css/responsive.css');
@import url('assets/css/main.css');
</style>
<template>
  <div>
    <a name="top"></a>


    <header class="top-bar" id="topBar">


      <div class="audio-title-container">
        <div v-if="selected != null " class="col-md-12 align-content-center">{{ selected.title }}</div>
      </div>


      <div class="audio-image-container">
        <img v-if="selected != null " :src="selected.episodePhotoUri "/>
      </div>

      <div class="audio-audio-container">
        <audio class="audio-player" :src="selectedEpisodeUri" controls>
          Your browser does not support the audio element.
        </audio>
      </div>


      <div class="menu-bar-container">
        <div class="navbar-toggler mobile-nav-btn"
             data-toggle="collapse"
             @click="toggleMenu()"
             data-target="#mobile-menu" aria-controls="mobile menu"
             :aria-expanded="menuOpen"
             aria-label="Toggle navigation">
          <div :class="getMenuClass()">
            <span></span><span></span><span></span></div>
        </div>
        <div :class=" ' navbar-collapse mobile-menu-collapse ' + ( this.menuOpen ? '': 'collapse' )"
             id="mobile-menu">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><a class="nav-link" target="_blank"
                                    href="http://twitter.com/starbuxman">Twitter
              (@starbuxman)</a></li>
            <li class="nav-item"><a class="nav-link" target="_blank"
                                    href="http://twitter.com/BootifulPodcast">Twitter
              (@BootifulPodcast)</a></li>
            <li class="nav-item"><a class="nav-link" target="_blank"
                                    href="http://joshlong.com">Josh's
              blog</a></li>
            <li class="nav-item"><a class="nav-link" target="_blank"
                                    href="http://start.Spring.io">
              My second favorite place on the internet </a></li>
          </ul>
        </div>
      </div>

    </header>

    <header class="header" id="header">
      <nav class="navbar">
        <div class="container-fluid">
          <div class="logo">
            <a href="/">
              <img src="/assets/images/logo-ne.png" alt="A Bootiful Podcast"/>
            </a>
          </div>
          <ul class="nav-menu">
            <li class="active"><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#latest-podcasts">Latest Episodes</a></li>
            <li><a href="#all-podcasts">All Episodes</a></li>
            <li><a href="#podcatchers">iTunes/Google Play/Spotify</a></li>
            <li><a href="https://www.patreon.com/joshlong">Support Us On
              Patreon
            </a></li>
          </ul>
          <div class="search-nav">

          </div>
        </div>
      </nav>
      <div class="cover">
        <div class="container-fluid">
          <div class="row">
            <div class="left-cover-part">
              <div class="josh-photo">
                <img srcset="/assets/images/josh@2x.webp 2x"
                     alt="josh Long"
                />
              </div>
            </div>
            <div class="right-cover-part">
              <div class="caption"><a name="about"></a>
                <h1> Hi, I'm <a
                    style="color: greenyellow ; text-shadow: none"
                    href="http://twitter.com/starbuxman">Josh
                  Long</a>,<br/>
                  a humble Spring developer advocate, and this is <EM>A&nbsp;Bootiful&nbsp;Podcast</EM>,
                  a celebration of the real heroes that drive
                  ecosystems.
                </h1>
                <a href="#latest-podcasts"
                   class="btn-slide minimal-btn"><i
                    class="fas fa-angle-down"></i>view podcasts</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cover-decoration-bottom"></div>
    </header>

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
    <!--    -->
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

    <!---->
    <section class="section" id="podcasts-archive">

      <div class="heading-section"><h5>All Episodes </h5><a
          name="all-podcasts"></a></div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-11 col-md-12 col-12">
            <div class="tab-nav-archive">
              <ul class="nav nav-tabs" role="tablist">

                <div v-for="year in years" :key="year.year ">

                  <li>
                    <a :id=" 'year-' + year.year + 'tab' " data-toggle="tab"
                       @click="selectedYear = year.year "
                       :class="'tab-pane-toggle ' +  getYearActiveClassName( year.year) "
                       role="tab">{{ year.year }} Episodes</a>
                  </li>
                </div>

              </ul>
            </div>

            <div class="tab-content" v-for="year in years" :key="year.year ">
              <div :class="'tab-pane fade show tab-pane-content ' + getYearActiveClassName(year.year) " role="tabpanel"
                   :aria-labelledby="year" :id="'year-' + year.year  + '-content' ">
                <div :key="episode.id" v-for="episode in year.episodes">
                  <Episode :selected="selected != null && selected.id === episode.id && playing "
                           @pause="pause(episode)"
                           @play="play( episode)" :episode="episode"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">

      <div class="heading-section">
        <h5>Listen On Your Favorite Podcatcher Platform</h5><a
          name="podcatchers"></a>
      </div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <P> You can listen to the podcast on all the usual podcast platforms: </P>
        </div>
        <div class="row justify-content-center">
          <table>
            <tr>
              <td>
                <a href="https://podcasts.apple.com/us/podcast/a-bootiful-podcast/id1438691771?mt=2">
                  <img
                      src="/assets/images/podcast-apps/itunes.png"
                      alt="iTunes and Apple Podcasts"
                      class="podcast-app-image"
                  /> </a>
              </td>

              <td>
                <a href="https://play.google.com/music/listen?u=0#/ps/I5qmmensglu6q5iwourdl2a2hcm">
                  <img src="/assets/images/podcast-apps/google.png"
                       alt="Google"
                       class="podcast-app-image"/>
                </a></td>

              <td>
                <a href="https://open.spotify.com/show/5eyimRNrvZStATQk8by82A?si=iq0BzQVrSrO6XvARMiVSPg">

                  <img src="/assets/images/podcast-apps/spotify.png"
                       alt="Spotify" class="podcast-app-image"
                  />
                </a>
              </td>

            </tr>
          </table>

        </div>
      </div>


    </section>
    <footer class="footer">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-4 col-sm-6">
            <p class="copyrights"> All rights reserved for <EM>A Bootiful Podcast</EM> 2019-2020 </p>
          </div>
          <div class="col-md-4 col-hide">
            <a href="#top" @click="scrollToTop" class="button-scroll-top">
              <img src="/assets/images/scrollTop.png" alt="Scroll to the top of the page"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>

import RecentEpisode from "@/RecentEpisode";
import Episode from "@/Episode";

export default {

  name: 'App',

  async mounted() {

    // await this.loadPodcast(this.latest)

  },

  async created() {

    console.info('Launching BootifulPodcast.fm ')

    const cy = new Date().getFullYear()
    this.currentYear = cy
    this.selectedYear = cy

    function calculateYears(ps) {
      const start = 2018
      const years = [];
      let ny = start
      while (cy >= ny)
        years.push(ny++)
      years.sort((a, b) => b - a)
      return years
          .map((year) => {
            return {year: year, episodes: ps.filter((p) => parseInt(p.dateAndTime.split('/')[2]) === year)}
          })
    }

    const podcasts = await this.$root.$data.podcastService.load()
    podcasts.sort((a, b) => {
      return b.date - a.date
    })
    this.podcasts = podcasts
    this.latest = podcasts[0]
    this.top3 = [podcasts [0], podcasts [1], podcasts[2]]
    this.years = calculateYears(this.podcasts)
  },

  methods: {
    getAudioElement() {
      return document.getElementsByClassName('audio-player').item(0)
    },
    calculateUrlForPodcast(podcast) {
      return 'http://api.bootifulpodcast.online' + podcast.episodeUri
    },
    async pause(podcast) {

      if (this.selected !== null && this.selected.id !== podcast.id) {
        return
      }

      const element = this.getAudioElement()
      try {
        await element.pause()
      } catch (e) {
        console.log('deleting ' + e)
      }

      this.playing = false
      // this.selected = null
    },
    async play(podcast) {
      const element = this.getAudioElement()
      console.assert(podcast != null)
      console.assert(element != null)
      try {
        await element.pause()
      } catch (e) {
        console.log('could not pause the audio')
      }
      if (this.selected === null || this.selected.id !== podcast.id) {
        await this.loadPodcast(podcast)
      }
      await element.play()
      this.playing = true
      return true
    },

    async loadPodcast(podcast) {
      this.selected = podcast
      console.assert(this.getAudioElement() != null)
      await this.getAudioElement().load()
    },
    getMenuClass() {
      return (this.menuOpen ? 'open' : '') + ' hamburger-menu'
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    scrollToTop() {
      window.scrollTo(window.scrollX, 0);
      return false;
    },

    getYearActiveClassName(year) {
      return year === this.selectedYear ? 'active' : ''
    },
  },

  computed: {
    selectedEpisodeUri: function () {
      const src = this.selected == null ? '' : this.calculateUrlForPodcast(this.selected)
      console.log('returning selectedEpisodeUri ' + src)
      return src
    },

  },

  data() {
    return {

      menuOpen: false,
      playing: false,
      currentYear: 0,
      selectedYear: 0,
      years: [],
      selected: null,
      top3: [],
      podcasts: []
    }
  },

  components: {Episode, RecentEpisode}

}
</script>
