<script lang="tsx">
import { Component as VueComponent } from 'vue-tsx-support'
import { Component, Prop } from 'vue-property-decorator'
import Scroller from './Scroller.vue'
import TopTip from './Release.vue'

interface Iprop {
  tip?: string
  dataList?: any[]
}

@Component
export default class List extends VueComponent<Iprop> {
  $refs!: { scroller: Scroller }
  @Prop({ type: Array, default: null }) dataList!: any[]

  @Prop({ type: String, default: null }) tip!: string

  private loading: boolean = false

  pullUp() {
    setTimeout(() => {
      console.log('ok')
    }, 2000)
  }

  async pullDown() {
    this.loading = true
    setTimeout(() => {
      console.log('ok')
      this.loading = false
      this.$refs.scroller.scroll.finishPullDown()
    }, 2000)
  }

  render() {
    return (
      <div class="list-page">
        <Scroller
          ref="scroller"
          onPullingUp={this.pullUp}
          onPullingDown={this.pullDown}
        >
          <div class="scroller-inner">
            <TopTip loading={this.loading}/>
            {this.dataList.map(item => <span>{item.name}<br/></span>)}
          </div>
        </Scroller>
      </div>
    )
  }
}
</script>

<style lang="stylus">
.scroller-inner
  height 200vh
  position relative
  .top-tip
    position absolute
    width 100%
    display flex
    justify-content center
    align-items center
    font-size $font-size-small
    color $color-text-d
</style>
