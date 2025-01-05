<template>
  <footer
    :class="
      classPages !== 'dashboard' ? 'bg-gray-800' : 'border border-slate-100'
    "
    class="text-white py-6 px-4 md:px-6"
  >
    <div
      :class="classPages !== 'dashboard' ? 'text-gray-300' : ' text-slate-600'"
      class="container mx-auto flex flex-col sm:flex-row items-center justify-between"
    >
      <p class="text-sm mb-4 sm:mb-0">
        © {{ currentYear }} Project Moy45. All rights reserved.
      </p>
      <nav class="flex gap-6">
        <span
          class="text-sm hover:text-blue-400 transition duration-300 ease-in-out"
        >
          Terms of Service
        </span>
        <span
          class="text-sm hover:text-blue-400 transition duration-300 ease-in-out"
        >
          Privacy Policy
        </span>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const currentYear = ref<string>();

defineProps({
  classPages: String,
});

onMounted(() => {
  const date = new Date();
  currentYear.value = date.getFullYear().toString();
});
</script>
