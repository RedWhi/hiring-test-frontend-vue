import { ref, onMounted } from 'vue'

import { fetchUsers } from '../api/mock.js'

export const useUsers = () => {
  const users = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  const loadUsers = () => {
    isLoading.value = true
    error.value = null

    fetchUsers()
      .then((data) => {
        users.value = data
      })
      .catch((err) => {
        error.value = err.message
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  onMounted(() => {
    loadUsers()
  })

  return {
    users,
    isLoading,
    error,
    loadUsers,
  }
}
