import { _ as __nuxt_component_0 } from './Breadcrumb-058f5536.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-15d8abe8.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-link-7a607302.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './HomeIcon-299b993b.mjs';
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
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

const _sfc_main = {
  data() {
    return {
      title: "Quality Controls Reports",
      pages: [
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
      ],
      departments: [
        { name: "Microbiology" },
        { name: "Hematology" },
        { name: "Parasitology" },
        { name: "Chemistry" }
      ],
      selectedDepartment: { name: "Microbiology" },
      dateFrom: new Array(),
      dateTo: new Array(),
      formatter: {
        date: "DD MMM YYYY",
        month: "MMM"
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreDropdown = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.title)}</h3></div><div class="w-full flex items-center space-x-3"><div class="w-40">`);
  _push(ssrRenderComponent(_component_datepicker, {
    range: "",
    placeholder: "-- start date --",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    "as-single": "",
    shortcuts: true,
    modelValue: $data.dateFrom,
    "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
    format: "dd/MM/yyyy"
  }, null, _parent));
  _push(`</div><div class="w-40">`);
  _push(ssrRenderComponent(_component_datepicker, {
    range: "",
    placeholder: "-- end date --",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    "as-single": "",
    shortcuts: true,
    modelValue: $data.dateTo,
    "onUpdate:modelValue": ($event) => $data.dateTo = $event,
    format: "dd/MM/yyyy"
  }, null, _parent));
  _push(`</div><div class="w-40">`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.departments,
    "model-value": $data.selectedDepartment
  }, null, _parent));
  _push(`</div></div><div class="mt-3"><h3 class="text-lg font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate($data.dateFrom[0])} - ${ssrInterpolate($data.dateTo[0])}</span></h3></div><div class="border rounded"><div class="bg-gray-50 rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2"><address class="font-medium not-italic leading-tight text-gray-700"> Kamuzu Central Hospital<br> P.O Box 11<br> Lilongwe<br><a href="tel:+265 33 22 11" class="text-sky-600 hover:text-sky-700">+265 33 22 11</a></address><p class="font-medium underline uppercase">Laboratory Report</p></div></div><p class="px-5 py-5"> There are no tests in the <span class="font-medium">${ssrInterpolate($data.selectedDepartment.name)}</span> Lab Section for the period selected to display. </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/quality-control.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qualityControl = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { qualityControl as default };
//# sourceMappingURL=quality-control-2b62296d.mjs.map
