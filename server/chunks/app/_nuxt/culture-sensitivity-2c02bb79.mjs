import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { defineAsyncComponent, defineComponent, ref, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { P as Package } from './package-01289411.mjs';
import { u as useHead } from '../server.mjs';
import './nuxt-link-149f0ed2.mjs';
import 'ufo';
import './HomeIcon-299b993b.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
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
import 'pinia-plugin-persistedstate';
import 'vue3-easy-data-table';
import '@vuepic/vue-datepicker';
import 'vue-json-excel3';
import '@vueform/multiselect';
import 'vue3-toastify';

const LazyCultureSensitivityGeneralCounts = defineAsyncComponent(() => import('./general-counts-9e5fe988.mjs').then((r) => r.default));
const LazyCultureSensitivityOrganismsCounts = defineAsyncComponent(() => import('./organisms-counts-fd078b1d.mjs').then((r) => r.default));
const LazyCultureSensitivityOrganismsWardsCounts = defineAsyncComponent(() => import('./organisms-wards-counts-6daab7c3.mjs').then((r) => r.default));
const LazyCultureSensitivityWardsCounts = defineAsyncComponent(() => import('./wards-counts-1ecc254c.mjs').then((r) => r.default));
const LazyCultureSensitivityAst = defineAsyncComponent(() => import('./ast-12d75a4d.mjs').then((r) => r.default));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "culture-sensitivity",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - Culture & Sensitivity Report`
    });
    const title = ref("Culture & Sensitivity Report");
    const tabs = ref(new Array(
      "General Counts",
      "Ward Based Counts",
      "Organisms Based Count",
      "Organisms in Wards Count",
      "Antibiotic Susceptibility Test (AST)"
    ));
    const components = ref([
      LazyCultureSensitivityGeneralCounts,
      LazyCultureSensitivityWardsCounts,
      LazyCultureSensitivityOrganismsCounts,
      LazyCultureSensitivityOrganismsWardsCounts,
      LazyCultureSensitivityAst
    ]);
    const activeTab = ref(0);
    const pages = ref(new Array(
      {
        name: "Home",
        link: "/home"
      },
      {
        name: "Reports",
        link: "#"
      },
      {
        name: "Aggregate Reports",
        link: "#"
      }
    ));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center py-5"><img${ssrRenderAttr("src", _imports_2)} alt="report-icon" class="w-8 h-8 mr-2"><h3 class="text-2xl font-semibold uppercase">${ssrInterpolate(unref(title))}</h3></div><div><div class="font-medium bg-gray-100"><!--[-->`);
      ssrRenderList(unref(tabs), (tab, index) => {
        _push(`<button class="${ssrRenderClass(unref(activeTab) == index ? "inline-block px-2 py-2 text-white bg-sky-500" : "inline-block px-2 py-2 border-r hover:text-sky-500 transition duration-150")}">${ssrInterpolate(tab)}</button>`);
      });
      _push(`<!--]--></div><div class="mt-4">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(components)[unref(activeTab)]), null, null), _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/culture-sensitivity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=culture-sensitivity-2c02bb79.mjs.map
