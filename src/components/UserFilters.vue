<template>
  <form class="filters" @submit.prevent>
    <div class="filters__row">
      <input
        id="user-search-query"
        class="filters__query"
        type="search"
        placeholder="Search users..."
        :value="searchQuery"
        @input="$emit('update:searchQuery', $event.target.value)"
      />

      <button
        class="filters__clear"
        type="button"
        @click="$emit('clear-search')"
      >
        Clear
      </button>
    </div>

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

    <div class="filters__count">Found: {{ resultsCount }}</div>
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
  gap: 10px;
  margin-bottom: 16px;
}

.filters__row {
  display: flex;
  gap: 8px;
}

.filters__query,
.filters__clear {
  font: inherit;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
}

.filters__query {
  flex: 1;
}

.filters__clear {
  background: #f9f9f9;
  cursor: pointer;
}

.filters__fields {
  display: flex;
  gap: 12px;
}

.filters__fields label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #666;
}

.filters__count {
  font-size: 14px;
  color: #666;
}
</style>
