import { l as defineNuxtRouteMiddleware, s as storeToRefs, a as useCookie, n as navigateTo } from '../server.mjs';
import { u as useAuthStore, q as useRouteStore } from './fetch-40f40580.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import '@formkit/icons';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'vue3-easy-data-table';
import '@vuepic/vue-datepicker';
import 'vue-json-excel3';
import '@vueform/multiselect';
import 'vue3-toastify';
import 'vue/server-renderer';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'moment';
import './constants-353d90a1.mjs';
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
//# sourceMappingURL=auth-967a8d84.mjs.map
