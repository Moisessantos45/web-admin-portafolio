<template>
  <div class="container">
    <h1>Create User</h1>
    <form @submit.e.prevent="createUser" class="md:w-7/12 w-full p-2 mx-auto">
      <div class="flex flex-col gap-2">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control border border-gray-400 rounded p-2"
          v-model="user.email"
          required
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control border border-gray-400 rounded p-2"
          v-model="user.password"
          required
        />
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          class="form-control border border-gray-400 rounded p-2"
          v-model="user.name"
          required
        />
        <label for="avatar">Avatar</label>
        <input
          type="text"
          id="avatar"
          class="form-control border border-gray-400 rounded p-2"
          v-model="user.avatar"
          required
        />
        <button type="submit" class="rounded p-2 bg-blue-500 text-white">
          Create User
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import supabase from "@/api/config";

const user = reactive({
  email: "",
  password: "",
  name: "",
  avatar: "",
});

const createUser = async () => {
  try {
    const { error, data } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          full_name: user.name,
          avatar_url: user.avatar,
        },
      },
    });
    if (error) {
      throw error;
    }
    console.log("User created successfully", data);
    user.avatar = "";
    user.email = "";
    user.name = "";
    user.password = "";
  } catch (error) {
    console.log(error);
  }
};
</script>
