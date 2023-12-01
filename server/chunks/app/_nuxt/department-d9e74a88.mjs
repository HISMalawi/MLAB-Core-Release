import { _ as __nuxt_component_0 } from './Breadcrumb-058f5536.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-15d8abe8.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$2 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './index-fd4bee9c.mjs';
import { d as dateFormat } from './constants-353d90a1.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { u as useHead } from './index-2cdcde44.mjs';
import { e as endpoints, f as fetchRequest } from './fetch-a6c33994.mjs';
import moment from 'moment';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { ExportToExcel } from 'vue-doc-exporter';
import { r as render } from './ArrowPathIcon-6ff7b048.mjs';
import { r as render$1 } from './DocumentTextIcon-d89971e2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_0$1 } from './stock_out-9944e6b9.mjs';
import './nuxt-link-7a607302.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './HomeIcon-299b993b.mjs';
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
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
      title: `${Package.name.toUpperCase()} - Department Report`
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
      title: "Department Reports",
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
      reportData: { wards: [], data: [] },
      loading: false
    };
  },
  created() {
    this.getDepartments();
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
      if (!this.validate()) {
        this.loading = true;
        let startDate = this.dateFrom != "" ? moment(this.dateFrom).format("YYYY-MM-DD") : "";
        let endDate = this.dateTo != "" ? moment(this.dateTo).format("YYYY-MM-DD") : "";
        let queryParams = `from=${startDate}&to=${endDate}&department=${this.checkStatus(this.selectedDepartment.name)}`;
        const request = {
          route: `${endpoints.aggregateReports}/department?${queryParams}`,
          method: "GET",
          token: `${this.cookie}`
        };
        const { data, error, pending } = await fetchRequest(request);
        this.loading = pending;
        if (data.value) {
          this.loading = false;
          this.reportData = data.value;
          useNuxtApp().$toast.success("Report generated successfully!");
        }
        if (error.value) {
          this.loading = false;
          console.error(error.value);
        }
      } else {
        useNuxtApp().$toast.warning("Please select a department!");
      }
    },
    checkStatus(status) {
      return status === "-- select department --" || status === "-- select test type --" || status === "-- select test status --" ? "" : status;
    },
    validate() {
      return this.selectedDepartment.name == "-- select department --";
    },
    calculateRowTotal(report) {
      const total = this.reportData.wards.reduce((acc, ward) => {
        return acc + (report.ward[ward] ? report.ward[ward] : 0);
      }, 0);
      return total;
    },
    getDataValue(data, gender, ward, ageRange) {
      const bloodBankProduct = JSON.parse(JSON.stringify(data[Object.keys(data)[0]]));
      const genderData = bloodBankProduct.find((item) => item.gender === gender);
      if (!genderData)
        return 0;
      const wardData = genderData.ward.find((item) => Object.keys(item)[0] === ward.toLowerCase());
      if (!wardData)
        return 0;
      const ageRangeData = wardData[ward.toLowerCase()][ageRange];
      if (ageRangeData === void 0)
        return 0;
      return ageRangeData;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_CoreActionButton = __nuxt_component_0$2;
  const _component_CorePrinter = __nuxt_component_1;
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
    click: () => $options.generateReport(),
    loading: $data.loading
  }, null, _parent));
  _push(`</div></div><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_CorePrinter, { printSmallLabel: false }, null, _parent));
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: `department_report_from_${$data.moment($data.dateFrom).format("DD_MM_yyyy")}_to_${$data.moment($data.dateTo).format("DD_MM_yyyy")}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          text: "Export",
          icon: $data.exportIcon,
          color: "success",
          click: () => {
          }
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreActionButton, {
            text: "Export",
            icon: $data.exportIcon,
            color: "success",
            click: () => {
            }
          }, null, 8, ["icon"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="mt-3"><h3 class="text-lg font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate($data.dateFrom != "" ? $data.moment($data.dateFrom).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} - ${ssrInterpolate($data.dateTo != "" ? $data.moment($data.dateTo).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</span></h3></div><div class="border rounded print-container" id="print-container"><div class="bg-gray-50 rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2 py-5"><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></div></div>`);
  if ($data.reportData.wards.length > 0 && $data.reportData.data.length > 0) {
    _push(`<div class="overflow-x-auto"><table class="w-full border border-dotted rounded overflow-x-auto"><thead class="w-full"><tr><th class="px-2 py-2 text-center border-r">Tests</th><th class="px-2 py-2 text-center border-r border-b"${ssrRenderAttr("colspan", $data.reportData.wards.length)}>Wards </th><th class="px-2 py-2 text-center">Total</th></tr><tr class="border-b"><th class="border-r"></th><!--[-->`);
    ssrRenderList($data.reportData.wards, (ward, index) => {
      _push(`<th class="px-2 py-2 text-center border-r">${ssrInterpolate(ward)}</th>`);
    });
    _push(`<!--]--></tr></thead><tbody><!--[-->`);
    ssrRenderList($data.reportData.data, (data, index) => {
      _push(`<!--[--><th class="capitalize px-2 py-2 text-center bg-gray-50 border-b border-t">${ssrInterpolate(Object.keys(data)[0])}</th><!--[-->`);
      ssrRenderList($data.reportData.wards, (ward, wardIndex) => {
        _push(`<th class="capitalize px-2 py-2 text-center bg-gray-50 border-b border-t"></th>`);
      });
      _push(`<!--]--><th class="capitalize px-2 py-2 text-center bg-gray-50 border-b border-t"></th><!--[-->`);
      ssrRenderList(data[Object.keys(data)[0]], (report, reportIndex) => {
        _push(`<tr class="border-t border-b"><td class="capitalize px-2 py-2 text-center border-r">${ssrInterpolate(report.test_type)}</td><!--[-->`);
        ssrRenderList($data.reportData.wards, (ward, wardIndex) => {
          _push(`<td class="border-r px-2 py-2 text-center">${ssrInterpolate(report.ward[ward] ? report.ward[ward] : 0)}</td>`);
        });
        _push(`<!--]--><td class="px-2 py-2 text-center">${ssrInterpolate($options.calculateRowTotal(report))}</td></tr>`);
      });
      _push(`<!--]--><!--]-->`);
    });
    _push(`<!--]--></tbody></table>`);
    if ($data.reportData.blood_bank_products.length > 0) {
      _push(`<table class="w-full border border-dotted rounded overflow-x-auto mt-10"><thead><tr><th class="border-b px-2 py-2"${ssrRenderAttr("rowspan", 4)}>Blood Product</th><th class="border-b px-2 py-2"></th><th class="border-b px-2 py-2"${ssrRenderAttr("colspan", $data.reportData.wards.length)}>Wards</th></tr></thead><tbody><!--[-->`);
      ssrRenderList($data.reportData.blood_bank_products, (data, index) => {
        _push(`<!--[--><tr class="border-t"><td class="capitalize px-2 py-2 text-center bg-gray-50 border-r">${ssrInterpolate(Object.keys(data)[0])}</td><td class="px-2 py-2 border-r border-b"></td><!--[-->`);
        ssrRenderList($data.reportData.wards, (ward, index2) => {
          _push(`<th${ssrRenderAttr("colspan", 3)} class="px-2 py-2 text-center border-r border-b">${ssrInterpolate(ward)}</th>`);
        });
        _push(`<!--]--></tr><tr><td class="px-2 py-2 bg-gray-50 border-r">\xA0</td><td class="px-2 py-2 border-b border-r">Age-Ranges</td><!--[-->`);
        ssrRenderList($data.reportData.wards, (i, k) => {
          _push(`<!--[--><td class="px-2 py-2 border-b border-r">0-5</td><td class="px-2 py-2 border-b border-r">6-14</td><td class="border-r px-2 py-2 border-b">15-120</td><!--]-->`);
        });
        _push(`<!--]--></tr><tr><td class="px-2 py-2 bg-gray-50 border-r">\xA0</td><td class="px-2 py-2 border-b border-r">Female</td><!--[-->`);
        ssrRenderList($data.reportData.wards, (ward) => {
          _push(`<!--[--><td class="px-2 py-2 border-b border-r">${ssrInterpolate($options.getDataValue(data, "female", ward, "0-5"))}</td><td class="px-2 py-2 border-b border-r">${ssrInterpolate($options.getDataValue(data, "female", ward, "6-14"))}</td><td class="border-r px-2 py-2 border-b">${ssrInterpolate($options.getDataValue(data, "female", ward, "15-120"))}</td><!--]-->`);
        });
        _push(`<!--]--></tr><tr><td class="px-2 py-2 bg-gray-50 border-r">\xA0</td><td class="px-2 py-2 border-b border-r">Male</td><!--[-->`);
        ssrRenderList($data.reportData.wards, (ward) => {
          _push(`<!--[--><td class="px-2 py-2 border-b border-r">${ssrInterpolate($options.getDataValue(data, "male", ward, "0-5"))}</td><td class="px-2 py-2 border-b border-r">${ssrInterpolate($options.getDataValue(data, "male", ward, "6-14"))}</td><td class="border-r px-2 py-2 border-b">${ssrInterpolate($options.getDataValue(data, "male", ward, "15-120"))}</td><!--]-->`);
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
  if ($data.reportData.wards.length == 0 && $data.reportData.data.length == 0) {
    _push(`<div class="flex flex-col space-y-3 items-center justify-center py-10"><img${ssrRenderAttr("src", _imports_0$1)} class="w-20 h-20"><p>Please generate report data to preview the <span class="font-medium">${ssrInterpolate($data.selectedDepartment.name)}</span> report. </p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/department.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const department = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { department as default };
//# sourceMappingURL=department-d9e74a88.mjs.map
