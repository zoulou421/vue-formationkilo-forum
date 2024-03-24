<!-- eslint-disable vue/require-v-for-key -->
<template>
 <div>Hello from  PageHome</div>
 <div v-for="thread in threads" :key="thread.id">
  <h1>{{thread.title}}</h1>
</div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  data () {
    return {
      threads: sourceData.threads
    }
  }
}
</script>

<style scoped>

</style>
