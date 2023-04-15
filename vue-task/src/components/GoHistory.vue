<template>
    
    <div @click="go" class="flex items-center gap-6 absolute left-[288px] top-[42px] cursor-pointer">
        <img src="@/assets/icons/arrow-left.svg" alt="">
        <p class="font-semibold text-xl leading-5 text-title"><slot name="title"></slot></p>
    </div>
    
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const go = ()=>{
    return router.go(-1)
}
</script>