<template>
    <div class="relative flex w-1440 h-1024 bg-white"> 

    <!-- Left Menu  -->
    <div class="w-260 h-1024">
      <AlbumsMenu :user="user"/>
    </div>
    <!-- Right  Content -->
    <div class="w-[1180px] h-1024 ">
        <GoHome/>
        <div class="flex flex-wrap gap-5 items-start w-[1124px] max-h-[896px] absolute left-[288px] top-[100px]">
          <AlbumCard v-for="album in albums" :key="album.id" :album="album" :user="user" />
          
        </div>
        


        
    </div>
    </div>
</template>

<script setup>
import AlbumsMenu from '../components/left-menu/AlbumsMenu.vue';
import GoHome from '../components/GoHome.vue';
import { useRoute } from 'vue-router'
import AlbumCard from '../components/AlbumCard.vue';

const route = useRoute()
const users = JSON.parse(localStorage.getItem('users'));
const user = users.find((user) => user.id === Number(route.params.id))
const albums = user.albums
console.log(albums);

</script>

<style scoped>

</style>