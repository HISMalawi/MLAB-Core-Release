import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { e as defineStore, _ as _export_sfc, u as useCookie, b as __nuxt_component_0$1 } from '../server.mjs';
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import { Pie, Line } from 'vue-chartjs';
import { useSSRContext, defineComponent, ref, mergeProps, reactive, openBlock, createElementBlock, createElementVNode, resolveComponent, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, toDisplayString, Transition, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useAuthStore, e as endpoints, f as fetchRequest } from './fetch-63157596.mjs';
import { Menu, MenuItem, MenuItems, MenuButton } from '@headlessui/vue';
import moment from 'moment';
import { r as render$7 } from './EllipsisVerticalIcon-df211b72.mjs';
import { r as render$8 } from './DocumentTextIcon-d89971e2.mjs';
import { r as render$9 } from './CheckBadgeIcon-bee4a252.mjs';
import { _ as _imports_0$1 } from './clinical_fe-af97c61e.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-42c558b2.mjs';
import { _ as _imports_0$2 } from './microscope-83b268d0.mjs';
import { _ as _imports_0$1$1, a as _imports_0$8 } from './admissions-4fc8a759.mjs';
import { r as render$a } from './DocumentTextIcon-da10eaa5.mjs';
import { d as dateFormat } from './constants-9b77e6ea.mjs';
import { _ as _imports_0$3 } from './virus-6fbc84ef.mjs';
import { _ as _imports_0$4 } from './medicines-3b3d41b7.mjs';
import { _ as _imports_0$5 } from './bacteria-43241e03.mjs';
import { _ as _imports_0$6 } from './cone_test_on_nets-bc5ffd69.mjs';
import { _ as _imports_0$7 } from './blood_drop-69df3a8f.mjs';
import { S as StockModule$1 } from './stock-ebdfb047.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import { P as Package } from './package-dd64359e.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
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
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z",
      "clip-rule": "evenodd"
    }),
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z",
      "clip-rule": "evenodd"
    }),
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
Chart.register(ArcElement, Tooltip, Legend);
const _sfc_main$a = {
  components: {
    Pie
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
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Pie = resolveComponent("Pie");
  _push(ssrRenderComponent(_component_Pie, mergeProps({
    data: $data.data,
    options: $data.options
  }, _attrs), null, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/pie/index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  components: {
    EllipsisVerticalIcon: render$7,
    Menu,
    MenuItem,
    MenuItems,
    MenuButton,
    ChartPieIcon: render$6,
    DocumentTextIcon: render$8
  },
  data() {
    return {
      authStore: useAuthStore(),
      cookie: useCookie("token"),
      testsData: { tests_count: { data: 0 }, statuses_count: { "not-received": 0, "pending": 0, "started": 0, "completed": 0, "verified": 0, "voided": 0, "not-done": 0, "test-rejected": 0, "specimen-not-collected": 0, "specimen-accepted": 0, "specimen-rejected": 0 } },
      loading: true,
      viewChart: false,
      showFilters: false,
      startDate: "",
      endDate: "",
      applyIcon: render$9
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.loading = true;
      let { department } = useAuthStore();
      const startDate = this.startDate == "" ? "" : moment(this.startDate).format("YYYY-MM-DD");
      const endDate = this.endDate == "" ? "" : moment(this.endDate).format("YYYY-MM-DD");
      const request = {
        route: `${endpoints.tests}/count?department=${department}&from=${startDate}&to=${endDate}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.testsData = data.value;
        this.loading = false;
        this.viewChart = false;
        this.showFilters = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    viewTests() {
      this.$router.push("/tests");
    },
    getStatusColor(status) {
      if (status == "completed") {
        return "green";
      } else if (status == "pending") {
        return "orange";
      } else {
        return "sky";
      }
    },
    proccessedAnalyticsData(data) {
      let chartData = {};
      chartData = {
        labels: ["Not Received", "Pending", "Started", "Completed", "Verified"],
        datasets: [
          {
            backgroundColor: ["#d97706", "#dc2626", "#06b6d4", "#22c55e", "#15803d"],
            data: [data.statuses_count["not-received"], data.statuses_count["pending"], data.statuses_count["started"], data.statuses_count["completed"], data.statuses_count["verified"]]
          }
        ]
      };
      return chartData;
    }
  },
  watch: {
    authStore: {
      handler(newValue, oldValue) {
        this.init();
      },
      deep: true
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Menu = resolveComponent("Menu");
  const _component_MenuButton = resolveComponent("MenuButton");
  const _component_EllipsisVerticalIcon = resolveComponent("EllipsisVerticalIcon");
  const _component_MenuItems = resolveComponent("MenuItems");
  const _component_MenuItem = resolveComponent("MenuItem");
  const _component_DocumentTextIcon = resolveComponent("DocumentTextIcon");
  const _component_ChartPieIcon = resolveComponent("ChartPieIcon");
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_ChartsPie = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded col-span-1" }, _attrs))}><div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}"><div class="flex rounded-t items-center justify-between bg-gray-50 px-2 py-2 border-b"><h3 class="text-xl font-semibold">Tests</h3>`);
  _push(ssrRenderComponent(_component_Menu, {
    as: "div",
    class: "relative inline-block text-left justify-center items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MenuButton, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_EllipsisVerticalIcon, { class: "w-6 h-6" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_EllipsisVerticalIcon, { class: "w-6 h-6" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(``);
        _push2(ssrRenderComponent(_component_MenuItems, { class: "absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="px-1 py-1"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_MenuItem, null, {
                default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<button class="${ssrRenderClass([
                      active ? "bg-sky-500 text-white" : "text-gray-900",
                      "group flex w-full items-center rounded px-2 py-2 font-normal"
                    ])}"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }, null, _parent4, _scopeId3));
                    _push4(` Filter By Date </button>`);
                  } else {
                    return [
                      createVNode("button", {
                        onClick: ($event) => {
                          $data.showFilters = !$data.showFilters;
                          $data.viewChart = false;
                        },
                        class: [
                          active ? "bg-sky-500 text-white" : "text-gray-900",
                          "group flex w-full items-center rounded px-2 py-2 font-normal"
                        ]
                      }, [
                        createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                        createTextVNode(" Filter By Date ")
                      ], 10, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_MenuItem, null, {
                default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<button class="${ssrRenderClass([
                      active ? "bg-sky-500 text-white" : "text-gray-900",
                      "group flex w-full items-center rounded px-2 py-2 font-normal"
                    ])}"${_scopeId3}>`);
                    if ($data.viewChart) {
                      _push4(ssrRenderComponent(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }, null, _parent4, _scopeId3));
                    } else {
                      _push4(`<!---->`);
                    }
                    if (!$data.viewChart) {
                      _push4(ssrRenderComponent(_component_ChartPieIcon, { class: "w-5 h-5 mr-2" }, null, _parent4, _scopeId3));
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(` ${ssrInterpolate($data.viewChart ? "View summary" : "View as Pie Chart")}</button>`);
                  } else {
                    return [
                      createVNode("button", {
                        onClick: ($event) => $data.viewChart = !$data.viewChart,
                        class: [
                          active ? "bg-sky-500 text-white" : "text-gray-900",
                          "group flex w-full items-center rounded px-2 py-2 font-normal"
                        ]
                      }, [
                        $data.viewChart ? (openBlock(), createBlock(_component_DocumentTextIcon, {
                          key: 0,
                          class: "w-5 h-5 mr-2"
                        })) : createCommentVNode("", true),
                        !$data.viewChart ? (openBlock(), createBlock(_component_ChartPieIcon, {
                          key: 1,
                          class: "w-5 h-5 mr-2"
                        })) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString($data.viewChart ? "View summary" : "View as Pie Chart"), 1)
                      ], 10, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "px-1 py-1" }, [
                  createVNode(_component_MenuItem, null, {
                    default: withCtx(({ active }) => [
                      createVNode("button", {
                        onClick: ($event) => {
                          $data.showFilters = !$data.showFilters;
                          $data.viewChart = false;
                        },
                        class: [
                          active ? "bg-sky-500 text-white" : "text-gray-900",
                          "group flex w-full items-center rounded px-2 py-2 font-normal"
                        ]
                      }, [
                        createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                        createTextVNode(" Filter By Date ")
                      ], 10, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MenuItem, null, {
                    default: withCtx(({ active }) => [
                      createVNode("button", {
                        onClick: ($event) => $data.viewChart = !$data.viewChart,
                        class: [
                          active ? "bg-sky-500 text-white" : "text-gray-900",
                          "group flex w-full items-center rounded px-2 py-2 font-normal"
                        ]
                      }, [
                        $data.viewChart ? (openBlock(), createBlock(_component_DocumentTextIcon, {
                          key: 0,
                          class: "w-5 h-5 mr-2"
                        })) : createCommentVNode("", true),
                        !$data.viewChart ? (openBlock(), createBlock(_component_ChartPieIcon, {
                          key: 1,
                          class: "w-5 h-5 mr-2"
                        })) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString($data.viewChart ? "View summary" : "View as Pie Chart"), 1)
                      ], 10, ["onClick"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MenuButton, null, {
            default: withCtx(() => [
              createVNode(_component_EllipsisVerticalIcon, { class: "w-6 h-6" })
            ]),
            _: 1
          }),
          createVNode(Transition, {
            "enter-active-class": "transition duration-100 ease-out",
            "enter-from-class": "transform scale-95 opacity-0",
            "enter-to-class": "transform scale-100 opacity-100",
            "leave-active-class": "transition duration-75 ease-in",
            "leave-from-class": "transform scale-100 opacity-100",
            "leave-to-class": "transform scale-95 opacity-0"
          }, {
            default: withCtx(() => [
              createVNode(_component_MenuItems, { class: "absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-1 py-1" }, [
                    createVNode(_component_MenuItem, null, {
                      default: withCtx(({ active }) => [
                        createVNode("button", {
                          onClick: ($event) => {
                            $data.showFilters = !$data.showFilters;
                            $data.viewChart = false;
                          },
                          class: [
                            active ? "bg-sky-500 text-white" : "text-gray-900",
                            "group flex w-full items-center rounded px-2 py-2 font-normal"
                          ]
                        }, [
                          createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                          createTextVNode(" Filter By Date ")
                        ], 10, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MenuItem, null, {
                      default: withCtx(({ active }) => [
                        createVNode("button", {
                          onClick: ($event) => $data.viewChart = !$data.viewChart,
                          class: [
                            active ? "bg-sky-500 text-white" : "text-gray-900",
                            "group flex w-full items-center rounded px-2 py-2 font-normal"
                          ]
                        }, [
                          $data.viewChart ? (openBlock(), createBlock(_component_DocumentTextIcon, {
                            key: 0,
                            class: "w-5 h-5 mr-2"
                          })) : createCommentVNode("", true),
                          !$data.viewChart ? (openBlock(), createBlock(_component_ChartPieIcon, {
                            key: 1,
                            class: "w-5 h-5 mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString($data.viewChart ? "View summary" : "View as Pie Chart"), 1)
                        ], 10, ["onClick"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if ($data.showFilters) {
    _push(`<div><div class="flex items-center space-x-4 px-3 py-3"><div class="w-44">`);
    _push(ssrRenderComponent(_component_datepicker, {
      position: "left",
      placeholder: "-- start date --",
      format: "dd/MM/yyyy",
      "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
      range: false,
      shortcuts: false,
      modelValue: $data.startDate,
      "onUpdate:modelValue": ($event) => $data.startDate = $event
    }, null, _parent));
    _push(`</div><div class="w-44">`);
    _push(ssrRenderComponent(_component_datepicker, {
      position: "left",
      placeholder: "-- start date --",
      format: "dd/MM/yyyy",
      "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
      range: false,
      shortcuts: false,
      modelValue: $data.endDate,
      "onUpdate:modelValue": ($event) => $data.endDate = $event
    }, null, _parent));
    _push(`</div>`);
    _push(ssrRenderComponent(_component_CoreActionButton, {
      text: "Apply",
      color: "success",
      type: "button",
      icon: $data.applyIcon,
      click: () => {
        $options.init();
      }
    }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle(!$data.viewChart && !$data.showFilters ? null : { display: "none" })}"><div class="flex items-center space-x-2 px-5 py-2"><img${ssrRenderAttr("src", _imports_0$1)}><h3 class="text-3xl font-semibold">${ssrInterpolate($data.testsData.tests_count.data.toLocaleString())}</h3></div><div class="w-full px-5 py-2 space-y-2"><div class="flex items-center justify-between"><h3 class="font-medium">Pending</h3><p>${ssrInterpolate($data.testsData.statuses_count["pending"])}</p></div><div class="flex items-center justify-between"><h3 class="font-medium">Verified</h3><p>${ssrInterpolate($data.testsData.statuses_count["verified"])}</p></div><div class="flex items-center justify-between"><h3 class="font-medium">Rejected</h3><p>${ssrInterpolate($data.testsData.statuses_count["test-rejected"])}</p></div></div></div></div>`);
  if ($data.testsData.tests_count.data !== 0 && $data.viewChart) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_ChartsPie, {
      chartData: $options.proccessedAnalyticsData($data.testsData)
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}"><div class="flex items-center justify-between px-2 py-2"><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div><div class="rounded-full h-8 w-8 bg-gray-100 animate-pulse"></div></div><div class="flex items-center space-x-3 px-2 pb-2"><div class="h-14 w-14 bg-gray-100 rounded animate-pulse"></div><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div></div><div class="px-2 py-2 space-y-2"><div class="flex items-center justify-between"><div class="w-32 bg-gray-100 animate-pulse rounded h-6"></div><div class="w-16 bg-gray-100 animate-pulse rounded h-6"></div></div><div class="flex items-center justify-between"><div class="w-32 bg-gray-100 animate-pulse rounded h-6"></div><div class="w-16 bg-gray-100 animate-pulse rounded h-6"></div></div><div class="flex items-center justify-between"><div class="w-32 bg-gray-100 animate-pulse rounded h-6"></div><div class="w-16 bg-gray-100 animate-pulse rounded h-6"></div></div></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/tests.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", { d: "M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" }),
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", { d: "M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" })
  ]);
}
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", { d: "M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" })
  ]);
}
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", { d: "M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" })
  ]);
}
const _sfc_main$8 = {
  components: {
    EllipsisVerticalIcon: render$1
  },
  data() {
    return {
      cookie: useCookie("token"),
      loading: false,
      analyticsData: {}
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const request = {
        route: `${endpoints.analytics}/lab_config`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.analyticsData = data.value.data;
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    }
  }
};
const _imports_2 = "" + buildAssetsURL("ambulatory_clinic.16bfb86e.svg");
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded" }, _attrs))}>`);
  if (!$data.loading) {
    _push(`<div><div class="flex items-center justify-between rounded-t bg-gray-50 px-2 py-2 border-b text-xl font-semibold"><h3>Lab Configuration</h3></div><div class="px-3 py-3 space-y-4"><div class="flex items-center space-x-5"><div class="px-2 py-2 bg-gray-100 rounded"><img${ssrRenderAttr("src", _imports_0$2)} class="w-8 h-8"></div><p class="text-3xl font-bold">${ssrInterpolate((_a = $data.analyticsData) == null ? void 0 : _a.instruments)}<span class="text-sm font-medium hover:text-sky-500 hover:underline ml-2">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/lab-configuration/instruments" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`instruments`);
        } else {
          return [
            createTextVNode("instruments")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</span></p></div><div class="flex items-center space-x-5"><div class="px-2 py-2 bg-gray-100 rounded"><img${ssrRenderAttr("src", _imports_0$1$1)} class="w-8 h-8"></div><p class="text-3xl font-bold">${ssrInterpolate((_b = $data.analyticsData) == null ? void 0 : _b.facilities)}<span class="text-sm font-medium hover:text-sky-500 hover:underline ml-2">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/lab-configuration/facilities" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`facilities`);
        } else {
          return [
            createTextVNode("facilities")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</span></p></div><div class="flex items-center space-x-5"><div class="px-2 py-2 bg-gray-100 rounded"><img${ssrRenderAttr("src", _imports_2)} class="w-8 h-8"></div><p class="text-3xl font-bold">${ssrInterpolate((_c = $data.analyticsData) == null ? void 0 : _c.wards)}<span class="text-sm font-medium hover:text-sky-500 hover:underline ml-2">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/lab-configuration/facility-wards" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`wards`);
        } else {
          return [
            createTextVNode("wards")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</span></p></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}"><div class="flex items-center justify-between px-2 py-2"><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div><div class="rounded-full h-8 w-8 bg-gray-100 animate-pulse"></div></div><!--[-->`);
  ssrRenderList(3, (i) => {
    _push(`<div><div class="flex items-center space-x-3 px-2 pb-2"><div class="h-14 w-14 bg-gray-100 rounded animate-pulse"></div><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/lab-configuration.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  components: {
    EllipsisVerticalIcon: render$1,
    Menu,
    MenuItem,
    MenuItems,
    MenuButton,
    UserGroupIcon: render,
    DocumentTextIcon: render$a
  },
  data() {
    return {
      cookie: useCookie("token"),
      loading: false,
      analyticsData: { clients: 0, by_sex: { M: 0, F: 0 } }
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.loading = true;
      const request = {
        route: `${endpoints.analytics}/clients`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.analyticsData = data.value.data;
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    getPercentage(count, total) {
      return total == 0 ? 0 : Math.round(count / total * 100);
    }
  }
};
const _imports_0 = "" + buildAssetsURL("group.3c310866.svg");
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const _component_Menu = resolveComponent("Menu");
  const _component_MenuButton = resolveComponent("MenuButton");
  const _component_EllipsisVerticalIcon = resolveComponent("EllipsisVerticalIcon");
  const _component_MenuItems = resolveComponent("MenuItems");
  const _component_MenuItem = resolveComponent("MenuItem");
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_UserGroupIcon = resolveComponent("UserGroupIcon");
  const _component_DocumentTextIcon = resolveComponent("DocumentTextIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded" }, _attrs))}><div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}"><div class="flex items-center justify-between rounded-t bg-gray-50 px-2 py-2 border-b text-xl font-semibold"><h3>Patients</h3>`);
  _push(ssrRenderComponent(_component_Menu, {
    as: "div",
    class: "relative inline-block text-left justify-center items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MenuButton, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_EllipsisVerticalIcon, { class: "w-5 h-5" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_EllipsisVerticalIcon, { class: "w-5 h-5" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(``);
        _push2(ssrRenderComponent(_component_MenuItems, { class: "absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="py-1 border-y"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_MenuItem, null, {
                default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, { to: "/patients" }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<button class="${ssrRenderClass([
                            active ? "bg-sky-500 text-white" : "text-gray-900",
                            "group flex w-full items-center px-2 py-2 font-normal"
                          ])}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_UserGroupIcon, { class: "w-5 h-5 mr-2" }, null, _parent5, _scopeId4));
                          _push5(` View Patients </button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: [
                                active ? "bg-sky-500 text-white" : "text-gray-900",
                                "group flex w-full items-center px-2 py-2 font-normal"
                              ]
                            }, [
                              createVNode(_component_UserGroupIcon, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" View Patients ")
                            ], 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, { to: "/patients" }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            class: [
                              active ? "bg-sky-500 text-white" : "text-gray-900",
                              "group flex w-full items-center px-2 py-2 font-normal"
                            ]
                          }, [
                            createVNode(_component_UserGroupIcon, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" View Patients ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_MenuItem, null, {
                default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, { to: "/reports/daily/patient-report" }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<button class="${ssrRenderClass([
                            active ? "bg-sky-500 text-white" : "text-gray-900",
                            "group flex w-full items-center px-2 py-2 font-normal"
                          ])}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }, null, _parent5, _scopeId4));
                          _push5(` Generate Reports </button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: [
                                active ? "bg-sky-500 text-white" : "text-gray-900",
                                "group flex w-full items-center px-2 py-2 font-normal"
                              ]
                            }, [
                              createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" Generate Reports ")
                            ], 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, { to: "/reports/daily/patient-report" }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            class: [
                              active ? "bg-sky-500 text-white" : "text-gray-900",
                              "group flex w-full items-center px-2 py-2 font-normal"
                            ]
                          }, [
                            createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" Generate Reports ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "py-1 border-y" }, [
                  createVNode(_component_MenuItem, null, {
                    default: withCtx(({ active }) => [
                      createVNode(_component_NuxtLink, { to: "/patients" }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            class: [
                              active ? "bg-sky-500 text-white" : "text-gray-900",
                              "group flex w-full items-center px-2 py-2 font-normal"
                            ]
                          }, [
                            createVNode(_component_UserGroupIcon, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" View Patients ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MenuItem, null, {
                    default: withCtx(({ active }) => [
                      createVNode(_component_NuxtLink, { to: "/reports/daily/patient-report" }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            class: [
                              active ? "bg-sky-500 text-white" : "text-gray-900",
                              "group flex w-full items-center px-2 py-2 font-normal"
                            ]
                          }, [
                            createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" Generate Reports ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MenuButton, null, {
            default: withCtx(() => [
              createVNode(_component_EllipsisVerticalIcon, { class: "w-5 h-5" })
            ]),
            _: 1
          }),
          createVNode(Transition, {
            "enter-active-class": "transition duration-100 ease-out",
            "enter-from-class": "transform scale-95 opacity-0",
            "enter-to-class": "transform scale-100 opacity-100",
            "leave-active-class": "transition duration-75 ease-in",
            "leave-from-class": "transform scale-100 opacity-100",
            "leave-to-class": "transform scale-95 opacity-0"
          }, {
            default: withCtx(() => [
              createVNode(_component_MenuItems, { class: "absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "py-1 border-y" }, [
                    createVNode(_component_MenuItem, null, {
                      default: withCtx(({ active }) => [
                        createVNode(_component_NuxtLink, { to: "/patients" }, {
                          default: withCtx(() => [
                            createVNode("button", {
                              class: [
                                active ? "bg-sky-500 text-white" : "text-gray-900",
                                "group flex w-full items-center px-2 py-2 font-normal"
                              ]
                            }, [
                              createVNode(_component_UserGroupIcon, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" View Patients ")
                            ], 2)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MenuItem, null, {
                      default: withCtx(({ active }) => [
                        createVNode(_component_NuxtLink, { to: "/reports/daily/patient-report" }, {
                          default: withCtx(() => [
                            createVNode("button", {
                              class: [
                                active ? "bg-sky-500 text-white" : "text-gray-900",
                                "group flex w-full items-center px-2 py-2 font-normal"
                              ]
                            }, [
                              createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" Generate Reports ")
                            ], 2)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class=""><div class="flex items-center space-x-2 px-2 py-2"><img${ssrRenderAttr("src", _imports_0)}><h3 class="text-2xl font-semibold">${ssrInterpolate((_a = $data.analyticsData) == null ? void 0 : _a.clients.toLocaleString())}</h3></div><div class="px-5"><h3 class="mb-2 font-medium">By Gender</h3><div class="w-full flex items-center"><div style="${ssrRenderStyle({ width: $options.getPercentage((_b = $data.analyticsData) == null ? void 0 : _b.by_sex.M, (_c = $data.analyticsData) == null ? void 0 : _c.clients) + "%" })}" class="h-4 bg-sky-500 rounded-tl-full rounded-bl-full"></div><div style="${ssrRenderStyle({ width: $options.getPercentage((_d = $data.analyticsData) == null ? void 0 : _d.by_sex.F, (_e = $data.analyticsData) == null ? void 0 : _e.clients) + "%" })}" class="h-4 bg-green-500 rounded-br-full rounded-tr-full"></div></div><div class="mt-2"><div class="flex items-center space-x-2"><div class="w-3 h-3 bg-sky-500 rounded-full"></div><p>${ssrInterpolate($options.getPercentage((_f = $data.analyticsData) == null ? void 0 : _f.by_sex.M, (_g = $data.analyticsData) == null ? void 0 : _g.clients))}% Males</p></div><div class="flex items-center space-x-2"><div class="w-3 h-3 bg-green-500 rounded-full"></div><p>${ssrInterpolate($options.getPercentage((_h = $data.analyticsData) == null ? void 0 : _h.by_sex.F, (_i = $data.analyticsData) == null ? void 0 : _i.clients))}% Females</p></div></div></div></div></div><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}"><div class="flex items-center justify-between px-2 py-2"><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div><div class="rounded-full h-8 w-8 bg-gray-100 animate-pulse"></div></div><div class="flex items-center space-x-3 px-2 pb-4"><div class="h-14 w-14 bg-gray-100 rounded animate-pulse"></div><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div></div><!--[-->`);
  ssrRenderList(3, (i) => {
    _push(`<div><div class="flex items-center space-x-3 px-2 pb-2"><div class="h-5 w-5 bg-gray-100 rounded-full animate-pulse"></div><div class="h-8 w-8 bg-gray-100 rounded animate-pulse"></div><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/patients.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  name: "Badge",
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String
    }
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [`bg-${_ctx.color}-500 border-2 border-${_ctx.color}-400`, "text-white rounded px-2 py-1 text-sm text-center capitalize"]
  }, _attrs))}>${ssrInterpolate(_ctx.text)}</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Badge.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  components: {
    EllipsisVerticalIcon: render$1,
    Badge
  },
  data() {
    return {
      authStore: useAuthStore(),
      cookie: useCookie("token"),
      tests: new Array(),
      loading: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.loading = true;
      const department_id = this.authStore.user.departments.filter((department) => department.name == this.authStore.department)[0].id;
      const request = {
        route: `${endpoints.tests}?minimal=true&page=1&per_page=9&status=&search=&department_id=${department_id}&start_date=&end_date=`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.tests = data.value.data;
        this.loading = false;
      }
      if (error.value) {
        console.log(error.value);
        this.loading = false;
      }
    },
    viewTests() {
      this.$router.push("/tests");
    },
    getStatusColor(status) {
      if (status == "completed") {
        return "green";
      } else if (status == "pending") {
        return "orange";
      } else {
        return "sky";
      }
    }
  },
  watch: {
    authStore: {
      handler(newValue, oldValue) {
        this.init();
      },
      deep: true
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1 rounded border relative" }, _attrs))}>`);
  if (!$data.loading) {
    _push(`<div><div class="flex items-center justify-between bg-gray-50 border-b px-2 py-2 rounded-t"><h3 class="text-lg font-semibold">Recent tests</h3></div><div class=""><table class="w-full"><tbody><!--[-->`);
    ssrRenderList($data.tests, (test, index) => {
      _push(`<tr class="${ssrRenderClass([index % 2 !== 0 ? "bg-gray-50" : "", "border-b border-dotted"])}"><td class="px-2 py-2 capitalize flex items-center"><div class="${ssrRenderClass([`bg-${$options.getStatusColor(test.status.toLowerCase())}-500`, "w-3 h-3 rounded-full mr-2"])}"></div> ${ssrInterpolate(`${test.client.first_name}
                                                                    ${test.client.middle_name} ${test.client.last_name}`)}</td><td class="px-2 py-2">${ssrInterpolate(test.test_type_name)}</td><td class="px-2 py-2 capitalize">${ssrInterpolate(test.status)}</td></tr>`);
    });
    _push(`<!--]--></tbody></table>`);
    _push(ssrRenderComponent(_component_CoreActionButton, {
      click: () => $options.viewTests(),
      text: "View tests \u2192",
      color: "primary",
      icon: {},
      class: "m-2 absolute bottom-0"
    }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.loading) {
    _push(`<div><div class="w-full flex items-center justify-between rounded-t px-2 py-2"><div class="h-8 w-48 bg-gray-100 animate-pulse rounded"></div><div class="rounded-full h-7 w-7 bg-gray-100 animate-pulse"></div></div><div class="mt-2 space-y-2 px-2"><!--[-->`);
    ssrRenderList(10, (i) => {
      _push(`<div class="flex items-center space-x-2"><div class="h-5 w-5 rounded-full bg-gray-100 animate-pulse"></div><div class="w-full bg-gray-100 h-8 animate-pulse rounded"></div></div>`);
    });
    _push(`<!--]--></div><div class="w-32 bg-gray-100 rounded-t h-8 animate-pulse m-2"></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/recent-tests.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const usePatientStore = defineStore("patient", () => {
  const activePatient = reactive({});
  const setActivePatient = (patient) => Object.assign(activePatient, patient);
  return {
    activePatient,
    setActivePatient
  };
});
const _sfc_main$4 = {
  components: {
    EllipsisVerticalIcon: render$1,
    ChartBarIcon: render$2,
    Badge,
    Menu,
    MenuItem,
    MenuItems,
    MenuButton,
    DocumentTextIcon: render$a,
    CalendarDaysIcon: render$4,
    CalendarIcon: render$3
  },
  data() {
    return {
      moment,
      cookie: useCookie("token"),
      clients: new Array(),
      loading: true
    };
  },
  created() {
    this.getClients();
  },
  methods: {
    async getClients() {
      const request = {
        route: `${endpoints.clients}?page=1&per_page=9&status=&search=&start_date=&end_date=`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.clients = data.value.clients;
        this.loading = false;
      }
      if (error.value) {
        console.log(error.value);
        this.loading = false;
      }
    },
    /***
    * @method newOrder navigate to new test
    * @param null
    * @returns void
    */
    async newOrder(patient) {
      usePatientStore().setActivePatient(patient);
      this.$router.push(`/tests/new-test?patient_id=${patient.client_id}`);
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Menu = resolveComponent("Menu");
  const _component_MenuButton = resolveComponent("MenuButton");
  const _component_EllipsisVerticalIcon = resolveComponent("EllipsisVerticalIcon");
  const _component_MenuItems = resolveComponent("MenuItems");
  const _component_MenuItem = resolveComponent("MenuItem");
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_DocumentTextIcon = resolveComponent("DocumentTextIcon");
  const _component_CoreActionButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1 rounded border relative" }, _attrs))}>`);
  if (!$data.loading) {
    _push(`<div><div class="flex items-center justify-between bg-gray-50 border-b px-2 py-2 rounded-t"><h3 class="text-lg font-semibold">Recent patients</h3><div>`);
    _push(ssrRenderComponent(_component_Menu, {
      as: "div",
      class: "relative inline-block text-left justify-center items-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_MenuButton, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_EllipsisVerticalIcon, { class: "w-5 h-5" }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_EllipsisVerticalIcon, { class: "w-5 h-5" })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(``);
          _push2(ssrRenderComponent(_component_MenuItems, { class: "absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="py-1 border-y"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_MenuItem, null, {
                  default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_NuxtLink, { to: "/reports/daily/patient-report" }, {
                        default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<button class="${ssrRenderClass([
                              active ? "bg-sky-500 text-white" : "text-gray-900",
                              "group flex w-full items-center px-2 py-2 font-normal"
                            ])}"${_scopeId4}>`);
                            _push5(ssrRenderComponent(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }, null, _parent5, _scopeId4));
                            _push5(` ${ssrInterpolate("Generate Reports")}</button>`);
                          } else {
                            return [
                              createVNode("button", {
                                class: [
                                  active ? "bg-sky-500 text-white" : "text-gray-900",
                                  "group flex w-full items-center px-2 py-2 font-normal"
                                ]
                              }, [
                                createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                                createTextVNode(" " + toDisplayString("Generate Reports"))
                              ], 2)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, { to: "/reports/daily/patient-report" }, {
                          default: withCtx(() => [
                            createVNode("button", {
                              class: [
                                active ? "bg-sky-500 text-white" : "text-gray-900",
                                "group flex w-full items-center px-2 py-2 font-normal"
                              ]
                            }, [
                              createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" " + toDisplayString("Generate Reports"))
                            ], 2)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "py-1 border-y" }, [
                    createVNode(_component_MenuItem, null, {
                      default: withCtx(({ active }) => [
                        createVNode(_component_NuxtLink, { to: "/reports/daily/patient-report" }, {
                          default: withCtx(() => [
                            createVNode("button", {
                              class: [
                                active ? "bg-sky-500 text-white" : "text-gray-900",
                                "group flex w-full items-center px-2 py-2 font-normal"
                              ]
                            }, [
                              createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" " + toDisplayString("Generate Reports"))
                            ], 2)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_MenuButton, null, {
              default: withCtx(() => [
                createVNode(_component_EllipsisVerticalIcon, { class: "w-5 h-5" })
              ]),
              _: 1
            }),
            createVNode(Transition, {
              "enter-active-class": "transition duration-100 ease-out",
              "enter-from-class": "transform scale-95 opacity-0",
              "enter-to-class": "transform scale-100 opacity-100",
              "leave-active-class": "transition duration-75 ease-in",
              "leave-from-class": "transform scale-100 opacity-100",
              "leave-to-class": "transform scale-95 opacity-0"
            }, {
              default: withCtx(() => [
                createVNode(_component_MenuItems, { class: "absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "py-1 border-y" }, [
                      createVNode(_component_MenuItem, null, {
                        default: withCtx(({ active }) => [
                          createVNode(_component_NuxtLink, { to: "/reports/daily/patient-report" }, {
                            default: withCtx(() => [
                              createVNode("button", {
                                class: [
                                  active ? "bg-sky-500 text-white" : "text-gray-900",
                                  "group flex w-full items-center px-2 py-2 font-normal"
                                ]
                              }, [
                                createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                                createTextVNode(" " + toDisplayString("Generate Reports"))
                              ], 2)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div><div class=""><table class="w-full"><tbody><!--[-->`);
    ssrRenderList($data.clients, (client, index) => {
      _push(`<tr class="${ssrRenderClass([index % 2 !== 0 ? "bg-gray-50" : "", "border-b border-dotted"])}"><td class="px-2 py-2 capitalize flex items-center">${ssrInterpolate(`${client.first_name} ${client.middle_name} ${client.last_name}`)}</td><td class="px-2 py-2">${ssrInterpolate($data.moment(client.created_at).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</td><td class="px-2 py-2">`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        icon: {},
        text: "New order \u2192",
        color: "primary",
        click: () => {
          $options.newOrder(client);
        }
      }, null, _parent));
      _push(`</td></tr>`);
    });
    _push(`<!--]--></tbody></table></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.loading) {
    _push(`<div><div class="w-full flex items-center justify-between rounded-t px-2 py-2"><div class="h-8 w-48 bg-gray-100 animate-pulse rounded"></div><div class="rounded-full h-7 w-7 bg-gray-100 animate-pulse"></div></div><div class="mt-2 space-y-2 px-2"><!--[-->`);
    ssrRenderList(10, (i) => {
      _push(`<div class="flex items-center space-x-2"><div class="w-full bg-gray-100 h-8 animate-pulse rounded"></div></div>`);
    });
    _push(`<!--]--></div><div class="w-32 bg-gray-100 rounded-t h-8 animate-pulse m-2"></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/recent-patients.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  components: {
    EllipsisVerticalIcon: render$1
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1 border rounded" }, _attrs))}><div class="bg-gray-50 border-b rounded-t px-2 py-2 text-lg font-semibold"> Test Catalog </div><div class="px-2 py-2 grid grid-cols-3 gap-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/test-catalog/organisms" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"${_scopeId}><img${ssrRenderAttr("src", _imports_0$3)} class="w-10 h-10 mb-5s" alt="virus"${_scopeId}><h3 class="text-2xl font-semibold mt-2"${_scopeId}>31</h3><p${_scopeId}>Organisms</p></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black" }, [
            createVNode("img", {
              src: _imports_0$3,
              class: "w-10 h-10 mb-5s",
              alt: "virus"
            }),
            createVNode("h3", { class: "text-2xl font-semibold mt-2" }, "31"),
            createVNode("p", null, "Organisms")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/test-catalog/drugs" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"${_scopeId}><img${ssrRenderAttr("src", _imports_0$4)} class="w-10 h-10 mb-5s" alt="virus"${_scopeId}><h3 class="text-2xl font-semibold mt-2"${_scopeId}>9</h3><p${_scopeId}>Drugs</p></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black" }, [
            createVNode("img", {
              src: _imports_0$4,
              class: "w-10 h-10 mb-5s",
              alt: "virus"
            }),
            createVNode("h3", { class: "text-2xl font-semibold mt-2" }, "9"),
            createVNode("p", null, "Drugs")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/test-catalog/diseases" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"${_scopeId}><img${ssrRenderAttr("src", _imports_0$5)} class="w-10 h-10 mb-5s" alt="virus"${_scopeId}><h3 class="text-2xl font-semibold mt-2"${_scopeId}>31</h3><p${_scopeId}>Diseases</p></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black" }, [
            createVNode("img", {
              src: _imports_0$5,
              class: "w-10 h-10 mb-5s",
              alt: "virus"
            }),
            createVNode("h3", { class: "text-2xl font-semibold mt-2" }, "31"),
            createVNode("p", null, "Diseases")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/test-catalog/test-panels" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"${_scopeId}><img${ssrRenderAttr("src", _imports_0$3)} class="w-10 h-10 mb-5s" alt="virus"${_scopeId}><h3 class="text-2xl font-semibold mt-2"${_scopeId}>31</h3><p${_scopeId}>Test Panels</p></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black" }, [
            createVNode("img", {
              src: _imports_0$3,
              class: "w-10 h-10 mb-5s",
              alt: "virus"
            }),
            createVNode("h3", { class: "text-2xl font-semibold mt-2" }, "31"),
            createVNode("p", null, "Test Panels")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/test-catalog/test-types" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"${_scopeId}><img${ssrRenderAttr("src", _imports_0$6)} class="w-10 h-10 mb-5s" alt="cone_test_on_nets"${_scopeId}><h3 class="text-2xl font-semibold mt-2"${_scopeId}>102</h3><p${_scopeId}>Test Types</p></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black" }, [
            createVNode("img", {
              src: _imports_0$6,
              class: "w-10 h-10 mb-5s",
              alt: "cone_test_on_nets"
            }),
            createVNode("h3", { class: "text-2xl font-semibold mt-2" }, "102"),
            createVNode("p", null, "Test Types")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/test-catalog/specimen-types" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"${_scopeId}><img${ssrRenderAttr("src", _imports_0$7)} class="w-10 h-10 mb-5s" alt="blood-drop-svg"${_scopeId}><h3 class="text-2xl font-semibold mt-2"${_scopeId}>4</h3><p${_scopeId}>Specimen Types</p></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black" }, [
            createVNode("img", {
              src: _imports_0$7,
              class: "w-10 h-10 mb-5s",
              alt: "blood-drop-svg"
            }),
            createVNode("h3", { class: "text-2xl font-semibold mt-2" }, "4"),
            createVNode("p", null, "Specimen Types")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/test-catalog/lab-sections" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"${_scopeId}><img${ssrRenderAttr("src", _imports_0$8)} class="w-10 h-10 mb-5s" alt="admissions-svg"${_scopeId}><h3 class="text-2xl font-semibold mt-2"${_scopeId}>4</h3><p${_scopeId}>Laboratory Sections</p></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black" }, [
            createVNode("img", {
              src: _imports_0$8,
              class: "w-10 h-10 mb-5s",
              alt: "admissions-svg"
            }),
            createVNode("h3", { class: "text-2xl font-semibold mt-2" }, "4"),
            createVNode("p", null, "Laboratory Sections")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/test-catalog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const _sfc_main$2 = {
  components: {
    Line
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Line = resolveComponent("Line");
  _push(ssrRenderComponent(_component_Line, mergeProps({
    data: $data.data,
    options: $data.options
  }, _attrs), null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/line/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { Menu, MenuButton, EllipsisVerticalIcon: render$7, MenuItems, MenuItem, DocumentTextIcon: render$8, ClipboardDocumentListIcon: render$5 },
  data() {
    return {
      loading: false,
      serverItemsLength: 0,
      stocks: new Array(),
      cookie: useCookie("token"),
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      }
    };
  },
  computed: {
    chartData() {
      let data = {
        labels: new Array(),
        datasets: [
          {
            label: "Stock level",
            backgroundColor: "#4ade80",
            data: new Array(),
            cubicInterpolationMode: "monotone"
          },
          {
            label: "Minimum order level",
            backgroundColor: "#ef4444",
            data: new Array(),
            cubicInterpolationMode: "monotone"
          }
        ]
      };
      this.stocks.map((stock) => {
        data.labels.push(stock.stock_item.name);
        data.datasets[0].data.push(stock.quantity);
        data.datasets[1].data.push(stock.minimum_order_level);
      });
      return data;
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { page, rowsPerPage } = this.serverOptions;
      let params = `?page=${page}&per_page=${rowsPerPage}&search=`;
      const { data, error, pending } = await stockModule.getStock(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        this.stocks = data.value.data;
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Menu = resolveComponent("Menu");
  const _component_MenuButton = resolveComponent("MenuButton");
  const _component_EllipsisVerticalIcon = resolveComponent("EllipsisVerticalIcon");
  const _component_MenuItems = resolveComponent("MenuItems");
  const _component_MenuItem = resolveComponent("MenuItem");
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_ClipboardDocumentListIcon = resolveComponent("ClipboardDocumentListIcon");
  const _component_DocumentTextIcon = resolveComponent("DocumentTextIcon");
  const _component_ChartsLine = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded border" }, _attrs))} data-v-d7bdc46c><div class="bg-gray-50 px-2 py-2 border-b rounded-t flex items-center justify-between" data-v-d7bdc46c><h3 class="font-semibold text-lg" data-v-d7bdc46c>Current stock levels</h3><div data-v-d7bdc46c>`);
  _push(ssrRenderComponent(_component_Menu, {
    as: "div",
    class: "relative inline-block text-left justify-center items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MenuButton, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_EllipsisVerticalIcon, { class: "w-5 h-5" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_EllipsisVerticalIcon, { class: "w-5 h-5" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(``);
        _push2(ssrRenderComponent(_component_MenuItems, { class: "absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="py-1 border-y" data-v-d7bdc46c${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_MenuItem, null, {
                default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, { to: "/stock-management/stock" }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<button class="${ssrRenderClass([
                            active ? "bg-sky-500 text-white" : "text-gray-900",
                            "group flex w-full items-center px-2 py-2 font-normal"
                          ])}" data-v-d7bdc46c${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_ClipboardDocumentListIcon, { class: "w-5 h-5 mr-2" }, null, _parent5, _scopeId4));
                          _push5(` ${ssrInterpolate("View stock")}</button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: [
                                active ? "bg-sky-500 text-white" : "text-gray-900",
                                "group flex w-full items-center px-2 py-2 font-normal"
                              ]
                            }, [
                              createVNode(_component_ClipboardDocumentListIcon, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" " + toDisplayString("View stock"))
                            ], 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, { to: "/stock-management/stock" }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            class: [
                              active ? "bg-sky-500 text-white" : "text-gray-900",
                              "group flex w-full items-center px-2 py-2 font-normal"
                            ]
                          }, [
                            createVNode(_component_ClipboardDocumentListIcon, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" " + toDisplayString("View stock"))
                          ], 2)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_MenuItem, null, {
                default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, { to: "/stock-management/reports" }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<button class="${ssrRenderClass([
                            active ? "bg-sky-500 text-white" : "text-gray-900",
                            "group flex w-full items-center px-2 py-2 font-normal"
                          ])}" data-v-d7bdc46c${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }, null, _parent5, _scopeId4));
                          _push5(` ${ssrInterpolate("Generate Reports")}</button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: [
                                active ? "bg-sky-500 text-white" : "text-gray-900",
                                "group flex w-full items-center px-2 py-2 font-normal"
                              ]
                            }, [
                              createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" " + toDisplayString("Generate Reports"))
                            ], 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, { to: "/stock-management/reports" }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            class: [
                              active ? "bg-sky-500 text-white" : "text-gray-900",
                              "group flex w-full items-center px-2 py-2 font-normal"
                            ]
                          }, [
                            createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" " + toDisplayString("Generate Reports"))
                          ], 2)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "py-1 border-y" }, [
                  createVNode(_component_MenuItem, null, {
                    default: withCtx(({ active }) => [
                      createVNode(_component_NuxtLink, { to: "/stock-management/stock" }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            class: [
                              active ? "bg-sky-500 text-white" : "text-gray-900",
                              "group flex w-full items-center px-2 py-2 font-normal"
                            ]
                          }, [
                            createVNode(_component_ClipboardDocumentListIcon, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" " + toDisplayString("View stock"))
                          ], 2)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MenuItem, null, {
                    default: withCtx(({ active }) => [
                      createVNode(_component_NuxtLink, { to: "/stock-management/reports" }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            class: [
                              active ? "bg-sky-500 text-white" : "text-gray-900",
                              "group flex w-full items-center px-2 py-2 font-normal"
                            ]
                          }, [
                            createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                            createTextVNode(" " + toDisplayString("Generate Reports"))
                          ], 2)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MenuButton, null, {
            default: withCtx(() => [
              createVNode(_component_EllipsisVerticalIcon, { class: "w-5 h-5" })
            ]),
            _: 1
          }),
          createVNode(Transition, {
            "enter-active-class": "transition duration-100 ease-out",
            "enter-from-class": "transform scale-95 opacity-0",
            "enter-to-class": "transform scale-100 opacity-100",
            "leave-active-class": "transition duration-75 ease-in",
            "leave-from-class": "transform scale-100 opacity-100",
            "leave-to-class": "transform scale-95 opacity-0"
          }, {
            default: withCtx(() => [
              createVNode(_component_MenuItems, { class: "absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "py-1 border-y" }, [
                    createVNode(_component_MenuItem, null, {
                      default: withCtx(({ active }) => [
                        createVNode(_component_NuxtLink, { to: "/stock-management/stock" }, {
                          default: withCtx(() => [
                            createVNode("button", {
                              class: [
                                active ? "bg-sky-500 text-white" : "text-gray-900",
                                "group flex w-full items-center px-2 py-2 font-normal"
                              ]
                            }, [
                              createVNode(_component_ClipboardDocumentListIcon, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" " + toDisplayString("View stock"))
                            ], 2)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MenuItem, null, {
                      default: withCtx(({ active }) => [
                        createVNode(_component_NuxtLink, { to: "/stock-management/reports" }, {
                          default: withCtx(() => [
                            createVNode("button", {
                              class: [
                                active ? "bg-sky-500 text-white" : "text-gray-900",
                                "group flex w-full items-center px-2 py-2 font-normal"
                              ]
                            }, [
                              createVNode(_component_DocumentTextIcon, { class: "w-5 h-5 mr-2" }),
                              createTextVNode(" " + toDisplayString("Generate Reports"))
                            ], 2)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="chartStyle" data-v-d7bdc46c>`);
  _push(ssrRenderComponent(_component_ChartsLine, { chartData: $options.chartData }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/stocks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d7bdc46c"]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Home`
    });
    const authStore = useAuthStore();
    const accessRoles = ref([{ name: "superadmin" }, { name: "superuser" }]);
    return { authStore, accessRoles };
  },
  methods: {
    showRoute(accessRoles) {
      const userRoles = this.authStore.user.roles;
      return userRoles.some((userRole) => {
        return accessRoles.some((accessRole) => {
          return userRole.role_name.toLowerCase() === accessRole.name.toLowerCase();
        });
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeTests = __nuxt_component_0;
  const _component_HomeLabConfiguration = __nuxt_component_1$1;
  const _component_HomePatients = __nuxt_component_2;
  const _component_HomeRecentTests = __nuxt_component_3;
  const _component_HomeRecentPatients = __nuxt_component_4;
  const _component_HomeTestCatalog = __nuxt_component_5;
  const _component_HomeStocks = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}><div class="grid grid-cols-3 gap-4">`);
  _push(ssrRenderComponent(_component_HomeTests, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeLabConfiguration, null, null, _parent));
  _push(ssrRenderComponent(_component_HomePatients, null, null, _parent));
  _push(`</div><div class="grid grid-cols-2 gap-4 py-5">`);
  _push(ssrRenderComponent(_component_HomeRecentTests, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeRecentPatients, null, null, _parent));
  if ($options.showRoute($setup.accessRoles)) {
    _push(ssrRenderComponent(_component_HomeTestCatalog, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.showRoute($setup.accessRoles)) {
    _push(ssrRenderComponent(_component_HomeStocks, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { home as default };
//# sourceMappingURL=home-70104d38.mjs.map
