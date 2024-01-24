import { _ as _sfc_main$2 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_1 } from './SearchBar-0bf20ba4.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { _ as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { r as render$2 } from './XMarkIcon-170c776f.mjs';
import { r as render$3 } from './PrinterIcon-02ac6ae4.mjs';
import { a as render$1, r as render$4 } from './PencilSquareIcon-77446728.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withDirectives, vModelRadio } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { r as render } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import './nuxt-link-149f0ed2.mjs';
import 'ufo';
import './HomeIcon-299b993b.mjs';
import './Loader-86943425.mjs';
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

const _sfc_main$1 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$2
  },
  data() {
    return {
      printIcon: render$3,
      show: false,
      editIcon: render$4,
      selectedPrinter: ""
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
    color: "success",
    text: "Print",
    icon: $data.printIcon
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
                                _push6(` Select Printer `);
                              } else {
                                return [
                                  createTextVNode(" Select Printer ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="mt-2 space-y-3 px-5"${_scopeId4}><div id="radio-group" class="mt-2 flex flex-col space-y-2"${_scopeId4}><label class="flex items-center"${_scopeId4}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selectedPrinter, "printer1")) ? " checked" : ""} value="printer1" class="mr-2"${_scopeId4}> Printer 1 </label><label class="flex items-center"${_scopeId4}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selectedPrinter, "printer2")) ? " checked" : ""} value="printer2" class="mr-2"${_scopeId4}> Printer 2 </label><label class="flex items-center"${_scopeId4}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selectedPrinter, "printer3")) ? " checked" : ""} value="printer3" class="mr-2"${_scopeId4}> Printer 3 </label><label class="flex items-center"${_scopeId4}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selectedPrinter, "printer4")) ? " checked" : ""} value="printer4" class="mr-2"${_scopeId4}> Printer 4 </label></div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            icon: $data.printIcon,
                            text: "Continue",
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
                                  createTextVNode(" Select Printer ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                              createVNode("div", {
                                id: "radio-group",
                                class: "mt-2 flex flex-col space-y-2"
                              }, [
                                createVNode("label", { class: "flex items-center" }, [
                                  withDirectives(createVNode("input", {
                                    type: "radio",
                                    "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                    value: "printer1",
                                    class: "mr-2"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelRadio, $data.selectedPrinter]
                                  ]),
                                  createTextVNode(" Printer 1 ")
                                ]),
                                createVNode("label", { class: "flex items-center" }, [
                                  withDirectives(createVNode("input", {
                                    type: "radio",
                                    "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                    value: "printer2",
                                    class: "mr-2"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelRadio, $data.selectedPrinter]
                                  ]),
                                  createTextVNode(" Printer 2 ")
                                ]),
                                createVNode("label", { class: "flex items-center" }, [
                                  withDirectives(createVNode("input", {
                                    type: "radio",
                                    "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                    value: "printer3",
                                    class: "mr-2"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelRadio, $data.selectedPrinter]
                                  ]),
                                  createTextVNode(" Printer 3 ")
                                ]),
                                createVNode("label", { class: "flex items-center" }, [
                                  withDirectives(createVNode("input", {
                                    type: "radio",
                                    "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                    value: "printer4",
                                    class: "mr-2"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelRadio, $data.selectedPrinter]
                                  ]),
                                  createTextVNode(" Printer 4 ")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                              createVNode(_component_CoreActionButton, {
                                icon: $data.printIcon,
                                text: "Continue",
                                color: "success"
                              }, null, 8, ["icon"])
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
                                createTextVNode(" Select Printer ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                            createVNode("div", {
                              id: "radio-group",
                              class: "mt-2 flex flex-col space-y-2"
                            }, [
                              createVNode("label", { class: "flex items-center" }, [
                                withDirectives(createVNode("input", {
                                  type: "radio",
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  value: "printer1",
                                  class: "mr-2"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, $data.selectedPrinter]
                                ]),
                                createTextVNode(" Printer 1 ")
                              ]),
                              createVNode("label", { class: "flex items-center" }, [
                                withDirectives(createVNode("input", {
                                  type: "radio",
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  value: "printer2",
                                  class: "mr-2"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, $data.selectedPrinter]
                                ]),
                                createTextVNode(" Printer 2 ")
                              ]),
                              createVNode("label", { class: "flex items-center" }, [
                                withDirectives(createVNode("input", {
                                  type: "radio",
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  value: "printer3",
                                  class: "mr-2"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, $data.selectedPrinter]
                                ]),
                                createTextVNode(" Printer 3 ")
                              ]),
                              createVNode("label", { class: "flex items-center" }, [
                                withDirectives(createVNode("input", {
                                  type: "radio",
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  value: "printer4",
                                  class: "mr-2"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, $data.selectedPrinter]
                                ]),
                                createTextVNode(" Printer 4 ")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                            createVNode(_component_CoreActionButton, {
                              icon: $data.printIcon,
                              text: "Continue",
                              color: "success"
                            }, null, 8, ["icon"])
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
                                  createTextVNode(" Select Printer ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                              createVNode("div", {
                                id: "radio-group",
                                class: "mt-2 flex flex-col space-y-2"
                              }, [
                                createVNode("label", { class: "flex items-center" }, [
                                  withDirectives(createVNode("input", {
                                    type: "radio",
                                    "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                    value: "printer1",
                                    class: "mr-2"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelRadio, $data.selectedPrinter]
                                  ]),
                                  createTextVNode(" Printer 1 ")
                                ]),
                                createVNode("label", { class: "flex items-center" }, [
                                  withDirectives(createVNode("input", {
                                    type: "radio",
                                    "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                    value: "printer2",
                                    class: "mr-2"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelRadio, $data.selectedPrinter]
                                  ]),
                                  createTextVNode(" Printer 2 ")
                                ]),
                                createVNode("label", { class: "flex items-center" }, [
                                  withDirectives(createVNode("input", {
                                    type: "radio",
                                    "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                    value: "printer3",
                                    class: "mr-2"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelRadio, $data.selectedPrinter]
                                  ]),
                                  createTextVNode(" Printer 3 ")
                                ]),
                                createVNode("label", { class: "flex items-center" }, [
                                  withDirectives(createVNode("input", {
                                    type: "radio",
                                    "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                    value: "printer4",
                                    class: "mr-2"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelRadio, $data.selectedPrinter]
                                  ]),
                                  createTextVNode(" Printer 4 ")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                              createVNode(_component_CoreActionButton, {
                                icon: $data.printIcon,
                                text: "Continue",
                                color: "success"
                              }, null, 8, ["icon"])
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
                                createTextVNode(" Select Printer ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                            createVNode("div", {
                              id: "radio-group",
                              class: "mt-2 flex flex-col space-y-2"
                            }, [
                              createVNode("label", { class: "flex items-center" }, [
                                withDirectives(createVNode("input", {
                                  type: "radio",
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  value: "printer1",
                                  class: "mr-2"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, $data.selectedPrinter]
                                ]),
                                createTextVNode(" Printer 1 ")
                              ]),
                              createVNode("label", { class: "flex items-center" }, [
                                withDirectives(createVNode("input", {
                                  type: "radio",
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  value: "printer2",
                                  class: "mr-2"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, $data.selectedPrinter]
                                ]),
                                createTextVNode(" Printer 2 ")
                              ]),
                              createVNode("label", { class: "flex items-center" }, [
                                withDirectives(createVNode("input", {
                                  type: "radio",
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  value: "printer3",
                                  class: "mr-2"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, $data.selectedPrinter]
                                ]),
                                createTextVNode(" Printer 3 ")
                              ]),
                              createVNode("label", { class: "flex items-center" }, [
                                withDirectives(createVNode("input", {
                                  type: "radio",
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  value: "printer4",
                                  class: "mr-2"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, $data.selectedPrinter]
                                ]),
                                createTextVNode(" Printer 4 ")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                            createVNode(_component_CoreActionButton, {
                              icon: $data.printIcon,
                              text: "Continue",
                              color: "success"
                            }, null, 8, ["icon"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/worksheets/print-results/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      dateRange: new Array(),
      page: "Worksheets",
      search: "",
      worksheets: [
        {
          id: 1,
          worksheet_id: 1001,
          device: "Blood analyzer",
          status: "completed",
          total_tests: 50,
          created_at: "2022-01-01T09:00:00Z",
          started_at: "2022-01-01T10:00:00Z",
          completed_at: "2022-01-01T12:00:00Z",
          verified_at: "2022-01-01T13:00:00Z"
        },
        {
          id: 2,
          worksheet_id: 1001,
          device: "Urine analyzer",
          status: "verified",
          total_tests: 25,
          created_at: "2022-01-02T09:00:00Z",
          started_at: "2022-01-02T10:00:00Z",
          completed_at: "2022-01-02T11:30:00Z",
          verified_at: "2022-01-02T12:00:00Z"
        },
        {
          id: 3,
          worksheet_id: 1002,
          device: "Microscope",
          status: "started",
          total_tests: 100,
          created_at: "2022-01-03T09:00:00Z",
          started_at: "2022-01-03T10:30:00Z",
          completed_at: "2022-01-03T10:30:00Z",
          verified_at: "2022-01-03T10:30:00Z"
        },
        {
          id: 4,
          worksheet_id: 1002,
          device: "Blood analyzer",
          status: "created",
          total_tests: 50,
          created_at: "2022-01-04T09:00:00Z",
          started_at: "2022-01-03T10:30:00Z",
          completed_at: "2022-01-03T10:30:00Z",
          verified_at: "2022-01-03T10:30:00Z"
        },
        {
          id: 5,
          worksheet_id: 1003,
          device: "Urine analyzer",
          status: "completed",
          total_tests: 25,
          created_at: "2022-01-05T09:00:00Z",
          started_at: "2022-01-05T10:00:00Z",
          completed_at: "2022-01-05T11:00:00Z",
          verified_at: "2022-01-05T12:00:00Z"
        },
        {
          id: 6,
          worksheet_id: 1003,
          device: "Microscope",
          status: "verified",
          total_tests: 100,
          created_at: "2022-01-06T09:00:00Z",
          started_at: "2022-01-06T10:30:00Z",
          completed_at: "2022-01-06T12:00:00Z",
          verified_at: "2022-01-06T13:00:00Z"
        },
        {
          id: 7,
          worksheet_id: 1004,
          device: "Blood analyzer",
          status: "started",
          total_tests: 50,
          created_at: "2022-01-07T09:00:00Z",
          started_at: "2022-01-07T10:00:00Z",
          completed_at: "2022-01-03T10:30:00Z",
          verified_at: "2022-01-03T10:30:00Z"
        }
      ],
      pages: [
        {
          name: "Home",
          link: "/home"
        }
      ],
      viewIcon: render$1
    };
  },
  components: { MagnifyingGlassIcon: render },
  setup() {
    const headers = [
      { text: "ID", value: "id", sortable: true },
      { text: "Worksheet No", value: "worksheet_id", sortable: true },
      { text: "Device", value: "device" },
      { text: "Status", value: "status" },
      { text: "Total Tests", value: "total_tests" },
      { text: "Created", value: "created_at" },
      { text: "Started", value: "started_at" },
      { text: "Completed", value: "completed_at" },
      { text: "Verified", value: "verified_at" },
      { text: "Actions", value: "actions" }
    ];
    return { headers };
  },
  methods: {
    handleClick(id) {
      this.$router.push(`/worksheets/${id}`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$2;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreSearchBar = __nuxt_component_1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_WorksheetsPrintResults = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.page)}</h3></div><div class="flex justify-between w-full py-2 mb-2"><div class="flex items-center space-x-3"><div class="w-96">`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: "Select start & end date to filter worksheets",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    range: "",
    "as-single": "",
    modelValue: $data.dateRange,
    "onUpdate:modelValue": ($event) => $data.dateRange = $event
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_CoreSearchBar, { search: $data.search }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $setup.headers,
    data: $data.worksheets
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          click: () => {
          },
          onClick: ($event) => $options.handleClick(item.worksheet_id),
          color: "primary",
          text: "View",
          icon: $data.viewIcon
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_WorksheetsPrintResults, { data: item }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_CoreActionButton, {
              click: () => {
              },
              onClick: ($event) => $options.handleClick(item.worksheet_id),
              color: "primary",
              text: "View",
              icon: $data.viewIcon
            }, null, 8, ["onClick", "icon"]),
            createVNode(_component_WorksheetsPrintResults, { data: item }, null, 8, ["data"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/worksheets/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-523aedb6.mjs.map
