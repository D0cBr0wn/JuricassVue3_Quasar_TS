<template>
  <q-card v-if="decision.id" class="search-decision">
    <q-card-actions class="justify-end">
      <q-btn icon="arrow_back" @click="router.push(`/`)"></q-btn>
      <q-btn round icon="favorite_border"></q-btn>
    </q-card-actions>

    <q-card-section>
      <div class="text-h6">
        {{ decision.formattedDecisionDate }} - {{ decision.jurisdiction }} -
        {{ $t('pourvoiNumber') }} {{ decision.number }}
      </div>
      <div class="text-subtitle2">
        {{ decision.chamber }}
        <span v-if="decision.formation"> - {{ decision.formation }}</span>
      </div>
      <div class="text-subtitle2">{{ decision.publication.join(' - ') }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <decision-text-displayer :zones="decision.zones" :text="decision.text" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import DecisionTextDisplayer from 'src/components/DecisionTextDisplayer.vue';
import { useRouter } from 'vue-router';
import Decision from 'src/data/model/Decision';
const router = useRouter();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  decision: { type: Object as () => Decision, required: true },
});
</script>

<style lang="scss" scoped></style>
