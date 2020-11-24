import requestUtils from "@/RequestUtils";

export default class PodcastService {

  constructor(podcastApiUriRoot, tokenProducer) {
    this.podcastApiUrl = podcastApiUriRoot
    this.tokenProducer = tokenProducer

    console.log('the podcast API URL is ' + podcastApiUriRoot + '.')
  }

  async load() {
    const jsonOfAllPodcasts = await requestUtils.jsonRequest(this.podcastApiUrl + 'site/podcasts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    console.log('got the following podcasts...', jsonOfAllPodcasts)
    return jsonOfAllPodcasts

  }

}
