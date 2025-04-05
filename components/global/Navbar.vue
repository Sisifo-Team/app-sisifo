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

function updateNavBarState(value: boolean){
  appStore.isNavBarOpen = value;
}

const isOpen = computed(() => {
  return appStore.isNavBarOpen;
});

watch(mobile, () => {
  if(isOpen.value && mobile.value) {
    appStore.isNavBarOpen = false;
  }
});
</script>

<template>
  <v-navigation-drawer
    :model-value="isOpen"
    class="h-100"
    :elevation="10"
    location="right"
    @update:model-value="updateNavBarState"
    color="primary"
    >
    aa
  </v-navigation-drawer>
</template>
