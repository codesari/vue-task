<template>
  <div
    class="flex flex-col justify-end items-end py-5 px-8 w-full h-[176px] bg-white border-b-[1px] border-solid border-border"
  >
    <div class="w-[1060px] h-full">
      <p class="text-title text-lg leading-5 font-medium">{{ post.title }}</p>
      <p class="text-title text-sm leading-5 font-normal tracking-wide mt-3 w-[600px]">
        {{ post.body }}
      </p>
    </div>

    <div
      class="w-[131px] h-[32px] flex justify-around items-center cursor-pointer"
      @click="showModal = true"
    >
      <p class="text-sm font-medium leading-5 text-title">See More</p>
      <img src="@/assets/icons/arrow-right.svg" alt="" />
    </div>
  </div>
  <SeeMore v-if="showModal" @close="showModal=false" :post="post"/>
  
</template>

<script setup>
import { ref } from 'vue'
import SeeMore from './SeeMore.vue';

const showModal = ref(false)
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})


</script>
