<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'
import { getNowList } from '@/api'
import { Iitem } from '../interface'
import { Action } from 'vuex-class'

interface IData {
  [k:string]: any
}

@Component
export default class Hot extends Vue {
  data: Array<IData> = []
  $refs!: {list: List}
  @Action('upDateCurrentPost') upDateCurrentPost!: (item: Iitem) => void

  async mounted() {
    this.$loading()
    let resp = await getNowList()
    this.$loading.hide()
    this.data = resp
  }

  async fetchData() {
    let resp = await getNowList()
    this.data = resp
    this.$refs.list.finishPullDown()
    this.$refs.list.finishPullUp()
  }

  showDetail(item:Iitem) {
    this.upDateCurrentPost(item)
    this.$router.push({
      name: 'Detail',
      params: {
        id: `${item.id}`,
      },
    })
  }

  render() {
    return (
      <div class="hot">
        <List
          ref='list'
          on-pullDown={ this.fetchData }
          on-pullUp={ this.fetchData }
          dataList={this.data}
          withData={() => (
            this.data.map((item:IData) => (
              <ListItem item={item} on-click={this.showDetail}/>
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
