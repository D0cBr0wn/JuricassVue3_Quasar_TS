<template>
  <div></div>
  <!-- <div class="error-displayer">
    <v-alert
      v-for="(error, i) in errors"
      :key="`error-${i}`"
      class="error-message"
      icon="mdi-skull"
      type="error"
      elevation="5"
      closable="true"
    >
      <v-alert-title>{{ $t('anErrorOccured') }}</v-alert-title>
      {{ error.message }}
    </v-alert>
  </div> -->
</template>

<script lang="ts" setup>
import { onMounted, watch, computed } from 'vue';
import { errors } from 'src/controllers/appController';
import { useQuasar } from 'quasar';

const errorLength = computed(() => errors.value.length);
watch(errorLength, () => {
  if (errors.value.length) showNotif();
});

const $q = useQuasar();

const showNotif = () => {
  console.error('watch');
  let concatMessage = '';
  errors.value.forEach((e) => {
    concatMessage += e.message;
  });
  $q.notify({
    message: concatMessage,
    icon: 'error',
    color: 'red',
  });
};
</script>

<style lang="scss" scoped>
.error-message {
  margin-bottom: 2rem;
}
</style>

<style lang="scss"></style>
