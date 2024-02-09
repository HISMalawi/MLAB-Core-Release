import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$3 } from './Breadcrumb-92cb573c.mjs';
import { _ as _export_sfc, u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, resolveComponent, createTextVNode, createCommentVNode, toDisplayString } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { S as StockModule$1 } from './stock-1cab6d44.mjs';
import { r as render$2 } from './XMarkIcon-170c776f.mjs';
import { r as render$3 } from './UserIcon-3d66d73e.mjs';
import { r as render$4 } from './fetch-39024911.mjs';
import { r as render$5 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$6 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { _ as __nuxt_component_1$1 } from './SearchBar-a0fe3266.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { _ as __nuxt_component_1$3 } from './index-ec6348c9.mjs';
import { d as dateFormat } from './constants-9b77e6ea.mjs';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import moment from 'moment';
import { r as render$7 } from './TicketIcon-9bd92af9.mjs';
import { r as render$1, a as render$1$1 } from './PencilSquareIcon-77446728.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_0$1 } from './pharmacy_alt-9c93ede3.mjs';
import { P as Package } from './package-a4418224.mjs';
import { r as render } from './PrinterIcon-02ac6ae4.mjs';
import { r as render$8 } from './CheckBadgeIcon-bee4a252.mjs';
import { r as render$9 } from './SquaresPlusIcon-10de7253.mjs';
import { r as render$a } from './DocumentCheckIcon-e2548817.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import './nuxt-link-149f0ed2.mjs';
import './HomeIcon-299b993b.mjs';
import 'unctx';
import 'vue-router';
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
import 'pinia-plugin-persistedstate';
import 'vue3-easy-data-table';
import '@vuepic/vue-datepicker';
import 'vue-json-excel3';
import '@vueform/multiselect';
import 'vue3-toastify';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import './Loader-86943425.mjs';
import 'jspdf';

const _sfc_main$2 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$2,
    UserIcon: render$3
  },
  data() {
    return {
      open: false,
      addIcon: render$4,
      saveIcon: render$5,
      clearIcon: render$6,
      loading: false,
      voucherId: "",
      description: "",
      cookie: useCookie("token")
    };
  },
  methods: {
    async checkVoucherValidity() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.checkStockOrder(`${this.cookie}`, { voucher_number: Number(this.voucherId) });
      this.loading = pending;
      if (data.value) {
        data.value.used ? useNuxtApp().$toast.warn("Order already exists") : this.$router.push(`/stock-management/orders/${this.voucherId}`);
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreOutlinedButton = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Create order",
    color: "primary",
    icon: $data.addIcon,
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
                                _push6(` Create stock order `);
                              } else {
                                return [
                                  createTextVNode(" Create stock order ")
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
                            onSubmit: $options.checkVoucherValidity,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3"${_scopeId5}><div class="w-full flex items-center px-5"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Voucher ID",
                                  validation: "required",
                                  modelValue: $data.voucherId,
                                  "onUpdate:modelValue": ($event) => $data.voucherId = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  },
                                  text: "Clear form"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Continue"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3" }, [
                                    createVNode("div", { class: "w-full flex items-center px-5" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Voucher ID",
                                          validation: "required",
                                          modelValue: $data.voucherId,
                                          "onUpdate:modelValue": ($event) => $data.voucherId = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                        $options.clearForm();
                                      },
                                      text: "Clear form"
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: $data.saveIcon,
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
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Create stock order ")
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
                              onSubmit: $options.checkVoucherValidity,
                              id: "submitForm"
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3" }, [
                                  createVNode("div", { class: "w-full flex items-center px-5" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Voucher ID",
                                        validation: "required",
                                        modelValue: $data.voucherId,
                                        "onUpdate:modelValue": ($event) => $data.voucherId = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                      $options.clearForm();
                                    },
                                    text: "Clear form"
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.saveIcon,
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
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Create stock order ")
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
                            onSubmit: $options.checkVoucherValidity,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3" }, [
                                createVNode("div", { class: "w-full flex items-center px-5" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Voucher ID",
                                      validation: "required",
                                      modelValue: $data.voucherId,
                                      "onUpdate:modelValue": ($event) => $data.voucherId = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  },
                                  text: "Clear form"
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
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
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Create stock order ")
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
                              onSubmit: $options.checkVoucherValidity,
                              id: "submitForm"
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3" }, [
                                  createVNode("div", { class: "w-full flex items-center px-5" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Voucher ID",
                                        validation: "required",
                                        modelValue: $data.voucherId,
                                        "onUpdate:modelValue": ($event) => $data.voucherId = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                      $options.clearForm();
                                    },
                                    text: "Clear form"
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.saveIcon,
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
                                createTextVNode(" Create stock order ")
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
                            onSubmit: $options.checkVoucherValidity,
                            id: "submitForm"
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3" }, [
                                createVNode("div", { class: "w-full flex items-center px-5" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Voucher ID",
                                      validation: "required",
                                      modelValue: $data.voucherId,
                                      "onUpdate:modelValue": ($event) => $data.voucherId = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  },
                                  text: "Clear form"
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/orders/add-dialog/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$2,
    TicketIcon: render$7
  },
  data() {
    return {
      viewIcon: render$1$1,
      show: false,
      editIcon: render$1,
      facility: useFacilityStore(),
      cookie: useCookie("token"),
      loading: false,
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
      issuedDate: "",
      approvedDate: "",
      preparedBy: "",
      preparedDesignation: "",
      preparedSignature: "",
      preparedDate: "",
      certifiedBy: "",
      certifiedDesignation: "",
      certifiedSignature: "",
      certifiedDate: "",
      collectedBy: "",
      collectedDesignation: "",
      collectedSignature: "",
      collectedDate: "",
      verifiedBy: "",
      verifiedDesignation: "",
      verifiedSignature: "",
      verifiedDate: ""
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    async openDialog() {
      await this.init();
      this.handleClick();
    },
    async init() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.getStockOrder(`${this.cookie}`, `${this.data.id}`);
      this.loading = pending;
      if (data.value) {
        this.requisitions = data.value.stock_requisitions;
        this.loading = false;
        data.value.stock_pharmacy_approver_and_issuers.map((item) => {
          if (item.record_type == "issuer") {
            this.issuerName = item.name;
            this.issuerPhone = item.phone_number;
            this.issuerDesignation = item.designation;
            this.issuerSignature = item.signature;
            this.issuedDate = moment(item.created_date).format(dateFormat);
          } else {
            this.approverName = item.name;
            this.approverPhone = item.phone_number;
            this.approverDesignation = item.designation;
            this.approverSignature = item.signature;
            this.approvedDate = moment(item.created_date).format(dateFormat);
          }
        });
        data.value.stock_order_status_trail.map((trail) => {
          if (trail.stock_status.name.toLowerCase() == "draft") {
            this.preparedBy = `${trail.initiator.first_name} ${trail.initiator.last_name}`;
            this.preparedDesignation = "Laboratory";
            this.preparedSignature = trail.initiator.username;
            this.preparedDate = moment(trail.created_date).format(dateFormat);
          } else if (trail.stock_status.name.toLowerCase() == "requested") {
            this.certifiedBy = `${trail.initiator.first_name} ${trail.initiator.last_name}`;
            this.certifiedDesignation = "Laboratory";
            this.certifiedSignature = trail.initiator.username;
            this.certifiedDate = moment(trail.created_date).format(dateFormat);
          } else if (trail.stock_status.name.toLowerCase() == "received") {
            this.collectedBy = `${trail.initiator.first_name} ${trail.initiator.last_name}`;
            this.collectedDesignation = "Laboratory";
            this.collectedSignature = trail.initiator.username;
            this.collectedDate = moment(trail.created_date).format(dateFormat);
          } else if (trail.stock_status.name.toLowerCase() == "approved") {
            this.verifiedBy = `${trail.initiator.first_name} ${trail.initiator.last_name}`;
            this.verifiedDesignation = "Laboratory";
            this.verifiedSignature = trail.initiator.username;
            this.verifiedDate = moment(trail.created_date).format(dateFormat);
          }
        });
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    handleClick() {
      this.show = !this.show;
    }
  }
};
const _imports_1 = "" + buildAssetsURL("hematology_laboratory.da804142.svg");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_CorePrinter = __nuxt_component_1$3;
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_TicketIcon = resolveComponent("TicketIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: () => {
      $options.openDialog();
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
                                if ($props.data.stock_order_status.toLowerCase() === "approved") {
                                  _push6(ssrRenderComponent(_component_CorePrinter, {
                                    id: "print-container",
                                    "print-small-label": false
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  $props.data.stock_order_status.toLowerCase() === "approved" ? (openBlock(), createBlock(_component_CorePrinter, {
                                    key: 0,
                                    id: "print-container",
                                    "print-small-label": false
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="py-5 px-5 space-y-3 print-container" id="print-container"${_scopeId4}><div class="rounded-tr rounded-tl px-5 py-5 flex flex-col items-center"${_scopeId4}><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"${_scopeId4}><h3 class="mt-2 text-xl font-medium uppercase"${_scopeId4}>Republic of Malawi</h3><h3 class="mt-2 text-xl font-medium"${_scopeId4}>Ministry of Health</h3><h3 class="mt-2 text-2xl font-semibold"${_scopeId4}>Requisition and Issue Voucher</h3></div><div class="flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_TicketIcon, { class: "h-5 w-5" }, null, _parent5, _scopeId4));
                          _push5(`<p${_scopeId4}>Voucher Number: <span class="text-lg text-sky-500 font-medium"${_scopeId4}>B</span><strong${_scopeId4}>${ssrInterpolate($props.data.voucher_number)}</strong></p></div><div class="mt-3"${_scopeId4}><table class="w-full"${_scopeId4}><thead clas="w-full border-t border-l border-r"${_scopeId4}><tr class="border-b border-t border-r border-l rounded"${_scopeId4}><th${ssrRenderAttr("colspan", 2)} class="text-left p-2"${_scopeId4}> Requisitions </th></tr><tr class="border-b border-t border-r border-l rounded"${_scopeId4}><th class="px-2 py-2 text-left border-r"${_scopeId4}> Stock Item </th><th class="px-2 py-2 text-left"${_scopeId4}> Quantity Being Requested </th><th class="px-2 py-2 text-left"${_scopeId4}> Quantity Isssued </th><th class="px-2 py-2 text-left"${_scopeId4}> Quantity Collected </th></tr></thead><tbody${_scopeId4}><!--[-->`);
                          ssrRenderList($data.requisitions, (requisition, index2) => {
                            _push5(`<tr class="border-b border-t border-r border-l rounded"${_scopeId4}><td class="px-2 py-2 border-r"${_scopeId4}>${ssrInterpolate(requisition.item.name)}</td><td class="px-2 py-2 border-r"${_scopeId4}>${ssrInterpolate(requisition.quantity_requested)}</td><td class="px-2 py-2 border-r"${_scopeId4}>${ssrInterpolate(requisition.quantity_issued)}</td><td class="px-2 py-2 border-r"${_scopeId4}>${ssrInterpolate(requisition.quantity_collected)}</td></tr>`);
                          });
                          _push5(`<!--]--></tbody></table><div class="rounded border mt-5"${_scopeId4}><div class="flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b"${_scopeId4}><img${ssrRenderAttr("src", _imports_1)} class="w-6 h-6"${_scopeId4}><h3 class="text-lg font-semibold"${_scopeId4}>Preparation of RIV</h3></div><div class="w-full grid grid-cols-2 gap-5 py-5 px-5"${_scopeId4}><div class="col-span-1 flex flex-col space-y-2"${_scopeId4}><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Prepared by: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.preparedBy)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Designation: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.preparedDesignation)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Signature: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.preparedSignature)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Date:</p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.preparedDate)}</span></div></div><div class="col-span-1 flex flex-col space-y-2"${_scopeId4}><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Certified by: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.certifiedBy)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Designation: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.certifiedDesignation)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Signature: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.certifiedSignature)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Date:</p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.certifiedDate)}</span></div></div></div></div><div class="rounded border mt-5"${_scopeId4}><div class="flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b"${_scopeId4}><img${ssrRenderAttr("src", _imports_0$1)} class="w-6 h-6"${_scopeId4}><h3 class="text-lg font-semibold"${_scopeId4}>Pharmacy</h3></div><div class="w-full grid grid-cols-2 gap-5 py-5 px-5"${_scopeId4}><div class="col-span-1 flex flex-col space-y-2"${_scopeId4}><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Issued by: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.issuerName)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Designation: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.issuerDesignation)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Signature: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.issuerSignature)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Date:</p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.issuedDate)}</span></div></div><div class="col-span-1 flex flex-col space-y-2"${_scopeId4}><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Approved by: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.approverName)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Designation: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.approverDesignation)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Signature: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.issuerSignature)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Date:</p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.approvedDate)}</span></div></div></div></div><div class="rounded border mt-5"${_scopeId4}><div class="flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b"${_scopeId4}><img${ssrRenderAttr("src", _imports_1)} class="w-6 h-6"${_scopeId4}><h3 class="text-lg font-semibold"${_scopeId4}>Finalisation of Order</h3></div><div class="w-full grid grid-cols-2 gap-5 py-5 px-5"${_scopeId4}><div class="col-span-1 flex flex-col space-y-2"${_scopeId4}><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Collected by: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.collectedBy)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Designation: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.collectedDesignation)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Signature: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.collectedSignature)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Date:</p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.collectedDate)}</span></div></div><div class="col-span-1 flex flex-col space-y-2"${_scopeId4}><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Verified by: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.verifiedBy)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Designation: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.verifiedDesignation)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Signature: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.verifiedSignature)}</span></div><div class="w-full flex items-center space-x-2"${_scopeId4}><p class="w-72 font-medium"${_scopeId4}>Date:</p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"${_scopeId4}>${ssrInterpolate($data.verifiedDate)}</span></div></div></div></div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  $props.data.stock_order_status.toLowerCase() === "approved" ? (openBlock(), createBlock(_component_CorePrinter, {
                                    key: 0,
                                    id: "print-container",
                                    "print-small-label": false
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", {
                              class: "py-5 px-5 space-y-3 print-container",
                              id: "print-container"
                            }, [
                              createVNode("div", { class: "rounded-tr rounded-tl px-5 py-5 flex flex-col items-center" }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "app-logo",
                                  class: "w-24 h-24 object-cover"
                                }),
                                createVNode("h3", { class: "mt-2 text-xl font-medium uppercase" }, "Republic of Malawi"),
                                createVNode("h3", { class: "mt-2 text-xl font-medium" }, "Ministry of Health"),
                                createVNode("h3", { class: "mt-2 text-2xl font-semibold" }, "Requisition and Issue Voucher")
                              ]),
                              createVNode("div", { class: "flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2" }, [
                                createVNode(_component_TicketIcon, { class: "h-5 w-5" }),
                                createVNode("p", null, [
                                  createTextVNode("Voucher Number: "),
                                  createVNode("span", { class: "text-lg text-sky-500 font-medium" }, "B"),
                                  createVNode("strong", null, toDisplayString($props.data.voucher_number), 1)
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
                                      createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Being Requested "),
                                      createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Isssued "),
                                      createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Collected ")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList($data.requisitions, (requisition, index2) => {
                                      return openBlock(), createBlock("tr", {
                                        key: index2,
                                        class: "border-b border-t border-r border-l rounded"
                                      }, [
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.item.name), 1),
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_requested), 1),
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_issued), 1),
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_collected), 1)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                createVNode("div", { class: "rounded border mt-5" }, [
                                  createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                    createVNode("img", {
                                      src: _imports_1,
                                      class: "w-6 h-6"
                                    }),
                                    createVNode("h3", { class: "text-lg font-semibold" }, "Preparation of RIV")
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Prepared by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedBy), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedDate), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Certified by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedBy), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedDate), 1)
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "rounded border mt-5" }, [
                                  createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                    createVNode("img", {
                                      src: _imports_0$1,
                                      class: "w-6 h-6"
                                    }),
                                    createVNode("h3", { class: "text-lg font-semibold" }, "Pharmacy")
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Issued by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerName), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuedDate), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Approved by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approverName), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approverDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approvedDate), 1)
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "rounded border mt-5" }, [
                                  createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                    createVNode("img", {
                                      src: _imports_1,
                                      class: "w-6 h-6"
                                    }),
                                    createVNode("h3", { class: "text-lg font-semibold" }, "Finalisation of Order")
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Collected by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedBy), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedDate), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Verified by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedBy), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedDate), 1)
                                      ])
                                    ])
                                  ])
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
                                $props.data.stock_order_status.toLowerCase() === "approved" ? (openBlock(), createBlock(_component_CorePrinter, {
                                  key: 0,
                                  id: "print-container",
                                  "print-small-label": false
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", {
                            class: "py-5 px-5 space-y-3 print-container",
                            id: "print-container"
                          }, [
                            createVNode("div", { class: "rounded-tr rounded-tl px-5 py-5 flex flex-col items-center" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "app-logo",
                                class: "w-24 h-24 object-cover"
                              }),
                              createVNode("h3", { class: "mt-2 text-xl font-medium uppercase" }, "Republic of Malawi"),
                              createVNode("h3", { class: "mt-2 text-xl font-medium" }, "Ministry of Health"),
                              createVNode("h3", { class: "mt-2 text-2xl font-semibold" }, "Requisition and Issue Voucher")
                            ]),
                            createVNode("div", { class: "flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2" }, [
                              createVNode(_component_TicketIcon, { class: "h-5 w-5" }),
                              createVNode("p", null, [
                                createTextVNode("Voucher Number: "),
                                createVNode("span", { class: "text-lg text-sky-500 font-medium" }, "B"),
                                createVNode("strong", null, toDisplayString($props.data.voucher_number), 1)
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
                                    createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Being Requested "),
                                    createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Isssued "),
                                    createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Collected ")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.requisitions, (requisition, index2) => {
                                    return openBlock(), createBlock("tr", {
                                      key: index2,
                                      class: "border-b border-t border-r border-l rounded"
                                    }, [
                                      createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.item.name), 1),
                                      createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_requested), 1),
                                      createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_issued), 1),
                                      createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_collected), 1)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "rounded border mt-5" }, [
                                createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                  createVNode("img", {
                                    src: _imports_1,
                                    class: "w-6 h-6"
                                  }),
                                  createVNode("h3", { class: "text-lg font-semibold" }, "Preparation of RIV")
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Prepared by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedBy), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedDate), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Certified by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedBy), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedDate), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border mt-5" }, [
                                createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-6 h-6"
                                  }),
                                  createVNode("h3", { class: "text-lg font-semibold" }, "Pharmacy")
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Issued by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerName), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuedDate), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Approved by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approverName), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approverDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approvedDate), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border mt-5" }, [
                                createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                  createVNode("img", {
                                    src: _imports_1,
                                    class: "w-6 h-6"
                                  }),
                                  createVNode("h3", { class: "text-lg font-semibold" }, "Finalisation of Order")
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Collected by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedBy), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedDate), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Verified by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedBy), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedDate), 1)
                                    ])
                                  ])
                                ])
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
                                  $props.data.stock_order_status.toLowerCase() === "approved" ? (openBlock(), createBlock(_component_CorePrinter, {
                                    key: 0,
                                    id: "print-container",
                                    "print-small-label": false
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", {
                              class: "py-5 px-5 space-y-3 print-container",
                              id: "print-container"
                            }, [
                              createVNode("div", { class: "rounded-tr rounded-tl px-5 py-5 flex flex-col items-center" }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "app-logo",
                                  class: "w-24 h-24 object-cover"
                                }),
                                createVNode("h3", { class: "mt-2 text-xl font-medium uppercase" }, "Republic of Malawi"),
                                createVNode("h3", { class: "mt-2 text-xl font-medium" }, "Ministry of Health"),
                                createVNode("h3", { class: "mt-2 text-2xl font-semibold" }, "Requisition and Issue Voucher")
                              ]),
                              createVNode("div", { class: "flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2" }, [
                                createVNode(_component_TicketIcon, { class: "h-5 w-5" }),
                                createVNode("p", null, [
                                  createTextVNode("Voucher Number: "),
                                  createVNode("span", { class: "text-lg text-sky-500 font-medium" }, "B"),
                                  createVNode("strong", null, toDisplayString($props.data.voucher_number), 1)
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
                                      createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Being Requested "),
                                      createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Isssued "),
                                      createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Collected ")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList($data.requisitions, (requisition, index2) => {
                                      return openBlock(), createBlock("tr", {
                                        key: index2,
                                        class: "border-b border-t border-r border-l rounded"
                                      }, [
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.item.name), 1),
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_requested), 1),
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_issued), 1),
                                        createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_collected), 1)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                createVNode("div", { class: "rounded border mt-5" }, [
                                  createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                    createVNode("img", {
                                      src: _imports_1,
                                      class: "w-6 h-6"
                                    }),
                                    createVNode("h3", { class: "text-lg font-semibold" }, "Preparation of RIV")
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Prepared by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedBy), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedDate), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Certified by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedBy), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedDate), 1)
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "rounded border mt-5" }, [
                                  createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                    createVNode("img", {
                                      src: _imports_0$1,
                                      class: "w-6 h-6"
                                    }),
                                    createVNode("h3", { class: "text-lg font-semibold" }, "Pharmacy")
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Issued by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerName), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuedDate), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Approved by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approverName), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approverDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approvedDate), 1)
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "rounded border mt-5" }, [
                                  createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                    createVNode("img", {
                                      src: _imports_1,
                                      class: "w-6 h-6"
                                    }),
                                    createVNode("h3", { class: "text-lg font-semibold" }, "Finalisation of Order")
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Collected by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedBy), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedDate), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Verified by: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedBy), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedDesignation), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedSignature), 1)
                                      ]),
                                      createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                        createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                        createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedDate), 1)
                                      ])
                                    ])
                                  ])
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
                                $props.data.stock_order_status.toLowerCase() === "approved" ? (openBlock(), createBlock(_component_CorePrinter, {
                                  key: 0,
                                  id: "print-container",
                                  "print-small-label": false
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", {
                            class: "py-5 px-5 space-y-3 print-container",
                            id: "print-container"
                          }, [
                            createVNode("div", { class: "rounded-tr rounded-tl px-5 py-5 flex flex-col items-center" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "app-logo",
                                class: "w-24 h-24 object-cover"
                              }),
                              createVNode("h3", { class: "mt-2 text-xl font-medium uppercase" }, "Republic of Malawi"),
                              createVNode("h3", { class: "mt-2 text-xl font-medium" }, "Ministry of Health"),
                              createVNode("h3", { class: "mt-2 text-2xl font-semibold" }, "Requisition and Issue Voucher")
                            ]),
                            createVNode("div", { class: "flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2" }, [
                              createVNode(_component_TicketIcon, { class: "h-5 w-5" }),
                              createVNode("p", null, [
                                createTextVNode("Voucher Number: "),
                                createVNode("span", { class: "text-lg text-sky-500 font-medium" }, "B"),
                                createVNode("strong", null, toDisplayString($props.data.voucher_number), 1)
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
                                    createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Being Requested "),
                                    createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Isssued "),
                                    createVNode("th", { class: "px-2 py-2 text-left" }, " Quantity Collected ")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.requisitions, (requisition, index2) => {
                                    return openBlock(), createBlock("tr", {
                                      key: index2,
                                      class: "border-b border-t border-r border-l rounded"
                                    }, [
                                      createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.item.name), 1),
                                      createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_requested), 1),
                                      createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_issued), 1),
                                      createVNode("td", { class: "px-2 py-2 border-r" }, toDisplayString(requisition.quantity_collected), 1)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "rounded border mt-5" }, [
                                createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                  createVNode("img", {
                                    src: _imports_1,
                                    class: "w-6 h-6"
                                  }),
                                  createVNode("h3", { class: "text-lg font-semibold" }, "Preparation of RIV")
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Prepared by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedBy), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.preparedDate), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Certified by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedBy), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.certifiedDate), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border mt-5" }, [
                                createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-6 h-6"
                                  }),
                                  createVNode("h3", { class: "text-lg font-semibold" }, "Pharmacy")
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Issued by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerName), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuedDate), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Approved by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approverName), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approverDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.issuerSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.approvedDate), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border mt-5" }, [
                                createVNode("div", { class: "flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b" }, [
                                  createVNode("img", {
                                    src: _imports_1,
                                    class: "w-6 h-6"
                                  }),
                                  createVNode("h3", { class: "text-lg font-semibold" }, "Finalisation of Order")
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-2 gap-5 py-5 px-5" }, [
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Collected by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedBy), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.collectedDate), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "col-span-1 flex flex-col space-y-2" }, [
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Verified by: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedBy), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Designation: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedDesignation), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Signature: "),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedSignature), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center space-x-2" }, [
                                      createVNode("p", { class: "w-72 font-medium" }, "Date:"),
                                      createVNode("span", { class: "w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300" }, toDisplayString($data.verifiedDate), 1)
                                    ])
                                  ])
                                ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/orders/view-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Stock Orders`
    });
  },
  data() {
    return {
      header: "Stock Orders",
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
        { text: "Voucher Number", value: "voucher_number", sortable: true },
        { text: "Requisitions", value: "requisitions" },
        { text: "Status", value: "stock_order_status" },
        { text: "Date Created", value: "created_date" },
        { text: "actions", value: "actions" }
      ],
      statuses: new Array(),
      statusSelected: { name: "-- select status -- ", id: 0 },
      orders: new Array(),
      printIcon: render,
      editIcon: render$1,
      clearIcon: render$2,
      loading: false,
      statusLoading: false,
      cookie: useCookie("token"),
      serverItemsLength: 0,
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "voucher_number"
      }
    };
  },
  created() {
    this.init();
    this.getOrderStatuses();
  },
  computed: {
    orderStatuses() {
      const statuses = [
        {
          name: "Edit",
          show: "pending",
          icon: render$1
        },
        {
          name: "Verify",
          show: "draft",
          icon: render$8
        },
        {
          name: "Receive",
          show: "requested",
          icon: render$9
        },
        {
          name: "Approve",
          show: "received",
          icon: render$a
        }
      ];
      return statuses;
    }
  },
  methods: {
    async getOrderStatuses() {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockOrderStatus(`${this.cookie}`);
      if (data.value) {
        data.value.map((value) => {
          this.statuses.push({ name: value.name, id: value.id });
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async init() {
      this.loading = true;
      const stockModule = new StockModule$1();
      let stock_status_id = this.statusSelected.id == 0 ? "" : this.statusSelected.id;
      const { page, rowsPerPage } = this.serverOptions;
      let pagination = `page=${page}&per_page=${rowsPerPage}`;
      const { data, error, pending } = await stockModule.getStockOrder(`${this.cookie}`, "", this.search, `${stock_status_id}`, pagination);
      this.loading = pending;
      if (data.value) {
        this.orders = data.value.data.map((order) => ({
          ...order,
          requisitions: order.stock_requisitions.length,
          created_date: moment(order.created_date).format(dateFormat)
        }));
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    clearFilter() {
      this.statuses.push({ name: "-- select status -- ", id: 0 });
      this.statusSelected = this.statuses[this.statuses.length - 1];
      this.init();
    },
    checkStatus(status, orderStatuses) {
      if (status.show.toLowerCase() == orderStatuses.stock_order_status.toLowerCase()) {
        return true;
      }
      return false;
    },
    verifyStockOrder(orderId, voucher_number) {
      this.$router.push(`/stock-management/orders/request/${voucher_number}?order_id=${orderId}`);
    },
    receiveStockOrder(orderId, voucher_number) {
      this.$router.push(`/stock-management/orders/receive/${voucher_number}?order_id=${orderId}`);
    },
    approveStockOrder(orderId, voucher_number) {
      this.$router.push(`/stock-management/orders/approve/${voucher_number}?order_id=${orderId}`);
    },
    rejectStockOrder(orderId, voucher_number) {
      this.$router.push(`/stock-management/orders/reject/${voucher_number}?order_id=${orderId}`);
    },
    async changeStatus(status) {
      this.statusLoading = true;
      const stockModule = new StockModule$1();
      const params = {
        route: "",
        status
      };
      const { data, error, pending } = await stockModule.updateStockOrderStatus(`${this.cookie}`, params);
      this.statusLoading = pending;
      if (data.value) {
        this.init();
        this.statusLoading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.statusLoading = false;
      }
    },
    processStockOrder(status, item) {
      if (status === "Verify") {
        this.verifyStockOrder(item.id, item.voucher_number);
      } else if (status === "Receive") {
        this.receiveStockOrder(item.id, item.voucher_number);
      } else if (status === "Approve") {
        this.approveStockOrder(item.id, item.voucher_number);
      } else if (status === "Reject") {
        this.rejectStockOrder(item.id, item.voucher_number);
      }
    }
  },
  watch: {
    search() {
      this.init();
    },
    statusSelected: {
      handler() {
        this.init();
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$3;
  const _component_StockOrdersAddDialog = __nuxt_component_1;
  const _component_CoreDropdown = __nuxt_component_0;
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_CoreSearchBar = __nuxt_component_1$1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_StockOrdersViewDialog = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_StockOrdersAddDialog, null, null, _parent));
  _push(`</div></div><div class="flex items-center justify-between"><div class="flex items-center space-x-2">`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.statuses,
    modelValue: $data.statusSelected,
    "onUpdate:modelValue": ($event) => $data.statusSelected = $event
  }, null, _parent));
  if ($data.statusSelected.id != 0) {
    _push(ssrRenderComponent(_component_CoreActionButton, {
      text: "Clear filter",
      color: "warning",
      icon: $data.clearIcon,
      click: () => {
        $options.clearFilter();
      },
      loading: $data.loading
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    "onUpdate:search": ($event) => $data.search = $event
  }, null, _parent));
  _push(`</div><div class="mt-10">`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    data: $data.orders,
    headers: $data.headers,
    loading: $data.loading,
    "search-field": "voucher_number",
    "search-value": $data.search,
    serverItemsLength: $data.serverItemsLength,
    serverOptions: $data.serverOptions,
    onUpdate: $options.init
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_StockOrdersViewDialog, { data: item }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList($options.orderStatuses, (status, index2) => {
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            key: index2,
            style: $options.checkStatus(status, item) ? null : { display: "none" },
            text: status.name,
            color: status.name == "Reject" ? "error" : "success",
            icon: status.icon,
            click: () => {
              $options.processStockOrder(status.name, item);
            }
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_StockOrdersViewDialog, { data: item }, null, 8, ["data"]),
            (openBlock(true), createBlock(Fragment, null, renderList($options.orderStatuses, (status, index2) => {
              return withDirectives((openBlock(), createBlock(_component_CoreActionButton, {
                key: index2,
                text: status.name,
                color: status.name == "Reject" ? "error" : "success",
                icon: status.icon,
                click: () => {
                  $options.processStockOrder(status.name, item);
                }
              }, null, 8, ["text", "color", "icon", "click"])), [
                [vShow, $options.checkStatus(status, item)]
              ]);
            }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-148ae856.mjs.map
