<script lang="tsx">
import { Component } from 'vue-property-decorator'
import { Component as VueComponent } from 'vue-tsx-support'
import { getListHeader, getListDetail } from '@/api'
import List from '@/components/List.vue'
import { Member } from '@/interface'

interface repliyItem {
  content?: string,
  'content_rendered'?: string,
  created: number,
  'last_modified'?: number,
  'member_id'?: number,
  'topic_id'?: number,
  member: Member,
}

@Component
export default class Detail extends VueComponent<{}> {
  $refs!: {list: List}
  private topicDetail: any = null
  private replaies: repliyItem[] = []
  private pageIndex: number = 1
  mounted() {
    this.fetchListDetail()
  }
  async fetchListDetail() {
    try {
      let replaies = await getListDetail({
        topic_id: this.$route.params.id,
        page: this.pageIndex++,
        page_size: 20,
      }) as repliyItem[]
      this.replaies = [...this.replaies, ...replaies]
      this.$refs.list.finishPullUp()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div class="detail-page">
        <List ref="list" onPullUp={this.fetchListDetail} pulldown={false} withData={
          () => {
            return this.replaies.map((replay: repliyItem) => {
              return (
                <div class="content">{replay.content}</div>
              )
            })
          }
        }/>
      </div>
    )
  }
}
</script>

<style lang="stylus" scoped>
.content
  font-size 28px
</style>
