<template>
    <div class="relative flex w-1440 h-1024 bg-white"> 

    <!-- Left Menu  -->
    <div class="w-260 h-1024">
      <DetailMenu/>
    </div>
    <!-- Right  Content -->
    <div class="w-[1180px] h-1024 ">
        <GoHome/>
        <div id="todos" class="flex flex-col items-start absolute left-[296px] top-[156px]">
            <div class="w-[653px] h-[48px] flex items-center">
                <input type="checkbox" name="" id="checkbox1" class="w-[18px] h-[18px] accent-primary ">
            <label for="checkbox1" class="font-normal text-sm leading-5 text-gray2 ml-4  ">Lorem ipsum dolor sit amet consectetur adipisicing.</label>
            
            </div>
            <div class="w-[653px] h-[48px] flex items-center">
                <input  type="checkbox" name="" id="checkbox1" class="w-[18px] h-[18px] accent-primary ">
            <label for="checkbox1" class="font-normal text-sm leading-5 text-gray2 ml-4  ">Lorem ipsum dolor sit amet consectetur adipisicing.</label>
            
            </div>
            
            
            
           
        </div>

    </div>
    </div>
</template>

<script setup>
import DetailMenu from '../components/left-menu/DetailMenu.vue'
import GoHome from '../components/GoHome.vue';
</script>

<style  scoped>

</style>