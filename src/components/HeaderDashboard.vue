<template>
  <nav class="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link
            :to="{ name: 'Dashboard' }"
            class="text-2xl font-bold tracking-tight"
          >
            Dashboard
          </router-link>
        </div>
        <div class="flex items-center">
          <span class="hidden md:block text-sm font-medium mr-4">{{nameUser}}</span>
          <UserCircle class="h-8 w-8 text-white mr-4" />
          <button
            @click="logout"
            class="px-3 py-2 rounded-md text-sm font-medium bg-red-500 hover:bg-red-600 transition duration-150 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state -->
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          :to="{ name: 'Create-Project' }"
          class="block px-3 py-2 rounded-md text-base font-medium bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out"
        >
          New Project
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { UserCircle } from "lucide-vue-next";
import supabase from "@/api/config";
import ErrorHandler from "@/services/errorHandle";
import router from "../routers";
import { onMounted, ref } from "vue";

const nameUser = ref("");

const getUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      throw error;
    }
    nameUser.value = data.user.user_metadata.full_name;
  } catch (error) {
    nameUser.value = "User";
  }
};

const logout = async () => {
  try {
    await supabase.auth.signOut();
    router.push({ name: "Login" });
  } catch (error) {
    ErrorHandler(error);
  }
};

onMounted(() => {
  getUser();
});
</script>
