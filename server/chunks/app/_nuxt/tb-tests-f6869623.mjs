import { _ as _sfc_main$1 } from './Breadcrumb-fc731a79.mjs';
import { u as useCookie, b as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './index-a83aa120.mjs';
import { _ as _sfc_main$2 } from './ExportButton-c520dc00.mjs';
import { _ as _sfc_main$3 } from './Address-1e4f6e84.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { defineComponent, ref, computed, resolveComponent, mergeProps, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useHead } from './index-2cdcde44.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_1 } from './page-c16a1934.mjs';
import moment from 'moment';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { P as Package } from './package-68885819.mjs';
import { r as render } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$1 } from './ArrowPathIcon-6ff7b048.mjs';
import './nuxt-link-42c558b2.mjs';
import './HomeIcon-299b993b.mjs';
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
import '@headlessui/vue';
import 'html2canvas';
import 'jspdf';
import './fetch-63157596.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './constants-9b77e6ea.mjs';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const title = "TB Report";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tb-tests",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - TB Tests Reports`
    });
    const pages = ref(
      [
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
      ]
    );
    const dateRange = ref([]);
    const loading = ref(false);
    const reportData = ref({ months: new Array(), data: new Array() });
    const facility = useFacilityStore();
    useCookie("token");
    const isCleared = () => {
      dateRange.value = new Array(
        "",
        ""
      );
    };
    const calculateTotal = (month, report) => {
      let total = 0;
      report[Object.keys(report)[0]].forEach((data) => {
        total += data.month[month] ? data.month[month] : 0;
      });
      return total;
    };
    const sortMonths = (months) => {
      return months.sort((a, b) => {
        const monthsOrder = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthsOrder.indexOf(a) - monthsOrder.indexOf(b);
      });
    };
    const exportData = computed(() => {
      const rtValue = [];
      reportData.value.data.length > 0 && reportData.value.data.forEach((rf) => {
        Object.keys(rf).forEach((key) => {
          rf[key].forEach((r) => {
            const resultEntry = {
              "TEST": key,
              "RESULT": r.result,
              ...sortMonths(Object.keys(r.month)).reduce((acc, month) => {
                const monthValue = r.month[month];
                acc[month.toUpperCase()] = monthValue !== void 0 && monthValue !== null ? monthValue : 0;
                return acc;
              }, {})
            };
            rtValue.push(resultEntry);
          });
        });
      });
      return rtValue;
    });
    const calculatePercentage = (month, report) => {
      let percentile = 1;
      let positives = 1;
      if (Object.keys(report)[0].toString().toLowerCase().includes("+")) {
        report[Object.keys(report)[0]].forEach((data) => {
          positives += data.month[month] ? data.month[month] : 0;
        });
      }
      let total = 0;
      report[Object.keys(report)[0]].forEach((data) => {
        total += data.month[month] ? data.month[month] : 0;
      });
      if (total > 0) {
        percentile = positives / total * 100;
      } else {
        percentile = 0;
      }
      return Math.floor(percentile);
    };
    const startDate = computed(() => {
      return dateRange.value[0] ? moment(dateRange.value[0]).format("YYYY-MM-DD") : "";
    });
    const endDate = computed(() => {
      return dateRange.value[1] ? moment(dateRange.value[1]).format("YYYY-MM-DD") : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$1;
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreActionButton = __nuxt_component_0;
      const _component_CorePrinterReport = __nuxt_component_2;
      const _component_excel = resolveComponent("excel");
      const _component_CoreExportButton = _sfc_main$2;
      const _component_ReportsAddress = _sfc_main$3;
      const _component_CoreLoader = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center py-5"><img${ssrRenderAttr("src", _imports_2)} alt="report-icon" class="w-8 h-8 mr-2"><h3 class="text-2xl font-semibold uppercase">${ssrInterpolate(title)}</h3></div><div class="flex justify-between items-center"><form class="w-full flex items-center space-x-3"><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500">`);
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
        "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null,
        format: "dd/MM/yyyy"
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
      _push(`</div></form><div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(_component_CorePrinterReport, { printSmallLabel: false }, null, _parent));
      _push(ssrRenderComponent(_component_excel, {
        class: "btn btn-default",
        header: [`TB TESTS LABORATORY REPORT ${unref(startDate)} - ${unref(endDate)}`, unref(facility).details.name, unref(facility).details.address, unref(facility).details.phone],
        data: unref(exportData),
        worksheet: "report-work-sheet",
        name: `tb_tests_report_from_${unref(startDate)}_to_${unref(endDate)}.xls`
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
      _push(`</div></div>`);
      if (unref(reportData).data.length > 0) {
        _push(`<div class="border rounded mt-10" id="print-container"><div class="flex items-center justify-between px-5 py-5 border-b"><div class="flex flex-col space-y-2"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-xl font-semibold"> TB TESTS REPORT </h3></div>`);
        _push(ssrRenderComponent(_component_ReportsAddress, null, null, _parent));
        _push(`</div><div class="m-3"><h3 class="text-lg font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate(unref(startDate) != "" ? unref(moment)(unref(startDate)).format("DD/MM/YYYY") : "")} - ${ssrInterpolate(unref(endDate) != "" ? unref(moment)(unref(endDate)).format("DD/MM/YYYY") : "")}</span></h3></div><div class="overflow-x-auto"><table class="w-full rounded overflow-x-auto border-t"><!--[-->`);
        ssrRenderList(unref(reportData).data, (report, reportIndex) => {
          _push(`<!--[--><thead class="w-full border-b"><tr><th${ssrRenderAttr("colspan", unref(reportData).months.length + 1)} class="uppercase bg-gray-100 text-center py-2 border-b">${ssrInterpolate(Object.keys(report)[0])}</th></tr><tr class="bg-gray-50"><th class="px-2 py-2 border-r uppercase">Result</th><!--[-->`);
          ssrRenderList(unref(reportData).months, (month, index) => {
            _push(`<th class="px-2 py-2 border-r">${ssrInterpolate(month)}</th>`);
          });
          _push(`<!--]--></tr></thead><tbody><!--[-->`);
          ssrRenderList(report[Object.keys(report)[0]], (data, dataIndex) => {
            _push(`<tr class="border-b"><td class="px-2 py-2 border-r capitalize">${ssrInterpolate(data.result)}</td><!--[-->`);
            ssrRenderList(unref(reportData).months, (month) => {
              _push(`<td class="px-2 py-2 border-r">${ssrInterpolate(data.month[month] > 0 ? data.month[month] : 0)}</td>`);
            });
            _push(`<!--]--></tr>`);
          });
          _push(`<!--]--><tr class="bg-gray-50"><td class="px-2 py-2 border-r font-semibold uppercase">Total Examined</td><!--[-->`);
          ssrRenderList(sortMonths(unref(reportData).months), (month) => {
            _push(`<td class="px-2 py-2 border-r">${ssrInterpolate(calculateTotal(month, report))}</td>`);
          });
          _push(`<!--]--></tr>`);
          if (Object.keys(report)[0].toLowerCase() == "smear microscopy result") {
            _push(`<tr class="border-t bg-gray-100"><td class="px-2 py-2 border-r font-semibold uppercase">Pick Up Rate</td><!--[-->`);
            ssrRenderList(unref(reportData).months, (month, index) => {
              _push(`<td class="px-2 py-2 border-r">${ssrInterpolate(calculatePercentage(month, report))}% </td>`);
            });
            _push(`<!--]--></tr>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</tbody><!--]-->`);
        });
        _push(`<!--]--></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(loading) ? null : { display: "none" })}" class="w-full items-center flex flex-col space-y-2 my-10">`);
      _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
      _push(`<p>Generating report, please wait<span class="animate-pulse">...</span></p></div>`);
      if (unref(reportData).data.length == 0 && !unref(loading)) {
        _push(`<div class="w-full flex flex-col items-center justify-center space-y-2 py-10"><img${ssrRenderAttr("src", _imports_1)} alt="page-icon" class="object-cover w-20 h-20"><p>Data not found, please generate report</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/tb-tests.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tb-tests-f6869623.mjs.map
