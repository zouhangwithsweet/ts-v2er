<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import List from '@/components/List.vue'
import { getHotList } from '@/api'

@Component
export default class Hot extends Vue {
  data: any = []

  async mounted() {
    let resp = await getHotList()
    console.log(resp)
    this.data = resp
  }

  render() {
    return (
      <div class="hot">
        <List data-list={this.data}/>
      </div>
    )
  }
}
</script>
