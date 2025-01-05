<template>
  <div class="min-h-screen flex flex-col bg-gray-900">
    <main class="flex-grow flex items-center justify-center">
      <div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1
            class="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl md:text-6xl"
          >
            Welcome to Project Moy45
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-slate-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Website to manage my personal projects
          </p>
          <div class="mt-10 sm:flex sm:justify-center">
            <div class="rounded-md shadow">
              <router-link
                :to="{ name: 'Login' }"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-200 bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transition duration-200 ease-in-out"
              >
                Login
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
