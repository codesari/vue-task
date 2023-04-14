<template>
    <div id="todo" class="flex items-center gap-8 w-260 h-10 bg-white border-r border-border">
      <!-- Rectangle -->
      <div id="rect" class=" w-2 h-10 bg-purple-700 rounded-r-lg "></div>
      <!-- Icon and Text -->
      <div class="flex items-center gap-3 w-32 h-7">
        <div class="w-6 h-6"><slot name="icon"></slot></div>
        <span class="w-24 h-7 font-poppins font-normal text-lg flex items-center text-primary"
          ><slot name="title"></slot></span
        >
      </div>
    </div>
</template>


