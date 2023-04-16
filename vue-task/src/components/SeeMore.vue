<template>
  <div class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-40">
    <div
      class="flex flex-col gap-[10px] py-9 px-8 w-[1024px] h-[609px] bg-white shadow rounded-3xl"
    >
      <!-- post title and close button -->
      <div class="w-[960px] h-[24px] flex justify-between">
        <p class="text-2xl leading-6 font-medium text-title">{{ post.title }}</p>
        <img src="@/assets/icons/close.svg" alt="" @click="$emit('close')" class="cursor-pointer" />
      </div>
      <!-- content and comments  -->
      <div class="flex gap-3 w-[950px] h-[503px]">
        <!-- post body and scroll -->
        <div class="flex">
          <!-- post body -->
          <p
            class="w-[484px] h-[300px] text-sm leading-5 tracking-wide font-normal text-black opacity-70 p-6"
          >
            {{ post.body }}
          </p>
          <!-- scroll -->
          <div class="w-1 h-[200px] bg-border mt-6"></div>
        </div>
        <!-- comments -->
        <div class="flex flex-col gap-4 p-4 border-l border-solid border-border">
          <!-- comments heading -->
          <p class="text-xl leading-8 font-semibold text-title">Comments</p>
          <!-- comments and users -->
          <div class="flex flex-col w-[370px] h-[439px]">
            <!-- user and his/her comment -->
            <CommentItem>
              <template #name>Leyla SELİM</template>
              <template #img
                ><img src="@/assets/images/leyla.png" alt="" class="w-full h-full object-cover"
              /></template>
              <template #comment>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quisquam sequi fugit esse ullam nam a enim vitae laudantium necessitatibus?</template>
              
            </CommentItem>
            <CommentItem>
              <template #name>Nazlı UYSAL</template>
              <template #img
                ><img src="@/assets/images/woman.png" alt="" class="w-full h-full object-cover"
              /></template>
              <template #comment> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dignissimos! </template>
            </CommentItem>
            <CommentItem>
              <template #name>Jhon Doe</template>
              <template #img
                ><img src="@/assets/images/man.png" alt="" class="w-full h-full object-cover"
              /></template>
              <template #comment>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus, asperiores maiores excepturi consequuntur ducimus autem assumenda atque? Voluptates minima accusantium odio. Aperiam laudantium asperiores unde minima placeat. Et dolores possimus illo, minus obcaecati ea quibusdam aliquid cumque numquam nesciunt dicta nisi nulla totam doloremque, ad saepe vitae aperiam aliquam. Possimus aliquid impedit quibusdam? Laboriosam vel iste ducimus incidunt voluptates, neque veniam consectetur fugit. Aspernatur omnis rerum, tempore dignissimos itaque sapiente sed voluptate sunt non ab aliquam provident, exercitationem repudiandae, dolorem debitis ratione! Officia, magni impedit. Quam velit voluptas doloribus quaerat mollitia doloremque, inventore vitae atque, harum natus neque. Repudiandae!</template>
            </CommentItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CommentItem from './CommentItem.vue'
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
// console.log(props.post)
</script>
