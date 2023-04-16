<template>
    <div class="flex items-center gap-8 w-260 h-10 border-r border-border cursor-pointer">
    
      <div  class="w-2 h-10"></div>
      <!-- Icon and Text -->
      <div class="flex items-center gap-3 w-32 h-7">
        <div class="w-6 h-6"><slot name="icon"></slot></div>
        <span class="w-24 h-7 font-poppins font-normal text-lg flex items-center text-[#00000073]"
          ><slot name="title"></slot></span
        >
      </div>
    </div>
</template>

