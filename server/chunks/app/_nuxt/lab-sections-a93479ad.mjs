import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode, toDisplayString } from 'vue';
import { e as errorMessage } from './constants-353d90a1.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { e as endpoints, f as fetchRequest, r as render$2, a as render$4$1 } from './fetch-63049419.mjs';
import { r as render } from './XMarkIcon-170c776f.mjs';
import { r as render$1 } from './UserIcon-3d66d73e.mjs';
import { r as render$3 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$4 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './SearchBar-0bf20ba4.mjs';
import { _ as __nuxt_component_2 } from './Datatable-0c4b7b4f.mjs';
import { a as render$1$1, r as render$5 } from './PencilSquareIcon-77446728.mjs';
import { _ as _imports_0 } from './admissions-269aee20.mjs';
import { r as render$6 } from './TrashIcon-b1416ff8.mjs';
import { u as useHead } from './index-ca787103.mjs';
import { P as Package } from './package-cc00c60c.mjs';
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
import './PrinterIcon-02ac6ae4.mjs';
import './Loader-c735e4ba.mjs';

const _sfc_main$4 = {
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
      saveIcon: render$3,
      clearIcon: render$4,
      name: "",
      description: "",
      loading: false,
      cookie: useCookie("token")
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;
      const request = {
        route: endpoints.departments,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          "name": this.name
        }
      };
      const { pending, error, data } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.adjustVisibility();
        useNuxtApp().$toast.success(`${this.name} laboratory section created successfully!`);
        this.name = "";
        this.loading = false;
        this.$emit("update", true);
      }
      if (error.value) {
        this.adjustVisibility();
        console.log(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    },
    adjustVisibility() {
      this.open = !this.open;
    },
    clearForm() {
      this.$formkit.reset("submitForm");
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
    text: "New lab section",
    color: "primary",
    icon: $data.addIcon,
    click: $options.adjustVisibility
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
          onClose: $options.adjustVisibility,
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
                                _push6(` Add new lab section `);
                              } else {
                                return [
                                  createTextVNode(" Add new lab section ")
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
                                _push6(`<div class="mt-2 space-y-3"${_scopeId5}><div class="w-full flex items-center px-5"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  validation: "required",
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  text: "Clear form",
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  }
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
                                  createVNode("div", { class: "mt-2 space-y-3" }, [
                                    createVNode("div", { class: "w-full flex items-center px-5" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Name",
                                          validation: "required",
                                          modelValue: $data.name,
                                          "onUpdate:modelValue": ($event) => $data.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      text: "Clear form",
                                      type: "button",
                                      click: () => {
                                        $options.clearForm();
                                      }
                                    }, null, 8, ["click"]),
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
                                  createTextVNode(" Add new lab section ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.adjustVisibility }, [
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
                                createVNode("div", { class: "mt-2 space-y-3" }, [
                                  createVNode("div", { class: "w-full flex items-center px-5" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Name",
                                        validation: "required",
                                        modelValue: $data.name,
                                        "onUpdate:modelValue": ($event) => $data.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    text: "Clear form",
                                    type: "button",
                                    click: () => {
                                      $options.clearForm();
                                    }
                                  }, null, 8, ["click"]),
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Add new lab section ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.adjustVisibility }, [
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
                              createVNode("div", { class: "mt-2 space-y-3" }, [
                                createVNode("div", { class: "w-full flex items-center px-5" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  text: "Clear form",
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  }
                                }, null, 8, ["click"]),
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
                        createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Add new lab section ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.adjustVisibility }, [
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
                                createVNode("div", { class: "mt-2 space-y-3" }, [
                                  createVNode("div", { class: "w-full flex items-center px-5" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Name",
                                        validation: "required",
                                        modelValue: $data.name,
                                        "onUpdate:modelValue": ($event) => $data.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    text: "Clear form",
                                    type: "button",
                                    click: () => {
                                      $options.clearForm();
                                    }
                                  }, null, 8, ["click"]),
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
            onClose: $options.adjustVisibility,
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
                                createTextVNode(" Add new lab section ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.adjustVisibility }, [
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
                              createVNode("div", { class: "mt-2 space-y-3" }, [
                                createVNode("div", { class: "w-full flex items-center px-5" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  text: "Clear form",
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  }
                                }, null, 8, ["click"]),
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lab-sections/add-dialog/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
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
    /**
     * @method handleClick control dialogs visibility
     * @returns void
     */
    handleClick() {
      this.show = !this.show;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0$1;
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
                    _push4(`<div class="fixed inset-0 bg-gray-900 bg-opacity-25"${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "fixed inset-0 bg-gray-900 bg-opacity-25" })
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> View Laboratory Section `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Laboratory Section ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="space-y-3 px-5 py-5"${_scopeId4}><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Name</label><p class="underline"${_scopeId4}>${ssrInterpolate($props.data.name)}</p></div></div>`);
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
                                  createTextVNode(" View Laboratory Section ")
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
                                createVNode("p", { class: "underline" }, toDisplayString($props.data.name), 1)
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
                                createTextVNode(" View Laboratory Section ")
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
                              createVNode("p", { class: "underline" }, toDisplayString($props.data.name), 1)
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
                    createVNode("div", { class: "fixed inset-0 bg-gray-900 bg-opacity-25" })
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
                                  createTextVNode(" View Laboratory Section ")
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
                                createVNode("p", { class: "underline" }, toDisplayString($props.data.name), 1)
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
                  createVNode("div", { class: "fixed inset-0 bg-gray-900 bg-opacity-25" })
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
                                createTextVNode(" View Laboratory Section ")
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
                              createVNode("p", { class: "underline" }, toDisplayString($props.data.name), 1)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lab-sections/view-dialog/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
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
      editIcon: render$5,
      show: false,
      saveIcon: render$3,
      loading: false,
      cookie: useCookie("token"),
      name: this.data.name
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    async submitForm() {
      this.loading = true;
      const request = {
        route: `${endpoints.departments}/${this.data.id}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: this.name
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`Laboratory section updated successfully!`);
        this.loading = false;
        this.$emit("update", true);
      }
      if (error.value) {
        this.handleClick();
        useNuxtApp().$toast.error(errorMessage);
        console.error(error.value);
        this.loading = false;
      }
    },
    handleClick() {
      this.show = !this.show;
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
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.handleClick,
    text: "Edit",
    color: "success",
    icon: $data.editIcon
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Edit Laboratory Department `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit Laboratory Department ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div>`);
                          _push5(ssrRenderComponent(_component_FormKit, {
                            id: "submitForm",
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3"${_scopeId5}><div class="w-full flex items-center px-5"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  validation: "required",
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  text: "Clear form",
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  }
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
                                  createVNode("div", { class: "mt-2 space-y-3" }, [
                                    createVNode("div", { class: "w-full flex items-center px-5" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Name",
                                          validation: "required",
                                          modelValue: $data.name,
                                          "onUpdate:modelValue": ($event) => $data.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      text: "Clear form",
                                      type: "button",
                                      click: () => {
                                        $options.clearForm();
                                      }
                                    }, null, 8, ["click"]),
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
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit Laboratory Department ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              id: "submitForm",
                              type: "form",
                              "submit-label": "Update",
                              onSubmit: $options.submitForm,
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3" }, [
                                  createVNode("div", { class: "w-full flex items-center px-5" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Name",
                                        validation: "required",
                                        modelValue: $data.name,
                                        "onUpdate:modelValue": ($event) => $data.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    text: "Clear form",
                                    type: "button",
                                    click: () => {
                                      $options.clearForm();
                                    }
                                  }, null, 8, ["click"]),
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
                                createTextVNode(" Edit Laboratory Department ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            id: "submitForm",
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3" }, [
                                createVNode("div", { class: "w-full flex items-center px-5" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  text: "Clear form",
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  }
                                }, null, 8, ["click"]),
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
                                  createTextVNode(" Edit Laboratory Department ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              id: "submitForm",
                              type: "form",
                              "submit-label": "Update",
                              onSubmit: $options.submitForm,
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3" }, [
                                  createVNode("div", { class: "w-full flex items-center px-5" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Name",
                                        validation: "required",
                                        modelValue: $data.name,
                                        "onUpdate:modelValue": ($event) => $data.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    text: "Clear form",
                                    type: "button",
                                    click: () => {
                                      $options.clearForm();
                                    }
                                  }, null, 8, ["click"]),
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
                                createTextVNode(" Edit Laboratory Department ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            id: "submitForm",
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3" }, [
                                createVNode("div", { class: "w-full flex items-center px-5" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  text: "Clear form",
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  }
                                }, null, 8, ["click"]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lab-sections/edit-dialog/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
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
      deleteIcon: render$6,
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
     * @method deleteData deletes laboratory section
     * @param id aboratory section id
     * @return promise @typeof void
     */
    async deleteData(id) {
      this.loading = true;
      const request = {
        route: `${endpoints.departments}/${id}`,
        method: "DELETE",
        token: `${this.cookie}`,
        body: { "retired_reason": this.reason }
      };
      let { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`Laboratory section deleted successfully!`);
        this.$emit("update", true);
      }
      if (error.value) {
        useNuxtApp().$toast.error(errorMessage);
        this.handleClick();
        console.error(error.value);
      }
    },
    /**
     * @method handleClick handles dialog visibility
     */
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
  const _component_ExclamationTriangleIcon = resolveComponent("ExclamationTriangleIcon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreOutlinedButton = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.handleClick,
    color: "error",
    text: "Delete",
    icon: $data.deleteIcon
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
                                _push6(` Confirm delete `);
                              } else {
                                return [
                                  createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Confirm delete ")
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
                            onSubmit: ($event) => $options.deleteData($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="rounded px-2 py-2"${_scopeId5}> Do you really want to delete <span class="font-semibold text-red-500"${_scopeId5}>${ssrInterpolate($props.data.name)}</span>? Note that once this action is completed, it can not be undone </div>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Reason",
                                  validation: "required",
                                  modelValue: $data.reason,
                                  "onUpdate:modelValue": ($event) => $data.reason = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.handleClick();
                                  },
                                  text: "Cancel"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.deleteIcon,
                                  text: "Delete"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "rounded px-2 py-2" }, [
                                      createTextVNode(" Do you really want to delete "),
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
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                        $options.handleClick();
                                      },
                                      text: "Cancel"
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "error",
                                      icon: $data.deleteIcon,
                                      text: "Delete"
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
                                  createTextVNode(" Confirm delete ")
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
                              onSubmit: ($event) => $options.deleteData($props.data.id),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Do you really want to delete "),
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
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                      $options.handleClick();
                                    },
                                    text: "Cancel"
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "error",
                                    icon: $data.deleteIcon,
                                    text: "Delete"
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
                                createTextVNode(" Confirm delete ")
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
                            onSubmit: ($event) => $options.deleteData($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Do you really want to delete "),
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
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.handleClick();
                                  },
                                  text: "Cancel"
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.deleteIcon,
                                  text: "Delete"
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
                                  createTextVNode(" Confirm delete ")
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
                              onSubmit: ($event) => $options.deleteData($props.data.id),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Do you really want to delete "),
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
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                      $options.handleClick();
                                    },
                                    text: "Cancel"
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "error",
                                    icon: $data.deleteIcon,
                                    text: "Delete"
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
                                createTextVNode(" Confirm delete ")
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
                            onSubmit: ($event) => $options.deleteData($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Do you really want to delete "),
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
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.handleClick();
                                  },
                                  text: "Cancel"
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.deleteIcon,
                                  text: "Delete"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lab-sections/delete-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Laboratory Sections`
    });
  },
  data() {
    return {
      header: "Laboratory Sections",
      departments: new Array(),
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Test Catalog",
          link: "#"
        }
      ],
      loading: false,
      search: "",
      searchValue: "",
      cookie: useCookie("token"),
      headers: [
        { text: "id", value: "id", sortable: true },
        { text: "name", value: "name", sortable: true },
        { text: "actions", value: "actions" }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    updateSearch(value) {
      this.searchValue = value;
      this.search = value;
    },
    async init() {
      this.loading = true;
      const request = {
        route: endpoints.departments,
        method: "GET",
        token: `${this.cookie}`
      };
      const { pending, error, data } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        this.departments = data.value;
      }
      if (error.value) {
        this.loading = false;
        console.log(error.value);
      }
    },
    updateLabSections(value) {
      if (value) {
        this.init();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_LabSectionsAddDialog = __nuxt_component_1;
  const _component_CoreSearchBar = __nuxt_component_1$1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_LabSectionsViewDialog = __nuxt_component_4;
  const _component_LabSectionsEditDialog = __nuxt_component_5;
  const _component_LabSectionsDeleteDialog = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_LabSectionsAddDialog, { onUpdate: $options.updateLabSections }, null, _parent));
  _push(`</div></div><div class="flex justify-end w-full px-2 py-2 mb-2">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    onUpdate: $options.updateSearch
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $data.departments,
    loading: $data.loading,
    "search-value": $data.searchValue,
    "search-field": "name"
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LabSectionsViewDialog, { data: item }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LabSectionsEditDialog, {
          data: item,
          onUpdate: $options.updateLabSections
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LabSectionsDeleteDialog, {
          data: item,
          onUpdate: $options.updateLabSections
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_LabSectionsViewDialog, { data: item }, null, 8, ["data"]),
            createVNode(_component_LabSectionsEditDialog, {
              data: item,
              onUpdate: $options.updateLabSections
            }, null, 8, ["data", "onUpdate"]),
            createVNode(_component_LabSectionsDeleteDialog, {
              data: item,
              onUpdate: $options.updateLabSections
            }, null, 8, ["data", "onUpdate"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-catalog/lab-sections.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const labSections = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { labSections as default };
//# sourceMappingURL=lab-sections-a93479ad.mjs.map
