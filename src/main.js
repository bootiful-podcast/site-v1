import Vue from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from "@/App";
import PodcastService from "@/PodcastService";


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
console.log('API URL: ')
const podcastService = new PodcastService(rootUrl)
const store = {podcastService: podcastService, rootUrl: rootUrl}

new Vue({data: store, render: h => h(App)}).$mount('#app')
