<script lang="tsx">
import { Component as VueComponent } from 'vue-tsx-support'
import { Component, Prop } from 'vue-property-decorator'

interface IPorps {
  item?: any
}

@Component
export default class ListItem extends VueComponent<IPorps> {
  @Prop({ type: Object, default: () => {} })
  item!: any

  private chatIcon = require('@/assets/chat.svg')

  normalizeTime(value:string|number) {
    let _time = parseInt(value + '000', 10)
    let date = new Date(_time)
    let y = date.getFullYear() + '-'
    let m = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
    let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    return y + m + d
  }

  render() {
    return (
      <div class="v-list__item">
        <div class="v-list__detail">
          <img src={ this.item.member.avatar_large } class="v-list__img"/>
            <div class="v-list__desc">
                <span class="v-list__desc--name">{ this.item.member.username }</span>
                <span class="v-list__desc--time">
                  { this.normalizeTime(this.item.created) }
                </span>
            </div>
            <div class="v-list__node">
                <span class="v-list__node--title">
                  { this.item.node.title }
                </span>
                <span class="v-list__node--count">
                    <img src={this.chatIcon}/>
                    {this.item.replies}
                </span>
            </div>
        </div>
        <div class="v-list__content">
            {this.item.title}
        </div>
      </div>
    )
  }
}
</script>

<style lang="stylus">
  .v-list__item
    height 240px
    margin-bottom 16px
    padding 0 20px
    border-radius 12px
    background-color #fff
    .v-list__detail
      position relative
      display flex
      align-items center
      height 120px
      padding-top 20px
      .v-list__img
        width 110px
        height 110px
        border-radius 50%
        margin-right 20px
      .v-list__desc
        display flex
        flex-direction column
        justify-content space-around
        height 100%
        .v-list__desc--name
          font-size 36px
          color #101010
        .v-list__desc--time
          font-size 28px
          color #b1b1b1
    .v-list__node
      position absolute
      top 0
      right 0
      display flex
      flex-direction column
      padding-top .2rem
      text-align center
      .v-list__node--title
        display inline-block
        padding 8px
        font-size 24px
        border-radius 4px
        color #b7b7b7
        background-color #eee
      .v-list__node--count
        display inline-block
        padding 8px
        text-align right
        font-size 24px
        color #b7b7b7
        img
          width 28px
          height 28px
          position relative
          top 4px
    .v-list__content
      width 100%
      height 100px
      padding-top 20px
      line-height 40px
      font-size 28px
      color #101010
      text-align left
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp 2
      -webkit-box-orient vertical
</style>
