<template>
  <div class="relative flex w-1440 h-1024 bg-white">
    <div class="w-260 h-1024">
      <UsersMenu />
    </div>

    <!-- Right Content -->
    <div class="w-[1180px] h-1024 ">
      <p
        class="flex items-center absolute w-[86px] h-5 left-[297px] top-[44px] font-poppins font-semibold text-xl"
      >
        All users
      </p>
      <div class="flex flex-wrap gap-4 w-[1124px] max-h-[896px] pt-3 pl-3 absolute left-[288px] top-[100px]">
        
        
        <Card v-for="user in users" :key="user.id" :user="user" /> 
        
        
        
        
        
        
    
      </div>
    </div>
  </div>
</template>

<script setup>
import UsersMenu from '../components/left-menu/UsersMenu.vue';
import Card from '../components/Card.vue'
import users from '../data/users'

localStorage.setItem('users', JSON.stringify(users));
// const usersFromLocalStorage = JSON.parse(localStorage.getItem('users'));
// console.log(usersFromLocalStorage);

console.log(users);
</script>

<style lang="scss" scoped></style>
