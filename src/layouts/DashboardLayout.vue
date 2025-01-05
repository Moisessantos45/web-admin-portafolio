<template>
  <header>
    <HeaderDashboard />
  </header>
  <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div v-if="projectStore.isLoading">
      <Loading />
    </div>
    <RouterView />
  </main>
  <Footer class-pages="dashboard" />
</template>

<script setup lang="ts">
import useProyectStore from "../store/proyectStore";
import HeaderDashboard from "../components/HeaderDashboard.vue";
import Footer from "@/components/Footer.vue";
import Loading from "../components/UI/Loading.vue";
import { useQuery } from "@tanstack/vue-query";

const projectStore = useProyectStore();

const fetchProjects = async () => {
  await projectStore.fetchProyects();
  return projectStore.projects;
};

useQuery({
  queryKey: ["proyects"],
  queryFn: fetchProjects,
  refetchInterval: false,
  refetchOnWindowFocus: false,
  retry: 0,
});
</script>

<style>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
