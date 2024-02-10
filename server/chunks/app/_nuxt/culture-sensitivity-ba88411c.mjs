import { _ as _sfc_main$1 } from './Breadcrumb-fc731a79.mjs';
import { defineAsyncComponent, defineComponent, ref, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { u as useHead } from './index-2cdcde44.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { P as Package } from './package-f9450e57.mjs';
import './nuxt-link-42c558b2.mjs';
import '../server.mjs';
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
import './HomeIcon-299b993b.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

const LazyCultureSensitivityGeneralCounts = defineAsyncComponent(() => import('./general-counts-fc712fdf.mjs').then((r) => r.default));
const LazyCultureSensitivityOrganismsCounts = defineAsyncComponent(() => import('./organisms-counts-74077363.mjs').then((r) => r.default));
const LazyCultureSensitivityOrganismsWardsCounts = defineAsyncComponent(() => import('./organisms-wards-counts-c1d30db8.mjs').then((r) => r.default));
const LazyCultureSensitivityWardsCounts = defineAsyncComponent(() => import('./wards-counts-6f196606.mjs').then((r) => r.default));
const LazyCultureSensitivityAst = defineAsyncComponent(() => import('./ast-4b1c9adc.mjs').then((r) => r.default));
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
//# sourceMappingURL=culture-sensitivity-ba88411c.mjs.map
