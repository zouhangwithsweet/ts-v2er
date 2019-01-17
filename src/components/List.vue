<script lang="tsx">
import { Component as VueComponent } from 'vue-tsx-support'
import { Component, Prop } from 'vue-property-decorator'
import { VNode } from 'vue'
import Scroller from './Scroller.vue'
import TopTip from './Release.vue'

interface Iprop {
  tip?: string;
  dataList?: any[];
  withData(): any;
  pullup?: boolean;
  pulldown?: boolean;
}

interface IEvents {
  onPullDown: () => void
  onPullUp: () => void
  onTouchEnd: () => void
  onScroll: (pos: Position) => void
  onScrollToEnd: () => void
  onBeforeScroll: () => void
}

@Component
export default class List extends VueComponent<Iprop, IEvents> {
  $refs!: { scroller: Scroller }
  @Prop({ type: Array, default: () => [] }) dataList!: any[]

  @Prop({ type: String, default: null }) tip!: string

  @Prop() withData?: () => VNode

  @Prop({ type: Boolean, default: true }) pullup!: boolean

  @Prop({ type: Boolean, default: true }) pulldown!: boolean

  private loading: boolean = false

  private upLoading: boolean = false

  // pullup and finishpullup
  pullUp() {
    this.upLoading = true
    this.$emit('pullUp')
  }

  finishPullUp() {
    this.$refs.scroller.scroll.finishPullUp()
    this.$refs.scroller.scroll.refresh()
    this.upLoading = false
  }

  // pulldown and finishpulldown
  async pullDown() {
    this.loading = true
    this.$emit('pullDown')
  }

  finishPullDown() {
    this.$refs.scroller.scroll.finishPullDown()
    this.$refs.scroller.scroll.refresh()
    this.loading = false
  }

  render() {
    return (
      <div class="list-page">
        <Scroller
          ref="scroller"
          onPullingUp={this.pullUp}
          onPullingDown={this.pullDown}
          pullUpLoad={this.pullup}
          pullDownRefresh={this.pulldown}
        >
          <div class="scroller-inner">
            {this.pulldown && <TopTip loading={this.loading} message='Refresh release' top={-50} height={50}/>}
            {this.withData && this.withData()}
            {this.dataList.length > 0 && <TopTip class="relative" loading={this.upLoading} message="Loading more..."/>}
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
    &.relative
      position relative
</style>
