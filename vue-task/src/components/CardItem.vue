<template>
     
                <div class="flex flex-col items-start gap-2 w-auto h-auto">
                    <div class="flex flex-row items-center gap-3">
                         <div><slot name="icon"></slot></div>
                         <p class="font-medium text-sm leading-[21px]"><slot name="headings"></slot></p>
                    </div>
                    <p class="w-[259px] h-[28px] font-light text-sm leading-[14px]"><slot name="address"></slot></p>
                </div>
            
</template>