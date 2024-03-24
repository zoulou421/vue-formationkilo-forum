<!-- eslint-disable vue/require-v-for-key -->
<template>
 <div>Hello from  PageHome</div>
 <div v-for="thread in threads" :key="thread.id">
   <h1>{{thread.title}}</h1>
   <div v-for="postId in thread.posts" :key="postId">
    <!--p>
       {{users.find(u=>u.id===posts.find(p=>p.id===postId).userId).name}}
    </p-->
    <!--p>
      {{//posts.find(p=>p.id===postId).text}}
    </p-->
    <p> {{userById(postById(postId).userId).name}}</p>
    <p>{{postById(postId).text}}</p>
  </div>
 </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { reactive } from 'vue'
const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)

function postById (postId) {
  return this.posts.find(p => p.id === postId)
}
function userById (userId) {
  return this.users.find(p => p.id === userId)
}
</script>

<style scoped>

</style>
