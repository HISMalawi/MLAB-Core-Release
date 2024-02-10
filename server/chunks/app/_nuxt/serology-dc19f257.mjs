import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0$1 } from '../server.mjs';
import { _ as _sfc_main$2 } from './ExportButton-c520dc00.mjs';
import { _ as _sfc_main$3 } from './Address-069ccacc.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { e as errorMessage } from './constants-9b77e6ea.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { e as endpoints, f as fetchRequest } from './fetch-39024911.mjs';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import { P as Package } from './package-f9450e57.mjs';
import { r as render } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$1 } from './ArrowPathIcon-6ff7b048.mjs';
import './nuxt-link-149f0ed2.mjs';
import 'ufo';
import './HomeIcon-299b993b.mjs';
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@intlify/core-base';
import 'cookie-es';
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
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'vue3-easy-data-table';
import '@vuepic/vue-datepicker';
import 'vue-json-excel3';
import '@vueform/multiselect';
import 'vue3-toastify';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'moment';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "serology",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - Serology Report`
    });
    ref("");
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
        name: "MoH Diagnistic Reports",
        link: "#"
      }
    ]);
    ref([]);
    const items = ref([]);
    ref([]);
    const yearSelected = ref({ name: "select year" });
    const years = ref([]);
    const cookie = useCookie("token");
    const viewing = ref();
    const facility = useFacilityStore();
    const reportData = ref([]);
    async function getReportIndicators() {
      const request = {
        route: `${endpoints.reportIndicators}?department=Serology`,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data: data2, error, pending } = await fetchRequest(request);
      if (data2.value) {
        data2.value.map((value) => {
          items.value.push({
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
    }
    async function getReportData() {
      if (yearSelected.value.name == "select year") {
        useNuxtApp().$toast.warning("Please select a year");
      } else {
        viewing.value = true;
        const request = {
          route: `${endpoints.mohReport}serology?year=${yearSelected.value.name}`,
          method: "GET",
          token: `${cookie.value}`
        };
        const { data: data2, error, pending } = await fetchRequest(request);
        viewing.value = pending;
        if (data2.value) {
          let indicatorsData = new Array();
          items.value.map((values) => {
            let janData = data2.value.january[values.indicator];
            let febData = data2.value.february[values.indicator];
            let marData = data2.value.march[values.indicator];
            let aprData = data2.value.april[values.indicator];
            let mayData = data2.value.may[values.indicator];
            let junData = data2.value.june[values.indicator];
            let julyData = data2.value.july[values.indicator];
            let augData = data2.value.august[values.indicator];
            let septData = data2.value.september[values.indicator];
            let octData = data2.value.october[values.indicator];
            let novData = data2.value.november[values.indicator];
            let decData = data2.value.december[values.indicator];
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
            reportData.value.push({
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
          items.value = new Array();
          items.value.push(...indicatorsData);
          viewing.value = false;
          useNuxtApp().$toast.success("Report data generated successfully!");
        }
        if (error.value) {
          viewing.value = false;
          console.error(error.value);
          useNuxtApp().$toast.success(errorMessage);
        }
      }
    }
    function getYears() {
      for (let i = (/* @__PURE__ */ new Date()).getFullYear(); i >= 2e3; i--) {
        years.value.push({ name: i.toString(), id: i });
      }
    }
    getReportIndicators();
    getYears();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$1;
      const _component_CoreDropdown = __nuxt_component_0;
      const _component_CoreActionButton = __nuxt_component_0$1;
      const _component_excel = resolveComponent("excel");
      const _component_CoreExportButton = _sfc_main$2;
      const _component_ReportsAddress = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="py-5"><div class="text-2xl font-semibold flex items-center uppercase"><img${ssrRenderAttr("src", _imports_2)} class="w-8 h-8 mr-2"> Serology Report </div></div><div class="w-full flex justify-between py-5"><div class="flex items-center space-x-3"><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500">`);
      _push(ssrRenderComponent(unref(render), { class: "w-5 h-5 mr-2" }, null, _parent));
      _push(` Filter By Year <div class="w-36 ml-2 bg-white">`);
      _push(ssrRenderComponent(_component_CoreDropdown, {
        items: unref(years),
        modelValue: unref(yearSelected),
        "onUpdate:modelValue": ($event) => isRef(yearSelected) ? yearSelected.value = $event : null
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        class: "mt-1",
        loading: unref(viewing),
        click: () => {
          getReportData();
        },
        color: "primary",
        icon: unref(render$1),
        text: "Generate report"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_excel, {
        class: "btn btn-default",
        header: [`SEROLOGY MoH LABORATORY REPORT ${unref(yearSelected).name}`, unref(facility).details.name, unref(facility).details.address, unref(facility).details.phone],
        data: unref(reportData),
        worksheet: "report-work-sheet",
        name: `moh_serology_report_${unref(yearSelected).name}.xls`
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
      _push(`</div></div><div class="border rounded"><div class="rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><div class="flex flex-col space-y-2"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-xl font-semibold"> SEROLOGY MoH LABORATORY REPORT </h3></div>`);
      _push(ssrRenderComponent(_component_ReportsAddress, null, null, _parent));
      _push(`</div><div><h3 class="px-4 py-2.5 font-medium">Data for the year: <span class="font-normal">${ssrInterpolate(unref(yearSelected).name == "select year" ? "-:-" : unref(yearSelected).name)}</span></h3></div><div class="overflow-x-auto rounded border-t"><table class="overflow-x-auto"><thead class="border-b"><tr class="w-full bg-gray-50"><th class="px-4 py-2 border-r">Laboratory Service</th><th class="px-4 py-2 border-r">Jan</th><th class="px-4 py-2 border-r">Feb</th><th class="px-4 py-2">March</th><th class="px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100">Total Q1</th><th class="px-4 py-2 border-r">Apr</th><th class="px-4 py-2 border-r">May</th><th class="px-4 py-2">Jun</th><th class="px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100">Total Q2</th><th class="px-4 py-2 border-r">Jul</th><th class="px-4 py-2 border-r">Aug</th><th class="px-4 py-2">Sep</th><th class="px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100">Total Q3</th><th class="px-4 py-2 border-r">Oct</th><th class="px-4 py-2 border-r">Nov</th><th class="px-4 py-2">Dev</th><th class="px-4 py-2 bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100">Total Q4 </th><th class="px-4 py-2 bg-green-600 text-white border border-green-400">Total</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(items), (i, index) => {
        _push(`<tr class="px-2"><td class="px-4 py-2 text-left border-r border-b">${ssrInterpolate(i.indicator)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.jan)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.feb)}</td><td class="px-4 py-2 text-center border-b">${ssrInterpolate(i.mar)}</td><td class="px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100">${ssrInterpolate(i.totalQ1)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.apr)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.may)}</td><td class="px-4 py-2 text-center border-b">${ssrInterpolate(i.june)}</td><td class="px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100">${ssrInterpolate(i.totalQ2)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.jul)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.aug)}</td><td class="px-4 py-2 text-center border-b">${ssrInterpolate(i.sept)}</td><td class="px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100">${ssrInterpolate(i.totalQ3)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.oct)}</td><td class="px-4 py-2 text-center border-r border-b">${ssrInterpolate(i.nov)}</td><td class="px-4 py-2 text-center border-b">${ssrInterpolate(i.dec)}</td><td class="px-4 py-2 text-center bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100">${ssrInterpolate(i.totalQ4)}</td><td class="px-4 py-2 text-center bg-green-600 border text-white border-green-400">${ssrInterpolate(i.total)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/moh/serology.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=serology-dc19f257.mjs.map
