<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import { Component as VueComponent } from 'vue-tsx-support'
import { getAllNodes } from '@/api'
import { Node } from '@/interface'

@Component
export default class Nodes extends VueComponent<{}> {
  private nodeList: Node[] = []
  async mounted() {
    const resp = await getAllNodes() as Node[]
    this.nodeList = resp
  }

  render() {
    return (
      <div class="node-page">
        <div class="title">
          Nodes
        </div>
        <div class="node-list">
        {this.nodeList.map((item:Node) => {
          return (
            <div class="node-item">
              <img src={item.avatar_large.includes('//cdn') ? item.avatar_large : require('@/assets/logo.png')} class="avatar"/>
              <div class="name">
                {item.name}
              </div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}
</script>

<style lang="stylus" scoped>
.node-page
  min-height calc(100vh - 96px)
  padding-bottom 96px
  background-color #fff
  .title
    margin-bottom 24px
    font-size 40px
    color #101010
  .node-list
    display flex
    justify-content space-between
    flex-wrap wrap
    padding 0 16px
    .node-item
      display flex
      justify-content start
      align-items center
      width 200px
      height 100px
      box-sizing border-box
      padding-left 16px
      box-shadow 0 1px 4px 0 rgba(0,0,0,0.24)
      border-radius 8px
      margin-bottom 16px
      .avatar
        width 60px
        height 60px
        margin-right 16px
      .name
        width 80px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        font-size 24px
</style>
