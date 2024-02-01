import { _ as _sfc_main$2 } from './Breadcrumb-fc731a79.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, resolveComponent, mergeProps, openBlock, createElementBlock, createElementVNode, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, Fragment, renderList } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { S as StockModule$1 } from './stock-686e7f45.mjs';
import { r as render$1 } from './XMarkIcon-170c776f.mjs';
import { a as render$1$1, r as render$8 } from './PencilSquareIcon-77446728.mjs';
import { r as render$4 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './ambulance-65a5ca21.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import { r as render$6, e as endpoints, f as fetchRequest } from './fetch-5298dfa4.mjs';
import { P as Package } from './package-96462e18.mjs';
import { r as render$2 } from './UserIcon-3d66d73e.mjs';
import { r as render$3 } from './SquaresPlusIcon-2282e046.mjs';
import { r as render$5 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { r as render$7 } from './TrashIcon-b1416ff8.mjs';
import { _ as _imports_0 } from './stock_out-9944e6b9.mjs';
import './nuxt-link-42c558b2.mjs';
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
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import 'moment';
import './constants-9b77e6ea.mjs';
import './PrinterIcon-02ac6ae4.mjs';

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _sfc_main$1 = {
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
      transferIcon: render$1$1,
      saveIcon: render$4,
      show: false,
      loading: false,
      editIcon: render$8,
      cookie: useCookie("token")
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    filteredRequisitions() {
      return this.data.requisitions.map((requisition) => ({
        stock_item_name: requisition.stock_item.name,
        stock_item_id: requisition.stock_item.id,
        quantity: requisition.quantity_requested,
        lot: requisition.lot_number,
        batch: requisition.batch_number
      }));
    }
  },
  methods: {
    async submitForm() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const params = { sending_to: this.data.sendingTo, stock_status_reason: this.data.reason, stock_items: this.filteredRequisitions };
      const { data, error, pending } = await stockModule.stockOutTransaction(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        useNuxtApp().$toast.success(data.value.message);
        this.handleClick();
        this.$router.push("/stock-management/issue");
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
        this.handleClick();
      }
    },
    handleClick() {
      this.show = !this.show;
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
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.handleClick,
    color: "success",
    text: "Transfer",
    icon: $data.transferIcon
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-8 h-8 mr-2"${_scopeId5}> Checkout Stock Transfer `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Checkout Stock Transfer ")
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
                            onSubmit: $options.submitForm,
                            actions: false,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="py-5 px-5"${_scopeId5}><div class="w-full flex items-center space-x-2"${_scopeId5}><p class="w-72 font-medium"${_scopeId5}>To: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId5}>${ssrInterpolate($props.data.sendingTo)}</span></div><div class="w-full flex items-center space-x-2 mt-2"${_scopeId5}><p class="w-72 font-medium"${_scopeId5}>Reason for transfer: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId5}>${ssrInterpolate($props.data.reason)}</span></div><div class="bg-gray-50 px-2 py-2 border rounded-t mt-4"${_scopeId5}><h3 class="font-semibold"${_scopeId5}>Stock Out Items</h3></div><table class="w-full"${_scopeId5}><thead clas="w-full border-l border-r"${_scopeId5}><tr class="border-b border-r border-l rounded"${_scopeId5}><th class="px-2 py-2 text-left border-r"${_scopeId5}> Item </th><th class="px-2 py-2 text-left"${_scopeId5}> Quantity </th></tr></thead><tbody${_scopeId5}><!--[-->`);
                                ssrRenderList($options.filteredRequisitions, (requisition, index) => {
                                  _push6(`<tr class="border-b border-t border-r border-l rounded"${_scopeId5}><td class="px-2 py-2 border-r"${_scopeId5}>${ssrInterpolate(requisition.stock_item_name)}</td><td class="px-2 py-2 border-r"${_scopeId5}>${ssrInterpolate(requisition.quantity)}</td></tr>`);
                                });
                                _push6(`<!--]--></tbody></table></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.transferIcon,
                                  text: "Continue"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "py-5 px-5" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "To: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($props.data.sendingTo), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2 mt-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Reason for transfer: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($props.data.reason), 1)
                                    ]),
                                    createVNode("div", { class: "bg-gray-50 px-2 py-2 border rounded-t mt-4" }, [
                                      createVNode("h3", { class: "font-semibold" }, "Stock Out Items")
                                    ]),
                                    createVNode("table", { class: "w-full" }, [
                                      createVNode("thead", { clas: "w-full border-l border-r" }, [
                                        createVNode("tr", { class: "border-b border-r border-l rounded" }, [
                                          createVNode("th", { class: "px-2 py-2 text-left border-r" }, " Item "),
                                          createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity ")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList($options.filteredRequisitions, (requisition, index) => {
                                          return openBlock(), createBlock("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                            createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.stock_item_name), 1),
                                            createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity), 1)
                                          ]);
                                        }), 256))
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: $data.transferIcon,
                                      text: "Continue"
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
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Checkout Stock Transfer ")
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
                              onSubmit: $options.submitForm,
                              actions: false,
                              id: "submitForm"
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "py-5 px-5" }, [
                                  createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                    createVNode("p", { class: "w-72 font-medium" }, "To: "),
                                    createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($props.data.sendingTo), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex items-center space-x-2 mt-2" }, [
                                    createVNode("p", { class: "w-72 font-medium" }, "Reason for transfer: "),
                                    createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($props.data.reason), 1)
                                  ]),
                                  createVNode("div", { class: "bg-gray-50 px-2 py-2 border rounded-t mt-4" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Stock Out Items")
                                  ]),
                                  createVNode("table", { class: "w-full" }, [
                                    createVNode("thead", { clas: "w-full border-l border-r" }, [
                                      createVNode("tr", { class: "border-b border-r border-l rounded" }, [
                                        createVNode("th", { class: "px-2 py-2 text-left border-r" }, " Item "),
                                        createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity ")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList($options.filteredRequisitions, (requisition, index) => {
                                        return openBlock(), createBlock("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                          createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.stock_item_name), 1),
                                          createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity), 1)
                                        ]);
                                      }), 256))
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.transferIcon,
                                    text: "Continue"
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
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Checkout Stock Transfer ")
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
                            onSubmit: $options.submitForm,
                            actions: false,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "py-5 px-5" }, [
                                createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                  createVNode("p", { class: "w-72 font-medium" }, "To: "),
                                  createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($props.data.sendingTo), 1)
                                ]),
                                createVNode("div", { class: "w-full flex items-center space-x-2 mt-2" }, [
                                  createVNode("p", { class: "w-72 font-medium" }, "Reason for transfer: "),
                                  createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($props.data.reason), 1)
                                ]),
                                createVNode("div", { class: "bg-gray-50 px-2 py-2 border rounded-t mt-4" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Stock Out Items")
                                ]),
                                createVNode("table", { class: "w-full" }, [
                                  createVNode("thead", { clas: "w-full border-l border-r" }, [
                                    createVNode("tr", { class: "border-b border-r border-l rounded" }, [
                                      createVNode("th", { class: "px-2 py-2 text-left border-r" }, " Item "),
                                      createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity ")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList($options.filteredRequisitions, (requisition, index) => {
                                      return openBlock(), createBlock("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.stock_item_name), 1),
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity), 1)
                                      ]);
                                    }), 256))
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.transferIcon,
                                  text: "Continue"
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
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Checkout Stock Transfer ")
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
                              onSubmit: $options.submitForm,
                              actions: false,
                              id: "submitForm"
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "py-5 px-5" }, [
                                  createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                    createVNode("p", { class: "w-72 font-medium" }, "To: "),
                                    createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($props.data.sendingTo), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex items-center space-x-2 mt-2" }, [
                                    createVNode("p", { class: "w-72 font-medium" }, "Reason for transfer: "),
                                    createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($props.data.reason), 1)
                                  ]),
                                  createVNode("div", { class: "bg-gray-50 px-2 py-2 border rounded-t mt-4" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Stock Out Items")
                                  ]),
                                  createVNode("table", { class: "w-full" }, [
                                    createVNode("thead", { clas: "w-full border-l border-r" }, [
                                      createVNode("tr", { class: "border-b border-r border-l rounded" }, [
                                        createVNode("th", { class: "px-2 py-2 text-left border-r" }, " Item "),
                                        createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity ")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList($options.filteredRequisitions, (requisition, index) => {
                                        return openBlock(), createBlock("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                          createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.stock_item_name), 1),
                                          createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity), 1)
                                        ]);
                                      }), 256))
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.transferIcon,
                                    text: "Continue"
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
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Checkout Stock Transfer ")
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
                            onSubmit: $options.submitForm,
                            actions: false,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "py-5 px-5" }, [
                                createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                  createVNode("p", { class: "w-72 font-medium" }, "To: "),
                                  createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($props.data.sendingTo), 1)
                                ]),
                                createVNode("div", { class: "w-full flex items-center space-x-2 mt-2" }, [
                                  createVNode("p", { class: "w-72 font-medium" }, "Reason for transfer: "),
                                  createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($props.data.reason), 1)
                                ]),
                                createVNode("div", { class: "bg-gray-50 px-2 py-2 border rounded-t mt-4" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Stock Out Items")
                                ]),
                                createVNode("table", { class: "w-full" }, [
                                  createVNode("thead", { clas: "w-full border-l border-r" }, [
                                    createVNode("tr", { class: "border-b border-r border-l rounded" }, [
                                      createVNode("th", { class: "px-2 py-2 text-left border-r" }, " Item "),
                                      createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity ")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList($options.filteredRequisitions, (requisition, index) => {
                                      return openBlock(), createBlock("tr", { class: "border-b border-t border-r border-l rounded" }, [
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.stock_item_name), 1),
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity), 1)
                                      ]);
                                    }), 256))
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.transferIcon,
                                  text: "Continue"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/transactions/checkout/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Transfer Stock`
    });
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$1,
    UserIcon: render$2,
    SquaresPlusIcon: render$3,
    FaceFrownIcon: render
  },
  data() {
    return {
      open: false,
      transferIcon: render$1$1,
      saveIcon: render$4,
      clearIcon: render$5,
      addIcon: render$6,
      deleteIcon: render$7,
      destinations: new Array(),
      selectedDestination: { name: "-- select destination --" },
      reason: "",
      requisitions: new Array(),
      stockItems: new Array(),
      cookie: useCookie("token"),
      showFacility: false,
      showWard: false,
      showDepartment: false,
      departments: new Array(),
      selectedDeparment: { name: "-- select department --" },
      facilities: new Array(),
      selectedFacility: { name: "-- select facility --" },
      wards: new Array(),
      selectedWard: { name: "-- select Ward --" },
      selectedItem: { name: "-- select item --" },
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Stock Management",
          link: "#"
        },
        {
          name: "Transactions",
          link: "/stock-management/transactions"
        }
      ],
      transferData: {},
      requisitionLoading: { id: 0, value: false }
    };
  },
  created() {
    this.init();
  },
  computed: {
    destinationOptions() {
      return [
        { name: "Department", label: "Department" },
        { name: "Facility", label: "Facility" },
        { name: "Wards", label: "Wards" }
      ];
    },
    selectedItems() {
      switch (this.selectedDestination.name) {
        case "Department":
          this.selectedItem = { name: "-- select department --" };
          return this.departments;
        case "Facility":
          this.selectedItem = { name: "-- select facility --" };
          return this.facilities;
        case "Ward":
          this.selectedItem = { name: "-- select ward --" };
          return this.wards;
        default:
          return [];
      }
    }
  },
  methods: {
    async init() {
      await this.loadStockItems();
      this.addDestinations();
    },
    async submitForm() {
      const stockModule = new StockModule$1();
      const params = {
        sending_to: this.selectedDestination.name,
        stock_status_reason: this.reason,
        stock_items: this.requisitions.map((requisition) => ({
          stock_item_id: requisition.stock_item.id,
          quantity: requisition.quantity_requested,
          lot: requisition.lot_number,
          batch: requisition.batch_number
        }))
      };
      const { data, error, pending } = await stockModule.stockOutTransaction(`${this.cookie}`, params);
      if (data.value) {
        console.log(data.value);
      }
      if (error.value) {
        console.log(error.value);
      }
    },
    async loadStockItems() {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockItem(`${this.cookie}`);
      if (data.value) {
        this.stockItems = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async loadDepartments() {
      const request = {
        route: endpoints.departments,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.departments = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async loadFacilities() {
      const request = {
        route: endpoints.facility,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.facilities = data.value.data;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async loadWards() {
      console.log("bjkm");
      const request = {
        route: "encounter_type_facility_section_mappings/facility_sections?encounter_type_id=2",
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.wards = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    addDestinations() {
      let destinations = ["Facility", "Ward", "Department"];
      destinations.forEach((destination) => {
        this.destinations.push({ name: destination });
      });
    },
    async checkStockQuantity(requisition) {
      this.requisitionLoading = { id: requisition.id, value: true };
      const stockModule = new StockModule$1();
      const params = { stock_item_id: requisition.stock_item.id, quantity: requisition.quantity_requested, batch: requisition.batch_number, lot: requisition.lot_number };
      const { data, error, pending } = await stockModule.checkStockQuantity(`${this.cookie}`, params);
      this.requisitionLoading = { id: requisition.id, value: pending };
      if (data.value) {
        if (!data.value.deduction_allowed) {
          useNuxtApp().$toast.warning(data.value.message);
          requisition.quantity_requested = 0;
        }
        console.log(data.value);
        this.requisitionLoading = { id: requisition.id, value: false };
      }
      if (error.value) {
        console.error(error.value);
        this.requisitionLoading = { id: requisition.id, value: false };
      }
    },
    addStockItem() {
      this.requisitions.push({
        id: 0,
        stock_item: { name: "-- select item --", id: 0 },
        quantity_requested: 0,
        batch_number: "",
        lot_number: ""
      });
    },
    deleteStockItem(index) {
      if (index >= 0 && index < this.requisitions.length) {
        this.requisitions.splice(index, 1);
      }
    },
    clearForm() {
      this.$formkit.reset("submitForm");
    },
    handleClick() {
      this.open = !this.open;
    }
  },
  watch: {
    selectedDestination: {
      handler(value) {
        const destinations = {
          "Department": this.loadDepartments,
          "Facility": this.loadFacilities,
          "Ward": this.loadWards
        };
        const loadFunction = destinations[value.name];
        if (loadFunction) {
          loadFunction.call(this);
        }
      },
      deep: true
    },
    "requisitions": {
      deep: true,
      handler(newRequisitions) {
        let req = newRequisitions[newRequisitions.length - 1];
        const hasNonZeroQuantity = req.quantity_requested > 0;
        if (hasNonZeroQuantity) {
          if (req.quantity_requested > 0 && req.batch_number !== "" && req.lot_number !== "") {
            this.checkStockQuantity(req);
          }
        }
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$2;
  const _component_StockTransactionsCheckout = __nuxt_component_1;
  const _component_CoreDropdown = __nuxt_component_0;
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_CoreLoader = __nuxt_component_3;
  const _component_SquaresPlusIcon = resolveComponent("SquaresPlusIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold capitalize">Transfer Stock</h3><div class="">`);
  _push(ssrRenderComponent(_component_StockTransactionsCheckout, {
    data: { reason: $data.reason, sendingTo: `${$data.selectedItem.name.includes("select") ? "" : $data.selectedItem.name} ${!$data.selectedDestination.name.includes("select") ? $data.selectedDestination.name : ""}`, requisitions: $data.requisitions }
  }, null, _parent));
  _push(`</div></div><div><div class="w-full mt-2 grid grid-cols-3 gap-2"><div class="col-span-1 order-2 rounded border"><div class="bg-gray-50 px-2 py-2 border-b rounded-t"><h3 class="font-semibold text-lg">Details</h3></div><div class="flex flex-col space-y-2 px-5 py-5"><div class="w-full flex flex-col space-y-2"><label class="font-medium">Destination</label>`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.destinations,
    modelValue: $data.selectedDestination,
    "onUpdate:modelValue": ($event) => $data.selectedDestination = $event
  }, null, _parent));
  _push(`</div>`);
  if ($data.selectedDestination && $options.selectedItems.length > 0) {
    _push(`<div class="w-full flex flex-col space-y-2"><label class="font-medium">Select ${ssrInterpolate($data.selectedDestination.name.toLowerCase())}<span class="text-red-600 font-medium">*</span></label>`);
    _push(ssrRenderComponent(_component_CoreDropdown, {
      "is-searchable": true,
      items: $options.selectedItems,
      modelValue: $data.selectedItem,
      "onUpdate:modelValue": ($event) => $data.selectedItem = $event
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_FormKit, {
    label: "Reason for transfer",
    type: "textarea",
    modelValue: $data.reason,
    "onUpdate:modelValue": ($event) => $data.reason = $event,
    validation: "required"
  }, null, _parent));
  _push(`</div></div><div class="col-span-2 order-1 rounded border"><div class="bg-gray-50 px-2 py-2 border-b rounded-t"><h3 class="font-semibold text-lg">Stock Items</h3></div><div class="px-5 py-5">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    style: $data.requisitions.length > 0 ? null : { display: "none" },
    color: "primary",
    click: $options.addStockItem,
    text: "Add items",
    icon: $data.addIcon
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.requisitions, (requisition, index) => {
    _push(`<div class="flex flex-col space-y-3 mt-5"><div class="grid grid-cols-5 gap-4 mb-5"><div class="flex flex-col space-y-2"><label class="font-medium mb-0">Stock item</label>`);
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
      "onUpdate:modelValue": ($event) => requisition.quantity_requested = $event,
      modelModifiers: { lazy: true },
      delay: 1e3
    }, null, _parent));
    _push(ssrRenderComponent(_component_FormKit, {
      label: "Batch",
      type: "text",
      validation: "required",
      modelValue: requisition.batch_number,
      "onUpdate:modelValue": ($event) => requisition.batch_number = $event,
      modelModifiers: { lazy: true },
      delay: 2e3
    }, null, _parent));
    _push(ssrRenderComponent(_component_FormKit, {
      label: "Lot",
      type: "text",
      validation: "required",
      modelValue: requisition.lot_number,
      "onUpdate:modelValue": ($event) => requisition.lot_number = $event,
      modelModifiers: { lazy: true },
      delay: 2e3
    }, null, _parent));
    _push(`<div class="mt-8 flex items-center space-x-2">`);
    if ($data.requisitionLoading.id == requisition.id && $data.requisitionLoading.value) {
      _push(ssrRenderComponent(_component_CoreLoader, { class: "w-5 h-5" }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (!$data.requisitionLoading.value) {
      _push(ssrRenderComponent(_component_CoreActionButton, {
        icon: $data.deleteIcon,
        text: "Delete",
        color: "error",
        click: () => {
          $options.deleteStockItem(index);
        }
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div>`);
  });
  _push(`<!--]--><div style="${ssrRenderStyle($data.requisitions.length == 0 ? null : { display: "none" })}" class="flex flex-col items-center justify-center space-y-2"><img${ssrRenderAttr("src", _imports_0)} class="w-28 h-28 text-red-500"><p class="flex items-center">No stock items for transfer</p><button type="button" class="flex items-center text-sky-500 font-medium">`);
  _push(ssrRenderComponent(_component_SquaresPlusIcon, { class: "w-5 h-5 mr-2" }, null, _parent));
  _push(` Add stock item </button></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/transactions/transfer-stock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transferStock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { transferStock as default };
//# sourceMappingURL=transfer-stock-a2588b31.mjs.map
