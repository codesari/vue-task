import { defineStore } from 'pinia'
import users from '@/data/users'

export const useStore = defineStore({
  id: 'userStore',
  state: () => ({
    users: users
  }),
  getters: {
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id === id)
    }
  },
  actions: {
    updateUserTodoById(userId, todoId, completed) {
      const user = this.getUserById(userId)
      const todo = user.todos.find((todo) => todo.id === todoId)
      if (todo) {
        todo.completed = completed
      }
      // update user in the state or call an API endpoint to persist the changes
    }
  }
})
