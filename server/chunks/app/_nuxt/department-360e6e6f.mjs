import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './index-8c239cbf.mjs';
import { _ as _sfc_main$2 } from './ExportButton-c520dc00.mjs';
import { _ as _sfc_main$3 } from './Address-af315606.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { d as dateFormat } from './constants-353d90a1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_0$1 } from './stock_out-9944e6b9.mjs';
import { e as endpoints, f as fetchRequest } from './fetch-40f40580.mjs';
import moment from 'moment';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import { P as Package } from './package-93ceb647.mjs';
import { ExportToExcel } from 'vue-doc-exporter';
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
import 'html2canvas';
import 'jspdf';
import './XMarkIcon-170c776f.mjs';
import './PrinterIcon-02ac6ae4.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './PencilSquareIcon-77446728.mjs';

const title = "Department Report";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "department",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - Department Report`
    });
    useFacilityStore();
    const departments = ref(
      new Array()
    );
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
    const selectedDepartment = ref({ name: "select department" });
    const dateFrom = ref("");
    const dateTo = ref("");
    const cookie = useCookie("token");
    const reportData = ref({ wards: [], data: [] });
    const loading = ref(false);
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
    async function getDepartments() {
      const request = {
        route: endpoints.departments,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        departments.value = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    }
    async function generateReport() {
      if (!validate()) {
        loading.value = true;
        let startDate = dateRange.value[0].toString() != "" ? moment(dateRange.value[0].toString()).format("YYYY-MM-DD") : "";
        let endDate = dateRange.value[1].toString() != "" ? moment(dateRange.value[1].toString()).format("YYYY-MM-DD") : "";
        let queryParams = `from=${startDate}&to=${endDate}&department=${checkStatus(selectedDepartment.value.name)}`;
        const request = {
          route: `${endpoints.aggregateReports}/department?${queryParams}`,
          method: "GET",
          token: `${cookie.value}`
        };
        const { data, error, pending } = await fetchRequest(request);
        loading.value = pending;
        if (data.value) {
          loading.value = false;
          reportData.value = data.value;
          useNuxtApp().$toast.success("Report generated successfully!");
        }
        if (error.value) {
          loading.value = false;
          console.error(error.value);
        }
      } else {
        useNuxtApp().$toast.warning("Please select a department!");
      }
    }
    function checkStatus(status) {
      return status === "select department" || status === "-- select test type --" || status === "-- select test status --" ? "" : status;
    }
    function validate() {
      return selectedDepartment.value.name == "select department";
    }
    function calculateRowTotal(report) {
      const total = reportData.value.wards.reduce((acc, ward) => {
        return acc + (report.ward[ward] ? report.ward[ward] : 0);
      }, 0);
      return total;
    }
    function getDataValue(data, gender, ward, ageRange) {
      const bloodBankProductCopy = JSON.parse(JSON.stringify(data[Object.keys(data)[0]]));
      const genderData = bloodBankProductCopy.find((item) => item.gender === gender);
      if (!genderData) {
        return 0;
      }
      const wardData = genderData.ward.find((item) => Object.keys(item)[0] === ward.toLowerCase());
      if (!wardData) {
        return 0;
      }
      const ageRangeData = wardData[ward.toLowerCase()][ageRange];
      if (ageRangeData === void 0) {
        return 0;
      }
      return ageRangeData;
    }
    getDepartments();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$1;
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreDropdown = __nuxt_component_0;
      const _component_CoreActionButton = __nuxt_component_0$1;
      const _component_CorePrinter = __nuxt_component_1;
      const _component_CoreExportButton = _sfc_main$2;
      const _component_ReportsAddress = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center py-5"><img${ssrRenderAttr("src", _imports_2)} alt="report-icon" class="w-8 h-8 mr-2"><h3 class="text-2xl font-semibold uppercase">${ssrInterpolate(title)}</h3></div><div class="w-full flex items-center justify-between"><div class="flex items-center space-x-3"><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500">`);
      _push(ssrRenderComponent(unref(render), { class: "w-5 h-5 mr-2" }, null, _parent));
      _push(` Filter By Date Range <div class="w-72 ml-2">`);
      _push(ssrRenderComponent(_component_datepicker, {
        onCleared: isCleared,
        required: "",
        position: "left",
        placeholder: "select start & end date",
        range: true,
        "input-class-name": "datepicker",
        modelValue: unref(dateRange),
        "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null
      }, null, _parent));
      _push(`</div></div><div class="w-44">`);
      _push(ssrRenderComponent(_component_CoreDropdown, {
        items: unref(departments),
        modelValue: unref(selectedDepartment),
        "onUpdate:modelValue": ($event) => isRef(selectedDepartment) ? selectedDepartment.value = $event : null
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        color: "primary",
        text: "Generate Report",
        icon: unref(render$1),
        click: () => generateReport(),
        loading: unref(loading)
      }, null, _parent));
      _push(`</div></div><div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(_component_CorePrinter, { printSmallLabel: false }, null, _parent));
      _push(ssrRenderComponent(unref(ExportToExcel), {
        element: "print-container",
        filename: `department_report_from_${unref(moment)(unref(dateFrom)).format("DD_MM_yyyy")}_to_${unref(moment)(unref(dateTo)).format("DD_MM_yyyy")}`
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
      _push(`</div></div><div class="border rounded print-container mt-5" id="print-container"><div class="w-full rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><div class="flex flex-col space-y-2"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-xl font-semibold"> LABORATORY DEPARTMENT REPORT </h3></div>`);
      _push(ssrRenderComponent(_component_ReportsAddress, null, null, _parent));
      _push(`</div><div class="mt-3 px-5 border-b"><h3 class="font-medium mb-2">Tests Performed Period: <span class="font-normal">${ssrInterpolate(unref(dateRange)[0].toString() != "" ? unref(moment)(unref(dateRange)[0].toString()).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} - ${ssrInterpolate(unref(dateRange)[1].toString() != "" ? unref(moment)(unref(dateRange)[1].toString()).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</span></h3></div>`);
      if (unref(reportData).wards.length > 0 && unref(reportData).data.length > 0) {
        _push(`<div class="overflow-x-auto"><table class="w-full border border-dotted rounded overflow-x-auto"><thead class="w-full"><tr><th class="px-2 py-2 text-center border-r">Tests</th><th class="px-2 py-2 text-center border-r border-b"${ssrRenderAttr("colspan", unref(reportData).wards.length)}>Wards </th><th class="px-2 py-2 text-center">Total</th></tr><tr class="border-b"><th class="border-r"></th><!--[-->`);
        ssrRenderList(unref(reportData).wards, (ward, index) => {
          _push(`<th class="px-2 py-2 text-center border-r">${ssrInterpolate(ward)}</th>`);
        });
        _push(`<!--]--></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(reportData).data, (data, index) => {
          _push(`<!--[--><th class="capitalize px-2 py-2 text-center bg-gray-50 border-b border-t">${ssrInterpolate(Object.keys(data)[0])}</th><!--[-->`);
          ssrRenderList(unref(reportData).wards, (ward, wardIndex) => {
            _push(`<th class="capitalize px-2 py-2 text-center bg-gray-50 border-b border-t"></th>`);
          });
          _push(`<!--]--><th class="capitalize px-2 py-2 text-center bg-gray-50 border-b border-t"></th><!--[-->`);
          ssrRenderList(data[Object.keys(data)[0]], (report, reportIndex) => {
            _push(`<tr class="border-t border-b"><td class="capitalize px-2 py-2 text-center border-r">${ssrInterpolate(report.test_type)}</td><!--[-->`);
            ssrRenderList(unref(reportData).wards, (ward, wardIndex) => {
              _push(`<td class="border-r px-2 py-2 text-center">${ssrInterpolate(report.ward[ward] ? report.ward[ward] : 0)}</td>`);
            });
            _push(`<!--]--><td class="px-2 py-2 text-center">${ssrInterpolate(calculateRowTotal(report))}</td></tr>`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--></tbody></table>`);
        if (unref(reportData).blood_bank_products.length > 0) {
          _push(`<table class="w-full border border-dotted rounded overflow-x-auto mt-10"><thead><tr><th class="border-b px-2 py-2"${ssrRenderAttr("rowspan", 4)}>Blood Product</th><th class="border-b px-2 py-2"></th><th class="border-b px-2 py-2"${ssrRenderAttr("colspan", unref(reportData).wards.length)}>Wards</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(unref(reportData).blood_bank_products, (data, index) => {
            _push(`<!--[--><tr class="border-t"><td class="capitalize px-2 py-2 text-center bg-gray-50 border-r">${ssrInterpolate(Object.keys(data)[0])}</td><td class="px-2 py-2 border-r border-b"></td><!--[-->`);
            ssrRenderList(unref(reportData).wards, (ward, index2) => {
              _push(`<th${ssrRenderAttr("colspan", 3)} class="px-2 py-2 text-center border-r border-b">${ssrInterpolate(ward)}</th>`);
            });
            _push(`<!--]--></tr><tr><td class="px-2 py-2 bg-gray-50 border-r">\xA0</td><td class="px-2 py-2 border-b border-r">Age-Ranges</td><!--[-->`);
            ssrRenderList(unref(reportData).wards, (i, k) => {
              _push(`<!--[--><td class="px-2 py-2 border-b border-r">0-5</td><td class="px-2 py-2 border-b border-r">6-14</td><td class="border-r px-2 py-2 border-b">15-120</td><!--]-->`);
            });
            _push(`<!--]--></tr><tr><td class="px-2 py-2 bg-gray-50 border-r">\xA0</td><td class="px-2 py-2 border-b border-r">Female</td><!--[-->`);
            ssrRenderList(unref(reportData).wards, (ward) => {
              _push(`<!--[--><td class="px-2 py-2 border-b border-r">${ssrInterpolate(getDataValue(data, "female", ward, "0-5"))}</td><td class="px-2 py-2 border-b border-r">${ssrInterpolate(getDataValue(data, "female", ward, "6-14"))}</td><td class="border-r px-2 py-2 border-b">${ssrInterpolate(getDataValue(data, "female", ward, "15-120"))}</td><!--]-->`);
            });
            _push(`<!--]--></tr><tr><td class="px-2 py-2 bg-gray-50 border-r">\xA0</td><td class="px-2 py-2 border-b border-r">Male</td><!--[-->`);
            ssrRenderList(unref(reportData).wards, (ward) => {
              _push(`<!--[--><td class="px-2 py-2 border-b border-r">${ssrInterpolate(getDataValue(data, "male", ward, "0-5"))}</td><td class="px-2 py-2 border-b border-r">${ssrInterpolate(getDataValue(data, "male", ward, "6-14"))}</td><td class="border-r px-2 py-2 border-b">${ssrInterpolate(getDataValue(data, "male", ward, "15-120"))}</td><!--]-->`);
            });
            _push(`<!--]--></tr><!--]-->`);
          });
          _push(`<!--]--></tbody></table>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(reportData).wards.length == 0 && unref(reportData).data.length == 0) {
        _push(`<div class="flex flex-col space-y-3 items-center justify-center py-10"><img${ssrRenderAttr("src", _imports_0$1)} class="w-20 h-20"><p>Please generate report data to preview the <span class="font-medium">${ssrInterpolate(unref(selectedDepartment).name)}</span> report. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/department.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=department-360e6e6f.mjs.map
