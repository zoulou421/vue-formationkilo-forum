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
import { reactive, ref } from 'vue'
const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
const users = ref(sourceData.users)

function postById (postId) {
  return posts.value.find(p => p.id === postId)
}
function userById (userId) {
  return users.value.find(p => p.id === userId)
}
</script>

<style scoped>

</style>
