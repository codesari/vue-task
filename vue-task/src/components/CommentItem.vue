<template>
    <div class="flex w-full h-auto gap-4 p-1 mb-5 overflow-hidden">
                <!-- avatar -->
                <div class="w-[48px] h-[48px] bg-white rounded-full overflow-hidden">
                  <slot name="img"></slot>
                </div>
                <div class="flex flex-col w-[300px] h-auto gap-3">
                  <p class="font-medium text-sm leading-[14px] tracking-tight text-title"><slot name="name"></slot></p>
                  <p class="font-roboto font-normal text-sm leading-5 text-subtitle">
                    <slot name="comment"></slot>
                  </p>
                </div>
              </div>
</template>