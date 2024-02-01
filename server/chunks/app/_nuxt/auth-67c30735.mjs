import { s as defineNuxtRouteMiddleware, t as storeToRefs, u as useCookie, n as navigateTo } from '../server.mjs';
import { u as useAuthStore, q as useRouteStore } from './fetch-5298dfa4.mjs';
import 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import '@formkit/icons';
import 'pinia-plugin-persistedstate';
import 'vue3-easy-data-table';
import '@vuepic/vue-datepicker';
import 'vue-json-excel3';
import '@vueform/multiselect';
import 'vue3-toastify';
import 'vue/server-renderer';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'moment';
import './constants-9b77e6ea.mjs';
import '@headlessui/vue';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware(() => {
  const { authenticated } = storeToRefs(useAuthStore());
  const token = useCookie("token");
  if (token.value) {
    authenticated.value = true;
  }
  if (authenticated) {
    const { route } = useRouteStore();
    navigateTo(route);
  } else {
    return navigateTo("/");
  }
  return;
});

export { auth as default };
//# sourceMappingURL=auth-67c30735.mjs.map
