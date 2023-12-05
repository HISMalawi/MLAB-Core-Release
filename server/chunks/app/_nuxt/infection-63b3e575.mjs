import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-15d8abe8.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$2 } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useHead } from './index-ca787103.mjs';
import { e as errorMessage } from './constants-353d90a1.mjs';
import { e as endpoints, f as fetchRequest } from './fetch-647b8df7.mjs';
import moment from 'moment';
import { ExportToExcel } from 'vue-doc-exporter';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './DocumentTextIcon-d89971e2.mjs';
import { r as render$1 } from './ArrowPathIcon-6ff7b048.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Infection Report`
    });
  },
  components: {
    ExportToExcel
  },
  data() {
    return {
      moment,
      exportIcon: render,
      refreshIcon: render$1,
      title: "Infection Report",
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
      loading: false,
      reportData: new Array()
    };
  },
  created() {
    this.loadDepartments();
  },
  methods: {
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
        console.log(error.value);
      }
    },
    async generateReport() {
      if (this.validate())
        useNuxtApp().$toast.warning("Please select a department");
      else {
        this.loading = true;
        let startDate = this.dateFrom != "" ? moment(this.dateFrom).format("YYYY-MM-DD") : "";
        let endDate = this.dateTo != "" ? moment(this.dateTo).format("YYYY-MM-DD") : "";
        const request = {
          route: `${endpoints.aggregateReports}infection?from=${startDate}&to=${endDate}&department=${this.selectedDepartment.id}`,
          method: "GET",
          token: `${this.cookie}`
        };
        const { data, error, pending } = await fetchRequest(request);
        this.loading = pending;
        if (data.value) {
          this.loading = false;
          this.reportData = data.value.data;
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
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_CoreActionButton = __nuxt_component_0$2;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.title)}</h3></div><div class="w-full flex items-center justify-between mb-5"><div class="w-full flex items-center space-x-3"><div class="w-40">`);
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
  _push(`</div><div class="w-40">`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.departments,
    modelValue: $data.selectedDepartment,
    "onUpdate:modelValue": ($event) => $data.selectedDepartment = $event
  }, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    loading: $data.loading,
    color: "success",
    text: "Generate Report",
    icon: $data.refreshIcon,
    click: () => $options.generateReport()
  }, null, _parent));
  _push(`</div></div><div class="flex items-center space-x-2">`);
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: `infection_report_from_${$data.moment($data.dateFrom).format("DD_MM_YYYY")}_to_${$data.moment($data.dateTo).format("DD_MM_YYYY")}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          color: "success",
          text: "Export",
          icon: $data.exportIcon,
          click: () => {
          }
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreActionButton, {
            color: "success",
            text: "Export",
            icon: $data.exportIcon,
            click: () => {
            }
          }, null, 8, ["icon"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div id="print-container"><h3 class="text-lg font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate($data.dateFrom != "" ? $data.moment($data.dateFrom).format("DD/MM/YYYY") : "")} - ${ssrInterpolate($data.dateTo != "" ? $data.moment($data.dateTo).format("DD/MM/YYYY") : "")}</span></h3><div class="rounded border"><table class="w-full rounded"><thead class="w-full bg-gray-50 h-full border-b"><tr class="w-full h-full"><th rowspan="2" class="px-2 py-2 border-r">Test</th><th rowspan="2" class="border-r">Measure</th><th rowspan="2" class="px-2 py-2 border-r">Results</th><th rowspan="2" class="px-2 py-2 border-r">Sex</th><th colspan="3" scope="colgroup" class="border-r border-b px-2 py-2">Age Range</th><th rowspan="2" class="px-2 py-2 border-r">M/F Total</th><th rowspan="2" class="px-2 py-2">Total</th></tr><tr><th scope="col" class="border-l px-2 py-2 border-r">[0-5]</th><th scope="col" class="border-r px-2 py-2">[5-14]</th><th scope="col" class="border-r px-2 py-2">[14-120]</th></tr></thead><!--[-->`);
  ssrRenderList($data.reportData, (test, testIndex) => {
    _push(`<!--[--><!--[-->`);
    ssrRenderList(test.indicators, (indicator, indicatorIndex) => {
      _push(`<!--[--><tr>`);
      if (indicatorIndex === 0) {
        _push(`<td${ssrRenderAttr("rowspan", test.indicators.length * 2)} class="border-r px-2 py-2">${ssrInterpolate(test.test_type)}</td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="border-r px-2 py-2">${ssrInterpolate(indicator.indicator.name)}</td><td${ssrRenderAttr("rowspan", 2)} class="border-r px-2 py-2">${ssrInterpolate(indicator.indicator.result !== null ? indicator.indicator.result.value : "")}</td><td class="border-r border-b px-2 py-2">Male</td><td class="border-r border-b px-2 py-2">${ssrInterpolate(indicator.M["0-5"])}</td><td class="border-r border-b px-2 py-2">${ssrInterpolate(indicator.M["5-14"])}</td><td class="border-r border-b px-2 py-2">${ssrInterpolate(indicator.M["14-120"])}</td><td class="border-r border-b px-2 py-2">${ssrInterpolate(indicator.M["0-5"] + indicator.M["5-14"] + indicator.M["14-120"])}</td><td class="border-b px-2 py-2" rowspan="2">${ssrInterpolate(indicator.M["0-5"] + indicator.M["5-14"] + indicator.M["14-120"] + indicator.F["0-5"] + indicator.F["5-14"] + indicator.F["14-120"])}</td></tr><tr class="border-b"><td class="border-r px-2 py-2"></td><td class="border-r px-2 py-2">Female</td><td class="border-r px-2 py-2">${ssrInterpolate(indicator.F["0-5"])}</td><td class="border-r px-2 py-2">${ssrInterpolate(indicator.F["5-14"])}</td><td class="border-r px-2 py-2">${ssrInterpolate(indicator.F["14-120"])}</td><td class="border-r px-2 py-2">${ssrInterpolate(indicator.F["0-5"] + indicator.F["5-14"] + indicator.F["14-120"])}</td></tr><!--]-->`);
    });
    _push(`<!--]--><!--]-->`);
  });
  _push(`<!--]--></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/infection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const infection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { infection as default };
//# sourceMappingURL=infection-63b3e575.mjs.map
