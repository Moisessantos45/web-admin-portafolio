<template>
  <div
    class="hidden md:ml-6 md:flex md:items-center md:space-x-4 w-full justify-end py-4 px-4"
  >
    <router-link
      :to="{ name: 'Create-Project' }"
      class="px-3 py-2 rounded-md text-sm font-medium bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out"
    >
      New Project
    </router-link>
  </div>
  <section class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
    <div
      v-for="stat in portfolioStats"
      :key="stat.label"
      class="bg-white overflow-hidden shadow rounded-lg"
    >
      <div class="p-5">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <component :is="stat.icon" class="h-6 w-6 text-gray-400" />
          </div>
          <div class="ml-5 w-0 flex-1">
            <dl>
              <dt class="text-sm font-medium text-gray-500 truncate">
                {{ stat.label }}
              </dt>
              <dd class="text-lg font-medium text-gray-900">
                {{ stat.value }}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
  <TableProjects />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Briefcase, Code, Star, Clock } from "lucide-vue-next";
import useProyectStore from "@/store/proyectStore"
import TableProjects from "@/components/Section/TableProjects.vue";

import { storeToRefs } from "pinia";

const adminStore = useProyectStore();
const { projectCount, technologiesCount } = storeToRefs(adminStore);

const portfolioStats = ref([
  { label: "Total Proyectos", value: projectCount, icon: Briefcase },
  { label: "Tecnologías Utilizadas", value: technologiesCount, icon: Code },
  { label: "Proyectos Destacados", value: "3", icon: Star },
  { label: "Horas Invertidas", value: "1200+", icon: Clock },
]);
</script>

<style>
.scroll-vertical {
  scrollbar-width: none;
}

.width-text {
  width: fit-content;
}
</style>
