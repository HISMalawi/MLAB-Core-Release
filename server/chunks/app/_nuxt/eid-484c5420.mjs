import { _ as __nuxt_component_0 } from './Breadcrumb-058f5536.mjs';
import { _ as _export_sfc, b as __nuxt_component_0$2 } from '../server.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { r as render$5 } from './QrCodeIcon-566a836e.mjs';
import { r as render$4 } from './XMarkIcon-170c776f.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, withDirectives, vModelText, Fragment, renderList, createCommentVNode, vModelRadio, createTextVNode, toDisplayString, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './Stepper-f7a86a20.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-15d8abe8.mjs';
import { c as constants, a as dateRange } from './constants-353d90a1.mjs';
import { r as render$1$1, a as render$2 } from './ChevronRightIcon-400fbc51.mjs';
import { r as render$3 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$6 } from './InformationCircleIcon-68986861.mjs';
import './nuxt-link-7a607302.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './HomeIcon-299b993b.mjs';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
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

function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", { d: "M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" })
  ]);
}
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z",
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
    QrCodeIcon: render$5,
    XMarkIcon: render$4
  },
  data() {
    return {
      open: false,
      saveIcon: render$1
    };
  },
  methods: {
    changeVisibility() {
      this.open = !this.open;
    },
    getOrder(value) {
      this.open = value;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_QrCodeIcon = resolveComponent("QrCodeIcon");
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_CoreActionButton = __nuxt_component_0$2;
  _push(`<!--[--><div><div class="flex items-center border rounded"><div class="border-r px-2 p-2 bg-gray-50">`);
  _push(ssrRenderComponent(_component_QrCodeIcon, { class: "w-5 h-5" }, null, _parent));
  _push(`</div></div></div>`);
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: $data.open,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          onClose: $options.changeVisibility,
          class: "relative z-10",
          static: ""
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
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="bg-gray-50 border-b px-2 py-2 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Verify EID Remote Order `);
                              } else {
                                return [
                                  createTextVNode(" Verify EID Remote Order ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button class="focus:outline-none"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class=""${_scopeId4}><div class="px-4 py-4 w-full grid grid-cols-2 gap-2"${_scopeId4}><div class="space-y-2 flex flex-col items-start"${_scopeId4}><label class="font-medium text-left"${_scopeId4}>Surname</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId4}></div><div class="space-y-2 flex flex-col items-start"${_scopeId4}><label class="font-medium"${_scopeId4}>First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId4}></div><div class="space-y-2 flex flex-col items-start"${_scopeId4}><label class="font-medium"${_scopeId4}>First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId4}></div><div class="space-y-2 flex flex-col items-start"${_scopeId4}><label class="font-medium"${_scopeId4}>First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId4}></div><div class="space-y-2 flex flex-col items-start"${_scopeId4}><label class="font-medium"${_scopeId4}>First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId4}></div><div class="space-y-2 flex flex-col items-start"${_scopeId4}><label class="font-medium"${_scopeId4}>First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId4}></div><div class="space-y-2 flex flex-col items-start"${_scopeId4}><label class="font-medium"${_scopeId4}>First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId4}></div><div class="space-y-2 flex flex-col items-start"${_scopeId4}><label class="font-medium"${_scopeId4}>First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId4}></div><div class="space-y-2 flex flex-col items-start"${_scopeId4}><label class="font-medium"${_scopeId4}>First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId4}></div><div class="space-y-2 flex flex-col items-start"${_scopeId4}><label class="font-medium"${_scopeId4}>First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId4}></div></div><div class="flex space-x-3 items-center justify-end mt-5 border-t px-3 py-2 bg-gray-50"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            text: "Save",
                            icon: $data.saveIcon,
                            color: "primary"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            text: "Save",
                            icon: $data.saveIcon,
                            color: "primary"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            text: "Save",
                            icon: $data.saveIcon,
                            color: "primary"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "bg-gray-50 border-b px-2 py-2 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg font-medium leading-6 text-gray-900"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Verify EID Remote Order ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", {
                                onClick: $options.changeVisibility,
                                class: "focus:outline-none"
                              }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "" }, [
                              createVNode("div", { class: "px-4 py-4 w-full grid grid-cols-2 gap-2" }, [
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium text-left" }, "Surname"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ])
                              ]),
                              createVNode("div", { class: "flex space-x-3 items-center justify-end mt-5 border-t px-3 py-2 bg-gray-50" }, [
                                createVNode(_component_CoreActionButton, {
                                  text: "Save",
                                  icon: $data.saveIcon,
                                  color: "primary"
                                }, null, 8, ["icon"]),
                                createVNode(_component_CoreActionButton, {
                                  text: "Save",
                                  icon: $data.saveIcon,
                                  color: "primary"
                                }, null, 8, ["icon"]),
                                createVNode(_component_CoreActionButton, {
                                  text: "Save",
                                  icon: $data.saveIcon,
                                  color: "primary"
                                }, null, 8, ["icon"])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "bg-gray-50 border-b px-2 py-2 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Verify EID Remote Order ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", {
                              onClick: $options.changeVisibility,
                              class: "focus:outline-none"
                            }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "" }, [
                            createVNode("div", { class: "px-4 py-4 w-full grid grid-cols-2 gap-2" }, [
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium text-left" }, "Surname"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex space-x-3 items-center justify-end mt-5 border-t px-3 py-2 bg-gray-50" }, [
                              createVNode(_component_CoreActionButton, {
                                text: "Save",
                                icon: $data.saveIcon,
                                color: "primary"
                              }, null, 8, ["icon"]),
                              createVNode(_component_CoreActionButton, {
                                text: "Save",
                                icon: $data.saveIcon,
                                color: "primary"
                              }, null, 8, ["icon"]),
                              createVNode(_component_CoreActionButton, {
                                text: "Save",
                                icon: $data.saveIcon,
                                color: "primary"
                              }, null, 8, ["icon"])
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
                        createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-gray-50 border-b px-2 py-2 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg font-medium leading-6 text-gray-900"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Verify EID Remote Order ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", {
                                onClick: $options.changeVisibility,
                                class: "focus:outline-none"
                              }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "" }, [
                              createVNode("div", { class: "px-4 py-4 w-full grid grid-cols-2 gap-2" }, [
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium text-left" }, "Surname"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ]),
                                createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                  createVNode("label", { class: "font-medium" }, "First Name"),
                                  createVNode("input", {
                                    type: "text",
                                    class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                  })
                                ])
                              ]),
                              createVNode("div", { class: "flex space-x-3 items-center justify-end mt-5 border-t px-3 py-2 bg-gray-50" }, [
                                createVNode(_component_CoreActionButton, {
                                  text: "Save",
                                  icon: $data.saveIcon,
                                  color: "primary"
                                }, null, 8, ["icon"]),
                                createVNode(_component_CoreActionButton, {
                                  text: "Save",
                                  icon: $data.saveIcon,
                                  color: "primary"
                                }, null, 8, ["icon"]),
                                createVNode(_component_CoreActionButton, {
                                  text: "Save",
                                  icon: $data.saveIcon,
                                  color: "primary"
                                }, null, 8, ["icon"])
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
            onClose: $options.changeVisibility,
            class: "relative z-10",
            static: ""
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "bg-gray-50 border-b px-2 py-2 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Verify EID Remote Order ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", {
                              onClick: $options.changeVisibility,
                              class: "focus:outline-none"
                            }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "" }, [
                            createVNode("div", { class: "px-4 py-4 w-full grid grid-cols-2 gap-2" }, [
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium text-left" }, "Surname"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ]),
                              createVNode("div", { class: "space-y-2 flex flex-col items-start" }, [
                                createVNode("label", { class: "font-medium" }, "First Name"),
                                createVNode("input", {
                                  type: "text",
                                  class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex space-x-3 items-center justify-end mt-5 border-t px-3 py-2 bg-gray-50" }, [
                              createVNode(_component_CoreActionButton, {
                                text: "Save",
                                icon: $data.saveIcon,
                                color: "primary"
                              }, null, 8, ["icon"]),
                              createVNode(_component_CoreActionButton, {
                                text: "Save",
                                icon: $data.saveIcon,
                                color: "primary"
                              }, null, 8, ["icon"]),
                              createVNode(_component_CoreActionButton, {
                                text: "Save",
                                icon: $data.saveIcon,
                                color: "primary"
                              }, null, 8, ["icon"])
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
          }, 8, ["onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/eid/remote-order/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      leftIcon: render$1$1,
      rightIcon: render$2,
      saveIcon: render$3,
      clearIcon: render,
      rejectIcon: render$4,
      dateFrom: new Array(),
      artInitiationDate: "",
      surname: "",
      firstname: "",
      dateOfBirth: "",
      search: "",
      dateSampleDrawn: "",
      genderSelected: { name: "Male" },
      gender: [
        {
          name: "Male"
        },
        {
          name: "Female Non-Preg./ Bf."
        },
        {
          name: "Female Pregnant"
        },
        {
          name: "Female Breastfeeding"
        }
      ],
      patientID: new Array(12).fill(""),
      htcProviderId: new Array(10).fill(""),
      gurdianPhone: "",
      selectedDistrict: { name: "Lilongwe" },
      districts: [
        { name: "Blantyre" },
        { name: "Lilongwe" },
        { name: "Mzuzu" },
        { name: "Zomba" },
        { name: "Mchinji" },
        { name: "Dedza" },
        { name: "Nkhotakota" },
        { name: "Nsanje" },
        { name: "Salima" },
        { name: "Karonga" }
      ],
      selectedFacility: { name: "Queen Elizabeth Central Hospital" },
      facilities: [
        { name: "Kamuzu Central Hospital", city: "Lilongwe" },
        { name: "Queen Elizabeth Central Hospital", city: "Blantyre" },
        { name: "Mzuzu Central Hospital", city: "Mzuzu" },
        { name: "Zomba Central Hospital", city: "Zomba" },
        { name: "Dedza District Hospital", city: "Dedza" },
        { name: "Nkhotakota District Hospital", city: "Nkhotakota" },
        { name: "Mulanje District Hospital", city: "Mulanje" },
        { name: "Balaka District Hospital", city: "Balaka" },
        { name: "Salima District Hospital", city: "Salima" },
        { name: "Machinga District Hospital", city: "Machinga" }
      ],
      reasonForTest: "",
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Sample Entry",
          link: "#"
        }
      ],
      regimens: {
        one: [
          {
            value: "0P"
          },
          {
            value: "2P"
          },
          {
            value: "4P"
          },
          {
            value: "9P"
          },
          {
            value: "11P"
          },
          {
            value: "14P"
          },
          {
            value: "15P"
          },
          {
            value: "16P"
          }
        ],
        two: [
          {
            value: "0A"
          },
          {
            value: "2A"
          },
          {
            value: "4A"
          },
          {
            value: "5A"
          },
          {
            value: "6A"
          },
          {
            value: "7A"
          },
          {
            value: "8A"
          },
          {
            value: "9A"
          },
          {
            value: "10A"
          },
          {
            value: "11A"
          },
          {
            value: "12A"
          },
          {
            value: "13A"
          },
          {
            value: "14A"
          },
          {
            value: "15A"
          },
          {
            value: "NS"
          }
        ]
      },
      selectedRegimen: "",
      sampleType: "",
      collectorSurname: "",
      collectorFirstname: "",
      collectorPhone: ""
    };
  },
  components: { QrCodeIcon: render$5, InformationCircleIcon: render$6 },
  methods: {
    handlePatientIdInput(event, index) {
      if (event.target instanceof HTMLInputElement && event.target.value.length === 1 && index < this.patientID.length - 1) {
        const nextInput = this.$refs["input" + (index + 1)];
        if (nextInput.length > 0) {
          nextInput[0].focus();
        }
      }
    },
    handleHTCProviderIdInput(event, index) {
      if (event.target instanceof HTMLInputElement && event.target.value.length === 1 && index < this.htcProviderId.length - 1) {
        const nextInput = this.$refs["input" + (index + 1)];
        if (nextInput.length > 0) {
          nextInput[0].focus();
        }
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_EidRemoteOrder = __nuxt_component_1;
  const _component_CoreStepper = __nuxt_component_1$1;
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CorePhonePicker = resolveComponent("CorePhonePicker");
  const _component_InformationCircleIcon = resolveComponent("InformationCircleIcon");
  const _component_CoreActionButton = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex justify-between w-full px-2 py-2 mb-2 mt-3"><div class="flex items-center space-x-3"><h3 class="text-2xl font-semibold">New Early Infant Diagnosis Entry</h3></div>`);
  _push(ssrRenderComponent(_component_EidRemoteOrder, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CoreStepper, { steps: 4 }, {
    default: withCtx(({ step }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (step === 1) {
          _push2(`<div${_scopeId}><div class="rounded border"${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"${_scopeId}> Section 1: Health Facility Information </div><div${_scopeId}><div class="w-full flex items-center px-5 space-x-3 py-5"${_scopeId}><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>District</label>`);
          _push2(ssrRenderComponent(_component_CoreDropdown, {
            items: $data.districts,
            "model-value": $data.selectedDistrict
          }, null, _parent2, _scopeId));
          _push2(`</div><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Facility</label>`);
          _push2(ssrRenderComponent(_component_CoreDropdown, {
            items: $data.facilities,
            "model-value": $data.selectedFacility
          }, null, _parent2, _scopeId));
          _push2(`</div></div></div></div><div class="rounded border mt-5"${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"${_scopeId}> Section 2: Patient Information </div><div class="space-y-3 pb-10"${_scopeId}><div class="w-full flex items-center px-5 space-x-3 mt-3"${_scopeId}><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Patient Surname</label><input${ssrRenderAttr("value", $data.surname)} type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId}></div><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Patient First Name</label><input${ssrRenderAttr("value", $data.firstname)} type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId}></div></div><div class="w-full flex items-center px-5 space-x-3"${_scopeId}><div class="w-1/2 flex flex-col space-y-2 mb-4"${_scopeId}><label class="font-medium"${_scopeId}>Patient ID</label><div id="otp" class="flex flex-row text-center mb-3"${_scopeId}><!--[-->`);
          ssrRenderList($data.patientID, (item, index) => {
            _push2(`<input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="first" maxlength="1"${ssrRenderAttr("value", $data.patientID[index])}${ssrRenderAttr("tabindex", index + 1)}${ssrRenderAttr("onfocus", (event) => {
              event.target.select();
            })}${_scopeId}>`);
          });
          _push2(`<!--]--></div></div><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Date of Birth</label><div class="w-full"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_datepicker, {
            range: "",
            placeholder: (/* @__PURE__ */ new Date()).toLocaleDateString(),
            "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
            "as-single": "",
            shortcuts: false,
            modelValue: $data.dateOfBirth,
            "onUpdate:modelValue": ($event) => $data.dateOfBirth = $event,
            formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
          }, null, _parent2, _scopeId));
          _push2(`</div></div></div><div class="w-full flex items-center px-5 space-x-3 mt-3"${_scopeId}><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Gender</label>`);
          _push2(ssrRenderComponent(_component_CoreDropdown, {
            items: $data.gender,
            "model-value": $data.genderSelected
          }, null, _parent2, _scopeId));
          _push2(`</div><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Patient/Gurdian Phone</label>`);
          _push2(ssrRenderComponent(_component_CorePhonePicker, { phone: $data.gurdianPhone }, null, _parent2, _scopeId));
          _push2(`</div></div><div class="w-full flex items-center px-5 space-x-3 mt-3"${_scopeId}><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Date Sample Drawn</label><div class="w-full"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_datepicker, {
            range: "",
            placeholder: (/* @__PURE__ */ new Date()).toLocaleDateString(),
            "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
            "as-single": "",
            shortcuts: false,
            modelValue: $data.dateSampleDrawn,
            "onUpdate:modelValue": ($event) => $data.dateSampleDrawn = $event,
            formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
          }, null, _parent2, _scopeId));
          _push2(`</div></div></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (step === 2) {
          _push2(`<div${_scopeId}><div class="rounded border"${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"${_scopeId}> Section 3: Reason For Test </div><div class="px-2"${_scopeId}><div class="px-2 py-2"${_scopeId}><label for="radio-group"${_scopeId}>Select reason:</label><div id="radio-group" class="mt-2 flex flex-col space-y-2"${_scopeId}><label class="flex items-center"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.reasonForTest, "routine")) ? " checked" : ""} value="routine" class="mr-2"${_scopeId}> Routine </label><label class="flex items-center"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.reasonForTest, "targeted")) ? " checked" : ""} value="targeted" class="mr-2"${_scopeId}> Targeted </label><label class="flex items-center"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.reasonForTest, "follow up after highVL")) ? " checked" : ""} value="follow up after highVL" class="mr-2"${_scopeId}> Follow up after highVL </label><label class="flex items-center"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.reasonForTest, "repeat")) ? " checked" : ""} value="repeat" class="mr-2"${_scopeId}> Repeat </label></div></div></div></div><div class="rounded border mt-5"${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"${_scopeId}> Section 4: Patient &amp; Sample Details </div><div class="px-2"${_scopeId}><div class="px-2 py-2"${_scopeId}><label class="font-medium"${_scopeId}>ART Initiation Date</label><div class="w-72"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_datepicker, {
            range: "",
            placeholder: (/* @__PURE__ */ new Date()).toDateString(),
            "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
            "as-single": "",
            shortcuts: true,
            modelValue: $data.artInitiationDate,
            "onUpdate:modelValue": ($event) => $data.artInitiationDate = $event,
            "text-input": true,
            "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
            "max-date": /* @__PURE__ */ new Date(),
            "ignore-time-validation": true,
            teleport: true,
            "enable-time-picker": false,
            formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
          }, null, _parent2, _scopeId));
          _push2(`</div></div><div class="px-2 py-2"${_scopeId}><label class="font-medium"${_scopeId}>Sample Type:</label><div id="radio-group" class="mt-2 flex flex-col space-y-2"${_scopeId}><label class="flex items-center"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.sampleType, "dbs")) ? " checked" : ""} value="dbs" class="mr-2"${_scopeId}> DBS (using Capillary Tube) </label><label class="flex items-center"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.sampleType, "plasma")) ? " checked" : ""} value="plasma" class="mr-2"${_scopeId}> Plasma </label></div></div><div class="px-2 py-2"${_scopeId}><label for="radio-group" class="mb-3 mt-2 font-medium"${_scopeId}>Current ART Regimen:</label><div class="grid grid-cols-7 w-1/2 mt-2"${_scopeId}><!--[-->`);
          ssrRenderList($data.regimens.one, (regimen) => {
            _push2(`<div class="col-span-1 bg-purple-200 px-4 py-4 border-t border-b border-l border-purple-100"${_scopeId}><label class="flex items-center"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selectedRegimen, regimen.value)) ? " checked" : ""}${ssrRenderAttr("value", regimen.value)} class="mr-2"${_scopeId}> ${ssrInterpolate(regimen.value)}</label></div>`);
          });
          _push2(`<!--]--><!--[-->`);
          ssrRenderList($data.regimens.two, (regimen) => {
            _push2(`<div class="col-span-1 bg-yellow-200 px-4 py-4 border-t border-b border-l border-yellow-100"${_scopeId}><label class="flex items-center"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selectedRegimen, regimen.value)) ? " checked" : ""}${ssrRenderAttr("value", regimen.value)} class="mr-2"${_scopeId}> ${ssrInterpolate(regimen.value)}</label></div>`);
          });
          _push2(`<!--]--></div></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (step === 3) {
          _push2(`<div${_scopeId}><div class="rounded border mt-5"${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"${_scopeId}> Section 5: Details of Person Collecting Sample </div><div class="py-5 px-5"${_scopeId}><div class="w-full flex items-center space-x-3 mt-3"${_scopeId}><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Surname</label><input${ssrRenderAttr("value", $data.collectorSurname)} type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId}></div><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>First Name</label><input${ssrRenderAttr("value", $data.collectorFirstname)} type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"${_scopeId}></div></div><div class="w-full flex items-center space-x-3 mt-3"${_scopeId}><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Phone Number</label>`);
          _push2(ssrRenderComponent(_component_CorePhonePicker, { phone: $data.collectorPhone }, null, _parent2, _scopeId));
          _push2(`</div><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>HTC Provider ID</label><div id="htc_provider_id" class="flex flex-row text-center mb-3"${_scopeId}><!--[-->`);
          ssrRenderList($data.htcProviderId, (item, index) => {
            _push2(`<input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="first" maxlength="1"${ssrRenderAttr("value", $data.htcProviderId[index])}${ssrRenderAttr("tabindex", index + 1)}${ssrRenderAttr("onfocus", (event) => {
              event.target.select();
            })}${_scopeId}>`);
          });
          _push2(`<!--]--></div></div></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (step === 4) {
          _push2(`<div${_scopeId}><div class="rounded border mt-5"${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-semibold text-md"${_scopeId}> Section 6: Confirmation </div><div class="px-5 py-5"${_scopeId}><div class="bg-orange-50 text-orange-400 font-medium flex items-center px-2 py-2 rounded"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_InformationCircleIcon, { class: "w-5 h-5 mr-3" }, null, _parent2, _scopeId));
          _push2(` Please make sure you have entered the correct information as they appear on the EID &amp; Viral Load Requisition Form </div><div class="mb-2"${_scopeId}><div class="px-2 py-2 bg-gray-50 mt-5 font-semibold"${_scopeId}> Health Facility Information </div><div class="w-full grid grid-cols-2"${_scopeId}><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>District -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.selectedDistrict.name)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Facility -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.selectedFacility.name)}</p></div></div></div><div class="mb-2"${_scopeId}><div class="px-2 py-2 bg-gray-50 mt-5 font-semibold"${_scopeId}> Patient Information </div><div class="w-full grid grid-cols-3 gap-4 pt-2"${_scopeId}><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Patient Surname -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.surname)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Patient first name -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.firstname)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Patient ID -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.patientID.filter((item) => item !== "").join(""))}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Date Of Birth -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.dateOfBirth)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Gender -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.genderSelected.name)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Patient/Guardian phone -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.gurdianPhone)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Date Sample Drawn -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.dateSampleDrawn)}</p></div></div></div><div class="mb-2"${_scopeId}><div class="px-2 py-2 bg-gray-50 mt-5 font-semibold"${_scopeId}> Reason For Test </div><div class="w-full grid grid-cols-2"${_scopeId}><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Select Reason -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.reasonForTest)}</p></div></div></div><div class="mb-2"${_scopeId}><div class="px-2 py-2 bg-gray-50 mt-5 font-semibold"${_scopeId}> Patient &amp; Sample Details </div><div class="w-full grid grid-cols-2 mt-2 gap-4"${_scopeId}><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>ART Initiation Date -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.artInitiationDate)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Sample type -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.sampleType)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Current ART Regimen -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.selectedRegimen)}</p></div></div></div><div class="mb-2"${_scopeId}><div class="px-2 py-2 bg-gray-50 mt-5 font-semibold"${_scopeId}> Details of Person Collecting Sample </div><div class="w-full grid grid-cols-2 mt-2 gap-4"${_scopeId}><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Surname -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.collectorSurname)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>First name -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.collectorFirstname)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>Phone number -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.collectorPhone)}</p></div><div class="flex items-center space-x-3 mt-2 col-span-1"${_scopeId}><p class="text-base font-medium"${_scopeId}>HTC Provider ID -:-</p><p class="text-gray-800"${_scopeId}>${ssrInterpolate($data.htcProviderId.filter((item) => item !== "").join(""))}</p></div></div></div><div class="flex items-center space-x-3 justify-end mt-5"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            icon: $data.clearIcon,
            text: "Clear form"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            icon: $data.rejectIcon,
            text: "Reject sample",
            color: "error"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            icon: $data.saveIcon,
            text: "Accept sample",
            color: "success"
          }, null, _parent2, _scopeId));
          _push2(`</div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          step === 1 ? (openBlock(), createBlock("div", { key: 0 }, [
            createVNode("div", { class: "rounded border" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 1: Health Facility Information "),
              createVNode("div", null, [
                createVNode("div", { class: "w-full flex items-center px-5 space-x-3 py-5" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "District"),
                    createVNode(_component_CoreDropdown, {
                      items: $data.districts,
                      "model-value": $data.selectedDistrict
                    }, null, 8, ["items", "model-value"])
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Facility"),
                    createVNode(_component_CoreDropdown, {
                      items: $data.facilities,
                      "model-value": $data.selectedFacility
                    }, null, 8, ["items", "model-value"])
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "rounded border mt-5" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 2: Patient Information "),
              createVNode("div", { class: "space-y-3 pb-10" }, [
                createVNode("div", { class: "w-full flex items-center px-5 space-x-3 mt-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Patient Surname"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.surname = $event,
                      type: "text",
                      class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $data.surname]
                    ])
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Patient First Name"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.firstname = $event,
                      type: "text",
                      class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $data.firstname]
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full flex items-center px-5 space-x-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2 mb-4" }, [
                    createVNode("label", { class: "font-medium" }, "Patient ID"),
                    createVNode("div", {
                      id: "otp",
                      class: "flex flex-row text-center mb-3"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList($data.patientID, (item, index) => {
                        return withDirectives((openBlock(), createBlock("input", {
                          class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                          type: "text",
                          id: "first",
                          maxlength: "1",
                          key: index,
                          "onUpdate:modelValue": ($event) => $data.patientID[index] = $event,
                          onInput: (event) => $options.handlePatientIdInput(event, index),
                          tabindex: index + 1,
                          ref_for: true,
                          ref: "input" + index,
                          onfocus: (event) => {
                            event.target.select();
                          }
                        }, null, 40, ["onUpdate:modelValue", "onInput", "tabindex", "onfocus"])), [
                          [vModelText, $data.patientID[index]]
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Date of Birth"),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_datepicker, {
                        range: "",
                        placeholder: (/* @__PURE__ */ new Date()).toLocaleDateString(),
                        "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                        "as-single": "",
                        shortcuts: false,
                        modelValue: $data.dateOfBirth,
                        "onUpdate:modelValue": ($event) => $data.dateOfBirth = $event,
                        formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                      }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "formatter"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full flex items-center px-5 space-x-3 mt-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Gender"),
                    createVNode(_component_CoreDropdown, {
                      items: $data.gender,
                      "model-value": $data.genderSelected
                    }, null, 8, ["items", "model-value"])
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Patient/Gurdian Phone"),
                    createVNode(_component_CorePhonePicker, { phone: $data.gurdianPhone }, null, 8, ["phone"])
                  ])
                ]),
                createVNode("div", { class: "w-full flex items-center px-5 space-x-3 mt-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Date Sample Drawn"),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_datepicker, {
                        range: "",
                        placeholder: (/* @__PURE__ */ new Date()).toLocaleDateString(),
                        "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                        "as-single": "",
                        shortcuts: false,
                        modelValue: $data.dateSampleDrawn,
                        "onUpdate:modelValue": ($event) => $data.dateSampleDrawn = $event,
                        formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                      }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "formatter"])
                    ])
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          step === 2 ? (openBlock(), createBlock("div", { key: 1 }, [
            createVNode("div", { class: "rounded border" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 3: Reason For Test "),
              createVNode("div", { class: "px-2" }, [
                createVNode("div", { class: "px-2 py-2" }, [
                  createVNode("label", { for: "radio-group" }, "Select reason:"),
                  createVNode("div", {
                    id: "radio-group",
                    class: "mt-2 flex flex-col space-y-2"
                  }, [
                    createVNode("label", { class: "flex items-center" }, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.reasonForTest = $event,
                        value: "routine",
                        class: "mr-2"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.reasonForTest]
                      ]),
                      createTextVNode(" Routine ")
                    ]),
                    createVNode("label", { class: "flex items-center" }, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.reasonForTest = $event,
                        value: "targeted",
                        class: "mr-2"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.reasonForTest]
                      ]),
                      createTextVNode(" Targeted ")
                    ]),
                    createVNode("label", { class: "flex items-center" }, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.reasonForTest = $event,
                        value: "follow up after highVL",
                        class: "mr-2"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.reasonForTest]
                      ]),
                      createTextVNode(" Follow up after highVL ")
                    ]),
                    createVNode("label", { class: "flex items-center" }, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.reasonForTest = $event,
                        value: "repeat",
                        class: "mr-2"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.reasonForTest]
                      ]),
                      createTextVNode(" Repeat ")
                    ])
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "rounded border mt-5" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 4: Patient & Sample Details "),
              createVNode("div", { class: "px-2" }, [
                createVNode("div", { class: "px-2 py-2" }, [
                  createVNode("label", { class: "font-medium" }, "ART Initiation Date"),
                  createVNode("div", { class: "w-72" }, [
                    createVNode(_component_datepicker, {
                      range: "",
                      placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                      "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
                      "as-single": "",
                      shortcuts: true,
                      modelValue: $data.artInitiationDate,
                      "onUpdate:modelValue": ($event) => $data.artInitiationDate = $event,
                      "text-input": true,
                      "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                      "max-date": /* @__PURE__ */ new Date(),
                      "ignore-time-validation": true,
                      teleport: true,
                      "enable-time-picker": false,
                      formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                    }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "year-range", "max-date", "formatter"])
                  ])
                ]),
                createVNode("div", { class: "px-2 py-2" }, [
                  createVNode("label", { class: "font-medium" }, "Sample Type:"),
                  createVNode("div", {
                    id: "radio-group",
                    class: "mt-2 flex flex-col space-y-2"
                  }, [
                    createVNode("label", { class: "flex items-center" }, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.sampleType = $event,
                        value: "dbs",
                        class: "mr-2"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.sampleType]
                      ]),
                      createTextVNode(" DBS (using Capillary Tube) ")
                    ]),
                    createVNode("label", { class: "flex items-center" }, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.sampleType = $event,
                        value: "plasma",
                        class: "mr-2"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.sampleType]
                      ]),
                      createTextVNode(" Plasma ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "px-2 py-2" }, [
                  createVNode("label", {
                    for: "radio-group",
                    class: "mb-3 mt-2 font-medium"
                  }, "Current ART Regimen:"),
                  createVNode("div", { class: "grid grid-cols-7 w-1/2 mt-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList($data.regimens.one, (regimen) => {
                      return openBlock(), createBlock("div", { class: "col-span-1 bg-purple-200 px-4 py-4 border-t border-b border-l border-purple-100" }, [
                        createVNode("label", { class: "flex items-center" }, [
                          withDirectives(createVNode("input", {
                            type: "radio",
                            "onUpdate:modelValue": ($event) => $data.selectedRegimen = $event,
                            value: regimen.value,
                            class: "mr-2"
                          }, null, 8, ["onUpdate:modelValue", "value"]), [
                            [vModelRadio, $data.selectedRegimen]
                          ]),
                          createTextVNode(" " + toDisplayString(regimen.value), 1)
                        ])
                      ]);
                    }), 256)),
                    (openBlock(true), createBlock(Fragment, null, renderList($data.regimens.two, (regimen) => {
                      return openBlock(), createBlock("div", { class: "col-span-1 bg-yellow-200 px-4 py-4 border-t border-b border-l border-yellow-100" }, [
                        createVNode("label", { class: "flex items-center" }, [
                          withDirectives(createVNode("input", {
                            type: "radio",
                            "onUpdate:modelValue": ($event) => $data.selectedRegimen = $event,
                            value: regimen.value,
                            class: "mr-2"
                          }, null, 8, ["onUpdate:modelValue", "value"]), [
                            [vModelRadio, $data.selectedRegimen]
                          ]),
                          createTextVNode(" " + toDisplayString(regimen.value), 1)
                        ])
                      ]);
                    }), 256))
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          step === 3 ? (openBlock(), createBlock("div", { key: 2 }, [
            createVNode("div", { class: "rounded border mt-5" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 5: Details of Person Collecting Sample "),
              createVNode("div", { class: "py-5 px-5" }, [
                createVNode("div", { class: "w-full flex items-center space-x-3 mt-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Surname"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.collectorSurname = $event,
                      type: "text",
                      class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $data.collectorSurname]
                    ])
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "First Name"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.collectorFirstname = $event,
                      type: "text",
                      class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $data.collectorFirstname]
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full flex items-center space-x-3 mt-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Phone Number"),
                    createVNode(_component_CorePhonePicker, { phone: $data.collectorPhone }, null, 8, ["phone"])
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "HTC Provider ID"),
                    createVNode("div", {
                      id: "htc_provider_id",
                      class: "flex flex-row text-center mb-3"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList($data.htcProviderId, (item, index) => {
                        return withDirectives((openBlock(), createBlock("input", {
                          class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                          type: "text",
                          id: "first",
                          maxlength: "1",
                          key: index,
                          "onUpdate:modelValue": ($event) => $data.htcProviderId[index] = $event,
                          onInput: (event) => $options.handleHTCProviderIdInput(event, index),
                          tabindex: index + 1,
                          ref_for: true,
                          ref: "input" + index,
                          onfocus: (event) => {
                            event.target.select();
                          }
                        }, null, 40, ["onUpdate:modelValue", "onInput", "tabindex", "onfocus"])), [
                          [vModelText, $data.htcProviderId[index]]
                        ]);
                      }), 128))
                    ])
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          step === 4 ? (openBlock(), createBlock("div", { key: 3 }, [
            createVNode("div", { class: "rounded border mt-5" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-semibold text-md" }, " Section 6: Confirmation "),
              createVNode("div", { class: "px-5 py-5" }, [
                createVNode("div", { class: "bg-orange-50 text-orange-400 font-medium flex items-center px-2 py-2 rounded" }, [
                  createVNode(_component_InformationCircleIcon, { class: "w-5 h-5 mr-3" }),
                  createTextVNode(" Please make sure you have entered the correct information as they appear on the EID & Viral Load Requisition Form ")
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode("div", { class: "px-2 py-2 bg-gray-50 mt-5 font-semibold" }, " Health Facility Information "),
                  createVNode("div", { class: "w-full grid grid-cols-2" }, [
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "District -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.selectedDistrict.name), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Facility -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.selectedFacility.name), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode("div", { class: "px-2 py-2 bg-gray-50 mt-5 font-semibold" }, " Patient Information "),
                  createVNode("div", { class: "w-full grid grid-cols-3 gap-4 pt-2" }, [
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Patient Surname -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.surname), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Patient first name -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.firstname), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Patient ID -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.patientID.filter((item) => item !== "").join("")), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Date Of Birth -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.dateOfBirth), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Gender -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.genderSelected.name), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Patient/Guardian phone -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.gurdianPhone), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Date Sample Drawn -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.dateSampleDrawn), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode("div", { class: "px-2 py-2 bg-gray-50 mt-5 font-semibold" }, " Reason For Test "),
                  createVNode("div", { class: "w-full grid grid-cols-2" }, [
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Select Reason -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.reasonForTest), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode("div", { class: "px-2 py-2 bg-gray-50 mt-5 font-semibold" }, " Patient & Sample Details "),
                  createVNode("div", { class: "w-full grid grid-cols-2 mt-2 gap-4" }, [
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "ART Initiation Date -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.artInitiationDate), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Sample type -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.sampleType), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Current ART Regimen -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.selectedRegimen), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode("div", { class: "px-2 py-2 bg-gray-50 mt-5 font-semibold" }, " Details of Person Collecting Sample "),
                  createVNode("div", { class: "w-full grid grid-cols-2 mt-2 gap-4" }, [
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Surname -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.collectorSurname), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "First name -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.collectorFirstname), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "Phone number -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.collectorPhone), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-3 mt-2 col-span-1" }, [
                      createVNode("p", { class: "text-base font-medium" }, "HTC Provider ID -:-"),
                      createVNode("p", { class: "text-gray-800" }, toDisplayString($data.htcProviderId.filter((item) => item !== "").join("")), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center space-x-3 justify-end mt-5" }, [
                  createVNode(_component_CoreActionButton, {
                    icon: $data.clearIcon,
                    text: "Clear form"
                  }, null, 8, ["icon"]),
                  createVNode(_component_CoreActionButton, {
                    icon: $data.rejectIcon,
                    text: "Reject sample",
                    color: "error"
                  }, null, 8, ["icon"]),
                  createVNode(_component_CoreActionButton, {
                    icon: $data.saveIcon,
                    text: "Accept sample",
                    color: "success"
                  }, null, 8, ["icon"])
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sample-entry/eid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { eid as default };
//# sourceMappingURL=eid-484c5420.mjs.map
