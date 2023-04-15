<template>
    
          <div class="flex flex-col justify-end items-end py-5 px-8 w-full h-[176px] bg-white border-b-[1px] border-solid border-border">
            <div class="w-[1060px] h-full">
                <p class="text-title text-lg leading-5 font-medium">{{ post.title }}</p>
                <p class="text-title text-sm leading-5 font-normal tracking-wide mt-3 w-[600px] ">{{ post.body }}</p>

            </div>
            
            <div class="w-[131px] h-[32px] flex justify-around items-center cursor-pointer" @click="openModal">
                <p class="text-sm font-medium leading-5 text-title">See More</p>
                <img src="@/assets/icons/arrow-right.svg" alt="">
            </div>
            <PostDetailModal :visible="modalVisible" :title="modalTitle" :body="modalBody" @close-modal="closeModal" />
            
          </div>
</template>

<script setup>

import PostDetailModal from "./PostDetailModal.vue";
import { ref } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const modalVisible = ref(false);
const modalTitle = ref("");
const modalBody = ref("");

function openModal() {
  modalVisible.value = true;
  modalTitle.value = props.post.title;
  modalBody.value = props.post.body;
}

function closeModal() {
  modalVisible.value = false;
}

  localStorage.setItem('postTitle', props.post.title)
  localStorage.setItem('postBody', props.post.body)

</script>