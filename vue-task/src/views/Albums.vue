<template>
    <div class="relative flex w-1440 h-1024 bg-white"> 

    <!-- Left Menu  -->
    <div class="w-260 h-1024">
      <AlbumsMenu />
    </div>
    <!-- Right  Content -->
    <div class="w-[1180px] h-1024 ">
        <GoHome/>
        <div class="flex flex-col items-start w-[1124px] h-[896px] absolute left-[288px] top-[100px]">
          <h1>Albums Content</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum porro libero, deleniti blanditiis explicabo dicta. Odit cupiditate voluptatibus officia impedit inventore nisi dolorum dicta eligendi ullam et nobis deserunt dolore, dignissimos nulla similique vel. Rem fugit obcaecati suscipit quasi, explicabo repellat eos incidunt nisi exercitationem? Quod nesciunt illum, quibusdam aspernatur laudantium temporibus in doloremque voluptatum expedita deserunt laboriosam error commodi quis vitae eum quo eveniet mollitia iusto blanditiis, id cupiditate facilis soluta eaque similique. Nisi corporis alias deleniti labore dolorum excepturi, soluta accusantium rem delectus voluptate aperiam ipsam, distinctio corrupti sunt. Amet pariatur reiciendis sequi dolorem! Explicabo pariatur ratione labore?</p>
         
        </div>


        
    </div>
    </div>
</template>

<script setup>
import AlbumsMenu from '../components/left-menu/AlbumsMenu.vue';
import GoHome from '../components/GoHome.vue';

</script>

<style scoped>

</style>