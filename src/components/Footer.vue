<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Component as VueComponent } from 'vue-tsx-support'

@Component
export default class FooterNav extends VueComponent<{}> {
  @Prop() home!:boolean

  get barType() {
    return this.home
  }
  private icons = [
    {
      icon: 'fire',
      name: '最热',
      path: '/hot',
    },
    {
      icon: 'clock',
      name: '最新',
      path: '/now',
    },
    {
      icon: 'location-arrow',
      name: '节点',
      path: '/nodes',
    },
  ]

  private arrows = [
    {
      icon: 'chevron-left',
      event: -1,
    },
    {
      icon: 'chevron-right',
      event: 1,
    },
  ]

  render() {
    return (
      <div class={{
        footer: true,
        child: this.barType,
      }}>
        {!this.barType && this.icons.map(item => <router-link class='footer-item' to={item.path}>
          <icon class='icon' name={item.icon} scale="1.2"></icon>
          {item.name}
        </router-link>)}
        {
          this.barType && this.arrows.map(item => <icon nativeOnClick={() => this.$router.go(item.event)} name={item.icon} scale="1.2"/>)
        }
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
  padding 6px 0
  height 96px
  bottom 0
  left 0
  right 0
  z-index 200
  background-color #fff
  box-shadow 0 0 8px 0 rgba(0,0,0,0.1)
  &.child
    justify-content center
    .fa-icon
      &:first-child
        margin-right 140px
  .footer-item
    flex 1
    height 100%
    display flex
    justify-content space-around
    align-items center
    flex-direction column
    font-size 20px
    color #101010
    text-decoration-line none
    &.router-link-active
      color $main-color
      .icon
        animation scale .25s ease-in-out

@keyframes scale
  0%
    transform scale(1.05)
  50%
    transform scale(1.1)
  100%
    transform scale(1)
</style>
