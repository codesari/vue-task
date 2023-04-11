<template>
    <!-- Card  -->
    <div class="flex items-start py-[20px] px-[24px] gap-[10px] w-358 h-370 bg-white border border-solid border-border rounded-xl  hover:shadow-spec">
        <div class="flex flex-col items-start gap-8 w-310 h-330">
            <div class="relative w-310 h-100">
                <div class="relative w-100 h-100 bg-white rounded-full overflow-hidden">
                    <div class="absolute w-183 h-122 -left-10 top-0 bg-[url('@/assets/images/pretty.png')]"></div>
                </div>
                <div class="flex flex-col items-start gap-2 absolute w-[122px] h-[62px] left-[124px] top-[21px]">
                    <p class="w-auto h-auto flex items-center font-medium text-[18px] leading-[18px]">
                        Jane Doe
                    </p>
                    <p class="w-auto h-auto flex items-center font-light text-[14px] leading-[14px] text-subtitle">
                        jane@lorem.com
                    </p>
                    <p class="w-auto h-auto flex items-center font-light text-[14px] leading-[14px] text-subtitle">
                        +90 555 678 12 23
                    </p>
                </div>
            </div>
            <div class="flex flex-col items-start gap-4 w-auto h-auto">
                <CardItem>
                    <template #icon><img src="@/assets/icons/map-pin-heart.svg" alt="Icon" /></template>
                    <template #headings>Location</template>
                    <template #address>Timko sokak no:2 Yeni Mahalle / Ankara </template>
                </CardItem>
                <CardItem>
                    <template #icon><img src="@/assets/icons/skyscraper.svg" alt="Icon" /></template>
                    <template #headings>Company</template>
                    <template #address>Timko sokak no:2 Yeni Mahalle / Ankara</template>
                </CardItem>
                 <CardItem>
                    <template #icon><img src="@/assets/icons/world-share.svg" alt="Icon" /></template>
                    <template #headings>Website</template>
                    <template #address>jane.doe.com</template>
                </CardItem>

            </div>
        </div>
    </div>
</template>

<script setup>
import CardItem from './CardItem.vue'
</script>

<style lang="scss" scoped></style>
