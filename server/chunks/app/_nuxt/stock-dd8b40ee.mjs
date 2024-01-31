import { _ as _sfc_main$2 } from './Breadcrumb-fc731a79.mjs';
import { _ as __nuxt_component_1 } from './SearchBar-a0fe3266.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { _ as _export_sfc, u as useCookie, b as __nuxt_component_0 } from '../server.mjs';
import { d as dateFormat } from './constants-353d90a1.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode, unref, toDisplayString } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import moment from 'moment';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { r as render$4 } from './XMarkIcon-170c776f.mjs';
import { a as render$1, r as render$3 } from './PencilSquareIcon-77446728.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import { S as StockModule$1 } from './stock-1955d729.mjs';
import { P as Package } from './package-96462e18.mjs';
import { r as render } from './fetch-bdf4b52b.mjs';
import { r as render$2 } from './TrashIcon-b1416ff8.mjs';
import './nuxt-link-42c558b2.mjs';
import './HomeIcon-299b993b.mjs';
import './Loader-86943425.mjs';
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
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main$1 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$4
  },
  data() {
    return {
      viewIcon: render$1,
      show: false,
      editIcon: render$3,
      moment
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.handleClick,
    color: "primary",
    text: "View",
    icon: $data.viewIcon
  }, null, _parent));
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: $data.show,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          class: "relative z-10"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="fixed inset-0 bg-black bg-opacity-25"${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` View Stock `);
                              } else {
                                return [
                                  createTextVNode(" View Stock ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="mt-2 space-y-3 px-5"${_scopeId4}><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Name</label><p${_scopeId4}>${ssrInterpolate($props.data.stock_item.name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Description</label><p${_scopeId4}>${ssrInterpolate($props.data.stock_item.description)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Location</label><p${_scopeId4}>${ssrInterpolate($props.data.stock_location.name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Quantity</label><p${_scopeId4}>${ssrInterpolate($props.data.quantity)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Date modified</label><p${_scopeId4}>${ssrInterpolate($data.moment($props.data.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            click: () => {
                              _ctx.$router.push("/stock-management/stock-items");
                            },
                            icon: $data.editIcon,
                            text: "Edit",
                            color: "success"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View Stock ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", null, toDisplayString($props.data.stock_item.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                                createVNode("p", null, toDisplayString($props.data.stock_item.description), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Location"),
                                createVNode("p", null, toDisplayString($props.data.stock_location.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Quantity"),
                                createVNode("p", null, toDisplayString($props.data.quantity), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Date modified"),
                                createVNode("p", null, toDisplayString($data.moment($props.data.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                              ])
                            ]),
                            createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                              createVNode(_component_CoreActionButton, {
                                click: () => {
                                  _ctx.$router.push("/stock-management/stock-items");
                                },
                                icon: $data.editIcon,
                                text: "Edit",
                                color: "success"
                              }, null, 8, ["click", "icon"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View Stock ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                              createVNode("p", null, toDisplayString($props.data.stock_item.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                              createVNode("p", null, toDisplayString($props.data.stock_item.description), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Location"),
                              createVNode("p", null, toDisplayString($props.data.stock_location.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Quantity"),
                              createVNode("p", null, toDisplayString($props.data.quantity), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Date modified"),
                              createVNode("p", null, toDisplayString($data.moment($props.data.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                            createVNode(_component_CoreActionButton, {
                              click: () => {
                                _ctx.$router.push("/stock-management/stock-items");
                              },
                              icon: $data.editIcon,
                              text: "Edit",
                              color: "success"
                            }, null, 8, ["click", "icon"])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode(_component_TransitionChild, {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0",
                  "enter-to": "opacity-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100",
                  "leave-to": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                  createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                    createVNode(_component_TransitionChild, {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View Stock ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", null, toDisplayString($props.data.stock_item.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                                createVNode("p", null, toDisplayString($props.data.stock_item.description), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Location"),
                                createVNode("p", null, toDisplayString($props.data.stock_location.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Quantity"),
                                createVNode("p", null, toDisplayString($props.data.quantity), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Date modified"),
                                createVNode("p", null, toDisplayString($data.moment($props.data.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                              ])
                            ]),
                            createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                              createVNode(_component_CoreActionButton, {
                                click: () => {
                                  _ctx.$router.push("/stock-management/stock-items");
                                },
                                icon: $data.editIcon,
                                text: "Edit",
                                color: "success"
                              }, null, 8, ["click", "icon"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Dialog, {
            as: "div",
            class: "relative z-10"
          }, {
            default: withCtx(() => [
              createVNode(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                ]),
                _: 1
              }),
              createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                  createVNode(_component_TransitionChild, {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View Stock ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                              createVNode("p", null, toDisplayString($props.data.stock_item.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                              createVNode("p", null, toDisplayString($props.data.stock_item.description), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Location"),
                              createVNode("p", null, toDisplayString($props.data.stock_location.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Quantity"),
                              createVNode("p", null, toDisplayString($props.data.quantity), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Date modified"),
                              createVNode("p", null, toDisplayString($data.moment($props.data.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                            createVNode(_component_CoreActionButton, {
                              click: () => {
                                _ctx.$router.push("/stock-management/stock-items");
                              },
                              icon: $data.editIcon,
                              text: "Edit",
                              color: "success"
                            }, null, 8, ["click", "icon"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/view-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Stock`
    });
  },
  data() {
    return {
      header: "Stock",
      addIcon: render,
      viewIcon: render$1,
      deleteIcon: render$2,
      editIcon: render$3,
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Stock Management",
          link: "#"
        }
      ],
      search: "",
      cookie: useCookie("token"),
      headers: [
        { text: "name", value: "stock_item.name", sortable: true },
        { text: "description", value: "stock_item.description" },
        { text: "quantity", value: "quantity" },
        { text: "date modified", value: "updated_date" },
        { text: "actions", value: "actions" }
      ],
      loading: false,
      serverItemsLength: 0,
      stocks: new Array(),
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      }
    };
  },
  created() {
    this.init();
  },
  computed: {
    filteredStocks() {
      return this.stocks.map((stock2) => ({
        ...stock2,
        updated_date: moment(stock2.updated_date).format(dateFormat)
      }));
    }
  },
  methods: {
    async init() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { page, rowsPerPage } = this.serverOptions;
      let params = `?page=${page}&per_page=${rowsPerPage}&search=${this.search}`;
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
  },
  watch: {
    search() {
      this.init();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$2;
  const _component_CoreSearchBar = __nuxt_component_1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_StockViewDialog = __nuxt_component_3;
  const _component_CoreActionButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3></div><div class="flex items-center justify-end py-5">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    "onUpdate:search": ($event) => $data.search = $event
  }, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $options.filteredStocks,
    loading: $data.loading,
    "search-field": "name",
    "search-value": $data.search,
    serverItemsLength: $data.serverItemsLength,
    serverOptions: $data.serverOptions,
    onUpdate: $options.init
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_StockViewDialog, { data: item }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          click: () => {
            _ctx.$router.push("/stock-management/stock-items");
          },
          text: "Edit",
          color: "success",
          icon: $data.editIcon
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          click: () => {
            _ctx.$router.push("/stock-management/stock-items");
          },
          text: "Delete",
          color: "error",
          icon: $data.deleteIcon
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_StockViewDialog, { data: item }, null, 8, ["data"]),
            createVNode(_component_CoreActionButton, {
              click: () => {
                _ctx.$router.push("/stock-management/stock-items");
              },
              text: "Edit",
              color: "success",
              icon: $data.editIcon
            }, null, 8, ["click", "icon"]),
            createVNode(_component_CoreActionButton, {
              click: () => {
                _ctx.$router.push("/stock-management/stock-items");
              },
              text: "Delete",
              color: "error",
              icon: $data.deleteIcon
            }, null, 8, ["click", "icon"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/stock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { stock as default };
//# sourceMappingURL=stock-dd8b40ee.mjs.map
