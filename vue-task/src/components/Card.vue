<template>
    <!-- Card  -->
    <!-- navigate yap -->
    <div @click="goDetail" class="flex items-start py-[20px] px-[24px] gap-[10px] w-358 h-370 bg-white border border-solid border-border rounded-xl  cursor-pointer hover:shadow-spec">
        <div class="flex flex-col items-start gap-8 w-310 h-330">
            <div class="relative w-310 h-100">
                <div class="relative w-100 h-100 bg-white rounded-full overflow-hidden">
                    <div class="absolute w-183 h-122 -left-10 top-0 ">
                         <img :src="user.avatar" alt="" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="flex flex-col items-start gap-2 absolute w-[122px] h-[62px] left-[124px] top-[21px]">
                    <p class="w-auto h-auto flex items-center font-medium text-[18px] leading-[18px]">
                        {{ user.name }}
                    </p>
                    <p class="w-auto h-auto flex items-center font-light text-[14px] leading-[14px] text-subtitle">
                        {{ user.email }}
                    </p>
                    <p class="w-auto h-auto flex items-center font-light text-[14px] leading-[14px] text-subtitle">
                        {{ user.phone }}
                    </p>
                </div>
            </div>
            <div class="flex flex-col items-start gap-4 w-auto h-auto">
                <CardItem>
                    <template #icon><img src="@/assets/icons/map-pin-heart.svg" alt="Icon" /></template>
                    <template #headings>Location</template>
                    <template #address>{{ user.location }}</template>
                </CardItem>
                <CardItem>
                    <template #icon><img src="@/assets/icons/skyscraper.svg" alt="Icon" /></template>
                    <template #headings>Company</template>
                    <template #address>{{ user.company }}</template>
                </CardItem>
                 <CardItem>
                    <template #icon><img src="@/assets/icons/world-share.svg" alt="Icon" /></template>
                    <template #headings>Website</template>
                    <template #address>{{ user.website }}</template>
                </CardItem>

            </div>
        </div>
    </div>
</template>

<script setup>
// import users from '../data/users'
import CardItem from './CardItem.vue'

import { useRouter } from 'vue-router'
// defineProps bir değişkene atanırsa js alanında kullanılabilir.faka template kısmında her türlü kullanılabilir.
 const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
// console.log(props.user.name);
// bu kod 2 kez çıktı alıyor
const router = useRouter()
const goDetail =()=>{
    
return router.push({ name: 'todos-detail', params: { id: props.user.id }  })
// return router.push({ name: 'todos-detail', params: { id: props.user.id },props: { user: props.user }  })
}


</script>

<style lang="scss" scoped></style>
