<script lang="tsx">
import { Component as VueComponent } from 'vue-tsx-support'
import { Component, Prop } from 'vue-property-decorator'
import { VNode } from 'vue'
import Scroller from './Scroller.vue'
import TopTip from './Release.vue'

interface Iprop {
  tip?: string
  dataList?: any[]
}

@Component
export default class List extends VueComponent<Iprop> {
  $refs!: { scroller: Scroller }
  @Prop({ type: Array, default: () => [] }) dataList!: any[]

  @Prop({ type: String, default: null }) tip!: string

  @Prop() withData?: () => VNode

  private loading: boolean = false

  // pullup and finishpullup
  pullUp() {
    this.$emit('pullUp')
  }

  finishPullUp() {
    this.$refs.scroller.scroll.finishPullUp()
  }

  // pulldown and finishpulldown
  async pullDown() {
    this.loading = true
    this.$emit('pullDown')
  }

  finishPullDown() {
    this.$refs.scroller.scroll.finishPullDown()
    this.loading = false
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
            {this.withData && this.withData()}
          </div>
        </Scroller>
      </div>
    )
  }
}
</script>

<style lang="stylus">
.scroller-inner
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
