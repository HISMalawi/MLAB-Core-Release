import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-15d8abe8.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$2 } from '../server.mjs';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'vue-chartjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { e as errorMessage, d as dateFormat } from './constants-353d90a1.mjs';
import { u as useHead } from './index-ca787103.mjs';
import moment from 'moment';
import { ExportToExcel } from 'vue-doc-exporter';
import { e as endpoints, f as fetchRequest } from './fetch-647b8df7.mjs';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './ArrowPathIcon-6ff7b048.mjs';
import { r as render$1 } from './DocumentTextIcon-d89971e2.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const _sfc_main$1 = {
  components: {
    Bar
  },
  props: {
    chartData: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      data: this.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  watch: {
    chartData: {
      handler(newValue) {
        this.data = newValue;
      },
      deep: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Bar = resolveComponent("Bar");
  _push(ssrRenderComponent(_component_Bar, mergeProps({
    data: $data.data,
    options: $data.options
  }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/bar/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Turn Around Time Reports`
    });
  },
  components: { ExportToExcel },
  data() {
    return {
      moment,
      refreshIcon: render,
      exportIcon: render$1,
      title: "Turn Around Time Report",
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
      selectedDepartment: { name: "-- select department --", id: 0 },
      dateFrom: "",
      dateTo: "",
      timeUnits: [
        {
          name: "Minutes"
        },
        {
          name: "Hours"
        },
        {
          name: "Days"
        },
        {
          name: "Weeks"
        }
      ],
      unitSelected: { name: "-- select unit --" },
      loading: false,
      statistics: new Array(),
      facility: useFacilityStore(),
      cookie: useCookie("token"),
      chartData: {}
    };
  },
  created() {
    this.loadDepartments();
  },
  methods: {
    /***
     * @method loadDepartments get departments
     * @param null
     * @return promise
     */
    async loadDepartments() {
      const request = {
        route: `${endpoints.departments}`,
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
     * @method generateReport get report data
     * @param null
     * @return promise
     */
    async generateReport() {
      this.loading = true;
      this.chartData = {};
      let startDate = this.dateFrom != "" ? moment(this.dateFrom).format("YYYY-MM-DD") : "";
      let endDate = this.dateTo != "" ? moment(this.dateTo).format("YYYY-MM-DD") : "";
      let queryParams = `from=${startDate}&to=${endDate}&department=${this.selectedDepartment.id}&unit=${this.unitSelected.name.toLowerCase()}`;
      const request = {
        route: `${endpoints.aggregateReports}turn_around_time?${queryParams}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        this.statistics = data.value.data;
        let chartData = {
          labels: data.value.data.map((item) => item.test_type),
          datasets: [
            {
              label: "Turn Around Time",
              backgroundColor: "#0284c7",
              data: data.value.data.map((item) => item.average)
            },
            {
              label: "Average Turn Around Time",
              backgroundColor: "#030712",
              data: data.value.data.map((item) => this.extractNumber(item.turn_around_time))
            }
          ]
        };
        this.chartData = chartData;
        useNuxtApp().$toast.success("Report data generated successfully");
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
      }
    },
    /**
     * @method checkDropDownValues validates drop down values
     * @param null
     * @returns boolean
     */
    checkDropdownValues() {
      if (this.selectedDepartment.name == "-- select department --" || this.unitSelected.name == "-- select unit --") {
        useNuxtApp().$toast.warning("Please select a department and unit");
        return false;
      } else {
        return true;
      }
    },
    /**
     * @method extractNumber get number from a string
     * @param value string
     * @return number
     */
    extractNumber(value) {
      let extractedNumber = 0;
      const regex = /\d+/;
      const matches = value.match(regex);
      if (matches) {
        extractedNumber = parseInt(matches[0]);
      } else {
        extractedNumber = 0;
      }
      return extractedNumber;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_CoreActionButton = __nuxt_component_0$2;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  const _component_ChartsBar = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.title)}</h3></div><form class="w-full flex items-center space-x-3"><div class="w-44">`);
  _push(ssrRenderComponent(_component_datepicker, {
    required: "",
    position: "left",
    range: false,
    placeholder: "-- start date --",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    modelValue: $data.dateFrom,
    "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
    format: "dd/MM/yyyy"
  }, null, _parent));
  _push(`</div><div class="w-44">`);
  _push(ssrRenderComponent(_component_datepicker, {
    required: "",
    range: false,
    placeholder: "-- end date --",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    modelValue: $data.dateTo,
    "onUpdate:modelValue": ($event) => $data.dateTo = $event,
    format: "dd/MM/yyyy"
  }, null, _parent));
  _push(`</div><div class="w-48">`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.departments,
    modelValue: $data.selectedDepartment,
    "onUpdate:modelValue": ($event) => $data.selectedDepartment = $event
  }, null, _parent));
  _push(`</div><div class="w-48">`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.timeUnits,
    modelValue: $data.unitSelected,
    "onUpdate:modelValue": ($event) => $data.unitSelected = $event
  }, null, _parent));
  _push(`</div><div class="w-48">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    type: "submit",
    color: "success",
    text: "Generate Report",
    icon: $data.refreshIcon,
    click: () => {
    },
    loading: $data.loading
  }, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: `turn_around_time_${$data.moment($data.dateFrom).format("DD_MM_YYYY")}_to_${$data.moment($data.dateTo).format("DD_MM_YYYY")}_report`
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
  _push(`</div></form><div class="border rounded mt-10" id="print-container"><table class="w-full bg-gray-50 rounded-tr rounded-tl px-10 py-5"><tr class="flex items-center justify-between px-5"><td><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"></td><td class="py-5"><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></td></tr></table><div class="m-3"><h3 class="font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate($data.dateFrom != "" ? $data.moment($data.dateFrom).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} -:- ${ssrInterpolate($data.dateTo != "" ? $data.moment($data.dateTo).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</span></h3></div><div class="px-2 py-2"><table class="w-full rounded"><thead><tr class="border"><th class="text-left px-2 py-2 border-r">Test Type</th><th class="text-left px-2 py-2 border-r">Turn Around Time</th><th class="text-left px-2 py-2">Average Turn Around Time</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.statistics, (report, index) => {
    _push(`<tr><td class="text-left px-2 py-2 border-l border-b">${ssrInterpolate(report.test_type)}</td><td class="text-left px-2 py-2 border-l border-b">${ssrInterpolate(report.turn_around_time)}</td><td class="text-left px-2 py-2 border-l border-r border-b">${ssrInterpolate(report.average)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div><div class="px-5 py-5 flex flex-col items-center"><h3 class="text-lg font-medium">Average Turn Around Time</h3><p class="mt-1">From: ${ssrInterpolate($data.dateFrom != "" ? $data.moment($data.dateFrom).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} -:- To: ${ssrInterpolate($data.dateTo != "" ? $data.moment($data.dateTo).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</p></div>`);
  if ($data.statistics.length > 0) {
    _push(`<div style="${ssrRenderStyle({ "height": "400px" })}">`);
    _push(ssrRenderComponent(_component_ChartsBar, { "chart-data": $data.chartData }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/turn-around-time.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const turnAroundTime = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { turnAroundTime as default };
//# sourceMappingURL=turn-around-time-c5ca5fcc.mjs.map
