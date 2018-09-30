<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import List from '@/components/List.vue'

@Component
export default class Hot extends Vue {
  data = [
    {
      name: 55588,
    },
    {
      name: 55588,
    },
    {
      name: 55588,
    },
  ]

  tip = '1'

  render() {
    return (
      <div class="hot">
        <List tip={this.tip} data-list={this.data}/>
      </div>
    )
  }
}
</script>
