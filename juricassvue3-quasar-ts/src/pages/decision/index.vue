<template>
  <div v-if="isLoading && !errors.length">
    <skeleton-loader />
  </div>
  <div v-else>
    <decision-displayer :decision="decision" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { errors } from 'src/controllers/appController';
import {
  getDecision,
  decision,
  isLoading,
} from 'src/controllers/decisionController';
import SkeletonLoader from 'src/components/common/SkeletonLoader.vue';
import DecisionDisplayer from 'src/components/DecisionDisplayer.vue';
const route = useRoute();

onMounted(async () => {
  await getDecision(route.params.id);
});
</script>
