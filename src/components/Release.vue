<script lang="tsx">
import { Component as VueComponent } from 'vue-tsx-support'
import { Component, Prop } from 'vue-property-decorator'

interface IProps {
  loading?: boolean,
  message?: string,
  top?: string | number,
  height?: number,
}

@Component
export default class Toptip extends VueComponent<IProps> {
  @Prop({ default: false, type: Boolean })
  loading!: boolean

  @Prop({ type: String })
  message!: string

  @Prop()
  top?: string | number

  @Prop()
  height!: number

  render() {
    return (
      <div class="top-tip" style={{ top: `${this.top}px`, height: `${this.height}px` }}>
        {this.loading ? 'Loading...' : this.message}
      </div>
    )
  }
}
</script>
