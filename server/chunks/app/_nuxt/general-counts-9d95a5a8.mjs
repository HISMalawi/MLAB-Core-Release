import { u as useCookie, b as __nuxt_component_0 } from '../server.mjs';
import { _ as _sfc_main$1 } from './ExportButton-c520dc00.mjs';
import { _ as _sfc_main$2 } from './Address-e8422e05.mjs';
import { defineComponent, ref, computed, resolveComponent, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import moment from 'moment';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { r as render } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$1 } from './ArrowPathIcon-6ff7b048.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './fetch-5298dfa4.mjs';
import './constants-9b77e6ea.mjs';
import '@headlessui/vue';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "general-counts",
  __ssrInlineRender: true,
  setup(__props) {
    const dateFrom = ref("");
    useCookie("token");
    const facility = useFacilityStore();
    const loading = ref(false);
    const reportData = ref(
      {
        "Growth": 0,
        "No growth": 0,
        "Mixed growth; no predominant organism": 0,
        "Growth of normal flora; no pathogens isolated": 0,
        "Growth of contaminants": 0
      }
    );
    const headers = ref([
      {
        name: "Growth"
      },
      {
        name: "No Growth"
      },
      {
        name: "Mixed Growth:  No Predominant Organism"
      },
      {
        name: "Growth Normal Flora: No Pathogens Isolated"
      },
      {
        name: "Growth: Contaminations"
      }
    ]);
    const exportData = computed(() => {
      return headers.value.map((header) => ({
        "NAME": header.name,
        "COUNT": reportData.value[header.name] || 0
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreActionButton = __nuxt_component_0;
      const _component_excel = resolveComponent("excel");
      const _component_CoreExportButton = _sfc_main$1;
      const _component_ReportsAddress = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full flex items-center justify-between mb-10"><form class="flex items-center space-x-5"><div class="flex flex-row items-center bg-gray-100 rounded-l pl-2 font-normal text-zinc-500">`);
      _push(ssrRenderComponent(unref(render), { class: "w-4 h-4 mr-2" }, null, _parent));
      _push(` Filter by date <div class="w-44 ml-2">`);
      _push(ssrRenderComponent(_component_datepicker, {
        placeholder: "month & year",
        required: "",
        "input-class-name": "custom-input",
        modelValue: unref(dateFrom),
        "onUpdate:modelValue": ($event) => isRef(dateFrom) ? dateFrom.value = $event : null,
        range: false,
        format: "M/yyyy",
        position: "left"
      }, null, _parent));
      _push(`</div></div><div class="w-48">`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        type: "submit",
        color: "primary",
        text: "Generate Report",
        icon: unref(render$1),
        click: () => {
        },
        loading: unref(loading)
      }, null, _parent));
      _push(`</div></form><div>`);
      _push(ssrRenderComponent(_component_excel, {
        class: "btn btn-default",
        header: [`CULTURE & SENSITIVITY GENERAL COUNTS REPORT ${unref(dateFrom)}`, unref(facility).details.name, unref(facility).details.address, unref(facility).details.phone, "", ""],
        data: unref(exportData),
        worksheet: "report-work-sheet",
        name: `culture_sensitivity_general_counts_report_${unref(moment)(unref(dateFrom)).format("M_YYYY")}.xls`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CoreExportButton, {
              text: "Export Excel",
              icon: "excel.png"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CoreExportButton, {
                text: "Export Excel",
                icon: "excel.png"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="rounded border" id="print-container"><div class="rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><div class="flex flex-col space-y-2"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-xl font-semibold">CULTURE &amp; SENSITIVITY GENERAL COUNTS REPORT </h3></div>`);
      _push(ssrRenderComponent(_component_ReportsAddress, null, null, _parent));
      _push(`</div><div><h3 class="px-4 py-2.5 font-medium">Data for period: <span class="font-normal">${ssrInterpolate(unref(dateFrom) == "" ? "-" : unref(moment)(unref(dateFrom)).format("M/yyyy"))}</span></h3></div><table class="w-full mt-2"><thead class="w-full border-b border-t bg-gray-100 rounded-t"><tr class="w-full"><!--[-->`);
      ssrRenderList(unref(headers), (header, index) => {
        _push(`<th class="px-2 py-2 border-r">${ssrInterpolate(header.name)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody><tr class="border-b"><td class="px-2 py-2 text-center border-r">${ssrInterpolate(unref(reportData)["Growth"])}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate(unref(reportData)["No growth"])}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate(unref(reportData)["Mixed growth; no predominant organism"])}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate(unref(reportData)["Growth of normal flora; no pathogens isolated"])}</td><td class="px-2 py-2 text-center">${ssrInterpolate(unref(reportData)["Growth of contaminants"])}</td></tr></tbody></table></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/culture-sensitivity/general-counts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=general-counts-9d95a5a8.mjs.map
