<script lang="tsx">
import { Component as VueComponent } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'

@Component
export default class Loading extends VueComponent<{}> {
  show:boolean = false

  close() {
    this.show = false
    this.$emit('close')
  }

  mounted() {
    this.$nextTick(() => {
      let cLeft:any = document.getElementById('cLeft')
      let cCenter:any = document.getElementById('cCenter')
      let cRight:any = document.getElementById('cRight')
      let currentAnimationTime = 0
      const centreY = 75
      const amplitude = 10
      function animate() {
        cLeft.setAttribute('cy',
            centreY + (amplitude * (Math.sin(currentAnimationTime))))
        cCenter.setAttribute('cy',
            centreY + (amplitude * (Math.sin(currentAnimationTime - 1))))
        cRight.setAttribute('cy',
            centreY + (amplitude * (Math.sin(currentAnimationTime - 2))))
        currentAnimationTime += 0.15; requestAnimationFrame(animate)
      }
      animate()
    })
  }

  render() {
    return (
      <div class={{ hide: !this.show, loading: true }}>
        <svg>
          <circle id="cLeft" cx="120" cy="75" r="10" fill="#FF3446"/>
          <circle id="cCenter" cx="150" cy="75" r="10" fill="#FF3446"/>
          <circle id="cRight" cx="180" cy="75" r="10" fill="#FF3446"/>
        </svg>
      </div>
    )
  }
}
</script>

<style lang="stylus" scoped>
  .loading
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    display flex
    justify-content center
    align-items center
    transform scale(.4)
  .hide
    display none
</style>
