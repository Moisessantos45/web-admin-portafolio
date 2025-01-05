<template>
  <!-- Recent Orders Table -->
  <section
    :class="[projects.length > 0 ? 'h-auto' : 'h-screen', 'py-8 px-4 sm:px-2']"
  >
    <div class="w-full mx-auto">
      <h2 class="text-2xl font-semibold text-gray-900 mb-6">
        Projects Overview
      </h2>
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="overflow-x-auto scroll-vertical">
          <table class="min-w-full divide-y divide-gray-200 table-fixed">
            <thead class="bg-gray-100 h-12">
              <tr>
                <th
                  scope="col"
                  class="w-[15%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Project
                </th>
                <th
                  scope="col"
                  class="w-[10%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  class="w-[35%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
                >
                  Description
                </th>
                <th
                  scope="col"
                  class="w-[10%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="w-[20%] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tecnologies
                </th>
                <th
                  scope="col"
                  class="w-[10%] px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="project in projects"
                :key="project.id"
                class="hover:bg-gray-50 transition-colors duration-200"
                :class="[
                  project.status === 'active' && '',
                  project.status === 'inactive' && ' opacity-50 bg-yellow-100',
                  project.status === 'delete' && 'bg-red-100',
                ]"
              >
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <img
                      class="h-10 w-10 rounded-full object-cover flex-shrink-0"
                      :src="project.image"
                      :alt="project.title"
                    />
                    <div class="text-sm font-medium text-gray-900 truncate">
                      {{ project.title }}
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-black"
                    :class="getProjectTypeClass(project.typeProyect)"
                  >
                    {{ project.typeProyect }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="h-24 overflow-y-auto pr-2 scroll-vertical">
                    <p class="text-sm text-gray-900">
                      {{ project.description }}
                    </p>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full cursor-pointer"
                    :class="getStatusClass(project.status)"
                    @click="handleClickState(project)"
                  >
                    {{ project.status }}
                  </span>
                </td>
                <td class="px-3 py-4">
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="technology in project.tecnologies"
                      :key="technology"
                      class="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {{ technology }}
                    </span>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium"
                >
                  <div class="gap-3 flex items-center justify-center">
                    <RouterLink
                      :to="{
                        name: 'Edit-Project',
                        params: { projectId: project.id },
                      }"
                      @click="adminStore.modifyProject(project)"
                      class="text-indigo-600 hover:text-indigo-900 transition-colors duration-200"
                    >
                      Edit
                    </RouterLink>
                    <button
                      @click="deleteProyect(project)"
                      class="text-red-600 hover:text-red-900 transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getProjectTypeClass, getStatusClass } from "@/services/data.service";
import useProyectStore from "@/store/proyectStore";
import { storeToRefs } from "pinia";
import { TypeProyects } from "@/entitis/entitis";

const adminStore = useProyectStore();
const { projects } = storeToRefs(adminStore);

const handleClickState = async (project: TypeProyects) => {
  const { status, id } = project;
  await adminStore.changeStateProject(id, status);
};

const deleteProyect = async (project: TypeProyects) => {
  const { status, id } = project;
  await adminStore.removerProject(id, status);
};
</script>
