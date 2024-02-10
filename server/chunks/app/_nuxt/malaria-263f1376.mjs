import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0 } from '../server.mjs';
import { _ as _sfc_main$2 } from './ExportButton-c520dc00.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, unref, withCtx, isRef, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_1 } from './page-c16a1934.mjs';
import { e as endpoints, f as fetchRequest } from './fetch-39024911.mjs';
import moment from 'moment';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import { ExportToExcel } from 'vue-doc-exporter';
import { P as Package } from './package-b5464064.mjs';
import { r as render } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$1 } from './ArrowPathIcon-6ff7b048.mjs';
import './nuxt-link-149f0ed2.mjs';
import 'ufo';
import './HomeIcon-299b993b.mjs';
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
import './constants-9b77e6ea.mjs';
import '@headlessui/vue';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "malaria",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - Malaria Report`
    });
    const title = ref("Malaria Report");
    const facility = useFacilityStore();
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
    const selectedDepartment = ref({ name: "select department" });
    const cookie = useCookie("token");
    const dateRange = ref(
      new Array(
        "",
        ""
      )
    );
    const isCleared = () => {
      dateRange.value = new Array(
        "",
        ""
      );
    };
    const loading = ref(false);
    const wardData = ref([]);
    const genderData = ref([]);
    const encounterTypeData = ref([]);
    const pegnantFemaleData = ref([]);
    const summaryData = ref({
      total_tested: {
        micro_over_5: 0,
        micro_under_5: 0,
        mrdt_over_5: 0,
        mrdt_under_5: 0
      },
      total_positive: {
        micro_over_5: 0,
        micro_under_5: 0,
        mrdt_over_5: 0,
        mrdt_under_5: 0
      },
      total_negative: {
        micro_over_5: 0,
        micro_under_5: 0,
        mrdt_over_5: 0,
        mrdt_under_5: 0
      },
      total_male: {
        micro_over_5: 0,
        micro_under_5: 0,
        mrdt_over_5: 0,
        mrdt_under_5: 0
      },
      total_female: {
        micro_over_5: 0,
        micro_under_5: 0,
        mrdt_over_5: 0,
        mrdt_under_5: 0
      },
      total_in_patient: {
        micro_over_5: 0,
        micro_under_5: 0,
        mrdt_over_5: 0,
        mrdt_under_5: 0
      },
      total_out_patient: {
        micro_over_5: 0,
        micro_under_5: 0,
        mrdt_over_5: 0,
        mrdt_under_5: 0
      },
      total_referal: {
        micro_over_5: 0,
        micro_under_5: 0,
        mrdt_over_5: 0,
        mrdt_under_5: 0
      },
      total_female_preg: {
        micro_over_5: 0,
        micro_under_5: 0,
        mrdt_over_5: 0,
        mrdt_under_5: 0
      }
    });
    const checkStatus = (status) => {
      return status == "select department" ? "" : status;
    };
    async function generateReport() {
      loading.value = true;
      let startDate = dateRange.value[0].toString() != "" ? moment(dateRange.value[0].toString()).format("YYYY-MM-DD") : "";
      let endDate = dateRange.value[1].toString() != "" ? moment(dateRange.value[1].toString()).format("YYYY-MM-DD") : "";
      let queryParams = `from=${startDate}&to=${endDate}&department=${checkStatus(selectedDepartment.value.name)}`;
      const request = {
        route: `${endpoints.aggregateReports}/malaria_report?${queryParams}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data, error, pending } = await fetchRequest(request);
      loading.value = pending;
      if (data.value) {
        loading.value = false;
        wardData.value = data.value.data.by_ward;
        genderData.value = data.value.data.by_gender;
        encounterTypeData.value = data.value.data.by_encounter_type;
        pegnantFemaleData.value = data.value.data.by_female_preg;
        summaryData.value = data.value.summary;
        data.value.data.by_ward.length > 0 ? useNuxtApp().$toast.success("Report data generated successfully!") : useNuxtApp().$toast.warning(`No data found in period ${startDate} - ${endDate}`);
      }
      if (error.value) {
        loading.value = false;
        console.error(error.value);
        useNuxtApp().$toast.error(error.value);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
      const _component_CoreBreadcrumb = _sfc_main$1;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreActionButton = __nuxt_component_0;
      const _component_CoreExportButton = _sfc_main$2;
      const _component_CoreLoader = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center py-5"><img${ssrRenderAttr("src", _imports_2)} alt="report-icon" class="w-8 h-8 mr-2"><h3 class="text-2xl font-semibold uppercase">${ssrInterpolate(unref(title))}</h3></div><div class="w-full flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "form",
        "submit-label": "Update",
        onSubmit: generateReport,
        actions: false,
        id: "submitForm"
      }, {
        default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex items-center space-x-3"${_scopeId}><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(render), { class: "w-5 h-5 mr-2" }, null, _parent2, _scopeId));
            _push2(` Filter By Date Range <div class="w-72 ml-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_datepicker, {
              onCleared: isCleared,
              format: "dd/MM/yyyy",
              required: "",
              position: "left",
              placeholder: "select start & end date",
              range: true,
              "input-class-name": "datepicker",
              modelValue: unref(dateRange),
              "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreActionButton, {
              type: "submit",
              loading: unref(loading),
              color: "primary",
              text: "Generate Report",
              icon: unref(render$1),
              click: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex items-center space-x-3" }, [
                createVNode("div", { class: "bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" }, [
                  createVNode(unref(render), { class: "w-5 h-5 mr-2" }),
                  createTextVNode(" Filter By Date Range "),
                  createVNode("div", { class: "w-72 ml-2" }, [
                    createVNode(_component_datepicker, {
                      onCleared: isCleared,
                      format: "dd/MM/yyyy",
                      required: "",
                      position: "left",
                      placeholder: "select start & end date",
                      range: true,
                      "input-class-name": "datepicker",
                      modelValue: unref(dateRange),
                      "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode(_component_CoreActionButton, {
                    type: "submit",
                    loading: unref(loading),
                    color: "primary",
                    text: "Generate Report",
                    icon: unref(render$1),
                    click: () => {
                    }
                  }, null, 8, ["loading", "icon"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(unref(ExportToExcel), {
        element: "print-container",
        filename: "malaria-report"
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
      if (unref(wardData).length > 0) {
        _push(`<div class="border rounded mt-10" id="print-container"><table class="w-full bg-gray-50 rounded-tr rounded-tl border-b px-10 py-5"><tr class="flex items-center justify-between px-5"><td><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"></td><td class="py-5"><p class="uppercase font-medium">${ssrInterpolate(unref(facility).details.name)}</p><p class="uppercase font-medium">${ssrInterpolate(unref(facility).details.address)}</p><p class="uppercase font-medium">${ssrInterpolate(unref(facility).details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></td></tr></table><div class="py-5"><div class="mt-3"><h4 class="font-medium mb-2">Tests for Period: <span class="text-normal font-normal">${ssrInterpolate(unref(dateRange)[0].toString() != "" ? unref(moment)(unref(dateRange)[0].toString()).format("DD/MM/YYYY") : "")} - ${ssrInterpolate(unref(dateRange)[1].toString() != "" ? unref(moment)(unref(dateRange)[1].toString()).format("DD/MM/YYYY") : "")}</span></h4></div><table class="w-full"><thead class="w-full bg-gray-50 border"><tr><th class="border-r py-2 px-4"></th><th colspan="2" class="border-r py-2 px-4 border-b">MRDT</th><th colspan="2" class="border-b">MICROSCOPY</th></tr><tr><th class="border-r py-2 px-4"></th><th class="border-r py-2 px-4">Over 5 years</th><th class="border-r py-2 px-4">Under 5 years</th><th class="border-r py-2 px-4">Over 5 years</th><th>Under 5 years</th></tr></thead><tbody class="border"><!--[-->`);
        ssrRenderList(unref(wardData), (report, index) => {
          _push(`<tr class="border-b"><td class="border"><table class="w-full text-center"><tr><td style="${ssrRenderStyle({ "width": "150px !important" })}" rowspan="4" class="py-2 border-r">${ssrInterpolate(report.ward)}</td></tr><tr class="border-b border-dotted"><td class="py-2 items-center mx-auto">Positive</td></tr><tr class="border-b bg-gray-50 border-dotted"><td class="py-2">Negative</td></tr><tr><td class="py-2">Invalid</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2 text-center">${ssrInterpolate(report.mrdt_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_over5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.mrdt_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_under5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_over5)}</td></tr></table></td><td><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_under5)}</td></tr></table></td></tr>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(unref(genderData), (report, index) => {
          _push(`<tr class="border-b"><td class="border"><table class="w-full text-center"><tr><td style="${ssrRenderStyle({ "width": "150px !important" })}" rowspan="4" class="py-2 border-r">${ssrInterpolate(report.gender == "M" ? "MALE" : "FEMALE")}</td></tr><tr class="border-b border-dotted"><td class="py-2 items-center mx-auto">Positive</td></tr><tr class="border-b bg-gray-50 border-dotted"><td class="py-2">Negative</td></tr><tr><td class="py-2">Invalid</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2 text-center">${ssrInterpolate(report.mrdt_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_over5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.mrdt_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_under5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_over5)}</td></tr></table></td><td><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_under5)}</td></tr></table></td></tr>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(unref(encounterTypeData), (report, index) => {
          _push(`<tr class="border-b"><td class="border"><table class="w-full text-center"><tr><td style="${ssrRenderStyle({ "width": "150px !important" })}" rowspan="4" class="py-2 border-r">${ssrInterpolate(report.encounter_type)}</td></tr><tr class="border-b border-dotted"><td class="py-2 items-center mx-auto">Positive</td></tr><tr class="border-b bg-gray-50 border-dotted"><td class="py-2">Negative</td></tr><tr><td class="py-2">Invalid</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2 text-center">${ssrInterpolate(report.mrdt_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_over5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.mrdt_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_under5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_over5)}</td></tr></table></td><td><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_under5)}</td></tr></table></td></tr>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(unref(pegnantFemaleData), (report, index) => {
          _push(`<tr class="border-b"><td class="border"><table class="w-full text-center"><tr><td style="${ssrRenderStyle({ "width": "150px !important" })}" rowspan="4" class="py-2 border-r uppercase">${ssrInterpolate(report.indicator)}</td></tr><tr class="border-b border-dotted"><td class="py-2 items-center mx-auto">Positive</td></tr><tr class="border-b bg-gray-50 border-dotted"><td class="py-2">Negative</td></tr><tr><td class="py-2">Invalid</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2 text-center">${ssrInterpolate(report.mrdt_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_over5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.mrdt_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.mrdt_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.mrdt_inv_under5)}</td></tr></table></td><td class="border-r"><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_over5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_over5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_over5)}</td></tr></table></td><td><table class="w-full text-center"><tr></tr><tr class="border-b border-dotted"><td class="py-2">${ssrInterpolate(report.micro_pos_under5)}</td></tr><tr class="border-b border-dotted bg-gray-50"><td class="py-2">${ssrInterpolate(report.micro_neg_under5)}</td></tr><tr><td class="py-2">${ssrInterpolate(report.micro_inv_under5)}</td></tr></table></td></tr>`);
        });
        _push(`<!--]--></tbody></table><div class="py-10"><h3 class="text-xl font-semibold mb-3">SUMMARY</h3><table class="w-full"><thead class="w-full bg-gray-50 border"><tr class="border-b"><th class="px-10 py-2 text-left uppercase border-r"></th><th class="px-4 py-2 text-left uppercase border-r">TOTAL TESTED</th><th class="px-4 py-2 text-left uppercase border-r">TOTAL POSITIVE</th><th class="px-4 py-2 text-left uppercase border-r">TOTAL NEGATIVE</th><th class="px-4 py-2 text-left uppercase border-r">MALE</th><th class="px-4 py-2 text-left uppercase border-r">FEMALE</th><th class="px-4 py-2 text-left uppercase border-r">FEMALE PREGNANT</th><th class="px-4 py-2 text-left uppercase">IN PATENTS</th></tr></thead><tbody><tr class="border-b border-r"><td class="px-2 py-2 border-r border-l font-medium uppercase bg-gray-50">Microscopy Over 5 years</td><td class="px-2 py-2 border-r">${ssrInterpolate((_a = unref(summaryData)) == null ? void 0 : _a.total_tested.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_b = unref(summaryData)) == null ? void 0 : _b.total_positive.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_c = unref(summaryData)) == null ? void 0 : _c.total_negative.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_d = unref(summaryData)) == null ? void 0 : _d.total_male.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_e = unref(summaryData)) == null ? void 0 : _e.total_female.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_f = unref(summaryData)) == null ? void 0 : _f.total_female_preg.micro_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_g = unref(summaryData)) == null ? void 0 : _g.total_in_patient.micro_over_5)}</td></tr><tr class="border-b border-r"><td class="px-2 py-2 border-r border-l font-medium uppercase bg-gray-50">Microscopy Under 5 years</td><td class="px-2 py-2 border-r">${ssrInterpolate((_h = unref(summaryData)) == null ? void 0 : _h.total_tested.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_i = unref(summaryData)) == null ? void 0 : _i.total_positive.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_j = unref(summaryData)) == null ? void 0 : _j.total_negative.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_k = unref(summaryData)) == null ? void 0 : _k.total_male.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_l = unref(summaryData)) == null ? void 0 : _l.total_female.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_m = unref(summaryData)) == null ? void 0 : _m.total_female_preg.micro_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_n = unref(summaryData)) == null ? void 0 : _n.total_in_patient.micro_under_5)}</td></tr><tr class="border-b border-r"><td class="px-2 py-2 border-r border-l font-medium uppercase bg-gray-50">MRDT Over 5 years </td><td class="px-2 py-2 border-r">${ssrInterpolate((_o = unref(summaryData)) == null ? void 0 : _o.total_tested.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_p = unref(summaryData)) == null ? void 0 : _p.total_positive.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_q = unref(summaryData)) == null ? void 0 : _q.total_negative.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_r = unref(summaryData)) == null ? void 0 : _r.total_male.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_s = unref(summaryData)) == null ? void 0 : _s.total_female.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_t = unref(summaryData)) == null ? void 0 : _t.total_female_preg.mrdt_over_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_u = unref(summaryData)) == null ? void 0 : _u.total_in_patient.mrdt_over_5)}</td></tr><tr class="border-b border-r"><td class="px-2 py-2 border-r border-l font-medium uppercase bg-gray-50">MRDT Under 5 years </td><td class="px-2 py-2 border-r">${ssrInterpolate((_v = unref(summaryData)) == null ? void 0 : _v.total_tested.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_w = unref(summaryData)) == null ? void 0 : _w.total_positive.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_x = unref(summaryData)) == null ? void 0 : _x.total_negative.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_y = unref(summaryData)) == null ? void 0 : _y.total_male.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_z = unref(summaryData)) == null ? void 0 : _z.total_female.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_A = unref(summaryData)) == null ? void 0 : _A.total_female_preg.mrdt_under_5)}</td><td class="px-2 py-2 border-r">${ssrInterpolate((_B = unref(summaryData)) == null ? void 0 : _B.total_in_patient.mrdt_under_5)}</td></tr></tbody></table></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(wardData).length == 0 && !unref(loading)) {
        _push(`<div class="w-full flex flex-col items-center justify-center space-y-2 py-10"><img${ssrRenderAttr("src", _imports_1)} alt="page-icon" class="object-cover w-20 h-20"><p class="text-base">Data not found, please generate report</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(loading) ? null : { display: "none" })}" class="mx-auto justify-center flex flex-col items-center space-y-3 py-20">`);
      _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
      _push(`<p class="text-base">Generating report, please wait<span class="animate-ping">...</span></p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/malaria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=malaria-263f1376.mjs.map
