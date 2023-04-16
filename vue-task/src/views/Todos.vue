<template>
  <div class="relative flex w-1440 h-1024 bg-white">
    <!-- Left Menu  -->
    <div class="w-260 h-1024">
      <TodosMenu :user="user" />
    </div>
    <!-- Right  Content -->
    <div class="w-[1180px] h-1024">
      <GoHome />
      <div id="todos" class="flex flex-col items-start absolute left-[296px] top-[156px]">
        <div v-for="todo in todos" :key="todo.id" class="w-[653px] h-[48px] flex items-center">
          <input
            type="checkbox"
            :name="'checkbox'+todo.id"
            :id="todo.id"
            :checked="todo.checked"
            @change="handleCheck(todo)"
            class="w-[18px] h-[18px] accent-primary"
            
          />
          <label :for="todo.id" class="font-normal text-sm leading-5 text-gray2 ml-4"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, tenetur? </label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TodosMenu from '../components/left-menu/TodosMenu.vue'
import GoHome from '../components/GoHome.vue'
import { useRoute } from 'vue-router'

const users = JSON.parse(localStorage.getItem('users'));

const route = useRoute()
const user = users.find((user) => user.id === Number(route.params.id))
const todos =user.todos
// console.log(user.todos);

function handleCheck(todo) {
    // todo öğesinin "checked" özelliği değiştiriliyor
    todo.checked = !todo.checked;
    
    // güncellenen veriler localStorage'da kaydediliyor
    localStorage.setItem('users', JSON.stringify(users));
  }


</script>

<style scoped></style>
