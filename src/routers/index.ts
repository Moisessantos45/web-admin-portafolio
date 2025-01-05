import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";
import MainLayout from "../layouts/MainLayout.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import CreateProyect from "../views/admin/CreateProyect.vue";
import CreateUser from "@/views/auth/CreateUser.vue";
import HomeAdmin from "../views/admin/HomeAdmin.vue";
import supabase from "@/api/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "login",
        name: "Login",
        component: LoginView,
      },
    ],
  },
  {
    path: "/dashboard/:id",
    name: "Dashboard",
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: HomeAdmin,
      },
      {
        path: "create-project",
        name: "Create-Project",
        component: CreateProyect,
      },
      {
        path: "edit-project/:projectId",
        name: "Edit-Project",
        component: CreateProyect,
      },
      {
        path: "create-user",
        name: "Create-User",
        component: CreateUser,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _, next) => {
  const { data, error } = await supabase.auth.getUser();
  if (to.meta.requiresAuth && (error || !data)) {
    return next({ name: "Login" });
  }
  next();
});

export default router;
