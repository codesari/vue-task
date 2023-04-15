<template>
    <div class="relative flex w-1440 h-1024 bg-white"> 

    <!-- Left Menu  -->
    <div class="w-260 h-1024">
      <AlbumsMenu :user="user"/>
    </div>
    <!-- Right  Content -->
    <div class="w-[1180px] h-1024 ">
        <GoHistory>
            <template #title>Go Albums</template>
        </GoHistory>
        <div class="flex flex-wrap gap-5 items-start w-[1124px] max-h-[896px] absolute left-[288px] top-[100px]">
          <img v-for="photo in photos" :src="photo.url" alt="picture" class="w-60 h-60 object-cover">
          
        </div>
        


        
    </div>
    </div>
</template>

<script setup>
import AlbumsMenu from '../components/left-menu/AlbumsMenu.vue';
import GoHistory from '../components/GoHistory.vue';
import users from '../data/users'
import { useRoute } from 'vue-router'


const route = useRoute()
const user = users.find((user) => user.id === Number(route.params.id))

// const albumId = Number(route.params.albumId);



const album = user.albums.find((album) => album.id === Number(route.params.albumId));
const photos = album.photos;




// console.log(photos);


</script>

<style scoped>

</style>