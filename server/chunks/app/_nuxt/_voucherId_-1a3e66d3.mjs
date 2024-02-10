import { _ as _sfc_main$3 } from './Breadcrumb-92cb573c.mjs';
import { _ as _export_sfc, u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createElementBlock, createElementVNode, createTextVNode, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { e as errorMessage } from './constants-9b77e6ea.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { S as StockModule$1 } from './stock-1cab6d44.mjs';
import { r as render$6 } from './XMarkIcon-170c776f.mjs';
import { r as render$7 } from './UserIcon-3d66d73e.mjs';
import { r as render$2 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$8 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './spreadsheets-b72be089.mjs';
import { r as render$4 } from './NoSymbolIcon-c85145af.mjs';
import { a as render$4$1 } from './fetch-39024911.mjs';
import { r as render$9 } from './ArchiveBoxXMarkIcon-1426f444.mjs';
import { P as Package } from './package-f9450e57.mjs';
import { r as render$1 } from './TicketIcon-9bd92af9.mjs';
import { r as render$3 } from './DocumentCheckIcon-e2548817.mjs';
import { r as render$5 } from './TrashIcon-b1416ff8.mjs';
import { _ as _imports_0 } from './pharmacy_alt-9c93ede3.mjs';
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
import 'moment';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", { d: "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" }),
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _sfc_main$2 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$6,
    UserIcon: render$7
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      open: false,
      checkIcon: render,
      saveIcon: render$2,
      clearIcon: render$8,
      cookie: useCookie("token"),
      quantityRequested: 0,
      quantityIssued: 0,
      quantityCollected: 0,
      notCollectedReason: "",
      batchNumber: "",
      lotNumber: "",
      remarks: "",
      expirtyDate: "",
      loading: false
    };
  },
  computed: {
    isNotCollected() {
      return this.quantityCollected < this.quantityIssued;
    },
    quantityNotCollected() {
      return this.quantityIssued - this.quantityCollected;
    }
  },
  methods: {
    async receiveRequisition() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const params = {
        stock_requisition_id: this.data.id,
        requisition: {
          quantity_received: this.quantityCollected,
          quantity_issued: this.quantityIssued,
          quantity_not_collected: this.quantityNotCollected,
          not_collected_reason: this.notCollectedReason
        },
        transaction: {
          lot: this.lotNumber,
          batch: this.batchNumber,
          expiry_date: this.expirtyDate,
          remarks: this.remarks
        }
      };
      const { data, error, pending } = await stockModule.receiveStockOrderRequisition(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        useNuxtApp().$toast.success("Stock order requisition received successfully");
        this.$emit("update", true);
        this.loading = false;
        this.handleClick();
      }
      if (error.value) {
        console.error(error.value);
        this.handleClick();
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    },
    handleClick() {
      this.open = !this.open;
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
  const _component_FormKit = resolveComponent("FormKit");
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreOutlinedButton = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Receive",
    color: "primary",
    icon: $data.checkIcon,
    click: $options.handleClick
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-8 h-8 mr-2"${_scopeId5}> Receive Stock Requisition `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Receive Stock Requisition ")
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
                            actions: false,
                            onSubmit: $options.receiveRequisition,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="px-5 py-5 space-y-3"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "number",
                                  label: "Quantity issued",
                                  modelValue: $data.quantityIssued,
                                  "onUpdate:modelValue": ($event) => $data.quantityIssued = $event,
                                  validation: "required"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "number",
                                  label: "Quantity collected",
                                  modelValue: $data.quantityCollected,
                                  "onUpdate:modelValue": ($event) => $data.quantityCollected = $event,
                                  validation: "required"
                                }, null, _parent6, _scopeId5));
                                if ($options.isNotCollected) {
                                  _push6(ssrRenderComponent(_component_FormKit, {
                                    disabled: "",
                                    type: "number",
                                    label: "Quantity not collected",
                                    modelValue: $options.quantityNotCollected,
                                    "onUpdate:modelValue": ($event) => $options.quantityNotCollected = $event,
                                    validation: "required"
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if ($options.isNotCollected) {
                                  _push6(ssrRenderComponent(_component_FormKit, {
                                    type: "textarea",
                                    label: "Provide a reason for quantity not collected",
                                    modelValue: $data.notCollectedReason,
                                    "onUpdate:modelValue": ($event) => $data.notCollectedReason = $event,
                                    validation: "required"
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Lot number",
                                  modelValue: $data.lotNumber,
                                  "onUpdate:modelValue": ($event) => $data.lotNumber = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Batch number",
                                  modelValue: $data.batchNumber,
                                  "onUpdate:modelValue": ($event) => $data.batchNumber = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`<div class="relative flex flex-col space-y-2.5"${_scopeId5}><label class="font-medium"${_scopeId5}>Date Expiry</label>`);
                                _push6(ssrRenderComponent(_component_datepicker, {
                                  required: "",
                                  teleport: true,
                                  position: "center",
                                  range: false,
                                  placeholder: "-- select expiry date --",
                                  minDate: /* @__PURE__ */ new Date(),
                                  "input-classes": "border font-none rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                  modelValue: $data.expirtyDate,
                                  "onUpdate:modelValue": ($event) => $data.expirtyDate = $event,
                                  format: "dd/MM/yyyy"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Remarks",
                                  modelValue: $data.remarks,
                                  "onUpdate:modelValue": ($event) => $data.remarks = $event,
                                  validation: "required"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-5 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  text: "Clear form",
                                  click: () => {
                                  }
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  click: () => {
                                  },
                                  text: "Save changes"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "px-5 py-5 space-y-3" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Quantity issued",
                                      modelValue: $data.quantityIssued,
                                      "onUpdate:modelValue": ($event) => $data.quantityIssued = $event,
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Quantity collected",
                                      modelValue: $data.quantityCollected,
                                      "onUpdate:modelValue": ($event) => $data.quantityCollected = $event,
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    $options.isNotCollected ? (openBlock(), createBlock(_component_FormKit, {
                                      key: 0,
                                      disabled: "",
                                      type: "number",
                                      label: "Quantity not collected",
                                      modelValue: $options.quantityNotCollected,
                                      "onUpdate:modelValue": ($event) => $options.quantityNotCollected = $event,
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                    $options.isNotCollected ? (openBlock(), createBlock(_component_FormKit, {
                                      key: 1,
                                      type: "textarea",
                                      label: "Provide a reason for quantity not collected",
                                      modelValue: $data.notCollectedReason,
                                      "onUpdate:modelValue": ($event) => $data.notCollectedReason = $event,
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Lot number",
                                      modelValue: $data.lotNumber,
                                      "onUpdate:modelValue": ($event) => $data.lotNumber = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Batch number",
                                      modelValue: $data.batchNumber,
                                      "onUpdate:modelValue": ($event) => $data.batchNumber = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "relative flex flex-col space-y-2.5" }, [
                                      createVNode("label", { class: "font-medium" }, "Date Expiry"),
                                      createVNode(_component_datepicker, {
                                        required: "",
                                        teleport: true,
                                        position: "center",
                                        range: false,
                                        placeholder: "-- select expiry date --",
                                        minDate: /* @__PURE__ */ new Date(),
                                        "input-classes": "border font-none rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                        modelValue: $data.expirtyDate,
                                        "onUpdate:modelValue": ($event) => $data.expirtyDate = $event,
                                        format: "dd/MM/yyyy"
                                      }, null, 8, ["minDate", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Remarks",
                                      modelValue: $data.remarks,
                                      "onUpdate:modelValue": ($event) => $data.remarks = $event,
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mt-5 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      text: "Clear form",
                                      click: () => {
                                      }
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      color: "success",
                                      icon: $data.saveIcon,
                                      click: () => {
                                      },
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
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Receive Stock Requisition ")
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
                              actions: false,
                              onSubmit: $options.receiveRequisition,
                              id: "submitForm"
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "px-5 py-5 space-y-3" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Quantity issued",
                                    modelValue: $data.quantityIssued,
                                    "onUpdate:modelValue": ($event) => $data.quantityIssued = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Quantity collected",
                                    modelValue: $data.quantityCollected,
                                    "onUpdate:modelValue": ($event) => $data.quantityCollected = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  $options.isNotCollected ? (openBlock(), createBlock(_component_FormKit, {
                                    key: 0,
                                    disabled: "",
                                    type: "number",
                                    label: "Quantity not collected",
                                    modelValue: $options.quantityNotCollected,
                                    "onUpdate:modelValue": ($event) => $options.quantityNotCollected = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                  $options.isNotCollected ? (openBlock(), createBlock(_component_FormKit, {
                                    key: 1,
                                    type: "textarea",
                                    label: "Provide a reason for quantity not collected",
                                    modelValue: $data.notCollectedReason,
                                    "onUpdate:modelValue": ($event) => $data.notCollectedReason = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Lot number",
                                    modelValue: $data.lotNumber,
                                    "onUpdate:modelValue": ($event) => $data.lotNumber = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Batch number",
                                    modelValue: $data.batchNumber,
                                    "onUpdate:modelValue": ($event) => $data.batchNumber = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "relative flex flex-col space-y-2.5" }, [
                                    createVNode("label", { class: "font-medium" }, "Date Expiry"),
                                    createVNode(_component_datepicker, {
                                      required: "",
                                      teleport: true,
                                      position: "center",
                                      range: false,
                                      placeholder: "-- select expiry date --",
                                      minDate: /* @__PURE__ */ new Date(),
                                      "input-classes": "border font-none rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                      modelValue: $data.expirtyDate,
                                      "onUpdate:modelValue": ($event) => $data.expirtyDate = $event,
                                      format: "dd/MM/yyyy"
                                    }, null, 8, ["minDate", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Remarks",
                                    modelValue: $data.remarks,
                                    "onUpdate:modelValue": ($event) => $data.remarks = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mt-5 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    text: "Clear form",
                                    click: () => {
                                    }
                                  }),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    color: "success",
                                    icon: $data.saveIcon,
                                    click: () => {
                                    },
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Receive Stock Requisition ")
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
                            actions: false,
                            onSubmit: $options.receiveRequisition,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "px-5 py-5 space-y-3" }, [
                                createVNode(_component_FormKit, {
                                  type: "number",
                                  label: "Quantity issued",
                                  modelValue: $data.quantityIssued,
                                  "onUpdate:modelValue": ($event) => $data.quantityIssued = $event,
                                  validation: "required"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "number",
                                  label: "Quantity collected",
                                  modelValue: $data.quantityCollected,
                                  "onUpdate:modelValue": ($event) => $data.quantityCollected = $event,
                                  validation: "required"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                $options.isNotCollected ? (openBlock(), createBlock(_component_FormKit, {
                                  key: 0,
                                  disabled: "",
                                  type: "number",
                                  label: "Quantity not collected",
                                  modelValue: $options.quantityNotCollected,
                                  "onUpdate:modelValue": ($event) => $options.quantityNotCollected = $event,
                                  validation: "required"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                $options.isNotCollected ? (openBlock(), createBlock(_component_FormKit, {
                                  key: 1,
                                  type: "textarea",
                                  label: "Provide a reason for quantity not collected",
                                  modelValue: $data.notCollectedReason,
                                  "onUpdate:modelValue": ($event) => $data.notCollectedReason = $event,
                                  validation: "required"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                createVNode(_component_FormKit, {
                                  type: "text",
                                  label: "Lot number",
                                  modelValue: $data.lotNumber,
                                  "onUpdate:modelValue": ($event) => $data.lotNumber = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "text",
                                  label: "Batch number",
                                  modelValue: $data.batchNumber,
                                  "onUpdate:modelValue": ($event) => $data.batchNumber = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "relative flex flex-col space-y-2.5" }, [
                                  createVNode("label", { class: "font-medium" }, "Date Expiry"),
                                  createVNode(_component_datepicker, {
                                    required: "",
                                    teleport: true,
                                    position: "center",
                                    range: false,
                                    placeholder: "-- select expiry date --",
                                    minDate: /* @__PURE__ */ new Date(),
                                    "input-classes": "border font-none rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                    modelValue: $data.expirtyDate,
                                    "onUpdate:modelValue": ($event) => $data.expirtyDate = $event,
                                    format: "dd/MM/yyyy"
                                  }, null, 8, ["minDate", "modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "textarea",
                                  label: "Remarks",
                                  modelValue: $data.remarks,
                                  "onUpdate:modelValue": ($event) => $data.remarks = $event,
                                  validation: "required"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-5 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  text: "Clear form",
                                  click: () => {
                                  }
                                }),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  click: () => {
                                  },
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
                        createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Receive Stock Requisition ")
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
                              actions: false,
                              onSubmit: $options.receiveRequisition,
                              id: "submitForm"
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "px-5 py-5 space-y-3" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Quantity issued",
                                    modelValue: $data.quantityIssued,
                                    "onUpdate:modelValue": ($event) => $data.quantityIssued = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Quantity collected",
                                    modelValue: $data.quantityCollected,
                                    "onUpdate:modelValue": ($event) => $data.quantityCollected = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  $options.isNotCollected ? (openBlock(), createBlock(_component_FormKit, {
                                    key: 0,
                                    disabled: "",
                                    type: "number",
                                    label: "Quantity not collected",
                                    modelValue: $options.quantityNotCollected,
                                    "onUpdate:modelValue": ($event) => $options.quantityNotCollected = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                  $options.isNotCollected ? (openBlock(), createBlock(_component_FormKit, {
                                    key: 1,
                                    type: "textarea",
                                    label: "Provide a reason for quantity not collected",
                                    modelValue: $data.notCollectedReason,
                                    "onUpdate:modelValue": ($event) => $data.notCollectedReason = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Lot number",
                                    modelValue: $data.lotNumber,
                                    "onUpdate:modelValue": ($event) => $data.lotNumber = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Batch number",
                                    modelValue: $data.batchNumber,
                                    "onUpdate:modelValue": ($event) => $data.batchNumber = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "relative flex flex-col space-y-2.5" }, [
                                    createVNode("label", { class: "font-medium" }, "Date Expiry"),
                                    createVNode(_component_datepicker, {
                                      required: "",
                                      teleport: true,
                                      position: "center",
                                      range: false,
                                      placeholder: "-- select expiry date --",
                                      minDate: /* @__PURE__ */ new Date(),
                                      "input-classes": "border font-none rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                      modelValue: $data.expirtyDate,
                                      "onUpdate:modelValue": ($event) => $data.expirtyDate = $event,
                                      format: "dd/MM/yyyy"
                                    }, null, 8, ["minDate", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Remarks",
                                    modelValue: $data.remarks,
                                    "onUpdate:modelValue": ($event) => $data.remarks = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mt-5 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    text: "Clear form",
                                    click: () => {
                                    }
                                  }),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    color: "success",
                                    icon: $data.saveIcon,
                                    click: () => {
                                    },
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Receive Stock Requisition ")
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
                            actions: false,
                            onSubmit: $options.receiveRequisition,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "px-5 py-5 space-y-3" }, [
                                createVNode(_component_FormKit, {
                                  type: "number",
                                  label: "Quantity issued",
                                  modelValue: $data.quantityIssued,
                                  "onUpdate:modelValue": ($event) => $data.quantityIssued = $event,
                                  validation: "required"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "number",
                                  label: "Quantity collected",
                                  modelValue: $data.quantityCollected,
                                  "onUpdate:modelValue": ($event) => $data.quantityCollected = $event,
                                  validation: "required"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                $options.isNotCollected ? (openBlock(), createBlock(_component_FormKit, {
                                  key: 0,
                                  disabled: "",
                                  type: "number",
                                  label: "Quantity not collected",
                                  modelValue: $options.quantityNotCollected,
                                  "onUpdate:modelValue": ($event) => $options.quantityNotCollected = $event,
                                  validation: "required"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                $options.isNotCollected ? (openBlock(), createBlock(_component_FormKit, {
                                  key: 1,
                                  type: "textarea",
                                  label: "Provide a reason for quantity not collected",
                                  modelValue: $data.notCollectedReason,
                                  "onUpdate:modelValue": ($event) => $data.notCollectedReason = $event,
                                  validation: "required"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                createVNode(_component_FormKit, {
                                  type: "text",
                                  label: "Lot number",
                                  modelValue: $data.lotNumber,
                                  "onUpdate:modelValue": ($event) => $data.lotNumber = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "text",
                                  label: "Batch number",
                                  modelValue: $data.batchNumber,
                                  "onUpdate:modelValue": ($event) => $data.batchNumber = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "relative flex flex-col space-y-2.5" }, [
                                  createVNode("label", { class: "font-medium" }, "Date Expiry"),
                                  createVNode(_component_datepicker, {
                                    required: "",
                                    teleport: true,
                                    position: "center",
                                    range: false,
                                    placeholder: "-- select expiry date --",
                                    minDate: /* @__PURE__ */ new Date(),
                                    "input-classes": "border font-none rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                    modelValue: $data.expirtyDate,
                                    "onUpdate:modelValue": ($event) => $data.expirtyDate = $event,
                                    format: "dd/MM/yyyy"
                                  }, null, 8, ["minDate", "modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "textarea",
                                  label: "Remarks",
                                  modelValue: $data.remarks,
                                  "onUpdate:modelValue": ($event) => $data.remarks = $event,
                                  validation: "required"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-5 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  text: "Clear form",
                                  click: () => {
                                  }
                                }),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  click: () => {
                                  },
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/orders/receive-dialog/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$6,
    NoSymbolIcon: render$4,
    ExclamationTriangleIcon: render$4$1,
    ArchiveBoxXMarkIcon: render$9
  },
  data() {
    return {
      show: false,
      notCollectedIcon: render$9,
      loading: false,
      statusLoading: false,
      reason: "",
      cookie: useCookie("token")
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    orderId: {
      type: String,
      required: true
    }
  },
  methods: {
    async acceptNotCollected() {
      this.statusLoading = true;
      const stockModule = new StockModule$1();
      const params = {
        route: "stock_requisition_not_collected",
        stock_requisition_id: this.data.id,
        stock_status_reason: this.reason
      };
      const { data, error, pending } = await stockModule.updateStockOrderStatus(`${this.cookie}`, params);
      this.statusLoading = pending;
      if (data.value) {
        this.$emit("update", true);
        this.statusLoading = false;
        this.reason = "";
        this.handleClick();
        useNuxtApp().$toast.success(`Stock order requisition not collected successfully!`);
      }
      if (error.value) {
        console.error(error.value);
        this.statusLoading = false;
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
  const _component_ArchiveBoxXMarkIcon = resolveComponent("ArchiveBoxXMarkIcon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreOutlinedButton = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.handleClick,
    color: "error",
    text: "Not Received",
    icon: $data.notCollectedIcon
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
                                _push6(ssrRenderComponent(_component_ArchiveBoxXMarkIcon, { class: "h-5 w-5 mr-2" }, null, _parent6, _scopeId5));
                                _push6(` Confirm Not Collected `);
                              } else {
                                return [
                                  createVNode(_component_ArchiveBoxXMarkIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Confirm Not Collected ")
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
                            onSubmit: ($event) => $options.acceptNotCollected(),
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="rounded px-2 py-2"${_scopeId5}> Please provide a reason why <span class="font-semibold text-red-500"${_scopeId5}>${ssrInterpolate($props.data.item.name)}</span> from the Order <strong${_scopeId5}>${ssrInterpolate($props.orderId)}</strong> was not collected? Note that once this action is completed, it can not be undone </div>`);
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
                                  loading: $data.statusLoading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.notCollectedIcon,
                                  text: "Reject"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "rounded px-2 py-2" }, [
                                      createTextVNode(" Please provide a reason why "),
                                      createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.item.name), 1),
                                      createTextVNode(" from the Order "),
                                      createVNode("strong", null, toDisplayString($props.orderId), 1),
                                      createTextVNode(" was not collected? Note that once this action is completed, it can not be undone ")
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
                                      loading: $data.statusLoading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "error",
                                      icon: $data.notCollectedIcon,
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
                                  createVNode(_component_ArchiveBoxXMarkIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Confirm Not Collected ")
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
                              onSubmit: ($event) => $options.acceptNotCollected(),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Please provide a reason why "),
                                    createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.item.name), 1),
                                    createTextVNode(" from the Order "),
                                    createVNode("strong", null, toDisplayString($props.orderId), 1),
                                    createTextVNode(" was not collected? Note that once this action is completed, it can not be undone ")
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
                                    loading: $data.statusLoading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "error",
                                    icon: $data.notCollectedIcon,
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
                                createVNode(_component_ArchiveBoxXMarkIcon, { class: "h-5 w-5 mr-2" }),
                                createTextVNode(" Confirm Not Collected ")
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
                            onSubmit: ($event) => $options.acceptNotCollected(),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Please provide a reason why "),
                                  createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.item.name), 1),
                                  createTextVNode(" from the Order "),
                                  createVNode("strong", null, toDisplayString($props.orderId), 1),
                                  createTextVNode(" was not collected? Note that once this action is completed, it can not be undone ")
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
                                  loading: $data.statusLoading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.notCollectedIcon,
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
                                  createVNode(_component_ArchiveBoxXMarkIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Confirm Not Collected ")
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
                              onSubmit: ($event) => $options.acceptNotCollected(),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Please provide a reason why "),
                                    createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.item.name), 1),
                                    createTextVNode(" from the Order "),
                                    createVNode("strong", null, toDisplayString($props.orderId), 1),
                                    createTextVNode(" was not collected? Note that once this action is completed, it can not be undone ")
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
                                    loading: $data.statusLoading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "error",
                                    icon: $data.notCollectedIcon,
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
                                createVNode(_component_ArchiveBoxXMarkIcon, { class: "h-5 w-5 mr-2" }),
                                createTextVNode(" Confirm Not Collected ")
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
                            onSubmit: ($event) => $options.acceptNotCollected(),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Please provide a reason why "),
                                  createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.item.name), 1),
                                  createTextVNode(" from the Order "),
                                  createVNode("strong", null, toDisplayString($props.orderId), 1),
                                  createTextVNode(" was not collected? Note that once this action is completed, it can not be undone ")
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
                                  loading: $data.statusLoading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.notCollectedIcon,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/orders/not-collected/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Receive Stock Order`
    });
  },
  components: { TicketIcon: render$1 },
  data() {
    return {
      header: "Receive Stock Order",
      checkIcon: render,
      saveIcon: render$2,
      allIcon: render$3,
      rejectIcon: render$4,
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
      deleteicon: render$5,
      loading: false,
      adding: false,
      receiving: false,
      verifying: false,
      requisitions: new Array(),
      voidReason: "",
      issuerName: "",
      issuerDesignation: "",
      issuerPhone: "",
      issuerSignature: "",
      approverName: "",
      approverDesignation: "",
      approverPhone: "",
      approverSignature: "",
      pharmacyWorkers: new Array()
    };
  },
  created() {
    this.init();
  },
  computed: {
    hasApprover() {
      return this.pharmacyWorkers.length == 0 ? false : this.pharmacyWorkers.some((item) => item.record_type === "approver");
    },
    hasIssuer() {
      return this.pharmacyWorkers.length == 0 ? false : this.pharmacyWorkers.some((item) => item.record_type === "issuer");
    }
  },
  methods: {
    async addPharmacyWorker(type) {
      this.adding = true;
      const stockModule = new StockModule$1();
      const params = {
        stock_order_id: `${this.$route.query.order_id}`,
        record_type: type,
        name: type == "issuer" ? this.issuerName : this.approverName,
        designation: type == "issuer" ? this.issuerDesignation : this.approverDesignation,
        phone_number: type == "issuer" ? this.issuerPhone : this.approverPhone,
        signature: type == "issuer" ? this.issuerSignature : this.approverSignature
      };
      const { data, error, pending } = await stockModule.createStockOrderPharmacy(`${this.cookie}`, params);
      this.adding = pending;
      if (data.value) {
        this.init();
        useNuxtApp().$toast.success("Stock order pharmacy details saved successfully");
        this.adding = false;
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.adding = false;
      }
    },
    async updatePharmacyWorker(type) {
      this.adding = true;
      const stockModule = new StockModule$1();
      const params = {
        pharmacy_id: this.pharmacyWorkers.filter((item) => item.record_type == type)[0].id,
        record_type: type,
        name: type == "issuer" ? this.issuerName : this.approverName,
        designation: type == "issuer" ? this.issuerDesignation : this.approverDesignation,
        phone_number: type == "issuer" ? this.issuerPhone : this.approverPhone,
        signature: type == "issuer" ? this.issuerSignature : this.approverSignature
      };
      const { data, error, pending } = await stockModule.updateStockOrderPharmacy(`${this.cookie}`, params);
      this.adding = pending;
      if (data.value) {
        this.init();
        useNuxtApp().$toast.success("Stock order pharmacy details updated successfully");
        this.adding = false;
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.adding = false;
      }
    },
    async init() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.getStockOrder(`${this.cookie}`, `${this.$route.query.order_id}`);
      this.loading = pending;
      if (data.value) {
        this.requisitions = data.value.stock_requisitions;
        data.value.stock_pharmacy_approver_and_issuers.map((item) => {
          if (item.record_type == "issuer") {
            this.issuerName = item.name;
            this.issuerPhone = item.phone_number;
            this.issuerDesignation = item.designation;
            this.issuerSignature = item.signature;
          } else {
            this.approverName = item.name;
            this.approverPhone = item.phone_number;
            this.approverDesignation = item.designation;
            this.approverSignature = item.signature;
          }
        });
        this.pharmacyWorkers = data.value.stock_pharmacy_approver_and_issuers;
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    deleteStockItem(index) {
      if (index >= 0 && index < this.requisitions.length) {
        this.requisitions.splice(index, 1);
      }
    },
    isReceivedOrNotCollected(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].requisition_status.toLowerCase() === "received" || array[i].requisition_status.toLowerCase() === "not collected") {
          return true;
        }
      }
      return false;
    },
    async receiveOrder() {
      if (this.isReceivedOrNotCollected(this.requisitions)) {
        if (this.hasApprover && this.hasIssuer) {
          this.receiving = true;
          const stockModule = new StockModule$1();
          const params = {
            stock_order_id: `${this.$route.query.order_id}`
          };
          const { data, error, pending } = await stockModule.receiveStockOrder(`${this.cookie}`, params);
          this.receiving = pending;
          if (data.value) {
            useNuxtApp().$toast.success("Stock order received successfully!");
            this.$router.push("/stock-management/orders");
            this.receiving = false;
          }
          if (error.value) {
            console.error(error.value);
            this.receiving = false;
          }
        } else {
          useNuxtApp().$toast.warn("Order should be issued and approved by pharmacy!");
        }
      } else {
        useNuxtApp().$toast.warn("Please enter the amount recieved or mark as not collected!");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$3;
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_FormKit = resolveComponent("FormKit");
  const _component_StockOrdersReceiveDialog = __nuxt_component_2;
  const _component_StockOrdersNotCollected = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="py-5 flex items-center justify-between"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Receive Order",
    color: "success",
    icon: $data.checkIcon,
    click: () => $options.receiveOrder()
  }, null, _parent));
  _push(`</div><div><div class="py-2" style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}"><div class="flex items-center space-x-3"><img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8"><h3 class="text-xl font-semibold">Pharmacy</h3></div><div class="border rounded mt-3"><div class="px-4 py-2 bg-gray-50 font-medium rounded-t border-b"> Issuer </div><div class="px-5 py-5">`);
  _push(ssrRenderComponent(_component_FormKit, {
    type: "form",
    "submit-label": "Update",
    onSubmit: ($event) => $options.hasIssuer ? $options.updatePharmacyWorker("issuer") : $options.addPharmacyWorker("issuer"),
    actions: false
  }, {
    default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid grid-cols-4 gap-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "text",
          label: "Name",
          modelValue: $data.issuerName,
          "onUpdate:modelValue": ($event) => $data.issuerName = $event,
          validation: "required"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "text",
          label: "Designation",
          modelValue: $data.issuerDesignation,
          "onUpdate:modelValue": ($event) => $data.issuerDesignation = $event,
          validation: "required"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "text",
          label: "Phone Number",
          modelValue: $data.issuerPhone,
          "onUpdate:modelValue": ($event) => $data.issuerPhone = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "text",
          label: "Signature",
          modelValue: $data.issuerSignature,
          "onUpdate:modelValue": ($event) => $data.issuerSignature = $event,
          validation: "required"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          type: "submit",
          class: "mt-3",
          text: $options.hasIssuer ? "Update changes" : "Save changes",
          icon: $data.saveIcon,
          loading: $data.adding,
          click: () => {
          },
          color: $options.hasIssuer ? "primary" : "success"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "grid grid-cols-4 gap-5" }, [
            createVNode(_component_FormKit, {
              type: "text",
              label: "Name",
              modelValue: $data.issuerName,
              "onUpdate:modelValue": ($event) => $data.issuerName = $event,
              validation: "required"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_FormKit, {
              type: "text",
              label: "Designation",
              modelValue: $data.issuerDesignation,
              "onUpdate:modelValue": ($event) => $data.issuerDesignation = $event,
              validation: "required"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_FormKit, {
              type: "text",
              label: "Phone Number",
              modelValue: $data.issuerPhone,
              "onUpdate:modelValue": ($event) => $data.issuerPhone = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_FormKit, {
              type: "text",
              label: "Signature",
              modelValue: $data.issuerSignature,
              "onUpdate:modelValue": ($event) => $data.issuerSignature = $event,
              validation: "required"
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          createVNode(_component_CoreActionButton, {
            type: "submit",
            class: "mt-3",
            text: $options.hasIssuer ? "Update changes" : "Save changes",
            icon: $data.saveIcon,
            loading: $data.adding,
            click: () => {
            },
            color: $options.hasIssuer ? "primary" : "success"
          }, null, 8, ["text", "icon", "loading", "color"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="border rounded mt-3"><div class="px-4 py-2 bg-gray-50 font-medium rounded-t border-b"> Approver </div><div class="px-5 py-5">`);
  _push(ssrRenderComponent(_component_FormKit, {
    type: "form",
    "submit-label": "Update",
    onSubmit: ($event) => $options.hasApprover ? $options.updatePharmacyWorker("approver") : $options.addPharmacyWorker("approver"),
    actions: false
  }, {
    default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid grid-cols-4 gap-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "text",
          label: "Name",
          modelValue: $data.approverName,
          "onUpdate:modelValue": ($event) => $data.approverName = $event,
          validation: "required"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "text",
          label: "Designation",
          modelValue: $data.approverDesignation,
          "onUpdate:modelValue": ($event) => $data.approverDesignation = $event,
          validation: "required"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "text",
          label: "Phone Number",
          modelValue: $data.approverPhone,
          "onUpdate:modelValue": ($event) => $data.approverPhone = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "text",
          label: "Signature",
          modelValue: $data.approverSignature,
          "onUpdate:modelValue": ($event) => $data.approverSignature = $event,
          validation: "required"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          type: "submit",
          class: "mt-3",
          text: $options.hasApprover ? "Update changes" : "Save changes",
          icon: $data.saveIcon,
          loading: $data.adding,
          click: () => {
          },
          color: $options.hasApprover ? "primary" : "success"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "grid grid-cols-4 gap-5" }, [
            createVNode(_component_FormKit, {
              type: "text",
              label: "Name",
              modelValue: $data.approverName,
              "onUpdate:modelValue": ($event) => $data.approverName = $event,
              validation: "required"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_FormKit, {
              type: "text",
              label: "Designation",
              modelValue: $data.approverDesignation,
              "onUpdate:modelValue": ($event) => $data.approverDesignation = $event,
              validation: "required"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_FormKit, {
              type: "text",
              label: "Phone Number",
              modelValue: $data.approverPhone,
              "onUpdate:modelValue": ($event) => $data.approverPhone = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_FormKit, {
              type: "text",
              label: "Signature",
              modelValue: $data.approverSignature,
              "onUpdate:modelValue": ($event) => $data.approverSignature = $event,
              validation: "required"
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          createVNode(_component_CoreActionButton, {
            type: "submit",
            class: "mt-3",
            text: $options.hasApprover ? "Update changes" : "Save changes",
            icon: $data.saveIcon,
            loading: $data.adding,
            click: () => {
            },
            color: $options.hasApprover ? "primary" : "success"
          }, null, 8, ["text", "icon", "loading", "color"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}" class="rounded border"><div class="px-4 py-2 bg-gray-50 font-medium rounded-t border-b"> Stock Items </div><!--[-->`);
  ssrRenderList($data.requisitions, (requisition, index) => {
    _push(`<div class="flex flex-col space-y-3 px-5 py-5"><div class="grid grid-cols-4 gap-4 mt-5"><div class="flex flex-col space-y-2">`);
    _push(ssrRenderComponent(_component_FormKit, {
      label: "Stock item",
      disabled: true,
      modelValue: requisition.item.name,
      "onUpdate:modelValue": ($event) => requisition.item.name = $event
    }, null, _parent));
    _push(`</div>`);
    _push(ssrRenderComponent(_component_FormKit, {
      label: "Quantity requested",
      type: "number",
      validation: "required",
      modelValue: requisition.quantity_requested,
      "onUpdate:modelValue": ($event) => requisition.quantity_requested = $event,
      disabled: ""
    }, null, _parent));
    _push(`<div class="mt-8 flex space-x-2.5 items-center">`);
    if (requisition.requisition_status.toLowerCase() !== "received") {
      _push(ssrRenderComponent(_component_StockOrdersReceiveDialog, {
        data: requisition,
        onUpdate: $options.init
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (requisition.requisition_status.toLowerCase() !== "received") {
      _push(ssrRenderComponent(_component_StockOrdersNotCollected, {
        onUpdate: $options.init,
        data: requisition,
        orderId: `${_ctx.$route.params.voucherId}`
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}"><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<div class="flex items-center space-x-3 mb-3"><div class="w-1/4 bg-gray-100 rounded animate-pulse h-10 mt"></div><div class="w-1/4 bg-gray-100 rounded animate-pulse h-10"></div><div class="w-1/4 bg-gray-100 rounded animate-pulse h-10"></div><div class="w-1/4 bg-gray-100 rounded animate-pulse h-10"></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/orders/receive/[voucherId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _voucherId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _voucherId_ as default };
//# sourceMappingURL=_voucherId_-1a3e66d3.mjs.map
