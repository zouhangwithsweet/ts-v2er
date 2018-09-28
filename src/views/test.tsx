import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  i18n: {}
})
export default class About extends Vue {
  @Prop() person!: object
  render() {
    return (
      <div class="about">
        5555
        <span>hahah</span>
      </div>
    )
  }
}
