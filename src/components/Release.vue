<script lang="tsx">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Toptip extends Vue {
  @Prop({ default: false, type: Boolean })
  loading!: boolean

  render() {
    return (
      <div class="top-tip" style={{ top: '-50px', height: '50px' }}>
        {this.loading ? 'Loading...' : 'Refresh release'}
      </div>
    )
  }
}
</script>
