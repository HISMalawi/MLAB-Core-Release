import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-15d8abe8.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$2 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './index-96fc5f81.mjs';
import { e as errorMessage, d as dateFormat } from './constants-353d90a1.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { u as useHead } from './index-ca787103.mjs';
import moment from 'moment';
import { e as endpoints, f as fetchRequest } from './fetch-1797e116.mjs';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './ArrowPathIcon-6ff7b048.mjs';
import { r as render$1 } from './PrinterIcon-02ac6ae4.mjs';
import { r as render$2 } from './DocumentTextIcon-d89971e2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import './nuxt-link-0e3a4fce.mjs';
import './HomeIcon-299b993b.mjs';
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
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
import 'html2canvas';
import 'jspdf';
import './XMarkIcon-170c776f.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './PencilSquareIcon-77446728.mjs';

const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Lab Statistics Report`
    });
  },
  data() {
    return {
      moment,
      refreshIcon: render,
      printIcon: render$1,
      exportIcon: render$2,
      title: "Lab Statistics Reports",
      facility: useFacilityStore(),
      headers: [
        {
          name: "Tests"
        },
        {
          name: "Feb"
        },
        {
          name: "Total"
        }
      ],
      tests: [
        { name: "Blood glucose", feb: 50, total: 120 },
        { name: "Complete blood count", feb: 100, total: 250 },
        { name: "Electrolytes", feb: 75, total: 200 },
        { name: "Liver function tests", feb: 80, total: 180 },
        { name: "Kidney function tests", feb: 60, total: 150 },
        { name: "Lipid panel", feb: 70, total: 200 },
        { name: "Thyroid function tests", feb: 90, total: 220 },
        { name: "Urinalysis", feb: 40, total: 100 },
        { name: "Hemoglobin A1C", feb: 85, total: 190 },
        { name: "Hepatitis panel", feb: 55, total: 150 }
      ],
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
      departments: new Array(),
      selectedDepartment: { name: "-- select department --" },
      dateFrom: "",
      dateTo: "",
      cookie: useCookie("token"),
      reportData: new Array(),
      months: new Array(),
      filteredData: new Array(),
      exportData: new Array(),
      loading: false
    };
  },
  created() {
    this.getDepartments();
  },
  methods: {
    async getDepartments() {
      const request = {
        route: endpoints.departments,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.departments = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    checkStatus(status) {
      let returnValue = "";
      if (status == "-- select department --" || status === "-- select test type --" || status === "-- select test status --") {
        returnValue = "";
      } else {
        returnValue = status;
      }
      return returnValue;
    },
    generateMonths(from, to) {
      const startDate = new Date(from);
      const endDate = new Date(to);
      const months = new Array();
      let currentDate = startDate;
      while (currentDate <= endDate) {
        const month = currentDate.toLocaleString("default", { month: "long" });
        months.push(month);
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
      this.months = months;
    },
    async generateReport() {
      this.loading = true;
      let startDate = this.dateFrom != "" ? moment(this.dateFrom).format("YYYY-MM-DD") : "";
      let endDate = this.dateTo != "" ? moment(this.dateTo).format("YYYY-MM-DD") : "";
      let queryParams = `from=${startDate}&to=${endDate}&department=${this.checkStatus(this.selectedDepartment.name)}`;
      const request = {
        route: `${endpoints.aggregateReports}/lab_statistics?${queryParams}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.generateMonths(data.value.from, data.value.to);
        this.reportData = data.value.data;
        this.filteredData = this.filterData(data.value.data);
        let exportData = [];
        this.filteredData.forEach((department) => {
          const departmentObj = {};
          departmentObj["Tests".toUpperCase()] = department.department.toUpperCase();
          this.months.forEach((month) => {
            departmentObj[month.toUpperCase()] = "";
          });
          departmentObj["Total".toUpperCase()] = "";
          exportData.push(departmentObj);
          department.tests.forEach((test) => {
            const testObj = {};
            testObj["Tests".toUpperCase()] = test.name;
            this.months.forEach((month) => {
              testObj[month.toUpperCase()] = this.getTestResultByMonth(test, month);
            });
            testObj["Total".toUpperCase()] = this.getTotalTestResults(test);
            exportData.push(testObj);
          });
        });
        this.exportData = exportData;
        this.loading = false;
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
      }
    },
    filterData(reportData) {
      return reportData.map((item) => {
        const department = Object.keys(item)[0];
        const tests = Object.entries(item[department]).map(([testName, results]) => {
          const testResults = Object.entries(results).map(
            ([month, count]) => ({
              [month]: count
            })
          );
          return { name: testName, results: testResults };
        });
        return { department, tests };
      });
    },
    getTotalTestsByMonth(department, month) {
      let total = 0;
      department.tests.forEach((test) => {
        test.results.forEach((result) => {
          total += result[month] || 0;
        });
      });
      return total;
    },
    getTotalTests(department) {
      let total = 0;
      department.tests.forEach((test) => {
        test.results.forEach((result) => {
          Object.values(result).forEach((count) => {
            total += count;
          });
        });
      });
      return total;
    },
    getTestResultByMonth(test, month) {
      let result = 0;
      test.results.forEach((testResult) => {
        result += testResult[month] || 0;
      });
      return result;
    },
    getTotalTestResults(test) {
      let total = 0;
      test.results.forEach((testResult) => {
        Object.values(testResult).forEach((count) => {
          total += count;
        });
      });
      return total;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_CoreActionButton = __nuxt_component_0$2;
  const _component_CorePrinterReport = __nuxt_component_2;
  const _component_excel = resolveComponent("excel");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.title)}</h3></div><div class="w-full flex items-center justify-between mb-3"><div class="flex items-center space-x-3"><div class="w-40">`);
  _push(ssrRenderComponent(_component_datepicker, {
    position: "left",
    range: false,
    placeholder: "-- start date --",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    modelValue: $data.dateFrom,
    "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
    format: "dd/MM/yyyy"
  }, null, _parent));
  _push(`</div><div class="w-40">`);
  _push(ssrRenderComponent(_component_datepicker, {
    range: false,
    placeholder: "-- end date --",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    modelValue: $data.dateTo,
    "onUpdate:modelValue": ($event) => $data.dateTo = $event,
    format: "dd/MM/yyyy"
  }, null, _parent));
  _push(`</div><div class="w-44">`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.departments,
    modelValue: $data.selectedDepartment,
    "onUpdate:modelValue": ($event) => $data.selectedDepartment = $event
  }, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    color: "success",
    text: "Generate Report",
    icon: $data.refreshIcon,
    click: () => $options.generateReport(),
    loading: $data.loading
  }, null, _parent));
  _push(`</div></div><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_CorePrinterReport, null, null, _parent));
  _push(`<div>`);
  _push(ssrRenderComponent(_component_excel, {
    class: "btn btn-default",
    header: [`LABORATORY STATISTICS REPORT `, `PERIOD FROM ${$data.moment($data.dateFrom).format("DD-MM-yyyy")} TO ${$data.moment($data.dateTo).format("DD-MM-yyyy")}`, $data.facility.details.name, $data.facility.details.address, $data.facility.details.phone],
    data: $data.exportData,
    worksheet: "report-work-sheet",
    name: `lab-statistics-report_${$data.moment($data.dateFrom).format("DD_MM_yyyy")}_to_${$data.moment($data.dateTo).format("DD_MM_yyyy")}.xls`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          color: "success",
          click: () => {
          },
          icon: $data.exportIcon,
          text: "Export"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreActionButton, {
            color: "success",
            click: () => {
            },
            icon: $data.exportIcon,
            text: "Export"
          }, null, 8, ["icon"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="border rounded print-container" id="print-container"><div class="bg-gray-50 rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2 py-5"><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></div></div><div class="mt-3 px-5"><h3 class="font-medium mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate($data.dateFrom != "" ? $data.moment($data.dateFrom).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} - ${ssrInterpolate($data.dateTo != "" ? $data.moment($data.dateTo).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</span></h3></div><div class="border mx-5 mb-5"><table class="w-full"><thead class="uppercase bg-gray-100"><tr class="text-left"><th class="px-4 py-2">Tests</th><!--[-->`);
  ssrRenderList($data.months, (month) => {
    _push(`<th class="px-4 py-2">${ssrInterpolate(month)}</th>`);
  });
  _push(`<!--]--><th class="px-4 py-2">Total</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.filteredData, (department) => {
    _push(`<!--[--><tr style="${ssrRenderStyle({ "width": "100% !important" })}" class="w-full bg-gray-50 border-t border-b border-dotted"><td class="px-4 py-2 font-bold">${ssrInterpolate(department.department)}</td><!--[-->`);
    ssrRenderList($data.months, (month) => {
      _push(`<td class="px-4 py-2"></td>`);
    });
    _push(`<!--]--><td class="px-4 py-2"></td></tr><!--[-->`);
    ssrRenderList(department.tests, (test) => {
      _push(`<tr class="border-b border-dotted"><td class="px-4 py-2">${ssrInterpolate(test.name)}</td><!--[-->`);
      ssrRenderList($data.months, (month) => {
        _push(`<td class="px-4 py-2">${ssrInterpolate($options.getTestResultByMonth(test, month))}</td>`);
      });
      _push(`<!--]--><td class="px-4 py-2">${ssrInterpolate($options.getTotalTestResults(test))}</td></tr>`);
    });
    _push(`<!--]--><!--]-->`);
  });
  _push(`<!--]--></tbody></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/lab-statistics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const labStatistics = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { labStatistics as default };
//# sourceMappingURL=lab-statistics-a07f00ac.mjs.map
