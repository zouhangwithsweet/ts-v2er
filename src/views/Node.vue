<script lang="tsx">
import { Component as VueComponent } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'
import { getNodeInfo } from '@/api'

@Component({
  name: 'Node',
})
export default class Node extends VueComponent<{}> {
  async mounted() {
    const resp = await getNodeInfo(this.$route.params.node) as any
    console.log(resp)
  }

  render() {
    return (
      <div class="node">
        node-item
      </div>
    )
  }
}
</script>
