import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './index-856c61c5.mjs';
import { _ as _sfc_main$2 } from './ExportButton-c520dc00.mjs';
import { _ as _sfc_main$3 } from './Address-efb6382b.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { defineComponent, ref, computed, resolveComponent, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, useSSRContext } from 'vue';
import { d as dateFormat, e as errorMessage } from './constants-9b77e6ea.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_1 } from './page-c16a1934.mjs';
import moment from 'moment';
import { f as fetchRequest, e as endpoints } from './fetch-61d93cc9.mjs';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import { P as Package } from './package-01289411.mjs';
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

const title = "Lab Statistics Report";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lab-statistics",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - Lab Statistics Report`
    });
    const facility = useFacilityStore();
    const cookie = useCookie("token");
    const pages = [
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
    ];
    const departments = ref([]);
    const selectedDepartment = ref({ name: "select department" });
    const dateRange = ref(["", ""]);
    const reportData = ref([]);
    const months = ref([]);
    const filteredData = ref([]);
    const exportData = ref([]);
    const loading = ref(false);
    const isCleared = () => {
      dateRange.value = new Array(
        "",
        ""
      );
    };
    async function getDepartments() {
      const { data, error } = await fetchRequest({
        route: endpoints.departments,
        method: "GET",
        token: `${cookie}`
      });
      if (data.value) {
        departments.value = data.value;
        const allDepartmentExists = departments.value.some(
          (department) => department.name == "All"
        );
        if (!allDepartmentExists) {
          departments.value.push({ id: 0, name: "All" });
        }
        departments.value.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    }
    function checkStatus(status) {
      if (status === "select department" || status === "-- select test type --" || status === "-- select test status --") {
        return "";
      }
      return status;
    }
    function generateMonths(from, to) {
      const startDate2 = new Date(from);
      const endDate2 = new Date(to);
      const mts = new Array();
      let currentDate = startDate2;
      while (currentDate <= endDate2) {
        const month = currentDate.toLocaleString("default", { month: "long" });
        mts.push(month);
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
      months.value = mts;
    }
    const validator = () => {
      const { value } = selectedDepartment;
      if (value.name === "select department")
        return !useNuxtApp().$toast.warning("Please select a department");
      return true;
    };
    const startDate = computed(() => {
      return dateRange.value[0] ? moment(dateRange.value[0]).format("YYYY-MM-DD") : "";
    });
    const endDate = computed(() => {
      return dateRange.value[1] ? moment(dateRange.value[1]).format("YYYY-MM-DD") : "";
    });
    async function generateReport() {
      loading.value = true;
      let queryParams = `from=${startDate.value}&to=${endDate.value}&department=${checkStatus(selectedDepartment.value.name)}`;
      const request = {
        route: `${endpoints.aggregateReports}/lab_statistics?${queryParams}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data, error, pending } = await fetchRequest(request);
      loading.value = pending;
      if (data.value) {
        generateMonths(data.value.from, data.value.to);
        reportData.value = data.value.data;
        filteredData.value = filterData(data.value.data);
        let exportData2 = [];
        filteredData.value.forEach((department) => {
          const departmentObj = {};
          departmentObj["Tests".toUpperCase()] = department.department.toUpperCase();
          months.value.forEach((month) => {
            departmentObj[month.toUpperCase()] = "";
          });
          departmentObj["Total".toUpperCase()] = "";
          exportData2.push(departmentObj);
          department.tests.forEach((test) => {
            const testObj = {};
            testObj["Tests".toUpperCase()] = test.name;
            months.value.forEach((month) => {
              testObj[month.toUpperCase()] = getTestResultByMonth(test, month);
            });
            testObj["Total".toUpperCase()] = getTotalTestResults(test);
            exportData2.push(testObj);
          });
        });
        exportData2 = exportData2;
        loading.value = false;
        data.value.data.length > 0 ? useNuxtApp().$toast.success("Report data generated successfully") : useNuxtApp().$toast.warning(`No data found for period ${startDate.value} - ${endDate.value}`);
      }
      if (error.value) {
        loading.value = false;
        console.error("error: ", error.value);
        useNuxtApp().$toast.error(errorMessage);
      }
    }
    function filterData(reportData2) {
      return reportData2.map((item) => {
        const department = Object.keys(item)[0];
        const tests = Object.entries(item[department]).map(([testName, results]) => {
          const testResults = Object.entries(results).map(([month, count]) => ({
            [month]: count
          }));
          return { name: testName, results: testResults };
        });
        return { department, tests };
      });
    }
    function getTestResultByMonth(test, month) {
      let result = 0;
      test.results.forEach((testResult) => {
        result += testResult[month] || 0;
      });
      return result;
    }
    function getTotalTestResults(test) {
      let total = 0;
      test.results.forEach((testResult) => {
        Object.values(testResult).forEach((count) => {
          total += count;
        });
      });
      return total;
    }
    function shouldApplyGrayBackground(index) {
      return index % 2 === 0;
    }
    getDepartments();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$1;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreDropdown = __nuxt_component_0;
      const _component_CoreActionButton = __nuxt_component_0$1;
      const _component_CorePrinterReport = __nuxt_component_2;
      const _component_excel = resolveComponent("excel");
      const _component_CoreExportButton = _sfc_main$2;
      const _component_ReportsAddress = _sfc_main$3;
      const _component_CoreLoader = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages }, null, _parent));
      _push(`<div class="flex items-center py-5"><img${ssrRenderAttr("src", _imports_2)} alt="report-icon" class="w-8 h-8 mr-2"><h3 class="text-2xl font-semibold uppercase">${ssrInterpolate(title)}</h3></div><div class="w-full flex items-center justify-between mb-3">`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "form",
        "submit-label": "Update",
        onSubmit: ($event) => validator() && generateReport(),
        actions: false,
        id: "submitForm"
      }, {
        default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-3"${_scopeId}><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(render), { class: "w-5 h-5 mr-2" }, null, _parent2, _scopeId));
            _push2(` Filter By Date Range <div class="w-72 ml-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_datepicker, {
              onCleared: isCleared,
              format: "dd/MM/yyyy",
              required: "",
              position: "left",
              placeholder: "select start & end date",
              range: true,
              "input-class-name": "datepicker",
              modelValue: unref(dateRange),
              "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="w-44"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreDropdown, {
              items: unref(departments),
              modelValue: unref(selectedDepartment),
              "onUpdate:modelValue": ($event) => isRef(selectedDepartment) ? selectedDepartment.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_CoreActionButton, {
              type: "submit",
              color: "primary",
              text: "Generate Report",
              icon: unref(render$1),
              click: () => {
              },
              loading: unref(loading)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-3" }, [
                createVNode("div", { class: "bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" }, [
                  createVNode(unref(render), { class: "w-5 h-5 mr-2" }),
                  createTextVNode(" Filter By Date Range "),
                  createVNode("div", { class: "w-72 ml-2" }, [
                    createVNode(_component_datepicker, {
                      onCleared: isCleared,
                      format: "dd/MM/yyyy",
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
                createVNode("div", { class: "w-44" }, [
                  createVNode(_component_CoreDropdown, {
                    items: unref(departments),
                    modelValue: unref(selectedDepartment),
                    "onUpdate:modelValue": ($event) => isRef(selectedDepartment) ? selectedDepartment.value = $event : null
                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                ]),
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
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(_component_CorePrinterReport, null, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_excel, {
        class: "btn btn-default",
        header: [`LABORATORY STATISTICS REPORT `, `PERIOD FROM ${unref(moment)(unref(startDate)).format("DD-MM-yyyy")} TO ${unref(endDate)}).format('DD-MM-yyyy')}`, unref(facility).details.name, unref(facility).details.address, unref(facility).details.phone],
        data: unref(exportData),
        worksheet: "report-work-sheet",
        name: `lab-statistics-report_${unref(moment)(unref(startDate)).format("DD_MM_yyyy")}_to_${unref(endDate)}).format('DD_MM_yyyy')}.xls`
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
      _push(`</div></div></div><div class="border rounded print-container" id="print-container"><div class="rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><div class="flex flex-col space-y-2"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-xl font-semibold"> LABORATORY STATISTICS REPORT </h3></div>`);
      _push(ssrRenderComponent(_component_ReportsAddress, null, null, _parent));
      _push(`</div><div class="mt-3 px-5"><h3 class="font-medium mb-2">Tests Performed Period: <span class="font-normal">${ssrInterpolate(unref(startDate) != "" ? unref(moment)(unref(startDate)).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} - ${ssrInterpolate(unref(endDate) != "" ? unref(moment)(unref(endDate)).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</span></h3></div><div class="overflow-x-auto bg-white border-t">`);
      if (unref(filteredData).length > 0) {
        _push(`<table class="w-full overflow-x-auto"><thead class="uppercase bg-gray-100"><tr class="text-left"><th class="px-4 py-2">Tests</th><!--[-->`);
        ssrRenderList(unref(months), (month) => {
          _push(`<th class="px-4 py-2">${ssrInterpolate(month)}</th>`);
        });
        _push(`<!--]--><th class="px-4 py-2">Total</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(filteredData), (department) => {
          _push(`<!--[--><tr style="${ssrRenderStyle({ "width": "100% !important" })}" class="w-full bg-sky-50 border-t border-b border-dotted"><td class="px-4 py-2 font-bold">${ssrInterpolate(department.department)}</td><!--[-->`);
          ssrRenderList(unref(months), (month) => {
            _push(`<td class="px-4 py-2"></td>`);
          });
          _push(`<!--]--><td class="px-4 py-2"></td></tr><!--[-->`);
          ssrRenderList(department.tests, (test, index) => {
            _push(`<tr class="${ssrRenderClass({
              "bg-gray-50": shouldApplyGrayBackground(index),
              "border-b border-dotted": true
            })}"><td class="px-4 py-2">${ssrInterpolate(test.name)}</td><!--[-->`);
            ssrRenderList(unref(months), (month) => {
              _push(`<td class="px-4 py-2">${ssrInterpolate(getTestResultByMonth(test, month))}</td>`);
            });
            _push(`<!--]--><td class="px-4 py-2">${ssrInterpolate(getTotalTestResults(test))}</td></tr>`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(loading) ? null : { display: "none" })}" class="w-full items-center flex flex-col space-y-2 my-10">`);
      _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
      _push(`<p>Generating report, please wait<span class="animate-pulse">...</span></p></div>`);
      if (unref(reportData).length == 0 && !unref(loading)) {
        _push(`<div class="w-full flex flex-col items-center justify-center space-y-2 py-10"><img${ssrRenderAttr("src", _imports_1)} alt="page-icon" class="object-cover w-20 h-20"><p>Data not found, please generate report</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/lab-statistics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lab-statistics-a0597e7d.mjs.map
