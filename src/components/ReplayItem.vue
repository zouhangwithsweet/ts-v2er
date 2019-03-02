<script lang="tsx">
import { Prop, Component } from 'vue-property-decorator'
import { Component as VueComponent } from 'vue-tsx-support'
import { repliyItem } from '@/views/Detail.vue'

interface IProps {
  item: repliyItem;
}

interface IEvent {
  clickItem?: () => void;
}

@Component
export default class ReplayItem extends VueComponent<IProps, IEvent> {
  $refs!: { detail: HTMLElement }
  @Prop() item!: repliyItem

  mounted() {
    this.$refs.detail.innerHTML = this.item.content_rendered
  }

  normalizeTime(value:string|number) {
    let _time = parseInt(value + '000', 10)
    let date = new Date(_time)
    let y = date.getFullYear() + '-'
    let m = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
    let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    let current = Date.now()
    let divd = (current - _time) / 1000
    if (divd < 60) {
      return `${divd.toFixed(0)}秒前`
    } else if (divd >= 60 && divd < 60 * 60) {
      return `${(divd / 60).toFixed(0)}分钟前`
    } else if (divd >= 60 * 60) {
      return `${(divd / (60 * 60)).toFixed(0)}小时前`
    }
    return y + m + d
  }

  render() {
    return (
      <div class="replay-item">
        <img src={this.item.member.avatar_large} class="user-avatar"/>
        <div class="item-content">
          <div class="user-name">
            {this.item.member.username}
          </div>
          <div class="replay-time">
            {this.normalizeTime(this.item.last_modified)}
          </div>
          <div class="item-detail" ref="detail">
          </div>
        </div>
      </div>
    )
  }
}
</script>

<style lang="stylus" scoped>
.replay-item
  background-color #ffffff
  font-size 28px
  display flex
  align-items flex-start
  padding 20px
  padding-right 8px
  .user-avatar
    width 60px
    height 60px
    border-radius 100%
    margin-right 30px
    flex 0 0 60px
  .item-content
    flex 1
    position relative
    color #666666
    &::after
      content ''
      position absolute
      width 200%
      height 2px
      bottom -20px
      background-color #cccccc
      transform scale(.5)
      transform-origin left center
    .user-name, .replay-time
      margin-bottom 8px
    .item-detail
      line-height 32px
      color #101010
      >>> img
        max-width 50%
</style>
