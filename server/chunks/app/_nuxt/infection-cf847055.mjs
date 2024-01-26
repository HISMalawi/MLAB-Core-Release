import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0$1 } from '../server.mjs';
import { _ as _sfc_main$2 } from './ExportButton-c520dc00.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, unref, withCtx, isRef, createVNode, createTextVNode, useSSRContext } from 'vue';
import { e as errorMessage } from './constants-353d90a1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_1 } from './page-c16a1934.mjs';
import { e as endpoints, f as fetchRequest } from './fetch-40f40580.mjs';
import moment from 'moment';
import { ExportToExcel } from 'vue-doc-exporter';
import { P as Package } from './package-834e49f3.mjs';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import { r as render } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$1 } from './ArrowPathIcon-6ff7b048.mjs';
import './nuxt-link-149f0ed2.mjs';
import 'ufo';
import './HomeIcon-299b993b.mjs';
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
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
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "infection",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - Infection Report`
    });
    const title = ref("Infection Report");
    const pages = ref([
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
    ]);
    const departments = ref([]);
    const selectedDepartment = ref({ id: 0, name: "select department" });
    const cookie = useCookie("token");
    const facility = useFacilityStore();
    const loading = ref(false);
    const reportData = ref([]);
    reportData.value = [
      {
        test_type: "Syphilis Test",
        measure: "VDLR",
        result: "High",
        gender: "Male"
      },
      {
        test_type: "Syphilis Test",
        measure: "VDLR",
        result: "High",
        gender: "Female"
      },
      {
        test_type: "Syphilis Test",
        measure: "VDLR",
        result: "Medium",
        gender: "Male"
      }
    ];
    const dateRange = ref(
      new Array(
        "",
        ""
      )
    );
    const isCleared = () => {
      dateRange.value = new Array(
        "",
        ""
      );
    };
    const generateTableHeader = () => {
      return '<thead class="w-full h-full border-b"><tr class="w-full h-full"><th rowspan="2" class="px-2 py-2 border-r">Test</th><th rowspan="2" class="border-r">Measure</th><th rowspan="2" class="px-2 py-2 border-r">Results</th><th rowspan="2" class="px-2 py-2 border-r">Sex</th><th colspan="3" scope="colgroup" class="border-r border-b px-2 py-2">Age Range</th><th rowspan="2" class="px-2 py-2 border-r">M/F Total</th><th rowspan="2" class="px-2 py-2">Total</th></tr><tr><th scope="col" class="border-l px-2 py-2 border-r">[0-5]</th><th scope="col" class="border-r px-2 py-2">[5-14]</th><th scope="col" class="border-r px-2 py-2">[14-120]</th></tr></thead>';
    };
    const generateTableBody = (data) => {
      let tBody = "";
      let currentMeasure = "";
      let currentTest = "";
      let currentResult = "";
      data.forEach((rowData, index) => {
        if (currentTest == rowData.test_type) {
          if (currentMeasure !== rowData.test_type) {
            currentTest = rowData.test_type;
            currentMeasure = rowData.measure;
            tBody += "<tr>";
            tBody += `<td rowspan="">` + rowData.test_type + "</td>";
            tBody += `<td rowspan=""></td>`;
            tBody += "</tr>";
          } else if (currentResult == rowData.result) {
            tBody += "<td rowspan='NEW_RESULT'>[SomeResult]</td>";
          }
        } else {
          currentTest = rowData.test_type;
          currentMeasure = rowData.measure;
          currentResult = rowData.result;
          tBody += "<tr class='tests'>";
          tBody += "<td class='test_type' rowspan='NEW_TEST'>" + rowData.test_type + "</td>";
          tBody += "<td rowspan='NEW_MEASURE'>" + rowData.measure + "</td>";
          tBody += "<td rowspan='NEW_RESULT'>" + rowData.result + "</td>";
        }
        tBody += "<td>" + rowData.gender + "</td>";
      });
      return tBody;
    };
    const infectionReportTable = (reportData2) => {
      const tHeader = generateTableHeader();
      const tBody = reportData2.length > 0 ? generateTableBody(reportData2) : "<tr></tr>";
      return `<table class="w-full rounded">${tHeader}${tBody}</table>`;
    };
    async function loadDepartments() {
      const request = {
        route: `${endpoints.departments}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        departments.value = data.value;
        departments.value.unshift({ id: 0, name: "All" });
      }
      if (error.value) {
        console.log(error.value);
      }
    }
    async function generateReport() {
      if (validate())
        useNuxtApp().$toast.warning("Please select a department");
      else {
        loading.value = true;
        let startDate = dateRange.value[0].toString() != "" ? moment(dateRange.value[0].toString()).format("YYYY-MM-DD") : "";
        let endDate = dateRange.value[1].toString() != "" ? moment(dateRange.value[1].toString()).format("YYYY-MM-DD") : "";
        const request = {
          route: `${endpoints.aggregateReports}infection?from=${startDate}&to=${endDate}&department=${selectedDepartment.value.id}`,
          method: "GET",
          token: `${cookie.value}`
        };
        const { data, error, pending } = await fetchRequest(request);
        loading.value = pending;
        if (data.value) {
          loading.value = false;
          reportData.value = data.value.data;
        }
        if (error.value) {
          console.error(error.value);
          loading.value = false;
          useNuxtApp().$toast.error(errorMessage);
        }
      }
    }
    function validate() {
      return selectedDepartment.value.name == "select department";
    }
    loadDepartments();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$1;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreDropdown = __nuxt_component_0;
      const _component_CoreActionButton = __nuxt_component_0$1;
      const _component_CoreExportButton = _sfc_main$2;
      const _component_CoreLoader = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center py-5"><img${ssrRenderAttr("src", _imports_2)} alt="report-icon" class="w-8 h-8 mr-2"><h3 class="text-2xl font-semibold uppercase">${ssrInterpolate(unref(title))}</h3></div><div class="w-full flex items-center justify-between mb-5">`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "form",
        "submit-label": "Update",
        onSubmit: generateReport,
        actions: false,
        id: "submitForm"
      }, {
        default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex items-center space-x-3"${_scopeId}><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(render), { class: "w-5 h-5 mr-2" }, null, _parent2, _scopeId));
            _push2(` Filter By Date Range <div class="w-72 ml-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_datepicker, {
              onCleared: isCleared,
              required: "",
              position: "left",
              placeholder: "select start & end date",
              range: true,
              "input-class-name": "datepicker",
              modelValue: unref(dateRange),
              "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="w-40"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreDropdown, {
              items: unref(departments),
              modelValue: unref(selectedDepartment),
              "onUpdate:modelValue": ($event) => isRef(selectedDepartment) ? selectedDepartment.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreActionButton, {
              loading: unref(loading),
              color: "primary",
              type: "submit",
              text: "Generate Report",
              icon: unref(render$1),
              click: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex items-center space-x-3" }, [
                createVNode("div", { class: "bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" }, [
                  createVNode(unref(render), { class: "w-5 h-5 mr-2" }),
                  createTextVNode(" Filter By Date Range "),
                  createVNode("div", { class: "w-72 ml-2" }, [
                    createVNode(_component_datepicker, {
                      onCleared: isCleared,
                      required: "",
                      position: "left",
                      placeholder: "select start & end date",
                      range: true,
                      "input-class-name": "datepicker",
                      modelValue: unref(dateRange),
                      "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "w-40" }, [
                  createVNode(_component_CoreDropdown, {
                    items: unref(departments),
                    modelValue: unref(selectedDepartment),
                    "onUpdate:modelValue": ($event) => isRef(selectedDepartment) ? selectedDepartment.value = $event : null
                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", null, [
                  createVNode(_component_CoreActionButton, {
                    loading: unref(loading),
                    color: "primary",
                    type: "submit",
                    text: "Generate Report",
                    icon: unref(render$1),
                    click: () => {
                    }
                  }, null, 8, ["loading", "icon"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-48 flex items-end justify-end">`);
      _push(ssrRenderComponent(unref(ExportToExcel), {
        element: "print-container",
        filename: `infection_report_from_${unref(moment)(unref(dateRange)[0].toString()).format("DD_MM_YYYY")}_to_${unref(moment)(unref(dateRange)[1].toString()).format("DD_MM_YYYY")}`
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
      _push(`</div></div><div><h3 class="text-lg font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate(unref(dateRange)[0].toString() != "" ? unref(moment)(unref(dateRange)[0].toString()).format("DD/MM/YYYY") : "")} - ${ssrInterpolate(unref(dateRange)[1].toString() != "" ? unref(moment)(unref(dateRange)[1].toString()).format("DD/MM/YYYY") : "")}</span></h3><div class="rounded border" id="print-container"><div class="hidden"><h3 class="flex items-center justify-center">LABORATORY INFECTION REPORT <p>${ssrInterpolate(unref(facility).details.name)}</p><p>${ssrInterpolate(unref(facility).details.address)}</p><p>${ssrInterpolate(unref(facility).details.phone)}</p></h3><h3 class="text-lg font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate(unref(dateRange)[0].toString() != "" ? unref(moment)(unref(dateRange)[0].toString()).format("DD/MM/YYYY") : "")} - ${ssrInterpolate(unref(dateRange)[1].toString() != "" ? unref(moment)(unref(dateRange)[1].toString()).format("DD/MM/YYYY") : "")}</span></h3></div><div>${infectionReportTable(unref(reportData))}</div></div>`);
      if (unref(reportData).length == 0 && !unref(loading)) {
        _push(`<div class="w-full flex flex-col items-center justify-center space-y-2 py-10"><img${ssrRenderAttr("src", _imports_1)} alt="page-icon" class="object-cover w-20 h-20"><p class="text-base">Data not found, please generate report</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(loading) ? null : { display: "none" })}" class="mx-auto justify-center flex flex-col items-center space-y-3 py-20">`);
      _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
      _push(`<p class="text-base">Generating report, please wait<span class="animate-ping">...</span></p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/infection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=infection-cf847055.mjs.map
