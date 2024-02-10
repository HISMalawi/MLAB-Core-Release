import { _ as _sfc_main$2 } from './Breadcrumb-fc731a79.mjs';
import { _ as _export_sfc, u as useCookie, b as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './SearchBar-a0fe3266.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { r as render } from './XMarkIcon-170c776f.mjs';
import { a as render$1, r as render$2 } from './PencilSquareIcon-77446728.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './ambulance-65a5ca21.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import { d as dateFormat } from './constants-9b77e6ea.mjs';
import { S as StockModule$1 } from './stock-ebdfb047.mjs';
import moment from 'moment';
import { P as Package } from './package-f9450e57.mjs';
<<<<<<<< HEAD:server/chunks/app/_nuxt/index-3814d1bf.mjs
import './nuxt-link-149f0ed2.mjs';
import 'ufo';
========
import './nuxt-link-42c558b2.mjs';
>>>>>>>> db8a3962de902d8d9f97ce555bb6c63b1094610b:server/chunks/app/_nuxt/index-c05a8f4f.mjs
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
import './Loader-86943425.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './fetch-63157596.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main$1 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render
  },
  data() {
    return {
      viewIcon: render$1,
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> View Stock Transaction `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Stock Transaction ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="py-5 space-y-3 px-5"${_scopeId4}><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Name</label><p${_scopeId4}>${ssrInterpolate($props.data.name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Description</label><p${_scopeId4}>${ssrInterpolate($props.data.description)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Location</label><p${_scopeId4}>${ssrInterpolate($props.data.stock_location)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Transaction Type</label><p${_scopeId4}>${ssrInterpolate($props.data.transaction_type)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Sender</label><p${_scopeId4}>${ssrInterpolate($props.data.sending_to)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Receiver</label><p${_scopeId4}>${ssrInterpolate($props.data.receiving_from)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Batch</label><p${_scopeId4}>${ssrInterpolate($props.data.batch)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Lot</label><p${_scopeId4}>${ssrInterpolate($props.data.lot)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Quantity</label><p${_scopeId4}>${ssrInterpolate($props.data.transacted_quantity)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Available Balance</label><p${_scopeId4}>${ssrInterpolate($props.data.consolidated_available_balance)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Remaining Balance After Transaction</label><p${_scopeId4}>${ssrInterpolate($props.data.after_transaction_remaining_balance)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Expirty Date</label><p${_scopeId4}>${ssrInterpolate($props.data.expiry_date)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Transaction Date</label><p${_scopeId4}>${ssrInterpolate($props.data.transaction_date)}</p></div></div>`);
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
                                  createTextVNode(" View Stock Transaction ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "py-5 space-y-3 px-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", null, toDisplayString($props.data.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                                createVNode("p", null, toDisplayString($props.data.description), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Location"),
                                createVNode("p", null, toDisplayString($props.data.stock_location), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Transaction Type"),
                                createVNode("p", null, toDisplayString($props.data.transaction_type), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Sender"),
                                createVNode("p", null, toDisplayString($props.data.sending_to), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Receiver"),
                                createVNode("p", null, toDisplayString($props.data.receiving_from), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Batch"),
                                createVNode("p", null, toDisplayString($props.data.batch), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Lot"),
                                createVNode("p", null, toDisplayString($props.data.lot), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Quantity"),
                                createVNode("p", null, toDisplayString($props.data.transacted_quantity), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Available Balance"),
                                createVNode("p", null, toDisplayString($props.data.consolidated_available_balance), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Remaining Balance After Transaction"),
                                createVNode("p", null, toDisplayString($props.data.after_transaction_remaining_balance), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Expirty Date"),
                                createVNode("p", null, toDisplayString($props.data.expiry_date), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Transaction Date"),
                                createVNode("p", null, toDisplayString($props.data.transaction_date), 1)
                              ])
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
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" View Stock Transaction ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "py-5 space-y-3 px-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                              createVNode("p", null, toDisplayString($props.data.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                              createVNode("p", null, toDisplayString($props.data.description), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Location"),
                              createVNode("p", null, toDisplayString($props.data.stock_location), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Transaction Type"),
                              createVNode("p", null, toDisplayString($props.data.transaction_type), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Sender"),
                              createVNode("p", null, toDisplayString($props.data.sending_to), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Receiver"),
                              createVNode("p", null, toDisplayString($props.data.receiving_from), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Batch"),
                              createVNode("p", null, toDisplayString($props.data.batch), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Lot"),
                              createVNode("p", null, toDisplayString($props.data.lot), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Quantity"),
                              createVNode("p", null, toDisplayString($props.data.transacted_quantity), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Available Balance"),
                              createVNode("p", null, toDisplayString($props.data.consolidated_available_balance), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Remaining Balance After Transaction"),
                              createVNode("p", null, toDisplayString($props.data.after_transaction_remaining_balance), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Expirty Date"),
                              createVNode("p", null, toDisplayString($props.data.expiry_date), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Transaction Date"),
                              createVNode("p", null, toDisplayString($props.data.transaction_date), 1)
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
                        createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
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
                                  createTextVNode(" View Stock Transaction ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "py-5 space-y-3 px-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", null, toDisplayString($props.data.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                                createVNode("p", null, toDisplayString($props.data.description), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Location"),
                                createVNode("p", null, toDisplayString($props.data.stock_location), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Transaction Type"),
                                createVNode("p", null, toDisplayString($props.data.transaction_type), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Sender"),
                                createVNode("p", null, toDisplayString($props.data.sending_to), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Receiver"),
                                createVNode("p", null, toDisplayString($props.data.receiving_from), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Batch"),
                                createVNode("p", null, toDisplayString($props.data.batch), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Lot"),
                                createVNode("p", null, toDisplayString($props.data.lot), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Quantity"),
                                createVNode("p", null, toDisplayString($props.data.transacted_quantity), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Available Balance"),
                                createVNode("p", null, toDisplayString($props.data.consolidated_available_balance), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Remaining Balance After Transaction"),
                                createVNode("p", null, toDisplayString($props.data.after_transaction_remaining_balance), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Expirty Date"),
                                createVNode("p", null, toDisplayString($props.data.expiry_date), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Transaction Date"),
                                createVNode("p", null, toDisplayString($props.data.transaction_date), 1)
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
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
                                createTextVNode(" View Stock Transaction ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "py-5 space-y-3 px-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                              createVNode("p", null, toDisplayString($props.data.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                              createVNode("p", null, toDisplayString($props.data.description), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Location"),
                              createVNode("p", null, toDisplayString($props.data.stock_location), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Transaction Type"),
                              createVNode("p", null, toDisplayString($props.data.transaction_type), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Sender"),
                              createVNode("p", null, toDisplayString($props.data.sending_to), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Receiver"),
                              createVNode("p", null, toDisplayString($props.data.receiving_from), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Batch"),
                              createVNode("p", null, toDisplayString($props.data.batch), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Lot"),
                              createVNode("p", null, toDisplayString($props.data.lot), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Quantity"),
                              createVNode("p", null, toDisplayString($props.data.transacted_quantity), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Available Balance"),
                              createVNode("p", null, toDisplayString($props.data.consolidated_available_balance), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Remaining Balance After Transaction"),
                              createVNode("p", null, toDisplayString($props.data.after_transaction_remaining_balance), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Expirty Date"),
                              createVNode("p", null, toDisplayString($props.data.expiry_date), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Transaction Date"),
                              createVNode("p", null, toDisplayString($props.data.transaction_date), 1)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/transactions/view-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Stock Transactions`
    });
  },
  data() {
    return {
      header: "Stock Transactions",
      search: "",
      loading: false,
      transferIcon: render$1,
      viewIcon: render$1,
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
      headers: [
        { text: "item", value: "name", sortable: true },
        { text: "type", value: "transaction_type" },
        { text: "sender", value: "receiving_from" },
        { text: "receiver", value: "sending_to" },
        { text: "batch", value: "batch" },
        { text: "lot", value: "lot" },
        { text: "expiry date", value: "expiry_date", sortable: true },
        { text: "quantity", value: "transacted_quantity", sortable: true },
        { text: "transaction date", value: "transaction_date", sortable: true },
        { text: "actions", value: "actions" }
      ],
      transactions: new Array(),
      cookie: useCookie("token"),
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
    filteredTransactions() {
      return this.transactions.map((transaction) => ({
        ...transaction,
        expiry_date: moment(transaction.expiry_date).format(dateFormat),
        transaction_date: moment(transaction.transaction_date).format(dateFormat),
        sending_to: transaction.sending_to == null ? "Laboratory Store" : transaction.sending_to,
        receiving_from: transaction.receiving_from == null ? "Laboratory Store" : transaction.receiving_from
      }));
    }
  },
  methods: {
    async init(search) {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { page, rowsPerPage } = this.serverOptions;
      const params = `search=${search}&page=${page}&per_page=${rowsPerPage}`;
      const { data, pending, error } = await stockModule.getStockTransactions(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        this.transactions = data.value.data;
        this.loading = false;
        this.serverItemsLength = data.value.meta.total_count;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$2;
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_CoreSearchBar = __nuxt_component_1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_StockTransactionsViewDialog = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Receive stock",
    type: "button",
    color: "warning",
    icon: $data.transferIcon,
    click: () => _ctx.$router.push("/stock-management/transactions/receive-stock")
  }, null, _parent));
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Transfer stock",
    type: "button",
    color: "success",
    icon: $data.transferIcon,
    click: () => _ctx.$router.push("/stock-management/transactions/transfer-stock")
  }, null, _parent));
  _push(`</div></div><div class="flex items-center justify-end py-5">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    "onUpdate:search": ($event) => $data.search = $event,
    onUpdate: $options.init
  }, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $options.filteredTransactions,
    loading: $data.loading,
    searchField: "name",
    searchValue: $data.search,
    serverItemsLength: $data.serverItemsLength,
    serverOptions: $data.serverOptions,
    onUpdate: $options.init
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_StockTransactionsViewDialog, { data: item }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_StockTransactionsViewDialog, { data: item }, null, 8, ["data"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/transactions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
<<<<<<<< HEAD:server/chunks/app/_nuxt/index-3814d1bf.mjs
//# sourceMappingURL=index-3814d1bf.mjs.map
========
//# sourceMappingURL=index-c05a8f4f.mjs.map
>>>>>>>> db8a3962de902d8d9f97ce555bb6c63b1094610b:server/chunks/app/_nuxt/index-c05a8f4f.mjs
