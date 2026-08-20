<template>
  <form class="filters" @submit.prevent>
    <input
      id="user-search-query"
      v-model="query"
      class="filters__query"
      type="search"
      placeholder="Search users..."
    />

    <div class="filters__fields">
      <label>
        <input
          id="filter-field-name"
          type="checkbox"
          :checked="selectedField === 'name'"
          @change="selectedField = 'name'"
        />
        Name
      </label>

      <label>
        <input
          id="filter-field-email"
          type="checkbox"
          :checked="selectedField === 'email'"
          @change="selectedField = 'email'"
        />
        Email
      </label>

      <label>
        <input
          id="filter-field-role"
          type="checkbox"
          :checked="selectedField === 'role'"
          @change="selectedField = 'role'"
        />
        Role
      </label>

      <label>
        <input
          id="filter-field-status"
          type="checkbox"
          :checked="selectedField === 'status'"
          @change="selectedField = 'status'"
        />
        Status
      </label>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')
const selectedField = ref('name')
</script>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filters__query {
  width: 100%;
}

.filters__fields {
  display: flex;
  gap: 12px;
}

.filters__fields label {
  display: flex;
  align-items: center;
}
</style>
