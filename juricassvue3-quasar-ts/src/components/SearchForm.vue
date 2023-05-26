<template>
  <q-form @submit="onSubmit" class="search-form">
    <q-input
      rounded
      outlined
      v-model="query"
      bg-color="white"
      dense
      :label="$t('search')"
    />

    <q-toggle v-model="exact" :label="$t('exactSearch')" />

    <div class="row justify-between">
      <q-btn @click="popStartDate = !popStartDate" :disabled="isLoading">{{
        startDate ?? $t('startDate')
      }}</q-btn>

      <q-btn @click="popEndDate = !popEndDate" :disabled="isLoading">{{
        endDate ?? $t('endDate')
      }}</q-btn>
    </div>

    <q-date
      v-if="popStartDate === true"
      v-model="startDate"
      mask="YYYY-MM-DD"
      class="datepicker"
      @update:model-value="popStartDate = false"
    />
    <q-date
      v-if="popEndDate === true"
      v-model="endDate"
      mask="YYYY-MM-DD"
      class="datepicker"
      @update:model-value="popEndDate = false"
    />

    <q-btn
      @click="handleSearch()"
      class="valid-search"
      block
      color="primary"
      icon="search"
      style="width: 100%"
      :disabled="isLoading"
      :loading="isLoading"
    >
      {{ $t('search') }}
    </q-btn>
  </q-form>
</template>

<script setup>
import { ref } from 'vue';
import {
  query,
  exact,
  startDate,
  endDate,
  handleSearch,
  isLoading,
  queryObj,
} from 'src/controllers/homeController';

const popStartDate = ref(false);
const popEndDate = ref(false);
const close = () => {
  console.error('close');
  popEndDate.value = false;
  popStartDate.value = false;
};
</script>

<style lang="scss" scoped>
.search-form {
  padding: 1rem;
}

.valid-search {
  margin: 2rem 0;
}
</style>
