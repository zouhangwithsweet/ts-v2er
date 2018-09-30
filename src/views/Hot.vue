<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import List from '@/components/List.vue'

@Component
export default class Hot extends Vue {
  data = [
    {
      name: 555,
    },
  ]

  render() {
    return (
      <div class="hot">
        <List list={this.data}/>
      </div>
    )
  }
}
</script>
