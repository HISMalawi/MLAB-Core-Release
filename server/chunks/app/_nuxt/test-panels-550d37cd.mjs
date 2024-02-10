import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$5 } from './Breadcrumb-fc731a79.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './Multiselect-d93216db.mjs';
import { _ as __nuxt_component_1$3 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode, withDirectives, vShow, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { e as errorMessage } from './constants-9b77e6ea.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { e as endpoints, f as fetchRequest, r as render$4, i as useFetch, a as render$4$1 } from './fetch-63157596.mjs';
import { r as render$1 } from './XMarkIcon-170c776f.mjs';
import { r as render$2 } from './UserIcon-3d66d73e.mjs';
import { r as render$3 } from './WrenchScrewdriverIcon-771ce8f4.mjs';
import { r as render$5 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$6 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './SearchBar-a0fe3266.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { a as render$1$1, r as render$7 } from './PencilSquareIcon-77446728.mjs';
import { r as render$8 } from './TrashIcon-b1416ff8.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import { P as Package } from './package-f9450e57.mjs';
import { r as render } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import { _ as _imports_0$1 } from './ui_folder-720a807c.mjs';
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
import 'moment';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main$4 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$1,
    UserIcon: render$2
  },
  data() {
    return {
      open: false,
      driverIcon: render$3,
      addIcon: render$4,
      saveIcon: render$5,
      clearIcon: render$6,
      wardSelected: null,
      name: "",
      shortName: "",
      description: "",
      testTypes: new Array(),
      testTypesSelected: new Array(),
      rawTestTypes: new Array(),
      loading: false,
      cookie: useCookie("token")
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const request = {
        route: endpoints.testTypes,
        method: "GET",
        token: `${this.cookie}`,
        body: {}
      };
      let v = await fetchRequest(request);
      if (v.data.value) {
        this.rawTestTypes = v.data.value.test_types;
        v.data.value.test_types.map((test) => {
          this.testTypes.push(test.name);
        });
      }
      if (v.error.value) {
        console.log(v.error.value);
      }
    },
    async submitForm() {
      this.loading = true;
      let testTypesId = new Array();
      this.testTypesSelected.map((name) => {
        this.rawTestTypes.filter((item) => {
          name == item.name && testTypesId.push(item.id);
        });
      });
      const request = {
        route: endpoints.testPanels,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          "name": this.name,
          "short_name": this.shortName,
          "description": this.description,
          "test_types": testTypesId
        }
      };
      let v = await fetchRequest(request);
      this.loading = v.pending;
      if (v.data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`Test panel created successfully!`);
        this.$emit("update", true);
      }
      if (v.error.value) {
        useNuxtApp().$toast.error(errorMessage);
        console.log(v.error.value);
        this.handleClick();
      }
    },
    updateTestType(value) {
      console.log(value);
      this.testTypesSelected = value;
    },
    handleClick() {
      this.open = !this.open;
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
  const _component_CoreMultiselect = __nuxt_component_1$2;
  const _component_CoreOutlinedButton = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.handleClick,
    text: "Create test panel",
    color: "primary",
    icon: $data.addIcon
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
          class: "relative z-20"
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
                                _push6(` Create Test Panel `);
                              } else {
                                return [
                                  createTextVNode(" Create Test Panel ")
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
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="w-full flex"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  validation: "required",
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Short Name",
                                  validation: "required",
                                  modelValue: $data.shortName,
                                  "onUpdate:modelValue": ($event) => $data.shortName = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreMultiselect, {
                                  onUpdate: $options.updateTestType,
                                  label: "Select Test Types",
                                  items: $data.testTypes,
                                  "items-selected": $data.testTypesSelected,
                                  mode: "tags"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Description",
                                  validation: "required",
                                  modelValue: $data.description,
                                  "onUpdate:modelValue": ($event) => $data.description = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  text: "Dismiss",
                                  type: "button",
                                  click: $options.handleClick
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  type: "submit",
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  color: "success"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "w-full flex" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Name",
                                        validation: "required",
                                        modelValue: $data.name,
                                        "onUpdate:modelValue": ($event) => $data.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Short Name",
                                        validation: "required",
                                        modelValue: $data.shortName,
                                        "onUpdate:modelValue": ($event) => $data.shortName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full" }, [
                                      createVNode(_component_CoreMultiselect, {
                                        onUpdate: $options.updateTestType,
                                        label: "Select Test Types",
                                        items: $data.testTypes,
                                        "items-selected": $data.testTypesSelected,
                                        mode: "tags"
                                      }, null, 8, ["onUpdate", "items", "items-selected"])
                                    ]),
                                    createVNode("div", { class: "w-full flex" }, [
                                      createVNode(_component_FormKit, {
                                        type: "textarea",
                                        label: "Description",
                                        validation: "required",
                                        modelValue: $data.description,
                                        "onUpdate:modelValue": ($event) => $data.description = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      text: "Dismiss",
                                      type: "button",
                                      click: $options.handleClick
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      click: () => {
                                      },
                                      loading: $data.loading,
                                      icon: $data.saveIcon,
                                      text: "Save changes",
                                      color: "success"
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
                                  createTextVNode(" Create Test Panel ")
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
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Short Name",
                                      validation: "required",
                                      modelValue: $data.shortName,
                                      "onUpdate:modelValue": ($event) => $data.shortName = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full" }, [
                                    createVNode(_component_CoreMultiselect, {
                                      onUpdate: $options.updateTestType,
                                      label: "Select Test Types",
                                      items: $data.testTypes,
                                      "items-selected": $data.testTypesSelected,
                                      mode: "tags"
                                    }, null, 8, ["onUpdate", "items", "items-selected"])
                                  ]),
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      validation: "required",
                                      modelValue: $data.description,
                                      "onUpdate:modelValue": ($event) => $data.description = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    text: "Dismiss",
                                    type: "button",
                                    click: $options.handleClick
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    type: "submit",
                                    click: () => {
                                    },
                                    loading: $data.loading,
                                    icon: $data.saveIcon,
                                    text: "Save changes",
                                    color: "success"
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
                                createTextVNode(" Create Test Panel ")
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
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    validation: "required",
                                    modelValue: $data.name,
                                    "onUpdate:modelValue": ($event) => $data.name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Short Name",
                                    validation: "required",
                                    modelValue: $data.shortName,
                                    "onUpdate:modelValue": ($event) => $data.shortName = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full" }, [
                                  createVNode(_component_CoreMultiselect, {
                                    onUpdate: $options.updateTestType,
                                    label: "Select Test Types",
                                    items: $data.testTypes,
                                    "items-selected": $data.testTypesSelected,
                                    mode: "tags"
                                  }, null, 8, ["onUpdate", "items", "items-selected"])
                                ]),
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Description",
                                    validation: "required",
                                    modelValue: $data.description,
                                    "onUpdate:modelValue": ($event) => $data.description = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  text: "Dismiss",
                                  type: "button",
                                  click: $options.handleClick
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  type: "submit",
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  color: "success"
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
                                  createTextVNode(" Create Test Panel ")
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
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Short Name",
                                      validation: "required",
                                      modelValue: $data.shortName,
                                      "onUpdate:modelValue": ($event) => $data.shortName = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full" }, [
                                    createVNode(_component_CoreMultiselect, {
                                      onUpdate: $options.updateTestType,
                                      label: "Select Test Types",
                                      items: $data.testTypes,
                                      "items-selected": $data.testTypesSelected,
                                      mode: "tags"
                                    }, null, 8, ["onUpdate", "items", "items-selected"])
                                  ]),
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      validation: "required",
                                      modelValue: $data.description,
                                      "onUpdate:modelValue": ($event) => $data.description = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    text: "Dismiss",
                                    type: "button",
                                    click: $options.handleClick
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    type: "submit",
                                    click: () => {
                                    },
                                    loading: $data.loading,
                                    icon: $data.saveIcon,
                                    text: "Save changes",
                                    color: "success"
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
            class: "relative z-20"
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
                                createTextVNode(" Create Test Panel ")
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
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    validation: "required",
                                    modelValue: $data.name,
                                    "onUpdate:modelValue": ($event) => $data.name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Short Name",
                                    validation: "required",
                                    modelValue: $data.shortName,
                                    "onUpdate:modelValue": ($event) => $data.shortName = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full" }, [
                                  createVNode(_component_CoreMultiselect, {
                                    onUpdate: $options.updateTestType,
                                    label: "Select Test Types",
                                    items: $data.testTypes,
                                    "items-selected": $data.testTypesSelected,
                                    mode: "tags"
                                  }, null, 8, ["onUpdate", "items", "items-selected"])
                                ]),
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Description",
                                    validation: "required",
                                    modelValue: $data.description,
                                    "onUpdate:modelValue": ($event) => $data.description = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  text: "Dismiss",
                                  type: "button",
                                  click: $options.handleClick
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  type: "submit",
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  color: "success"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-panels/add-dialog/index.vue");
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
    XMarkIcon: render$1,
    UserIcon: render$2
  },
  data() {
    return {
      open: false,
      driverIcon: render$3,
      viewIcon: render$1$1,
      saveIcon: render$5,
      clearIcon: render$6,
      wardSelected: null,
      name: "",
      shortName: "",
      description: "",
      testTypes: new Array(),
      testTypesSelected: new Array(),
      rawTestTypes: new Array(),
      loading: false,
      details: { id: 0, name: "", short_name: "", description: "", test_types: [{ id: 0, name: "" }] },
      cookie: useCookie("token")
    };
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  methods: {
    async init() {
      this.open = true;
      this.loading = true;
      const { pending, error, data } = await useFetch(`${endpoints.testPanels}/${this.data.id}`, {
        method: "GET",
        headers: {
          "Authorization": `${this.cookie}`
        }
      }, "$zO6W2HBg68");
      if (data.value) {
        this.details = data.value;
        this.loading = false;
      }
      if (error.value) {
        console.log(error.value);
        this.loading = false;
        useNuxtApp().$toast.error(`An error occurred, please try again!`);
      }
    },
    handleClick() {
      this.open = !this.open;
    }
  }
};
const _imports_0 = "" + buildAssetsURL("emergency_post.45544db5.svg");
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_CoreLoader = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-b60b14cc><div data-v-b60b14cc>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.init,
    text: "View",
    color: "primary",
    icon: $data.viewIcon
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
          onClose: () => {
          },
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
                    _push4(`<div class="fixed inset-0 bg-black bg-opacity-25" data-v-b60b14cc${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="fixed inset-0 overflow-y-auto" data-v-b60b14cc${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center" data-v-b60b14cc${_scopeId2}>`);
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
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between" data-v-b60b14cc${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2" data-v-b60b14cc${_scopeId5}> View Test Panel `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Test Panel ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button data-v-b60b14cc${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}" class="flex items-center justify-center mx-auto my-20" data-v-b60b14cc${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreLoader, { loading: $data.loading }, null, _parent5, _scopeId4));
                          _push5(`</div><div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}" class="space-y-3 px-5 py-5" data-v-b60b14cc${_scopeId4}><div class="w-full flex flex-col space-y-1" data-v-b60b14cc${_scopeId4}><label class="font-semibold text-lg" data-v-b60b14cc${_scopeId4}>Name</label><p class="underline" data-v-b60b14cc${_scopeId4}>${ssrInterpolate($data.details.name)}</p></div><div class="w-full flex flex-col space-y-1" data-v-b60b14cc${_scopeId4}><label class="font-semibold text-lg" data-v-b60b14cc${_scopeId4}>Short Name</label><p class="underline" data-v-b60b14cc${_scopeId4}>${ssrInterpolate($data.details.short_name)}</p></div><div class="w-full flex flex-col space-y-1" data-v-b60b14cc${_scopeId4}><label class="font-semibold text-lg" data-v-b60b14cc${_scopeId4}>Description</label><p class="underline" data-v-b60b14cc${_scopeId4}>${ssrInterpolate($data.details.description)}</p></div><div class="w-full flex flex-col space-y-1" data-v-b60b14cc${_scopeId4}><label class="font-semibold list text-lg" data-v-b60b14cc${_scopeId4}>Test Types</label><!--[-->`);
                          ssrRenderList($data.details.test_types, (test) => {
                            _push5(`<div class="flex flex-wrap underline" data-v-b60b14cc${_scopeId4}>${ssrInterpolate(test.name)}</div>`);
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
                                  createTextVNode(" View Test Panel ")
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
                                createVNode("label", { class: "font-semibold text-lg" }, "Short Name"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.short_name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.description), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold list text-lg" }, "Test Types"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.test_types, (test) => {
                                  return openBlock(), createBlock("div", {
                                    key: test.id,
                                    class: "flex flex-wrap underline"
                                  }, toDisplayString(test.name), 1);
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
                                createTextVNode(" View Test Panel ")
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
                              createVNode("label", { class: "font-semibold text-lg" }, "Short Name"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.short_name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.description), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold list text-lg" }, "Test Types"),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.details.test_types, (test) => {
                                return openBlock(), createBlock("div", {
                                  key: test.id,
                                  class: "flex flex-wrap underline"
                                }, toDisplayString(test.name), 1);
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
                                  createTextVNode(" View Test Panel ")
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
                                createVNode("label", { class: "font-semibold text-lg" }, "Short Name"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.short_name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.description), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold list text-lg" }, "Test Types"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.test_types, (test) => {
                                  return openBlock(), createBlock("div", {
                                    key: test.id,
                                    class: "flex flex-wrap underline"
                                  }, toDisplayString(test.name), 1);
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
            onClose: () => {
            },
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
                                createTextVNode(" View Test Panel ")
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
                              createVNode("label", { class: "font-semibold text-lg" }, "Short Name"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.short_name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.description), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold list text-lg" }, "Test Types"),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.details.test_types, (test) => {
                                return openBlock(), createBlock("div", {
                                  key: test.id,
                                  class: "flex flex-wrap underline"
                                }, toDisplayString(test.name), 1);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-panels/view-dialog/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b60b14cc"]]);
const _sfc_main$2 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$1,
    UserIcon: render$2
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
      driverIcon: render$3,
      editIcon: render$7,
      saveIcon: render$5,
      clearIcon: render$6,
      wardSelected: null,
      name: "",
      shortName: "",
      description: "",
      testTypes: new Array(),
      testTypesSelected: new Array(),
      rawTestTypes: new Array(),
      loading: false,
      cookie: useCookie("token")
    };
  },
  methods: {
    async loadTestTypes() {
      const request = {
        route: endpoints.testTypes,
        method: "GET",
        token: `${this.cookie}`,
        body: {}
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        this.rawTestTypes = data.value.test_types;
        data.value.test_types.map((test) => {
          this.testTypes.push(test.name);
        });
      }
      if (error.value) {
        console.log(error.value);
      }
    },
    async init() {
      this.open = true;
      await this.loadTestTypes();
      this.testTypesSelected = new Array();
      const request = {
        route: `${endpoints.testPanels}/${this.data.id}`,
        method: "GET",
        token: `${this.cookie}`,
        body: {}
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        data.value.test_types.map((test) => {
          this.testTypesSelected.push(test.name);
        });
      }
      if (error.value) {
        console.log(error.value);
      }
    },
    /**
     * @method submitForm updates test panel data
     * @params null
     * @returns promise @type void
     */
    async submitForm() {
      this.loading = true;
      let testTypesId = new Array();
      this.testTypesSelected.map((name) => {
        this.rawTestTypes.filter((item) => {
          name == item.name && testTypesId.push(item.id);
        });
      });
      this.data.test_types = testTypesId;
      const request = {
        route: `${endpoints.testPanels}/${this.data.id}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: this.data
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.open = false;
        useNuxtApp().$toast.success(`Test panel updated successfully!`);
        this.$emit("update", true);
      }
      if (error.value) {
        console.log(error.value);
        useNuxtApp().$toast.error(errorMessage);
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
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_multi_select = resolveComponent("multi-select");
  const _component_CoreOutlinedButton = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.init,
    text: "Edit",
    color: "success",
    icon: $data.editIcon
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
                            class: "text-lg flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Edit Test Panel `);
                              } else {
                                return [
                                  createTextVNode(" Edit Test Panel ")
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
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="w-full flex"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  validation: "required",
                                  modelValue: $props.data.name,
                                  "onUpdate:modelValue": ($event) => $props.data.name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Short Name",
                                  validation: "required",
                                  modelValue: $props.data.short_name,
                                  "onUpdate:modelValue": ($event) => $props.data.short_name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Description",
                                  validation: "required",
                                  modelValue: $props.data.description,
                                  "onUpdate:modelValue": ($event) => $props.data.description = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="h-72 w-full flex flex-col space-y-2"${_scopeId5}><label class="font-medium"${_scopeId5}>Select Test Types</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.testTypesSelected,
                                  "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                  options: $data.testTypes,
                                  mode: "tags",
                                  clear: "",
                                  searchable: true,
                                  required: true,
                                  class: "outline-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  text: "Clear form",
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  }
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  type: "submit",
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  color: "success"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "w-full flex" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Name",
                                        validation: "required",
                                        modelValue: $props.data.name,
                                        "onUpdate:modelValue": ($event) => $props.data.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Short Name",
                                        validation: "required",
                                        modelValue: $props.data.short_name,
                                        "onUpdate:modelValue": ($event) => $props.data.short_name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex" }, [
                                      createVNode(_component_FormKit, {
                                        type: "textarea",
                                        label: "Description",
                                        validation: "required",
                                        modelValue: $props.data.description,
                                        "onUpdate:modelValue": ($event) => $props.data.description = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "h-72 w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Select Test Types"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.testTypesSelected,
                                        "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                        options: $data.testTypes,
                                        mode: "tags",
                                        clear: "",
                                        searchable: true,
                                        required: true,
                                        class: "outline-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                                      type: "submit",
                                      click: () => {
                                      },
                                      loading: $data.loading,
                                      icon: $data.saveIcon,
                                      text: "Save changes",
                                      color: "success"
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
                                  createTextVNode(" Edit Test Panel ")
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
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: $props.data.name,
                                      "onUpdate:modelValue": ($event) => $props.data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Short Name",
                                      validation: "required",
                                      modelValue: $props.data.short_name,
                                      "onUpdate:modelValue": ($event) => $props.data.short_name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      validation: "required",
                                      modelValue: $props.data.description,
                                      "onUpdate:modelValue": ($event) => $props.data.description = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "h-72 w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Test Types"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.testTypesSelected,
                                      "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                      options: $data.testTypes,
                                      mode: "tags",
                                      clear: "",
                                      searchable: true,
                                      required: true,
                                      class: "outline-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                                    type: "submit",
                                    click: () => {
                                    },
                                    loading: $data.loading,
                                    icon: $data.saveIcon,
                                    text: "Save changes",
                                    color: "success"
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
                                createTextVNode(" Edit Test Panel ")
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
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    validation: "required",
                                    modelValue: $props.data.name,
                                    "onUpdate:modelValue": ($event) => $props.data.name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Short Name",
                                    validation: "required",
                                    modelValue: $props.data.short_name,
                                    "onUpdate:modelValue": ($event) => $props.data.short_name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Description",
                                    validation: "required",
                                    modelValue: $props.data.description,
                                    "onUpdate:modelValue": ($event) => $props.data.description = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "h-72 w-full flex flex-col space-y-2" }, [
                                  createVNode("label", { class: "font-medium" }, "Select Test Types"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.testTypesSelected,
                                    "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                    options: $data.testTypes,
                                    mode: "tags",
                                    clear: "",
                                    searchable: true,
                                    required: true,
                                    class: "outline-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                                  type: "submit",
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  color: "success"
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
                                  createTextVNode(" Edit Test Panel ")
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
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: $props.data.name,
                                      "onUpdate:modelValue": ($event) => $props.data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Short Name",
                                      validation: "required",
                                      modelValue: $props.data.short_name,
                                      "onUpdate:modelValue": ($event) => $props.data.short_name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex" }, [
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      validation: "required",
                                      modelValue: $props.data.description,
                                      "onUpdate:modelValue": ($event) => $props.data.description = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "h-72 w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Test Types"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.testTypesSelected,
                                      "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                      options: $data.testTypes,
                                      mode: "tags",
                                      clear: "",
                                      searchable: true,
                                      required: true,
                                      class: "outline-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                                    type: "submit",
                                    click: () => {
                                    },
                                    loading: $data.loading,
                                    icon: $data.saveIcon,
                                    text: "Save changes",
                                    color: "success"
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
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Edit Test Panel ")
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
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    validation: "required",
                                    modelValue: $props.data.name,
                                    "onUpdate:modelValue": ($event) => $props.data.name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Short Name",
                                    validation: "required",
                                    modelValue: $props.data.short_name,
                                    "onUpdate:modelValue": ($event) => $props.data.short_name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex" }, [
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Description",
                                    validation: "required",
                                    modelValue: $props.data.description,
                                    "onUpdate:modelValue": ($event) => $props.data.description = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "h-72 w-full flex flex-col space-y-2" }, [
                                  createVNode("label", { class: "font-medium" }, "Select Test Types"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.testTypesSelected,
                                    "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                    options: $data.testTypes,
                                    mode: "tags",
                                    clear: "",
                                    searchable: true,
                                    required: true,
                                    class: "outline-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                                  type: "submit",
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  color: "success"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-panels/edit-dialog/index.vue");
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
    XMarkIcon: render$1,
    ExclamationTriangleIcon: render$4$1
  },
  data() {
    return {
      show: false,
      deleteIcon: render$8,
      loading: false,
      reason: ""
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup() {
    const cookie = useCookie("token");
    return { cookie };
  },
  methods: {
    /**
     * @method deleteData deletes test type
     * @param id test type id
     * @return promise @typeof void
     */
    async deleteData(id) {
      this.loading = true;
      const request = {
        route: `${endpoints.testPanels}/${id}`,
        method: "DELETE",
        token: `${this.cookie}`,
        body: {
          "retired_reason": this.reason
        }
      };
      const { pending, error, data } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`Test panel deleted successfully!`);
        this.loading = false;
        this.$emit("update", true);
      }
      if (error.value) {
        useNuxtApp().$toast.error(`An error occurred, please try again!`);
        console.log(error.value);
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
  const _component_CoreOutlinedButton = __nuxt_component_1$3;
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-panels/delete-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Test Panels`
    });
  },
  components: { MagnifyingGlassIcon: render },
  data() {
    return {
      header: "Test Panels",
      testPanels: new Array(),
      loading: false,
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
      search: "",
      searchValue: "",
      cookie: useCookie("token"),
      headers: [
        { text: "id", value: "id", sortable: true },
        { text: "name", value: "name", sortable: true },
        { text: "short name", value: "short_name" },
        { text: "description", value: "description", sortable: true },
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
        route: endpoints.testPanels,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.testPanels = data.value;
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    updateTestPanels(value) {
      if (value) {
        this.init();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$5;
  const _component_TestPanelsAddDialog = __nuxt_component_1;
  const _component_CoreSearchBar = __nuxt_component_1$1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_TestPanelsViewDialog = __nuxt_component_4;
  const _component_TestPanelsEditDialog = __nuxt_component_5;
  const _component_TestPanelsDeleteDialog = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><div class="text-2xl font-semibold flex items-center uppercase"><img${ssrRenderAttr("src", _imports_0$1)} alt="report-icon" class="w-8 h-8 mr-2"> ${ssrInterpolate($data.header)}</div><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_TestPanelsAddDialog, { onUpdate: $options.updateTestPanels }, null, _parent));
  _push(`</div></div><div class="flex justify-end w-full px-2 py-2 mb-2">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    "onUpdate:search": ($event) => $data.search = $event,
    onUpdate: $options.updateSearch
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $data.testPanels,
    loading: $data.loading,
    "search-value": $data.searchValue,
    "search-field": "name"
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TestPanelsViewDialog, { data: item }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_TestPanelsEditDialog, {
          data: item,
          onUpdate: $options.updateTestPanels
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_TestPanelsDeleteDialog, {
          data: item,
          onUpdate: $options.updateTestPanels
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_TestPanelsViewDialog, { data: item }, null, 8, ["data"]),
            createVNode(_component_TestPanelsEditDialog, {
              data: item,
              onUpdate: $options.updateTestPanels
            }, null, 8, ["data", "onUpdate"]),
            createVNode(_component_TestPanelsDeleteDialog, {
              data: item,
              onUpdate: $options.updateTestPanels
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-catalog/test-panels.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const testPanels = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { testPanels as default };
//# sourceMappingURL=test-panels-550d37cd.mjs.map
