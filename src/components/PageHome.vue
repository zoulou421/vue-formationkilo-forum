<!-- eslint-disable vue/require-v-for-key -->
<template>
 <div>Hello from  PageHome</div>
 <div v-for="thread in threads" :key="thread.id">
   <h1>{{thread.title}}</h1>
   <div v-for="postId in thread.posts" :key="postId">
    <p>{{users.find(u=>u.id===posts.find(p=>p.id===postId).userId).name}}</p>
    <p>{{posts.find(p=>p.id===postId).text}}</p>
  </div>
 </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>

<style scoped>

</style>
