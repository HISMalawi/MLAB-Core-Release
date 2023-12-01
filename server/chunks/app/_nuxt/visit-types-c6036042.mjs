import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './Breadcrumb-058f5536.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { r as render$1, e as endpoints, f as fetchRequest, d as filterArrays, a as render$4$1 } from './fetch-a6c33994.mjs';
import { e as errorMessage } from './constants-353d90a1.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { r as render$4 } from './XMarkIcon-170c776f.mjs';
import { r as render$5 } from './UserIcon-3d66d73e.mjs';
import { r as render$6 } from './WrenchScrewdriverIcon-771ce8f4.mjs';
import { r as render$7 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$8 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './SearchBar-0bf20ba4.mjs';
import { _ as __nuxt_component_2 } from './Datatable-0c4b7b4f.mjs';
import { a as render$1$1, r as render$9 } from './PencilSquareIcon-77446728.mjs';
import { r as render$2 } from './TrashIcon-b1416ff8.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import { r as render$3 } from './ArrowUpOnSquareIcon-7c0eceb5.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import './nuxt-link-7a607302.mjs';
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
    XMarkIcon: render$4,
    UserIcon: render$5
  },
  data() {
    return {
      open: false,
      driverIcon: render$6,
      addIcon: render$1,
      saveIcon: render$7,
      clearIcon: render$8,
      name: "",
      description: "",
      loading: false,
      cookie: useCookie("token"),
      sections: new Array(),
      selectedSection: new Array()
    };
  },
  created() {
    this.loadSections();
  },
  methods: {
    async loadSections() {
      const request = {
        route: `${endpoints.sections}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.sections = data.value.data;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async submitForm() {
      this.loading = true;
      let facilitySections = filterArrays(this.sections, this.selectedSection);
      const request = {
        route: `${endpoints.visitTypes}`,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          "name": this.name,
          "description": this.description,
          facility_sections: facilitySections
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        useNuxtApp().$toast.success(`Visit type created succcessfully!`);
        this.$emit("update", true);
        this.handleClick();
      }
      if (error.value) {
        console.error(error.value.data);
        useNuxtApp().$toast.error(`${errorMessage}`);
        this.handleClick();
      }
    },
    handleClick() {
      this.open = !this.open;
    },
    resetForm() {
      this.$formkit.reset("visitTypeForm");
    }
  }
};
const _imports_0 = "" + buildAssetsURL("outpatient.26f69398.svg");
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_multi_select = resolveComponent("multi-select");
  const _component_CoreOutlinedButton = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-57acc009><div data-v-57acc009>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.handleClick,
    text: "New visit type",
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
                    _push4(`<div class="fixed inset-0 bg-black bg-opacity-25" data-v-57acc009${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="fixed inset-0 overflow-y-auto" data-v-57acc009${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center" data-v-57acc009${_scopeId2}>`);
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
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between" data-v-57acc009${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2" data-v-57acc009${_scopeId5}> New visit type `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" New visit type ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button data-v-57acc009${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="" data-v-57acc009${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_FormKit, {
                            type: "form",
                            id: "visitTypeForm",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5 py-5" data-v-57acc009${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event,
                                  validation: "required|text"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Description",
                                  modelValue: $data.description,
                                  "onUpdate:modelValue": ($event) => $data.description = $event,
                                  validation: "required|text"
                                }, null, _parent6, _scopeId5));
                                _push6(`<div class="w-full flex flex-col space-y-2" data-v-57acc009${_scopeId5}><label class="font-medium" data-v-57acc009${_scopeId5}>Facility Sections</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.selectedSection,
                                  "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                  options: $data.sections.map((section) => section.name),
                                  mode: "tags",
                                  searchable: true,
                                  required: true,
                                  clear: "",
                                  class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" data-v-57acc009${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  text: "Clear form",
                                  click: () => {
                                    $options.resetForm();
                                  }
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  click: () => {
                                  },
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  color: "success",
                                  type: "submit",
                                  loading: $data.loading
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event,
                                      validation: "required|text"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      modelValue: $data.description,
                                      "onUpdate:modelValue": ($event) => $data.description = $event,
                                      validation: "required|text"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Facility Sections"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.selectedSection,
                                        "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                        options: $data.sections.map((section) => section.name),
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Clear form",
                                      click: () => {
                                        $options.resetForm();
                                      }
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      click: () => {
                                      },
                                      icon: $data.saveIcon,
                                      text: "Save changes",
                                      color: "success",
                                      type: "submit",
                                      loading: $data.loading
                                    }, null, 8, ["icon", "loading"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div>`);
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
                                  createTextVNode(" New visit type ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "" }, [
                              createVNode(_component_FormKit, {
                                type: "form",
                                id: "visitTypeForm",
                                "submit-label": "Update",
                                onSubmit: $options.submitForm,
                                actions: false
                              }, {
                                default: withCtx(({ value }) => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event,
                                      validation: "required|text"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      modelValue: $data.description,
                                      "onUpdate:modelValue": ($event) => $data.description = $event,
                                      validation: "required|text"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Facility Sections"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.selectedSection,
                                        "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                        options: $data.sections.map((section) => section.name),
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Clear form",
                                      click: () => {
                                        $options.resetForm();
                                      }
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      click: () => {
                                      },
                                      icon: $data.saveIcon,
                                      text: "Save changes",
                                      color: "success",
                                      type: "submit",
                                      loading: $data.loading
                                    }, null, 8, ["icon", "loading"])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["onSubmit"])
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
                                createTextVNode(" New visit type ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "" }, [
                            createVNode(_component_FormKit, {
                              type: "form",
                              id: "visitTypeForm",
                              "submit-label": "Update",
                              onSubmit: $options.submitForm,
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    modelValue: $data.name,
                                    "onUpdate:modelValue": ($event) => $data.name = $event,
                                    validation: "required|text"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Description",
                                    modelValue: $data.description,
                                    "onUpdate:modelValue": ($event) => $data.description = $event,
                                    validation: "required|text"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Facility Sections"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.selectedSection,
                                      "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                      options: $data.sections.map((section) => section.name),
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    text: "Clear form",
                                    click: () => {
                                      $options.resetForm();
                                    }
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    click: () => {
                                    },
                                    icon: $data.saveIcon,
                                    text: "Save changes",
                                    color: "success",
                                    type: "submit",
                                    loading: $data.loading
                                  }, null, 8, ["icon", "loading"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
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
                                  createTextVNode(" New visit type ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "" }, [
                              createVNode(_component_FormKit, {
                                type: "form",
                                id: "visitTypeForm",
                                "submit-label": "Update",
                                onSubmit: $options.submitForm,
                                actions: false
                              }, {
                                default: withCtx(({ value }) => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event,
                                      validation: "required|text"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      modelValue: $data.description,
                                      "onUpdate:modelValue": ($event) => $data.description = $event,
                                      validation: "required|text"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Facility Sections"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.selectedSection,
                                        "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                        options: $data.sections.map((section) => section.name),
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Clear form",
                                      click: () => {
                                        $options.resetForm();
                                      }
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      click: () => {
                                      },
                                      icon: $data.saveIcon,
                                      text: "Save changes",
                                      color: "success",
                                      type: "submit",
                                      loading: $data.loading
                                    }, null, 8, ["icon", "loading"])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["onSubmit"])
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
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" New visit type ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "" }, [
                            createVNode(_component_FormKit, {
                              type: "form",
                              id: "visitTypeForm",
                              "submit-label": "Update",
                              onSubmit: $options.submitForm,
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    modelValue: $data.name,
                                    "onUpdate:modelValue": ($event) => $data.name = $event,
                                    validation: "required|text"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Description",
                                    modelValue: $data.description,
                                    "onUpdate:modelValue": ($event) => $data.description = $event,
                                    validation: "required|text"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Facility Sections"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.selectedSection,
                                      "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                      options: $data.sections.map((section) => section.name),
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    text: "Clear form",
                                    click: () => {
                                      $options.resetForm();
                                    }
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    click: () => {
                                    },
                                    icon: $data.saveIcon,
                                    text: "Save changes",
                                    color: "success",
                                    type: "submit",
                                    loading: $data.loading
                                  }, null, 8, ["icon", "loading"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/visit-types/add-dialog/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-57acc009"]]);
const _sfc_main$3 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$4
  },
  data() {
    return {
      viewIcon: render$1$1,
      show: false,
      editIcon: render$9
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> View visit type `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View visit type ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="mt-2 space-y-3 px-5 py-5"${_scopeId4}><div class="w-full flex flex-col space-y-2"${_scopeId4}><label class="font-medium text-lg"${_scopeId4}>Name</label><p class="underline"${_scopeId4}>${ssrInterpolate($props.data.name)}</p></div><div class="w-full flex flex-col space-y-2"${_scopeId4}><label class="font-medium text-lg"${_scopeId4}>Description</label><p class="underline"${_scopeId4}>${ssrInterpolate($props.data.description)}</p></div><div class="w-full flex flex-col space-y-2"${_scopeId4}><label class="font-medium text-lg"${_scopeId4}>Facility sections</label><!--[-->`);
                          ssrRenderList($props.data.facility_sections, (section, index) => {
                            _push5(`<p class="underline"${_scopeId4}>${ssrInterpolate(section.name)}</p>`);
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
                                  createTextVNode(" View visit type ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                createVNode("label", { class: "font-medium text-lg" }, "Name"),
                                createVNode("p", { class: "underline" }, toDisplayString($props.data.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                createVNode("label", { class: "font-medium text-lg" }, "Description"),
                                createVNode("p", { class: "underline" }, toDisplayString($props.data.description), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                createVNode("label", { class: "font-medium text-lg" }, "Facility sections"),
                                (openBlock(true), createBlock(Fragment, null, renderList($props.data.facility_sections, (section, index) => {
                                  return openBlock(), createBlock("p", {
                                    class: "underline",
                                    key: index
                                  }, toDisplayString(section.name), 1);
                                }), 128))
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
                                createTextVNode(" View visit type ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                              createVNode("label", { class: "font-medium text-lg" }, "Name"),
                              createVNode("p", { class: "underline" }, toDisplayString($props.data.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                              createVNode("label", { class: "font-medium text-lg" }, "Description"),
                              createVNode("p", { class: "underline" }, toDisplayString($props.data.description), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                              createVNode("label", { class: "font-medium text-lg" }, "Facility sections"),
                              (openBlock(true), createBlock(Fragment, null, renderList($props.data.facility_sections, (section, index) => {
                                return openBlock(), createBlock("p", {
                                  class: "underline",
                                  key: index
                                }, toDisplayString(section.name), 1);
                              }), 128))
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
                                  createTextVNode(" View visit type ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                createVNode("label", { class: "font-medium text-lg" }, "Name"),
                                createVNode("p", { class: "underline" }, toDisplayString($props.data.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                createVNode("label", { class: "font-medium text-lg" }, "Description"),
                                createVNode("p", { class: "underline" }, toDisplayString($props.data.description), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                createVNode("label", { class: "font-medium text-lg" }, "Facility sections"),
                                (openBlock(true), createBlock(Fragment, null, renderList($props.data.facility_sections, (section, index) => {
                                  return openBlock(), createBlock("p", {
                                    class: "underline",
                                    key: index
                                  }, toDisplayString(section.name), 1);
                                }), 128))
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
                                createTextVNode(" View visit type ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                              createVNode("label", { class: "font-medium text-lg" }, "Name"),
                              createVNode("p", { class: "underline" }, toDisplayString($props.data.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                              createVNode("label", { class: "font-medium text-lg" }, "Description"),
                              createVNode("p", { class: "underline" }, toDisplayString($props.data.description), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                              createVNode("label", { class: "font-medium text-lg" }, "Facility sections"),
                              (openBlock(true), createBlock(Fragment, null, renderList($props.data.facility_sections, (section, index) => {
                                return openBlock(), createBlock("p", {
                                  class: "underline",
                                  key: index
                                }, toDisplayString(section.name), 1);
                              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/visit-types/view-dialog/index.vue");
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
    XMarkIcon: render$4
  },
  data() {
    return {
      editIcon: render$9,
      show: false,
      saveIcon: render$7,
      cookie: useCookie("token"),
      loading: false,
      sections: new Array(),
      selectedSection: new Array()
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    async loadSections() {
      this.handleClick();
      this.selectedSection = this.data.facility_sections.map((section) => section.name);
      const request = {
        route: `${endpoints.sections}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.sections = data.value.data;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async submitForm() {
      this.loading = true;
      let facilitySections = filterArrays(this.sections, this.selectedSection);
      const request = {
        route: `${endpoints.visitTypes}/${this.data.id}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {
          name: this.data.name,
          description: this.data.description,
          facility_sections: facilitySections
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        useNuxtApp().$toast.success(`Visit type updated succcessfully!`);
        this.$emit("update", true);
        this.handleClick();
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value.data);
        useNuxtApp().$toast.error(`${errorMessage}`);
        this.handleClick();
        this.loading = false;
      }
    },
    handleClick() {
      this.show = !this.show;
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
  const _component_multi_select = resolveComponent("multi-select");
  const _component_CoreOutlinedButton = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.loadSections,
    text: "Edit",
    icon: $data.editIcon,
    color: "success"
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Edit visit type `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit visit type ")
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
                            id: "editForm",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  modelValue: $props.data.name,
                                  "onUpdate:modelValue": ($event) => $props.data.name = $event,
                                  validation: "required|text"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Description",
                                  modelValue: $props.data.description,
                                  "onUpdate:modelValue": ($event) => $props.data.description = $event,
                                  validation: "required|text"
                                }, null, _parent6, _scopeId5));
                                _push6(`<div class="w-full flex flex-col space-y-2"${_scopeId5}><label class="font-medium"${_scopeId5}>Facility Sections</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.selectedSection,
                                  "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                  options: $data.sections.map((section) => section.name),
                                  mode: "tags",
                                  searchable: true,
                                  required: true,
                                  clear: "",
                                  class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, { text: "Clear form" }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  click: () => {
                                  },
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  color: "success",
                                  type: "submit",
                                  loading: $data.loading
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      modelValue: $props.data.name,
                                      "onUpdate:modelValue": ($event) => $props.data.name = $event,
                                      validation: "required|text"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      modelValue: $props.data.description,
                                      "onUpdate:modelValue": ($event) => $props.data.description = $event,
                                      validation: "required|text"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Facility Sections"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.selectedSection,
                                        "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                        options: $data.sections.map((section) => section.name),
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, { text: "Clear form" }),
                                    createVNode(_component_CoreActionButton, {
                                      click: () => {
                                      },
                                      icon: $data.saveIcon,
                                      text: "Save changes",
                                      color: "success",
                                      type: "submit",
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
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit visit type ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              id: "editForm",
                              "submit-label": "Update",
                              onSubmit: $options.submitForm,
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    modelValue: $props.data.name,
                                    "onUpdate:modelValue": ($event) => $props.data.name = $event,
                                    validation: "required|text"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Description",
                                    modelValue: $props.data.description,
                                    "onUpdate:modelValue": ($event) => $props.data.description = $event,
                                    validation: "required|text"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Facility Sections"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.selectedSection,
                                      "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                      options: $data.sections.map((section) => section.name),
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, { text: "Clear form" }),
                                  createVNode(_component_CoreActionButton, {
                                    click: () => {
                                    },
                                    icon: $data.saveIcon,
                                    text: "Save changes",
                                    color: "success",
                                    type: "submit",
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
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Edit visit type ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            id: "editForm",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  modelValue: $props.data.name,
                                  "onUpdate:modelValue": ($event) => $props.data.name = $event,
                                  validation: "required|text"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "textarea",
                                  label: "Description",
                                  modelValue: $props.data.description,
                                  "onUpdate:modelValue": ($event) => $props.data.description = $event,
                                  validation: "required|text"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode("label", { class: "font-medium" }, "Facility Sections"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.selectedSection,
                                    "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                    options: $data.sections.map((section) => section.name),
                                    mode: "tags",
                                    searchable: true,
                                    required: true,
                                    clear: "",
                                    class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, { text: "Clear form" }),
                                createVNode(_component_CoreActionButton, {
                                  click: () => {
                                  },
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  color: "success",
                                  type: "submit",
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
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit visit type ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              id: "editForm",
                              "submit-label": "Update",
                              onSubmit: $options.submitForm,
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    modelValue: $props.data.name,
                                    "onUpdate:modelValue": ($event) => $props.data.name = $event,
                                    validation: "required|text"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Description",
                                    modelValue: $props.data.description,
                                    "onUpdate:modelValue": ($event) => $props.data.description = $event,
                                    validation: "required|text"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Facility Sections"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.selectedSection,
                                      "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                      options: $data.sections.map((section) => section.name),
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, { text: "Clear form" }),
                                  createVNode(_component_CoreActionButton, {
                                    click: () => {
                                    },
                                    icon: $data.saveIcon,
                                    text: "Save changes",
                                    color: "success",
                                    type: "submit",
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
                                createTextVNode(" Edit visit type ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            id: "editForm",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  modelValue: $props.data.name,
                                  "onUpdate:modelValue": ($event) => $props.data.name = $event,
                                  validation: "required|text"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_FormKit, {
                                  type: "textarea",
                                  label: "Description",
                                  modelValue: $props.data.description,
                                  "onUpdate:modelValue": ($event) => $props.data.description = $event,
                                  validation: "required|text"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode("label", { class: "font-medium" }, "Facility Sections"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.selectedSection,
                                    "onUpdate:modelValue": ($event) => $data.selectedSection = $event,
                                    options: $data.sections.map((section) => section.name),
                                    mode: "tags",
                                    searchable: true,
                                    required: true,
                                    clear: "",
                                    class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, { text: "Clear form" }),
                                createVNode(_component_CoreActionButton, {
                                  click: () => {
                                  },
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  color: "success",
                                  type: "submit",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/visit-types/edit-dialog/index.vue");
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
    XMarkIcon: render$4,
    ExclamationTriangleIcon: render$4$1
  },
  data() {
    return {
      show: false,
      deleteIcon: render$2,
      loading: false,
      cookie: useCookie("token"),
      reason: ""
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
     * @method deleteData deletes test type
     * @param id test type id
     * @return promise @typeof void
     */
    async deleteData(id) {
      this.loading = true;
      let request = {
        route: `${endpoints.visitTypes}/${id}`,
        method: "DELETE",
        token: `${this.cookie}`,
        body: {
          "retired_reason": this.reason
        }
      };
      const { pending, error, data } = await fetchRequest(request);
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`Visit type deleted successfully!`);
        this.loading = false;
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
                            id: "deleteForm",
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
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  click: () => {
                                  },
                                  type: "button",
                                  text: "Clear form"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
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
                                    createVNode(_component_CoreOutlinedButton, {
                                      click: () => {
                                      },
                                      type: "button",
                                      text: "Clear form"
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
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
                              id: "deleteForm",
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
                                  createVNode(_component_CoreOutlinedButton, {
                                    click: () => {
                                    },
                                    type: "button",
                                    text: "Clear form"
                                  }),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
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
                            id: "deleteForm",
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
                                createVNode(_component_CoreOutlinedButton, {
                                  click: () => {
                                  },
                                  type: "button",
                                  text: "Clear form"
                                }),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
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
                              id: "deleteForm",
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
                                  createVNode(_component_CoreOutlinedButton, {
                                    click: () => {
                                    },
                                    type: "button",
                                    text: "Clear form"
                                  }),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
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
                            id: "deleteForm",
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
                                createVNode(_component_CoreOutlinedButton, {
                                  click: () => {
                                  },
                                  type: "button",
                                  text: "Clear form"
                                }),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/visit-types/delete-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    MagnifyingGlassIcon: render
  },
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Visit Types`
    });
  },
  data() {
    return {
      header: "List of visit types",
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Lab Configuration",
          link: "#"
        }
      ],
      addIcon: render$1,
      deleteIcon: render$2,
      viewIcon: render$3,
      headers: [
        { text: "ID", value: "id", sortable: true },
        { text: "NAME", value: "name", sortable: true },
        { text: "DESCRIPTION", value: "description", sortable: true },
        { text: "ACTIONS", value: "actions" }
      ],
      visitTypes: new Array(),
      loading: false,
      cookie: useCookie("token"),
      serverItemsLength: 0,
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      },
      searchField: "name",
      search: "",
      searchValue: ""
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.loading = true;
      const { page, rowsPerPage } = this.serverOptions;
      const request = {
        route: `${endpoints.visitTypes}?page=${page}&per_page=${rowsPerPage}&search=${this.search}`,
        method: "GET",
        token: `${this.cookie}`
      };
      let { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.visitTypes = data.value.data;
        this.serverItemsLength = data.value.meta.total_count;
      }
      if (error.value) {
        console.log(error.value.data);
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    },
    updateSearch(value) {
      this.searchValue = value;
      this.search = value;
    },
    updateVisitTypes(value) {
      if (value) {
        this.init();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_VisitTypesAddDialog = __nuxt_component_1;
  const _component_CoreSearchBar = __nuxt_component_1$1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_VisitTypesViewDialog = __nuxt_component_4;
  const _component_VisitTypesEditDialog = __nuxt_component_5;
  const _component_VisitTypesDeleteDialog = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3>`);
  _push(ssrRenderComponent(_component_VisitTypesAddDialog, { onUpdate: $options.updateVisitTypes }, null, _parent));
  _push(`</div><div class="flex justify-end w-full px-2 py-2 mb-2">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    onUpdate: $options.updateSearch
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $data.visitTypes,
    loading: $data.loading,
    "search-field": $data.searchField,
    "search-value": $data.searchValue
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_VisitTypesViewDialog, { data: item }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_VisitTypesEditDialog, {
          data: item,
          onUpdate: $options.updateVisitTypes
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_VisitTypesDeleteDialog, {
          data: item,
          onUpdate: $options.updateVisitTypes
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_VisitTypesViewDialog, { data: item }, null, 8, ["data"]),
            createVNode(_component_VisitTypesEditDialog, {
              data: item,
              onUpdate: $options.updateVisitTypes
            }, null, 8, ["data", "onUpdate"]),
            createVNode(_component_VisitTypesDeleteDialog, {
              data: item,
              onUpdate: $options.updateVisitTypes
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lab-configuration/visit-types.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visitTypes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { visitTypes as default };
//# sourceMappingURL=visit-types-c6036042.mjs.map
