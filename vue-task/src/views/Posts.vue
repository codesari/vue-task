<template>
    <div class="relative flex w-1440 h-1024 bg-white"> 

    <!-- Left Menu  -->
    <div class="w-260 h-1024">
      <PostsMenu />
    </div>
    <!-- Right  Content -->
    <div class="w-[1180px] h-1024 ">
        <GoHome/>
        <div class="flex flex-col items-start w-[1124px] h-[896px] absolute left-[288px] top-[100px]">
          <PostTitle/>
          <PostTitle/>
          <PostTitle/>
          <PostTitle/>
          <PostTitle/>
         
        </div>


        
    </div>
    </div>
</template>

<script setup>
import PostsMenu from '../components/left-menu/PostsMenu.vue';
import GoHome from '../components/GoHome.vue';
import PostTitle from '../components/PostTitle.vue';
</script>

<style scoped>

</style>