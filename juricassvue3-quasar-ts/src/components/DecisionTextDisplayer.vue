<template>
  <div v-if="zones.length">
    <div>
      <q-expansion-item
        v-for="(zone, i) in zones"
        :key="`zone-${i}`"
        :label="zone.name"
      >
        <div>{{ text.substring(Number(zone.start), Number(zone.end)) }}</div>
      </q-expansion-item>
    </div>
  </div>
  <div v-else>
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
import Zone from 'src/data/model/Zone';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  zones: { type: Object as () => Zone[], default: () => [] as Zone[] },
  text: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.zone {
  margin-top: 2rem;
}
</style>
