import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:JSON.parse(localStorage.getItem('users') || '[]')
  },
  mutations: {
    createUser(state, user) {
      state.users.push(user)
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    editUser(state, {id, email, phoneNumber, status}) {
      const users = state.users.concat()
      const idx = users.findIndex(u => u.id === id)
      const user = users[idx]
      users[idx] = {...user, email, phoneNumber, status}
      state.users = users
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    deleteUser(state, id) {
      const users = state.users.filter(u => u.id != id)
      state.users = users
      localStorage.setItem('users', JSON.stringify(state.users))
    }
  },
  actions: {
    createUser({commit}, user){
      commit('createUser', user)
    },
    editUser({commit}, user){
      commit('editUser', user)
    },
    deleteUser({commit}, id){
      commit('deleteUser', id)
    }
  },
  modules: {
  },
  getters: {
    users: s => s.users,
    userById: s => id => s.users.find(u => u.id === id)
  }
})
