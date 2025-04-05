<script setup lang="ts">
import { useAppStore } from "~/store/app"
import { useDisplay } from "vuetify"

const navList = [
  {
    title: "Dashboard",
    to: "/",
  },
  {
    title: "Tanques",
    to: "/containers",
  },
];

const appStore = useAppStore();
const { mobile } = useDisplay();

function openNavBar() {
  appStore.isNavBarOpen = true;
}

</script>

<template>
  <v-app-bar :elevation="5" color="background" class="nav-shadow">
    <template #prepend>
      <v-img src="/logo.png" height="50" width="50" class="nav-logo" />
    </template>

    <v-btn v-if="mobile" icon="mdi-menu" @click="openNavBar" color="primary" class="text-h6"/>

    <template v-if="$vuetify.display.mdAndUp" #append>
      <v-list class="d-flex text-primary">
        <v-list-item
          v-for="(navOption, i) in navList"
          :key="i"
          link
          :to="navOption.to"
        >
          <v-list-item-title class="mulish-subtitle text-h6">
            {{ navOption.title }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item link :to="'/user'">
          <v-list-item-title class="text-h6">
            <v-icon icon="mdi-account-circle-outline" />
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-app-bar>
</template>

<style lang="css" scoped>
.nav-logo {
  margin-left: 1.5rem;
}
</style>
