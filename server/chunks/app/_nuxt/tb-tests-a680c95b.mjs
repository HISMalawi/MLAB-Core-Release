import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './index-431e52b1.mjs';
import { e as errorMessage, d as dateFormat } from './constants-353d90a1.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { u as useHead } from './index-ca787103.mjs';
import moment from 'moment';
import { e as endpoints, f as fetchRequest } from './fetch-647b8df7.mjs';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { ExportToExcel } from 'vue-doc-exporter';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './ArrowPathIcon-6ff7b048.mjs';
import { r as render$1 } from './DocumentTextIcon-d89971e2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_0$1 } from './stock_out-9944e6b9.mjs';
import './nuxt-link-0e3a4fce.mjs';
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
import './XMarkIcon-170c776f.mjs';
import './PrinterIcon-02ac6ae4.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './PencilSquareIcon-77446728.mjs';

const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - TB Tests Reports`
    });
  },
  components: { ExportToExcel },
  data() {
    return {
      moment,
      title: "TB Tests Report",
      refreshIcon: render,
      exportIcon: render$1,
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
      dateFrom: "",
      dateTo: "",
      loading: false,
      reportData: { months: new Array(), data: new Array() },
      facility: useFacilityStore(),
      cookie: useCookie("token")
    };
  },
  methods: {
    async generateReport() {
      this.loading = true;
      let startDate = this.dateFrom != "" ? moment(this.dateFrom).format("YYYY-MM-DD") : "";
      let endDate = this.dateTo != "" ? moment(this.dateTo).format("YYYY-MM-DD") : "";
      let queryParams = `from=${startDate}&to=${endDate}`;
      const request = {
        route: `${endpoints.aggregateReports}tb_tests?${queryParams}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        console.log(data.value);
        this.reportData = data.value;
        useNuxtApp().$toast.success("Report data generated successfully");
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
        useNuxtApp().$toast.success(errorMessage);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_CorePrinterReport = __nuxt_component_2;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.title)}</h3></div><div class="flex justify-between items-center"><form class="w-full flex items-center space-x-3"><div class="w-40">`);
  _push(ssrRenderComponent(_component_datepicker, {
    position: "left",
    required: "",
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
    required: "",
    placeholder: "-- end date --",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    modelValue: $data.dateTo,
    "onUpdate:modelValue": ($event) => $data.dateTo = $event,
    format: "dd/MM/yyyy"
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
  _push(`</div></form><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_CorePrinterReport, { printSmallLabel: false }, null, _parent));
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: `tb_tests_report_from_${$data.moment($data.dateFrom).format("DD_MM_YYYY")}_to_${$data.moment($data.dateTo).format("DD_MM_YYYY")}`
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
  _push(`</div></div>`);
  if ($data.reportData.data.length > 0) {
    _push(`<div class="border rounded mt-10" id="print-container"><table class="w-full bg-gray-50 rounded-tr rounded-tl px-10 py-5"><tr class="flex items-center justify-between px-5"><td><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"></td><td class="py-5"><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></td></tr></table><div class="m-3"><h3 class="text-lg font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate($data.dateFrom != "" ? $data.moment($data.dateFrom).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} - ${ssrInterpolate($data.dateTo != "" ? $data.moment($data.dateTo).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</span></h3></div><div><table class="w-full rounded overflow-x-auto border-t"><!--[-->`);
    ssrRenderList($data.reportData.data, (report, reportIndex) => {
      _push(`<!--[--><thead class="w-full border-b"><tr class="border-b"><th class="px-2 py-2 text-center uppercase"${ssrRenderAttr("colspan", $data.reportData.months.length)}>${ssrInterpolate(Object.keys(report)[0])}</th></tr><tr class="bg-gray-50"><th class="px-2 py-2 border-r">Result</th><!--[-->`);
      ssrRenderList($data.reportData.months, (month, index) => {
        _push(`<th class="px-2 py-2 border-r">${ssrInterpolate(month)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody><!--[-->`);
      ssrRenderList(report[Object.keys(report)[0]], (data, dataIndex) => {
        _push(`<tr class="border-b"><td class="px-2 py-2 text-center border-r capitalize">${ssrInterpolate(data.result)}</td><!--[-->`);
        ssrRenderList($data.reportData.months, (month) => {
          _push(`<td class="px-2 py-2 text-center border-r">${ssrInterpolate(data.month[month] > 0 ? data.month[month] : 0)}</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody><!--]-->`);
    });
    _push(`<!--]--></table></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.reportData.data.length == 0) {
    _push(`<div class="flex flex-col space-y-3 items-center justify-center"><img${ssrRenderAttr("src", _imports_0$1)} class="w-20 h-20"><p class="font-medium">Please generate report data to preview the report</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/tb-tests.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tbTests = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { tbTests as default };
//# sourceMappingURL=tb-tests-a680c95b.mjs.map
