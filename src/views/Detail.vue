<script lang="tsx">
import { Component } from 'vue-property-decorator'
import { Component as VueComponent } from 'vue-tsx-support'
import { getListHeader, getListDetail } from '@/api'

@Component
export default class Detail extends VueComponent<{}> {
  async fetchListDetail() {
    try {
      let resp:any = await getListDetail({
        topic_id: this.$route.params.id,
      }) as any
      console.log(resp)
    } catch (error) {
      this.$handleError(error)
    }
  }

  render() {
    return (
      <div class="detail-page"></div>
    )
  }
}
</script>
