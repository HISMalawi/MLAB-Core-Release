import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$5 } from './Breadcrumb-fc731a79.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode, withDirectives, vShow, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { e as errorMessage } from './constants-9b77e6ea.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { e as endpoints, f as fetchRequest, r as render$4, a as render$4$1 } from './fetch-5298dfa4.mjs';
import { r as render$3 } from './XMarkIcon-170c776f.mjs';
import { r as render$5 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './SearchBar-a0fe3266.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import moment from 'moment';
import { r as render$1, a as render$1$1 } from './PencilSquareIcon-77446728.mjs';
import { r as render$2 } from './TrashIcon-b1416ff8.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import { P as Package } from './package-6f8153c4.mjs';
import { r as render } from './UserGroupIcon-5b43b3c2.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import './nuxt-link-42c558b2.mjs';
import './HomeIcon-299b993b.mjs';
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
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main$4 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$3
  },
  data() {
    return {
      addIcon: render$4,
      show: false,
      saveIcon: render$5,
      name: "",
      loading: false,
      cookie: useCookie("token"),
      rawPrivileges: new Array(),
      privileges: new Array(),
      previlegesSelected: new Array()
    };
  },
  methods: {
    async init() {
      this.handleClick();
      const request = {
        route: endpoints.privileges,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.rawPrivileges = data.value;
        data.value.map((item) => {
          this.privileges.push(item.display_name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async submitForm() {
      this.loading = true;
      let privileges = new Array();
      this.previlegesSelected.map((item) => {
        this.rawPrivileges.map((privilege) => {
          if (item.name === privilege.name) {
            this.privileges.push(privilege.id);
          }
        });
      });
      const request = {
        route: endpoints.roles,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          "name": this.name,
          "privileges": privileges
        }
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`Role created successfully!`);
        this.loading = false;
        this.$emit("update", true);
      }
      if (error.value) {
        this.handleClick();
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
        console.error(error.value);
      }
    },
    clearForm() {
      this.$formkit.reset("submitForm");
    },
    handleClick() {
      this.show = !this.show;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_multi_select = resolveComponent("multi-select");
  const _component_CoreOutlinedButton = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.init,
    text: "Create role",
    color: "success",
    icon: $data.addIcon
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
                                _push6(` Create role `);
                              } else {
                                return [
                                  createTextVNode(" Create role ")
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
                            id: "submitForm",
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
                                _push6(`</div></div><div class="w-full flex flex-col space-y-2 px-5 pb-36"${_scopeId5}><label class="font-medium"${_scopeId5}>Permissions</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.previlegesSelected,
                                  "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                  options: $data.privileges,
                                  mode: "tags",
                                  required: "",
                                  clear: "",
                                  searchable: "",
                                  class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => $options.clearForm(),
                                  text: "Clear form"
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
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2 px-5 pb-36" }, [
                                      createVNode("label", { class: "font-medium" }, "Permissions"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.previlegesSelected,
                                        "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                        options: $data.privileges,
                                        mode: "tags",
                                        required: "",
                                        clear: "",
                                        searchable: "",
                                        class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => $options.clearForm(),
                                      text: "Clear form"
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
                                  createTextVNode(" Create role ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              id: "submitForm",
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
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 px-5 pb-36" }, [
                                    createVNode("label", { class: "font-medium" }, "Permissions"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.previlegesSelected,
                                      "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                      options: $data.privileges,
                                      mode: "tags",
                                      required: "",
                                      clear: "",
                                      searchable: "",
                                      class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => $options.clearForm(),
                                    text: "Clear form"
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
                                createTextVNode(" Create role ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            id: "submitForm",
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
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2 px-5 pb-36" }, [
                                  createVNode("label", { class: "font-medium" }, "Permissions"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.previlegesSelected,
                                    "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                    options: $data.privileges,
                                    mode: "tags",
                                    required: "",
                                    clear: "",
                                    searchable: "",
                                    class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => $options.clearForm(),
                                  text: "Clear form"
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
                                  createTextVNode(" Create role ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              id: "submitForm",
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
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 px-5 pb-36" }, [
                                    createVNode("label", { class: "font-medium" }, "Permissions"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.previlegesSelected,
                                      "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                      options: $data.privileges,
                                      mode: "tags",
                                      required: "",
                                      clear: "",
                                      searchable: "",
                                      class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => $options.clearForm(),
                                    text: "Clear form"
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
                                createTextVNode(" Create role ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            id: "submitForm",
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
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2 px-5 pb-36" }, [
                                  createVNode("label", { class: "font-medium" }, "Permissions"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.previlegesSelected,
                                    "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                    options: $data.privileges,
                                    mode: "tags",
                                    required: "",
                                    clear: "",
                                    searchable: "",
                                    class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => $options.clearForm(),
                                  text: "Clear form"
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roles/add-dialog/index.vue");
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
    XMarkIcon: render$3
  },
  data() {
    return {
      viewIcon: render$1$1,
      show: false,
      editIcon: render$1,
      moment,
      cookie: useCookie("token"),
      details: {
        name: "",
        privileges: [{ id: 0, display_name: "" }]
      },
      loading: false
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    async init() {
      this.handleClick();
      this.loading = true;
      const request = {
        route: `${endpoints.roles}/${this.data.id}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.details = data.value;
        this.loading = false;
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
const _imports_0 = "" + buildAssetsURL("group.3c310866.svg");
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_CoreLoader = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.init,
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> View role `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View role ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}" class="flex items-center justify-center mx-auto my-20"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreLoader, { loading: $data.loading }, null, _parent5, _scopeId4));
                          _push5(`</div><div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}" class="space-y-3 px-5 py-5"${_scopeId4}><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Name</label><p class="underline"${_scopeId4}>${ssrInterpolate($data.details.name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Permissions</label><!--[-->`);
                          ssrRenderList($data.details.privileges, (item, index) => {
                            _push5(`<p class="underline"${_scopeId4}>${ssrInterpolate(item.display_name)}</p>`);
                          });
                          _push5(`<!--]--></div></div>`);
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
                                  createTextVNode(" View role ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                              createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                            ], 512), [
                              [vShow, $data.loading]
                            ]),
                            withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Permissions"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.privileges, (item, index) => {
                                  return openBlock(), createBlock("p", {
                                    key: index,
                                    class: "underline"
                                  }, toDisplayString(item.display_name), 1);
                                }), 128))
                              ])
                            ], 512), [
                              [vShow, !$data.loading]
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
                                createTextVNode(" View role ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                            createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                          ], 512), [
                            [vShow, $data.loading]
                          ]),
                          withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Permissions"),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.details.privileges, (item, index) => {
                                return openBlock(), createBlock("p", {
                                  key: index,
                                  class: "underline"
                                }, toDisplayString(item.display_name), 1);
                              }), 128))
                            ])
                          ], 512), [
                            [vShow, !$data.loading]
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
                                  createTextVNode(" View role ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                              createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                            ], 512), [
                              [vShow, $data.loading]
                            ]),
                            withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Permissions"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.privileges, (item, index) => {
                                  return openBlock(), createBlock("p", {
                                    key: index,
                                    class: "underline"
                                  }, toDisplayString(item.display_name), 1);
                                }), 128))
                              ])
                            ], 512), [
                              [vShow, !$data.loading]
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
                                createTextVNode(" View role ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                            createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                          ], 512), [
                            [vShow, $data.loading]
                          ]),
                          withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Permissions"),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.details.privileges, (item, index) => {
                                return openBlock(), createBlock("p", {
                                  key: index,
                                  class: "underline"
                                }, toDisplayString(item.display_name), 1);
                              }), 128))
                            ])
                          ], 512), [
                            [vShow, !$data.loading]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roles/view-dialog/index.vue");
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
    XMarkIcon: render$3
  },
  data() {
    return {
      editIcon: render$1,
      show: false,
      saveIcon: render$5,
      name: this.data.name,
      loading: false,
      cookie: useCookie("token"),
      rawPrivileges: new Array(),
      privileges: new Array(),
      previlegesSelected: new Array()
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  created() {
    this.loadPrivileges();
  },
  methods: {
    async loadPrivileges() {
      const request = {
        route: endpoints.privileges,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.rawPrivileges = data.value;
        data.value.map((item) => {
          this.privileges.push(item.display_name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async init() {
      this.handleClick();
      const request = {
        route: `${endpoints.roles}/${this.data.id}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        data.value.privileges.map((item) => {
          this.previlegesSelected.push(item.display_name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async submitForm() {
      this.loading = true;
      const privileges = this.rawPrivileges.filter((item) => this.previlegesSelected.includes(item.display_name)).map((item) => item.id);
      const request = {
        route: `${endpoints.roles}/${this.data.id}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {
          "name": this.name,
          "privileges": privileges
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        this.previlegesSelected = new Array();
        useNuxtApp().$toast.success(`Role updated successfully!`);
        this.loading = false;
        this.$emit("update", true);
      }
      if (error.value) {
        this.handleClick();
        console.error(error.value);
        useNuxtApp().$toast.success(errorMessage);
        this.loading = false;
      }
    },
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
  const _component_FormKit = resolveComponent("FormKit");
  const _component_multi_select = resolveComponent("multi-select");
  const _component_CoreOutlinedButton = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.init,
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Edit role `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit role ")
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
                                _push6(`</div></div></div><div class="w-full flex flex-col space-y-2 px-5 pb-36 mt-3"${_scopeId5}><label class="font-medium"${_scopeId5}>Permissions</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.previlegesSelected,
                                  "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                  options: $data.privileges,
                                  mode: "tags",
                                  required: "",
                                  clear: "",
                                  searchable: "",
                                  class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, { text: "Clear form" }, null, _parent6, _scopeId5));
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
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 px-5 pb-36 mt-3" }, [
                                    createVNode("label", { class: "font-medium" }, "Permissions"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.previlegesSelected,
                                      "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                      options: $data.privileges,
                                      mode: "tags",
                                      required: "",
                                      clear: "",
                                      searchable: "",
                                      class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, { text: "Clear form" }),
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
                                  createTextVNode(" Edit role ")
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
                                createVNode("div", { class: "w-full flex flex-col space-y-2 px-5 pb-36 mt-3" }, [
                                  createVNode("label", { class: "font-medium" }, "Permissions"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.previlegesSelected,
                                    "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                    options: $data.privileges,
                                    mode: "tags",
                                    required: "",
                                    clear: "",
                                    searchable: "",
                                    class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, { text: "Clear form" }),
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
                                createTextVNode(" Edit role ")
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
                              createVNode("div", { class: "w-full flex flex-col space-y-2 px-5 pb-36 mt-3" }, [
                                createVNode("label", { class: "font-medium" }, "Permissions"),
                                createVNode(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.previlegesSelected,
                                  "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                  options: $data.privileges,
                                  mode: "tags",
                                  required: "",
                                  clear: "",
                                  searchable: "",
                                  class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, { text: "Clear form" }),
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
                                  createTextVNode(" Edit role ")
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
                                createVNode("div", { class: "w-full flex flex-col space-y-2 px-5 pb-36 mt-3" }, [
                                  createVNode("label", { class: "font-medium" }, "Permissions"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.previlegesSelected,
                                    "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                    options: $data.privileges,
                                    mode: "tags",
                                    required: "",
                                    clear: "",
                                    searchable: "",
                                    class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, { text: "Clear form" }),
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
                                createTextVNode(" Edit role ")
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
                              createVNode("div", { class: "w-full flex flex-col space-y-2 px-5 pb-36 mt-3" }, [
                                createVNode("label", { class: "font-medium" }, "Permissions"),
                                createVNode(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.previlegesSelected,
                                  "onUpdate:modelValue": ($event) => $data.previlegesSelected = $event,
                                  options: $data.privileges,
                                  mode: "tags",
                                  required: "",
                                  clear: "",
                                  searchable: "",
                                  class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, { text: "Clear form" }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roles/edit-dialog/index.vue");
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
    XMarkIcon: render$3,
    ExclamationTriangleIcon: render$4$1
  },
  data() {
    return {
      show: false,
      deleteIcon: render$2,
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
    async deleteData(id) {
      this.loading = true;
      const request = {
        route: `${endpoints.roles}/${id}`,
        method: "DELETE",
        token: `${this.cookie}`,
        body: { "retired_reason": this.reason }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`${data.value.message}`);
        this.loading = false;
        this.$emit("update", true);
      }
      if (error.value) {
        console.error(data.value);
        this.loading = false;
        useNuxtApp().$toast.error(errorMessage);
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
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
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
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
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
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
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
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
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
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
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
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roles/delete-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Roles`
    });
  },
  components: {
    UserGroupIcon: render
  },
  data() {
    return {
      header: "Roles",
      editIcon: render$1,
      deleteIcon: render$2,
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Access Controls",
          link: "#"
        }
      ],
      roles: new Array(),
      cookie: useCookie("token"),
      headers: new Array(
        { text: "id", value: "id", sortable: true },
        { text: "name", value: "name", sortable: true },
        { text: "actions", value: "actions" }
      ),
      searchValue: "",
      search: "",
      loading: false
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
        route: endpoints.roles,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.roles = data.value;
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    updateRoles(value) {
      if (value) {
        this.init();
      }
    }
  },
  computed: {
    filteredRoles() {
      const { roles: roles2 } = this;
      return roles2.map((role) => ({
        id: role.id,
        name: role.name
      }));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$5;
  const _component_RolesAddDialog = __nuxt_component_1;
  const _component_CoreSearchBar = __nuxt_component_1$1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_RolesViewDialog = __nuxt_component_4;
  const _component_RolesEditDialog = __nuxt_component_5;
  const _component_RolesDeleteDialog = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3>`);
  _push(ssrRenderComponent(_component_RolesAddDialog, null, null, _parent));
  _push(`</div><div class="flex items-center justify-between py-5"><div></div><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    onUpdate: $options.updateSearch
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $options.filteredRoles,
    loading: $data.loading,
    "search-value": $data.searchValue,
    "search-field": "name"
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_RolesViewDialog, {
          data: item,
          onUpdate: $options.updateRoles
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_RolesEditDialog, {
          data: item,
          onUpdate: $options.updateRoles
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_RolesDeleteDialog, {
          data: item,
          onUpdate: $options.updateRoles
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_RolesViewDialog, {
              data: item,
              onUpdate: $options.updateRoles
            }, null, 8, ["data", "onUpdate"]),
            createVNode(_component_RolesEditDialog, {
              data: item,
              onUpdate: $options.updateRoles
            }, null, 8, ["data", "onUpdate"]),
            createVNode(_component_RolesDeleteDialog, {
              data: item,
              onUpdate: $options.updateRoles
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/access-controls/roles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const roles = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { roles as default };
//# sourceMappingURL=roles-540fadaa.mjs.map
