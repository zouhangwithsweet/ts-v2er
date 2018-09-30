<template>
  <div id="app">
    <router-view/>
    <footer-nav></footer-nav>
  </div>
</template>
<script>
import FooterNav from '@/components/Footer'

export default {
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
  text-align center
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
