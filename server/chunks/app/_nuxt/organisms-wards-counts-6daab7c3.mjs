import { a as useCookie, b as useNuxtApp, d as __nuxt_component_0 } from '../server.mjs';
import { _ as _sfc_main$1 } from './ExportButton-c520dc00.mjs';
import { _ as _sfc_main$2 } from './Address-efb6382b.mjs';
import { defineComponent, ref, computed, resolveComponent, withCtx, unref, isRef, createVNode, createTextVNode, useSSRContext } from 'vue';
import { e as errorMessage } from './constants-9b77e6ea.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import moment from 'moment';
import { e as endpoints, f as fetchRequest } from './fetch-61d93cc9.mjs';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import { r as render } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$1 } from './ArrowPathIcon-6ff7b048.mjs';
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
import '@headlessui/vue';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "organisms-wards-counts",
  __ssrInlineRender: true,
  setup(__props) {
    const dateFrom = ref("");
    ref("");
    const headers = ref([
      {
        name: "Ward Name"
      },
      {
        name: "Ward Type"
      },
      {
        name: "Period"
      },
      {
        name: "Organism Name"
      },
      {
        name: "Total Count"
      }
    ]);
    const cookie = useCookie("token");
    const reportData = ref([]);
    const facility = useFacilityStore();
    const loading = ref(false);
    const exportData = computed(() => {
      return reportData.value.map((report, index) => ({
        "WARD": report.ward,
        "ENCOUNTER": report.encounter,
        "DATE PERIOD": moment(dateFrom.value).format("MMMM-yyyy"),
        "ORGANISMS": report.organism,
        "COUNT": report.count
      }));
    });
    const isCleared = () => {
      dateFrom.value = "";
    };
    async function generateReport() {
      loading.value = true;
      let month = moment(dateFrom.value).format("M");
      let year = moment(dateFrom.value).format("yyyy");
      const request = {
        route: `${endpoints.aggregateReports}culture/organisms_wards_counts?year=${year}&month=${month}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data, error, pending } = await fetchRequest(request);
      loading.value = pending;
      if (data.value) {
        reportData.value = data.value.data;
        loading.value = false;
        useNuxtApp().$toast.success("Report data generated successfully");
      }
      if (error.value) {
        console.error(error.value);
        loading.value = false;
        useNuxtApp().$toast.error(errorMessage);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreActionButton = __nuxt_component_0;
      const _component_excel = resolveComponent("excel");
      const _component_CoreExportButton = _sfc_main$1;
      const _component_ReportsAddress = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full flex items-center justify-between mb-10">`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "form",
        "submit-label": "Update",
        onSubmit: generateReport,
        actions: false
      }, {
        default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-5"${_scopeId}><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(render), { class: "w-5 h-5 mr-2" }, null, _parent2, _scopeId));
            _push2(` Filter By Date Range <div class="w-56 ml-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_datepicker, {
              onCleared: isCleared,
              required: "",
              position: "left",
              placeholder: "select month & year",
              range: false,
              "input-class-name": "datepicker",
              modelValue: unref(dateFrom),
              "onUpdate:modelValue": ($event) => isRef(dateFrom) ? dateFrom.value = $event : null,
              format: "M/yyyy"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="w-48"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreActionButton, {
              type: "submit",
              color: "primary",
              text: "Generate Report",
              icon: unref(render$1),
              click: () => {
              },
              loading: unref(loading)
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-5" }, [
                createVNode("div", { class: "bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" }, [
                  createVNode(unref(render), { class: "w-5 h-5 mr-2" }),
                  createTextVNode(" Filter By Date Range "),
                  createVNode("div", { class: "w-56 ml-2" }, [
                    createVNode(_component_datepicker, {
                      onCleared: isCleared,
                      required: "",
                      position: "left",
                      placeholder: "select month & year",
                      range: false,
                      "input-class-name": "datepicker",
                      modelValue: unref(dateFrom),
                      "onUpdate:modelValue": ($event) => isRef(dateFrom) ? dateFrom.value = $event : null,
                      format: "M/yyyy"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "w-48" }, [
                  createVNode(_component_CoreActionButton, {
                    type: "submit",
                    color: "primary",
                    text: "Generate Report",
                    icon: unref(render$1),
                    click: () => {
                    },
                    loading: unref(loading)
                  }, null, 8, ["icon", "loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_excel, {
        class: "btn btn-default",
        header: [`CULTURE & SENSITIVITY ORGANISMS IN WARDS COUNTS REPORT ${unref(moment)(unref(dateFrom)).format("M/yyyy")}`, unref(facility).details.name, unref(facility).details.address, unref(facility).details.phone],
        data: unref(exportData),
        worksheet: "report-work-sheet",
        name: `culture_sensitivity_organisms_in_wards_counts_report_${unref(moment)(unref(dateFrom)).format("M_yyyy")}.xls`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CoreExportButton, { text: "Export Excel" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CoreExportButton, { text: "Export Excel" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="rounded border" id="print-container"><div class="rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><div class="flex flex-col space-y-2"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-xl font-semibold">CULTURE &amp; SENSITIVITY ORGANISMS IN WARDS COUNTS REPORT </h3></div>`);
      _push(ssrRenderComponent(_component_ReportsAddress, null, null, _parent));
      _push(`</div><div><h3 class="px-4 mt-2 font-medium">Data for period: <span class="font-normal">${ssrInterpolate(unref(dateFrom) == "" ? "" : unref(moment)(unref(dateFrom)).format("M/yyyy"))}</span></h3></div><div><table class="w-full mt-3"><thead class="w-full border-b border-t border-l bg-gray-100 rounded-t"><tr class="w-full"><!--[-->`);
      ssrRenderList(unref(headers), (header, index) => {
        _push(`<th class="px-2 py-2 border-r">${ssrInterpolate(header.name)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(reportData), (report, index) => {
        _push(`<tr class="border-b border-l border-r"><td class="px-2 py-2 text-center border-r">${ssrInterpolate(report.ward)}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate(report.encounter)}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate(unref(moment)(unref(dateFrom)).format("MMMM-yyyy"))}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate(report.organism)}</td><td class="px-2 py-2 text-center">${ssrInterpolate(report.count)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/culture-sensitivity/organisms-wards-counts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=organisms-wards-counts-6daab7c3.mjs.map
