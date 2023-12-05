import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { d as dateFormat } from './constants-353d90a1.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { u as useHead } from './index-ca787103.mjs';
import { e as endpoints, f as fetchRequest } from './fetch-1797e116.mjs';
import moment from 'moment';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { ExportToCsv, ExportToExcel } from 'vue-doc-exporter';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './ArrowPathIcon-6ff7b048.mjs';
import { r as render$1 } from './DocumentTextIcon-d89971e2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@headlessui/vue';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Malaria Report`
    });
  },
  components: {
    ExportToCsv,
    ExportToExcel
  },
  data() {
    return {
      refreshIcon: render,
      exportIcon: render$1,
      moment,
      title: "Malaria Report",
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
      reportData: false,
      wardData: new Array(),
      genderData: new Array(),
      encounterTypeData: new Array(),
      pegnantFemaleData: new Array(),
      summaryData: {
        total_tested: {},
        total_positive: {},
        total_negative: {},
        total_male: {},
        total_female: {},
        total_in_patient: {},
        total_out_patient: {},
        total_referal: {},
        total_female_preg: {}
      },
      months: new Array(),
      filteredData: new Array(),
      loading: false
    };
  },
  methods: {
    checkStatus(status) {
      let returnValue = "";
      if (status == "-- select department --" || status === "-- select test type --" || status === "-- select test status --") {
        returnValue = "";
      } else {
        returnValue = status;
      }
      return returnValue;
    },
    /**
     * @method generateReport
     * @param null
     * @return promise
     */
    async generateReport() {
      this.loading = true;
      let startDate = this.dateFrom != "" ? moment(this.dateFrom).format("YYYY-MM-DD") : "";
      let endDate = this.dateTo != "" ? moment(this.dateTo).format("YYYY-MM-DD") : "";
      let queryParams = `from=${startDate}&to=${endDate}&department=${this.checkStatus(this.selectedDepartment.name)}`;
      const request = {
        route: `${endpoints.aggregateReports}/malaria_report?${queryParams}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        this.reportData = true;
        this.wardData = data.value.data.by_ward;
        this.genderData = data.value.data.by_gender;
        this.encounterTypeData = data.value.data.by_encounter_type;
        this.pegnantFemaleData = data.value.data.by_female_preg;
        this.summaryData = data.value.summary;
        useNuxtApp().$toast.success("Report data generated successfully!");
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
        useNuxtApp().$toast.error(error.value);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.title)}</h3></div><div class="w-full flex items-center justify-between"><form class="flex items-center space-x-3"><div class="w-40">`);
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
  _push(`</div><div class="w-40">`);
  _push(ssrRenderComponent(_component_datepicker, {
    required: "",
    range: false,
    placeholder: "-- end date --",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    modelValue: $data.dateTo,
    "onUpdate:modelValue": ($event) => $data.dateTo = $event,
    format: "dd/MM/yyyy"
  }, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    type: "submit",
    loading: $data.loading,
    color: "success",
    text: "Generate Report",
    icon: $data.refreshIcon,
    click: () => {
    }
  }, null, _parent));
  _push(`</div></form><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: "malaria-report"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          click: () => {
          },
          text: "Export",
          color: "primary",
          icon: $data.exportIcon
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreActionButton, {
            click: () => {
            },
            text: "Export",
            color: "primary",
            icon: $data.exportIcon
          }, null, 8, ["icon"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  if ($data.wardData.length > 0) {
    _push(`<div class="border rounded mt-10" id="print-container"><table class="w-full bg-gray-50 rounded-tr rounded-tl border-b px-10 py-5"><tr class="flex items-center justify-between px-5"><td><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"></td><td class="py-5"><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></td></tr></table>`);
    if ($data.reportData) {
      _push(`<div class="px-5 py-5"><div class="mt-3"><h4 class="font-medium mb-2">Malaria Report for Period: <span class="text-normal font-normal">${ssrInterpolate($data.dateFrom != "" ? $data.moment($data.dateFrom).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} - ${ssrInterpolate($data.dateTo != "" ? $data.moment($data.dateTo).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</span></h4></div><table class="w-full"><thead class="w-full bg-gray-50 border"><tr><th class="border-r py-2 px-4"></th><th colspan="2" class="border-r py-2 px-4 border-b">MRDT</th><th colspan="2" class="border-b">MICROSCOPY</th></tr><tr><th class="border-r py-2 px-4"></th><th class="border-r py-2 px-4">Over 5 years</th><th class="border-r py-2 px-4">Under 5 years</th><th class="border-r py-2 px-4">Over 5 years</th><th>Under 5 years</th></tr></thead><tbody class="border"><!--[-->`);
      ssrRenderList($data.wardData, (report, index) => {
        _push(`<tr class="border-b"><td class="border"><table class="w-full text-center"><tr><td style="${ssrRenderStyle({ "width": "150px !important" })}" rowspan="4" class="py-2 border-r">${ssrInterpolate(report.ward)}</td></tr><tr class="border-b border-dotted"><td class="py-2 items-center mx-auto">Positive</td></tr><tr class="border-b bg-gray-50 border-dotted"><td class="py-2">Negative</td></tr><tr><td class="py-2">Invalid</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2 text-center">${ssrInterpolate(report.mrdt_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_over5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.mrdt_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_under5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_over5)}</td></tr></table></td><td><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_under5)}</td></tr></table></td></tr>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList($data.genderData, (report, index) => {
        _push(`<tr class="border-b"><td class="border"><table class="w-full text-center"><tr><td style="${ssrRenderStyle({ "width": "150px !important" })}" rowspan="4" class="py-2 border-r">${ssrInterpolate(report.gender == "M" ? "MALE" : "FEMALE")}</td></tr><tr class="border-b border-dotted"><td class="py-2 items-center mx-auto">Positive</td></tr><tr class="border-b bg-gray-50 border-dotted"><td class="py-2">Negative</td></tr><tr><td class="py-2">Invalid</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2 text-center">${ssrInterpolate(report.mrdt_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_over5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.mrdt_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_under5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_over5)}</td></tr></table></td><td><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_under5)}</td></tr></table></td></tr>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList($data.encounterTypeData, (report, index) => {
        _push(`<tr class="border-b"><td class="border"><table class="w-full text-center"><tr><td style="${ssrRenderStyle({ "width": "150px !important" })}" rowspan="4" class="py-2 border-r">${ssrInterpolate(report.encounter_type)}</td></tr><tr class="border-b border-dotted"><td class="py-2 items-center mx-auto">Positive</td></tr><tr class="border-b bg-gray-50 border-dotted"><td class="py-2">Negative</td></tr><tr><td class="py-2">Invalid</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2 text-center">${ssrInterpolate(report.mrdt_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_over5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.mrdt_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_under5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_over5)}</td></tr></table></td><td><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_under5)}</td></tr></table></td></tr>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList($data.pegnantFemaleData, (report, index) => {
        _push(`<tr class="border-b"><td class="border"><table class="w-full text-center"><tr><td style="${ssrRenderStyle({ "width": "150px !important" })}" rowspan="4" class="py-2 border-r uppercase">${ssrInterpolate(report.indicator)}</td></tr><tr class="border-b border-dotted"><td class="py-2 items-center mx-auto">Positive</td></tr><tr class="border-b bg-gray-50 border-dotted"><td class="py-2">Negative</td></tr><tr><td class="py-2">Invalid</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2 text-center">${ssrInterpolate(report.mrdt_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_over5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.mrdt_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_under5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_over5)}</td></tr></table></td><td><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_under5)}</td></tr></table></td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="py-10"><h3 class="text-xl font-semibold mb-3">SUMMARY</h3><table class="w-full"><thead class="w-full bg-gray-50 border"><tr class="border-b"><th class="px-10 py-2 text-left uppercase border-r"></th><th class="px-4 py-2 text-left uppercase border-r">TOTAL TESTED</th><th class="px-4 py-2 text-left uppercase border-r">TOTAL POSITIVE</th><th class="px-4 py-2 text-left uppercase border-r">TOTAL NEGATIVE</th><th class="px-4 py-2 text-left uppercase border-r">MALE</th><th class="px-4 py-2 text-left uppercase border-r">FEMALE</th><th class="px-4 py-2 text-left uppercase border-r">FEMALE PREGNANT</th><th class="px-4 py-2 text-left uppercase">IN PATENTS</th></tr></thead><tbody><tr class="border-b border-r"><td class="px-2 py-2 border-r border-l font-medium uppercase bg-gray-50">Microscopy Over 5 years</td><td class="px-2 py-2 border-r">${ssrInterpolate((_a = $data.summaryData) == null ? void 0 : _a.total_tested.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_b = $data.summaryData) == null ? void 0 : _b.total_positive.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_c = $data.summaryData) == null ? void 0 : _c.total_negative.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_d = $data.summaryData) == null ? void 0 : _d.total_male.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_e = $data.summaryData) == null ? void 0 : _e.total_female.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_f = $data.summaryData) == null ? void 0 : _f.total_female_preg.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_g = $data.summaryData) == null ? void 0 : _g.total_in_patient.micro_over_5)}</td></tr><tr class="border-b border-r"><td class="px-2 py-2 border-r border-l font-medium uppercase bg-gray-50">Microscopy Under 5 years</td><td class="px-2 py-2 border-r">${ssrInterpolate((_h = $data.summaryData) == null ? void 0 : _h.total_tested.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_i = $data.summaryData) == null ? void 0 : _i.total_positive.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_j = $data.summaryData) == null ? void 0 : _j.total_negative.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_k = $data.summaryData) == null ? void 0 : _k.total_male.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_l = $data.summaryData) == null ? void 0 : _l.total_female.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_m = $data.summaryData) == null ? void 0 : _m.total_female_preg.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_n = $data.summaryData) == null ? void 0 : _n.total_in_patient.micro_under_5)}</td></tr><tr class="border-b border-r"><td class="px-2 py-2 border-r border-l font-medium uppercase bg-gray-50">MRDT Over 5 years </td><td class="px-2 py-2 border-r">${ssrInterpolate((_o = $data.summaryData) == null ? void 0 : _o.total_tested.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_p = $data.summaryData) == null ? void 0 : _p.total_positive.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_q = $data.summaryData) == null ? void 0 : _q.total_negative.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_r = $data.summaryData) == null ? void 0 : _r.total_male.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_s = $data.summaryData) == null ? void 0 : _s.total_female.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_t = $data.summaryData) == null ? void 0 : _t.total_female_preg.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_u = $data.summaryData) == null ? void 0 : _u.total_in_patient.mrdt_over_5)}</td></tr><tr class="border-b border-r"><td class="px-2 py-2 border-r border-l font-medium uppercase bg-gray-50">MRDT Under 5 years </td><td class="px-2 py-2 border-r">${ssrInterpolate((_v = $data.summaryData) == null ? void 0 : _v.total_tested.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_w = $data.summaryData) == null ? void 0 : _w.total_positive.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_x = $data.summaryData) == null ? void 0 : _x.total_negative.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_y = $data.summaryData) == null ? void 0 : _y.total_male.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_z = $data.summaryData) == null ? void 0 : _z.total_female.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_A = $data.summaryData) == null ? void 0 : _A.total_female_preg.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_B = $data.summaryData) == null ? void 0 : _B.total_in_patient.mrdt_under_5)}</td></tr></tbody></table></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.wardData.length == 0) {
    _push(`<div class="flex flex-col space-y-3 items-center justify-center"><img${ssrRenderAttr("src", _imports_0$1)} class="w-20 h-20"><p class="font-medium">Please generate report data to preview the report</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/malaria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const malaria = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { malaria as default };
//# sourceMappingURL=malaria-24cec94b.mjs.map
