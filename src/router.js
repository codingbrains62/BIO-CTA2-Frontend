import { createWebHistory, createRouter } from "vue-router";
import ReportingBoir from "./components/ReportingBoir.vue";
import DashboardBoir from "./components/DashboardBoir.vue";
import Applicant from "./components/ApplicantBoir.vue";
import BenificialBoir from "./components/BenificialBoir.vue";
import FillingBoir from "./components/FillingBoir.vue";
const routes = [
  {
    name: "ReportingBoir",
    path: "/reporting",
    component: ReportingBoir,
  },
  {
    name: "FillingBoir",
    path: "/filling",
    component: FillingBoir,
  },
  {
    name: "Applicant",
    path: "/applicant",
    component: Applicant,
  },
  {
    name: "BenificialBoir",
    path: "/benificial",
    component: BenificialBoir,
  },
  {
    name: "Dashboard",
    path: "/",
    component: DashboardBoir,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
