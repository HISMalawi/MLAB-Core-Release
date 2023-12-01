import { _ as __nuxt_component_0 } from './Breadcrumb-058f5536.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode } from 'vue';
import { e as errorMessage } from './constants-353d90a1.mjs';
import moment from 'moment';
import { ExportToExcel } from 'vue-doc-exporter';
import { e as endpoints, f as fetchRequest } from './fetch-a6c33994.mjs';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { r as render } from './DocumentTextIcon-d89971e2.mjs';
import { r as render$1 } from './ArrowPathIcon-6ff7b048.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import './nuxt-link-7a607302.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './HomeIcon-299b993b.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@headlessui/vue';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main$5 = {
  components: { ExportToExcel },
  data() {
    return {
      moment,
      exportIcon: render,
      refreshIcon: render$1,
      dateFrom: "",
      headers: [
        {
          name: "Growth"
        },
        {
          name: "No Growth"
        },
        {
          name: "Mixed Growth:  No Predominant Organism"
        },
        {
          name: "Growth Normal Flora: No Pathogens Isolated"
        },
        {
          name: "Growth: Contaminations"
        }
      ],
      cookie: useCookie("token"),
      reportData: {
        "Growth": 0,
        "No growth": 0,
        "Mixed growth; no predominant organism": 0,
        "Growth of normal flora; no pathogens isolated": 0,
        "Growth of contaminants": 0
      },
      facility: useFacilityStore(),
      loading: false
    };
  },
  methods: {
    async generateReport() {
      this.loading = true;
      let month = moment(this.dateFrom).format("M");
      let year = moment(this.dateFrom).format("yyyy");
      const request = {
        route: `${endpoints.aggregateReports}culture/general_counts?year=${year}&month=${month}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.reportData = data.value.data;
        this.loading = false;
        useNuxtApp().$toast.success("Report data generated successfully");
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
        useNuxtApp().$toast.error(errorMessage);
      }
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full flex items-center justify-between mb-10"><form class="flex items-center space-x-5"><div class="w-48">`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: "month & year",
    required: "",
    "input-class-name": "border border-gray-50 rounded py-1.5 block focus:outline-none transition duration-150",
    modelValue: $data.dateFrom,
    "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
    range: false,
    format: "M/yyyy",
    position: "left"
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
  _push(`</div></form><div>`);
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: `culture_sensitivity_general_counts`
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
  _push(`</div></div><div class="rounded border" id="print-container"><div class="bg-gray-50 rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2"><p class="font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase underline">Laboratory Report</p></div></div><div><p class="px-4 py-2.5">Data for period: <span class="font-semibold">${ssrInterpolate($data.dateFrom == "" ? "" : $data.moment($data.dateFrom).format("M/yyyy"))}</span></p></div><div class="p-4"><table class="w-full mt-3"><thead class="w-full border-b border-t border-l bg-gray-100 rounded-t"><tr class="w-full"><!--[-->`);
  ssrRenderList($data.headers, (header, index) => {
    _push(`<th class="px-2 py-2 border-r">${ssrInterpolate(header.name)}</th>`);
  });
  _push(`<!--]--></tr></thead><tbody><tr class="border"><td class="px-2 py-2 text-center border-r">${ssrInterpolate($data.reportData["Growth"])}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate($data.reportData["No growth"])}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate($data.reportData["Mixed growth; no predominant organism"])}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate($data.reportData["Growth of normal flora; no pathogens isolated"])}</td><td class="px-2 py-2 text-center">${ssrInterpolate($data.reportData["Growth of contaminants"])}</td></tr></tbody></table></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/culture-sensitivity/general-counts.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  data() {
    return {
      moment,
      exportIcon: render,
      refreshIcon: render$1,
      dateFrom: "",
      search: "",
      headers: [
        {
          name: "Ward Name"
        },
        {
          name: "Ward Type"
        },
        {
          name: "Period"
        },
        {
          name: "Total Count"
        }
      ],
      cookie: useCookie("token"),
      loading: false,
      reportData: new Array(),
      facility: useFacilityStore()
    };
  },
  methods: {
    async generateReport() {
      this.loading = true;
      let month = moment(this.dateFrom).format("M");
      let year = moment(this.dateFrom).format("yyyy");
      const request = {
        route: `${endpoints.aggregateReports}culture/wards_based_counts?year=${year}&month=${month}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.reportData = data.value.data;
        this.loading = false;
        console.log(data.value);
        useNuxtApp().$toast.success("Report data generated successfully");
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
        useNuxtApp().$toast.error(errorMessage);
      }
    }
  },
  components: { ExportToExcel }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full flex items-center justify-between mb-10"><form class="flex items-center space-x-5"><div class="w-48">`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: "month & year",
    required: "",
    "input-class-name": "border border-gray-50 rounded py-1.5 block focus:outline-none transition duration-150",
    modelValue: $data.dateFrom,
    "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
    range: false,
    format: "M/yyyy",
    position: "left"
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
  _push(`</div></form><div>`);
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: `culture_sensitivity_wards_counts`
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
  _push(`</div></div><div class="rounded border" id="print-container"><div class="bg-gray-50 rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2"><p class="font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase underline">Laboratory Report</p></div></div><div><p class="px-4 mt-2">Data for period: <span class="font-semibold">${ssrInterpolate($data.dateFrom == "" ? "" : $data.moment($data.dateFrom).format("M/yyyy"))}</span></p></div><div class="px-4 mb-4"><table class="w-full mt-3"><thead class="w-full border-b border-t border-l bg-gray-100 rounded-t"><tr class="w-full"><!--[-->`);
  ssrRenderList($data.headers, (header, index) => {
    _push(`<th class="px-2 py-2 border-r">${ssrInterpolate(header.name)}</th>`);
  });
  _push(`<!--]--></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.reportData, (report, index) => {
    _push(`<tr class="border-b border-l border-r"><td class="px-2 py-2 text-center border-r">${ssrInterpolate(report.ward)}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate(report.encounter)}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate($data.moment($data.dateFrom).format("MMMM-yyyy"))}</td><td class="px-2 py-2 text-center">${ssrInterpolate(report.count)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/culture-sensitivity/wards-counts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  data() {
    return {
      moment,
      exportIcon: render,
      refreshIcon: render$1,
      dateFrom: "",
      headers: [
        {
          name: "Organism Name"
        },
        {
          name: "Period"
        },
        {
          name: "Total Count"
        }
      ],
      cookie: useCookie("token"),
      reportData: new Array(),
      facility: useFacilityStore(),
      loading: false
    };
  },
  methods: {
    async generateReport() {
      this.loading = true;
      let month = moment(this.dateFrom).format("M");
      let year = moment(this.dateFrom).format("yyyy");
      const request = {
        route: `${endpoints.aggregateReports}culture/organisms_based_counts?year=${year}&month=${month}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.reportData = data.value.data;
        this.loading = false;
        useNuxtApp().$toast.success("Report data generated successfully");
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
        useNuxtApp().$toast.error(errorMessage);
      }
    }
  },
  components: { ExportToExcel }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full flex items-center justify-between mb-10"><form class="flex items-center space-x-5"><div class="w-48">`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: "month & year",
    required: "",
    "input-class-name": "border border-gray-50 rounded py-1.5 block focus:outline-none transition duration-150",
    modelValue: $data.dateFrom,
    "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
    range: false,
    format: "M/yyyy",
    position: "left"
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
  _push(`</div></form><div>`);
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: `culture_sensitivity_organisms_based_count`
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
  _push(`</div></div><div class="rounded border" id="print-container"><div class="bg-gray-50 rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2"><p class="font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase underline">Laboratory Report</p></div></div><div><p class="px-4 mt-2">Data for period: <span class="font-semibold">${ssrInterpolate($data.dateFrom == "" ? "" : $data.moment($data.dateFrom).format("M/yyyy"))}</span></p></div><table class="w-full mt-3"><thead class="w-full border-b border-t bg-gray-50 rounded-t"><tr class="w-full"><!--[-->`);
  ssrRenderList($data.headers, (header, index) => {
    _push(`<th class="px-2 py-2 border-r text-left">${ssrInterpolate(header.name)}</th>`);
  });
  _push(`<!--]--></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.reportData, (report, index) => {
    _push(`<tr class="border-b"><td class="px-2 py-2 text-left border-r">${ssrInterpolate(report.organism)}</td><td class="px-2 py-2 text-left border-r">${ssrInterpolate($data.moment($data.dateFrom).format("MMMM/yyyy"))}</td><td class="px-2 py-2 text-left">${ssrInterpolate(report.count)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/culture-sensitivity/organisms-counts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  data() {
    return {
      moment,
      exportIcon: render,
      refreshIcon: render$1,
      dateFrom: "",
      search: "",
      headers: [
        {
          name: "Ward Name"
        },
        {
          name: "Ward Type"
        },
        {
          name: "Period"
        },
        {
          name: "Organism Name"
        },
        {
          name: "Total Count"
        }
      ],
      cookie: useCookie("token"),
      reportData: new Array(),
      facility: useFacilityStore(),
      loading: false
    };
  },
  methods: {
    async generateReport() {
      this.loading = true;
      let month = moment(this.dateFrom).format("M");
      let year = moment(this.dateFrom).format("yyyy");
      const request = {
        route: `${endpoints.aggregateReports}culture/organisms_wards_counts?year=${year}&month=${month}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.reportData = data.value.data;
        this.loading = false;
        useNuxtApp().$toast.success("Report data generated successfully");
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
        useNuxtApp().$toast.error(errorMessage);
      }
    }
  },
  components: { ExportToExcel }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full flex items-center justify-between mb-10"><form class="flex items-center space-x-5"><div class="w-48">`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: "month & year",
    required: "",
    "input-class-name": "border border-gray-50 rounded py-1.5 block focus:outline-none transition duration-150",
    modelValue: $data.dateFrom,
    "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
    range: false,
    format: "M/yyyy",
    position: "left"
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
  _push(`</div></form><div>`);
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: `culture_sensitivity_organisms_in_wards_count`
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
  _push(`</div></div><div class="rounded border" id="print-container"><div class="bg-gray-50 rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2"><p class="font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase underline">Laboratory Report</p></div></div><div><p class="px-4 mt-2">Data for period: <span class="font-semibold">${ssrInterpolate($data.dateFrom == "" ? "" : $data.moment($data.dateFrom).format("M/yyyy"))}</span></p></div><div class="px-4 mb-4"><table class="w-full mt-3"><thead class="w-full border-b border-t border-l bg-gray-100 rounded-t"><tr class="w-full"><!--[-->`);
  ssrRenderList($data.headers, (header, index) => {
    _push(`<th class="px-2 py-2 border-r">${ssrInterpolate(header.name)}</th>`);
  });
  _push(`<!--]--></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.reportData, (report, index) => {
    _push(`<tr class="border-b border-l border-r"><td class="px-2 py-2 text-center border-r">${ssrInterpolate(report.ward.name)}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate(report.encounter)}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate($data.moment($data.dateFrom).format("MMMM-yyyy"))}</td><td class="px-2 py-2 text-center border-r">${ssrInterpolate(report.organisms.length > 0 ? report.organisms.join(",") : "-")}</td><td class="px-2 py-2 text-center">${ssrInterpolate(report.organisms.length)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/culture-sensitivity/organisms-wards-counts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    ExportToExcel
  },
  data() {
    return {
      moment,
      exportIcon: render,
      refreshIcon: render$1,
      dateFrom: "",
      headers: [
        {
          name: "Drug Name"
        },
        {
          name: "I"
        },
        {
          name: "R"
        },
        {
          name: "S"
        }
      ],
      cookie: useCookie("token"),
      reportData: new Array(),
      facility: useFacilityStore(),
      loading: false
    };
  },
  methods: {
    async generateReport() {
      this.loading = true;
      let month = moment(this.dateFrom).format("M");
      let year = moment(this.dateFrom).format("yyyy");
      const request = {
        route: `${endpoints.aggregateReports}culture/ast?year=${year}&month=${month}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.reportData = data.value.data;
        this.loading = false;
        useNuxtApp().$toast.success("Report data generated successfully");
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
        useNuxtApp().$toast.error(errorMessage);
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full flex items-center justify-between mb-10"><form class="flex items-center space-x-5"><div class="w-48">`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: "month & year",
    required: "",
    "input-class-name": "border border-gray-50 rounded py-1.5 block focus:outline-none transition duration-150",
    modelValue: $data.dateFrom,
    "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
    range: false,
    format: "M/yyyy",
    position: "left"
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
  _push(`</div></form><div>`);
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "print-container",
    filename: `culture_sensitivity_antibiotic_suspceptibility`
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
  _push(`</div></div><div class="rounded border" id="print-container"><div class="bg-gray-50 rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2"><p class="font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase underline">Laboratory Report</p></div></div><div><p class="px-4 mt-2">Data for period: <span class="font-semibold">${ssrInterpolate($data.dateFrom == "" ? "" : $data.moment($data.dateFrom).format("M/yyyy"))}</span></p></div><!--[-->`);
  ssrRenderList($data.reportData, (report, index) => {
    _push(`<table class="w-full mt-3"><thead class="w-full border-b border-t bg-gray-50 rounded-t"><tr><th${ssrRenderAttr("colspan", 4)} class="text-left px-2 py-2">${ssrInterpolate(report.name)}</th></tr><tr class="border-r border-t"><th class="border-r px-2 py-2 text-left"> Drug Name </th><th class="border-r px-2 py-2 text-center"> I </th><th class="border-r px-2 py-2 text-center"> R </th><th class="px-2 py-2 text-center"> S </th></tr></thead><tbody><!--[-->`);
    ssrRenderList(report.drugs, (drug) => {
      _push(`<tr class="border-b border-r border-l"><td class="border-r px-2 py-2 text-left">${ssrInterpolate(drug.drug_name)}</td><td class="border-r px-2 py-2 text-center">${ssrInterpolate(drug.interpretations.I)}</td><td class="border-r px-2 py-2 text-center">${ssrInterpolate(drug.interpretations.R)}</td><td class="px-2 py-2 text-center">${ssrInterpolate(drug.interpretations.S)}</td></tr>`);
    });
    _push(`<!--]--></tbody></table>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/culture-sensitivity/ast.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Culture & Sensitivity Report`
    });
  },
  data() {
    return {
      title: "Culture & Sensitivity Reports",
      tabs: [
        "General Counts",
        "Ward Based Counts",
        "Organisms Based Count",
        "Organisms in Wards Count",
        "Antibiotic Susceptibility Test (AST)"
      ],
      activeTab: 0,
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
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_CultureSensitivityGeneralCounts = __nuxt_component_1;
  const _component_CultureSensitivityWardsCounts = __nuxt_component_2;
  const _component_CultureSensitivityOrganismsCounts = __nuxt_component_3;
  const _component_CultureSensitivityOrganismsWardsCounts = __nuxt_component_4;
  const _component_CultureSensitivityAst = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.title)}</h3></div><div><div class="font-medium text-gray-500 border-b"><!--[-->`);
  ssrRenderList($data.tabs, (tab, index) => {
    _push(`<button class="${ssrRenderClass($data.activeTab == index ? "inline-block px-2 py-2 text-white bg-sky-500" : "inline-block px-2 py-2 border-transparent hover:text-sky-500 hover:border-sky-500 transition duration-150")}">${ssrInterpolate(tab)}</button>`);
  });
  _push(`<!--]--></div><div class="mt-4">`);
  if ($data.activeTab == 0) {
    _push(ssrRenderComponent(_component_CultureSensitivityGeneralCounts, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.activeTab == 1) {
    _push(ssrRenderComponent(_component_CultureSensitivityWardsCounts, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.activeTab == 2) {
    _push(ssrRenderComponent(_component_CultureSensitivityOrganismsCounts, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.activeTab == 3) {
    _push(ssrRenderComponent(_component_CultureSensitivityOrganismsWardsCounts, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.activeTab == 4) {
    _push(ssrRenderComponent(_component_CultureSensitivityAst, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/culture-sensitivity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cultureSensitivity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { cultureSensitivity as default };
//# sourceMappingURL=culture-sensitivity-6a03ef9c.mjs.map
