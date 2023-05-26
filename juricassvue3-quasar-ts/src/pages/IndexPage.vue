<template>
  <q-page class="row items-center justify-evenly">
    <pre>{{ searchResult }}</pre>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { errors } from '../controllers/appController';
import {
  search,
  searchResult,
  isLoading,
  query,
} from '../controllers/homeController';
//import SearchResultDisplayer from '@comps/SearchResultDisplayer.vue'
//import SkeletonLoader from '@comps/common/SkeletonLoader.vue'

onMounted(async () => {
  await search();
});
</script>
