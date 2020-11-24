import requestUtils from "@/RequestUtils";

export default class PodcastService {

  constructor(podcastApiUriRoot) {
    this.podcastApiUrl = podcastApiUriRoot
    console.log('the podcast API URL is ' + podcastApiUriRoot + '.')
  }

  async load() {
    return await requestUtils.jsonRequest(this.podcastApiUrl + 'site/podcasts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })

  }

}
