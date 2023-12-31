import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1$1 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { S as StockModule$1 } from './stock-6c082d82.mjs';
import { r as render$4 } from './XMarkIcon-170c776f.mjs';
import { r as render$5 } from './UserIcon-3d66d73e.mjs';
import { r as render } from './TicketIcon-9bd92af9.mjs';
import { r as render$1 } from './fetch-63049419.mjs';
import { r as render$6 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$7 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { r as render$3 } from './DocumentCheckIcon-e2548817.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from './Dropdown-15d8abe8.mjs';
import { u as useHead } from './index-ca787103.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render$2 } from './TrashIcon-b1416ff8.mjs';
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
import 'moment';
import './constants-353d90a1.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';

const _sfc_main$1 = {
  props: {
    voucherId: {
      required: true,
      type: String
    },
    requisitions: {
      required: true,
      type: Array
    }
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$4,
    UserIcon: render$5,
    TicketIcon: render
  },
  data() {
    return {
      open: false,
      addIcon: render$1,
      saveIcon: render$6,
      clearIcon: render$7,
      completeIcon: render$3,
      loading: false,
      name: "",
      description: "",
      cookie: useCookie("token")
    };
  },
  methods: {
    async createStockOrder() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const params = {
        voucher_number: Number(this.voucherId),
        requisitions: this.requisitions.map((requisition) => ({
          stock_item_id: requisition.stock_item.id,
          quantity_requested: requisition.quantity_requested
        }))
      };
      const { data, error, pending } = await stockModule.createStockOrder(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        useNuxtApp().$toast.success(`Stock order ${this.$route.params.voucherId} created successfully`);
        this.handleClick();
        this.$emit("update", true);
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
      }
    },
    handleClick() {
      this.open = !this.open;
    },
    clearForm() {
      this.$formkit.reset("submitForm");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_TicketIcon = resolveComponent("TicketIcon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreOutlinedButton = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    icon: $data.completeIcon,
    text: "Complete",
    color: "primary",
    click: () => {
      $options.handleClick();
    }
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: $data.open,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          onClose: $options.handleClick,
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
                            class: "text-xl text-black flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_TicketIcon, { class: "w-8 h-8 mr-2" }, null, _parent6, _scopeId5));
                                _push6(` Order Checkout `);
                              } else {
                                return [
                                  createVNode(_component_TicketIcon, { class: "w-8 h-8 mr-2" }),
                                  createTextVNode(" Order Checkout ")
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
                            onSubmit: $options.createStockOrder,
                            actions: false,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="py-5 px-5 space-y-3"${_scopeId5}><div class="flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_TicketIcon, { class: "h-5 w-5" }, null, _parent6, _scopeId5));
                                _push6(`<p${_scopeId5}>Voucher Number: <strong${_scopeId5}>${ssrInterpolate(_ctx.$route.params.voucherId)}</strong></p></div><div class="mt-3"${_scopeId5}><table class="w-full"${_scopeId5}><thead clas="w-full border-t border-l border-r"${_scopeId5}><tr class="border-b border-t border-r border-l rounded"${_scopeId5}><th${ssrRenderAttr("colspan", 2)} class="text-left p-2"${_scopeId5}> Requisitions </th></tr><tr class="border-b border-t border-r border-l rounded"${_scopeId5}><th class="px-2 py-2 text-left border-r"${_scopeId5}> Stock Item </th><th class="px-2 py-2 text-left"${_scopeId5}> Quantity Being Requested </th></tr></thead><tbody${_scopeId5}><!--[-->`);
                                ssrRenderList($props.requisitions, (requisition, index) => {
                                  _push6(`<tr class="border-b border-t border-r border-l rounded"${_scopeId5}><td class="px-2 py-2 border-r"${_scopeId5}>${ssrInterpolate(requisition.stock_item.name)}</td><td class="px-2 py-2"${_scopeId5}>${ssrInterpolate(requisition.quantity_requested)}</td></tr>`);
                                });
                                _push6(`<!--]--></tbody></table></div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                  },
                                  text: "Cancel"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save changes"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "py-5 px-5 space-y-3" }, [
                                    createVNode("div", { class: "flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2" }, [
                                      createVNode(_component_TicketIcon, { class: "h-5 w-5" }),
                                      createVNode("p", null, [
                                        createTextVNode("Voucher Number: "),
                                        createVNode("strong", null, toDisplayString(_ctx.$route.params.voucherId), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3" }, [
                                      createVNode("table", { class: "w-full" }, [
                                        createVNode("thead", { clas: "w-full border-t border-l border-r" }, [
                                          createVNode("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                            createVNode("th", {
                                              colspan: 2,
                                              class: "text-left p-2"
                                            }, " Requisitions ")
                                          ]),
                                          createVNode("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                            createVNode("th", { class: "px-2 py-2 text-left border-r" }, " Stock Item "),
                                            createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Being Requested ")
                                          ])
                                        ]),
                                        createVNode("tbody", null, [
                                          (openBlock(true), createBlock(Fragment, null, renderList($props.requisitions, (requisition, index) => {
                                            return openBlock(), createBlock("tr", {
                                              key: index,
                                              class: "border-b border-t border-r border-l rounded"
                                            }, [
                                              createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.stock_item.name), 1),
                                              createVNode("td", { class: "px-2 py-2" }, toDisplayString(requisition.quantity_requested), 1)
                                            ]);
                                          }), 128))
                                        ])
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                      },
                                      text: "Cancel"
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: $data.saveIcon,
                                      text: "Save changes"
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
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_TicketIcon, { class: "w-8 h-8 mr-2" }),
                                  createTextVNode(" Order Checkout ")
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
                              onSubmit: $options.createStockOrder,
                              actions: false,
                              id: "submitForm"
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "py-5 px-5 space-y-3" }, [
                                  createVNode("div", { class: "flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2" }, [
                                    createVNode(_component_TicketIcon, { class: "h-5 w-5" }),
                                    createVNode("p", null, [
                                      createTextVNode("Voucher Number: "),
                                      createVNode("strong", null, toDisplayString(_ctx.$route.params.voucherId), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3" }, [
                                    createVNode("table", { class: "w-full" }, [
                                      createVNode("thead", { clas: "w-full border-t border-l border-r" }, [
                                        createVNode("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                          createVNode("th", {
                                            colspan: 2,
                                            class: "text-left p-2"
                                          }, " Requisitions ")
                                        ]),
                                        createVNode("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                          createVNode("th", { class: "px-2 py-2 text-left border-r" }, " Stock Item "),
                                          createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Being Requested ")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList($props.requisitions, (requisition, index) => {
                                          return openBlock(), createBlock("tr", {
                                            key: index,
                                            class: "border-b border-t border-r border-l rounded"
                                          }, [
                                            createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.stock_item.name), 1),
                                            createVNode("td", { class: "px-2 py-2" }, toDisplayString(requisition.quantity_requested), 1)
                                          ]);
                                        }), 128))
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                    },
                                    text: "Cancel"
                                  }),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.saveIcon,
                                    text: "Save changes"
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_TicketIcon, { class: "w-8 h-8 mr-2" }),
                                createTextVNode(" Order Checkout ")
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
                            onSubmit: $options.createStockOrder,
                            actions: false,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "py-5 px-5 space-y-3" }, [
                                createVNode("div", { class: "flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2" }, [
                                  createVNode(_component_TicketIcon, { class: "h-5 w-5" }),
                                  createVNode("p", null, [
                                    createTextVNode("Voucher Number: "),
                                    createVNode("strong", null, toDisplayString(_ctx.$route.params.voucherId), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "mt-3" }, [
                                  createVNode("table", { class: "w-full" }, [
                                    createVNode("thead", { clas: "w-full border-t border-l border-r" }, [
                                      createVNode("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                        createVNode("th", {
                                          colspan: 2,
                                          class: "text-left p-2"
                                        }, " Requisitions ")
                                      ]),
                                      createVNode("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                        createVNode("th", { class: "px-2 py-2 text-left border-r" }, " Stock Item "),
                                        createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Being Requested ")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList($props.requisitions, (requisition, index) => {
                                        return openBlock(), createBlock("tr", {
                                          key: index,
                                          class: "border-b border-t border-r border-l rounded"
                                        }, [
                                          createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.stock_item.name), 1),
                                          createVNode("td", { class: "px-2 py-2" }, toDisplayString(requisition.quantity_requested), 1)
                                        ]);
                                      }), 128))
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                  },
                                  text: "Cancel"
                                }),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save changes"
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
                        createVNode(_component_DialogPanel, { class: "w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_TicketIcon, { class: "w-8 h-8 mr-2" }),
                                  createTextVNode(" Order Checkout ")
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
                              onSubmit: $options.createStockOrder,
                              actions: false,
                              id: "submitForm"
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "py-5 px-5 space-y-3" }, [
                                  createVNode("div", { class: "flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2" }, [
                                    createVNode(_component_TicketIcon, { class: "h-5 w-5" }),
                                    createVNode("p", null, [
                                      createTextVNode("Voucher Number: "),
                                      createVNode("strong", null, toDisplayString(_ctx.$route.params.voucherId), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3" }, [
                                    createVNode("table", { class: "w-full" }, [
                                      createVNode("thead", { clas: "w-full border-t border-l border-r" }, [
                                        createVNode("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                          createVNode("th", {
                                            colspan: 2,
                                            class: "text-left p-2"
                                          }, " Requisitions ")
                                        ]),
                                        createVNode("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                          createVNode("th", { class: "px-2 py-2 text-left border-r" }, " Stock Item "),
                                          createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Being Requested ")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList($props.requisitions, (requisition, index) => {
                                          return openBlock(), createBlock("tr", {
                                            key: index,
                                            class: "border-b border-t border-r border-l rounded"
                                          }, [
                                            createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.stock_item.name), 1),
                                            createVNode("td", { class: "px-2 py-2" }, toDisplayString(requisition.quantity_requested), 1)
                                          ]);
                                        }), 128))
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                    },
                                    text: "Cancel"
                                  }),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.saveIcon,
                                    text: "Save changes"
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
            onClose: $options.handleClick,
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
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_TicketIcon, { class: "w-8 h-8 mr-2" }),
                                createTextVNode(" Order Checkout ")
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
                            onSubmit: $options.createStockOrder,
                            actions: false,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "py-5 px-5 space-y-3" }, [
                                createVNode("div", { class: "flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2" }, [
                                  createVNode(_component_TicketIcon, { class: "h-5 w-5" }),
                                  createVNode("p", null, [
                                    createTextVNode("Voucher Number: "),
                                    createVNode("strong", null, toDisplayString(_ctx.$route.params.voucherId), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "mt-3" }, [
                                  createVNode("table", { class: "w-full" }, [
                                    createVNode("thead", { clas: "w-full border-t border-l border-r" }, [
                                      createVNode("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                        createVNode("th", {
                                          colspan: 2,
                                          class: "text-left p-2"
                                        }, " Requisitions ")
                                      ]),
                                      createVNode("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                        createVNode("th", { class: "px-2 py-2 text-left border-r" }, " Stock Item "),
                                        createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Being Requested ")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList($props.requisitions, (requisition, index) => {
                                        return openBlock(), createBlock("tr", {
                                          key: index,
                                          class: "border-b border-t border-r border-l rounded"
                                        }, [
                                          createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.stock_item.name), 1),
                                          createVNode("td", { class: "px-2 py-2" }, toDisplayString(requisition.quantity_requested), 1)
                                        ]);
                                      }), 128))
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                  },
                                  text: "Cancel"
                                }),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save changes"
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
          }, 8, ["onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/orders/checkout/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Create Stock Order`
    });
  },
  components: { TicketIcon: render },
  data() {
    return {
      header: "Create Stock Order",
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Stock Orders",
          link: "/stock-management/orders"
        }
      ],
      cookie: useCookie("token"),
      addIcon: render$1,
      deleteicon: render$2,
      completeIcon: render$3,
      loading: false,
      requisitions: new Array(),
      stockItems: new Array()
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockItem(`${this.cookie}`);
      if (data.value) {
        this.stockItems = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    addStockItem() {
      this.requisitions.push({
        stock_item: { name: "-- select item --", id: 0 },
        quantity_requested: 0,
        id: 0,
        batch_number: "",
        lot_number: ""
      });
    },
    deleteStockItem(index) {
      if (index >= 0 && index < this.requisitions.length) {
        this.requisitions.splice(index, 1);
      }
    },
    isValidRequisitions(requisitions) {
      let isNotEmpty = false;
      if (requisitions.length > 0) {
        isNotEmpty = true;
      }
      let hasStockItems = false;
      for (const requisition of requisitions) {
        if (requisition.stock_item.name == "-- select item --" || requisition.quantity_requested == 0) {
          hasStockItems = false;
        } else {
          hasStockItems = true;
        }
      }
      return isNotEmpty && hasStockItems;
    },
    navigateOrders(value) {
      value && this.$router.push("/stock-management/orders");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_TicketIcon = resolveComponent("TicketIcon");
  const _component_StockOrdersCheckout = __nuxt_component_1;
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_CoreDropdown = __nuxt_component_0$2;
  const _component_FormKit = resolveComponent("FormKit");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="py-5 flex items-center justify-between"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3></div><div class="rounded border"><div class="flex rounded-t justify-between bg-gray-50 border-b px-2 py-2 cursor-text"><div class="flex items-center space-x-2">`);
  _push(ssrRenderComponent(_component_TicketIcon, { class: "h-5 w-5" }, null, _parent));
  _push(`<p>Voucher Number: <strong>${ssrInterpolate(_ctx.$route.params.voucherId)}</strong></p></div>`);
  if ($options.isValidRequisitions($data.requisitions)) {
    _push(ssrRenderComponent(_component_StockOrdersCheckout, {
      onUpdate: $options.navigateOrders,
      "voucher-id": `${_ctx.$route.params.voucherId}`,
      requisitions: $data.requisitions
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="px-5 py-5"><div class="flex px-2 py-2 mb-4 rounded-r border-l-4 border-sky-100 bg-sky-50"> Click on the <strong class="mx-2">&quot;Add Stock Item&quot;</strong> button to start creating your order requisition items </div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    icon: $data.addIcon,
    text: "Add Stock Item",
    color: "success",
    click: () => {
      $options.addStockItem();
    }
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.requisitions, (requisition, index) => {
    _push(`<div class="flex flex-col space-y-3"><div class="grid grid-cols-4 gap-4 mt-5"><div class="flex flex-col space-y-2"><label class="font-medium mb-0">Stock item</label>`);
    _push(ssrRenderComponent(_component_CoreDropdown, {
      "is-searchable": true,
      items: $data.stockItems,
      modelValue: requisition.stock_item,
      "onUpdate:modelValue": ($event) => requisition.stock_item = $event
    }, null, _parent));
    _push(`</div>`);
    _push(ssrRenderComponent(_component_FormKit, {
      label: "Quantity requested",
      type: "number",
      validation: "required",
      modelValue: requisition.quantity_requested,
      "onUpdate:modelValue": ($event) => requisition.quantity_requested = $event
    }, null, _parent));
    _push(`<div class="mt-8">`);
    _push(ssrRenderComponent(_component_CoreActionButton, {
      icon: $data.deleteicon,
      text: "Delete",
      color: "error",
      click: () => {
        $options.deleteStockItem(index);
      }
    }, null, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/orders/[voucherId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _voucherId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _voucherId_ as default };
//# sourceMappingURL=_voucherId_-b77f0f72.mjs.map
