<template>
  <header>
    <HeaderHome />
  </header>
  <main class="mx-auto w-12/10 flex flex-col">
    <RouterView />
  </main>
  <Footer class-pages="home" />
</template>

<script setup lang="ts">
import HeaderHome from "../components/HeaderHome.vue";
import Footer from "@/components/Footer.vue";
</script>
