import { Vue, Component } from 'vue-property-decorator'
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'
import { getNowList } from '@/api'

interface IData {
  [k:string]: any
}

@Component
export default class Hot extends Vue {
  data: Array<IData> = []
  $refs!: {list: List}
  async mounted() {
    let resp = await getNowList()
    this.data = resp
  }

  async fetchData() {
    let resp = await getNowList()
    this.data = resp
    (this.$refs.list as any).finishPullDown()
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