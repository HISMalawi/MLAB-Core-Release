import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-15d8abe8.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$2 } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useHead } from './index-ca787103.mjs';
import { e as endpoints, f as fetchRequest, _ as _imports_0 } from './fetch-b1fc5224.mjs';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './ArrowPathIcon-6ff7b048.mjs';
import { r as render$1 } from './ArrowUpTrayIcon-a90cd76a.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './logo-86b75328.mjs';
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
import 'moment';
import './constants-353d90a1.mjs';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Serology Report`
    });
  },
  data() {
    return {
      viewIcon: render,
      exportIcon: render$1,
      date: "",
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
          name: "MoH Diagnistic Reports",
          link: "#"
        }
      ],
      indicators: new Array(),
      items: new Array(),
      data: new Array(),
      yearSelected: { name: "-- select year --" },
      years: new Array(),
      cookie: useCookie("token"),
      viewing: false,
      facility: useFacilityStore(),
      reportData: new Array()
    };
  },
  created() {
    this.getYears();
    this.getReportIndicators();
  },
  methods: {
    async getReportIndicators() {
      const request = {
        route: `${endpoints.reportIndicators}?department=Serology`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        data.value.map((value) => {
          this.items.push({
            indicator: value,
            jan: "!",
            feb: "!",
            mar: "!",
            totalQ1: "!",
            apr: "!",
            may: "!",
            june: "!",
            totalQ2: "!",
            jul: "!",
            aug: "!",
            sept: "!",
            totalQ3: "!",
            oct: "!",
            nov: "!",
            dec: "!",
            totalQ4: "!",
            total: "!"
          });
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async getReportData() {
      if (this.yearSelected.name == "-- select year --") {
        useNuxtApp().$toast.warning("Please select a year");
      } else {
        this.viewing = true;
        const request = {
          route: `${endpoints.mohReport}serology?year=${this.yearSelected.name}`,
          method: "GET",
          token: `${this.cookie}`
        };
        const { data, error, pending } = await fetchRequest(request);
        this.viewing = pending;
        if (data.value) {
          let indicatorsData = new Array();
          this.items.map((values) => {
            let janData = data.value.january[values.indicator];
            let febData = data.value.february[values.indicator];
            let marData = data.value.march[values.indicator];
            let aprData = data.value.april[values.indicator];
            let mayData = data.value.may[values.indicator];
            let junData = data.value.june[values.indicator];
            let julyData = data.value.july[values.indicator];
            let augData = data.value.august[values.indicator];
            let septData = data.value.september[values.indicator];
            let octData = data.value.october[values.indicator];
            let novData = data.value.november[values.indicator];
            let decData = data.value.december[values.indicator];
            let totalQ1 = janData + febData + marData;
            let totalQ2 = aprData + mayData + junData;
            let totalQ3 = julyData + augData + septData;
            let totalQ4 = octData + novData + decData;
            indicatorsData.push({
              indicator: values.indicator,
              jan: janData,
              feb: febData,
              mar: marData,
              totalQ1,
              apr: aprData,
              may: mayData,
              june: junData,
              totalQ2,
              jul: julyData,
              aug: augData,
              sept: septData,
              totalQ3,
              oct: octData,
              nov: novData,
              dec: decData,
              totalQ4,
              total: totalQ1 + totalQ2 + totalQ3 + totalQ4
            });
            this.reportData.push({
              "Laboratory Service": values.indicator,
              "January": janData,
              "February": febData,
              "March": marData,
              "Total Q1": totalQ1,
              "April": aprData,
              "May": mayData,
              "June": junData,
              "Total Q2": totalQ2,
              "July": julyData,
              "August": augData,
              "September": septData,
              "Total Q3": totalQ3,
              "October": octData,
              "November": novData,
              "December": decData,
              "Total Q4": totalQ4,
              "Total": totalQ1 + totalQ2 + totalQ3 + totalQ4
            });
          });
          this.items = new Array();
          this.items.push(...indicatorsData);
          this.viewing = false;
        }
        if (error.value) {
          this.viewing = false;
          console.error(error.value);
        }
      }
    },
    getYears() {
      for (let i = (/* @__PURE__ */ new Date()).getFullYear(); i >= 2e3; i--) {
        this.years.push({ name: i.toString(), id: i });
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_CoreActionButton = __nuxt_component_0$2;
  const _component_excel = resolveComponent("excel");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="py-5"><h3 class="text-xl font-semibold flex items-center"><img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"> MoH Diagonistic Reports (Serology) </h3></div><div class="w-full flex justify-between py-5"><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.years,
    modelValue: $data.yearSelected,
    "onUpdate:modelValue": ($event) => $data.yearSelected = $event
  }, null, _parent));
  _push(ssrRenderComponent(_component_CoreActionButton, {
    loading: $data.viewing,
    click: () => {
      $options.getReportData();
    },
    color: "primary",
    icon: $data.viewIcon,
    text: "Generate report"
  }, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_excel, {
    class: "btn btn-default",
    header: [`SEROLOGY MoH LABORATORY REPORT ${$data.yearSelected.name}`, $data.facility.details.name, $data.facility.details.address, $data.facility.details.phone],
    data: $data.reportData,
    worksheet: "report-work-sheet",
    name: `moh_serology_report_${$data.yearSelected.name}.xls`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          color: "success",
          click: () => {
          },
          icon: $data.exportIcon,
          text: "Export"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreActionButton, {
            color: "success",
            click: () => {
            },
            icon: $data.exportIcon,
            text: "Export"
          }, null, 8, ["icon"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="border rounded"><div class="rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0$1)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2"><p class="font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase underline">Laboratory Report</p></div></div><div><p class="px-4 py-2.5">Data for the year: <span class="font-semibold">${ssrInterpolate($data.yearSelected.name)}</span></p></div><div class="w-full rounded border-t"><table class="w-full"><thead class="w-full border-b"><tr class="w-full bg-gray-50"><th class="px-4 py-2 border-r">Laboratory Service</th><th class="px-4 py-2 border-r">Jan</th><th class="px-4 py-2 border-r">Feb</th><th class="px-4 py-2">March</th><th class="px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100">Total Q1</th><th class="px-4 py-2 border-r">Apr</th><th class="px-4 py-2 border-r">May</th><th class="px-4 py-2">Jun</th><th class="px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100">Total Q2</th><th class="px-4 py-2 border-r">Jul</th><th class="px-4 py-2 border-r">Aug</th><th class="px-4 py-2">Sep</th><th class="px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100">Total Q3</th><th class="px-4 py-2 border-r">Oct</th><th class="px-4 py-2 border-r">Nov</th><th class="px-4 py-2">Dev</th><th class="px-4 py-2 bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100">Total Q4 </th><th class="px-4 py-2 bg-green-50 text-green-500 border border-green-100">Total</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.items, (i, index) => {
    _push(`<tr class="px-2"><td class="px-4 py-2 text-left border-r border-b">${ssrInterpolate(i.indicator)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.jan)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.feb)}</td><td class="px-4 py-2 text-center border-b">${ssrInterpolate(i.mar)}</td><td class="px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100">${ssrInterpolate(i.totalQ1)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.apr)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.may)}</td><td class="px-4 py-2 text-center border-b">${ssrInterpolate(i.june)}</td><td class="px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100">${ssrInterpolate(i.totalQ2)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.jul)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.aug)}</td><td class="px-4 py-2 text-center border-b">${ssrInterpolate(i.sept)}</td><td class="px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100">${ssrInterpolate(i.totalQ3)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.oct)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.nov)}</td><td class="px-4 py-2 text-center border-b">${ssrInterpolate(i.dec)}</td><td class="px-4 py-2 text-center bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100">${ssrInterpolate(i.totalQ4)}</td><td class="px-4 py-2 text-center bg-green-50 border text-green-500 border-green-100">${ssrInterpolate(i.total)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/moh/serology.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const serology = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { serology as default };
//# sourceMappingURL=serology-1f4fad82.mjs.map
