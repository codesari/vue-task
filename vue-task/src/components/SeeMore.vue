<template>
  <div class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-40">
    <div
      class="flex flex-col gap-[10px] py-9 px-8 w-[1024px] h-[609px] bg-white shadow rounded-3xl"
    >
      <!-- post title and close button -->
      <div class="w-[960px] h-[24px] flex justify-between">
        <p class="text-2xl leading-5 font-medium text-title">Post Title</p>
        <img src="@/assets/icons/close.svg" alt="" @click="$emit('close')" class="cursor-pointer"/>
      </div>
      <!-- content and comments  -->
      <div class="flex gap-3 w-[950px] h-[503px]">
        <!-- post body and scroll -->
        <div class="flex">
          <!-- post body -->
          <p
            class="w-[484px] h-[300px] text-sm leading-5 tracking-wide font-normal text-black opacity-70 p-6"
          >
            Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala
            with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena
            George Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in
            Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms.
            Veena George Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response
            in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms.
            Veena George
          </p>
          <!-- scroll -->
          <div class="w-1 h-[200px] bg-border mt-6"></div>
        </div>
        <!-- comments -->
        <div class="flex flex-col gap-4 p-4 border-l border-solid border-border">
          <!-- comments heading -->
          <p class="text-xl leading-8 font-semibold text-title">
            Comments
          </p>
          <!-- comments and users -->
          <div class="flex flex-col w-[370px] h-[439px] ">
            <!-- user and his/her comment -->
            
              <div class="flex  w-full h-auto gap-2 p-1">
                <!-- avatar -->
                <div class="w-[48px] h-[48px] bg-white rounded-full overflow-hidden">
                  <img src="@/assets/images/pretty.png" alt="" class="w-full h-full object-cover" />
                </div>
                <div class="flex flex-col w-[300px] h-auto gap-3">
                  <p class="font-medium text-sm leading-[14px] tracking-tight text-title">Leyla SELİM</p>
                  <p class="font-roboto font-normal text-sm leading-5 text-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatum inventore qui id illum voluptatibus.
                  </p>
                </div>
              </div>
              
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
