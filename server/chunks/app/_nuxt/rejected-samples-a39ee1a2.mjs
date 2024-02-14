import { _ as _sfc_main$1 } from './Breadcrumb-fc731a79.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './index-a83aa120.mjs';
import { _ as _sfc_main$2 } from './ExportButton-c520dc00.mjs';
import { _ as _sfc_main$3 } from './Address-1e4f6e84.mjs';
import { defineComponent, ref, computed, resolveComponent, mergeProps, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useHead } from './index-2cdcde44.mjs';
import { d as dateFormat, e as errorMessage } from './constants-9b77e6ea.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { e as endpoints, f as fetchRequest } from './fetch-63157596.mjs';
import moment from 'moment';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { P as Package } from './package-dd64359e.mjs';
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
import 'html2canvas';
import 'jspdf';
import './XMarkIcon-170c776f.mjs';
import './PrinterIcon-02ac6ae4.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './PencilSquareIcon-77446728.mjs';

const title = "Rejected Samples Report";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rejected-samples",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - Rejected Samples Report`
    });
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
    const selectedDepartment = ref({ name: "select department" });
    const cookie = useCookie("token");
    const facility = useFacilityStore();
    const dateRange = ref(["", ""]);
    const isCleared = () => {
      dateRange.value = new Array(
        "",
        ""
      );
    };
    const reportData = ref({
      result: [],
      value: void 0,
      wards: void 0
    });
    const exportData = computed(() => {
      return [];
    });
    const loading = ref(false);
    const getTotalCountForReport = () => {
      const testTypeTotals = {};
      reportData.value.result.forEach((report) => {
        report.test_types.forEach((test_type) => {
          if (!testTypeTotals[test_type.name]) {
            testTypeTotals[test_type.name] = test_type.count;
          } else {
            testTypeTotals[test_type.name] += test_type.count;
          }
        });
      });
      return testTypeTotals;
    };
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
    const startDate = computed(() => {
      return dateRange.value[0] ? moment(dateRange.value[0]).format("YYYY-MM-DD") : "";
    });
    const endDate = computed(() => {
      return dateRange.value[1] ? moment(dateRange.value[1]).format("YYYY-MM-DD") : "";
    });
    async function generateReport() {
      if (validate())
        useNuxtApp().$toast.warning("Please select a department");
      else {
        loading.value = true;
        const request = {
          route: `${endpoints.aggregateReports}rejected?from=${startDate.value}&to=${endDate.value}&department=${selectedDepartment.value.id}`,
          method: "GET",
          token: `${cookie.value}`
        };
        const { data, error, pending } = await fetchRequest(request);
        loading.value = pending;
        if (data.value) {
          loading.value = false;
          reportData.value = data.value.data;
          console.log(data.value.data);
          useNuxtApp().$toast.success("Report generated successfully!");
        }
        if (error.value) {
          console.log(error.value);
          loading.value = false;
          useNuxtApp().$toast.error(errorMessage);
        }
      }
    }
    function validate() {
      return selectedDepartment.value.name == "select department";
    }
    getDepartments();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$1;
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreDropdown = __nuxt_component_0;
      const _component_CoreActionButton = __nuxt_component_0$1;
      const _component_CorePrinterReport = __nuxt_component_2;
      const _component_excel = resolveComponent("excel");
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
        "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null,
        format: "dd/MM/yyyy"
      }, null, _parent));
      _push(`</div></div><div class="w-44">`);
      _push(ssrRenderComponent(_component_CoreDropdown, {
        items: unref(departments),
        modelValue: unref(selectedDepartment),
        "onUpdate:modelValue": ($event) => isRef(selectedDepartment) ? selectedDepartment.value = $event : null
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        color: "primary",
        text: "Generate Report",
        icon: unref(render$1),
        click: () => generateReport(),
        loading: unref(loading)
      }, null, _parent));
      _push(`</div><div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(_component_CorePrinterReport, { printSmallLabel: false }, null, _parent));
      _push(ssrRenderComponent(_component_excel, {
        class: "btn btn-default",
        header: [`REJECTED SAMPLES REPORT `, `PERIOD FROM ${unref(moment)(unref(startDate)).format("DD-MM-yyyy")} TO ${unref(endDate)}).format('DD-MM-yyyy')}`, unref(facility).details.name, unref(facility).details.address, unref(facility).details.phone],
        data: unref(exportData),
        worksheet: "report-work-sheet",
        name: `rejected_samples_report_${unref(moment)(unref(startDate)).format("DD_MM_yyyy")}_to_${unref(endDate)}).format('DD_MM_yyyy')}.xls`
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
      _push(`</div></div><div class="mt-3"><h3 class="text-lg font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate(unref(startDate) != "" ? unref(moment)(unref(startDate)).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} - ${ssrInterpolate(unref(endDate) != "" ? unref(moment)(unref(endDate)).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</span></h3></div><div class="border rounded print-container" id="print-container"><div class="flex items-center justify-between px-5 py-5 border-b"><div class="flex flex-col space-y-2"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-xl font-semibold"> REJECTED SAMPLES REPORT </h3></div>`);
      _push(ssrRenderComponent(_component_ReportsAddress, null, null, _parent));
      _push(`</div><div class="mt-10"><table class="w-full border border-dotted rounded overflow-x-auto"><!--[-->`);
      ssrRenderList(unref(reportData).result, (report, index) => {
        _push(`<!--[--><thead class="bg-gray-50 border-b border-dotted rounded-t"><tr><th class="border-r"></th><th${ssrRenderAttr("colspan", unref(reportData).wards.length)} class="px-5 py-2 border-r">${ssrInterpolate(report.name)}</th><th>TOTAL</th></tr></thead><tbody><tr><td class="border-r border-b border-dotted px-2 py-2"></td><!--[-->`);
        ssrRenderList(unref(reportData).wards, (ward) => {
          _push(`<td class="border-r border-b border-dotted px-2 py-2">${ssrInterpolate(ward)}</td>`);
        });
        _push(`<!--]--></tr><!--[-->`);
        ssrRenderList(report.test_types, (test_type) => {
          _push(`<tr><td class="border-r border-b border-dotted px-2 py-2">${ssrInterpolate(test_type.name)}</td><!--[-->`);
          ssrRenderList(unref(reportData).wards, (ward) => {
            _push(`<td class="border-r border-b border-dotted px-2 py-2">${ssrInterpolate(test_type.ward === ward ? test_type.count : 0)}</td>`);
          });
          _push(`<!--]--><td class="border-r border-t border-b border-dotted px-2 py-2">${ssrInterpolate(getTotalCountForReport()[test_type.name])}</td></tr>`);
        });
        _push(`<!--]--></tbody><!--]-->`);
      });
      _push(`<!--]--></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/rejected-samples.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rejected-samples-a39ee1a2.mjs.map
