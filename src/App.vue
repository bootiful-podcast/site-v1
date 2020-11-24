<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;700;900&display=swap');
/*@import url('http://bootifulpodcast.fm/assets/css/site.min.css');*/
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
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-9">
            <div id="containerOfDataSources">
              <!--
                     This container stores all the data sources for the music player which,
                     for reasons I will never understand, need to be in DIV elements in the DOM.
                     I dynamically create those elements using JavaScript based on loaded data.
                     -->
            </div>
          </div>
          <div class="col-md-3">
            <button class="navbar-toggler mobile-nav-btn" type="button"
                    data-toggle="collapse"
                    data-target="#mobile-menu" aria-controls="mobile menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
              <div class="hamburger-menu">
                <span></span><span></span><span></span></div>
            </button>
            <div class="collapse navbar-collapse mobile-menu-collapse"
                 id="mobile-menu">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item"><a class="nav-link"
                                        href="http://twitter.com/starbuxman">Twitter
                  (@starbuxman)</a></li>
                <li class="nav-item"><a class="nav-link"
                                        href="http://twitter.com/BootifulPodcast">Twitter
                  (@BootifulPodcast)</a></li>
                <li class="nav-item"><a class="nav-link"
                                        href="http://joshlong.com">Josh's
                  blog</a></li>
                <li class="nav-item"><a class="nav-link"
                                        href="http://start.Spring.io">
                  My second favorite place on the internet </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header class="header" id="header">
      <nav class="navbar">
        <div class="container-fluid">
          <div class="logo">
            <a href="/">
              <img src="/assets/images/logo-ne.png"

                   alt="A Bootiful Podcast"/>
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
    <!--    -->
    <section class="section" id="latest-podcasts">
      <div class="heading-section"><h5> Latest Podcasts</h5><a
          name="latest-episodes"></a></div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="latest-ep-item">
              <div class="photo"><img src="/assets/images/default.jpg" alt=""/>
              </div>
              <div class="content"><h4><a
                  href="#"> Spring Boot 2.4, and then living legend, CTO, and friend John Davies </a>
              </h4>
                <P><strong> 11/12/2020</strong></P>
                <p>
                <p>Hi, Spring fans! Welcome to another installment of a <em>Bootiful Podcast</em>! In this installment
                  <a href="http://twitter.com/starbuxman">Josh Long (@starbuxman)</a> looks at the week that was, talks
                  about the JUST released Spring Boot 2.4, and then talks to industry legend and larger-than-life friend
                  <a href="http://twitter.com/jtdavies">John Davies (@jtdavies)</a></p>
                <a href="#" id="top3-play-8453ecf1-6df9-4c36-aa7c-2614beec8c8b"
                   class="listen-btn clicked"><span
                    class="vid-icon-span"><i
                    class="fas fa-play"></i></span>Listen
                  Now</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="latest-ep-item">
              <div class="photo"><img src="/assets/images/default.jpg" alt=""/>
              </div>
              <div class="content"><h4><a
                  href="#"> Spring legend Thomas Risberg on JDBC, Spring Cloud Data Flow, Kubernetes and so much
                more </a>
              </h4>
                <P><strong> 11/05/2020</strong></P>
                <p>
                <p>Hi, Spring fans! In this episode Josh talks to Spring legend <a href="http://twitter.com/trisberg">Thomas
                  Risberg (@trisberg)</a>.</p>
                <a href="#" id="top3-play-dc4a4262-a7e2-4af0-879d-328a57fd86b4"
                   class="listen-btn clicked"><span
                    class="vid-icon-span"><i
                    class="fas fa-play"></i></span>Listen
                  Now</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="latest-ep-item">
              <div class="photo"><img src="/assets/images/default.jpg" alt=""/>
              </div>
              <div class="content"><h4><a
                  href="#"> Spring Test Framework lead Sam Brannen </a>
              </h4>
                <P><strong> 10/29/2020</strong></P>
                <p>
                <p>Hi Spring fans! This week, <a href="http://twitter.com/starbuxman">Josh Long (@starbuxman)</a> talks
                  to legendary Spring Test Framework lead and JUnit contributor <a
                      href="http://twitter.com/sam_brannen">Sam Brannen (@sam_brannen)</a></p>
                <a href="#" id="top3-play-a07248d7-4aa3-4e90-bb45-0c90ab8671f3"
                   class="listen-btn clicked"><span
                    class="vid-icon-span"><i
                    class="fas fa-play"></i></span>Listen
                  Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--    -->
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
            <p class="copyrights"> All rights reserved for <EM>A Bootiful
              Podcast</EM> 2019-2020 </p>
          </div>
          <div class="col-md-4 col-hide"><a href="#top" id="scrollTop"
                                            class="button-scroll-top"> <img
              src="/assets/images/scrollTop.png"
              alt="Scroll to the top of the page"/> </a></div>
        </div>
      </div>
    </footer>


  </div>
</template>
<script>

export default {

  name: 'App',

  mounted() {
  },

  async created() {
    console.info('Launching BootifulPodcast.fm ')
    console.log( this.$store)
    await this.$root.$data .podcastService.load()
  },

  methods: {},

  data() {
    return {}
  },

  components: {}

}
</script>
