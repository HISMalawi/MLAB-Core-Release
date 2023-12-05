import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as _export_sfc, u as useCookie, o as useI18n, a as useNuxtApp, b as __nuxt_component_0$1, m as _imports_1 } from '../server.mjs';
import { r as render$4, _ as __nuxt_component_0$2 } from './Dropdown-15d8abe8.mjs';
import { _ as __nuxt_component_1 } from './SearchBar-0bf20ba4.mjs';
import { r as render$7 } from './XMarkIcon-170c776f.mjs';
import { useSSRContext, resolveComponent, mergeProps, unref, withCtx, createVNode, withDirectives, openBlock, createBlock, createCommentVNode, Fragment, renderList, vShow, createElementBlock, createElementVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_2$1 } from './Datatable-0c4b7b4f.mjs';
import { _ as __nuxt_component_1$1 } from './Loader-c735e4ba.mjs';
import { _ as __nuxt_component_1$2 } from './OutlinedButton-945a5cd0.mjs';
import { d as dateFormat, e as errorMessage, f as datePickerFormat } from './constants-353d90a1.mjs';
import { Listbox, ListboxButton, ListboxLabel, ListboxOptions, ListboxOption, Menu, MenuButton, MenuItems, MenuItem, PopoverButton, Popover, PopoverPanel, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { u as useAuthStore, k as render$3$1, e as endpoints, f as fetchRequest, s as showTestDetails, h as capitalize, d as calculateAge, S as StatusList, l as render$1$2, m as render$5$1, n as render$2$1, r as render$k, P as PrinterService } from './fetch-b1fc5224.mjs';
import { r as render$h } from './UserIcon-3d66d73e.mjs';
import { r as render$f, a as render$1$3 } from './PencilSquareIcon-77446728.mjs';
import { r as render$i } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$j } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import moment from 'moment';
import { r as render$l } from './PrinterIcon-02ac6ae4.mjs';
import { u as useHead } from './index-ca787103.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render$3 } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import { r as render$5 } from './ChevronDownIcon-52225b8e.mjs';
import { r as render$6 } from './CheckIcon-e4d11b9e.mjs';
import { r as render$8 } from './CheckCircleIcon-e0bae33f.mjs';
import { r as render$9 } from './SquaresPlusIcon-10de7253.mjs';
import { r as render$a } from './AdjustmentsVerticalIcon-b0fd4e9f.mjs';
import { r as render$b } from './CheckBadgeIcon-bee4a252.mjs';
import { a as render$c, r as render$1$1 } from './ChevronRightIcon-400fbc51.mjs';
import { r as render$d } from './ArchiveBoxXMarkIcon-1426f444.mjs';
import { r as render$e } from './HandThumbDownIcon-7e2e48a6.mjs';
import { r as render$g } from './ArrowPathIcon-6ff7b048.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import './nuxt-link-0e3a4fce.mjs';
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

function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
    })
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
      d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _sfc_main$4 = {
  props: {
    value: {
      type: Object,
      required: true
    },
    close: {
      type: Boolean,
      required: true
    },
    color: {
      required: false,
      type: String,
      default: "green"
    },
    icon: {
      required: false,
      type: Object
    }
  },
  methods: {
    removeLabel() {
      this.$emit("update", this.value);
    }
  },
  components: { XMarkIcon: render$7 }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["flex items-center space-x-2 px-2 py-1 text-white rounded", `bg-${$props.color}-500`]
  }, _attrs))}><p class="text-sm">${ssrInterpolate($props.value.text)}</p><button style="${ssrRenderStyle($props.close ? null : { display: "none" })}">`);
  _push(ssrRenderComponent(_component_XMarkIcon, { class: "w-4 h-4" }, null, _parent));
  _push(`</button></button>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Label.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$7,
    UserIcon: render$h
  },
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      open: false,
      editIcon: render$f,
      saveIcon: render$i,
      clearIcon: render$j,
      name: "",
      description: "",
      testTypesSelected: null,
      loading: false,
      testTypes: new Array(),
      rawTestTypes: new Array(),
      cookie: useCookie("token"),
      authStore: useAuthStore()
    };
  },
  methods: {
    async init() {
      this.handleClick();
      let department_id = null;
      this.authStore.user.departments.map((department) => {
        if (department.name === this.authStore.department) {
          department_id = department.id;
        }
      });
      const request = {
        route: `${endpoints.specimenTestTypes}?department_id=${department_id}&specimen_id=${this.item.specimen_id}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { pending, error, data } = await fetchRequest(request);
      if (data.value) {
        this.rawTestTypes = data.value;
        this.testTypes = data.value;
      }
      if (error.value) {
        console.log(error.value);
      }
    },
    async submitForm() {
      this.loading = true;
      let tests = new Array();
      this.testTypesSelected.map((testType) => {
        tests.push({
          "specimen": this.item.specimen_id,
          "test_type": testType
        });
      });
      const request = {
        route: `${endpoints.addTestOrder}`,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          "order_id": this.item.order_id,
          tests
        }
      };
      const { pending, error, data } = await fetchRequest(request);
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(
          `Tests added to current order successfully!`
        );
        this.loading = false;
        this.$emit("update", true);
      }
      if (error.value) {
        this.handleClick();
        console.log(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    },
    handleClick() {
      this.open = !this.open;
    },
    resetForm() {
      this.testTypesSelected = null;
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
  const _component_FormKit = resolveComponent("FormKit");
  const _component_multi_select = resolveComponent("multi-select");
  const _component_CoreOutlinedButton = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Add test to current order",
    color: "warning",
    icon: $data.editIcon,
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
                                _push6(` Add Test To Current Order `);
                              } else {
                                return [
                                  createTextVNode(" Add Test To Current Order ")
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
                                _push6(`<div class="mt-2 space-y-3 pb-40"${_scopeId5}><div class="w-full flex flex-col space-y-2 px-5"${_scopeId5}><label class="font-medium"${_scopeId5}>Tests</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.testTypesSelected,
                                  "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                  options: $data.testTypes,
                                  mode: "tags",
                                  searchable: true,
                                  required: true,
                                  clear: "",
                                  class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => $options.resetForm(),
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
                                  createVNode("div", { class: "mt-2 space-y-3 pb-40" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                      createVNode("label", { class: "font-medium" }, "Tests"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.testTypesSelected,
                                        "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                        options: $data.testTypes,
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
                                      click: () => $options.resetForm(),
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
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Add Test To Current Order ")
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
                                createVNode("div", { class: "mt-2 space-y-3 pb-40" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                    createVNode("label", { class: "font-medium" }, "Tests"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.testTypesSelected,
                                      "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                      options: $data.testTypes,
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
                                    click: () => $options.resetForm(),
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
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Add Test To Current Order ")
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
                              createVNode("div", { class: "mt-2 space-y-3 pb-40" }, [
                                createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                  createVNode("label", { class: "font-medium" }, "Tests"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.testTypesSelected,
                                    "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                    options: $data.testTypes,
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
                                  click: () => $options.resetForm(),
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
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Add Test To Current Order ")
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
                                createVNode("div", { class: "mt-2 space-y-3 pb-40" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                    createVNode("label", { class: "font-medium" }, "Tests"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.testTypesSelected,
                                      "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                      options: $data.testTypes,
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
                                    click: () => $options.resetForm(),
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
                                createTextVNode(" Add Test To Current Order ")
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
                              createVNode("div", { class: "mt-2 space-y-3 pb-40" }, [
                                createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                  createVNode("label", { class: "font-medium" }, "Tests"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.testTypesSelected,
                                    "onUpdate:modelValue": ($event) => $data.testTypesSelected = $event,
                                    options: $data.testTypes,
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
                                  click: () => $options.resetForm(),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tests/add-test-order-dialog/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$7,
    PhoneIcon: render$1$2,
    EnvelopeIcon: render$5$1,
    MapPinIcon: render$2$1
  },
  data() {
    return {
      moment,
      viewIcon: render$1$3,
      show: this.open,
      addIcon: render$k,
      editIcon: render$f,
      acceptIcon: render$3$1,
      printerIcon: render$l,
      cookie: useCookie("token"),
      details: {},
      loading: false
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    open: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    async init() {
      this.loading = true;
      const request = {
        route: `${endpoints.tests}/${this.data.id}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.details = data.value;
        if (typeof this.details === "object") {
          this.handleClick();
        }
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
      }
    },
    updateChanges() {
      this.show = false;
      this.$emit("update", true);
    },
    handleClick() {
      this.show = !this.show;
    },
    printAccessionNumber() {
      return PrinterService.printSpecimenLabel(this.details.accession_number);
    },
    printTrackingNumber() {
      return PrinterService.printTrackingNumber(this.details.tracking_number);
    },
    viewReport() {
      return this.$router.push(
        `/reports/daily/patient-report/${this.details.client.id}?order_id=${this.details.order_id}`
      );
    },
    getRequestedBy(values) {
      let name = "";
      values.map((item) => {
        if (item.status.name === "pending") {
          name = `${item.initiator.first_name} ${item.initiator.last_name}`;
        }
      });
      return capitalize(name);
    }
  }
};
const _imports_0$1 = "" + buildAssetsURL("prescription_document.18f957e1.svg");
const _imports_2 = "" + buildAssetsURL("test_tube.2b522cf2.svg");
const _imports_3 = "" + buildAssetsURL("i_exam_qualification.dd473ba6.svg");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_CoreLoader = __nuxt_component_1$1;
  const _component_TestsAddTestOrderDialog = __nuxt_component_2;
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
              _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center text-center"${_scopeId2}>`);
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
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-7xl m-20 transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-8 h-8 mr-2"${_scopeId5}> View Test `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Test ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}" class="flex items-center justify-center mx-auto my-20"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreLoader, { loading: $data.loading }, null, _parent5, _scopeId4));
                          _push5(`</div><div class="grid grid-cols-3 gap-4 px-5 py-5"${_scopeId4}><div class="rounded border"${_scopeId4}><div class="px-2 py-2 bg-gray-50 border-b rounded-t"${_scopeId4}><h3 class="text-lg font-semibold text-black flex items-center"${_scopeId4}><img${ssrRenderAttr("src", _imports_1)} class="w-7 h-7 mr-1"${_scopeId4}> Patient </h3></div><div class="w-full space-y-2 py-2"${_scopeId4}><div class="w-full flex justify-between px-4 py-1"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Patient Number</h3><p${_scopeId4}>${ssrInterpolate($data.details.client.id)}</p></div><div class="w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Name</h3><p${_scopeId4}>${ssrInterpolate(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(
                            `${$data.details.client.first_name} ${$data.details.client.middle_name} ${$data.details.client.last_name}`
                          ))}</p></div><div class="w-full flex justify-between px-4 py-1"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Sex</h3><p${_scopeId4}>${ssrInterpolate($data.details.client.sex)}</p></div><div class="w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Age</h3><p${_scopeId4}>${ssrInterpolate(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))($data.details.client.date_of_birth))}</p></div></div></div><div class="rounded border"${_scopeId4}><div class="px-2 py-2 bg-gray-50 border-b rounded-t"${_scopeId4}><h3 class="text-lg font-semibold text-black flex items-center"${_scopeId4}><img${ssrRenderAttr("src", _imports_2)} class="w-7 h-7 mr-1"${_scopeId4}> Specimen </h3></div><div class="w-full space-y-2 py-2"${_scopeId4}><div class="w-full flex justify-between px-4 py-1"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Specimen Type</h3><p${_scopeId4}>${ssrInterpolate($data.details.specimen_type)}</p></div><div class="w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Tracking Number</h3><p${_scopeId4}>${ssrInterpolate($data.details.tracking_number)}</p></div><div class="w-full flex justify-between px-4 py-1"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Accession Number</h3><p${_scopeId4}>${ssrInterpolate($data.details.accession_number)}</p></div><div class="w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Status</h3><p${_scopeId4}>${ssrInterpolate($data.details.status)}</p></div></div></div><div class="rounded border max-h-72 overflow-y-auto"${_scopeId4}><div class="px-2 py-2 bg-gray-50 border-b rounded-t flex items-center"${_scopeId4}><img${ssrRenderAttr("src", _imports_3)} class="w-7 h-7 mr-1"${_scopeId4}><h3 class="text-lg font-semibold text-black"${_scopeId4}>Test</h3></div><div class="w-full space-y-2 py-2"${_scopeId4}><div class="w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Name</h3><p${_scopeId4}>${ssrInterpolate($data.details.test_type_name)}</p></div><div class="w-full flex justify-between px-4 py-1"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Date Registered</h3><p${_scopeId4}>${ssrInterpolate($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div><div class="w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Receipt Date</h3><p${_scopeId4}>${ssrInterpolate($data.moment($data.details.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div><div class="w-full flex justify-between px-4 py-1"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Test Status</h3><p${_scopeId4}>${ssrInterpolate($data.details.status)}</p></div><div class="w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Ward/Location</h3><p${_scopeId4}>${ssrInterpolate($data.details.requesting_ward)}</p></div><div class="w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Request Origin</h3><p${_scopeId4}>${ssrInterpolate($data.details.request_origin)}</p></div><div class="w-full flex justify-between px-4 py-1"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Registered By</h3><p${_scopeId4}>${ssrInterpolate($options.getRequestedBy($data.details.status_trail))}</p></div><div class="w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Requested By</h3><p${_scopeId4}>${ssrInterpolate($data.details.requested_by)}</p></div></div></div></div><div class="mx-5 rounded border mb-5"${_scopeId4}><div class="flex items-center justify-between bg-gray-50 px-4 py-2 border-b rounded-t"${_scopeId4}><h3 class="text-lg font-semibold text-black"${_scopeId4}>Results</h3><div class="justify-end flex items-center space-x-3"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            icon: $data.viewIcon,
                            text: "View Report",
                            click: $options.viewReport,
                            color: "primary"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_TestsAddTestOrderDialog, {
                            item: $data.details,
                            onUpdate: $options.updateChanges,
                            color: "primary"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            icon: $data.printerIcon,
                            text: "Print Accession Number",
                            click: $options.printAccessionNumber,
                            color: "primary"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            icon: $data.printerIcon,
                            color: "success",
                            text: "Print Tracking Number",
                            click: $options.printTrackingNumber
                          }, null, _parent5, _scopeId4));
                          _push5(`</div></div><!--[-->`);
                          ssrRenderList($data.details.indicators, (indicator, index2) => {
                            _push5(`<div class="${ssrRenderClass(
                              $data.details.indicators.length !== index2 + 1 ? "w-full px-5 py-2 border-b border-dotted flex justify-between items-center" : "w-full px-5 py-2 flex justify-between items-center"
                            )}"${_scopeId4}><h3${_scopeId4}>${ssrInterpolate(indicator.name)}</h3><div${_scopeId4}>`);
                            if (indicator.result) {
                              _push5(`<p${_scopeId4}>${indicator.result.value ? indicator.result.value : "Not done"}</p>`);
                            } else {
                              _push5(`<!---->`);
                            }
                            _push5(`</div></div>`);
                          });
                          _push5(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Test ")
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
                            createVNode("div", { class: "grid grid-cols-3 gap-4 px-5 py-5" }, [
                              createVNode("div", { class: "rounded border" }, [
                                createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-black flex items-center" }, [
                                    createVNode("img", {
                                      src: _imports_1,
                                      class: "w-7 h-7 mr-1"
                                    }),
                                    createTextVNode(" Patient ")
                                  ])
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Patient Number"),
                                    createVNode("p", null, toDisplayString($data.details.client.id), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Name"),
                                    createVNode("p", null, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(
                                      `${$data.details.client.first_name} ${$data.details.client.middle_name} ${$data.details.client.last_name}`
                                    )), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Sex"),
                                    createVNode("p", null, toDisplayString($data.details.client.sex), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Age"),
                                    createVNode("p", null, toDisplayString(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))($data.details.client.date_of_birth)), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border" }, [
                                createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-black flex items-center" }, [
                                    createVNode("img", {
                                      src: _imports_2,
                                      class: "w-7 h-7 mr-1"
                                    }),
                                    createTextVNode(" Specimen ")
                                  ])
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Specimen Type"),
                                    createVNode("p", null, toDisplayString($data.details.specimen_type), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Tracking Number"),
                                    createVNode("p", null, toDisplayString($data.details.tracking_number), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Accession Number"),
                                    createVNode("p", null, toDisplayString($data.details.accession_number), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Status"),
                                    createVNode("p", null, toDisplayString($data.details.status), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border max-h-72 overflow-y-auto" }, [
                                createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t flex items-center" }, [
                                  createVNode("img", {
                                    src: _imports_3,
                                    class: "w-7 h-7 mr-1"
                                  }),
                                  createVNode("h3", { class: "text-lg font-semibold text-black" }, "Test")
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Name"),
                                    createVNode("p", null, toDisplayString($data.details.test_type_name), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Date Registered"),
                                    createVNode("p", null, toDisplayString($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Receipt Date"),
                                    createVNode("p", null, toDisplayString($data.moment($data.details.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Test Status"),
                                    createVNode("p", null, toDisplayString($data.details.status), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Ward/Location"),
                                    createVNode("p", null, toDisplayString($data.details.requesting_ward), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Request Origin"),
                                    createVNode("p", null, toDisplayString($data.details.request_origin), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Registered By"),
                                    createVNode("p", null, toDisplayString($options.getRequestedBy($data.details.status_trail)), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Requested By"),
                                    createVNode("p", null, toDisplayString($data.details.requested_by), 1)
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mx-5 rounded border mb-5" }, [
                              createVNode("div", { class: "flex items-center justify-between bg-gray-50 px-4 py-2 border-b rounded-t" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-black" }, "Results"),
                                createVNode("div", { class: "justify-end flex items-center space-x-3" }, [
                                  createVNode(_component_CoreActionButton, {
                                    icon: $data.viewIcon,
                                    text: "View Report",
                                    click: $options.viewReport,
                                    color: "primary"
                                  }, null, 8, ["icon", "click"]),
                                  createVNode(_component_TestsAddTestOrderDialog, {
                                    item: $data.details,
                                    onUpdate: $options.updateChanges,
                                    color: "primary"
                                  }, null, 8, ["item", "onUpdate"]),
                                  createVNode(_component_CoreActionButton, {
                                    icon: $data.printerIcon,
                                    text: "Print Accession Number",
                                    click: $options.printAccessionNumber,
                                    color: "primary"
                                  }, null, 8, ["icon", "click"]),
                                  createVNode(_component_CoreActionButton, {
                                    icon: $data.printerIcon,
                                    color: "success",
                                    text: "Print Tracking Number",
                                    click: $options.printTrackingNumber
                                  }, null, 8, ["icon", "click"])
                                ])
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.details.indicators, (indicator, index2) => {
                                return openBlock(), createBlock("div", {
                                  class: $data.details.indicators.length !== index2 + 1 ? "w-full px-5 py-2 border-b border-dotted flex justify-between items-center" : "w-full px-5 py-2 flex justify-between items-center",
                                  key: index2
                                }, [
                                  createVNode("h3", null, toDisplayString(indicator.name), 1),
                                  createVNode("div", null, [
                                    indicator.result ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      innerHTML: indicator.result.value ? indicator.result.value : "Not done"
                                    }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                                  ])
                                ], 2);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-7xl m-20 transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" View Test ")
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
                          createVNode("div", { class: "grid grid-cols-3 gap-4 px-5 py-5" }, [
                            createVNode("div", { class: "rounded border" }, [
                              createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-black flex items-center" }, [
                                  createVNode("img", {
                                    src: _imports_1,
                                    class: "w-7 h-7 mr-1"
                                  }),
                                  createTextVNode(" Patient ")
                                ])
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Patient Number"),
                                  createVNode("p", null, toDisplayString($data.details.client.id), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Name"),
                                  createVNode("p", null, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(
                                    `${$data.details.client.first_name} ${$data.details.client.middle_name} ${$data.details.client.last_name}`
                                  )), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Sex"),
                                  createVNode("p", null, toDisplayString($data.details.client.sex), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Age"),
                                  createVNode("p", null, toDisplayString(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))($data.details.client.date_of_birth)), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "rounded border" }, [
                              createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-black flex items-center" }, [
                                  createVNode("img", {
                                    src: _imports_2,
                                    class: "w-7 h-7 mr-1"
                                  }),
                                  createTextVNode(" Specimen ")
                                ])
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Specimen Type"),
                                  createVNode("p", null, toDisplayString($data.details.specimen_type), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Tracking Number"),
                                  createVNode("p", null, toDisplayString($data.details.tracking_number), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Accession Number"),
                                  createVNode("p", null, toDisplayString($data.details.accession_number), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Status"),
                                  createVNode("p", null, toDisplayString($data.details.status), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "rounded border max-h-72 overflow-y-auto" }, [
                              createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t flex items-center" }, [
                                createVNode("img", {
                                  src: _imports_3,
                                  class: "w-7 h-7 mr-1"
                                }),
                                createVNode("h3", { class: "text-lg font-semibold text-black" }, "Test")
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Name"),
                                  createVNode("p", null, toDisplayString($data.details.test_type_name), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Date Registered"),
                                  createVNode("p", null, toDisplayString($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Receipt Date"),
                                  createVNode("p", null, toDisplayString($data.moment($data.details.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Test Status"),
                                  createVNode("p", null, toDisplayString($data.details.status), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Ward/Location"),
                                  createVNode("p", null, toDisplayString($data.details.requesting_ward), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Request Origin"),
                                  createVNode("p", null, toDisplayString($data.details.request_origin), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Registered By"),
                                  createVNode("p", null, toDisplayString($options.getRequestedBy($data.details.status_trail)), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Requested By"),
                                  createVNode("p", null, toDisplayString($data.details.requested_by), 1)
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mx-5 rounded border mb-5" }, [
                            createVNode("div", { class: "flex items-center justify-between bg-gray-50 px-4 py-2 border-b rounded-t" }, [
                              createVNode("h3", { class: "text-lg font-semibold text-black" }, "Results"),
                              createVNode("div", { class: "justify-end flex items-center space-x-3" }, [
                                createVNode(_component_CoreActionButton, {
                                  icon: $data.viewIcon,
                                  text: "View Report",
                                  click: $options.viewReport,
                                  color: "primary"
                                }, null, 8, ["icon", "click"]),
                                createVNode(_component_TestsAddTestOrderDialog, {
                                  item: $data.details,
                                  onUpdate: $options.updateChanges,
                                  color: "primary"
                                }, null, 8, ["item", "onUpdate"]),
                                createVNode(_component_CoreActionButton, {
                                  icon: $data.printerIcon,
                                  text: "Print Accession Number",
                                  click: $options.printAccessionNumber,
                                  color: "primary"
                                }, null, 8, ["icon", "click"]),
                                createVNode(_component_CoreActionButton, {
                                  icon: $data.printerIcon,
                                  color: "success",
                                  text: "Print Tracking Number",
                                  click: $options.printTrackingNumber
                                }, null, 8, ["icon", "click"])
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList($data.details.indicators, (indicator, index2) => {
                              return openBlock(), createBlock("div", {
                                class: $data.details.indicators.length !== index2 + 1 ? "w-full px-5 py-2 border-b border-dotted flex justify-between items-center" : "w-full px-5 py-2 flex justify-between items-center",
                                key: index2
                              }, [
                                createVNode("h3", null, toDisplayString(indicator.name), 1),
                                createVNode("div", null, [
                                  indicator.result ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    innerHTML: indicator.result.value ? indicator.result.value : "Not done"
                                  }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                                ])
                              ], 2);
                            }), 128))
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
                  createVNode("div", { class: "flex min-h-full items-center justify-center text-center" }, [
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
                        createVNode(_component_DialogPanel, { class: "w-full max-w-7xl m-20 transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Test ")
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
                            createVNode("div", { class: "grid grid-cols-3 gap-4 px-5 py-5" }, [
                              createVNode("div", { class: "rounded border" }, [
                                createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-black flex items-center" }, [
                                    createVNode("img", {
                                      src: _imports_1,
                                      class: "w-7 h-7 mr-1"
                                    }),
                                    createTextVNode(" Patient ")
                                  ])
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Patient Number"),
                                    createVNode("p", null, toDisplayString($data.details.client.id), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Name"),
                                    createVNode("p", null, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(
                                      `${$data.details.client.first_name} ${$data.details.client.middle_name} ${$data.details.client.last_name}`
                                    )), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Sex"),
                                    createVNode("p", null, toDisplayString($data.details.client.sex), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Age"),
                                    createVNode("p", null, toDisplayString(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))($data.details.client.date_of_birth)), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border" }, [
                                createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-black flex items-center" }, [
                                    createVNode("img", {
                                      src: _imports_2,
                                      class: "w-7 h-7 mr-1"
                                    }),
                                    createTextVNode(" Specimen ")
                                  ])
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Specimen Type"),
                                    createVNode("p", null, toDisplayString($data.details.specimen_type), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Tracking Number"),
                                    createVNode("p", null, toDisplayString($data.details.tracking_number), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Accession Number"),
                                    createVNode("p", null, toDisplayString($data.details.accession_number), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Status"),
                                    createVNode("p", null, toDisplayString($data.details.status), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border max-h-72 overflow-y-auto" }, [
                                createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t flex items-center" }, [
                                  createVNode("img", {
                                    src: _imports_3,
                                    class: "w-7 h-7 mr-1"
                                  }),
                                  createVNode("h3", { class: "text-lg font-semibold text-black" }, "Test")
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Name"),
                                    createVNode("p", null, toDisplayString($data.details.test_type_name), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Date Registered"),
                                    createVNode("p", null, toDisplayString($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Receipt Date"),
                                    createVNode("p", null, toDisplayString($data.moment($data.details.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Test Status"),
                                    createVNode("p", null, toDisplayString($data.details.status), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Ward/Location"),
                                    createVNode("p", null, toDisplayString($data.details.requesting_ward), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Request Origin"),
                                    createVNode("p", null, toDisplayString($data.details.request_origin), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Registered By"),
                                    createVNode("p", null, toDisplayString($options.getRequestedBy($data.details.status_trail)), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Requested By"),
                                    createVNode("p", null, toDisplayString($data.details.requested_by), 1)
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mx-5 rounded border mb-5" }, [
                              createVNode("div", { class: "flex items-center justify-between bg-gray-50 px-4 py-2 border-b rounded-t" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-black" }, "Results"),
                                createVNode("div", { class: "justify-end flex items-center space-x-3" }, [
                                  createVNode(_component_CoreActionButton, {
                                    icon: $data.viewIcon,
                                    text: "View Report",
                                    click: $options.viewReport,
                                    color: "primary"
                                  }, null, 8, ["icon", "click"]),
                                  createVNode(_component_TestsAddTestOrderDialog, {
                                    item: $data.details,
                                    onUpdate: $options.updateChanges,
                                    color: "primary"
                                  }, null, 8, ["item", "onUpdate"]),
                                  createVNode(_component_CoreActionButton, {
                                    icon: $data.printerIcon,
                                    text: "Print Accession Number",
                                    click: $options.printAccessionNumber,
                                    color: "primary"
                                  }, null, 8, ["icon", "click"]),
                                  createVNode(_component_CoreActionButton, {
                                    icon: $data.printerIcon,
                                    color: "success",
                                    text: "Print Tracking Number",
                                    click: $options.printTrackingNumber
                                  }, null, 8, ["icon", "click"])
                                ])
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.details.indicators, (indicator, index2) => {
                                return openBlock(), createBlock("div", {
                                  class: $data.details.indicators.length !== index2 + 1 ? "w-full px-5 py-2 border-b border-dotted flex justify-between items-center" : "w-full px-5 py-2 flex justify-between items-center",
                                  key: index2
                                }, [
                                  createVNode("h3", null, toDisplayString(indicator.name), 1),
                                  createVNode("div", null, [
                                    indicator.result ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      innerHTML: indicator.result.value ? indicator.result.value : "Not done"
                                    }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                                  ])
                                ], 2);
                              }), 128))
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
                createVNode("div", { class: "flex min-h-full items-center justify-center text-center" }, [
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-7xl m-20 transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" View Test ")
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
                          createVNode("div", { class: "grid grid-cols-3 gap-4 px-5 py-5" }, [
                            createVNode("div", { class: "rounded border" }, [
                              createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-black flex items-center" }, [
                                  createVNode("img", {
                                    src: _imports_1,
                                    class: "w-7 h-7 mr-1"
                                  }),
                                  createTextVNode(" Patient ")
                                ])
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Patient Number"),
                                  createVNode("p", null, toDisplayString($data.details.client.id), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Name"),
                                  createVNode("p", null, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(
                                    `${$data.details.client.first_name} ${$data.details.client.middle_name} ${$data.details.client.last_name}`
                                  )), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Sex"),
                                  createVNode("p", null, toDisplayString($data.details.client.sex), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Age"),
                                  createVNode("p", null, toDisplayString(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))($data.details.client.date_of_birth)), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "rounded border" }, [
                              createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-black flex items-center" }, [
                                  createVNode("img", {
                                    src: _imports_2,
                                    class: "w-7 h-7 mr-1"
                                  }),
                                  createTextVNode(" Specimen ")
                                ])
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Specimen Type"),
                                  createVNode("p", null, toDisplayString($data.details.specimen_type), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Tracking Number"),
                                  createVNode("p", null, toDisplayString($data.details.tracking_number), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Accession Number"),
                                  createVNode("p", null, toDisplayString($data.details.accession_number), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Status"),
                                  createVNode("p", null, toDisplayString($data.details.status), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "rounded border max-h-72 overflow-y-auto" }, [
                              createVNode("div", { class: "px-2 py-2 bg-gray-50 border-b rounded-t flex items-center" }, [
                                createVNode("img", {
                                  src: _imports_3,
                                  class: "w-7 h-7 mr-1"
                                }),
                                createVNode("h3", { class: "text-lg font-semibold text-black" }, "Test")
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Name"),
                                  createVNode("p", null, toDisplayString($data.details.test_type_name), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Date Registered"),
                                  createVNode("p", null, toDisplayString($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Receipt Date"),
                                  createVNode("p", null, toDisplayString($data.moment($data.details.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Test Status"),
                                  createVNode("p", null, toDisplayString($data.details.status), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Ward/Location"),
                                  createVNode("p", null, toDisplayString($data.details.requesting_ward), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Request Origin"),
                                  createVNode("p", null, toDisplayString($data.details.request_origin), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-1" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Registered By"),
                                  createVNode("p", null, toDisplayString($options.getRequestedBy($data.details.status_trail)), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-4 py-2 bg-gray-50 border-b border-t border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Requested By"),
                                  createVNode("p", null, toDisplayString($data.details.requested_by), 1)
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mx-5 rounded border mb-5" }, [
                            createVNode("div", { class: "flex items-center justify-between bg-gray-50 px-4 py-2 border-b rounded-t" }, [
                              createVNode("h3", { class: "text-lg font-semibold text-black" }, "Results"),
                              createVNode("div", { class: "justify-end flex items-center space-x-3" }, [
                                createVNode(_component_CoreActionButton, {
                                  icon: $data.viewIcon,
                                  text: "View Report",
                                  click: $options.viewReport,
                                  color: "primary"
                                }, null, 8, ["icon", "click"]),
                                createVNode(_component_TestsAddTestOrderDialog, {
                                  item: $data.details,
                                  onUpdate: $options.updateChanges,
                                  color: "primary"
                                }, null, 8, ["item", "onUpdate"]),
                                createVNode(_component_CoreActionButton, {
                                  icon: $data.printerIcon,
                                  text: "Print Accession Number",
                                  click: $options.printAccessionNumber,
                                  color: "primary"
                                }, null, 8, ["icon", "click"]),
                                createVNode(_component_CoreActionButton, {
                                  icon: $data.printerIcon,
                                  color: "success",
                                  text: "Print Tracking Number",
                                  click: $options.printTrackingNumber
                                }, null, 8, ["icon", "click"])
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList($data.details.indicators, (indicator, index2) => {
                              return openBlock(), createBlock("div", {
                                class: $data.details.indicators.length !== index2 + 1 ? "w-full px-5 py-2 border-b border-dotted flex justify-between items-center" : "w-full px-5 py-2 flex justify-between items-center",
                                key: index2
                              }, [
                                createVNode("h3", null, toDisplayString(indicator.name), 1),
                                createVNode("div", null, [
                                  indicator.result ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    innerHTML: indicator.result.value ? indicator.result.value : "Not done"
                                  }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                                ])
                              ], 2);
                            }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tests/view-dialog/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$7,
    UserIcon: render$h
  },
  data() {
    return {
      open: false,
      addIcon: render$k,
      saveIcon: render$i,
      clearIcon: render$j,
      name: "",
      description: "",
      loading: false,
      cookie: useCookie("token"),
      reasons: new Array(),
      reasonsSelected: "",
      rawReasons: new Array()
    };
  },
  props: {
    item: {
      required: true,
      type: Object
    },
    text: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    icon: {
      type: [Object, Function],
      required: true
    }
  },
  methods: {
    /**
     * @method init opens dialog and loads reasons for rejection
     * @returns promise @type void
     */
    async init() {
      this.handleClick();
      const request = {
        route: endpoints.rejectionReasons,
        method: "GET",
        token: `${this.cookie}`
      };
      const { error, data } = await fetchRequest(request);
      if (data.value) {
        this.rawReasons = data.value;
        data.value.map((reason) => {
          this.reasons.push(reason.description);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    /**
     * @method submitForm changes test status with a reason
     * @returns promise @type void
     */
    async submitForm() {
      this.loading = true;
      let reason_id = null;
      this.rawReasons.map((reason) => {
        if (reason.description === this.reasonsSelected) {
          reason_id = reason.id;
        }
      });
      const request = {
        route: `${endpoints.testStatus}/${this.item.id}/${this.action}?status_reason_id=${reason_id}&person_talked_to=${this.name}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {}
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        useNuxtApp().$toast.success(
          `Test action "${this.text}" done successfully!`
        );
        this.handleClick();
        this.loading = false;
        this.$emit("update", true);
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    },
    /**
     * @method handleClick handles dialog visibility
     * @returns @type void
     */
    handleClick() {
      this.open = !this.open;
    },
    /**
     * @method resetForm resets the rejection form on click
     * @returns @type void
     */
    resetForm() {
      this.$formkit.reset("rejectionForm");
    }
  }
};
const _imports_0 = "" + buildAssetsURL("rdt_result_no_test.6a8034c1.svg");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: $props.text,
    color: "error",
    icon: $props.icon,
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> ${ssrInterpolate($props.text.charAt(0).toUpperCase() + $props.text.slice(1))} Reason `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" " + toDisplayString($props.text.charAt(0).toUpperCase() + $props.text.slice(1)) + " Reason ", 1)
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
                            id: "rejectionForm"
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><div class="space-y-2"${_scopeId5}><h3 class="font-medium"${_scopeId5}>Test Type</h3><p class="border-b border-dotted text-gray-600"${_scopeId5}>${ssrInterpolate($props.item.test_type_name)}</p></div><div class="space-y-2"${_scopeId5}><h3 class="font-medium"${_scopeId5}>Specimen</h3><p class="border-b border-dotted text-gray-600"${_scopeId5}>${ssrInterpolate($props.item.specimen_type)}</p></div><div class="space-y-2"${_scopeId5}><h3 class="font-medium"${_scopeId5}>Accession Number</h3><p class="border-b border-dotted text-gray-600"${_scopeId5}>${ssrInterpolate($props.item.accession_number)}</p></div><div class="w-full flex items-center"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Person Talked To",
                                  validation: "required",
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="w-full flex flex-col space-y-2 pb-40"${_scopeId5}><label class="font-medium"${_scopeId5}>Select Reason(s)</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.reasonsSelected,
                                  "onUpdate:modelValue": ($event) => $data.reasonsSelected = $event,
                                  options: $data.reasons,
                                  searchable: true,
                                  required: true,
                                  clear: "",
                                  class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  text: "Clear form",
                                  click: $options.resetForm
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
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "space-y-2" }, [
                                      createVNode("h3", { class: "font-medium" }, "Test Type"),
                                      createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.test_type_name), 1)
                                    ]),
                                    createVNode("div", { class: "space-y-2" }, [
                                      createVNode("h3", { class: "font-medium" }, "Specimen"),
                                      createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.specimen_type), 1)
                                    ]),
                                    createVNode("div", { class: "space-y-2" }, [
                                      createVNode("h3", { class: "font-medium" }, "Accession Number"),
                                      createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.accession_number), 1)
                                    ]),
                                    createVNode("div", { class: "w-full flex items-center" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Person Talked To",
                                          validation: "required",
                                          modelValue: $data.name,
                                          "onUpdate:modelValue": ($event) => $data.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                      createVNode("label", { class: "font-medium" }, "Select Reason(s)"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.reasonsSelected,
                                        "onUpdate:modelValue": ($event) => $data.reasonsSelected = $event,
                                        options: $data.reasons,
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
                                      click: $options.resetForm
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
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" " + toDisplayString($props.text.charAt(0).toUpperCase() + $props.text.slice(1)) + " Reason ", 1)
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
                              id: "rejectionForm"
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode("div", { class: "space-y-2" }, [
                                    createVNode("h3", { class: "font-medium" }, "Test Type"),
                                    createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.test_type_name), 1)
                                  ]),
                                  createVNode("div", { class: "space-y-2" }, [
                                    createVNode("h3", { class: "font-medium" }, "Specimen"),
                                    createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.specimen_type), 1)
                                  ]),
                                  createVNode("div", { class: "space-y-2" }, [
                                    createVNode("h3", { class: "font-medium" }, "Accession Number"),
                                    createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.accession_number), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex items-center" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Person Talked To",
                                        validation: "required",
                                        modelValue: $data.name,
                                        "onUpdate:modelValue": ($event) => $data.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Reason(s)"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.reasonsSelected,
                                      "onUpdate:modelValue": ($event) => $data.reasonsSelected = $event,
                                      options: $data.reasons,
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
                                    click: $options.resetForm
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
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" " + toDisplayString($props.text.charAt(0).toUpperCase() + $props.text.slice(1)) + " Reason ", 1)
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
                            id: "rejectionForm"
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode("h3", { class: "font-medium" }, "Test Type"),
                                  createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.test_type_name), 1)
                                ]),
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode("h3", { class: "font-medium" }, "Specimen"),
                                  createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.specimen_type), 1)
                                ]),
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode("h3", { class: "font-medium" }, "Accession Number"),
                                  createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.accession_number), 1)
                                ]),
                                createVNode("div", { class: "w-full flex items-center" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Person Talked To",
                                      validation: "required",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                  createVNode("label", { class: "font-medium" }, "Select Reason(s)"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.reasonsSelected,
                                    "onUpdate:modelValue": ($event) => $data.reasonsSelected = $event,
                                    options: $data.reasons,
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
                                  click: $options.resetForm
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
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" " + toDisplayString($props.text.charAt(0).toUpperCase() + $props.text.slice(1)) + " Reason ", 1)
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
                              id: "rejectionForm"
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode("div", { class: "space-y-2" }, [
                                    createVNode("h3", { class: "font-medium" }, "Test Type"),
                                    createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.test_type_name), 1)
                                  ]),
                                  createVNode("div", { class: "space-y-2" }, [
                                    createVNode("h3", { class: "font-medium" }, "Specimen"),
                                    createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.specimen_type), 1)
                                  ]),
                                  createVNode("div", { class: "space-y-2" }, [
                                    createVNode("h3", { class: "font-medium" }, "Accession Number"),
                                    createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.accession_number), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex items-center" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Person Talked To",
                                        validation: "required",
                                        modelValue: $data.name,
                                        "onUpdate:modelValue": ($event) => $data.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Reason(s)"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.reasonsSelected,
                                      "onUpdate:modelValue": ($event) => $data.reasonsSelected = $event,
                                      options: $data.reasons,
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
                                    click: $options.resetForm
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
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" " + toDisplayString($props.text.charAt(0).toUpperCase() + $props.text.slice(1)) + " Reason ", 1)
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
                            id: "rejectionForm"
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode("h3", { class: "font-medium" }, "Test Type"),
                                  createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.test_type_name), 1)
                                ]),
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode("h3", { class: "font-medium" }, "Specimen"),
                                  createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.specimen_type), 1)
                                ]),
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode("h3", { class: "font-medium" }, "Accession Number"),
                                  createVNode("p", { class: "border-b border-dotted text-gray-600" }, toDisplayString($props.item.accession_number), 1)
                                ]),
                                createVNode("div", { class: "w-full flex items-center" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Person Talked To",
                                      validation: "required",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2 pb-40" }, [
                                  createVNode("label", { class: "font-medium" }, "Select Reason(s)"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.reasonsSelected,
                                    "onUpdate:modelValue": ($event) => $data.reasonsSelected = $event,
                                    options: $data.reasons,
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
                                  click: $options.resetForm
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tests/reject-reason-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    MagnifyingGlassIcon: render$3,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOptions,
    ListboxOption,
    ChevronUpDownIcon: render$4,
    ArrowRightIcon: render$2,
    ChevronDownIcon: render$5,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    CheckIcon: render$6,
    PopoverButton,
    Popover,
    PopoverPanel,
    XMarkIcon: render$7,
    CheckCircleIcon: render$8
  },
  setup() {
    const authStore = useAuthStore();
    useHead({
      title: `${Package.name.toUpperCase()} - ${authStore.department} Tests`
    });
  },
  data() {
    return {
      moment,
      addIcon: render$9,
      filterIcon: render$a,
      applyIcon: render$1,
      acceptIcon: render$3$1,
      moreActions: false,
      okIcon: render$b,
      moreIcon: render$c,
      lessIcon: render$1$1,
      clearIcon: render$d,
      dropIcon: render$e,
      editIcon: render$f,
      refreshIcon: render$g,
      dateRange: [],
      search: "",
      header: "Tests Lists",
      pages: [
        {
          name: "Home",
          link: "/home"
        }
      ],
      headers: [
        { text: "PATIENT", value: "name", sortable: true },
        { text: "ACCESSION NO", value: "accession_number", sortable: true },
        { text: "TEST", value: "test_type_name", sortable: true },
        { text: "LOCATION", value: "requesting_ward", sortable: true },
        { text: "ORDER STATUS", value: "order_status", sortable: true },
        { text: "STATUS", value: "status", sortable: true },
        { text: "DATE REGISTERED", value: "created_date", sortable: true },
        { text: "ACTIONS", value: "actions" }
      ],
      statuses: [
        {
          text: "Results",
          color: "primary",
          icon: render$9,
          status: "completed",
          show: "started"
        },
        {
          text: "Accept",
          color: "success",
          icon: render$b,
          status: "pending",
          show: "not-collected"
        },
        {
          text: "Start",
          color: "warning",
          icon: render,
          status: "started",
          show: "pending"
        },
        {
          text: "Authorize",
          color: "success",
          status: "verified",
          icon: render$b,
          show: "completed"
        }
      ],
      rejectStatuses: [
        {
          name: "Reject",
          icon: render$e,
          action: "rejected"
        },
        {
          name: "Void",
          icon: render$e,
          action: "voided"
        },
        {
          name: "Not-done",
          icon: render$e,
          action: "not_done"
        }
      ],
      changing: false,
      data: new Array(),
      statusSelected: { name: "select status" },
      searchField: "accession_number",
      searchValue: "",
      cookie: useCookie("token"),
      loading: false,
      serverItemsLength: 0,
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      },
      authStore: useAuthStore(),
      testStatuses: new Array(),
      filters: new Array(),
      i18n: useI18n()
    };
  },
  created() {
    this.init();
  },
  methods: {
    /**
     * @method searchNlims search for test
     * @param value string for trackingID
     * @returns promise @type void
     */
    async searchNlims(value) {
      this.loading = true;
      const request = {
        route: `${endpoints.nlimsTestSearch}?tracking_number=${value.replace(/\$$/, "")}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        showTestDetails(data.value);
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(`${error.value.data.error}`);
        this.loading = false;
      }
    },
    /**
     * @method init load tests from endpoint
     * @returns promise @type void
     * @param null
     */
    async init() {
      this.loadStatuses();
      this.loading = true;
      const { t } = this.i18n;
      for (var i = 0; i < this.headers.length; ++i) {
        switch (this.headers[i].text) {
          case "PATIENT":
            this.headers[i].text = t("patient");
            break;
          case "ACCESSION NO":
            this.headers[i].text = t("ACCESSION_NO");
            break;
          case "TEST":
            this.headers[i].text = t("TEST");
            break;
          case "LOCATION":
            this.headers[i].text = t("LOCATION");
            break;
          case "ORDER STATUS":
            this.headers[i].text = t("ORDER_STATUS");
            break;
          case "STATUS":
            this.headers[i].text = t("STATUS");
            break;
          case "DATE REGISTERED":
            this.headers[i].text = t("DATE_REGISTERED");
            break;
          case "ACTIONS":
            this.headers[i].text = t("ACTIONS");
            break;
        }
      }
      if (this.statusSelected.name === "select status") {
        this.statusSelected.name = t("select_status");
      }
      const { page, rowsPerPage } = this.serverOptions;
      let department_id = this.getIdFromName(
        this.authStore.user.departments,
        this.authStore.department
      );
      let testStatus = this.statusSelected.name === "select status" ? "" : this.statusSelected.name;
      const startDate = this.dateRange !== null && this.dateRange.length > 0 ? moment(this.dateRange[0]).format("YYYY-MM-DD") : "";
      const endDate = this.dateRange !== null && this.dateRange.length > 1 ? moment(this.dateRange[1]).format("YYYY-MM-DD") : "";
      const request = {
        route: `${endpoints.tests}?minimal=true&page=${page}&per_page=${rowsPerPage}&status=${testStatus.toLowerCase()}&search=${this.search}&department_id=${department_id}&start_date=${startDate}&end_date=${endDate}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.data = data.value.data.map((test) => {
          var _a, _b, _c, _d;
          return {
            ...test,
            name: `${capitalize(
              ((_a = test.client) == null ? void 0 : _a.first_name) + " " + ((_b = test.client) == null ? void 0 : _b.middle_name) + " " + ((_c = test.client) == null ? void 0 : _c.last_name)
            )}(${test.client.sex}, ${calculateAge((_d = test.client) == null ? void 0 : _d.date_of_birth)} yrs)`,
            order_status: `${test.order_status !== null ? (test.order_status.charAt(0).toUpperCase() + test.order_status.slice(1)).split("-").join(" ") : ""}`,
            status: `${test.status !== null ? test.status.charAt(0).toUpperCase() + test.status.slice(1) : ""}`,
            created_date: moment(test.created_date).format(dateFormat)
          };
        });
        this.serverItemsLength = data.value.meta.total_count;
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value.data);
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    },
    /**
     * @method loadStatuses load all test statuses
     * @param null
     * @returns promise @type void
     */
    async loadStatuses() {
      const request = {
        route: `${endpoints.testStatus}/all`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.testStatuses = data.value.map(
          (status) => {
            return {
              id: status.id,
              name: status.name.charAt(0).toUpperCase() + status.name.slice(1)
            };
          }
        );
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    /**
     * @method changeStatus change status of current test
     * @param status string
     * @param id number
     * @returns promise @type void
     */
    async changeStatus(status, id) {
      this.loading = true;
      const request = {
        route: `${endpoints.testStatus}/${id}/${status}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {}
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.init();
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    async changeOrderStatus(status, id) {
      this.loading = true;
      const request = {
        route: `${endpoints.orderStatus}/${status}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {
          order_id: id
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.init();
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    /***
     * @method checkStatus triggers functions based on tets status
     * @param status item
     * @returns void
     */
    checkStatus(status, item) {
      if (status.status === "completed") {
        if (item.test_type_name.toLowerCase().includes("culture")) {
          this.redirect(item, `/tests/result/culture-sensitivity?accession_number=${item.accession_number}&test_id=${item.id}`);
        } else {
          this.redirect(item, `/tests/result?accession_number=${item.accession_number}&test_id=${item.id}`);
        }
      } else {
        if (status.status !== "") {
          this.changeStatus(status.status, item.id);
        } else {
          this.printTest(item);
        }
      }
    },
    printTest(data) {
      print();
    },
    statusList(data, t) {
      var str = "";
      for (var i = 0; i < data.length; ++i) {
        str = StatusList(data[i].name, t);
        data[i].name = str;
      }
      return data;
    },
    chaStatusSelected(data, t) {
      if (data.name === "select status") {
        this.statusSelected.name = t("select_status");
      } else {
        this.statusSelected = data;
      }
    },
    /**
     * @method getIdFromName filtering department array
     * @param departments
     * @param name
     * @returns number or null if not found
     */
    getIdFromName(departments, name) {
      const department = departments.find((dept) => dept.name === name);
      return department ? department.id : null;
    },
    updateTests(value) {
      if (typeof value === "object") {
        this.serverOptions = value;
      }
      this.init();
      this.moreActions = false;
    },
    refreshTests() {
      this.searchValue = "";
      this.search = "";
      this.init();
    },
    update(value) {
      this.search = value;
      this.searchValue = value;
      if (value !== "") {
        if (this.checkTrackingNumber(value)) {
          this.searchNlims(value);
        } else {
          this.updateTests(value);
        }
      } else {
        this.init();
      }
    },
    handleClick() {
      this.moreActions = !this.moreActions;
    },
    /**
     * @method redirect
     * @param item object
     * @param path string
     * @returns void
     */
    redirect(item, path) {
      this.$router.push(path);
    },
    /**
     * @method checkTrackingNumber if a tracking number meets the specified criteria.
     * @returns {boolean} Whether the tracking number is valid or not.
     */
    checkTrackingNumber(trackingNumber) {
      const regex = /^(x|l).*\d/;
      return regex.test(trackingNumber.toLowerCase());
    },
    /**
     * @method updateOnStatus handle labels
     * @param value
     * @returns void
     */
    updateOnStatus(value) {
      if (value.name !== "select status") {
        const foundStatusFilter = this.filters.find((filter) => filter.origin === "statuses");
        if (foundStatusFilter) {
          foundStatusFilter.value = value.name;
        } else {
          this.filters.push({
            origin: "statuses",
            value: value.name
          });
        }
      }
      this.statusSelected = value;
      this.init();
    },
    /**
     * @method removeFilter
     * @param value { origin, value }
     * @returns void
     */
    removeFilter(value) {
      if (value.origin === "statuses") {
        if (this.statusSelected.name !== "select status") {
          this.updateOnStatus({ name: "select status" });
        }
      }
      const index2 = this.filters.findIndex((filter) => filter.origin === value.origin);
      if (index2 !== -1) {
        this.filters.splice(index2, 1);
      }
      this.init();
    },
    /**
     * @method isCompletedByCurrentUserOrSuperAdmin
     * @param item Object
     * @returns boolean
     */
    isCompletedByCurrentUserOrSuperAdmin(item) {
      const currentUser = this.authStore.user;
      const completedBy = item.completed_by;
      if (completedBy) {
        if (completedBy.id !== currentUser.id) {
          return true;
        } else if (completedBy.is_super_admin === true) {
          return true;
        }
      }
      return false;
    },
    /**
     * @method shouldDisplayButton
     * @param item
     * @param status
     * @returns boolean
     */
    shouldDisplayButton(item, status) {
      const lowerCaseStatus = item.status.toLowerCase();
      const lowerCaseShow = status.show.toLowerCase();
      if (lowerCaseStatus === lowerCaseShow) {
        const isCompletedByCurrentUserOrAdmin = this.isCompletedByCurrentUserOrSuperAdmin(item);
        if (lowerCaseStatus === "pending" && item.order_status.toLowerCase() === "specimen not collected") {
          return false;
        }
        return isCompletedByCurrentUserOrAdmin;
      }
      return false;
    },
    hideRejectActions(status) {
      return !["voided", "test-rejected", "verified"].includes(status.toLowerCase());
    }
  },
  watch: {
    authStore: {
      handler() {
        this.init();
      },
      deep: true
    },
    dateRange: {
      handler() {
        this.init();
      },
      deep: true
    },
    statusSelected: {
      handler(newValue) {
        this.updateOnStatus(newValue);
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_CoreDropdown = __nuxt_component_0$2;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreSearchBar = __nuxt_component_1;
  const _component_CoreLabel = __nuxt_component_4;
  const _component_CoreDatatable = __nuxt_component_2$1;
  const _component_TestsViewDialog = __nuxt_component_6;
  const _component_TestsRejectReasonDialog = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate(_ctx.$t("Tests_Lists"))}</h3></div><div class="flex justify-between items-center w-full py-2 mb-2"><div class="flex items-center space-x-2">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: _ctx.$t("Refresh"),
    color: "warning",
    icon: $data.refreshIcon,
    click: () => {
      $options.refreshTests();
    },
    loading: $data.loading
  }, null, _parent));
  _push(`<div class="relative z-10 w-40">`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $options.statusList($data.testStatuses, _ctx.$t),
    modelValue: $data.statusSelected,
    "onUpdate:modelValue": ($event) => $data.statusSelected = $event
  }, null, _parent));
  _push(`</div><div class="w-72 pt-1">`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: _ctx.$t("start_enddate"),
    range: "",
    "input-classes": "border font-normal rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    modelValue: $data.dateRange,
    "onUpdate:modelValue": ($event) => $data.dateRange = $event,
    format: "datePickerFormat" in _ctx ? _ctx.datePickerFormat : unref(datePickerFormat)
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    onUpdate: $options.update,
    search: $data.search
  }, null, _parent));
  _push(`</div><div class="py-3 flex items-center space-x-3"><!--[-->`);
  ssrRenderList($data.filters, (filter, index2) => {
    _push(ssrRenderComponent(_component_CoreLabel, {
      value: { origin: "statuses", text: filter.value },
      close: "",
      color: "green",
      key: index2,
      onUpdate: $options.removeFilter
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $data.data,
    loading: $data.loading,
    searchField: $data.searchField,
    searchValue: $data.searchValue,
    serverItemsLength: $data.serverItemsLength,
    serverOptions: $data.serverOptions,
    onUpdate: $options.updateTests
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center"${_scopeId}><div class="w-full flex items-center justify-between space-x-2"${_scopeId}><div style="${ssrRenderStyle(!$data.moreActions ? null : { display: "none" })}" class="flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TestsViewDialog, {
          data: item,
          onUpdate: $options.updateTests
        }, null, _parent2, _scopeId));
        if (item.status.toLowerCase() === "completed") {
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            click: () => {
              $options.checkStatus({ status: "completed" }, item);
            },
            text: "Edit",
            color: "success",
            icon: $data.editIcon
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<!--[-->`);
        ssrRenderList($data.statuses, (status, index2) => {
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            color: status.color,
            text: status.text,
            icon: status.icon,
            click: () => {
              $options.checkStatus(status, item);
            },
            key: index2,
            style: $options.shouldDisplayButton(item, status) ? null : { display: "none" }
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
        if (item.order_status.toLowerCase() === "specimen not collected") {
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            color: "success",
            text: "Accept",
            icon: $data.acceptIcon,
            click: () => $options.changeOrderStatus("accepted", item.order_id)
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if ($options.hideRejectActions(item.status)) {
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            click: $options.handleClick,
            color: "",
            text: "",
            icon: $data.moreActions == true ? $data.lessIcon : $data.moreIcon
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if ($options.hideRejectActions(item.status)) {
          _push2(`<div style="${ssrRenderStyle($data.moreActions ? null : { display: "none" })}" class="flex items-center space-x-2"${_scopeId}>`);
          if ($options.hideRejectActions(item.status)) {
            _push2(`<!--[-->`);
            ssrRenderList($data.rejectStatuses, (rejects, index2) => {
              _push2(ssrRenderComponent(_component_TestsRejectReasonDialog, {
                item,
                key: index2,
                text: rejects.name,
                icon: rejects.icon,
                action: rejects.action,
                onUpdate: $options.updateTests
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center" }, [
            createVNode("div", { class: "w-full flex items-center justify-between space-x-2" }, [
              withDirectives(createVNode("div", { class: "flex items-center space-x-2" }, [
                createVNode(_component_TestsViewDialog, {
                  data: item,
                  onUpdate: $options.updateTests
                }, null, 8, ["data", "onUpdate"]),
                item.status.toLowerCase() === "completed" ? (openBlock(), createBlock(_component_CoreActionButton, {
                  key: 0,
                  click: () => {
                    $options.checkStatus({ status: "completed" }, item);
                  },
                  text: "Edit",
                  color: "success",
                  icon: $data.editIcon
                }, null, 8, ["click", "icon"])) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList($data.statuses, (status, index2) => {
                  return withDirectives((openBlock(), createBlock(_component_CoreActionButton, {
                    color: status.color,
                    text: status.text,
                    icon: status.icon,
                    click: () => {
                      $options.checkStatus(status, item);
                    },
                    key: index2
                  }, null, 8, ["color", "text", "icon", "click"])), [
                    [vShow, $options.shouldDisplayButton(item, status)]
                  ]);
                }), 128)),
                item.order_status.toLowerCase() === "specimen not collected" ? (openBlock(), createBlock(_component_CoreActionButton, {
                  key: 1,
                  color: "success",
                  text: "Accept",
                  icon: $data.acceptIcon,
                  click: () => $options.changeOrderStatus("accepted", item.order_id)
                }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
              ], 512), [
                [vShow, !$data.moreActions]
              ]),
              $options.hideRejectActions(item.status) ? (openBlock(), createBlock(_component_CoreActionButton, {
                key: 0,
                click: $options.handleClick,
                color: "",
                text: "",
                icon: $data.moreActions == true ? $data.lessIcon : $data.moreIcon
              }, null, 8, ["click", "icon"])) : createCommentVNode("", true)
            ]),
            $options.hideRejectActions(item.status) ? withDirectives((openBlock(), createBlock("div", {
              key: 0,
              class: "flex items-center space-x-2"
            }, [
              $options.hideRejectActions(item.status) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($data.rejectStatuses, (rejects, index2) => {
                return openBlock(), createBlock(_component_TestsRejectReasonDialog, {
                  item,
                  key: index2,
                  text: rejects.name,
                  icon: rejects.icon,
                  action: rejects.action,
                  onUpdate: $options.updateTests
                }, null, 8, ["item", "text", "icon", "action", "onUpdate"]);
              }), 128)) : createCommentVNode("", true)
            ], 512)), [
              [vShow, $data.moreActions]
            ]) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div id="tests-container"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tests/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-a74284e0.mjs.map
