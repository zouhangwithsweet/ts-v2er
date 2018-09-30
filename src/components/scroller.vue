<script lang="tsx">
import { Prop, Component, Watch } from 'vue-property-decorator'
import { Component as VueComponent } from 'vue-tsx-support'
import { VNode } from 'vue'
import BScroll, { Position } from 'better-scroll'

interface IEvents {
  onPullingDown: () => void
  onPullingUp: () => void
  onTouchEnd: () => void
  onScroll: (pos: Position) => void
  onScrollToEnd: () => void
  onBeforeScroll: () => void
}

interface IProps {
  probeType?: number
  click?: boolean
  data?: any[]
  listenScroll?: boolean
  pullup?: boolean
  beforeScroll?: boolean
  pullDownRefresh?: boolean
  pullUpLoad?: boolean
  touchEnd?: boolean
  refreshDelay?: number
  withPosition?: (pos: Position) => VNode
}

@Component
export default class Scroller extends VueComponent<IProps, IEvents> {
  scroll!: BScroll
  pos: Position = { x: 0, y: 0 }
  $refs!: { wrapper: HTMLDivElement }
  @Prop() withPosition?: (pos: Position) => VNode
  @Prop({ default: 1, type: Number })
  probeType!: number
  @Prop({ default: true, type: Boolean })
  click!: boolean
  @Prop({ default: null, type: Array })
  data!: any[]
  @Prop({ default: false, type: Boolean })
  listenScroll!: boolean
  @Prop({ default: false, type: Boolean })
  pullup!: boolean
  @Prop({ default: false, type: Boolean })
  beforeScroll!: boolean
  @Prop({ default: true, type: Boolean })
  pullDownRefresh!: boolean
  @Prop({ default: true, type: Boolean })
  pullUpLoad!: boolean
  @Prop({ default: false, type: Boolean })
  touchEnd!: boolean
  @Prop({ default: 20, type: Number })
  refreshDelay!: number

  @Watch('data')
  dataOnChange() {
    setTimeout(() => {
      this.refresh()
    }, this.refreshDelay)
  }

  mounted() {
    this._initBscroll()
  }
  _initBscroll() {
    if (!this.$refs.wrapper) {
      return
    }
    const options = {
      probeType: this.probeType,
      click: this.click,
    }
    if (this.pullDownRefresh) {
      Object.assign(options, {
        pullDownRefresh: {
          threshold: 90, // 当下拉到超过顶部 90px 时，触发 pullingDown 事件
          stop: 50, // 刷新数据的过程中，回弹停留在距离顶部还有 50px 的位置
        },
      })
    }
    if (this.pullUpLoad) {
      Object.assign(options, {
        pullUpLoad: {
          threshold: -20, // 在上拉到超过底部 20px 时，触发 pullingUp 事件
        },
      })
    }

    this.scroll = new BScroll(this.$refs.wrapper, options)

    // 下拉刷新
    if (this.pullDownRefresh) {
      this.scroll.on('pullingDown', () => {
        // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
        this.$emit('pullingDown')
      })
    }
    if (this.pullUpLoad) {
      // 上拉加载
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
    // touchEnd
    if (this.touchEnd) {
      this.scroll.on('touchEnd', (pos: Position) => {
        this.$emit('touchEnd')
        // if (pos.y > 50) {
        //   this.$emit('touchEnd')
        // }
      })
    }
    if (this.listenScroll) {
      let me = this
      this.scroll.on('scroll', (pos: Position) => {
        this.pos = Object.assign({}, this.pos, pos)
        me.$emit('scroll', pos)
      })
    }
    if (this.pullup) {
      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y <= this.scroll.maxScrollY + 50) {
          this.$emit('scrollToEnd')
        }
      })
    }
    if (this.beforeScroll) {
      this.scroll.on('beforeScrollStart', () => {
        this.$emit('beforeScroll')
      })
    }
  }
  enable() {
    this.scroll && this.scroll.enable()
  }
  disable() {
    this.scroll && this.scroll.disable()
  }
  refresh() {
    this.scroll && this.scroll.refresh()
  }
  scrollTo(x: number, y: number) {
    this.scroll && this.scroll.scrollTo(x, y)
    this.pos = { x, y }
  }
  scrollToElement() {
    this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
  }
  render() {
    return (
      <div class="scroll-wrapper" ref="wrapper">
        {this.$slots.default}
      </div>
    )
  }
}
</script>

<style lang="stylus">
  .scroll-wrapper
    position fixed
    top 0
    bottom 0
    left 0
    right 0
</style>
