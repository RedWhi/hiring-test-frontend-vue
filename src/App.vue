<template>
  <div class="app">
    <loading
      :active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    />

    <template v-if="!isLoading">
      <h1>Users</h1>

      <error-message v-if="error" :message="error" />

      <template v-else>
        <user-filters
          v-model:search-query="searchQuery"
          v-model:selected-field="selectedField"
          :results-count="filteredItems.length"
          @clear-search="clearSearch"
        />

        <user-list :users="filteredItems" />
      </template>
    </template>
  </div>
</template>

<script setup>
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import UserFilters from './components/UserFilters.vue'
import UserList from './components/UserList.vue'
import ErrorMessage from './components/ErrorMessage.vue'
import { useUsers } from './composables/useUsers.js'
import { useSearch } from './composables/useSearch.js'

const { users, isLoading, error } = useUsers()
const { searchQuery, selectedField, filteredItems, clearSearch } = useSearch(users)
</script>

<style scoped>
.app {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}
</style>
