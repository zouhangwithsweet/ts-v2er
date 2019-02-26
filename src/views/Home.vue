<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
  // i18n: {}
})
export default class Home extends Vue {}
</script>
