<script lang="tsx">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Scroller from './Scroller.vue'
import Toptip from './Release.vue'

@Component
export default class List extends Vue {
  $refs!: { scroller: Scroller }
  @Prop({ type: Array, default: () => [] }) data!: any[]

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
            <Toptip loading={this.loading}/>
            66666
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
