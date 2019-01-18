<template>
  <div id="app">
    <keep-alive include="/Hot|Now|Nodes/">
      <router-view/>
    </keep-alive>
    <footer-nav :home="!isShowBottomBar"></footer-nav>
  </div>
</template>
<script>
import FooterNav from '@/components/Footer'

export default {
  computed: {
    isShowBottomBar() {
      let routes = ['Hot', 'Now', 'Nodes']
      return routes.includes(this.$route.name)
    },
  },
  components: {
    FooterNav,
  },
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    text-decoration-line none
    &.router-link-exact-active
      color blue
</style>
