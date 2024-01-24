import { _ as _sfc_main$7 } from './Breadcrumb-92cb573c.mjs';
import { a as useCookie, b as useNuxtApp, _ as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1$3 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, resolveComponent, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef } from 'vue';
import { e as errorMessage } from './constants-353d90a1.mjs';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/vue';
import { a as render$4$1, g as getParameterizedUrl, e as endpoints, f as fetchRequest, r as render$5 } from './fetch-40f40580.mjs';
import { r as render } from './XMarkIcon-170c776f.mjs';
import { r as render$3 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$6 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './microscope-83b268d0.mjs';
import { r as render$7 } from './UserIcon-3d66d73e.mjs';
import { r as render$8 } from './WrenchScrewdriverIcon-771ce8f4.mjs';
import { _ as __nuxt_component_1$2 } from './SearchBar-0bf20ba4.mjs';
import { _ as __nuxt_component_2$1 } from './Datatable-45e62187.mjs';
import moment from 'moment';
import { a as render$1, r as render$2 } from './PencilSquareIcon-77446728.mjs';
import { r as render$4 } from './TrashIcon-b1416ff8.mjs';
import { u as useSeoMeta } from './index-10289ccc.mjs';
import { P as Package } from './package-93ceb647.mjs';
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
import './PrinterIcon-02ac6ae4.mjs';
import './Loader-86943425.mjs';

const _sfc_main$6 = {
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
      addIcon: render$5,
      saveIcon: render$3,
      clearIcon: render$6,
      open: false,
      loading: false,
      equipmentDetails: { name: "", description: "", supported_tests: new Array() },
      instruments: new Array(),
      testTypes: new Array(),
      supportedTests: new Array(),
      supportedTest: new Array(),
      cookie: useCookie("token")
    };
  },
  methods: {
    /**
     * @method adjustVisibility
     * @returns void
     */
    adjustVisibility() {
      this.open = !this.open;
    },
    /**
     * @method loadTests
     * @returns @type Promise void
     */
    async loadTests() {
      this.adjustVisibility();
      const request = {
        route: endpoints.testTypes,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, pending, error } = await fetchRequest(request);
      if (data.value) {
        this.testTypes = data.value.test_types;
        data.value.test_types.map((testType) => {
          this.supportedTests.push(testType.name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    /**
     * @method submitForm
     * @return @type Promise void
     */
    async submitForm() {
      this.loading = true;
      let supported_tests = new Array();
      this.testTypes.map((testType) => {
        this.supportedTest.map((test) => {
          if (testType.name === test) {
            supported_tests.push(testType.id);
          }
        });
      });
      this.equipmentDetails.supported_tests = supported_tests;
      const request = {
        route: endpoints.instrument.create,
        method: "POST",
        token: `${this.cookie}`,
        body: this.equipmentDetails
      };
      const { data, pending, error } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.closeForm();
        useNuxtApp().$toast.success(`Instrument added successfully!`);
        this.$emit("action-completed", []);
      }
      if (error.value) {
        error.value.data.error == "Validation failed: Name has already been taken" ? useNuxtApp().$toast.error("Name has already been taken") : useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
        console.error(error.value);
      }
    },
    /**
     * @method closeForm
     * @returns void
     */
    closeForm() {
      this.open = false;
      this.equipmentDetails = { name: "", description: "", supported_tests: new Array() };
      this.supportedTest = new Array();
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
    text: "Add instrument",
    color: "primary",
    icon: $data.addIcon,
    click: $options.loadTests
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
          onClose: $options.closeForm,
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Add Instrument `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Add Instrument ")
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
                            id: "patientForm",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  modelValue: $data.equipmentDetails.name,
                                  "onUpdate:modelValue": ($event) => $data.equipmentDetails.name = $event,
                                  class: "w-full",
                                  validation: "required|text"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  modelValue: $data.equipmentDetails.description,
                                  "onUpdate:modelValue": ($event) => $data.equipmentDetails.description = $event,
                                  label: "Description",
                                  validation: "required"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex flex-col space-y-2 pb-40"${_scopeId5}><label class="font-medium"${_scopeId5}>Supported tests</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.supportedTest,
                                  "onUpdate:modelValue": ($event) => $data.supportedTest = $event,
                                  options: $data.supportedTests,
                                  mode: "tags",
                                  searchable: true,
                                  required: true,
                                  clear: "",
                                  class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  text: "Close",
                                  click: () => {
                                    $options.closeForm;
                                  }
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  click: () => {
                                  },
                                  text: "Save changes",
                                  loading: $data.loading
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Name",
                                        modelValue: $data.equipmentDetails.name,
                                        "onUpdate:modelValue": ($event) => $data.equipmentDetails.name = $event,
                                        class: "w-full",
                                        validation: "required|text"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "textarea",
                                        modelValue: $data.equipmentDetails.description,
                                        "onUpdate:modelValue": ($event) => $data.equipmentDetails.description = $event,
                                        label: "Description",
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                      createVNode("label", { class: "font-medium" }, "Supported tests"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.supportedTest,
                                        "onUpdate:modelValue": ($event) => $data.supportedTest = $event,
                                        options: $data.supportedTests,
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Close",
                                      click: () => {
                                        $options.closeForm;
                                      }
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "success",
                                      icon: $data.saveIcon,
                                      click: () => {
                                      },
                                      text: "Save changes",
                                      loading: $data.loading
                                    }, null, 8, ["icon", "loading"])
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
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Add Instrument ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.adjustVisibility }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              id: "patientForm",
                              "submit-label": "Update",
                              onSubmit: $options.submitForm,
                              actions: false
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      modelValue: $data.equipmentDetails.name,
                                      "onUpdate:modelValue": ($event) => $data.equipmentDetails.name = $event,
                                      class: "w-full",
                                      validation: "required|text"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      modelValue: $data.equipmentDetails.description,
                                      "onUpdate:modelValue": ($event) => $data.equipmentDetails.description = $event,
                                      label: "Description",
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                    createVNode("label", { class: "font-medium" }, "Supported tests"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.supportedTest,
                                      "onUpdate:modelValue": ($event) => $data.supportedTest = $event,
                                      options: $data.supportedTests,
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    text: "Close",
                                    click: () => {
                                      $options.closeForm;
                                    }
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    type: "submit",
                                    color: "success",
                                    icon: $data.saveIcon,
                                    click: () => {
                                    },
                                    text: "Save changes",
                                    loading: $data.loading
                                  }, null, 8, ["icon", "loading"])
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
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Add Instrument ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.adjustVisibility }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            id: "patientForm",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    modelValue: $data.equipmentDetails.name,
                                    "onUpdate:modelValue": ($event) => $data.equipmentDetails.name = $event,
                                    class: "w-full",
                                    validation: "required|text"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    modelValue: $data.equipmentDetails.description,
                                    "onUpdate:modelValue": ($event) => $data.equipmentDetails.description = $event,
                                    label: "Description",
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                  createVNode("label", { class: "font-medium" }, "Supported tests"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.supportedTest,
                                    "onUpdate:modelValue": ($event) => $data.supportedTest = $event,
                                    options: $data.supportedTests,
                                    mode: "tags",
                                    searchable: true,
                                    required: true,
                                    clear: "",
                                    class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  text: "Close",
                                  click: () => {
                                    $options.closeForm;
                                  }
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  click: () => {
                                  },
                                  text: "Save changes",
                                  loading: $data.loading
                                }, null, 8, ["icon", "loading"])
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
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Add Instrument ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.adjustVisibility }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              id: "patientForm",
                              "submit-label": "Update",
                              onSubmit: $options.submitForm,
                              actions: false
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      modelValue: $data.equipmentDetails.name,
                                      "onUpdate:modelValue": ($event) => $data.equipmentDetails.name = $event,
                                      class: "w-full",
                                      validation: "required|text"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      modelValue: $data.equipmentDetails.description,
                                      "onUpdate:modelValue": ($event) => $data.equipmentDetails.description = $event,
                                      label: "Description",
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                    createVNode("label", { class: "font-medium" }, "Supported tests"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.supportedTest,
                                      "onUpdate:modelValue": ($event) => $data.supportedTest = $event,
                                      options: $data.supportedTests,
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    text: "Close",
                                    click: () => {
                                      $options.closeForm;
                                    }
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    type: "submit",
                                    color: "success",
                                    icon: $data.saveIcon,
                                    click: () => {
                                    },
                                    text: "Save changes",
                                    loading: $data.loading
                                  }, null, 8, ["icon", "loading"])
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
            onClose: $options.closeForm,
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
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Add Instrument ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.adjustVisibility }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            id: "patientForm",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    modelValue: $data.equipmentDetails.name,
                                    "onUpdate:modelValue": ($event) => $data.equipmentDetails.name = $event,
                                    class: "w-full",
                                    validation: "required|text"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    modelValue: $data.equipmentDetails.description,
                                    "onUpdate:modelValue": ($event) => $data.equipmentDetails.description = $event,
                                    label: "Description",
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                  createVNode("label", { class: "font-medium" }, "Supported tests"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.supportedTest,
                                    "onUpdate:modelValue": ($event) => $data.supportedTest = $event,
                                    options: $data.supportedTests,
                                    mode: "tags",
                                    searchable: true,
                                    required: true,
                                    clear: "",
                                    class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  text: "Close",
                                  click: () => {
                                    $options.closeForm;
                                  }
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  click: () => {
                                  },
                                  text: "Save changes",
                                  loading: $data.loading
                                }, null, 8, ["icon", "loading"])
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/instruments/add-dialog/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = {
  components: {
    ExclamationTriangleIcon: render$4$1
  },
  props: {
    text: {
      required: true,
      type: String
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ExclamationTriangleIcon = resolveComponent("ExclamationTriangleIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center space-x-3 rounded px-5 py-5 bg-red-200" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ExclamationTriangleIcon, { class: "w-5 h-5 text-red-500" }, null, _parent));
  _push(`<p class="text text-red-500">${ssrInterpolate($props.text)}</p></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Alert.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render,
    UserIcon: render$7
  },
  data() {
    return {
      open: false,
      driverIcon: render$8,
      addIcon: render$5,
      saveIcon: render$3,
      clearIcon: render$6
    };
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_CoreAlert = __nuxt_component_1;
  const _component_CoreOutlinedButton = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    disabled: true,
    click: $options.handleClick,
    text: "New driver",
    color: "warning",
    icon: $data.driverIcon
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
                                _push6(` Add new equipment drivers `);
                              } else {
                                return [
                                  createTextVNode(" Add new equipment drivers ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="mt-2 space-y-3 px-5"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreAlert, { text: "Warning: Do not install plugins from untrusted sources!" }, null, _parent5, _scopeId4));
                          _push5(`<div class="flex items-center justify-center w-full"${_scopeId4}><label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"${_scopeId4}><div class="flex flex-col items-center justify-center pt-5 pb-6"${_scopeId4}><svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId4}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"${_scopeId4}></path></svg><p class="mb-2 text-sm text-gray-500"${_scopeId4}><span class="font-semibold"${_scopeId4}>Click to upload</span> or drag and drop</p><p class="text-xs text-gray-500"${_scopeId4}>EXE, ZIP, TG (Max 500MB)</p></div><input id="dropzone-file" type="file" class="hidden"${_scopeId4}></label></div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreOutlinedButton, { text: "Dismiss" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            click: $options.handleClick,
                            icon: $data.saveIcon,
                            text: "Save"
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
                                  createTextVNode(" Add new equipment drivers ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                              createVNode(_component_CoreAlert, { text: "Warning: Do not install plugins from untrusted sources!" }),
                              createVNode("div", { class: "flex items-center justify-center w-full" }, [
                                createVNode("label", {
                                  for: "dropzone-file",
                                  class: "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
                                }, [
                                  createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                                    (openBlock(), createBlock("svg", {
                                      "aria-hidden": "true",
                                      class: "w-10 h-10 mb-3 text-gray-400",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                      })
                                    ])),
                                    createVNode("p", { class: "mb-2 text-sm text-gray-500" }, [
                                      createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                      createTextVNode(" or drag and drop")
                                    ]),
                                    createVNode("p", { class: "text-xs text-gray-500" }, "EXE, ZIP, TG (Max 500MB)")
                                  ]),
                                  createVNode("input", {
                                    id: "dropzone-file",
                                    type: "file",
                                    class: "hidden"
                                  })
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                              createVNode(_component_CoreOutlinedButton, { text: "Dismiss" }),
                              createVNode(_component_CoreActionButton, {
                                click: $options.handleClick,
                                icon: $data.saveIcon,
                                text: "Save"
                              }, null, 8, ["click", "icon"])
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
                                createTextVNode(" Add new equipment drivers ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                            createVNode(_component_CoreAlert, { text: "Warning: Do not install plugins from untrusted sources!" }),
                            createVNode("div", { class: "flex items-center justify-center w-full" }, [
                              createVNode("label", {
                                for: "dropzone-file",
                                class: "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
                              }, [
                                createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                                  (openBlock(), createBlock("svg", {
                                    "aria-hidden": "true",
                                    class: "w-10 h-10 mb-3 text-gray-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    })
                                  ])),
                                  createVNode("p", { class: "mb-2 text-sm text-gray-500" }, [
                                    createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                    createTextVNode(" or drag and drop")
                                  ]),
                                  createVNode("p", { class: "text-xs text-gray-500" }, "EXE, ZIP, TG (Max 500MB)")
                                ]),
                                createVNode("input", {
                                  id: "dropzone-file",
                                  type: "file",
                                  class: "hidden"
                                })
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                            createVNode(_component_CoreOutlinedButton, { text: "Dismiss" }),
                            createVNode(_component_CoreActionButton, {
                              click: $options.handleClick,
                              icon: $data.saveIcon,
                              text: "Save"
                            }, null, 8, ["click", "icon"])
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
                                  createTextVNode(" Add new equipment drivers ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                              createVNode(_component_CoreAlert, { text: "Warning: Do not install plugins from untrusted sources!" }),
                              createVNode("div", { class: "flex items-center justify-center w-full" }, [
                                createVNode("label", {
                                  for: "dropzone-file",
                                  class: "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
                                }, [
                                  createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                                    (openBlock(), createBlock("svg", {
                                      "aria-hidden": "true",
                                      class: "w-10 h-10 mb-3 text-gray-400",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                      })
                                    ])),
                                    createVNode("p", { class: "mb-2 text-sm text-gray-500" }, [
                                      createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                      createTextVNode(" or drag and drop")
                                    ]),
                                    createVNode("p", { class: "text-xs text-gray-500" }, "EXE, ZIP, TG (Max 500MB)")
                                  ]),
                                  createVNode("input", {
                                    id: "dropzone-file",
                                    type: "file",
                                    class: "hidden"
                                  })
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                              createVNode(_component_CoreOutlinedButton, { text: "Dismiss" }),
                              createVNode(_component_CoreActionButton, {
                                click: $options.handleClick,
                                icon: $data.saveIcon,
                                text: "Save"
                              }, null, 8, ["click", "icon"])
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
                                createTextVNode(" Add new equipment drivers ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                            createVNode(_component_CoreAlert, { text: "Warning: Do not install plugins from untrusted sources!" }),
                            createVNode("div", { class: "flex items-center justify-center w-full" }, [
                              createVNode("label", {
                                for: "dropzone-file",
                                class: "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
                              }, [
                                createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                                  (openBlock(), createBlock("svg", {
                                    "aria-hidden": "true",
                                    class: "w-10 h-10 mb-3 text-gray-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    })
                                  ])),
                                  createVNode("p", { class: "mb-2 text-sm text-gray-500" }, [
                                    createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                    createTextVNode(" or drag and drop")
                                  ]),
                                  createVNode("p", { class: "text-xs text-gray-500" }, "EXE, ZIP, TG (Max 500MB)")
                                ]),
                                createVNode("input", {
                                  id: "dropzone-file",
                                  type: "file",
                                  class: "hidden"
                                })
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                            createVNode(_component_CoreOutlinedButton, { text: "Dismiss" }),
                            createVNode(_component_CoreActionButton, {
                              click: $options.handleClick,
                              icon: $data.saveIcon,
                              text: "Save"
                            }, null, 8, ["click", "icon"])
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
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/instruments/add-driver/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const open = ref(false);
    const loading = ref(false);
    const data = ref({
      name: "",
      description: "",
      ip_address: "",
      hostname: "",
      supported_tests: "",
      created_date: ""
    });
    const cookie = useCookie("token");
    const loadingInstrument = async () => {
      loading.value = true;
      const request = {
        route: `${endpoints.instrument.show}/${props.id}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const v = await fetchRequest(request);
      if (v.data.value) {
        data.value = v.data.value;
        open.value = true;
      }
      loading.value = false;
      if (v.error.value) {
        loading.value = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    };
    const adjustVisibility = () => open.value = !open.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreActionButton = __nuxt_component_0;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_CoreOutlinedButton = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        text: "View",
        color: "success",
        icon: unref(render$1),
        click: loadingInstrument
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: unref(open),
        as: "template"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              onClose: adjustVisibility,
              class: "relative z-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
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
                  _push3(ssrRenderComponent(unref(TransitionChild), {
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
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Instrument Details `);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" Instrument Details ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<button${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(render), { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                              _push5(`</button></div>`);
                              _push5(ssrRenderComponent(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: _ctx.submitForm,
                                actions: false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a, _b, _c, _d, _e, _f;
                                  if (_push6) {
                                    _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}><label class="font-semibold text-lg"${_scopeId5}>${ssrInterpolate("Name")}</label><p${_scopeId5}>${ssrInterpolate(unref(data).name)}</p></div><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}><label class="font-semibold text-lg"${_scopeId5}>${ssrInterpolate("Host Name")}</label><p${_scopeId5}>${ssrInterpolate((_a = unref(data).hostname) != null ? _a : "--")}</p></div><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}><label class="font-semibold text-lg"${_scopeId5}>${ssrInterpolate("IP Address")}</label><p${_scopeId5}>${ssrInterpolate((_b = unref(data).ip_address) != null ? _b : "--")}</p></div><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}><label class="font-semibold text-lg"${_scopeId5}>${ssrInterpolate("Can Perform")}</label><!--[-->`);
                                    ssrRenderList(unref(data).supported_tests, (test, index) => {
                                      _push6(`<p${_scopeId5}>${ssrInterpolate(test.name.charAt(0).toUpperCase() + test.name.slice(1))}</p>`);
                                    });
                                    _push6(`<!--]--></div><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}><label class="font-semibold text-lg"${_scopeId5}>${ssrInterpolate("Registration Date")}</label><p${_scopeId5}>${ssrInterpolate(unref(moment)(unref(data).created_date).format("DD/MMM/YYYY"))}</p></div><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}><label class="font-semibold text-lg"${_scopeId5}>${ssrInterpolate("Equiment Description")}</label><p${_scopeId5}>${ssrInterpolate((_c = unref(data).description) != null ? _c : "--")}</p></div></div><div class="mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: adjustVisibility,
                                      text: "Close"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Name")),
                                          createVNode("p", null, toDisplayString(unref(data).name), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Host Name")),
                                          createVNode("p", null, toDisplayString((_d = unref(data).hostname) != null ? _d : "--"), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("IP Address")),
                                          createVNode("p", null, toDisplayString((_e = unref(data).ip_address) != null ? _e : "--"), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Can Perform")),
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data).supported_tests, (test, index) => {
                                            return openBlock(), createBlock("p", { key: index }, toDisplayString(test.name.charAt(0).toUpperCase() + test.name.slice(1)), 1);
                                          }), 128))
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Registration Date")),
                                          createVNode("p", null, toDisplayString(unref(moment)(unref(data).created_date).format("DD/MMM/YYYY")), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Equiment Description")),
                                          createVNode("p", null, toDisplayString((_f = unref(data).description) != null ? _f : "--"), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                        createVNode(_component_CoreOutlinedButton, {
                                          type: "button",
                                          click: adjustVisibility,
                                          text: "Close"
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-xl text-black flex items-center font-medium leading-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" Instrument Details ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: adjustVisibility }, [
                                    createVNode(unref(render), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  id: "patientForm",
                                  "submit-label": "Update",
                                  onSubmit: _ctx.submitForm,
                                  actions: false
                                }, {
                                  default: withCtx(() => {
                                    var _a, _b, _c;
                                    return [
                                      createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Name")),
                                          createVNode("p", null, toDisplayString(unref(data).name), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Host Name")),
                                          createVNode("p", null, toDisplayString((_a = unref(data).hostname) != null ? _a : "--"), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("IP Address")),
                                          createVNode("p", null, toDisplayString((_b = unref(data).ip_address) != null ? _b : "--"), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Can Perform")),
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data).supported_tests, (test, index) => {
                                            return openBlock(), createBlock("p", { key: index }, toDisplayString(test.name.charAt(0).toUpperCase() + test.name.slice(1)), 1);
                                          }), 128))
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Registration Date")),
                                          createVNode("p", null, toDisplayString(unref(moment)(unref(data).created_date).format("DD/MMM/YYYY")), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Equiment Description")),
                                          createVNode("p", null, toDisplayString((_c = unref(data).description) != null ? _c : "--"), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                        createVNode(_component_CoreOutlinedButton, {
                                          type: "button",
                                          click: adjustVisibility,
                                          text: "Close"
                                        })
                                      ])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-xl text-black flex items-center font-medium leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" Instrument Details ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: adjustVisibility }, [
                                  createVNode(unref(render), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: _ctx.submitForm,
                                actions: false
                              }, {
                                default: withCtx(() => {
                                  var _a, _b, _c;
                                  return [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Name")),
                                        createVNode("p", null, toDisplayString(unref(data).name), 1)
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Host Name")),
                                        createVNode("p", null, toDisplayString((_a = unref(data).hostname) != null ? _a : "--"), 1)
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("IP Address")),
                                        createVNode("p", null, toDisplayString((_b = unref(data).ip_address) != null ? _b : "--"), 1)
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Can Perform")),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data).supported_tests, (test, index) => {
                                          return openBlock(), createBlock("p", { key: index }, toDisplayString(test.name.charAt(0).toUpperCase() + test.name.slice(1)), 1);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Registration Date")),
                                        createVNode("p", null, toDisplayString(unref(moment)(unref(data).created_date).format("DD/MMM/YYYY")), 1)
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Equiment Description")),
                                        createVNode("p", null, toDisplayString((_c = unref(data).description) != null ? _c : "--"), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreOutlinedButton, {
                                        type: "button",
                                        click: adjustVisibility,
                                        text: "Close"
                                      })
                                    ])
                                  ];
                                }),
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
                    createVNode(unref(TransitionChild), {
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
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-xl text-black flex items-center font-medium leading-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" Instrument Details ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: adjustVisibility }, [
                                    createVNode(unref(render), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  id: "patientForm",
                                  "submit-label": "Update",
                                  onSubmit: _ctx.submitForm,
                                  actions: false
                                }, {
                                  default: withCtx(() => {
                                    var _a, _b, _c;
                                    return [
                                      createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Name")),
                                          createVNode("p", null, toDisplayString(unref(data).name), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Host Name")),
                                          createVNode("p", null, toDisplayString((_a = unref(data).hostname) != null ? _a : "--"), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("IP Address")),
                                          createVNode("p", null, toDisplayString((_b = unref(data).ip_address) != null ? _b : "--"), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Can Perform")),
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data).supported_tests, (test, index) => {
                                            return openBlock(), createBlock("p", { key: index }, toDisplayString(test.name.charAt(0).toUpperCase() + test.name.slice(1)), 1);
                                          }), 128))
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Registration Date")),
                                          createVNode("p", null, toDisplayString(unref(moment)(unref(data).created_date).format("DD/MMM/YYYY")), 1)
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Equiment Description")),
                                          createVNode("p", null, toDisplayString((_c = unref(data).description) != null ? _c : "--"), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                        createVNode(_component_CoreOutlinedButton, {
                                          type: "button",
                                          click: adjustVisibility,
                                          text: "Close"
                                        })
                                      ])
                                    ];
                                  }),
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
              createVNode(unref(Dialog), {
                as: "div",
                onClose: adjustVisibility,
                class: "relative z-10"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
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
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-xl text-black flex items-center font-medium leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" Instrument Details ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: adjustVisibility }, [
                                  createVNode(unref(render), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: _ctx.submitForm,
                                actions: false
                              }, {
                                default: withCtx(() => {
                                  var _a, _b, _c;
                                  return [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Name")),
                                        createVNode("p", null, toDisplayString(unref(data).name), 1)
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Host Name")),
                                        createVNode("p", null, toDisplayString((_a = unref(data).hostname) != null ? _a : "--"), 1)
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("IP Address")),
                                        createVNode("p", null, toDisplayString((_b = unref(data).ip_address) != null ? _b : "--"), 1)
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Can Perform")),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data).supported_tests, (test, index) => {
                                          return openBlock(), createBlock("p", { key: index }, toDisplayString(test.name.charAt(0).toUpperCase() + test.name.slice(1)), 1);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Registration Date")),
                                        createVNode("p", null, toDisplayString(unref(moment)(unref(data).created_date).format("DD/MMM/YYYY")), 1)
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Equiment Description")),
                                        createVNode("p", null, toDisplayString((_c = unref(data).description) != null ? _c : "--"), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreOutlinedButton, {
                                        type: "button",
                                        click: adjustVisibility,
                                        text: "Close"
                                      })
                                    ])
                                  ];
                                }),
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
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/instruments/view-dialog/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  emits: ["action-completed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const open = ref(false);
    const loading = ref(false);
    const testTypes = ref([]);
    const supportedTests = ref([]);
    const supportedTest = ref([]);
    const body = ref({
      name: "",
      description: "",
      ip_address: "",
      hostname: "",
      created_date: "",
      supported_tests: new Array()
    });
    const cookie = useCookie("token");
    const loadTests = async () => {
      const request = {
        route: `${endpoints.testTypes}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const v = await fetchRequest(request);
      if (v.data.value) {
        testTypes.value = v.data.value.test_types;
        testTypes.value.map((test) => {
          supportedTests.value.push(test.name);
        });
      }
      loading.value = false;
      if (v.error.value) {
        console.error(v.error.value);
      }
    };
    const loadingInstrument = async () => {
      loading.value = true;
      supportedTest.value = new Array();
      await loadTests();
      const request = {
        route: `${endpoints.instrument.edit}/${props.id}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const v = await fetchRequest(request);
      if (v.data.value) {
        body.value = v.data.value;
        open.value = true;
        v.data.value.supported_tests.map((test) => {
          supportedTest.value.push(test.name);
        });
        console.log(body.value);
      }
      loading.value = false;
      if (v.error.value) {
        loading.value = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    };
    const adjustVisibility = () => open.value = !open.value;
    const submitForm = async () => {
      loading.value = true;
      let supported_tests = new Array();
      testTypes.value.map((test) => {
        supportedTest.value.map((item) => {
          if (test.name == item) {
            supported_tests.push(test.id);
          }
        });
      });
      body.value.supported_tests = supported_tests;
      const request = {
        route: `${endpoints.instrument.update}/${props.id}`,
        method: "PATCH",
        token: cookie.value,
        body: body.value
      };
      const { data, pending, error } = await fetchRequest(request);
      loading.value = pending;
      if (data.value) {
        adjustVisibility();
        useNuxtApp().$toast.success(`Instrument details updated successfully!`);
        emit("action-completed", []);
      }
      if (error.value)
        useNuxtApp().$toast.error(`${errorMessage}`);
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreActionButton = __nuxt_component_0;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_multi_select = resolveComponent("multi-select");
      const _component_CoreOutlinedButton = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        text: "Edit",
        color: "primary",
        icon: unref(render$2),
        click: loadingInstrument
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: unref(open),
        as: "template"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              onClose: adjustVisibility,
              class: "relative z-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
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
                  _push3(ssrRenderComponent(unref(TransitionChild), {
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
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Edit Instrument Details `);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" Edit Instrument Details ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<button${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(render), { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                              _push5(`</button></div>`);
                              _push5(ssrRenderComponent(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      modelValue: unref(body).name,
                                      "onUpdate:modelValue": ($event) => unref(body).name = $event,
                                      class: "w-full",
                                      validation: "required|text"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "Host Name",
                                      modelValue: unref(body).hostname,
                                      "onUpdate:modelValue": ($event) => unref(body).hostname = $event,
                                      class: "w-full",
                                      validation: "required|text"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="w-full grid grid-cols-1"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "IP Address",
                                      modelValue: unref(body).ip_address,
                                      "onUpdate:modelValue": ($event) => unref(body).ip_address = $event,
                                      validation: [
                                        ["required"],
                                        [
                                          "matches",
                                          /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i
                                        ]
                                      ]
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "textarea",
                                      modelValue: unref(body).description,
                                      "onUpdate:modelValue": ($event) => unref(body).description = $event,
                                      label: "Description",
                                      validation: "required"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="w-full flex flex-col space-y-2 pb-40"${_scopeId5}><label class="font-medium"${_scopeId5}>Supported tests</label>`);
                                    _push6(ssrRenderComponent(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: unref(supportedTest),
                                      "onUpdate:modelValue": ($event) => isRef(supportedTest) ? supportedTest.value = $event : null,
                                      options: unref(supportedTests),
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></div><div class="mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: adjustVisibility,
                                      text: "Close"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "success",
                                      icon: unref(render$3),
                                      click: () => {
                                      },
                                      text: "Save changes",
                                      loading: unref(loading)
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode(_component_FormKit, {
                                            type: "text",
                                            label: "Name",
                                            modelValue: unref(body).name,
                                            "onUpdate:modelValue": ($event) => unref(body).name = $event,
                                            class: "w-full",
                                            validation: "required|text"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode(_component_FormKit, {
                                            type: "text",
                                            label: "Host Name",
                                            modelValue: unref(body).hostname,
                                            "onUpdate:modelValue": ($event) => unref(body).hostname = $event,
                                            class: "w-full",
                                            validation: "required|text"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1" }, [
                                          createVNode(_component_FormKit, {
                                            type: "text",
                                            label: "IP Address",
                                            modelValue: unref(body).ip_address,
                                            "onUpdate:modelValue": ($event) => unref(body).ip_address = $event,
                                            validation: [
                                              ["required"],
                                              [
                                                "matches",
                                                /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i
                                              ]
                                            ]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "validation"])
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode(_component_FormKit, {
                                            type: "textarea",
                                            modelValue: unref(body).description,
                                            "onUpdate:modelValue": ($event) => unref(body).description = $event,
                                            label: "Description",
                                            validation: "required"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                          createVNode("label", { class: "font-medium" }, "Supported tests"),
                                          createVNode(_component_multi_select, {
                                            style: { "--ms-max-height": "none !important" },
                                            modelValue: unref(supportedTest),
                                            "onUpdate:modelValue": ($event) => isRef(supportedTest) ? supportedTest.value = $event : null,
                                            options: unref(supportedTests),
                                            mode: "tags",
                                            searchable: true,
                                            required: true,
                                            clear: "",
                                            class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                        createVNode(_component_CoreOutlinedButton, {
                                          type: "button",
                                          click: adjustVisibility,
                                          text: "Close"
                                        }),
                                        createVNode(_component_CoreActionButton, {
                                          type: "submit",
                                          color: "success",
                                          icon: unref(render$3),
                                          click: () => {
                                          },
                                          text: "Save changes",
                                          loading: unref(loading)
                                        }, null, 8, ["icon", "loading"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-xl text-black flex items-center font-medium leading-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" Edit Instrument Details ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: adjustVisibility }, [
                                    createVNode(unref(render), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  id: "patientForm",
                                  "submit-label": "Update",
                                  onSubmit: submitForm,
                                  actions: false
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Name",
                                          modelValue: unref(body).name,
                                          "onUpdate:modelValue": ($event) => unref(body).name = $event,
                                          class: "w-full",
                                          validation: "required|text"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Host Name",
                                          modelValue: unref(body).hostname,
                                          "onUpdate:modelValue": ($event) => unref(body).hostname = $event,
                                          class: "w-full",
                                          validation: "required|text"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "IP Address",
                                          modelValue: unref(body).ip_address,
                                          "onUpdate:modelValue": ($event) => unref(body).ip_address = $event,
                                          validation: [
                                            ["required"],
                                            [
                                              "matches",
                                              /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i
                                            ]
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "validation"])
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode(_component_FormKit, {
                                          type: "textarea",
                                          modelValue: unref(body).description,
                                          "onUpdate:modelValue": ($event) => unref(body).description = $event,
                                          label: "Description",
                                          validation: "required"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                        createVNode("label", { class: "font-medium" }, "Supported tests"),
                                        createVNode(_component_multi_select, {
                                          style: { "--ms-max-height": "none !important" },
                                          modelValue: unref(supportedTest),
                                          "onUpdate:modelValue": ($event) => isRef(supportedTest) ? supportedTest.value = $event : null,
                                          options: unref(supportedTests),
                                          mode: "tags",
                                          searchable: true,
                                          required: true,
                                          clear: "",
                                          class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreOutlinedButton, {
                                        type: "button",
                                        click: adjustVisibility,
                                        text: "Close"
                                      }),
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        color: "success",
                                        icon: unref(render$3),
                                        click: () => {
                                        },
                                        text: "Save changes",
                                        loading: unref(loading)
                                      }, null, 8, ["icon", "loading"])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-xl text-black flex items-center font-medium leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" Edit Instrument Details ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: adjustVisibility }, [
                                  createVNode(unref(render), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Name",
                                        modelValue: unref(body).name,
                                        "onUpdate:modelValue": ($event) => unref(body).name = $event,
                                        class: "w-full",
                                        validation: "required|text"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Host Name",
                                        modelValue: unref(body).hostname,
                                        "onUpdate:modelValue": ($event) => unref(body).hostname = $event,
                                        class: "w-full",
                                        validation: "required|text"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "IP Address",
                                        modelValue: unref(body).ip_address,
                                        "onUpdate:modelValue": ($event) => unref(body).ip_address = $event,
                                        validation: [
                                          ["required"],
                                          [
                                            "matches",
                                            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i
                                          ]
                                        ]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "validation"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "textarea",
                                        modelValue: unref(body).description,
                                        "onUpdate:modelValue": ($event) => unref(body).description = $event,
                                        label: "Description",
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                      createVNode("label", { class: "font-medium" }, "Supported tests"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: unref(supportedTest),
                                        "onUpdate:modelValue": ($event) => isRef(supportedTest) ? supportedTest.value = $event : null,
                                        options: unref(supportedTests),
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: adjustVisibility,
                                      text: "Close"
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "success",
                                      icon: unref(render$3),
                                      click: () => {
                                      },
                                      text: "Save changes",
                                      loading: unref(loading)
                                    }, null, 8, ["icon", "loading"])
                                  ])
                                ]),
                                _: 1
                              })
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
                    createVNode(unref(TransitionChild), {
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
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-xl text-black flex items-center font-medium leading-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" Edit Instrument Details ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: adjustVisibility }, [
                                    createVNode(unref(render), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  id: "patientForm",
                                  "submit-label": "Update",
                                  onSubmit: submitForm,
                                  actions: false
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Name",
                                          modelValue: unref(body).name,
                                          "onUpdate:modelValue": ($event) => unref(body).name = $event,
                                          class: "w-full",
                                          validation: "required|text"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Host Name",
                                          modelValue: unref(body).hostname,
                                          "onUpdate:modelValue": ($event) => unref(body).hostname = $event,
                                          class: "w-full",
                                          validation: "required|text"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "IP Address",
                                          modelValue: unref(body).ip_address,
                                          "onUpdate:modelValue": ($event) => unref(body).ip_address = $event,
                                          validation: [
                                            ["required"],
                                            [
                                              "matches",
                                              /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i
                                            ]
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "validation"])
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode(_component_FormKit, {
                                          type: "textarea",
                                          modelValue: unref(body).description,
                                          "onUpdate:modelValue": ($event) => unref(body).description = $event,
                                          label: "Description",
                                          validation: "required"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                        createVNode("label", { class: "font-medium" }, "Supported tests"),
                                        createVNode(_component_multi_select, {
                                          style: { "--ms-max-height": "none !important" },
                                          modelValue: unref(supportedTest),
                                          "onUpdate:modelValue": ($event) => isRef(supportedTest) ? supportedTest.value = $event : null,
                                          options: unref(supportedTests),
                                          mode: "tags",
                                          searchable: true,
                                          required: true,
                                          clear: "",
                                          class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreOutlinedButton, {
                                        type: "button",
                                        click: adjustVisibility,
                                        text: "Close"
                                      }),
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        color: "success",
                                        icon: unref(render$3),
                                        click: () => {
                                        },
                                        text: "Save changes",
                                        loading: unref(loading)
                                      }, null, 8, ["icon", "loading"])
                                    ])
                                  ]),
                                  _: 1
                                })
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
              createVNode(unref(Dialog), {
                as: "div",
                onClose: adjustVisibility,
                class: "relative z-10"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
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
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-xl text-black flex items-center font-medium leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" Edit Instrument Details ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: adjustVisibility }, [
                                  createVNode(unref(render), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Name",
                                        modelValue: unref(body).name,
                                        "onUpdate:modelValue": ($event) => unref(body).name = $event,
                                        class: "w-full",
                                        validation: "required|text"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Host Name",
                                        modelValue: unref(body).hostname,
                                        "onUpdate:modelValue": ($event) => unref(body).hostname = $event,
                                        class: "w-full",
                                        validation: "required|text"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "IP Address",
                                        modelValue: unref(body).ip_address,
                                        "onUpdate:modelValue": ($event) => unref(body).ip_address = $event,
                                        validation: [
                                          ["required"],
                                          [
                                            "matches",
                                            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i
                                          ]
                                        ]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "validation"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "textarea",
                                        modelValue: unref(body).description,
                                        "onUpdate:modelValue": ($event) => unref(body).description = $event,
                                        label: "Description",
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                      createVNode("label", { class: "font-medium" }, "Supported tests"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: unref(supportedTest),
                                        "onUpdate:modelValue": ($event) => isRef(supportedTest) ? supportedTest.value = $event : null,
                                        options: unref(supportedTests),
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: adjustVisibility,
                                      text: "Close"
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "success",
                                      icon: unref(render$3),
                                      click: () => {
                                      },
                                      text: "Save changes",
                                      loading: unref(loading)
                                    }, null, 8, ["icon", "loading"])
                                  ])
                                ]),
                                _: 1
                              })
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/instruments/edit-dialog/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    id: {},
    name: {}
  },
  emits: ["action-completed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const show = ref(false);
    const loading = ref(false);
    const retired_reason = ref("");
    const cookie = useCookie("token");
    const handleModal = () => {
      show.value = !show.value;
      retired_reason.value = "";
      loading.value = false;
    };
    const submitForm = async () => {
      loading.value = true;
      const request = {
        route: getParameterizedUrl(`${endpoints.instrument.delete}/${props.id}`, {
          retired_reason: retired_reason.value
        }),
        method: "DELETE",
        token: cookie.value
      };
      const { data, pending, error } = await fetchRequest(request);
      loading.value = pending;
      if (data.value) {
        handleModal();
        useNuxtApp().$toast.success(`Instrument deleted successfully!`);
        emit("action-completed", []);
      }
      if (error.value) {
        useNuxtApp().$toast.error(`${errorMessage}`);
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreActionButton = __nuxt_component_0;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_CoreOutlinedButton = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        click: handleModal,
        color: "error",
        text: "Delete",
        icon: unref(render$4)
      }, null, _parent));
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: unref(show),
        as: "template"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              class: "relative z-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
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
                  _push3(ssrRenderComponent(unref(TransitionChild), {
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
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(render$4$1), { class: "h-5 w-5 mr-2" }, null, _parent6, _scopeId5));
                                    _push6(` Confirm delete `);
                                  } else {
                                    return [
                                      createVNode(unref(render$4$1), { class: "h-5 w-5 mr-2" }),
                                      createTextVNode(" Confirm delete ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<button${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(render), { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                              _push5(`</button></div><div class="mt-2 space-y-3 px-5"${_scopeId4}> Do you really want to delete <strong class="text-red-500"${_scopeId4}>${ssrInterpolate(props.name)}</strong> ? Note that once this action is completed, it can not be undone </div>`);
                              _push5(ssrRenderComponent(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "textarea",
                                      modelValue: unref(retired_reason),
                                      "onUpdate:modelValue": ($event) => isRef(retired_reason) ? retired_reason.value = $event : null,
                                      label: "Reason",
                                      validation: "required"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Cancel",
                                      click: handleModal
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "error",
                                      text: "Delete",
                                      icon: unref(render$4),
                                      click: () => {
                                      },
                                      loading: unref(loading)
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          createVNode(_component_FormKit, {
                                            type: "textarea",
                                            modelValue: unref(retired_reason),
                                            "onUpdate:modelValue": ($event) => isRef(retired_reason) ? retired_reason.value = $event : null,
                                            label: "Reason",
                                            validation: "required"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                        createVNode(_component_CoreOutlinedButton, {
                                          type: "button",
                                          text: "Cancel",
                                          click: handleModal
                                        }),
                                        createVNode(_component_CoreActionButton, {
                                          type: "submit",
                                          color: "error",
                                          text: "Delete",
                                          icon: unref(render$4),
                                          click: () => {
                                          },
                                          loading: unref(loading)
                                        }, null, 8, ["icon", "loading"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-lg flex items-center font-medium leading-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(render$4$1), { class: "h-5 w-5 mr-2" }),
                                      createTextVNode(" Confirm delete ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: handleModal }, [
                                    createVNode(unref(render), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createTextVNode(" Do you really want to delete "),
                                  createVNode("strong", { class: "text-red-500" }, toDisplayString(props.name), 1),
                                  createTextVNode(" ? Note that once this action is completed, it can not be undone ")
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  id: "patientForm",
                                  "submit-label": "Update",
                                  onSubmit: submitForm,
                                  actions: false
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode(_component_FormKit, {
                                          type: "textarea",
                                          modelValue: unref(retired_reason),
                                          "onUpdate:modelValue": ($event) => isRef(retired_reason) ? retired_reason.value = $event : null,
                                          label: "Reason",
                                          validation: "required"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                      createVNode(_component_CoreOutlinedButton, {
                                        type: "button",
                                        text: "Cancel",
                                        click: handleModal
                                      }),
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        color: "error",
                                        text: "Delete",
                                        icon: unref(render$4),
                                        click: () => {
                                        },
                                        loading: unref(loading)
                                      }, null, 8, ["icon", "loading"])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-lg flex items-center font-medium leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(render$4$1), { class: "h-5 w-5 mr-2" }),
                                    createTextVNode(" Confirm delete ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: handleModal }, [
                                  createVNode(unref(render), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createTextVNode(" Do you really want to delete "),
                                createVNode("strong", { class: "text-red-500" }, toDisplayString(props.name), 1),
                                createTextVNode(" ? Note that once this action is completed, it can not be undone ")
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "textarea",
                                        modelValue: unref(retired_reason),
                                        "onUpdate:modelValue": ($event) => isRef(retired_reason) ? retired_reason.value = $event : null,
                                        label: "Reason",
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Cancel",
                                      click: handleModal
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "error",
                                      text: "Delete",
                                      icon: unref(render$4),
                                      click: () => {
                                      },
                                      loading: unref(loading)
                                    }, null, 8, ["icon", "loading"])
                                  ])
                                ]),
                                _: 1
                              })
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
                    createVNode(unref(TransitionChild), {
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
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-lg flex items-center font-medium leading-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(render$4$1), { class: "h-5 w-5 mr-2" }),
                                      createTextVNode(" Confirm delete ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: handleModal }, [
                                    createVNode(unref(render), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createTextVNode(" Do you really want to delete "),
                                  createVNode("strong", { class: "text-red-500" }, toDisplayString(props.name), 1),
                                  createTextVNode(" ? Note that once this action is completed, it can not be undone ")
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  id: "patientForm",
                                  "submit-label": "Update",
                                  onSubmit: submitForm,
                                  actions: false
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        createVNode(_component_FormKit, {
                                          type: "textarea",
                                          modelValue: unref(retired_reason),
                                          "onUpdate:modelValue": ($event) => isRef(retired_reason) ? retired_reason.value = $event : null,
                                          label: "Reason",
                                          validation: "required"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                      createVNode(_component_CoreOutlinedButton, {
                                        type: "button",
                                        text: "Cancel",
                                        click: handleModal
                                      }),
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        color: "error",
                                        text: "Delete",
                                        icon: unref(render$4),
                                        click: () => {
                                        },
                                        loading: unref(loading)
                                      }, null, 8, ["icon", "loading"])
                                    ])
                                  ]),
                                  _: 1
                                })
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
              createVNode(unref(Dialog), {
                as: "div",
                class: "relative z-10"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
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
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-lg flex items-center font-medium leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(render$4$1), { class: "h-5 w-5 mr-2" }),
                                    createTextVNode(" Confirm delete ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: handleModal }, [
                                  createVNode(unref(render), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createTextVNode(" Do you really want to delete "),
                                createVNode("strong", { class: "text-red-500" }, toDisplayString(props.name), 1),
                                createTextVNode(" ? Note that once this action is completed, it can not be undone ")
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      createVNode(_component_FormKit, {
                                        type: "textarea",
                                        modelValue: unref(retired_reason),
                                        "onUpdate:modelValue": ($event) => isRef(retired_reason) ? retired_reason.value = $event : null,
                                        label: "Reason",
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Cancel",
                                      click: handleModal
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "error",
                                      text: "Delete",
                                      icon: unref(render$4),
                                      click: () => {
                                      },
                                      loading: unref(loading)
                                    }, null, 8, ["icon", "loading"])
                                  ])
                                ]),
                                _: 1
                              })
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/instruments/delete-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "instruments",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `${Package.name.toUpperCase()} - Instruments`
    });
    const serverItemsLength = ref(0);
    const loading = ref(false);
    const instruments = ref([]);
    const cookie = useCookie("token");
    const header = ref("List of Instruments");
    const search = ref("");
    const pages = ref([
      {
        name: "Home",
        link: "/home"
      },
      {
        name: "Lab Configuration",
        link: "#"
      }
    ]);
    const headers = ref([
      { text: "Name", value: "name", sortable: true },
      { text: "IP Address", value: "ip_address" },
      { text: "Hostname", value: "hostname" },
      { text: "Actions", value: "actions", width: 18 }
    ]);
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 25,
      sortBy: "name"
    });
    const reloadInstrument = async () => loadInstruments();
    const loadInstruments = async () => {
      loading.value = true;
      const { page, rowsPerPage } = serverOptions.value;
      const request = {
        route: getParameterizedUrl(endpoints.instrument.index, {
          page,
          page_size: rowsPerPage,
          search: search.value
        }),
        method: "GET",
        token: `${cookie.value}`
      };
      const v = await fetchRequest(request);
      if (v.data.value) {
        instruments.value = v.data.value.data;
        serverItemsLength.value = v.data.value.total;
      }
      loading.value = false;
      if (v.error.value) {
        loading.value = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    };
    const updateSearch = (value) => {
      search.value = value;
      loadInstruments();
    };
    const updateServerOptions = (options) => serverOptions.value = options;
    loadInstruments();
    watch(serverOptions, () => loadInstruments());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$7;
      const _component_InstrumentsAddDialog = __nuxt_component_1$1;
      const _component_InstrumentsAddDriver = __nuxt_component_2;
      const _component_CoreSearchBar = __nuxt_component_1$2;
      const _component_CoreDatatable = __nuxt_component_2$1;
      const _component_InstrumentsViewDialog = _sfc_main$3;
      const _component_InstrumentsEditDialog = _sfc_main$2;
      const _component_InstrumentsDeleteDialog = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate(unref(header))}</h3><div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(_component_InstrumentsAddDialog, { onActionCompleted: reloadInstrument }, null, _parent));
      _push(ssrRenderComponent(_component_InstrumentsAddDriver, null, null, _parent));
      _push(`</div></div><div class="flex justify-end w-full px-2 py-2 mb-2">`);
      _push(ssrRenderComponent(_component_CoreSearchBar, {
        search: unref(search),
        onUpdate: updateSearch
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CoreDatatable, {
        headers: unref(headers),
        data: unref(instruments),
        serverOptions: unref(serverOptions),
        loading: unref(loading),
        serverItemsLength: unref(serverItemsLength),
        onUpdate: updateServerOptions
      }, {
        actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InstrumentsViewDialog, {
              id: item.id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InstrumentsEditDialog, {
              id: item.id,
              onActionCompleted: reloadInstrument
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InstrumentsDeleteDialog, {
              id: item.id,
              name: item.name,
              onActionCompleted: reloadInstrument
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
                createVNode(_component_InstrumentsViewDialog, {
                  id: item.id
                }, null, 8, ["id"]),
                createVNode(_component_InstrumentsEditDialog, {
                  id: item.id,
                  onActionCompleted: reloadInstrument
                }, null, 8, ["id"]),
                createVNode(_component_InstrumentsDeleteDialog, {
                  id: item.id,
                  name: item.name,
                  onActionCompleted: reloadInstrument
                }, null, 8, ["id", "name"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lab-configuration/instruments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=instruments-c39971aa.mjs.map
