<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FooterNav extends Vue {
  private icons = [
    {
      icon: 'fire',
      name: '最热',
      path: '/hot',
    },
    {
      icon: 'clock-o',
      name: '最新',
      path: '/now',
    },
    {
      icon: 'location-arrow',
      name: '节点',
      path: '/nodes',
    },
  ]

  render() {
    return (
      <div class="footer">
        {this.icons.map(item => <router-link class='footer-item' to={item.path}>{item.name}</router-link>)}
      </div>
    )
  }
}
</script>

<style lang="stylus">
.footer
  display flex
  justify-content space-between
  align-items center
  position fixed
  height 96px
  bottom 0
  left 0
  right 0
  z-index 200
  background-color #fff
  .footer-item
    flex 1
    height 100%
    display flex
    justify-content space-around
    align-items center
    flex-direction column
    font-size 20px
    color #333
    text-decoration-line none
    &.router-link-active
      color red
</style>
