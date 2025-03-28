<script lang="ts" setup>
import { Doughnut } from "vue-chartjs";
const chartData = ref({
  labels: ["Lleno", "Vacío"],
  datasets: [
    {
      label: "Container",
      backgroundColor: ["#44af69", "#f71735"],
      data: [40, 60],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>
<template>
  <v-container>
    <Doughnut :data="chartData" :options="chartOptions" />
  </v-container>
</template>
