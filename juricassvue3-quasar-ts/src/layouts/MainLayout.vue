<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> {{ $t('appName') }} </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/settings" :label="$t('settings')" />
        <q-route-tab to="/bookmarks" :label="$t('bookmarks')" />
        <q-route-tab to="/about" :label="$t('about')" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <div class="row justify-center">
        <div class="col-12 col-lg-8">
          <q-page padding>
            <router-view />
          </q-page>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
