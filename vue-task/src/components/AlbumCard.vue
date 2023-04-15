<template>
    <div @click="goDetail" class="w-[360px] h-[332px] flex flex-col items-start p-5 gap-4 bg-white border border-solid rounded-xl border-border cursor-pointer hover:shadow-spec">
        <div class="w-[320px] h-[256px] flex flex-wrap">
            <img v-for="photo in photos" :src="photo.url" alt="picture1" class="w-1/2 h-1/2 object-cover" />
           
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  album: {
    type: Object,
    required: true
  },
  user: {
    type: Object,
    required: true
  }
})
// console.log(props.album.photos);
const photos = props.album.photos
const router = useRouter()
const goDetail =()=>{
    
return router.push({ name: 'album-photos',params: { id:props.user.id, albumId: props.album.id } })


}
</script>