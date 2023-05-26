<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> {{ $t('appName') }} </q-toolbar-title>
        <q-input rounded outlined v-model="quickQuery" bg-color="white" dense />
        <q-btn flat round icon="search" @click="search()"> </q-btn>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/settings" :label="$t('settings')" />
        <q-route-tab to="/bookmarks" :label="$t('bookmarks')" />
        <q-route-tab to="/about" :label="$t('about')" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="popDrawer" side="left" bordered width="325">
      <search-form />
    </q-drawer>

    <q-page-container>
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <q-page padding>
            <error-displayer />
            <router-view />
          </q-page>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import SearchForm from 'src/components/SearchForm.vue';
import ErrorDisplayer from 'src/components/common/ErrorDisplayer.vue';
import { quickQuery, search, popDrawer } from 'src/controllers/homeController';
import { ref } from 'vue';

const toggleLeftDrawer = () => {
  popDrawer.value = !popDrawer.value;
};
</script>
