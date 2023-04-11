<template>
  <!-- Left Menu -->
  <div
    class="flex flex-col justify-between items-center p-8 gap-763 absolute w-260 h-1024 left-0 top-0 bg-graylight border-r border border-border"
  >
    <div class="flex items-center gap-8 w-260 h-10 bg-white border-r border-border">
      <!-- Rectangle -->
      <div class="w-2 h-10 bg-purple-700 rounded-r-lg"></div>
      <!-- Icon and Text -->
      <div class="flex items-center gap-3 w-32 h-7">
        <div class="w-6 h-6"><img src="@/assets/icons/users.svg" alt="Icon" /></div>
        <span class="w-24 h-7 font-poppins font-normal text-lg flex items-center text-primary"
          >Users</span
        >
      </div>
    </div>

    <div class="flex flex-col items-start gap-6 w-56 h-16">
      <div class="w-56 h-0 border-solid border border-border"></div>
      <div class="flex justify-center items-center gap-2 w-56 h-10">
        <div class="w-10 h-10 bg-[url('@/assets/images/n2mobil.png')]"></div>
        <span
          class="w-24 h-8 font-poppins font-bold text-2xl leading-8 flex items-center text-gray2"
          >N2Mobil</span
        >
      </div>
    </div>
  </div>
</template>
