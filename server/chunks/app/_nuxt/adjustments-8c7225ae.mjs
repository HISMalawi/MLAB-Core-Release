import { _ as _sfc_main$4 } from './Breadcrumb-92cb573c.mjs';
import { _ as _export_sfc, u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-666ad98b.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { d as dateFormat, e as errorMessage } from './constants-9b77e6ea.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import moment from 'moment';
import { S as StockModule$1 } from './stock-1cab6d44.mjs';
import { r as render } from './XMarkIcon-170c776f.mjs';
import { r as render$1 } from './UserIcon-3d66d73e.mjs';
import { r as render$2, a as render$4$1 } from './fetch-39024911.mjs';
import { r as render$3 } from './AdjustmentsVerticalIcon-b0fd4e9f.mjs';
import { r as render$4 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './SearchBar-a0fe3266.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { a as render$1$1, r as render$5 } from './PencilSquareIcon-77446728.mjs';
import { _ as _imports_0 } from './stock_out-9944e6b9.mjs';
import { _ as __nuxt_component_1$2 } from './OutlinedButton-945a5cd0.mjs';
import { P as Package } from './package-b5464064.mjs';
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
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './PrinterIcon-02ac6ae4.mjs';
import './Loader-86943425.mjs';

const _sfc_main$3 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render,
    UserIcon: render$1
  },
  data() {
    return {
      open: false,
      addIcon: render$2,
      ajustIcon: render$3,
      clearIcon: render$4,
      reasons: new Array(),
      loading: false,
      reasonSelected: { name: "-- select reason --" },
      stockItemSelected: { name: "-- select stock item --" },
      stockItems: new Array(),
      cookie: useCookie("token"),
      inStock: 0,
      afterStock: 0,
      adjustment: 0,
      stock: { id: 0 },
      lot: "",
      batch: "",
      reason: "",
      notes: ""
    };
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    },
    async getReasons() {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockAdjustmentReasons(`${this.cookie}`);
      if (data.value) {
        this.reasons = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async init() {
      this.handleClick();
      await this.getReasons();
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockItem(`${this.cookie}`);
      if (data.value) {
        this.stockItems = data.value.filter((item) => ({
          ...item,
          created_date: moment(item.created_date).format(dateFormat)
        }));
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async getStock(stockId) {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.readStockItem(`${this.cookie}`, { id: stockId });
      if (data.value) {
        this.afterStock = 0;
        this.adjustment = 0;
        this.inStock = data.value.stock.quantity;
        this.stock = data.value.stock;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async submitForm() {
      this.loading = true;
      const stockModule = new StockModule$1();
      let body = {
        stock_id: this.stock.id,
        lot: this.lot,
        batch: this.batch,
        quantity_to_adjusted: this.adjustment,
        reason: this.reason == "" ? this.reasonSelected.name : this.reason,
        notes: this.notes
      };
      const { data, error, pending } = await stockModule.adjustStock(`${this.cookie}`, body);
      this.loading = pending;
      if (data.value) {
        this.afterStock = 0;
        this.adjustment = 0;
        this.loading = false;
        this.stockItems = new Array();
        this.reasons = new Array();
        this.reasonSelected = { name: "-- select reason --" };
        this.stockItemSelected = { name: "-- select stock item --" };
        this.handleClick();
        useNuxtApp().$toast.success("Stock adjustment successfully done!");
        this.$emit("update", true);
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
        useNuxtApp().$toast.error(errorMessage);
      }
    }
  },
  watch: {
    stockItemSelected: {
      handler(newValue) {
        this.getStock(newValue.id);
      },
      deep: true
    },
    adjustment: {
      handler(value) {
        this.afterStock = Number(this.inStock) + Number(value);
      },
      deep: true
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreDropdown = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Create Stock Adjustment",
    color: "primary",
    icon: $data.addIcon,
    click: $options.init
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
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-xl text-black flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Create Stock Adjustment `);
                              } else {
                                return [
                                  createTextVNode(" Create Stock Adjustment ")
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
                                _push6(`<div class="py-5 px-5 space-y-3"${_scopeId5}><div class="flex flex-col space-y-1.5"${_scopeId5}><label class="font-medium"${_scopeId5}>Reason</label>`);
                                _push6(ssrRenderComponent(_component_CoreDropdown, {
                                  items: $data.reasons,
                                  modelValue: $data.reasonSelected,
                                  "onUpdate:modelValue": ($event) => $data.reasonSelected = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`<div class="mt-2"${_scopeId5}>`);
                                if ($data.reasonSelected.name.toLowerCase() == "other") {
                                  _push6(ssrRenderComponent(_component_FormKit, {
                                    type: "textarea",
                                    label: "Please write your reason for (Other)",
                                    validation: "required",
                                    modelValue: $data.reason,
                                    "onUpdate:modelValue": ($event) => $data.reason = $event
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(`</div></div><div${_scopeId5}><label class="font-medium"${_scopeId5}>Stock Item</label>`);
                                _push6(ssrRenderComponent(_component_CoreDropdown, {
                                  "is-searchable": true,
                                  items: $data.stockItems,
                                  modelValue: $data.stockItemSelected,
                                  "onUpdate:modelValue": ($event) => $data.stockItemSelected = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "number",
                                  label: "In Stock",
                                  disabled: "",
                                  modelValue: $data.inStock,
                                  "onUpdate:modelValue": ($event) => $data.inStock = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "number",
                                  label: "Adjustment",
                                  validation: "required",
                                  modelValue: $data.adjustment,
                                  "onUpdate:modelValue": ($event) => $data.adjustment = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "number",
                                  label: "Stock After",
                                  disabled: "",
                                  modelValue: $data.afterStock,
                                  "onUpdate:modelValue": ($event) => $data.afterStock = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Batch",
                                  validation: "required",
                                  modelValue: $data.batch,
                                  "onUpdate:modelValue": ($event) => $data.batch = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Lot",
                                  validation: "required",
                                  modelValue: $data.lot,
                                  "onUpdate:modelValue": ($event) => $data.lot = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Notes",
                                  validation: "required",
                                  modelValue: $data.notes,
                                  "onUpdate:modelValue": ($event) => $data.notes = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.ajustIcon,
                                  text: "Adjust"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "py-5 px-5 space-y-3" }, [
                                    createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                      createVNode("label", { class: "font-medium" }, "Reason"),
                                      createVNode(_component_CoreDropdown, {
                                        items: $data.reasons,
                                        modelValue: $data.reasonSelected,
                                        "onUpdate:modelValue": ($event) => $data.reasonSelected = $event
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "mt-2" }, [
                                        $data.reasonSelected.name.toLowerCase() == "other" ? (openBlock(), createBlock(_component_FormKit, {
                                          key: 0,
                                          type: "textarea",
                                          label: "Please write your reason for (Other)",
                                          validation: "required",
                                          modelValue: $data.reason,
                                          "onUpdate:modelValue": ($event) => $data.reason = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("label", { class: "font-medium" }, "Stock Item"),
                                      createVNode(_component_CoreDropdown, {
                                        "is-searchable": true,
                                        items: $data.stockItems,
                                        modelValue: $data.stockItemSelected,
                                        "onUpdate:modelValue": ($event) => $data.stockItemSelected = $event
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "In Stock",
                                      disabled: "",
                                      modelValue: $data.inStock,
                                      "onUpdate:modelValue": ($event) => $data.inStock = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Adjustment",
                                      validation: "required",
                                      modelValue: $data.adjustment,
                                      "onUpdate:modelValue": ($event) => $data.adjustment = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Stock After",
                                      disabled: "",
                                      modelValue: $data.afterStock,
                                      "onUpdate:modelValue": ($event) => $data.afterStock = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Batch",
                                      validation: "required",
                                      modelValue: $data.batch,
                                      "onUpdate:modelValue": ($event) => $data.batch = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Lot",
                                      validation: "required",
                                      modelValue: $data.lot,
                                      "onUpdate:modelValue": ($event) => $data.lot = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Notes",
                                      validation: "required",
                                      modelValue: $data.notes,
                                      "onUpdate:modelValue": ($event) => $data.notes = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: $data.ajustIcon,
                                      text: "Adjust"
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
                                  createTextVNode(" Create Stock Adjustment ")
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
                                createVNode("div", { class: "py-5 px-5 space-y-3" }, [
                                  createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                    createVNode("label", { class: "font-medium" }, "Reason"),
                                    createVNode(_component_CoreDropdown, {
                                      items: $data.reasons,
                                      modelValue: $data.reasonSelected,
                                      "onUpdate:modelValue": ($event) => $data.reasonSelected = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "mt-2" }, [
                                      $data.reasonSelected.name.toLowerCase() == "other" ? (openBlock(), createBlock(_component_FormKit, {
                                        key: 0,
                                        type: "textarea",
                                        label: "Please write your reason for (Other)",
                                        validation: "required",
                                        modelValue: $data.reason,
                                        "onUpdate:modelValue": ($event) => $data.reason = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "font-medium" }, "Stock Item"),
                                    createVNode(_component_CoreDropdown, {
                                      "is-searchable": true,
                                      items: $data.stockItems,
                                      modelValue: $data.stockItemSelected,
                                      "onUpdate:modelValue": ($event) => $data.stockItemSelected = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "In Stock",
                                    disabled: "",
                                    modelValue: $data.inStock,
                                    "onUpdate:modelValue": ($event) => $data.inStock = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Adjustment",
                                    validation: "required",
                                    modelValue: $data.adjustment,
                                    "onUpdate:modelValue": ($event) => $data.adjustment = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Stock After",
                                    disabled: "",
                                    modelValue: $data.afterStock,
                                    "onUpdate:modelValue": ($event) => $data.afterStock = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Batch",
                                    validation: "required",
                                    modelValue: $data.batch,
                                    "onUpdate:modelValue": ($event) => $data.batch = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Lot",
                                    validation: "required",
                                    modelValue: $data.lot,
                                    "onUpdate:modelValue": ($event) => $data.lot = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Notes",
                                    validation: "required",
                                    modelValue: $data.notes,
                                    "onUpdate:modelValue": ($event) => $data.notes = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.ajustIcon,
                                    text: "Adjust"
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
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Create Stock Adjustment ")
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
                              createVNode("div", { class: "py-5 px-5 space-y-3" }, [
                                createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                  createVNode("label", { class: "font-medium" }, "Reason"),
                                  createVNode(_component_CoreDropdown, {
                                    items: $data.reasons,
                                    modelValue: $data.reasonSelected,
                                    "onUpdate:modelValue": ($event) => $data.reasonSelected = $event
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "mt-2" }, [
                                    $data.reasonSelected.name.toLowerCase() == "other" ? (openBlock(), createBlock(_component_FormKit, {
                                      key: 0,
                                      type: "textarea",
                                      label: "Please write your reason for (Other)",
                                      validation: "required",
                                      modelValue: $data.reason,
                                      "onUpdate:modelValue": ($event) => $data.reason = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "font-medium" }, "Stock Item"),
                                  createVNode(_component_CoreDropdown, {
                                    "is-searchable": true,
                                    items: $data.stockItems,
                                    modelValue: $data.stockItemSelected,
                                    "onUpdate:modelValue": ($event) => $data.stockItemSelected = $event
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "number",
                                  label: "In Stock",
                                  disabled: "",
                                  modelValue: $data.inStock,
                                  "onUpdate:modelValue": ($event) => $data.inStock = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "number",
                                  label: "Adjustment",
                                  validation: "required",
                                  modelValue: $data.adjustment,
                                  "onUpdate:modelValue": ($event) => $data.adjustment = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "number",
                                  label: "Stock After",
                                  disabled: "",
                                  modelValue: $data.afterStock,
                                  "onUpdate:modelValue": ($event) => $data.afterStock = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "text",
                                  label: "Batch",
                                  validation: "required",
                                  modelValue: $data.batch,
                                  "onUpdate:modelValue": ($event) => $data.batch = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "text",
                                  label: "Lot",
                                  validation: "required",
                                  modelValue: $data.lot,
                                  "onUpdate:modelValue": ($event) => $data.lot = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "textarea",
                                  label: "Notes",
                                  validation: "required",
                                  modelValue: $data.notes,
                                  "onUpdate:modelValue": ($event) => $data.notes = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.ajustIcon,
                                  text: "Adjust"
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
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Create Stock Adjustment ")
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
                                createVNode("div", { class: "py-5 px-5 space-y-3" }, [
                                  createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                    createVNode("label", { class: "font-medium" }, "Reason"),
                                    createVNode(_component_CoreDropdown, {
                                      items: $data.reasons,
                                      modelValue: $data.reasonSelected,
                                      "onUpdate:modelValue": ($event) => $data.reasonSelected = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "mt-2" }, [
                                      $data.reasonSelected.name.toLowerCase() == "other" ? (openBlock(), createBlock(_component_FormKit, {
                                        key: 0,
                                        type: "textarea",
                                        label: "Please write your reason for (Other)",
                                        validation: "required",
                                        modelValue: $data.reason,
                                        "onUpdate:modelValue": ($event) => $data.reason = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "font-medium" }, "Stock Item"),
                                    createVNode(_component_CoreDropdown, {
                                      "is-searchable": true,
                                      items: $data.stockItems,
                                      modelValue: $data.stockItemSelected,
                                      "onUpdate:modelValue": ($event) => $data.stockItemSelected = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "In Stock",
                                    disabled: "",
                                    modelValue: $data.inStock,
                                    "onUpdate:modelValue": ($event) => $data.inStock = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Adjustment",
                                    validation: "required",
                                    modelValue: $data.adjustment,
                                    "onUpdate:modelValue": ($event) => $data.adjustment = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Stock After",
                                    disabled: "",
                                    modelValue: $data.afterStock,
                                    "onUpdate:modelValue": ($event) => $data.afterStock = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Batch",
                                    validation: "required",
                                    modelValue: $data.batch,
                                    "onUpdate:modelValue": ($event) => $data.batch = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Lot",
                                    validation: "required",
                                    modelValue: $data.lot,
                                    "onUpdate:modelValue": ($event) => $data.lot = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Notes",
                                    validation: "required",
                                    modelValue: $data.notes,
                                    "onUpdate:modelValue": ($event) => $data.notes = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.ajustIcon,
                                    text: "Adjust"
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Create Stock Adjustment ")
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
                              createVNode("div", { class: "py-5 px-5 space-y-3" }, [
                                createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                  createVNode("label", { class: "font-medium" }, "Reason"),
                                  createVNode(_component_CoreDropdown, {
                                    items: $data.reasons,
                                    modelValue: $data.reasonSelected,
                                    "onUpdate:modelValue": ($event) => $data.reasonSelected = $event
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "mt-2" }, [
                                    $data.reasonSelected.name.toLowerCase() == "other" ? (openBlock(), createBlock(_component_FormKit, {
                                      key: 0,
                                      type: "textarea",
                                      label: "Please write your reason for (Other)",
                                      validation: "required",
                                      modelValue: $data.reason,
                                      "onUpdate:modelValue": ($event) => $data.reason = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "font-medium" }, "Stock Item"),
                                  createVNode(_component_CoreDropdown, {
                                    "is-searchable": true,
                                    items: $data.stockItems,
                                    modelValue: $data.stockItemSelected,
                                    "onUpdate:modelValue": ($event) => $data.stockItemSelected = $event
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "number",
                                  label: "In Stock",
                                  disabled: "",
                                  modelValue: $data.inStock,
                                  "onUpdate:modelValue": ($event) => $data.inStock = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "number",
                                  label: "Adjustment",
                                  validation: "required",
                                  modelValue: $data.adjustment,
                                  "onUpdate:modelValue": ($event) => $data.adjustment = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "number",
                                  label: "Stock After",
                                  disabled: "",
                                  modelValue: $data.afterStock,
                                  "onUpdate:modelValue": ($event) => $data.afterStock = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "text",
                                  label: "Batch",
                                  validation: "required",
                                  modelValue: $data.batch,
                                  "onUpdate:modelValue": ($event) => $data.batch = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "text",
                                  label: "Lot",
                                  validation: "required",
                                  modelValue: $data.lot,
                                  "onUpdate:modelValue": ($event) => $data.lot = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "textarea",
                                  label: "Notes",
                                  validation: "required",
                                  modelValue: $data.notes,
                                  "onUpdate:modelValue": ($event) => $data.notes = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.ajustIcon,
                                  text: "Adjust"
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/adjustments/add-dialog/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
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
      viewIcon: render$1$1,
      show: false,
      editIcon: render$5
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> View Stock Adjustment `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Stock Adjustment ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="space-y-3 px-5 py-5"${_scopeId4}><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Name</label><p${_scopeId4}>${ssrInterpolate($props.data.name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Description</label><p${_scopeId4}>${ssrInterpolate($props.data.description)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Lot</label><p${_scopeId4}>${ssrInterpolate($props.data.lot)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Batch</label><p${_scopeId4}>${ssrInterpolate($props.data.batch)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Quantity Adjusted</label><p${_scopeId4}>${ssrInterpolate($props.data.transacted_quantity)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Reason</label><p${_scopeId4}>${ssrInterpolate($props.data.reason)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Remarks</label><p${_scopeId4}>${ssrInterpolate($props.data.remarks)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Transaction Date</label><p${_scopeId4}>${ssrInterpolate($props.data.transaction_date)}</p></div></div>`);
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
                                  createTextVNode(" View Stock Adjustment ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", null, toDisplayString($props.data.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                                createVNode("p", null, toDisplayString($props.data.description), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Lot"),
                                createVNode("p", null, toDisplayString($props.data.lot), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Batch"),
                                createVNode("p", null, toDisplayString($props.data.batch), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Quantity Adjusted"),
                                createVNode("p", null, toDisplayString($props.data.transacted_quantity), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Reason"),
                                createVNode("p", null, toDisplayString($props.data.reason), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Remarks"),
                                createVNode("p", null, toDisplayString($props.data.remarks), 1)
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
                                createTextVNode(" View Stock Adjustment ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                              createVNode("p", null, toDisplayString($props.data.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                              createVNode("p", null, toDisplayString($props.data.description), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Lot"),
                              createVNode("p", null, toDisplayString($props.data.lot), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Batch"),
                              createVNode("p", null, toDisplayString($props.data.batch), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Quantity Adjusted"),
                              createVNode("p", null, toDisplayString($props.data.transacted_quantity), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Reason"),
                              createVNode("p", null, toDisplayString($props.data.reason), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Remarks"),
                              createVNode("p", null, toDisplayString($props.data.remarks), 1)
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
                                  createTextVNode(" View Stock Adjustment ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", null, toDisplayString($props.data.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                                createVNode("p", null, toDisplayString($props.data.description), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Lot"),
                                createVNode("p", null, toDisplayString($props.data.lot), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Batch"),
                                createVNode("p", null, toDisplayString($props.data.batch), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Quantity Adjusted"),
                                createVNode("p", null, toDisplayString($props.data.transacted_quantity), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Reason"),
                                createVNode("p", null, toDisplayString($props.data.reason), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Remarks"),
                                createVNode("p", null, toDisplayString($props.data.remarks), 1)
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
                                createTextVNode(" View Stock Adjustment ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                              createVNode("p", null, toDisplayString($props.data.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                              createVNode("p", null, toDisplayString($props.data.description), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Lot"),
                              createVNode("p", null, toDisplayString($props.data.lot), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Batch"),
                              createVNode("p", null, toDisplayString($props.data.batch), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Quantity Adjusted"),
                              createVNode("p", null, toDisplayString($props.data.transacted_quantity), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Reason"),
                              createVNode("p", null, toDisplayString($props.data.reason), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Remarks"),
                              createVNode("p", null, toDisplayString($props.data.remarks), 1)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/adjustments/view-dialog/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render,
    ExclamationTriangleIcon: render$4$1
  },
  data() {
    return {
      show: false,
      reverseIcon: render$4,
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
     * @method voidStockSupplier deletes test type
     * @param id test type id
     * @return promise @typeof void
     */
    async voidStockSupplier(id) {
      this.loading = true;
      const stockModule = new StockModule$1();
      const params = { "stock_transaction_id": this.data.id, "reason": this.reason, id };
      const { data, error, pending } = await stockModule.reverseStockAdjustment(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`Stock adjustment reversed successfully!`);
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
  const _component_CoreOutlinedButton = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.handleClick,
    color: "error",
    text: "Reverse",
    icon: $data.reverseIcon
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
                                _push6(` Confirm reverse `);
                              } else {
                                return [
                                  createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Confirm reverse ")
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
                            onSubmit: ($event) => $options.voidStockSupplier($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="rounded px-2 py-2"${_scopeId5}> Do you really want to reverse adjustment of <span class="font-semibold text-red-500"${_scopeId5}>${ssrInterpolate($props.data.name)}</span>? Note that once this action is completed, it can not be undone </div>`);
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
                                  icon: $data.reverseIcon,
                                  text: "Reverse"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "rounded px-2 py-2" }, [
                                      createTextVNode(" Do you really want to reverse adjustment of "),
                                      createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.name), 1),
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
                                      icon: $data.reverseIcon,
                                      text: "Reverse"
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
                                  createTextVNode(" Confirm reverse ")
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
                              onSubmit: ($event) => $options.voidStockSupplier($props.data.id),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Do you really want to reverse adjustment of "),
                                    createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.name), 1),
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
                                    icon: $data.reverseIcon,
                                    text: "Reverse"
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
                                createTextVNode(" Confirm reverse ")
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
                            onSubmit: ($event) => $options.voidStockSupplier($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Do you really want to reverse adjustment of "),
                                  createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.name), 1),
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
                                  icon: $data.reverseIcon,
                                  text: "Reverse"
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
                                  createTextVNode(" Confirm reverse ")
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
                              onSubmit: ($event) => $options.voidStockSupplier($props.data.id),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Do you really want to reverse adjustment of "),
                                    createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.name), 1),
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
                                    icon: $data.reverseIcon,
                                    text: "Reverse"
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
                                createTextVNode(" Confirm reverse ")
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
                            onSubmit: ($event) => $options.voidStockSupplier($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Do you really want to reverse adjustment of "),
                                  createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.name), 1),
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
                                  icon: $data.reverseIcon,
                                  text: "Reverse"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/adjustments/delete-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Stock Adjustments`
    });
  },
  data() {
    return {
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
      header: "Stock Adjustments",
      search: "",
      loading: false,
      headers: [
        { text: "item", value: "name", sortable: true },
        { text: "lot", value: "lot" },
        { text: "batch", value: "batch" },
        { text: "adjustment", value: "transacted_quantity" },
        { text: "reason", value: "reason" },
        { text: "date created", value: "transaction_date" },
        { text: "actions", value: "actions" }
      ],
      cookie: useCookie("token"),
      adjustments: new Array(),
      serverItemsLength: 0,
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      }
    };
  },
  computed: {
    filteredAdjustments() {
      return this.adjustments.map((adjustment) => ({
        ...adjustment,
        transaction_date: moment(adjustment.transaction_date).format(dateFormat)
      }));
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
      const params = `search=${this.search}&page=${page}&per_page=${rowsPerPage}&transaction_type=adjust stock`;
      const { data, pending, error } = await stockModule.getStockTransactions(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        this.adjustments = data.value.data;
        this.loading = false;
        this.serverItemsLength = data.value.meta.total_count;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    }
  },
  watch: {
    search(value) {
      this.init();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$4;
  const _component_StockAdjustmentsAddDialog = __nuxt_component_1;
  const _component_CoreSearchBar = __nuxt_component_1$1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_StockAdjustmentsViewDialog = __nuxt_component_4;
  const _component_StockAdjustmentsDeleteDialog = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">Stock Adjustments</h3><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_StockAdjustmentsAddDialog, { onUpdate: $options.init }, null, _parent));
  _push(`</div></div><div class="flex items-center justify-end py-5">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    "onUpdate:search": ($event) => $data.search = $event
  }, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    loading: $data.loading,
    headers: $data.headers,
    data: $options.filteredAdjustments,
    "search-value": $data.search,
    "search-field": "name",
    serverItemsLength: $data.serverItemsLength,
    serverOptions: $data.serverOptions,
    onUpdate: $options.init
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_StockAdjustmentsViewDialog, { data: item }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_StockAdjustmentsDeleteDialog, {
          data: item,
          onUpdate: $options.init
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_StockAdjustmentsViewDialog, { data: item }, null, 8, ["data"]),
            createVNode(_component_StockAdjustmentsDeleteDialog, {
              data: item,
              onUpdate: $options.init
            }, null, 8, ["data", "onUpdate"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/adjustments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const adjustments = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { adjustments as default };
//# sourceMappingURL=adjustments-8c7225ae.mjs.map
