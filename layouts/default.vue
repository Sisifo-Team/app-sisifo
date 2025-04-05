<script setup lang="ts">
import Appbar from "~/components/global/Appbar.vue";
import Navbar from "~/components/global/Navbar.vue";
</script>
<template>
  <v-app>
    <v-main>
      <Appbar />
      <Navbar />
      <NuxtPage />
    </v-main>
  </v-app>
</template>
