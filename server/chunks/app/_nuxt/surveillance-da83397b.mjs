import { _ as __nuxt_component_0$1 } from './Breadcrumb-7cc71911.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './Dropdown-15d8abe8.mjs';
import { _ as __nuxt_component_1$1 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, mergeProps } from 'vue';
import { e as errorMessage } from './constants-353d90a1.mjs';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/vue';
import { g as getParameterizedUrl, e as endpoints, f as fetchRequest, r as render$3 } from './fetch-1797e116.mjs';
import { r as render$2 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$1 } from './XMarkIcon-170c776f.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_1$2 } from './index-1c5bcaba.mjs';
import { _ as __nuxt_component_1$3 } from './SearchBar-0bf20ba4.mjs';
import { _ as __nuxt_component_2 } from './Datatable-0c4b7b4f.mjs';
import { r as render } from './PencilSquareIcon-77446728.mjs';
import { u as useHead } from './index-ca787103.mjs';
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
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'moment';
import './PrinterIcon-02ac6ae4.mjs';
import './virus-6fbc84ef.mjs';
import './Loader-c735e4ba.mjs';

const _sfc_main$2 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
  },
  data() {
    return {
      open: false,
      loading: false,
      saving: false,
      cookie: useCookie("token"),
      disabled: true,
      diseases: new Array(),
      testTypes: new Array(),
      selectedTestType: { name: "" },
      items: new Array(),
      plusIcon: render$3,
      saveIcon: render$2,
      addIcon: render$3,
      removeIcon: render$1,
      surveillanceItems: new Array()
    };
  },
  methods: {
    adjustVisibility() {
      this.open = !this.open;
    },
    addItem() {
      this.surveillanceItems.push({
        testType: this.testTypes[0],
        diseases: this.diseases[0]
      });
    },
    removeItem(index) {
      this.surveillanceItems.splice(index, 1);
    },
    async loadDiseases() {
      this.loading = true;
      const request = {
        route: endpoints.disease.index,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        this.diseases = data.value;
      }
      this.loading = false;
      if (error.value) {
        this.loading = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
      return { data, error, pending };
    },
    async loadTestTypes() {
      this.adjustVisibility();
      const diseases = await this.loadDiseases();
      this.loading = true;
      const request = {
        route: endpoints.testTypes,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        console.log(data.value);
        this.testTypes = data.value.test_types;
        this.surveillanceItems.push({
          testType: this.testTypes[0],
          diseases: diseases.data.value[0]
        });
      }
      this.loading = false;
      if (error.value) {
        this.loading = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    },
    async handleSubmitForm() {
      this.saving = true;
      const surveillance2 = this.surveillanceItems.map((item) => ({
        test_types_id: item.testType.id,
        diseases_id: item.diseases.id
      }));
      const request = {
        route: endpoints.surveillance.create,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          surveillance: {
            data: surveillance2
          }
        }
      };
      const { data, pending, error } = await fetchRequest(request);
      this.saving = pending;
      if (data.value) {
        this.closeForm();
        useNuxtApp().$toast.success(`Surviellance add successfully!`);
        this.$emit("update", true);
        this.saving = false;
      }
      if (error.value) {
        useNuxtApp().$toast.error(`${errorMessage}`);
        this.saving = false;
      }
    },
    closeForm() {
      this.open = false;
      this.items = [
        {
          test_types_id: "",
          diseases_id: ""
        }
      ];
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
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreDropdown = __nuxt_component_0$2;
  const _component_CoreOutlinedButton = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Add Surveillance",
    color: "primary",
    icon: $data.plusIcon,
    click: $options.loadTestTypes
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
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-xl text-black flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Surveillance Setup `);
                              } else {
                                return [
                                  createTextVNode(" Surveillance Setup ")
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
                            "submit-label": "Save",
                            onSubmit: $options.handleSubmitForm,
                            actions: false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><!--[-->`);
                                ssrRenderList($data.surveillanceItems, (items, index) => {
                                  _push6(`<div class="grid grid-cols-5 gap-2"${_scopeId5}><div class="w-full col-span-4 flex items-center space-x-3"${_scopeId5}><div class="w-1/2"${_scopeId5}><label for=""${_scopeId5}>Test type</label>`);
                                  _push6(ssrRenderComponent(_component_CoreDropdown, {
                                    items: $data.testTypes,
                                    "model-value": items.testType
                                  }, null, _parent6, _scopeId5));
                                  _push6(`</div><div class="w-1/2"${_scopeId5}><label for=""${_scopeId5}>Disease</label>`);
                                  _push6(ssrRenderComponent(_component_CoreDropdown, {
                                    items: $data.diseases,
                                    "model-value": items.diseases
                                  }, null, _parent6, _scopeId5));
                                  _push6(`</div><div class="flex items-center space-x-3 pt-7"${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_CoreActionButton, {
                                    icon: $data.addIcon,
                                    text: "Add",
                                    color: "primary",
                                    click: () => {
                                      $options.addItem();
                                    },
                                    type: "button"
                                  }, null, _parent6, _scopeId5));
                                  if ($data.surveillanceItems.length > 1) {
                                    _push6(ssrRenderComponent(_component_CoreActionButton, {
                                      icon: $data.removeIcon,
                                      text: "Remove",
                                      color: "error",
                                      click: () => {
                                        $options.removeItem(index);
                                      }
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    _push6(`<!---->`);
                                  }
                                  _push6(`</div></div></div>`);
                                });
                                _push6(`<!--]--></div><div class="mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  text: "Close",
                                  click: $options.closeForm
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  click: () => {
                                  },
                                  text: "Save",
                                  loading: $data.saving
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList($data.surveillanceItems, (items, index) => {
                                      return openBlock(), createBlock("div", {
                                        class: "grid grid-cols-5 gap-2",
                                        key: index
                                      }, [
                                        createVNode("div", { class: "w-full col-span-4 flex items-center space-x-3" }, [
                                          createVNode("div", { class: "w-1/2" }, [
                                            createVNode("label", { for: "" }, "Test type"),
                                            createVNode(_component_CoreDropdown, {
                                              items: $data.testTypes,
                                              "model-value": items.testType
                                            }, null, 8, ["items", "model-value"])
                                          ]),
                                          createVNode("div", { class: "w-1/2" }, [
                                            createVNode("label", { for: "" }, "Disease"),
                                            createVNode(_component_CoreDropdown, {
                                              items: $data.diseases,
                                              "model-value": items.diseases
                                            }, null, 8, ["items", "model-value"])
                                          ]),
                                          createVNode("div", { class: "flex items-center space-x-3 pt-7" }, [
                                            createVNode(_component_CoreActionButton, {
                                              icon: $data.addIcon,
                                              text: "Add",
                                              color: "primary",
                                              click: () => {
                                                $options.addItem();
                                              },
                                              type: "button"
                                            }, null, 8, ["icon", "click"]),
                                            $data.surveillanceItems.length > 1 ? (openBlock(), createBlock(_component_CoreActionButton, {
                                              key: 0,
                                              icon: $data.removeIcon,
                                              text: "Remove",
                                              color: "error",
                                              click: () => {
                                                $options.removeItem(index);
                                              }
                                            }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
                                          ])
                                        ])
                                      ]);
                                    }), 128))
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Close",
                                      click: $options.closeForm
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "success",
                                      icon: $data.saveIcon,
                                      click: () => {
                                      },
                                      text: "Save",
                                      loading: $data.saving
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
                                  createTextVNode(" Surveillance Setup ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.adjustVisibility }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              "submit-label": "Save",
                              onSubmit: $options.handleSubmitForm,
                              actions: false
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.surveillanceItems, (items, index) => {
                                    return openBlock(), createBlock("div", {
                                      class: "grid grid-cols-5 gap-2",
                                      key: index
                                    }, [
                                      createVNode("div", { class: "w-full col-span-4 flex items-center space-x-3" }, [
                                        createVNode("div", { class: "w-1/2" }, [
                                          createVNode("label", { for: "" }, "Test type"),
                                          createVNode(_component_CoreDropdown, {
                                            items: $data.testTypes,
                                            "model-value": items.testType
                                          }, null, 8, ["items", "model-value"])
                                        ]),
                                        createVNode("div", { class: "w-1/2" }, [
                                          createVNode("label", { for: "" }, "Disease"),
                                          createVNode(_component_CoreDropdown, {
                                            items: $data.diseases,
                                            "model-value": items.diseases
                                          }, null, 8, ["items", "model-value"])
                                        ]),
                                        createVNode("div", { class: "flex items-center space-x-3 pt-7" }, [
                                          createVNode(_component_CoreActionButton, {
                                            icon: $data.addIcon,
                                            text: "Add",
                                            color: "primary",
                                            click: () => {
                                              $options.addItem();
                                            },
                                            type: "button"
                                          }, null, 8, ["icon", "click"]),
                                          $data.surveillanceItems.length > 1 ? (openBlock(), createBlock(_component_CoreActionButton, {
                                            key: 0,
                                            icon: $data.removeIcon,
                                            text: "Remove",
                                            color: "error",
                                            click: () => {
                                              $options.removeItem(index);
                                            }
                                          }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    text: "Close",
                                    click: $options.closeForm
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    type: "submit",
                                    color: "success",
                                    icon: $data.saveIcon,
                                    click: () => {
                                    },
                                    text: "Save",
                                    loading: $data.saving
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Surveillance Setup ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.adjustVisibility }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            "submit-label": "Save",
                            onSubmit: $options.handleSubmitForm,
                            actions: false
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList($data.surveillanceItems, (items, index) => {
                                  return openBlock(), createBlock("div", {
                                    class: "grid grid-cols-5 gap-2",
                                    key: index
                                  }, [
                                    createVNode("div", { class: "w-full col-span-4 flex items-center space-x-3" }, [
                                      createVNode("div", { class: "w-1/2" }, [
                                        createVNode("label", { for: "" }, "Test type"),
                                        createVNode(_component_CoreDropdown, {
                                          items: $data.testTypes,
                                          "model-value": items.testType
                                        }, null, 8, ["items", "model-value"])
                                      ]),
                                      createVNode("div", { class: "w-1/2" }, [
                                        createVNode("label", { for: "" }, "Disease"),
                                        createVNode(_component_CoreDropdown, {
                                          items: $data.diseases,
                                          "model-value": items.diseases
                                        }, null, 8, ["items", "model-value"])
                                      ]),
                                      createVNode("div", { class: "flex items-center space-x-3 pt-7" }, [
                                        createVNode(_component_CoreActionButton, {
                                          icon: $data.addIcon,
                                          text: "Add",
                                          color: "primary",
                                          click: () => {
                                            $options.addItem();
                                          },
                                          type: "button"
                                        }, null, 8, ["icon", "click"]),
                                        $data.surveillanceItems.length > 1 ? (openBlock(), createBlock(_component_CoreActionButton, {
                                          key: 0,
                                          icon: $data.removeIcon,
                                          text: "Remove",
                                          color: "error",
                                          click: () => {
                                            $options.removeItem(index);
                                          }
                                        }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  text: "Close",
                                  click: $options.closeForm
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  click: () => {
                                  },
                                  text: "Save",
                                  loading: $data.saving
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
                        createVNode(_component_DialogPanel, { class: "w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Surveillance Setup ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.adjustVisibility }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              "submit-label": "Save",
                              onSubmit: $options.handleSubmitForm,
                              actions: false
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.surveillanceItems, (items, index) => {
                                    return openBlock(), createBlock("div", {
                                      class: "grid grid-cols-5 gap-2",
                                      key: index
                                    }, [
                                      createVNode("div", { class: "w-full col-span-4 flex items-center space-x-3" }, [
                                        createVNode("div", { class: "w-1/2" }, [
                                          createVNode("label", { for: "" }, "Test type"),
                                          createVNode(_component_CoreDropdown, {
                                            items: $data.testTypes,
                                            "model-value": items.testType
                                          }, null, 8, ["items", "model-value"])
                                        ]),
                                        createVNode("div", { class: "w-1/2" }, [
                                          createVNode("label", { for: "" }, "Disease"),
                                          createVNode(_component_CoreDropdown, {
                                            items: $data.diseases,
                                            "model-value": items.diseases
                                          }, null, 8, ["items", "model-value"])
                                        ]),
                                        createVNode("div", { class: "flex items-center space-x-3 pt-7" }, [
                                          createVNode(_component_CoreActionButton, {
                                            icon: $data.addIcon,
                                            text: "Add",
                                            color: "primary",
                                            click: () => {
                                              $options.addItem();
                                            },
                                            type: "button"
                                          }, null, 8, ["icon", "click"]),
                                          $data.surveillanceItems.length > 1 ? (openBlock(), createBlock(_component_CoreActionButton, {
                                            key: 0,
                                            icon: $data.removeIcon,
                                            text: "Remove",
                                            color: "error",
                                            click: () => {
                                              $options.removeItem(index);
                                            }
                                          }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    text: "Close",
                                    click: $options.closeForm
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    type: "submit",
                                    color: "success",
                                    icon: $data.saveIcon,
                                    click: () => {
                                    },
                                    text: "Save",
                                    loading: $data.saving
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Surveillance Setup ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.adjustVisibility }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            "submit-label": "Save",
                            onSubmit: $options.handleSubmitForm,
                            actions: false
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList($data.surveillanceItems, (items, index) => {
                                  return openBlock(), createBlock("div", {
                                    class: "grid grid-cols-5 gap-2",
                                    key: index
                                  }, [
                                    createVNode("div", { class: "w-full col-span-4 flex items-center space-x-3" }, [
                                      createVNode("div", { class: "w-1/2" }, [
                                        createVNode("label", { for: "" }, "Test type"),
                                        createVNode(_component_CoreDropdown, {
                                          items: $data.testTypes,
                                          "model-value": items.testType
                                        }, null, 8, ["items", "model-value"])
                                      ]),
                                      createVNode("div", { class: "w-1/2" }, [
                                        createVNode("label", { for: "" }, "Disease"),
                                        createVNode(_component_CoreDropdown, {
                                          items: $data.diseases,
                                          "model-value": items.diseases
                                        }, null, 8, ["items", "model-value"])
                                      ]),
                                      createVNode("div", { class: "flex items-center space-x-3 pt-7" }, [
                                        createVNode(_component_CoreActionButton, {
                                          icon: $data.addIcon,
                                          text: "Add",
                                          color: "primary",
                                          click: () => {
                                            $options.addItem();
                                          },
                                          type: "button"
                                        }, null, 8, ["icon", "click"]),
                                        $data.surveillanceItems.length > 1 ? (openBlock(), createBlock(_component_CoreActionButton, {
                                          key: 0,
                                          icon: $data.removeIcon,
                                          text: "Remove",
                                          color: "error",
                                          click: () => {
                                            $options.removeItem(index);
                                          }
                                        }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  text: "Close",
                                  click: $options.closeForm
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  type: "submit",
                                  color: "success",
                                  icon: $data.saveIcon,
                                  click: () => {
                                  },
                                  text: "Save",
                                  loading: $data.saving
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/surveillance/add-dialog/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  emits: ["action-completed"],
  setup(__props, { emit: __emit }) {
    const open = ref(false);
    const loading = ref(false);
    const cookie = useCookie("token");
    ref(true);
    const diseases = ref([]);
    const testTypes = ref([]);
    const selectedItem = ref({
      test_type_id: -1,
      disease_id: -1
    });
    const items = ref([
      {
        test_types_id: "",
        diseases_id: ""
      }
    ]);
    const props = __props;
    const emit = __emit;
    const adjustVisibility = () => {
      loadDiseases();
      loadTestTypes();
      open.value = !open.value;
    };
    const loadDiseases = async () => {
      loading.value = true;
      const request = {
        route: endpoints.disease.index,
        method: "GET",
        token: `${cookie.value}`
      };
      const v = await fetchRequest(request);
      if (v.data.value) {
        diseases.value = [];
        diseases.value.push({ label: "- Select from the list", value: "" });
        v.data.value.map(
          (disease, index) => diseases.value.push({
            label: disease.name,
            value: disease.id
          })
        );
      }
      loading.value = false;
      if (v.error.value) {
        loading.value = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    };
    const loadTestTypes = async () => {
      loading.value = true;
      const request = {
        route: endpoints.testTypes,
        method: "GET",
        token: `${cookie.value}`
      };
      const v = await fetchRequest(request);
      if (v.data.value) {
        testTypes.value.push({ label: "- Select from the list", value: "" });
        v.data.value.test_types.map(
          (test, index) => testTypes.value.push({
            label: test.name,
            value: test.id
          })
        );
      }
      loading.value = false;
      if (v.error.value) {
        loading.value = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    };
    const loadingInstrument = async () => {
      loading.value = true;
      const request = {
        route: `${endpoints.surveillance.edit}/${props.id}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const v = await fetchRequest(request);
      if (v.data.value) {
        selectedItem.value.test_type_id = v.data.value.test_types_id;
        selectedItem.value.disease_id = v.data.value.diseases_id;
        adjustVisibility();
      }
      loading.value = false;
      if (v.error.value) {
        loading.value = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    };
    const handleSubmitForm = async () => {
      loading.value = true;
      const request = {
        route: endpoints.surveillance.update,
        method: "PATCH",
        token: cookie.value,
        body: {
          surveillance: {
            data: [
              {
                diseases_id: selectedItem.value.disease_id,
                test_types_id: selectedItem.value.test_type_id
              }
            ]
          }
        }
      };
      const { data, pending, error } = await fetchRequest(request);
      loading.value = pending;
      if (data.value) {
        closeForm();
        useNuxtApp().$toast.success(`Surveillance add successfully!`);
        emit("action-completed", []);
      }
      if (error.value) {
        useNuxtApp().$toast.error(`${errorMessage}`);
        loading.value = false;
      }
    };
    const closeForm = () => {
      open.value = loading.value = false;
      items.value = [
        {
          test_types_id: selectedItem.value.test_type_id,
          diseases_id: selectedItem.value.disease_id
        }
      ];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreActionButton = __nuxt_component_0;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_CoreOutlinedButton = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        text: "Edit",
        color: "primary",
        icon: unref(render),
        click: loadingInstrument
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: open.value,
        as: "template"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              onClose: closeForm,
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
                                    _push6(`${ssrInterpolate("Edit Surveillance Details")}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString("Edit Surveillance Details"))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<button${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(render$1), { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                              _push5(`</button></div>`);
                              _push5(ssrRenderComponent(_component_FormKit, {
                                type: "form",
                                "submit-label": "Save",
                                onSubmit: handleSubmitForm,
                                actions: false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><div class="w-full grid grid-cols-1 gap-1"${_scopeId5}><!--[-->`);
                                    ssrRenderList(items.value, (item, index) => {
                                      _push6(`<div class="relative shadow-none border-2 p-3 mb-3 border-gray-100 text-left box-border space-x-4 grid grid-cols-4 rounded"${_scopeId5}>`);
                                      if (testTypes.value.length) {
                                        _push6(ssrRenderComponent(_component_FormKit, {
                                          type: "select",
                                          label: "Test type",
                                          modelValue: selectedItem.value.test_type_id,
                                          "onUpdate:modelValue": ($event) => selectedItem.value.test_type_id = $event,
                                          placeholder: "Select test type",
                                          validation: "required",
                                          options: testTypes.value,
                                          class: "w-full"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (diseases.value.length) {
                                        _push6(ssrRenderComponent(_component_FormKit, {
                                          type: "select",
                                          label: "Disease",
                                          modelValue: selectedItem.value.disease_id,
                                          "onUpdate:modelValue": ($event) => selectedItem.value.disease_id = $event,
                                          placeholder: "Select disease",
                                          validation: "required",
                                          options: diseases.value
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div>`);
                                    });
                                    _push6(`<!--]--></div></div><div class="mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Close",
                                      click: closeForm
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "success",
                                      icon: unref(render$2),
                                      click: () => {
                                      },
                                      text: "Save",
                                      loading: loading.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                        createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                                            return openBlock(), createBlock("div", {
                                              class: "relative shadow-none border-2 p-3 mb-3 border-gray-100 text-left box-border space-x-4 grid grid-cols-4 rounded",
                                              key: index
                                            }, [
                                              testTypes.value.length ? (openBlock(), createBlock(_component_FormKit, {
                                                key: 0,
                                                type: "select",
                                                label: "Test type",
                                                modelValue: selectedItem.value.test_type_id,
                                                "onUpdate:modelValue": ($event) => selectedItem.value.test_type_id = $event,
                                                placeholder: "Select test type",
                                                validation: "required",
                                                options: testTypes.value,
                                                class: "w-full"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true),
                                              diseases.value.length ? (openBlock(), createBlock(_component_FormKit, {
                                                key: 1,
                                                type: "select",
                                                label: "Disease",
                                                modelValue: selectedItem.value.disease_id,
                                                "onUpdate:modelValue": ($event) => selectedItem.value.disease_id = $event,
                                                placeholder: "Select disease",
                                                validation: "required",
                                                options: diseases.value
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                                            ]);
                                          }), 128))
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                        createVNode(_component_CoreOutlinedButton, {
                                          type: "button",
                                          text: "Close",
                                          click: closeForm
                                        }),
                                        createVNode(_component_CoreActionButton, {
                                          type: "submit",
                                          color: "success",
                                          icon: unref(render$2),
                                          click: () => {
                                          },
                                          text: "Save",
                                          loading: loading.value
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
                                      createTextVNode(toDisplayString("Edit Surveillance Details"))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: closeForm }, [
                                    createVNode(unref(render$1), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  "submit-label": "Save",
                                  onSubmit: handleSubmitForm,
                                  actions: false
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                                          return openBlock(), createBlock("div", {
                                            class: "relative shadow-none border-2 p-3 mb-3 border-gray-100 text-left box-border space-x-4 grid grid-cols-4 rounded",
                                            key: index
                                          }, [
                                            testTypes.value.length ? (openBlock(), createBlock(_component_FormKit, {
                                              key: 0,
                                              type: "select",
                                              label: "Test type",
                                              modelValue: selectedItem.value.test_type_id,
                                              "onUpdate:modelValue": ($event) => selectedItem.value.test_type_id = $event,
                                              placeholder: "Select test type",
                                              validation: "required",
                                              options: testTypes.value,
                                              class: "w-full"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true),
                                            diseases.value.length ? (openBlock(), createBlock(_component_FormKit, {
                                              key: 1,
                                              type: "select",
                                              label: "Disease",
                                              modelValue: selectedItem.value.disease_id,
                                              "onUpdate:modelValue": ($event) => selectedItem.value.disease_id = $event,
                                              placeholder: "Select disease",
                                              validation: "required",
                                              options: diseases.value
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                                          ]);
                                        }), 128))
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreOutlinedButton, {
                                        type: "button",
                                        text: "Close",
                                        click: closeForm
                                      }),
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        color: "success",
                                        icon: unref(render$2),
                                        click: () => {
                                        },
                                        text: "Save",
                                        loading: loading.value
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
                                    createTextVNode(toDisplayString("Edit Surveillance Details"))
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: closeForm }, [
                                  createVNode(unref(render$1), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                "submit-label": "Save",
                                onSubmit: handleSubmitForm,
                                actions: false
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                                        return openBlock(), createBlock("div", {
                                          class: "relative shadow-none border-2 p-3 mb-3 border-gray-100 text-left box-border space-x-4 grid grid-cols-4 rounded",
                                          key: index
                                        }, [
                                          testTypes.value.length ? (openBlock(), createBlock(_component_FormKit, {
                                            key: 0,
                                            type: "select",
                                            label: "Test type",
                                            modelValue: selectedItem.value.test_type_id,
                                            "onUpdate:modelValue": ($event) => selectedItem.value.test_type_id = $event,
                                            placeholder: "Select test type",
                                            validation: "required",
                                            options: testTypes.value,
                                            class: "w-full"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true),
                                          diseases.value.length ? (openBlock(), createBlock(_component_FormKit, {
                                            key: 1,
                                            type: "select",
                                            label: "Disease",
                                            modelValue: selectedItem.value.disease_id,
                                            "onUpdate:modelValue": ($event) => selectedItem.value.disease_id = $event,
                                            placeholder: "Select disease",
                                            validation: "required",
                                            options: diseases.value
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Close",
                                      click: closeForm
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "success",
                                      icon: unref(render$2),
                                      click: () => {
                                      },
                                      text: "Save",
                                      loading: loading.value
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
                                      createTextVNode(toDisplayString("Edit Surveillance Details"))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: closeForm }, [
                                    createVNode(unref(render$1), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  "submit-label": "Save",
                                  onSubmit: handleSubmitForm,
                                  actions: false
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                                          return openBlock(), createBlock("div", {
                                            class: "relative shadow-none border-2 p-3 mb-3 border-gray-100 text-left box-border space-x-4 grid grid-cols-4 rounded",
                                            key: index
                                          }, [
                                            testTypes.value.length ? (openBlock(), createBlock(_component_FormKit, {
                                              key: 0,
                                              type: "select",
                                              label: "Test type",
                                              modelValue: selectedItem.value.test_type_id,
                                              "onUpdate:modelValue": ($event) => selectedItem.value.test_type_id = $event,
                                              placeholder: "Select test type",
                                              validation: "required",
                                              options: testTypes.value,
                                              class: "w-full"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true),
                                            diseases.value.length ? (openBlock(), createBlock(_component_FormKit, {
                                              key: 1,
                                              type: "select",
                                              label: "Disease",
                                              modelValue: selectedItem.value.disease_id,
                                              "onUpdate:modelValue": ($event) => selectedItem.value.disease_id = $event,
                                              placeholder: "Select disease",
                                              validation: "required",
                                              options: diseases.value
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                                          ]);
                                        }), 128))
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreOutlinedButton, {
                                        type: "button",
                                        text: "Close",
                                        click: closeForm
                                      }),
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        color: "success",
                                        icon: unref(render$2),
                                        click: () => {
                                        },
                                        text: "Save",
                                        loading: loading.value
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
                onClose: closeForm,
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
                                    createTextVNode(toDisplayString("Edit Surveillance Details"))
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: closeForm }, [
                                  createVNode(unref(render$1), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                "submit-label": "Save",
                                onSubmit: handleSubmitForm,
                                actions: false
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-1 gap-1" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                                        return openBlock(), createBlock("div", {
                                          class: "relative shadow-none border-2 p-3 mb-3 border-gray-100 text-left box-border space-x-4 grid grid-cols-4 rounded",
                                          key: index
                                        }, [
                                          testTypes.value.length ? (openBlock(), createBlock(_component_FormKit, {
                                            key: 0,
                                            type: "select",
                                            label: "Test type",
                                            modelValue: selectedItem.value.test_type_id,
                                            "onUpdate:modelValue": ($event) => selectedItem.value.test_type_id = $event,
                                            placeholder: "Select test type",
                                            validation: "required",
                                            options: testTypes.value,
                                            class: "w-full"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true),
                                          diseases.value.length ? (openBlock(), createBlock(_component_FormKit, {
                                            key: 1,
                                            type: "select",
                                            label: "Disease",
                                            modelValue: selectedItem.value.disease_id,
                                            "onUpdate:modelValue": ($event) => selectedItem.value.disease_id = $event,
                                            placeholder: "Select disease",
                                            validation: "required",
                                            options: diseases.value
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      text: "Close",
                                      click: closeForm
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      color: "success",
                                      icon: unref(render$2),
                                      click: () => {
                                      },
                                      text: "Save",
                                      loading: loading.value
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/surveillance/edit-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  setup() {
    useHead({
      title: "IBLIS - Surveillance"
    });
  },
  data() {
    return {
      pages: new Array(
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Test Catalog",
          link: "#"
        }
      ),
      serverItemsLength: 0,
      loading: false,
      items: new Array(),
      cookie: useCookie("token"),
      header: "Surveillance",
      search: "",
      searchValue: "",
      headers: [
        { text: "Test Type", value: "test_type", sortable: true },
        { text: "Disease", value: "disease" },
        { text: "Actions", value: "actions", width: 18 }
      ],
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "test_type"
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    updateSearch(value) {
      this.searchValue = value;
      this.search = value;
      this.init();
    },
    async init() {
      this.loading = true;
      const { page, rowsPerPage } = this.serverOptions;
      const request = {
        route: getParameterizedUrl(endpoints.surveillance.index, {
          page,
          page_size: rowsPerPage,
          search: this.search
        }),
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        this.items = [];
        data.value.data.map(
          (item, key) => {
            this.items.push({
              id: item.id,
              test_type: item.test_type.name,
              disease: item.disease.name
            });
          }
        );
        this.serverItemsLength = data.value.total;
      }
      this.loading = false;
      if (error.value) {
        this.loading = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    },
    updateSurveillance(value) {
      if (typeof value === "object") {
        this.serverOptions = value;
      }
      this.init();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0$1;
  const _component_SurveillanceAddDialog = __nuxt_component_1;
  const _component_SurveillanceAddDisease = __nuxt_component_1$2;
  const _component_CoreSearchBar = __nuxt_component_1$3;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_SurveillanceEditDialog = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_SurveillanceAddDialog, { onUpdate: $options.updateSurveillance }, null, _parent));
  _push(ssrRenderComponent(_component_SurveillanceAddDisease, null, null, _parent));
  _push(`</div></div><div class="flex justify-end w-full px-2 py-2 mb-2">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    onUpdate: $options.updateSearch
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $data.items,
    serverOptions: $data.serverOptions,
    loading: $data.loading,
    serverItemsLength: $data.serverItemsLength,
    searchField: "test_type",
    searchValue: $data.searchValue,
    onUpdate: $options.updateSurveillance
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_SurveillanceEditDialog, {
          id: item.id,
          onUpdate: $options.updateSurveillance
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_SurveillanceEditDialog, {
              id: item.id,
              onUpdate: $options.updateSurveillance
            }, null, 8, ["id", "onUpdate"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lab-configuration/surveillance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const surveillance = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { surveillance as default };
//# sourceMappingURL=surveillance-da83397b.mjs.map
