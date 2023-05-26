<template>
  <q-card v-if="result" class="search-result">
    <q-card-section>
      <div class="text-h6">
        {{ result.formattedDecisionDate }} - {{ result.jurisdiction }} -
        {{ $t('pourvoiNumber') }} {{ result.number }}
      </div>
      <div class="text-subtitle2">{{ result.publication.join(' - ') }}</div>
      <div class="text-subtitle2">{{ result.formation }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ result.summary }}
    </q-card-section>

    <q-card-actions class="justify-end">
      <q-btn flat @click="router.push(`/decision/${result.id}`)">{{
        $t('readDecision')
      }}</q-btn>
      <q-btn round icon="favorite_border" />
    </q-card-actions>

    <div class="themes">
      <q-chip
        v-for="theme in result.themes"
        :key="theme"
        outline
        class="text-secondary-light"
        >{{ theme }}</q-chip
      >
    </div>
  </q-card>
</template>

<script setup>
//import router from '../router';
import SearchResult from 'src/data/model/SearchResult';
import { useRouter } from 'vue-router';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  result: { type: SearchResult, required: true },
});
const router = useRouter();
</script>

<style lang="scss" scoped>
.search-result {
  margin-bottom: 2rem;
}

.themes {
  padding: 1rem;
}
</style>
