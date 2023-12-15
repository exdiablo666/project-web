import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import ProtoLogin from "./pages/ProtoLogin.vue";
import AdminHalamanAdmin from "./pages/AdminHalamanAdmin.vue";
import AdminDataHistory from "./pages/AdminDataHistory.vue";
import AdminDataInventory from "./pages/AdminDataInventory.vue";
import AdminTambahInventory from "./pages/AdminTambahInventory.vue";
import AdminDataPeminjaman from "./pages/AdminDataPeminjaman.vue";
import AdminDataUser from "./pages/AdminDataUser.vue";
import AdminTambahUser from "./pages/AdminTambahUser.vue";
import AdminProfile from "./pages/AdminProfile.vue";
import AdminUpdateAdmin from "./pages/AdminUpdateAdmin.vue";

import "./global.css";

const routes = [
  {
    path: "/",
    name: "ProtoLogin",
    component: ProtoLogin,
  },
  {
    path: "/admin-halaman-admin",
    name: "AdminHalamanAdmin",
    component: AdminHalamanAdmin,
  },
  {
    path: "/admin-data-history",
    name: "AdminDataHistory",
    component: AdminDataHistory,
  },
  {
    path: "/admin-data-inventory",
    name: "AdminDataInventory",
    component: AdminDataInventory,
  },
  {
    path: "/admin-tambah-inventory",
    name: "AdminTambahInventory",
    component: AdminTambahInventory,
  },
  
  {
    path: "/admin-data-peminjaman",
    name: "AdminDataPeminjaman",
    component: AdminDataPeminjaman,
  },
  {
    path: "/admin-data-user",
    name: "AdminDataUser",
    component: AdminDataUser,
  },
  {
    path: "/admin-tambah-user",
    name: "AdminTambahUser",
    component: AdminTambahUser,
  },
  {
    path: "/admin-profile",
    name: "AdminProfile",
    component: AdminProfile,
  },
  {
    path: "/admin-update-admin",
    name: "AdminUpdateAdmin",
    component: AdminUpdateAdmin,
  },
  
  
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title
      ? toRoute?.meta?.title
      : "Pages-Admin-Web-Inventory";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
