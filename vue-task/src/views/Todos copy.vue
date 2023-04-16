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
        <div v-for="i in 15" :key="i" class="w-[653px] h-[48px] flex items-center">
          <input
            type="checkbox"
            :name="'checkbox'+i"
            :id="'checkbox'+i"
            class="w-[18px] h-[18px] accent-primary"
            :checked="isChecked[i]"
            @click="updateLocalStorage(i)"
          />
          <label :for="'checkbox'+i" class="font-normal text-sm leading-5 text-gray2 ml-4"
            >Checkbox content {{ i }}</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TodosMenu from '../components/left-menu/TodosMenu.vue'
import GoHome from '../components/GoHome.vue'
import users from '../data/users'

import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const user = users.find((user) => user.id === Number(route.params.id))

const userId = user.id

// state
const preCheck = JSON.parse(localStorage.getItem(`isChecked_${userId}`)) || {}

const isChecked = ref({})
for (let i = 1; i <= 15; i++) {
  isChecked.value[i] = preCheck[i] || false
}

function updateLocalStorage(i) {
  isChecked.value[i] = !isChecked.value[i]
  localStorage.setItem(`isChecked_${userId}`, JSON.stringify(isChecked.value))
}
</script>

<style scoped></style>
