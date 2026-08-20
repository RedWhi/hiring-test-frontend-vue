import { ref, computed } from 'vue'

export const useSearch = (users) => {
  const searchQuery = ref('')
  const selectedField = ref('name')

  const filteredItems = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()

    if (!query) {
      return users.value
    }

    const fields = [selectedField.value]

    return users.value.filter((user) =>
      fields.some((field) =>
        (user[field] ?? '').toLowerCase().includes(query)
      )
    )
  })

  const clearSearch = () => {
    searchQuery.value = ''
  }

  return {
    searchQuery,
    selectedField,
    filteredItems,
    clearSearch,
  }
}
