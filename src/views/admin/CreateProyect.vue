<template>
  <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-8">
        <h2 class="text-center text-3xl font-bold text-white">
          Crear Proyecto
        </h2>
        <p class="mt-2 text-center text-indigo-100">
          Registra un nuevo proyecto en tu portafolio
        </p>
      </div>

      <form class="p-8 space-y-8" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Información básica -->
          <div class="space-y-6">
            <div class="form-group">
              <label for="project-title" class="form-label"
                >Título del Proyecto</label
              >
              <input
                id="project-title"
                v-model="projectForm.title.value"
                @input="projectForm.title.isModified = true"
                type="text"
                required
                class="form-input"
                placeholder="Ingresa el título del proyecto"
              />
            </div>

            <div class="form-group">
              <label for="project-type" class="form-label"
                >Tipo de Proyecto</label
              >
              <select
                id="project-type"
                v-model="projectForm.typeProyect.value"
                @input="projectForm.typeProyect.isModified = true"
                required
                class="form-select"
              >
                <option value="web-site">Aplicación Web</option>
                <option value="mobile-app">Aplicación Móvil</option>
                <option value="desktop-app">Aplicación de Escritorio</option>
                <option value="library">Librería</option>
              </select>
            </div>

            <div class="form-group">
              <label for="project-description" class="form-label"
                >Descripción</label
              >
              <textarea
                id="project-description"
                v-model="projectForm.description.value"
                @input="projectForm.description.isModified = true"
                required
                rows="4"
                class="form-textarea"
                placeholder="Describe tu proyecto"
              ></textarea>
            </div>
          </div>

          <!-- Enlaces y fechas -->
          <div class="space-y-6">
            <div class="form-group">
              <label for="project-created-at" class="form-label">Fecha de Creación</label>
              <input
                id="project-created-at"
                v-model="projectForm.createdAt.value"
                @input="projectForm.createdAt.isModified = true"
                type="date"
                required
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label for="project-image" class="form-label"
                >Imagen Principal</label
              >
              <input
                id="project-image"
                v-model="projectForm.image.value"
                @input="projectForm.image.isModified = true"
                type="text"
                required
                class="form-input"
                placeholder="URL de la imagen"
              />
            </div>

            <div class="form-group">
              <label for="project-link" class="form-label"
                >Enlace del Proyecto</label
              >
              <input
                id="project-link"
                v-model="projectForm.link.value"
                @input="projectForm.link.isModified = true"
                type="text"
                required
                class="form-input"
                placeholder="https://"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="form-group">
                <label for="project-link-frontend" class="form-label"
                  >Código Frontend</label
                >
                <input
                  id="project-link-frontend"
                  v-model="projectForm.links.value.frontend"
                  @input="projectForm.links.isModified = true"
                  type="text"
                  required
                  class="form-input"
                  placeholder="GitHub Frontend"
                />
              </div>

              <div class="form-group">
                <label for="project-link-backend" class="form-label"
                  >Código Backend</label
                >
                <input
                  id="project-link-backend"
                  v-model="projectForm.links.value.backend"
                  @input="projectForm.links.isModified = true"
                  type="text"
                  required
                  class="form-input"
                  placeholder="GitHub Backend"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Estado del proyecto -->
        <div class="bg-gray-50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">
            Estado del Proyecto
          </h3>
          <div class="flex space-x-6">
            <label
              :class="[
                'status-radio',
                projectForm.status.value === 'active' ? 'bg-green-100' : '',
              ]"
            >
              <input
                type="radio"
                value="active"
                v-model="projectForm.status.value"
                @input="projectForm.status.isModified = true"
                class="sr-only"
              />
              <span class="flex items-center">
                <span class="status-dot bg-green-500"></span>
                <span class="ml-2">Activo</span>
              </span>
            </label>

            <label
              :class="[
                'status-radio',
                projectForm.status.value === 'inactive' ? 'bg-red-100' : '',
              ]"
            >
              <input
                type="radio"
                value="inactive"
                v-model="projectForm.status.value"
                @input="projectForm.status.isModified = true"
                class="sr-only"
              />
              <span class="flex items-center">
                <span class="status-dot bg-red-500"></span>
                <span class="ml-2">Inactivo</span>
              </span>
            </label>
          </div>
        </div>

        <!-- Campos dinámicos -->
        <div class="space-y-6">
          <DinamycInputs
            v-model="projectForm.characteristics.value"
            name="caracteristicas"
            label="Características del Proyecto"
            @on-modify="
              (data) => (projectForm.characteristics.isModified = data)
            "
            class="dynamic-input-group"
          />

          <DinamycInputs
            v-model="projectForm.learning.value"
            name="habilidades"
            label="Habilidades Aprendidas"
            @on-modify="
              (data) => (projectForm.learning.isModified = data)
            "
            class="dynamic-input-group"
          />

          <DinamycInputs
            v-model="projectForm.tecnologies.value"
            name="tecnologies"
            label="Tecnologías Utilizadas"
            @on-modify="(data) => (projectForm.tecnologies.isModified = data)"
            class="dynamic-input-group"
          />

          <DinamycInputs
            v-model="projectForm.imagenesProyect.value"
            name="imagenesProyect"
            label="Galería de Imágenes"
            @on-modify="
              (data) => (projectForm.imagenesProyect.isModified = data)
            "
            class="dynamic-input-group"
          />
        </div>

        <div class="pt-6">
          <button
            type="submit"
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            Guardar Proyecto
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
  learning: {
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
      projectForm.learning.value = project.value.learning;
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
  projectForm.learning.value = [];
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
.form-group {
  @apply space-y-1;
}

.form-label {
  @apply block text-sm font-medium text-gray-700;
}

.form-input,
.form-select,
.form-textarea {
  @apply block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-200;
}

.form-textarea {
  @apply resize-none;
}

.status-radio {
  @apply relative flex cursor-pointer rounded-lg border p-4 focus:outline-none hover:bg-gray-50 transition-colors duration-200;
}

.status-dot {
  @apply h-3 w-3 rounded-full;
}

.dynamic-input-group {
  @apply bg-gray-50 rounded-xl p-6;
}

.scroll-vertical {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll-vertical::-webkit-scrollbar {
  display: none;
}
</style>
