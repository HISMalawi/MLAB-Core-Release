import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as __nuxt_component_1 } from './Loader-c735e4ba.mjs';
import { _ as __nuxt_component_0$2 } from './Dropdown-15d8abe8.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString, createCommentVNode, createTextVNode } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import moment from 'moment';
import { u as useAuthStore, r as render$1, e as endpoints, f as fetchRequest, h as calculateAge } from './fetch-1797e116.mjs';
import { r as render } from './XMarkIcon-170c776f.mjs';
import { a as render$1$1, r as render$5 } from './PencilSquareIcon-77446728.mjs';
import { r as render$6 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './bacteria-43241e03.mjs';
import { _ as __nuxt_component_1$1 } from './Multiselect-d93216db.mjs';
import { _ as _imports_0$1 } from './medicines-3b3d41b7.mjs';
import { e as errorMessage, d as dateFormat, i as interpretations } from './constants-353d90a1.mjs';
import { u as useHead } from './index-ca787103.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render$2 } from './CheckIcon-e4d11b9e.mjs';
import { r as render$3 } from './ArrowUpTrayIcon-a90cd76a.mjs';
import { r as render$4 } from './TrashIcon-b1416ff8.mjs';
import './nuxt-link-0e3a4fce.mjs';
import './HomeIcon-299b993b.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
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
import './PrinterIcon-02ac6ae4.mjs';

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
      viewIcon: render$1$1,
      show: false,
      editIcon: render$5,
      saveIcon: render$6,
      moment,
      cookie: useCookie("token"),
      rawOrganisms: new Array(),
      organisms: new Array(),
      organismsSelected: new Array(),
      modelValue: { name: "-- Select result --" }
    };
  },
  props: {
    data: {
      required: true,
      type: Array
    },
    result: {
      required: true,
      type: Object
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      if (this.result !== null) {
        this.modelValue = { name: this.result.value };
      }
    },
    /**
     * @method loadOrganisms load organisms to the multi-select
     * @returns promise @type void
     */
    async loadOrganisms() {
      this.handleClick();
      const request = {
        route: endpoints.organisms,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.rawOrganisms = data.value;
        data.value.map((organism) => {
          this.organisms.push(organism.name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    /**
     * @method handleClick controls dialog visibility
     * @returns void
     */
    handleClick() {
      this.show = !this.show;
    },
    /**
     * @method apply after selecting organisms on growth
     * @returns void
     */
    apply() {
      let organisms = new Array();
      this.rawOrganisms.map((raw) => {
        this.organismsSelected.map((organism) => {
          if (raw.name === organism) {
            organisms.push(raw);
          }
        });
      });
      this.$emit("apply", organisms);
      this.organismsSelected = new Array();
      this.handleClick();
    },
    /**
     * @method handleDrown show organisms dialog on growth click
     * @param value Object
     * @returns void
     */
    handleDropdown(value) {
      this.$emit("update", { value, data: this.data });
      if (typeof value === "object") {
        if (value.name === "Growth") {
          this.loadOrganisms();
        }
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreDropdown = __nuxt_component_0$2;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_multi_select = resolveComponent("multi-select");
  const _component_CoreActionButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $props.data.map((item) => {
      return {
        name: item.value
      };
    }),
    "model-value": $data.modelValue,
    onUpdatedValue: $options.handleDropdown
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Select organisms `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Select organisms ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="space-y-3 px-5 py-5 pb-20"${_scopeId4}><div class="w-full flex flex-col space-y-2"${_scopeId4}><label class="font-medium"${_scopeId4}>Organisms</label>`);
                          _push5(ssrRenderComponent(_component_multi_select, {
                            style: { "--ms-max-height": "none !important" },
                            modelValue: $data.organismsSelected,
                            "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                            options: $data.organisms,
                            mode: "tags",
                            required: "",
                            clear: "",
                            searchable: "",
                            class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div><div class="flex justify-end"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            click: $options.apply,
                            icon: $data.saveIcon,
                            text: "Apply",
                            color: "success"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div></div>`);
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
                                  createTextVNode(" Select organisms ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "space-y-3 px-5 py-5 pb-20" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                createVNode("label", { class: "font-medium" }, "Organisms"),
                                createVNode(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.organismsSelected,
                                  "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                                  options: $data.organisms,
                                  mode: "tags",
                                  required: "",
                                  clear: "",
                                  searchable: "",
                                  class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "flex justify-end" }, [
                                createVNode(_component_CoreActionButton, {
                                  click: $options.apply,
                                  icon: $data.saveIcon,
                                  text: "Apply",
                                  color: "success"
                                }, null, 8, ["click", "icon"])
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
                                createTextVNode(" Select organisms ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "space-y-3 px-5 py-5 pb-20" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                              createVNode("label", { class: "font-medium" }, "Organisms"),
                              createVNode(_component_multi_select, {
                                style: { "--ms-max-height": "none !important" },
                                modelValue: $data.organismsSelected,
                                "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                                options: $data.organisms,
                                mode: "tags",
                                required: "",
                                clear: "",
                                searchable: "",
                                class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            createVNode("div", { class: "flex justify-end" }, [
                              createVNode(_component_CoreActionButton, {
                                click: $options.apply,
                                icon: $data.saveIcon,
                                text: "Apply",
                                color: "success"
                              }, null, 8, ["click", "icon"])
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
                                  createTextVNode(" Select organisms ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "space-y-3 px-5 py-5 pb-20" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                createVNode("label", { class: "font-medium" }, "Organisms"),
                                createVNode(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.organismsSelected,
                                  "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                                  options: $data.organisms,
                                  mode: "tags",
                                  required: "",
                                  clear: "",
                                  searchable: "",
                                  class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "flex justify-end" }, [
                                createVNode(_component_CoreActionButton, {
                                  click: $options.apply,
                                  icon: $data.saveIcon,
                                  text: "Apply",
                                  color: "success"
                                }, null, 8, ["click", "icon"])
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
                                createTextVNode(" Select organisms ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "space-y-3 px-5 py-5 pb-20" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                              createVNode("label", { class: "font-medium" }, "Organisms"),
                              createVNode(_component_multi_select, {
                                style: { "--ms-max-height": "none !important" },
                                modelValue: $data.organismsSelected,
                                "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                                options: $data.organisms,
                                mode: "tags",
                                required: "",
                                clear: "",
                                searchable: "",
                                class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            createVNode("div", { class: "flex justify-end" }, [
                              createVNode(_component_CoreActionButton, {
                                click: $options.apply,
                                icon: $data.saveIcon,
                                text: "Apply",
                                color: "success"
                              }, null, 8, ["click", "icon"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/culture-sensitivity/organisms.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    TransitionChild,
    TransitionRoot,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render
  },
  data() {
    return {
      addIcon: render$1,
      saveIcon: render$6,
      open: false,
      loading: false,
      cookie: useCookie("token"),
      drugs: new Array(),
      selectedDrugs: new Array(),
      rawDrugs: new Array()
    };
  },
  props: {
    index: {
      required: true,
      type: Number
    }
  },
  methods: {
    async init() {
      this.loading = false;
      const request = {
        route: endpoints.drugs,
        method: "GET",
        token: `${this.cookie}`,
        body: { "name": this.name }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        this.rawDrugs = data.value;
        data.value.map((drug) => {
          this.drugs.push(drug.name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    updatedDrugs(value) {
      this.selectedDrugs = value;
    },
    pushDrugs(drugs) {
      let formattedDrugs = new Array();
      this.rawDrugs.map((drug) => {
        drugs.map((item) => {
          if (drug.name.toLowerCase() === item.toLowerCase()) {
            console.log(drug);
            formattedDrugs.push(drug);
          }
        });
      });
      this.$emit("update", { drugs: formattedDrugs, index: this.index });
      this.handleClick();
    },
    /**
     * @method handleClick
     * @param null
     * @returns void
     */
    handleClick() {
      this.open = !this.open;
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
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_CoreMultiselect = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.init,
    text: "Add drug",
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-8 h-8 mr-2"${_scopeId5}> Add drug `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Add drug ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div${_scopeId4}><div class="ma-5 px-4 py-4"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreMultiselect, {
                            onUpdate: $options.updatedDrugs,
                            "items-selected": $data.selectedDrugs,
                            label: "Select drug(s)",
                            mode: "tags",
                            items: $data.drugs
                          }, null, _parent5, _scopeId4));
                          _push5(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            click: () => {
                              $options.pushDrugs($data.selectedDrugs);
                            },
                            type: "submit",
                            color: "success",
                            icon: $data.saveIcon,
                            text: "Save chages"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div></div>`);
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
                                  createTextVNode(" Add drug ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "ma-5 px-4 py-4" }, [
                                createVNode(_component_CoreMultiselect, {
                                  onUpdate: $options.updatedDrugs,
                                  "items-selected": $data.selectedDrugs,
                                  label: "Select drug(s)",
                                  mode: "tags",
                                  items: $data.drugs
                                }, null, 8, ["onUpdate", "items-selected", "items"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreActionButton, {
                                  click: () => {
                                    $options.pushDrugs($data.selectedDrugs);
                                  },
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save chages"
                                }, null, 8, ["click", "icon"])
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
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Add drug ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "ma-5 px-4 py-4" }, [
                              createVNode(_component_CoreMultiselect, {
                                onUpdate: $options.updatedDrugs,
                                "items-selected": $data.selectedDrugs,
                                label: "Select drug(s)",
                                mode: "tags",
                                items: $data.drugs
                              }, null, 8, ["onUpdate", "items-selected", "items"])
                            ]),
                            createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                              createVNode(_component_CoreActionButton, {
                                click: () => {
                                  $options.pushDrugs($data.selectedDrugs);
                                },
                                type: "submit",
                                color: "success",
                                icon: $data.saveIcon,
                                text: "Save chages"
                              }, null, 8, ["click", "icon"])
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
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Add drug ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "ma-5 px-4 py-4" }, [
                                createVNode(_component_CoreMultiselect, {
                                  onUpdate: $options.updatedDrugs,
                                  "items-selected": $data.selectedDrugs,
                                  label: "Select drug(s)",
                                  mode: "tags",
                                  items: $data.drugs
                                }, null, 8, ["onUpdate", "items-selected", "items"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreActionButton, {
                                  click: () => {
                                    $options.pushDrugs($data.selectedDrugs);
                                  },
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save chages"
                                }, null, 8, ["click", "icon"])
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
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Add drug ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "ma-5 px-4 py-4" }, [
                              createVNode(_component_CoreMultiselect, {
                                onUpdate: $options.updatedDrugs,
                                "items-selected": $data.selectedDrugs,
                                label: "Select drug(s)",
                                mode: "tags",
                                items: $data.drugs
                              }, null, 8, ["onUpdate", "items-selected", "items"])
                            ]),
                            createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                              createVNode(_component_CoreActionButton, {
                                click: () => {
                                  $options.pushDrugs($data.selectedDrugs);
                                },
                                type: "submit",
                                color: "success",
                                icon: $data.saveIcon,
                                text: "Save chages"
                              }, null, 8, ["click", "icon"])
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
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/culture-sensitivity/drug.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Enter Culture & Sensitivity Test Results`
    });
  },
  data() {
    return {
      cookie: useCookie("token"),
      authStore: useAuthStore(),
      data: null,
      header: "Enter Culture & Sensitivity Results",
      loading: false,
      closeIcon: render,
      addIcon: render$1,
      moment,
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Tests",
          link: "/tests"
        }
      ],
      remarks: "",
      remark: "",
      saveIcon: render$2,
      updateIcon: render$3,
      trashIcon: render$4,
      selectedDiameter: { name: "-- select result --" },
      details: {
        client: {
          id: 0,
          first_name: "",
          middle_name: "",
          last_name: "",
          sex: "",
          date_of_birth: "",
          birth_date_estimated: false
        },
        order_status: "",
        status: "",
        requested_by: "",
        culture_observation: new Array(),
        status_trail: new Array(),
        suscept_test_result: new Array()
      },
      organisms: new Array(),
      drugsValues: {
        id: 0,
        name: "",
        drugs: new Array()
      },
      suspceptibilityResult: new Array(),
      updating: false,
      saving: false,
      deleting: false,
      results: {},
      testId: "",
      accessionNo: "",
      fetching: false
    };
  },
  created() {
    this.accessionNo = `${this.$route.query.accession_number}`;
    this.testId = `${this.$route.query.test_id}`;
    this.init();
  },
  methods: {
    async init() {
      this.fetching = true;
      const request = {
        route: `${endpoints.tests}/${this.testId}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.fetching = pending;
      if (data.value) {
        this.details = data.value;
        this.fetching = false;
        this.suspceptibilityResult = data.value.suscept_test_result.map((test) => ({
          id: test.organism_id,
          name: test.name,
          drugs: test.drugs.map((drug) => ({
            name: drug.name,
            drug_id: drug.drug_id,
            zone: { name: drug.zone === null ? "-- select result --" : drug.zone },
            interpretation: { name: drug.interpretation === "" || null ? "-- select result --" : drug.interpretation }
          }))
        }));
      }
      if (error.value) {
        this.fetching = false;
        console.error("error fetcing test details: ", error.value);
      }
    },
    async loadOrganisms(value) {
      value.forEach(async (element) => {
        const request = {
          route: `${endpoints.organisms}/${element.id}`,
          method: "GET",
          token: `${this.cookie}`
        };
        const { data, error } = await fetchRequest(request);
        if (data.value) {
          this.organisms.push(data.value);
          this.drugsValues.drugs = new Array();
          this.organisms.map((organism) => {
            organism.drugs.map((item) => {
              this.drugsValues.id = organism.id, this.drugsValues.name = organism.name;
              this.drugsValues.drugs.push({
                name: item.name,
                drug_id: item.id,
                zone: { name: "-- select result --" },
                interpretation: { name: "-- select result --" }
              });
            });
          });
          this.suspceptibilityResult.push(this.drugsValues);
        }
        if (error.value) {
          console.error(error.value);
        }
      });
    },
    diameters() {
      let diameters = new Array();
      for (let i = 0; i <= 200; i++) {
        diameters.push({ name: `${i}` });
      }
      return diameters;
    },
    async submitObservation() {
      this.loading = true;
      const request = {
        route: endpoints.cultureObservations,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          "test_id": this.testId,
          "description": this.remarks
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.remarks = "";
        this.loading = false;
        this.init();
        this.suspceptibilityResult = new Array();
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
      }
    },
    /**
     * @method updateResults load results to backend (new and update data)
     * @returns promise @type void
     * @param null
     */
    async updateResults(details) {
      this.updating = true;
      let suspceptibilityResult = this.suspceptibilityResult.filter((organism) => details.name.toLowerCase() === organism.name.toLowerCase());
      suspceptibilityResult.map(async (organism) => {
        const filteredDrugs = organism.drugs.map((drug) => ({
          drug_id: drug.drug_id,
          zone: parseInt(drug.zone.name === "-- select result --" ? "" : drug.zone.name),
          interpretation: drug.interpretation.name === "-- select result --" ? "" : drug.interpretation.name
        }));
        const request = {
          route: endpoints.drugSusceptibility,
          method: "POST",
          token: `${this.cookie}`,
          body: {
            "test_id": this.details.id,
            "organism_id": organism.id,
            "drugs": filteredDrugs,
            "status": "completed"
          }
        };
        const { data, error, pending } = await fetchRequest(request);
        this.updating = pending;
        if (data.value) {
          this.updating = false;
          useNuxtApp().$toast.success("Suspceptibility test results updated successfully!");
          this.init();
        }
        if (error.value) {
          console.error(error.value);
          this.updating = false;
          useNuxtApp().$toast.error(errorMessage);
        }
      });
    },
    async deleteSusceptivityResult(organismId) {
      this.deleting = true;
      const request = {
        route: `${endpoints.drugSusceptibility}/delete`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {
          "test_id": this.details.id,
          "organism_id": organismId
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.deleting = pending;
      if (data.value) {
        this.deleting = false;
        this.init();
        useNuxtApp().$toast.success("Suspceptibility test results deleted successfully!");
      }
      if (error.value) {
        console.error(error.value);
        this.deleting = false;
        useNuxtApp().$toast.success("An error has occurred, please try again!");
      }
    },
    invalidation() {
      useNuxtApp().$toast.warning("Could not save null suspceptibility results, please enter values!");
      this.updating = false;
    },
    updateResult(value) {
      let t = value.data.filter((values) => value.value.name.toLowerCase() == values.value.toLowerCase());
      this.results = t[0];
    },
    async saveResults() {
      var _a, _b;
      this.saving = true;
      const request = {
        route: `${endpoints.updateResults}`,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          test_id: this.details.id,
          test_indicators: new Array(
            {
              indicator: (_a = this.results) == null ? void 0 : _a.test_indicator_id,
              value: (_b = this.results) == null ? void 0 : _b.value
            }
          )
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.saving = pending;
      if (data.value) {
        this.saving = false;
        this.init();
        useNuxtApp().$toast.success("Test results updated successfully");
        this.$router.push("/tests");
      }
      if (error.value) {
        this.saving = false;
        console.error(error.value);
      }
    },
    getUpdatedDrugs(value) {
      this.suspceptibilityResult.map((item, index) => {
        if (value.index === index) {
          value.drugs.map((drug) => {
            item.drugs.push({
              name: drug.name,
              drug_id: drug.id,
              zone: { name: "-- select result --" },
              interpretation: { name: "-- select result --" }
            });
          });
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_CoreLoader = __nuxt_component_1;
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CultureSensitivityOrganisms = __nuxt_component_2;
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_CultureSensitivityDrug = __nuxt_component_4;
  const _component_CoreDropdown = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3></div>`);
  if ($data.fetching) {
    _push(`<div class="w-full justify-center items-center py-20 mx-auto flex flex-col space-y-2">`);
    _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
    _push(`<p class="ont-medium text-sky-500">Loading, please wait...</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.fetching) {
    _push(`<div><div class="grid grid-cols-3 gap-4 py-5"><div class="rounded border"><div class="px-4 py-2 bg-gray-50 border-b rounded-t"><h3 class="font-semibold text-gray-700 uppercase">Patient</h3></div><div class="w-full py-2"><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted"><h3 class="font-medium">Patient Number</h3><p>${ssrInterpolate($data.details.id)}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"><h3 class="font-medium">Name</h3><p>${ssrInterpolate(`${$data.details.client.first_name} ${$data.details.client.middle_name} ${$data.details.client.last_name}`)}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted"><h3 class="font-medium">Sex</h3><p>${ssrInterpolate($data.details.client.sex)}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"><h3 class="font-medium">Age</h3><p>${ssrInterpolate(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))($data.details.client.date_of_birth))}</p></div></div></div><div class="rounded border"><div class="px-4 py-2 bg-gray-50 border-b rounded-t"><h3 class="font-semibold text-gray-700 uppercase">Specimen</h3></div><div class="w-full py-2"><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted"><h3 class="font-medium">Specimen Type</h3><p>${ssrInterpolate($data.details.specimen_type)}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"><h3 class="font-medium">Tracking Number</h3><p>${ssrInterpolate($data.details.tracking_number)}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted"><h3 class="font-medium">Accession Number</h3><p>${ssrInterpolate($data.details.accession_number)}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"><h3 class="font-medium">Status</h3><p>${ssrInterpolate($data.details.order_status.split("-").join(" ").charAt(0).toUpperCase() + $data.details.order_status.split("-").join(" ").slice(1))}</p></div></div></div><div class="rounded border max-h-72 overflow-y-auto"><div class="px-4 py-2 bg-gray-50 border-b rounded-t"><h3 class="font-semibold text-gray-700 uppercase">Test</h3></div><div class="w-full py-2"><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted"><h3 class="font-medium">Name</h3><p>${ssrInterpolate($data.details.test_type_name)}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted"><h3 class="font-medium">Date Registered</h3><p>${ssrInterpolate($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"><h3 class="font-medium">Receipt Date</h3><p>${ssrInterpolate($data.moment($data.details.updated_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted"><h3 class="font-medium">Test Status</h3><p>${ssrInterpolate($data.details.status.charAt(0).toUpperCase() + $data.details.status.slice(1))}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"><h3 class="font-medium">Ward/Location</h3><p>${ssrInterpolate($data.details.requesting_ward)}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted"><h3 class="font-medium">Physician</h3><p>${ssrInterpolate($data.details.requested_by.charAt(0).toUpperCase() + $data.details.requested_by.slice(1))}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"><h3 class="font-medium">Request Origin</h3><p>${ssrInterpolate($data.details.request_origin)}</p></div><div class="w-full flex justify-between px-5 py-2.5 border-b border-dotted"><h3 class="font-medium">Registered By</h3><p>${ssrInterpolate($data.details.registered_by)}</p></div></div></div></div><div class="grid grid-cols-5 gap-4"><div class="col-span-2 rounded flex flex-col space-y-2.5 border"><div class="bg-gray-50 px-4 py-2 rounded-t border-b"><h3 class="font-semibold text-gray-700 uppercase">Observations</h3></div>`);
    _push(ssrRenderComponent(_component_FormKit, {
      type: "form",
      "submit-label": "Update",
      onSubmit: $options.saveResults,
      actions: false
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($data.details.indicators, (detail, index) => {
            _push2(`<div class="px-5 py-2 space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>${ssrInterpolate(detail.name)}</label>`);
            _push2(ssrRenderComponent(_component_CultureSensitivityOrganisms, {
              result: detail.result,
              onUpdate: $options.updateResult,
              onApply: $options.loadOrganisms,
              data: detail.indicator_ranges
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "textarea",
              label: "Remarks",
              modelValue: $data.remark,
              "onUpdate:modelValue": ($event) => $data.remark = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CoreActionButton, {
              loading: $data.saving,
              click: () => {
              },
              type: "submit",
              icon: $data.saveIcon,
              text: "Save changes",
              color: "success"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($data.details.indicators, (detail, index) => {
              return openBlock(), createBlock("div", {
                class: "px-5 py-2 space-y-2",
                key: index
              }, [
                createVNode("label", { class: "font-medium" }, toDisplayString(detail.name), 1),
                createVNode(_component_CultureSensitivityOrganisms, {
                  result: detail.result,
                  onUpdate: $options.updateResult,
                  onApply: $options.loadOrganisms,
                  data: detail.indicator_ranges
                }, null, 8, ["result", "onUpdate", "onApply", "data"]),
                createVNode(_component_FormKit, {
                  type: "textarea",
                  label: "Remarks",
                  modelValue: $data.remark,
                  "onUpdate:modelValue": ($event) => $data.remark = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_CoreActionButton, {
                  loading: $data.saving,
                  click: () => {
                  },
                  type: "submit",
                  icon: $data.saveIcon,
                  text: "Save changes",
                  color: "success"
                }, null, 8, ["loading", "icon"])
              ]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="col-span-3 rounded flex flex-col space-y-2.5 border"><div class="bg-gray-50 px-4 py-2 rounded-t border-b"><h3 class="font-semibold text-gray-700 uppercase"> Culture worksheet </h3></div><div class="px-5 py-2 space-y-2"><div><h3 class="mb-2 mt-2 font-medium">Observations &amp; Work-Up</h3>`);
    _push(ssrRenderComponent(_component_FormKit, {
      type: "form",
      "submit-label": "Update",
      onSubmit: $options.submitObservation,
      actions: false
    }, {
      default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<table class="w-full text-left border border-dotted"${_scopeId}><thead class="bg-gray-50 border-b border-dotted"${_scopeId}><tr${_scopeId}><th class="px-2 py-3 font-semibold text-left border-r border-dotted"${_scopeId}> Date </th><th class="px-2 py-3 font-semibold text-left border-r border-dotted"${_scopeId}> Lab Tech </th><th class="px-2 py-3 font-semibold text-left border-r border-dotted"${_scopeId}> Remarks </th><th class="px-2 py-3 font-semibold text-left"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
          ssrRenderList($data.details.culture_observation, (observations, index) => {
            _push2(`<tr class="border-b border-dotted"${_scopeId}><td class="px-2 py-3 border-r border-dotted"${_scopeId}>${ssrInterpolate($data.moment(observations.observation_date).fromNow())}</td><td class="px-2 py-3 border-r border-dotted"${_scopeId}>${ssrInterpolate(`${observations.user.first_name} ${observations.user.middle_name}
                                                ${observations.user.last_name}`)}</td><td class="px-2 py-3 border-r border-dotted"${_scopeId}>`);
            if (observations.description === "") {
              _push2(ssrRenderComponent(_component_FormKit, {
                type: "textarea",
                label: "",
                name: "Remarks",
                value: observations.description,
                validation: "required"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (observations.description != "") {
              _push2(`<p${_scopeId}>${ssrInterpolate(observations.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</td><td class="px-2 py-3"${_scopeId}>`);
            if (observations.description === "") {
              _push2(ssrRenderComponent(_component_CoreActionButton, {
                type: "submit",
                text: "Save",
                color: "success",
                icon: $data.saveIcon,
                loading: $data.loading,
                click: () => {
                }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</td></tr>`);
          });
          _push2(`<!--]--><tr class="border-b border-dotted"${_scopeId}><td class="px-2 py-3 border-r border-dotted"${_scopeId}>${ssrInterpolate($data.moment().fromNow())}</td><td class="px-2 py-3 border-r border-dotted"${_scopeId}>${ssrInterpolate(`${$data.authStore.user.first_name} ${$data.authStore.user.middle_name} ${$data.authStore.user.last_name}`)}</td><td class="px-2 py-3 border-r border-dotted"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_FormKit, {
            type: "textarea",
            label: "",
            name: "Remarks",
            modelValue: $data.remarks,
            "onUpdate:modelValue": ($event) => $data.remarks = $event,
            validation: "required"
          }, null, _parent2, _scopeId));
          _push2(`</td><td class="px-2 py-3"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            type: "submit",
            text: "Save",
            color: "success",
            icon: $data.saveIcon,
            loading: $data.loading,
            click: () => {
            }
          }, null, _parent2, _scopeId));
          _push2(`</td></tr></tbody></table>`);
        } else {
          return [
            createVNode("table", { class: "w-full text-left border border-dotted" }, [
              createVNode("thead", { class: "bg-gray-50 border-b border-dotted" }, [
                createVNode("tr", null, [
                  createVNode("th", { class: "px-2 py-3 font-semibold text-left border-r border-dotted" }, " Date "),
                  createVNode("th", { class: "px-2 py-3 font-semibold text-left border-r border-dotted" }, " Lab Tech "),
                  createVNode("th", { class: "px-2 py-3 font-semibold text-left border-r border-dotted" }, " Remarks "),
                  createVNode("th", { class: "px-2 py-3 font-semibold text-left" }, "Action")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.details.culture_observation, (observations, index) => {
                  return openBlock(), createBlock("tr", {
                    class: "border-b border-dotted",
                    key: index
                  }, [
                    createVNode("td", { class: "px-2 py-3 border-r border-dotted" }, toDisplayString($data.moment(observations.observation_date).fromNow()), 1),
                    createVNode("td", { class: "px-2 py-3 border-r border-dotted" }, toDisplayString(`${observations.user.first_name} ${observations.user.middle_name}
                                                ${observations.user.last_name}`), 1),
                    createVNode("td", { class: "px-2 py-3 border-r border-dotted" }, [
                      observations.description === "" ? (openBlock(), createBlock(_component_FormKit, {
                        key: 0,
                        type: "textarea",
                        label: "",
                        name: "Remarks",
                        value: observations.description,
                        validation: "required"
                      }, null, 8, ["value"])) : createCommentVNode("", true),
                      observations.description != "" ? (openBlock(), createBlock("p", { key: 1 }, toDisplayString(observations.description), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("td", { class: "px-2 py-3" }, [
                      observations.description === "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                        key: 0,
                        type: "submit",
                        text: "Save",
                        color: "success",
                        icon: $data.saveIcon,
                        loading: $data.loading,
                        click: () => {
                        }
                      }, null, 8, ["icon", "loading"])) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128)),
                createVNode("tr", { class: "border-b border-dotted" }, [
                  createVNode("td", { class: "px-2 py-3 border-r border-dotted" }, toDisplayString($data.moment().fromNow()), 1),
                  createVNode("td", { class: "px-2 py-3 border-r border-dotted" }, toDisplayString(`${$data.authStore.user.first_name} ${$data.authStore.user.middle_name} ${$data.authStore.user.last_name}`), 1),
                  createVNode("td", { class: "px-2 py-3 border-r border-dotted" }, [
                    createVNode(_component_FormKit, {
                      type: "textarea",
                      label: "",
                      name: "Remarks",
                      modelValue: $data.remarks,
                      "onUpdate:modelValue": ($event) => $data.remarks = $event,
                      validation: "required"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("td", { class: "px-2 py-3" }, [
                    createVNode(_component_CoreActionButton, {
                      type: "submit",
                      text: "Save",
                      color: "success",
                      icon: $data.saveIcon,
                      loading: $data.loading,
                      click: () => {
                      }
                    }, null, 8, ["icon", "loading"])
                  ])
                ])
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div></div><div class="rounded border mt-5"><div class="bg-gray-50 px-4 py-2 rounded-t border-b"><h3 class="font-semibold text-gray-700 uppercase"> Susceptibility Test Results </h3></div><div class="px-5 py-5"><!--[-->`);
    ssrRenderList($data.suspceptibilityResult, (result, index) => {
      _push(`<div class="mt-2"><div class="flex items-center justify-between mb-3"><h3 class="font-semibold text-lg">${ssrInterpolate(result.name)}</h3><div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(_component_CultureSensitivityDrug, {
        index,
        onUpdate: $options.getUpdatedDrugs
      }, null, _parent));
      _push(ssrRenderComponent(_component_CoreActionButton, {
        text: "Save",
        color: "success",
        icon: $data.updateIcon,
        loading: $data.updating,
        click: () => $options.updateResults(result)
      }, null, _parent));
      _push(ssrRenderComponent(_component_CoreActionButton, {
        loading: $data.deleting,
        icon: $data.trashIcon,
        color: "error",
        text: "Delete",
        click: () => {
          $options.deleteSusceptivityResult(result.id);
        }
      }, null, _parent));
      _push(`</div></div><table class="w-full text-left border border-dotted"><thead class="bg-gray-50 border-b border-dotted"><tr><th class="px-2 py-3 font-semibold text-left border-r border-dotted"> Drug </th><th class="px-2 py-3 font-semibold text-left border-r border-dotted"> Zone Diameter(mm) </th><th class="px-2 py-3 font-semibold text-left border-r border-dotted"> Interpretation (I,S,R) </th></tr></thead><tbody><!--[-->`);
      ssrRenderList(result.drugs, (drug, index2) => {
        _push(`<tr class="border-b border-dotted"><td class="px-2 py-3 border-r border-dotted">${ssrInterpolate(drug.name)}</td><td class="px-2 py-3">`);
        _push(ssrRenderComponent(_component_CoreDropdown, {
          items: $options.diameters(),
          modelValue: drug.zone,
          "onUpdate:modelValue": ($event) => drug.zone = $event
        }, null, _parent));
        _push(`</td><td class="px-2 py-3">`);
        _push(ssrRenderComponent(_component_CoreDropdown, {
          items: "interpretations" in _ctx ? _ctx.interpretations : unref(interpretations),
          modelValue: drug.interpretation,
          "onUpdate:modelValue": ($event) => drug.interpretation = $event
        }, null, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    });
    _push(`<!--]--></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tests/result/culture-sensitivity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cultureSensitivity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { cultureSensitivity as default };
//# sourceMappingURL=culture-sensitivity-09e7c6c7.mjs.map
