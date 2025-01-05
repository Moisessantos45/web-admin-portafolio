<template>
  <nav className="shadow-md px-4 lg:px-6 py-3 flex justify-between bg-gray-800">
    <div class="flex items-center justify-between">
      <span className="flex items-center justify-center">
        <span className="text-slate-200 font-bold"> Project Moy45 </span>
      </span>
    </div>
    <nav class=" flex gap-5 items-center">
      <router-link
        :to="{ name: 'Home' }"
        class="text-sm font-medium text-slate-200 hover:text-slate-900 transition-colors duration-200 ease-in-out"
      >
        Home
      </router-link>

      <router-link
        :to="{ name: 'Login' }"
        class="text-sm font-medium text-slate-300 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out"
      >
        Login
      </router-link>
    </nav>
  </nav>
</template>
