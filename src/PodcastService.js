import requestUtils from "@/RequestUtils";

export default class PodcastService {


    constructor(podcastApiUriRoot) {
        this.podcastApiUrl = podcastApiUriRoot
        this.podcasts = [] // caches the data from the network request
        this.top3 = []
        this.latest = null
    }

    async readLatest() {
        const podcasts = await this.read()
        this.latest = podcasts [0]
        return this.latest
    }

    async readTop3() {
        const podcasts = await this.readPodcasts()
        console.assert(podcasts.length >= 3)
        this.top3 = [podcasts[0], podcasts[1], podcasts[2]]
        return this.top3
    }


    async readPodcastById(id) {
        const p = await this.readPodcasts()
        return p.filter((p) => p.id === id) [0]
    }

    async readPodcastByUid(uid) {
        const p = await this.readPodcasts()
        return p.filter((p) => p.uid === uid) [0]
    }

    async readPodcasts() {
        if (this.podcasts.length === 0) {
            await this.load()
        }
        return this.podcasts
    }

    async load() {
        this.podcasts = await requestUtils
            .jsonRequest(
                this.podcastApiUrl + 'site/podcasts',
                {
                    method: 'GET',
                    headers: {'Accept': 'application/json'}
                }
            )

        this.podcasts.sort((a, b) => {
            return b.date - a.date
        })

        return this.podcasts
    }

}
