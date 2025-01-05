<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div
      class="w-12/12 md:w-7/12 lg:w-4/12 bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <div class="p-6 space-y-4">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-slate-200">Login</h2>
          <p class="text-sm text-slate-400 mt-1">
            Enter your email and password to login to your account.
          </p>
        </div>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-slate-300"
              >Email</label
            >
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="name@example.com"
              required
              class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div class="space-y-2">
            <label
              for="password"
              class="block text-sm font-medium text-slate-300"
              >Password</label
            >
            <div class="relative">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-slate-200"
              >
                <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                <EyeOffIcon v-else class="h-5 w-5" />
              </button>
            </div>
          </div>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-200 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors duration-200 ease-in-out"
          >
            {{ isLoading ? "Logging in..." : "Login" }}
          </button>
        </form>
      </div>
      <div
        class="px-6 py-4 bg-gray-700 border-t border-gray-600 flex justify-between"
      >
        <a href="#" class="text-sm text-blue-400 hover:text-blue-300"
          >Forgot password?</a
        >
        <a href="#" class="text-sm text-blue-400 hover:text-blue-300"
          >Don't have an account? Sign up</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/routers/index";
import { EyeIcon, EyeOffIcon } from "lucide-vue-next";
import supabase from "@/api/config";
import ErrorHandler from "@/services/errorHandle";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const isLoading = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleSubmit = async () => {
  isLoading.value = true;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
      throw error;
    }

    router.push({ name: "Dashboard", params: { id: data.user.id } });

    isLoading.value = false;
  } catch (error) {
    ErrorHandler(error);
  }
};
</script>
