<template>
    <div class="relative flex w-1440 h-1024 bg-white"> 

    <!-- Left Menu  -->
    <div class="w-260 h-1024">
      <PostsMenu :user="user"/>
    </div>
    <!-- Right  Content -->
    <div class="w-[1180px] h-1024 ">
        <GoHome/>
        <div class="flex flex-col items-start w-[1124px] h-[896px] absolute left-[288px] top-[100px]">
          <PostItem v-for="post in posts" :post="post" :key="post.id"/>

        </div>


        
    </div>
    </div>
</template>

<script setup>
import PostsMenu from '../components/left-menu/PostsMenu.vue';
import GoHome from '../components/GoHome.vue';
import PostItem from '../components/PostItem.vue';
import { useRoute } from 'vue-router'

const users = JSON.parse(localStorage.getItem('users'));
// console.log(users);

const route = useRoute()
const user = users.find((user) => user.id === Number(route.params.id))

const posts = user.posts
// console.log(posts);




</script>

<style scoped>

</style>