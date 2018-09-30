<script lang="tsx">
import { Component as VueComponent } from 'vue-tsx-support'
import { Component, Prop } from 'vue-property-decorator'

interface IProps {
  loading?: boolean,
  message?: string,
}

@Component
export default class Toptip extends VueComponent<IProps> {
  @Prop({ default: false, type: Boolean })
  loading!: boolean

  @Prop({ type: String })
  message!: string

  render() {
    return (
      <div class="top-tip" style={{ top: '-50px', height: '50px' }}>
        {this.loading ? 'Loading...' : 'Refresh release'}
        {this.message}
      </div>
    )
  }
}
</script>
