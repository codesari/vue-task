<template>
  <!-- Left Menu -->
  <div
    class="flex flex-col justify-between items-center p-8 gap-763 absolute w-260 h-1024 left-0 top-0 bg-graylight border-r border border-border"
  >
    <div class="w-260 h-[292px]">
        <div class="flex flex-col items-start gap-5 w-[228px] h-[68px] absolute left-[16px] ">
            <div class="w-[211px] h-[48px]">
                <div class="w-[159px] h-[48px]">
                    <div class="absolute w-[48px] h-[48px] bg-white rounded-full overflow-hidden">
                    <div class="absolute w-[95px] h-[63px] -left-[47px] top-0 bg-[url('@/assets/images/pretty-small.png')]"></div>
                </div>
                <div class="flex flex-col absolute left-[52px]">
                    <p class="text-title font-medium text-lg leading-7">Jane Doe</p>
                    <p class=" text-subtitle font-light text-sm leading-[14px] underline ">jane@lorem.com </p>
                </div>
                
                </div>
            </div>
            <div class="w-[228px] border border-border"></div>

        </div>
        <div class="flex flex-col items-start gap-6 absolute w-[260px] h-[168px] top-[150px]">
        <ItemDeactive>
          <template #title>Todos</template>
          <template #icon><img src="@/assets/icons/checkup-list.svg" alt="Icon" /></template>
        </ItemDeactive>
        <ItemActive>
          <template #title>Posts</template>
          <template #icon><img src="@/assets/icons/notebook.svg" alt="Icon" /></template>
        </ItemActive>
        <ItemDeactive>
          <template #title>Albums</template>
          <template #icon><img src="@/assets/icons/photo-heart.svg" alt="Icon" /></template>
        </ItemDeactive>
        
        </div>
        
    </div>

    

    <div class="flex flex-col items-start gap-6 w-56 h-16">
      <div class="w-56 h-0 border-solid border border-border"></div>
      <div class="flex justify-center items-center gap-2 w-56 h-10">
        <div class="w-10 h-10 bg-[url('@/assets/images/n2mobil.png')]"></div>
        <span
          class="w-24 h-8 font-poppins font-bold text-2xl leading-8 flex items-center text-gray2"
          >N2Mobil</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import ItemActive from './ItemActive.vue';
import ItemDeactive from './ItemDeactive.vue';
</script>
