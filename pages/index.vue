<script lang="ts" setup>
import { Doughnut } from "vue-chartjs";

const chartsData = ref([
  {
    labels: ["Lleno", "Vacío"],
    datasets: [
      {
        label: "Container",
        backgroundColor: ["#44af69", "#f71735"],
        data: [40, 60],
      },
    ],
  },
  {
    labels: ["Lleno", "Vacío"],
    datasets: [
      {
        label: "Container",
        backgroundColor: ["#44af69", "#f71735"],
        data: [30, 70],
      },
    ],
  },
  {
    labels: ["Lleno", "Vacío"],
    datasets: [
      {
        label: "Container",
        backgroundColor: ["#44af69", "#f71735"],
        data: [80, 20],
      },
    ],
  },
]);
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>
<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        class="text-xl-left text-lg-left text-md-left text-sm-center text-center"
      >
        <h1 class="cabin-title text-primary my-4">Capacidad de tus tanques</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-row no-gutters>
          <v-col
            cols="12"
            class="d-flex justify-lg-end justify-md-end justify-center"
          >
            <v-btn color="primary" class="my-5 cabin-title" rounded="xl">
              <v-icon icon="mdi-plus" class="mr-2" />
              Añadir tanque
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-card elevation="6" class="py-6 px-10">
          <v-container>
            <v-row no-gutters>
              <v-col v-for="(chartData, i) in chartsData">
                <Doughnut
                  :data="chartData"
                  :options="chartOptions"
                  :key="i"
                  class="my-4"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
