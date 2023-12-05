import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-15d8abe8.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$2 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './index-431e52b1.mjs';
import { e as errorMessage, d as dateFormat } from './constants-353d90a1.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { u as useHead } from './index-ca787103.mjs';
import { e as endpoints, f as fetchRequest } from './fetch-647b8df7.mjs';
import moment from 'moment';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { ExportToExcel } from 'vue-doc-exporter';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './ArrowPathIcon-6ff7b048.mjs';
import { r as render$1 } from './DocumentTextIcon-d89971e2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
import './PrinterIcon-02ac6ae4.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './PencilSquareIcon-77446728.mjs';

const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Rejected Samples Reports`
    });
  },
  components: {
    ExportToExcel
  },
  data() {
    return {
      refreshIcon: render,
      exportIcon: render$1,
      moment,
      title: "Rejected Samples Reports",
      facility: useFacilityStore(),
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
      reportData: {},
      loading: false
    };
  },
  created() {
    this.getDepartments();
  },
  computed: {
    getTotalCountForReport() {
      const testTypeTotals = {};
      this.reportData.result.forEach((report) => {
        report.test_types.forEach((test_type) => {
          if (!testTypeTotals[test_type.name]) {
            testTypeTotals[test_type.name] = test_type.count;
          } else {
            testTypeTotals[test_type.name] += test_type.count;
          }
        });
      });
      return testTypeTotals;
    }
  },
  methods: {
    /**
     * @method getDepartments gets list of departments
     * @param null
     * @return promise
     */
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
    /**
     * @method generateReport
     * @param null
     * @return promise
     */
    async generateReport() {
      if (this.validate())
        useNuxtApp().$toast.warning("Please select a department");
      else {
        this.loading = true;
        let startDate = this.dateFrom != "" ? moment(this.dateFrom).format("YYYY-MM-DD") : "";
        let endDate = this.dateTo != "" ? moment(this.dateTo).format("YYYY-MM-DD") : "";
        const request = {
          route: `${endpoints.aggregateReports}rejected?from=${startDate}&to=${endDate}&department=${this.selectedDepartment.id}`,
          method: "GET",
          token: `${this.cookie}`
        };
        const { data, error, pending } = await fetchRequest(request);
        this.loading = pending;
        if (data.value) {
          this.loading = false;
          this.reportData = data.value.data;
          console.log(data.value.data);
          useNuxtApp().$toast.success("Report generated successfully!");
        }
        if (error.value) {
          console.log(error.value);
          this.loading = false;
          useNuxtApp().$toast.error(errorMessage);
        }
      }
    },
    validate() {
      return this.selectedDepartment.name == "-- select department --";
    },
    hasCountInTestTypes(reportName, wardName) {
      const report = this.reportData.result.find((r) => r.name === reportName);
      return report.test_types.some((tt) => tt.ward === wardName && tt.count > 0);
    },
    getCountForWard(reportName, wardName) {
      const report = this.reportData.result.find((r) => r.name === reportName);
      const testType = report.test_types.find((tt) => tt.ward === wardName);
      return testType ? testType.count : 0;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_CoreActionButton = __nuxt_component_0$2;
  const _component_CorePrinterReport = __nuxt_component_2;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.title)}</h3></div><div class="w-full flex items-center justify-between"><div class="flex items-center space-x-3"><div class="w-40">`);
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
    click: () => $options.generateReport()
  }, null, _parent));
  _push(`</div></div><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_CorePrinterReport, { printSmallLabel: false }, null, _parent));
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: `rejected_samples_report_from_${$data.moment($data.dateFrom).format("DD_MM_YYYY")}_to_${$data.moment($data.dateTo).format("DD_MM_YYYY")}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          click: () => {
          },
          text: "Export",
          color: "success",
          icon: $data.exportIcon
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreActionButton, {
            click: () => {
            },
            text: "Export",
            color: "success",
            icon: $data.exportIcon
          }, null, 8, ["icon"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="mt-3"><h3 class="text-lg font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate($data.dateFrom != "" ? $data.moment($data.dateFrom).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} - ${ssrInterpolate($data.dateTo != "" ? $data.moment($data.dateTo).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</span></h3></div><div class="border rounded print-container" id="print-container"><div class="bg-gray-50 rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2 py-5"><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></div></div><div class="mt-10"><table class="w-full border border-dotted rounded overflow-x-auto"><!--[-->`);
  ssrRenderList($data.reportData.result, (report, index) => {
    _push(`<!--[--><thead class="bg-gray-50 border-b border-dotted rounded-t"><tr><th class="border-r"></th><th${ssrRenderAttr("colspan", $data.reportData.wards.length)} class="px-5 py-2 border-r">${ssrInterpolate(report.name)}</th><th>TOTAL</th></tr></thead><tbody><tr><td class="border-r border-b border-dotted px-2 py-2"></td><!--[-->`);
    ssrRenderList($data.reportData.wards, (ward) => {
      _push(`<td class="border-r border-b border-dotted px-2 py-2">${ssrInterpolate(ward)}</td>`);
    });
    _push(`<!--]--></tr><!--[-->`);
    ssrRenderList(report.test_types, (test_type) => {
      _push(`<tr><td class="border-r border-b border-dotted px-2 py-2">${ssrInterpolate(test_type.name)}</td><!--[-->`);
      ssrRenderList($data.reportData.wards, (ward) => {
        _push(`<td class="border-r border-b border-dotted px-2 py-2">${ssrInterpolate(test_type.ward === ward ? test_type.count : 0)}</td>`);
      });
      _push(`<!--]--><td class="border-r border-t border-b border-dotted px-2 py-2">${ssrInterpolate($options.getTotalCountForReport[test_type.name])}</td></tr>`);
    });
    _push(`<!--]--></tbody><!--]-->`);
  });
  _push(`<!--]--></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/rejected-samples.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rejectedSamples = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { rejectedSamples as default };
//# sourceMappingURL=rejected-samples-f431698f.mjs.map
