import Vue from 'vue'
import LoadingComp from './Loading.vue'


const LoadingConstructor = Vue.extend(LoadingComp)
let seed = 1
const createInstance = (() => {
  let instance:any = null
  return (options:any) => {
    return instance || (instance = new LoadingConstructor({
      data: options
    }))
  }
})()

function Loading(options: any) {
  return new Promise((resolve, reject) => {
    const instance = createInstance(options)
    ;(Loading as any)._instance = instance

    const id = `confirm-${seed}`
    seed += 1

    instance.id = id
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    instance.vm.show = true

    // 关闭
    instance.$on('close', (result: any) => {
      resolve(result)
    })
  })
}

(Loading as any)._instance = null

Loading.hide = () => {
  let instance = (Loading as any)._instance
  if (instance && instance.show) {
    instance.close()
  }
}

;(Loading as any).install = (Vue: any) => {
  Vue.prototype.$loading = Loading
}

export default Loading
