<template>
  <div class="flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
    <div class="w-12/12 sm:w-8/12 space-y-8 bg-white p-8 rounded-lg shadow-md">
      <div>
        <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">
          Create Project
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Register a new project
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
          <div>
            <label
              for="project-title"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Project Title</label
            >
            <input
              id="project-title"
              name="title"
              type="text"
              required
              v-model="projectForm.title.value"
              @input="projectForm.title.isModified = true"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Project Title"
            />
          </div>
          <div>
            <label
              for="project-type"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Project Type</label
            >
            <select
              id="project-type"
              name="typeProject"
              required
              v-model="projectForm.typeProyect.value"
              @input="projectForm.typeProyect.isModified = true"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option value="web-site">Web Application</option>
              <option value="mobile-app">Mobile Application</option>
              <option value="desktop-app">Desktop Application</option>
              <option value="library">Library</option>
            </select>
          </div>
          <div>
            <label
              for="project-description"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Project Description</label
            >
            <textarea
              id="project-description"
              name="description"
              required
              v-model="projectForm.description.value"
              @input="projectForm.description.isModified = true"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm min-h-36 max-h-40 scroll-vertical"
              placeholder="Project Description"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label
              for="project-image"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Project Image
            </label>
            <input
              id="project-image"
              name="image"
              type="text"
              required
              v-model="projectForm.image.value"
              @input="projectForm.image.isModified = true"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Project Image"
            />
          </div>
          <div>
            <label
              for="project-link"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Project Link
            </label>
            <input
              id="project-link"
              name="link"
              type="text"
              required
              v-model="projectForm.link.value"
              @input="projectForm.link.isModified = true"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Project Link"
            />
          </div>
          <div>
            <label
              for="project-link-frontend"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Link code frontend
            </label>
            <input
              id="project-link-frontend"
              name="link-frontend"
              type="text"
              required
              v-model="projectForm.links.value.frontend"
              @input="projectForm.links.isModified = true"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Link code frontend"
            />
          </div>
          <div>
            <label
              for="project-link-backend"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Link code backend
            </label>
            <input
              id="project-link-backend"
              name="link-backend"
              type="text"
              required
              v-model="projectForm.links.value.backend"
              @input="projectForm.links.isModified = true"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Link code backend"
            />
          </div>
          <div>
            <label
              for="project-created-at"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Project Title</label
            >
            <input
              id="project-created-at"
              name="created-at"
              type="date"
              required
              v-model="projectForm.createdAt.value"
              @input="projectForm.createdAt.isModified = true"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Project Title"
            />
          </div>
          <div class="p-4 border border-gray-300">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">
              Project Status
            </h3>
            <div class="flex space-x-4">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio text-green-500 focus:ring-green-500 h-5 w-5"
                  name="status"
                  value="active"
                  v-model="projectForm.status.value"
                  @input="projectForm.status.isModified = true"
                />
                <span class="ml-2 text-gray-700">
                  Active
                  <span
                    class="inline-block ml-1 w-3 h-3 bg-green-500 rounded-full"
                  ></span>
                </span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio text-red-500 focus:ring-red-500 h-5 w-5"
                  name="status"
                  value="inactive"
                  v-model="projectForm.status.value"
                  @input="projectForm.status.isModified = true"
                />
                <span class="ml-2 text-gray-700">
                  Inactive
                  <span
                    class="inline-block ml-1 w-3 h-3 bg-red-500 rounded-full"
                  ></span>
                </span>
              </label>
            </div>
          </div>
          <DinamycInputs
            v-model="projectForm.characteristics.value"
            name="caracteristicas"
            label="Add more features"
            @on-modify="
              (data) => (projectForm.characteristics.isModified = data)
            "
          />
          <DinamycInputs
            v-model="projectForm.tecnologies.value"
            name="tecnologies"
            label="Add more technologies"
            @on-modify="(data) => (projectForm.tecnologies.isModified = data)"
          />
          <DinamycInputs
            v-model="projectForm.imagenesProyect.value"
            name="imagenesProyect"
            label="Add more images"
            @on-modify="
              (data) => (projectForm.imagenesProyect.isModified = data)
            "
          />
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive } from "vue";
import { useRoute } from "vue-router";
import { useQueryClient } from "@tanstack/vue-query";
import useProyectStore from "@/store/proyectStore";
import { ProjectFormData } from "@/entitis/entitis";
import DinamycInputs from "@/components/UI/DinamycInputs.vue";
import { storeToRefs } from "pinia";

const route = useRoute();
const useStore = useProyectStore();
const { project } = storeToRefs(useStore);
const queryClient = useQueryClient();

const paramsId = route.params.projectId;
const isParamsIdString = paramsId && typeof paramsId === "string";

const projectForm = reactive<ProjectFormData>({
  title: {
    value: "",
    isModified: false,
  },
  typeProyect: {
    value: "web-site",
    isModified: false,
  },
  description: {
    value: "",
    isModified: false,
  },
  characteristics: {
    value: [],
    isModified: false,
  },
  tecnologies: {
    value: [],
    isModified: false,
  },
  image: {
    value: "",
    isModified: false,
  },
  imagenesProyect: {
    value: [],
    isModified: false,
  },
  link: {
    value: "",
    isModified: false,
  },
  links: {
    isModified: false,
    value: {
      frontend: "#",
      backend: "#",
    },
  },
  status: {
    value: "active",
    isModified: false,
  },
  createdAt: {
    value: "",
    isModified: false,
  },
  counter_likes: {
    value: 0,
    isModified: true,
  },
});

if (isParamsIdString) {
  useStore.findByIdProyectState(paramsId);
}

watch(
  () => project.value,
  () => {
    if (project && project.value) {
      projectForm.title.value = project.value.title;
      projectForm.typeProyect.value = project.value.typeProyect;
      projectForm.description.value = project.value.description;
      projectForm.characteristics.value = project.value.characteristics;
      projectForm.tecnologies.value = project.value.tecnologies;
      projectForm.image.value = project.value.image;
      projectForm.imagenesProyect.value = project.value.imagenesProyect;
      projectForm.link.value = project.value.link;
      projectForm.links.value = project.value.links;
      projectForm.status.value = project.value.status;
      projectForm.createdAt.value = project.value.createdAt;
      projectForm.counter_likes.value = project.value.counter_likes;
    }
  },
  { immediate: true }
);

const handleSubmit = async () => {
  const newProjectForm = Object.entries(projectForm).reduce(
    (acc, [key, value]) => {
      if (value.isModified || !isParamsIdString) {
        acc[key] = value.value;
      }
      return acc;
    },
    {} as Record<string, any>
  );

  if (isParamsIdString) {
    await useStore.updateProject(newProjectForm, paramsId);
  } else {
    await useStore.addProject(newProjectForm);
  }

  queryClient.invalidateQueries({
    queryKey: ["proyects"],
  });

  projectForm.title.value = "";
  projectForm.title.isModified = false;
  projectForm.typeProyect.value = "web-site";
  projectForm.typeProyect.isModified = false;
  projectForm.description.value = "";
  projectForm.description.isModified = false;
  projectForm.characteristics.value = [];
  projectForm.characteristics.isModified = false;
  projectForm.tecnologies.value = [];
  projectForm.tecnologies.isModified = false;
  projectForm.image.value = "";
  projectForm.image.isModified = false;
  projectForm.imagenesProyect.value = [];
  projectForm.imagenesProyect.isModified = false;
  projectForm.link.value = "";
  projectForm.link.isModified = false;
  projectForm.links.value = {
    frontend: "#",
    backend: "#",
  };
  projectForm.links.isModified = false;
  projectForm.status.value = "active";
  projectForm.status.isModified = false;
  projectForm.createdAt.value = "";
  projectForm.createdAt.isModified = false;
};

</script>

<style>
.scroll-vertical {
  scrollbar-width: none;
}

.width-text {
  width: fit-content;
}

.form-radio {
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid currentColor;
  border-radius: 50%;
  outline: none;
  transition: all 0.2s ease-in-out;
}

.form-radio:checked {
  background-color: currentColor;
  box-shadow: inset 0 0 0 2px white;
}

.form-radio:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
</style>
