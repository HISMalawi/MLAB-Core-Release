import { _ as _sfc_main$3 } from './Breadcrumb-fc731a79.mjs';
import { _ as __nuxt_component_1 } from './SearchBar-a0fe3266.mjs';
import { _ as __nuxt_component_2 } from './Datatable-d607d390.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0 } from '../server.mjs';
import { d as dateFormat, e as errorMessage } from './constants-9b77e6ea.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, resolveComponent, createTextVNode, unref, toDisplayString, Fragment, renderList } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import moment from 'moment';
import { r as render$1 } from './XMarkIcon-170c776f.mjs';
import { a as render$1$1, r as render$2 } from './PencilSquareIcon-77446728.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './ambulance-65a5ca21.mjs';
import { _ as __nuxt_component_1$1 } from './OutlinedButton-945a5cd0.mjs';
import { S as StockModule$1 } from './stock-ebdfb047.mjs';
import { a as render$4 } from './fetch-63157596.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import { P as Package } from './package-331ddced.mjs';
import { r as render } from './DocumentCheckIcon-e2548817.mjs';
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

const _sfc_main$2 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$1
  },
  data() {
    return {
      moment,
      viewIcon: render$1$1,
      show: false,
      editIcon: render$2
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: () => {
      $options.handleClick();
    },
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
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> View Stock Issue `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Stock Issue ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="space-y-3 px-5 py-5"${_scopeId4}><div class="rounded border"${_scopeId4}><div class="bg-gray-50 border-b px-2 py-2 font-semibold rounded-t text-lg"${_scopeId4}> Details </div><div class="w-full px-2 py-2 flex items-center space-x-2"${_scopeId4}><label class="font-medium"${_scopeId4}>Destination:</label><p${_scopeId4}>${ssrInterpolate($props.data.movement_to)}</p></div><div class="w-full px-2 py-2 flex items-center space-x-2"${_scopeId4}><label class="font-medium"${_scopeId4}>Movement Date:</label><p${_scopeId4}>${ssrInterpolate($props.data.movement_date)}</p></div></div><table class="w-full"${_scopeId4}><thead${_scopeId4}><tr class="border bg-gray-50"${_scopeId4}><th class="px-2 py-2 text-left border-r"${_scopeId4}>Stock Item</th><th class="px-2 py-2 text-left border-r"${_scopeId4}>Quantity Issued</th><th class="px-2 py-2 text-left border-r"${_scopeId4}>Batch</th><th class="px-2 py-2 text-left border-r"${_scopeId4}>Lot</th><th class="px-2 py-2 text-left border-r"${_scopeId4}>Expiry Date</th><th class="px-2 py-2 text-left border-r"${_scopeId4}>Transaction Date</th></tr></thead><tbody${_scopeId4}><!--[-->`);
                          ssrRenderList($props.data.stock_transactions, (transaction, index) => {
                            _push5(`<tr class="border"${_scopeId4}><td class="px-2 py-2 text-left border-r"${_scopeId4}>${ssrInterpolate(transaction.name)}</td><td class="px-2 py-2 text-left border-r"${_scopeId4}>${ssrInterpolate(transaction.transacted_quantity)}</td><td class="px-2 py-2 text-left border-r"${_scopeId4}>${ssrInterpolate(transaction.batch)}</td><td class="px-2 py-2 text-left border-r"${_scopeId4}>${ssrInterpolate(transaction.lot)}</td><td class="px-2 py-2 text-left border-r"${_scopeId4}>${ssrInterpolate($data.moment(transaction.expiry_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</td><td class="px-2 py-2 text-left border-r"${_scopeId4}>${ssrInterpolate($data.moment(transaction.transaction_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</td></tr>`);
                          });
                          _push5(`<!--]--></tbody></table></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Stock Issue ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "rounded border" }, [
                                createVNode("div", { class: "bg-gray-50 border-b px-2 py-2 font-semibold rounded-t text-lg" }, " Details "),
                                createVNode("div", { class: "w-full px-2 py-2 flex items-center space-x-2" }, [
                                  createVNode("label", { class: "font-medium" }, "Destination:"),
                                  createVNode("p", null, toDisplayString($props.data.movement_to), 1)
                                ]),
                                createVNode("div", { class: "w-full px-2 py-2 flex items-center space-x-2" }, [
                                  createVNode("label", { class: "font-medium" }, "Movement Date:"),
                                  createVNode("p", null, toDisplayString($props.data.movement_date), 1)
                                ])
                              ]),
                              createVNode("table", { class: "w-full" }, [
                                createVNode("thead", null, [
                                  createVNode("tr", { class: "border bg-gray-50" }, [
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Stock Item"),
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Quantity Issued"),
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Batch"),
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Lot"),
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Expiry Date"),
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Transaction Date")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($props.data.stock_transactions, (transaction, index) => {
                                    return openBlock(), createBlock("tr", { class: "border" }, [
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.name), 1),
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.transacted_quantity), 1),
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.batch), 1),
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.lot), 1),
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString($data.moment(transaction.expiry_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1),
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString($data.moment(transaction.transaction_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                    ]);
                                  }), 256))
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" View Stock Issue ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "rounded border" }, [
                              createVNode("div", { class: "bg-gray-50 border-b px-2 py-2 font-semibold rounded-t text-lg" }, " Details "),
                              createVNode("div", { class: "w-full px-2 py-2 flex items-center space-x-2" }, [
                                createVNode("label", { class: "font-medium" }, "Destination:"),
                                createVNode("p", null, toDisplayString($props.data.movement_to), 1)
                              ]),
                              createVNode("div", { class: "w-full px-2 py-2 flex items-center space-x-2" }, [
                                createVNode("label", { class: "font-medium" }, "Movement Date:"),
                                createVNode("p", null, toDisplayString($props.data.movement_date), 1)
                              ])
                            ]),
                            createVNode("table", { class: "w-full" }, [
                              createVNode("thead", null, [
                                createVNode("tr", { class: "border bg-gray-50" }, [
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Stock Item"),
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Quantity Issued"),
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Batch"),
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Lot"),
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Expiry Date"),
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Transaction Date")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList($props.data.stock_transactions, (transaction, index) => {
                                  return openBlock(), createBlock("tr", { class: "border" }, [
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.name), 1),
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.transacted_quantity), 1),
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.batch), 1),
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.lot), 1),
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString($data.moment(transaction.expiry_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1),
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString($data.moment(transaction.transaction_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                  ]);
                                }), 256))
                              ])
                            ])
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
                        createVNode(_component_DialogPanel, { class: "w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Stock Issue ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "rounded border" }, [
                                createVNode("div", { class: "bg-gray-50 border-b px-2 py-2 font-semibold rounded-t text-lg" }, " Details "),
                                createVNode("div", { class: "w-full px-2 py-2 flex items-center space-x-2" }, [
                                  createVNode("label", { class: "font-medium" }, "Destination:"),
                                  createVNode("p", null, toDisplayString($props.data.movement_to), 1)
                                ]),
                                createVNode("div", { class: "w-full px-2 py-2 flex items-center space-x-2" }, [
                                  createVNode("label", { class: "font-medium" }, "Movement Date:"),
                                  createVNode("p", null, toDisplayString($props.data.movement_date), 1)
                                ])
                              ]),
                              createVNode("table", { class: "w-full" }, [
                                createVNode("thead", null, [
                                  createVNode("tr", { class: "border bg-gray-50" }, [
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Stock Item"),
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Quantity Issued"),
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Batch"),
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Lot"),
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Expiry Date"),
                                    createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Transaction Date")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($props.data.stock_transactions, (transaction, index) => {
                                    return openBlock(), createBlock("tr", { class: "border" }, [
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.name), 1),
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.transacted_quantity), 1),
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.batch), 1),
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.lot), 1),
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString($data.moment(transaction.expiry_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1),
                                      createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString($data.moment(transaction.transaction_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                    ]);
                                  }), 256))
                                ])
                              ])
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" View Stock Issue ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "rounded border" }, [
                              createVNode("div", { class: "bg-gray-50 border-b px-2 py-2 font-semibold rounded-t text-lg" }, " Details "),
                              createVNode("div", { class: "w-full px-2 py-2 flex items-center space-x-2" }, [
                                createVNode("label", { class: "font-medium" }, "Destination:"),
                                createVNode("p", null, toDisplayString($props.data.movement_to), 1)
                              ]),
                              createVNode("div", { class: "w-full px-2 py-2 flex items-center space-x-2" }, [
                                createVNode("label", { class: "font-medium" }, "Movement Date:"),
                                createVNode("p", null, toDisplayString($props.data.movement_date), 1)
                              ])
                            ]),
                            createVNode("table", { class: "w-full" }, [
                              createVNode("thead", null, [
                                createVNode("tr", { class: "border bg-gray-50" }, [
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Stock Item"),
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Quantity Issued"),
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Batch"),
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Lot"),
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Expiry Date"),
                                  createVNode("th", { class: "px-2 py-2 text-left border-r" }, "Transaction Date")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList($props.data.stock_transactions, (transaction, index) => {
                                  return openBlock(), createBlock("tr", { class: "border" }, [
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.name), 1),
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.transacted_quantity), 1),
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.batch), 1),
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString(transaction.lot), 1),
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString($data.moment(transaction.expiry_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1),
                                    createVNode("td", { class: "px-2 py-2 text-left border-r" }, toDisplayString($data.moment(transaction.transaction_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                  ]);
                                }), 256))
                              ])
                            ])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/issue/view-dialog/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$1,
    ExclamationTriangleIcon: render$4
  },
  data() {
    return {
      show: false,
      rejectIcon: render$1,
      loading: false,
      reason: "",
      cookie: useCookie("token")
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    /**
     * @method voidStockCategory deletes test type
     * @param id test type id
     * @return promise @typeof void
     */
    async voidStockCategory(id) {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.rejectStockIssues(`${this.cookie}`, this.data.id, this.reason);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`Stock issue rejected successfully!`);
        this.loading = false;
        this.reason = "";
        this.$emit("update", true);
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    },
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
  const _component_ExclamationTriangleIcon = resolveComponent("ExclamationTriangleIcon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreOutlinedButton = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.handleClick,
    color: "error",
    text: "Reject",
    icon: $data.rejectIcon
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
                                _push6(ssrRenderComponent(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }, null, _parent6, _scopeId5));
                                _push6(` Reject Stock Issue `);
                              } else {
                                return [
                                  createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Reject Stock Issue ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div>`);
                          _push5(ssrRenderComponent(_component_FormKit, {
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: ($event) => $options.voidStockCategory($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="rounded px-2 py-2"${_scopeId5}> Do you really want to reject stock issue to <span class="font-semibold text-red-500"${_scopeId5}>${ssrInterpolate($props.data.movement_to)}</span>? Note that once this action is completed, it can not be undone </div>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Reason",
                                  validation: "required",
                                  modelValue: $data.reason,
                                  "onUpdate:modelValue": ($event) => $data.reason = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  click: () => {
                                    $options.handleClick();
                                  },
                                  type: "button",
                                  text: "Cancel"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.rejectIcon,
                                  text: "Reject"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "rounded px-2 py-2" }, [
                                      createTextVNode(" Do you really want to reject stock issue to "),
                                      createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.movement_to), 1),
                                      createTextVNode("? Note that once this action is completed, it can not be undone ")
                                    ]),
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Reason",
                                      validation: "required",
                                      modelValue: $data.reason,
                                      "onUpdate:modelValue": ($event) => $data.reason = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      click: () => {
                                        $options.handleClick();
                                      },
                                      type: "button",
                                      text: "Cancel"
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "error",
                                      icon: $data.rejectIcon,
                                      text: "Reject"
                                    }, null, 8, ["loading", "icon"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Reject Stock Issue ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              "submit-label": "Update",
                              onSubmit: ($event) => $options.voidStockCategory($props.data.id),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Do you really want to reject stock issue to "),
                                    createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.movement_to), 1),
                                    createTextVNode("? Note that once this action is completed, it can not be undone ")
                                  ]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Reason",
                                    validation: "required",
                                    modelValue: $data.reason,
                                    "onUpdate:modelValue": ($event) => $data.reason = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    click: () => {
                                      $options.handleClick();
                                    },
                                    type: "button",
                                    text: "Cancel"
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "error",
                                    icon: $data.rejectIcon,
                                    text: "Reject"
                                  }, null, 8, ["loading", "icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
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
                                createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                createTextVNode(" Reject Stock Issue ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: ($event) => $options.voidStockCategory($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Do you really want to reject stock issue to "),
                                  createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.movement_to), 1),
                                  createTextVNode("? Note that once this action is completed, it can not be undone ")
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "textarea",
                                  label: "Reason",
                                  validation: "required",
                                  modelValue: $data.reason,
                                  "onUpdate:modelValue": ($event) => $data.reason = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  click: () => {
                                    $options.handleClick();
                                  },
                                  type: "button",
                                  text: "Cancel"
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.rejectIcon,
                                  text: "Reject"
                                }, null, 8, ["loading", "icon"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
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
                                  createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Reject Stock Issue ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              "submit-label": "Update",
                              onSubmit: ($event) => $options.voidStockCategory($props.data.id),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Do you really want to reject stock issue to "),
                                    createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.movement_to), 1),
                                    createTextVNode("? Note that once this action is completed, it can not be undone ")
                                  ]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Reason",
                                    validation: "required",
                                    modelValue: $data.reason,
                                    "onUpdate:modelValue": ($event) => $data.reason = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    click: () => {
                                      $options.handleClick();
                                    },
                                    type: "button",
                                    text: "Cancel"
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "error",
                                    icon: $data.rejectIcon,
                                    text: "Reject"
                                  }, null, 8, ["loading", "icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
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
                                createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                createTextVNode(" Reject Stock Issue ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: ($event) => $options.voidStockCategory($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Do you really want to reject stock issue to "),
                                  createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.movement_to), 1),
                                  createTextVNode("? Note that once this action is completed, it can not be undone ")
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "textarea",
                                  label: "Reason",
                                  validation: "required",
                                  modelValue: $data.reason,
                                  "onUpdate:modelValue": ($event) => $data.reason = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  click: () => {
                                    $options.handleClick();
                                  },
                                  type: "button",
                                  text: "Cancel"
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.rejectIcon,
                                  text: "Reject"
                                }, null, 8, ["loading", "icon"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/issue/reject-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Issues Stock`
    });
  },
  data() {
    return {
      header: "Stock Issue",
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
      headers: [
        { text: "destination", value: "movement_to", sortable: true },
        { text: "status", value: "stock_status" },
        { text: "transaction items", value: "stock_transactions.length" },
        { text: "movement date", value: "movement_date" },
        { text: "actions", value: "actions" }
      ],
      data: new Array(),
      cookie: useCookie("token"),
      loading: false,
      addIcon: render,
      rejectIcon: render$1,
      serverItemsLength: 0,
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      }
    };
  },
  created() {
    this.init(this.search);
  },
  computed: {
    filteredData() {
      return this.data.map((item) => ({
        ...item,
        movement_date: moment(item.movement_date).format(dateFormat)
      }));
    }
  },
  methods: {
    async init(search) {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { page, rowsPerPage } = this.serverOptions;
      const params = `search=${search}&page=${page}&per_page=${rowsPerPage}`;
      const { data, error, pending } = await stockModule.getStockIssues(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        console.log(data.value);
        this.loading = false;
        this.data = data.value.data;
        this.serverItemsLength = data.value.meta.total_count;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    async approveStockIssue(issueId) {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.approveStockIssues(`${this.cookie}`, issueId);
      this.loading = pending;
      if (data.value) {
        console.log(data.value);
        this.loading = false;
        useNuxtApp().$toast.success("Stock issue approved successfully");
        this.init(this.search);
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$3;
  const _component_CoreSearchBar = __nuxt_component_1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_StockIssueViewDialog = __nuxt_component_3;
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_StockIssueRejectDialog = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3></div><div class="flex items-center justify-end py-5">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    "onUpdate:search": ($event) => $data.search = $event,
    onUpdate: $options.init
  }, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    loading: $data.loading,
    headers: $data.headers,
    data: $options.filteredData,
    "search-field": "movement_to",
    searchValue: $data.search,
    serverItemsLength: $data.serverItemsLength,
    serverOptions: $data.serverOptions,
    onUpdate: $options.init
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_StockIssueViewDialog, { data: item }, null, _parent2, _scopeId));
        if (item.stock_status.toLowerCase() == "pending") {
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            click: () => $options.approveStockIssue(item.id),
            text: "Approve",
            color: "success",
            icon: $data.addIcon
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if (item.stock_status.toLowerCase() == "pending") {
          _push2(ssrRenderComponent(_component_StockIssueRejectDialog, {
            data: item,
            onUpdate: $options.init
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_StockIssueViewDialog, { data: item }, null, 8, ["data"]),
            item.stock_status.toLowerCase() == "pending" ? (openBlock(), createBlock(_component_CoreActionButton, {
              key: 0,
              click: () => $options.approveStockIssue(item.id),
              text: "Approve",
              color: "success",
              icon: $data.addIcon
            }, null, 8, ["click", "icon"])) : createCommentVNode("", true),
            item.stock_status.toLowerCase() == "pending" ? (openBlock(), createBlock(_component_StockIssueRejectDialog, {
              key: 1,
              data: item,
              onUpdate: $options.init
            }, null, 8, ["data", "onUpdate"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/issue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const issue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { issue as default };
//# sourceMappingURL=issue-054ca812.mjs.map
