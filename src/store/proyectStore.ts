import { defineStore } from "pinia";
import { TypeProyects, TypeProjectForm } from "../entitis/entitis";
import supabase from "../api/config";
import { convertToJson, fromToJsonMap } from "../services/data.service";
import ErrorHandler from "../services/errorHandle";
import showToastNotification from "@/services/toastify";
import { computed, ref } from "vue";

const useProyectStore = defineStore("projectData", () => {
  const projects = ref<TypeProyects[]>([]);
  const project = ref<TypeProjectForm | null>(null);
  const isLoading = ref(false);

  const projectTechnologies = computed(() => {
    const technologies = projects.value || [];
    const newTechnologies = new Set();
    technologies.forEach((item) => {
      item.tecnologies.forEach((items) => {
        newTechnologies.add(items);
      });
    });

    const newTechnologiesArray = [...newTechnologies];
    return newTechnologiesArray;
  });

  const projectCount = computed(() => projects.value.length);

  const technologiesCount = computed(() => projectTechnologies.value.length);

  const findByIdProyect = (id: string) => {
    return projects.value.find((item) => item.id === id);
  };

  const findByIdProyectState = (id: string) => {
    const matchingProject = projects.value.find((item) => item.id === id);

    if (!matchingProject) {
      return;
    }

    const { id: _, ...rest } = matchingProject;
    project.value = rest;
  };

  const fetchProyects = async () => {
    try {
      isLoading.value = true;
      const { data, error } = await supabase.from("Proyectos").select("*");
      if (error) throw error;
      const transformedData = data.map(fromToJsonMap);
      projects.value = transformedData;
    } catch (error) {
      projects.value = [];
      ErrorHandler(error);
    }
    isLoading.value = false;
  };

  const mapObjectToJson = (obj: { [key: string]: any }) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, convertToJson(value)])
    );
  };

  const addProject = async (proyect: { [key: string]: any }) => {
    try {
      const mappedJsonProjects = mapObjectToJson(proyect);

      const { error } = await supabase
        .from("Proyectos")
        .insert([mappedJsonProjects]);
      if (error) throw error;
      showToastNotification("Project success creadt", true);
    } catch (error) {
      ErrorHandler(error);
    }
  };

  const modifyProject = (selectedProject: TypeProyects) => {
    const { id, ...rest } = selectedProject;
    project.value = rest;
  };

  const updateProject = async (proyect: { [key: string]: any }, id: string) => {
    try {
      const mappedJsonProjects = Object.keys(proyect).map((key: string) =>
        convertToJson(proyect[key])
      );

      const { error } = await supabase
        .from("Proyects")
        .update(mappedJsonProjects)
        .eq("id", id);
      if (error) throw error;

      showToastNotification("Project success creadt", true);
    } catch (error) {
      ErrorHandler(error);
    }
  };

  const changeStateProject = async (id: string, state: string) => {
    try {
      if (state === "delete" || state === "inactive") {
        const { error } = await supabase
          .from("Proyectos")
          .update({ status: state })
          .eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("Proyectos")
          .update({ status: state })
          .eq("id", id);
        if (error) throw error;
      }
    } catch (error) {
      ErrorHandler(error);
    }
  };

  const removerProject = async (id: string, state: string) => {
    try {
      if (state === "active") {
        const { error } = await supabase
          .from("Proyectos")
          .update({ status: "delete" })
          .eq("id", id);
        if (error) throw error;
      }
    } catch (error) {
      ErrorHandler(error);
    }
  };

  return {
    projects,
    project,
    isLoading,
    projectTechnologies,
    projectCount,
    technologiesCount,
    findByIdProyect,
    findByIdProyectState,
    fetchProyects,
    addProject,
    modifyProject,
    updateProject,
    changeStateProject,
    removerProject,
  };
});

export default useProyectStore;
