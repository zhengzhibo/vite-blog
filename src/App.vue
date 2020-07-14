<template>
  <router-view></router-view>
</template>

<script>
import { reactive,ref } from 'vue'
export default {
  name: 'App',
  setup(){
    const blog = reactive({
      title:'Vue Blog',
    })
    return { blog }
  }
}
</script>