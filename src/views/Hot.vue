<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'
import { getHotList } from '@/api'

interface IData {
  [k:string]: any
}

@Component
export default class Hot extends Vue {
  data: Array<IData> = []
  $refs!: {list: List}
  async mounted() {
    this.$loading()
    let resp = await getHotList()
    this.data = resp
    this.$loading.hide()
  }

  async fetchData() {
    let resp = await getHotList()
    this.data = resp
    this.$refs.list.finishPullDown()
  }

  render() {
    return (
      <div class="hot">
        <List
          ref='list'
          on-pullDown={ this.fetchData }
          with-data={() => (
            this.data.map((item:IData) => (
              <ListItem item={item}/>
            ))
          )}/>
      </div>
    )
  }
}
</script>

<style lang="stylus" scoped>
  .list-item
    font-size $font-size-medium
</style>
