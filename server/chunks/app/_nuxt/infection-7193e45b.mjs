import { _ as _sfc_main$1 } from './Breadcrumb-fc731a79.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as _sfc_main$2 } from './ExportButton-c520dc00.mjs';
import { _ as _sfc_main$3 } from './Address-1e4f6e84.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { defineComponent, ref, computed, resolveComponent, mergeProps, unref, withCtx, isRef, createVNode, createTextVNode, useSSRContext } from 'vue';
import { u as useHead } from './index-2cdcde44.mjs';
import { e as errorMessage } from './constants-9b77e6ea.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_1 } from './page-c16a1934.mjs';
import { f as fetchRequest, e as endpoints } from './fetch-63157596.mjs';
import moment from 'moment';
import { ExportToExcel } from 'vue-doc-exporter';
import { P as Package } from './package-f9450e57.mjs';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { r as render } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$1 } from './ArrowPathIcon-6ff7b048.mjs';
import './nuxt-link-42c558b2.mjs';
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
    const loading = ref(false);
    const facility = useFacilityStore();
    const reportData = ref([]);
    const summaryData = ref([]);
    const dateRange = ref(
      new Array(
        "",
        ""
      )
    );
    const startDate = computed(() => {
      return dateRange.value[0] ? moment(dateRange.value[0]).format("YYYY-MM-DD") : "";
    });
    const endDate = computed(() => {
      return dateRange.value[1] ? moment(dateRange.value[1]).format("YYYY-MM-DD") : "";
    });
    const isCleared = () => {
      dateRange.value = new Array(
        "",
        ""
      );
    };
    const generateTableHeader = () => {
      return '<thead class="w-full h-full border-b"><tr class="w-full h-full bg-gray-50"><th rowspan="2" class="px-2 py-2 border-r">Test</th><th rowspan="2" class="border-r">Measure</th><th rowspan="2" class="px-2 py-2 border-r">Results</th><th rowspan="2" class="px-2 py-2 border-r">Sex</th><th colspan="3" scope="colgroup" class="border-r border-b px-2 py-2">Age Range</th><th rowspan="2" class="px-2 py-2 border-r">M/F Total</th><th rowspan="2" class="px-2 py-2">Total</th></tr><tr><th scope="col" class="border-l px-2 py-2 border-r bg-gray-50">[0-5]</th><th scope="col" class="border-r px-2 py-2 bg-gray-50">[5-14]</th><th scope="col" class="border-r px-2 py-2 bg-gray-50">[14-120]</th></tr></thead>';
    };
    const safeReplace = (original, search, replacement) => {
      const index = original.indexOf(search);
      if (index !== -1) {
        return original.slice(0, index) + replacement + original.slice(index + search.length);
      }
      return original;
    };
    const generateTableBody = (data) => {
      let tBody = ``;
      let currentMeasure = "";
      let currentTest = "";
      let currentResult = "";
      let testCount = 0;
      let measureCount = 0;
      let resultCount = 0;
      let resultTotal = 0;
      let testTotal = 0;
      const flattenedData = data.reduce((flattened, test) => {
        const flattenedMeasures = test.measures.flatMap((measure) => {
          const results = measure.results.flatMap((result) => {
            const resultKey = Object.keys(result[0])[0];
            const genderResults = result[0][resultKey];
            return Object.entries(genderResults).map(([gender, values]) => {
              const genderValues = values;
              return {
                test_type: test.test_type,
                measure: measure.name,
                result: resultKey,
                gender: gender === "F" ? "Female" : "Male",
                ...genderValues
              };
            });
          });
          return results;
        });
        flattened.push(...flattenedMeasures);
        return flattened;
      }, new Array());
      flattenedData.forEach((rowData) => {
        var _a, _b, _c, _d, _e, _f;
        measureCount++;
        resultCount++;
        testCount++;
        if (currentTest === rowData.test_type) {
          tBody += `<tr>`;
          if (currentMeasure !== rowData.measure) {
            currentMeasure = rowData.measure;
            currentResult = rowData.result;
            tBody = safeReplace(tBody, "NEW_MEASURE", measureCount.toString());
            tBody = tBody.replace("NEW_RESULT", resultCount.toString());
            tBody = safeReplace(tBody, "RESULT_TOTAL", resultTotal.toString());
            measureCount = 0;
            resultCount = 0;
            resultTotal = 0;
            tBody += `<td class='px-2 py-2 border-r border-b' rowspan='NEW_MEASURE'>` + rowData.measure + "</td>";
            tBody += `<td class='border-r border-b px-2 py-2' rowspan='NEW_RESULT'>` + rowData.result + "</td>";
          } else {
            if (currentResult !== rowData.result) {
              tBody = tBody.replace(/NEW_RESULT/g, resultCount.toString());
              tBody = safeReplace(tBody, "RESULT_TOTAL", resultTotal.toString());
              currentResult = rowData.result;
              resultCount = 0;
              resultTotal = 0;
              tBody += `<td class='border-r border-b px-2 py-2' rowspan='NEW_RESULT'>` + rowData.result + `</td>`;
            }
          }
        } else {
          currentTest = rowData.test_type;
          currentMeasure = rowData.measure;
          currentResult = rowData.result;
          tBody = tBody.replace(/NEW_TEST/g, testCount.toString());
          tBody = safeReplace(tBody, "NEW_MEASURE", measureCount.toString());
          tBody = tBody.replace(/NEW_RESULT/g, resultCount.toString());
          tBody = safeReplace(tBody, "RESULT_TOTAL", resultTotal.toString());
          tBody = safeReplace(tBody, "TEST_TOTAL", testTotal.toString());
          measureCount = 0;
          resultCount = 0;
          resultTotal = 0;
          testCount = 0;
          testTotal = 0;
          tBody += `<tr class='tests'>`;
          tBody += `<td class='border-b border-r px-2 py-2' rowspan='NEW_TEST'>` + rowData.test_type + `</td>`;
          tBody += `<td class='border-r border-b px-2 py-2' rowspan='NEW_MEASURE'>` + rowData.measure + `</td>`;
          tBody += `<td class='border-r border-b px-2 py-2' rowspan='NEW_RESULT'>` + rowData.result + `</td>`;
        }
        tBody += `<td class='border-r border-b px-2 py-2'>` + rowData.gender + `</td>`;
        tBody += `<td class='border-r border-b px-2 py-2'>` + (rowData.L_E_5 ? rowData.L_E_5 : 0).toString() + `</td>`;
        tBody += `<td class='border-r border-b px-2 py-2'>` + (rowData.G_5_L_E_14 ? rowData.G_5_L_E_14 : 0).toString() + `</td>`;
        tBody += `<td class='border-r border-b px-2 py-2'>` + (rowData.G_14 ? rowData.G_14 : 0).toString() + `</td>`;
        tBody += `<td class='border-r border-b px-2 py-2'>` + (((_a = rowData.L_E_5) != null ? _a : 0) + ((_b = rowData.G_5_L_E_14) != null ? _b : 0) + ((_c = rowData.G_14) != null ? _c : 0)).toString() + `</td>`;
        resultTotal += ((_d = rowData.L_E_5) != null ? _d : 0) + ((_e = rowData.G_5_L_E_14) != null ? _e : 0) + ((_f = rowData.G_14) != null ? _f : 0);
        if (currentResult === rowData.result && resultCount == 0) {
          tBody += `<td class='border-r border-b px-2 py-2' rowspan='NEW_RESULT'>RESULT_TOTAL</td>`;
        }
        if (measureCount == 0) {
          testTotal = rowData.L_E_5 + rowData.G_5_L_E_14 + rowData.G_14;
        }
      });
      tBody = safeReplace(tBody, "NEW_TEST", (++testCount).toString());
      tBody = safeReplace(tBody, "NEW_MEASURE", (++measureCount).toString());
      tBody = safeReplace(tBody, "NEW_RESULT", (++resultCount).toString());
      tBody = safeReplace(tBody, "RESULT_TOTAL", resultTotal.toString());
      tBody = safeReplace(tBody, "TEST_TOTAL", testTotal.toString());
      tBody += `</tr>`;
      return tBody;
    };
    const infectionReportTable = (reportData2) => {
      const tHeader = generateTableHeader();
      const tBody = reportData2.length > 0 ? generateTableBody(reportData2) : "<tr></tr>";
      return `<table class="w-full rounded border-t">${tHeader}${tBody}</table>`;
    };
    async function loadDepartments() {
      const { data, error } = await fetchRequest({
        route: `${endpoints.departments}`,
        method: "GET",
        token: `${cookie.value}`
      });
      if (data.value) {
        departments.value = data.value;
        if (!departments.value.some((department) => department.id === 0))
          departments.value.unshift({ id: 0, name: "All" });
      }
      if (error.value) {
        console.error(error.value);
      }
    }
    async function generateReport() {
      if (validate())
        useNuxtApp().$toast.warning("Please select a department");
      else {
        loading.value = true;
        let startDate2 = dateRange.value[0].toString() != "" ? moment(dateRange.value[0].toString()).format("YYYY-MM-DD") : "";
        let endDate2 = dateRange.value[1].toString() != "" ? moment(dateRange.value[1].toString()).format("YYYY-MM-DD") : "";
        const request = {
          route: `${endpoints.aggregateReports}infection?from=${startDate2}&to=${endDate2}&department=${selectedDepartment.value.id}`,
          method: "GET",
          token: `${cookie.value}`
        };
        const { data, error, pending } = await fetchRequest(request);
        loading.value = pending;
        if (data.value) {
          loading.value = false;
          reportData.value = data.value.data;
          summaryData.value = data.value.summary;
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
      const _component_ReportsAddress = _sfc_main$3;
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
              format: "dd/MM/yyyy",
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
                      format: "dd/MM/yyyy",
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
      _push(`</div></div><div><div class="rounded border"><div class="rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><div class="flex flex-col space-y-2"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-xl font-semibold uppercase"> INFECTION REPORT </h3></div>`);
      _push(ssrRenderComponent(_component_ReportsAddress, null, null, _parent));
      _push(`</div>`);
      if (unref(reportData).length > 0 && !unref(loading)) {
        _push(`<div id="print-container"><div class="hidden"><h3>INFECTION REPORT</h3><h3>${ssrInterpolate(unref(facility).details.name)}</h3><p>${ssrInterpolate(unref(facility).details.address)}</p><p>${ssrInterpolate(unref(facility).details.phone)}</p></div><div class="text-lg font-semibold py-2 px-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate(unref(startDate) != "" ? unref(moment)(unref(startDate)).format("DD/MM/YYYY") : "")} - ${ssrInterpolate(unref(endDate) != "" ? unref(moment)(unref(endDate)).format("DD/MM/YYYY") : "")}</span></div><div>${infectionReportTable(unref(reportData))}</div><div><h3 class="px-2 py-2 text-xl font-semibold uppercase">Summary</h3><table class="w-full border-t"><thead><tr class="border-b border-t bg-gray-100"><th class="px-2 py-2 border-r text-left">Tests</th><th class="px-2 py-2 text-left">Total</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(summaryData), (data, index) => {
          _push(`<tr class="${ssrRenderClass(index % 2 === 0 ? "bg-white" : "bg-gray-50")}"><td class="px-2 py-2 border-r border-b">${ssrInterpolate(data.name)}</td><td class="px-2 py-2 border-r border-b">${ssrInterpolate(data.count)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(reportData).length == 0 && !unref(loading)) {
        _push(`<div class="w-full flex flex-col items-center justify-center space-y-2 py-10"><img${ssrRenderAttr("src", _imports_1)} alt="page-icon" class="object-cover w-20 h-20"><p class="text-base">Data not found, please generate report</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(loading) ? null : { display: "none" })}" class="mx-auto justify-center flex flex-col items-center space-y-3 py-20">`);
      _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
      _push(`<p class="text-base">Generating report, please wait<span class="animate-ping">...</span></p></div></div></div></div>`);
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
//# sourceMappingURL=infection-7193e45b.mjs.map
