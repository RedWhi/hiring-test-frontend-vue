<template>
  <form class="filters" @submit.prevent>
    <input
      id="user-search-query"
      class="filters__query"
      type="search"
      placeholder="Search users..."
      :value="searchQuery"
      @input="$emit('update:searchQuery', $event.target.value)"
    />

    <button type="button" @click="$emit('clear-search')">Clear</button>

    <div class="filters__fields">
      <label>
        <input
          id="filter-field-name"
          type="checkbox"
          :checked="selectedField === 'name'"
          @change="$emit('update:selectedField', 'name')"
        />
        Name
      </label>

      <label>
        <input
          id="filter-field-email"
          type="checkbox"
          :checked="selectedField === 'email'"
          @change="$emit('update:selectedField', 'email')"
        />
        Email
      </label>

      <label>
        <input
          id="filter-field-role"
          type="checkbox"
          :checked="selectedField === 'role'"
          @change="$emit('update:selectedField', 'role')"
        />
        Role
      </label>

      <label>
        <input
          id="filter-field-status"
          type="checkbox"
          :checked="selectedField === 'status'"
          @change="$emit('update:selectedField', 'status')"
        />
        Status
      </label>
    </div>

    <div>Found: {{ resultsCount }}</div>
  </form>
</template>

<script setup>
defineProps({
  searchQuery: {
    type: String,
    default: '',
  },
  selectedField: {
    type: String,
    default: 'name',
  },
  resultsCount: {
    type: Number,
    default: 0,
  },
})

defineEmits([
  'update:searchQuery',
  'update:selectedField',
  'clear-search'
])
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
