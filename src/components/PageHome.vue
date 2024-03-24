<!-- eslint-disable vue/require-v-for-key -->
<template>
<div v-for="thread in threads" :key="thread.id" class="col-large push-top">
   <h1>{{thread.title}}</h1>
    <div  class="post-list">
      <div v-for="postId in thread.posts" :key="postId">
        <p> {{userById(postById(postId).userId).name}}</p>
        <p>{{postById(postId).text}}</p>
      </div>

      <div class="post" v-for="postId in thread.posts" :key="postId">
           <div class="user-info">
              <a href="#" class="user-name">{{userById(postById(postId).userId).name}}</a>
              <a href="#">
                <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="" /> <!--"http://i.imgur.com/s0AzOkO.png"-->
              </a>
              <p class="desktop-only text-small">107 posts</p>
           </div>
           <div class="post-content">
              <div>
                <p>
                  Lorem ipsum content  Lorem ipsum content  Lorem ipsum content
                </p>
              </div>
            <a href="#" style="margin-left: auto;" class="link-unstyled" title="make a change"><i class="fa fa-pencil"></i></a>
           </div>
      </div>
    </div>
</div>

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
import { ref } from 'vue' // removed reactive
const threads = ref(sourceData.threads) // if threads is underlined, update you package.json // npm i eslint-plugin-vue@8 if you used 7 version as for i used": "^8.0.3
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
