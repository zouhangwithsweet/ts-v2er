<script lang="tsx">
import { Component } from 'vue-property-decorator'
import { Component as VueComponent } from 'vue-tsx-support'
import { getListHeader, getListDetail } from '@/api'

@Component
export default class Detail extends VueComponent<{}> {
  private topicDetail: any = null
  private replaies: any = null
  mounted() {
    this.fetchListDetail()
  }
  async fetchListDetail() {
    try {
      let [topicDetail, replaies] = await Promise.all([
        getListHeader({
          id: this.$route.params.id,
        }),
        getListDetail({
          topic_id: this.$route.params.id,
        }),
      ])
      console.log(topicDetail, replaies)
      this.topicDetail = topicDetail
      console.log(this.topicDetail)
      this.replaies = replaies
    } catch (error) {
      this.$handleError(error)
    }
  }

  render() {
    return (
      <div class="detail-page">
        {this.topicDetail && this.topicDetail[0].id}
      </div>
    )
  }
}
</script>
