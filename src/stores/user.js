import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isloggedIn: false
  }),
  actions: {
    loginUser() {
      this.isloggedIn = true
    }
  }
})
