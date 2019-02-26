<script lang="tsx">
import { Component } from 'vue-property-decorator'
import { Component as VueComponent } from 'vue-tsx-support'
import { getListHeader, getListDetail } from '@/api'
import List from '@/components/List.vue'
import ReplayItem from '@/components/ReplayItem.vue'
import { Member, Iitem } from '@/interface'
import { Getter } from 'vuex-class'

export interface repliyItem {
  content?: string,
  'content_rendered': string,
  created: number,
  'last_modified': number,
  'member_id': number,
  'topic_id': number,
  member: Member,
}

@Component
export default class Detail extends VueComponent<{}> {
  $refs!: {list: List}
  private topicDetail: any = null
  private replaies: repliyItem[] = []
  private pageIndex: number = 1
  @Getter currentPost!: Iitem
  mounted() {
    this.fetchListDetail()
  }
  async fetchListDetail() {
    try {
      this.$loading()
      let replaies = await getListDetail({
        topic_id: this.$route.params.id,
        page: this.pageIndex++,
        page_size: 20,
      }) as repliyItem[]
      this.$loading.hide()
      this.replaies = [...this.replaies, ...replaies]
      this.$refs.list.finishPullUp()
      // todo
      this.$nextTick(() => {
        this.$refs.list.finishPullUp()
      })
    } catch (error) {
      this.$loading.hide()
      console.log(error)
    }
  }

  render() {
    return (
      <div class="detail-page">
        <List dataList={this.replaies} ref="list" onPullUp={this.fetchListDetail} pulldown={false} withData={
          () => {
            return (
              <div>
                <div class="detail-title">
                  <div class="title-content">{this.currentPost.title}</div>
                  <div class="user-name">
                    <img class="avatar" src={this.currentPost.member.avatar_large}/>
                    {this.currentPost.member.username}
                  </div>
                  <div class="content" domPropsInnerHTML={this.currentPost.content_rendered}></div>
                </div>
                {this.replaies.map((replay: repliyItem) => <ReplayItem
                  item={replay}
                  class={{ 'owner': this.currentPost.member.username === replay.member.username }}/>)}
              </div>
            )
          }
        }/>
      </div>
    )
  }
}
</script>

<style lang="stylus" scoped>
.title-content
  font-size 40px
  color #101010
.user-name
  padding 16px
  display flex
  align-items flex-end
  font-size 24px
  color #666
  .avatar
    margin-right 16px
.content
  font-size 28px
  p
    margin 0
.detail-title
  padding 16px
  margin-bottom 8px
  background-color #ffffff
  .avatar
    border-radius 50%
  .content
    >>> img
      width 80%
      display block
      margin 0 auto
.owner
  background-color rgba(92, 196, 20, 0.7)
</style>
