import requestUtils from "@/RequestUtils";

export default class PodcastService {

  constructor(podcastApiUriRoot) {
    this.podcastApiUrl = podcastApiUriRoot
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
