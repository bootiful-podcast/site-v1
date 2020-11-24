import Vue from 'vue'
// import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueRouter from 'vue-router'
// import CreateEpisodePage from "@/pages/CreateEpisodePage";
// import SearchPage from "@/pages/SearchEpisodePage";
import App from "@/App";
import PodcastService from "@/PodcastService";
// import LoginPage from "@/pages/LoginPage";
// import LoginService from "./LoginService"
// import SearchService from "@/PodcastService";
// import EpisodeService from "@/EpisodeService";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

function isEmpty(comment) {
  if (typeof comment === 'undefined') {
    return true;
  } else if (comment === null) {
    return true;
  }
  return false;
}

const mode = isEmpty(process.env.VUE_APP_BP_MODE) ? 'development' : process.env.VUE_APP_BP_MODE
console.log('mode: ', mode)

const rootUrl = ((u) => (u.endsWith('/')) ? u : u + '/')(process.env.VUE_APP_SERVICE_ROOT)
const podcastService = new PodcastService(rootUrl)
const store = {podcastService: podcastService}

new Vue({data: store, render: h => h(App)}).$mount('#app')
