import { _ as _sfc_main$2 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0$1, _ as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$3 } from './ExportButton-c520dc00.mjs';
import { _ as _sfc_main$4 } from './Address-af315606.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'vue-chartjs';
import { defineComponent, ref, computed, resolveComponent, mergeProps, unref, withCtx, isRef, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { d as dateFormat, e as errorMessage } from './constants-353d90a1.mjs';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_1 } from './page-c16a1934.mjs';
import moment from 'moment';
import { f as fetchRequest, e as endpoints } from './fetch-40f40580.mjs';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import { P as Package } from './package-93ceb647.mjs';
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const title = "Turn Around Time Report";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "turn-around-time",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - Turn Around Time Reports`
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
    const selectedDepartment = ref({ name: "select department", id: 0 });
    const dateFrom = ref("");
    const dateTo = ref("");
    const timeUnits = ref([
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
    ]);
    const unitSelected = ref({ name: "select unit" });
    const loading = ref(false);
    const statistics = ref([]);
    const facility = useFacilityStore();
    const cookie = useCookie("token");
    const chartData = ref({});
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
    const startDate = computed(() => {
      return dateRange.value[0] ? moment(dateRange.value[0]).format("YYYY-MM-DD") : "";
    });
    const endDate = computed(() => {
      return dateRange.value[1] ? moment(dateRange.value[1]).format("YYYY-MM-DD") : "";
    });
    const exportData = computed(() => {
      return statistics.value.length > 0 ? statistics.value.map((statistic) => ({
        "TEST TYPE": statistic.test_type,
        "TURN AROUND TIME": statistic.turn_around_time,
        "AVERAGE": statistic.average
      })) : [];
    });
    async function loadDepartments() {
      const { data, error } = await fetchRequest({
        route: endpoints.departments,
        method: "GET",
        token: `${cookie.value}`
      });
      if (data.value)
        departments.value = data.value;
      if (error.value)
        console.error(error.value);
    }
    async function generateReport() {
      loading.value = true;
      chartData.value = {};
      let queryParams = `from=${startDate.value}&to=${endDate.value}&department=${selectedDepartment.value.id}&unit=${unitSelected.value.name.toLowerCase()}`;
      const request = {
        route: `${endpoints.aggregateReports}turn_around_time?${queryParams}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data, error, pending } = await fetchRequest(request);
      loading.value = pending;
      if (data.value) {
        loading.value = false;
        statistics.value = data.value.data;
        chartData.value = {
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
              data: data.value.data.map((item) => extractNumber(item.turn_around_time))
            }
          ]
        };
        data.value.data.length > 0 ? useNuxtApp().$toast.success("Report data generated successfully") : useNuxtApp().$toast.warning(`No data found in period ${startDate} - ${endDate}`);
      }
      if (error.value) {
        loading.value = false;
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
      }
    }
    function checkDropdownValues() {
      const isInvalidSelection = selectedDepartment.value.name === "select department" || unitSelected.value.name === "select unit";
      if (isInvalidSelection) {
        useNuxtApp().$toast.warning("Please select a department and unit");
      }
      return !isInvalidSelection;
    }
    function extractNumber(value) {
      const regex = /\d+/;
      const matches = value == null ? void 0 : value.match(regex);
      return matches ? parseInt(matches[0]) : 0;
    }
    loadDepartments();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$2;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreDropdown = __nuxt_component_0;
      const _component_CoreActionButton = __nuxt_component_0$1;
      const _component_excel = resolveComponent("excel");
      const _component_CoreExportButton = _sfc_main$3;
      const _component_ReportsAddress = _sfc_main$4;
      const _component_CoreLoader = __nuxt_component_3;
      const _component_ChartsBar = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center py-5"><img${ssrRenderAttr("src", _imports_2)} alt="report-icon" class="w-8 h-8 mr-2"><h3 class="text-2xl font-semibold uppercase">${ssrInterpolate(title)}</h3></div><div class="flex justify-between items-center">`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "form",
        "submit-label": "Update",
        onSubmit: ($event) => checkDropdownValues() && generateReport(),
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
              required: "",
              position: "left",
              placeholder: "select start & end date",
              range: true,
              "input-class-name": "datepicker",
              modelValue: unref(dateRange),
              "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="w-48"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreDropdown, {
              items: unref(departments),
              modelValue: unref(selectedDepartment),
              "onUpdate:modelValue": ($event) => isRef(selectedDepartment) ? selectedDepartment.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-48"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreDropdown, {
              items: unref(timeUnits),
              modelValue: unref(unitSelected),
              "onUpdate:modelValue": ($event) => isRef(unitSelected) ? unitSelected.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-48"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreActionButton, {
              type: "submit",
              color: "primary",
              text: "Generate Report",
              icon: unref(render$1),
              click: () => {
              },
              loading: unref(loading)
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
                createVNode("div", { class: "w-48" }, [
                  createVNode(_component_CoreDropdown, {
                    items: unref(departments),
                    modelValue: unref(selectedDepartment),
                    "onUpdate:modelValue": ($event) => isRef(selectedDepartment) ? selectedDepartment.value = $event : null
                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "w-48" }, [
                  createVNode(_component_CoreDropdown, {
                    items: unref(timeUnits),
                    modelValue: unref(unitSelected),
                    "onUpdate:modelValue": ($event) => isRef(unitSelected) ? unitSelected.value = $event : null
                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "w-48" }, [
                  createVNode(_component_CoreActionButton, {
                    type: "submit",
                    color: "primary",
                    text: "Generate Report",
                    icon: unref(render$1),
                    click: () => {
                    },
                    loading: unref(loading)
                  }, null, 8, ["icon", "loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_excel, {
        class: "btn btn-default",
        header: [`TURN AROUND TIME REPORT ${unref(startDate)} - ${unref(endDate)}`, unref(facility).details.name, unref(facility).details.address, unref(facility).details.phone],
        data: unref(exportData),
        worksheet: "report-work-sheet",
        name: `turn_around_time_${unref(startDate)}_to_${unref(endDate)}.xls`
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
      _push(`</div><div class="border rounded mt-10" id="print-container"><div class="flex items-center justify-between px-5 py-5 border-b"><div class="flex flex-col space-y-2"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-xl font-semibold"> TURN AROUND TIME REPORT </h3></div>`);
      _push(ssrRenderComponent(_component_ReportsAddress, null, null, _parent));
      _push(`</div><div class="m-3"><h3 class="font-semibold mb-2">Tests Performed Period: <span class="text-normal font-normal">${ssrInterpolate(unref(startDate))} - ${ssrInterpolate(unref(endDate))}</span></h3></div><div><table class="w-full rounded"><thead><tr class="border-t bg-gray-100 border-b"><th class="text-left px-2 py-2 border-r">Test Type</th><th class="text-left px-2 py-2 border-r">Turn Around Time</th><th class="text-left px-2 py-2">Average Turn Around Time</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(statistics), (report, index) => {
        _push(`<tr class="${ssrRenderClass({ "bg-white": index % 2 === 0, "bg-gray-100": index % 2 !== 0 })}"><td class="text-left px-2 py-2 border-l border-b">${ssrInterpolate(report.test_type)}</td><td class="text-left px-2 py-2 border-l border-b">${ssrInterpolate(report.turn_around_time)}</td><td class="text-left px-2 py-2 border-l border-r border-b">${ssrInterpolate(report.average)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
      if (unref(statistics).length == 0 && !unref(loading)) {
        _push(`<div class="w-full flex flex-col items-center justify-center space-y-2 py-10"><img${ssrRenderAttr("src", _imports_1)} alt="page-icon" class="object-cover w-20 h-20"><p>Data not found, please generate report</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(loading) ? null : { display: "none" })}" class="mx-auto justify-center flex flex-col items-center space-y-3 py-10">`);
      _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
      _push(`<p>Generating report, please wait<span class="animate-ping">...</span></p></div></div><div class="px-5 py-5 flex flex-col items-center"><h3 class="text-lg font-medium">Average Turn Around Time</h3><p class="mt-1">From: ${ssrInterpolate(unref(dateFrom) != "" ? unref(moment)(unref(dateFrom)).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")} -:- To: ${ssrInterpolate(unref(dateTo) != "" ? unref(moment)(unref(dateTo)).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)) : "")}</p></div>`);
      if (unref(statistics).length > 0) {
        _push(`<div style="${ssrRenderStyle({ "height": "400px" })}">`);
        _push(ssrRenderComponent(_component_ChartsBar, { "chart-data": unref(chartData) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/turn-around-time.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=turn-around-time-84a702cd.mjs.map
