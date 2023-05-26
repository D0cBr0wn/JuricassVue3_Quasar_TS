<template>
  <q-page class="items-center justify-evenly">
    <div v-if="isLoading && !errors.length">
      <skeleton-loader />
    </div>
    <div v-else>
      <h2 v-if="query">{{ $t('resultsFor') }} "{{ queryDisplay }}"</h2>
      <div v-if="searchResult && searchResult.results.length">
        <search-result-displayer
          v-for="result in searchResult.results"
          :key="result.id"
          :result="result"
        />
      </div>
      <div v-else>
        <h2>{{ $t('noResultFound') }}</h2>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { errors } from '../controllers/appController';
import {
  search,
  searchResult,
  isLoading,
  query,
} from '../controllers/homeController';
import SearchResult from 'src/data/model/SearchResult';
import SearchResultDisplayer from '../components/SearchResultDisplayer.vue';
import SkeletonLoader from '../components/common/SkeletonLoader.vue';

onMounted(async () => {
  await search();
});

const queryDisplay = computed(() => {
  return searchResult.value.query?.query ?? '';
});
</script>
