<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import List from '@/components/List.vue'

@Component
export default class Hot extends Vue {
  data: any = [
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

  created() {
    console.log('created')
    for (let i = 0; i < 100; i++) {
      this.data.push({
        name: i,
      })
    }
  }

  mounted() {
    console.log('mounted')
  }

  beforeDestroy() {
    console.log('i will destroy')
  }

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
