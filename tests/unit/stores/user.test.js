import { createPinia, setActivePinia } from 'pinia'

import { useUserStore } from '../../../src/stores/user'

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('keeps track if user is logged in', () => {
    const store = useUserStore()
    expect(store.isloggedIn).toBe(false)
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('loginUser', () => {
    it('logs the user in', () => {
      const store = useUserStore()
      store.loginUser()
      expect(store.isloggedIn).toBe(false)
    })
  })
})
