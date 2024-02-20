import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$5 } from './Breadcrumb-fc731a79.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './Multiselect-d93216db.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-666ad98b.mjs';
import { _ as __nuxt_component_1$3 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { d as dateFormat, e as errorMessage } from './constants-9b77e6ea.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { S as StockModule$1 } from './stock-ebdfb047.mjs';
import { r as render$4 } from './XMarkIcon-170c776f.mjs';
import { r as render$5 } from './UserIcon-3d66d73e.mjs';
import { r as render, a as render$4$1 } from './fetch-63157596.mjs';
import { r as render$6 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { a as render$1, r as render$3 } from './PencilSquareIcon-77446728.mjs';
import { r as render$7 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './SearchBar-a0fe3266.mjs';
import { _ as __nuxt_component_2 } from './Datatable-d607d390.mjs';
import { _ as _imports_0$1 } from './stock_out-9944e6b9.mjs';
import { r as render$2 } from './TrashIcon-b1416ff8.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import moment from 'moment';
import { P as Package } from './package-68885819.mjs';
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
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import './PrinterIcon-02ac6ae4.mjs';
import './Loader-86943425.mjs';

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
      addIcon: render,
      saveIcon: render$6,
      editIcon: render$3,
      clearIcon: render$7,
      loading: false,
      name: "",
      description: "",
      cookie: useCookie("token"),
      rawCategories: new Array(),
      categories: new Array(),
      selectedCategory: "",
      measurementQuantity: 0,
      rawStockUnits: new Array(),
      stockUnits: new Array(),
      stockLocations: new Array(),
      selectedLocation: { name: "-- selected location --", id: 0 },
      selectedStockUnit: "",
      strength: "",
      minimumOrderLevel: 0
    };
  },
  methods: {
    async getStockCategory() {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockCategory(`${this.cookie}`);
      if (data.value) {
        this.rawCategories = data.value;
        this.categories = data.value.map((category) => category.name);
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async getStockUnit() {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockUnit(`${this.cookie}`);
      if (data.value) {
        this.rawStockUnits = data.value;
        this.stockUnits = data.value.map((unit) => unit.name);
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async getStockLocation() {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockLocation(`${this.cookie}`);
      if (data.value) {
        this.stockLocations = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async init() {
      await this.getStockCategory();
      await this.getStockUnit();
      await this.getStockLocation();
      this.handleClick();
    },
    async submitForm() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const params = {
        name: this.name,
        description: this.description,
        stock_location_id: this.selectedLocation.id,
        stock_category_id: this.rawCategories.filter((category) => category.name === this.selectedCategory)[0].id,
        measurement_unit: this.rawStockUnits.filter((unit) => unit.name === this.selectedStockUnit)[0].id,
        quantity_unit: this.measurementQuantity,
        strength: this.strength,
        minimum_order_level: this.minimumOrderLevel
      };
      const { pending, error, data } = await stockModule.createStockItem(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`${this.name} stock item created successfully!`);
        this.loading = false;
        this.description = "";
        this.name = "";
        this.measurementQuantity = 0;
        this.$emit("update", true);
      }
      if (error.value) {
        this.handleClick();
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
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
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_CoreOutlinedButton = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Create stock item",
    color: "primary",
    icon: $data.addIcon,
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
                                _push6(` Create stock item `);
                              } else {
                                return [
                                  createTextVNode(" Create stock item ")
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
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="w-full flex items-center"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  validation: "required",
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Description",
                                  validation: "required",
                                  modelValue: $data.description,
                                  "onUpdate:modelValue": ($event) => $data.description = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="flex items-center"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreMultiselect, {
                                  mode: "single",
                                  "items-selected": $data.selectedStockUnit,
                                  "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                  label: "Measurement Unit",
                                  items: $data.stockUnits
                                }, null, _parent6, _scopeId5));
                                _push6(`<div class="flex items-center space-x-2 pt-8 ml-3"${_scopeId5}>`);
                                if ($data.selectedStockUnit == "") {
                                  _push6(ssrRenderComponent(_component_CoreActionButton, {
                                    icon: $data.addIcon,
                                    color: "primary",
                                    text: "Add",
                                    click: () => {
                                      _ctx.$router.push("/stock-management/metrics");
                                    }
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if ($data.selectedStockUnit != "") {
                                  _push6(ssrRenderComponent(_component_CoreActionButton, {
                                    icon: $data.editIcon,
                                    color: "success",
                                    text: "Edit",
                                    click: () => {
                                      _ctx.$router.push("/stock-management/metrics");
                                    }
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(`</div></div><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "number",
                                  label: "Quantity of measurement",
                                  validation: "required",
                                  modelValue: $data.measurementQuantity,
                                  "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="bg-white"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreMultiselect, {
                                  mode: "single",
                                  label: "Category",
                                  items: $data.categories,
                                  "items-selected": $data.selectedCategory,
                                  "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div${_scopeId5}><label class="font-medium mb-2.5 text-lg"${_scopeId5}>Location</label>`);
                                _push6(ssrRenderComponent(_component_CoreDropdown, {
                                  items: $data.stockLocations,
                                  modelValue: $data.selectedLocation,
                                  "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Strength",
                                  modelValue: $data.strength,
                                  "onUpdate:modelValue": ($event) => $data.strength = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "number",
                                  label: "Minimum order level",
                                  validation: "required",
                                  modelValue: $data.minimumOrderLevel,
                                  "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  },
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
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "w-full flex items-center" }, [
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
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "textarea",
                                        label: "Description",
                                        validation: "required",
                                        modelValue: $data.description,
                                        "onUpdate:modelValue": ($event) => $data.description = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode(_component_CoreMultiselect, {
                                        mode: "single",
                                        "items-selected": $data.selectedStockUnit,
                                        "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                        label: "Measurement Unit",
                                        items: $data.stockUnits
                                      }, null, 8, ["items-selected", "onUpdate:itemsSelected", "items"]),
                                      createVNode("div", { class: "flex items-center space-x-2 pt-8 ml-3" }, [
                                        $data.selectedStockUnit == "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                          key: 0,
                                          icon: $data.addIcon,
                                          color: "primary",
                                          text: "Add",
                                          click: () => {
                                            _ctx.$router.push("/stock-management/metrics");
                                          }
                                        }, null, 8, ["icon", "click"])) : createCommentVNode("", true),
                                        $data.selectedStockUnit != "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                          key: 1,
                                          icon: $data.editIcon,
                                          color: "success",
                                          text: "Edit",
                                          click: () => {
                                            _ctx.$router.push("/stock-management/metrics");
                                          }
                                        }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "number",
                                        label: "Quantity of measurement",
                                        validation: "required",
                                        modelValue: $data.measurementQuantity,
                                        "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "bg-white" }, [
                                      createVNode(_component_CoreMultiselect, {
                                        mode: "single",
                                        label: "Category",
                                        items: $data.categories,
                                        "items-selected": $data.selectedCategory,
                                        "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                      }, null, 8, ["items", "items-selected", "onUpdate:itemsSelected"])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("label", { class: "font-medium mb-2.5 text-lg" }, "Location"),
                                      createVNode(_component_CoreDropdown, {
                                        items: $data.stockLocations,
                                        modelValue: $data.selectedLocation,
                                        "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Strength",
                                        modelValue: $data.strength,
                                        "onUpdate:modelValue": ($event) => $data.strength = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "number",
                                        label: "Minimum order level",
                                        validation: "required",
                                        modelValue: $data.minimumOrderLevel,
                                        "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                        $options.clearForm();
                                      },
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
                                  createTextVNode(" Create stock item ")
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
                                  createVNode("div", { class: "w-full flex items-center" }, [
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
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      validation: "required",
                                      modelValue: $data.description,
                                      "onUpdate:modelValue": ($event) => $data.description = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_CoreMultiselect, {
                                      mode: "single",
                                      "items-selected": $data.selectedStockUnit,
                                      "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                      label: "Measurement Unit",
                                      items: $data.stockUnits
                                    }, null, 8, ["items-selected", "onUpdate:itemsSelected", "items"]),
                                    createVNode("div", { class: "flex items-center space-x-2 pt-8 ml-3" }, [
                                      $data.selectedStockUnit == "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                        key: 0,
                                        icon: $data.addIcon,
                                        color: "primary",
                                        text: "Add",
                                        click: () => {
                                          _ctx.$router.push("/stock-management/metrics");
                                        }
                                      }, null, 8, ["icon", "click"])) : createCommentVNode("", true),
                                      $data.selectedStockUnit != "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                        key: 1,
                                        icon: $data.editIcon,
                                        color: "success",
                                        text: "Edit",
                                        click: () => {
                                          _ctx.$router.push("/stock-management/metrics");
                                        }
                                      }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Quantity of measurement",
                                      validation: "required",
                                      modelValue: $data.measurementQuantity,
                                      "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "bg-white" }, [
                                    createVNode(_component_CoreMultiselect, {
                                      mode: "single",
                                      label: "Category",
                                      items: $data.categories,
                                      "items-selected": $data.selectedCategory,
                                      "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                    }, null, 8, ["items", "items-selected", "onUpdate:itemsSelected"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "font-medium mb-2.5 text-lg" }, "Location"),
                                    createVNode(_component_CoreDropdown, {
                                      items: $data.stockLocations,
                                      modelValue: $data.selectedLocation,
                                      "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Strength",
                                      modelValue: $data.strength,
                                      "onUpdate:modelValue": ($event) => $data.strength = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Minimum order level",
                                      validation: "required",
                                      modelValue: $data.minimumOrderLevel,
                                      "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                      $options.clearForm();
                                    },
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
                                createTextVNode(" Create stock item ")
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
                                createVNode("div", { class: "w-full flex items-center" }, [
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
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Description",
                                    validation: "required",
                                    modelValue: $data.description,
                                    "onUpdate:modelValue": ($event) => $data.description = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_CoreMultiselect, {
                                    mode: "single",
                                    "items-selected": $data.selectedStockUnit,
                                    "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                    label: "Measurement Unit",
                                    items: $data.stockUnits
                                  }, null, 8, ["items-selected", "onUpdate:itemsSelected", "items"]),
                                  createVNode("div", { class: "flex items-center space-x-2 pt-8 ml-3" }, [
                                    $data.selectedStockUnit == "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                      key: 0,
                                      icon: $data.addIcon,
                                      color: "primary",
                                      text: "Add",
                                      click: () => {
                                        _ctx.$router.push("/stock-management/metrics");
                                      }
                                    }, null, 8, ["icon", "click"])) : createCommentVNode("", true),
                                    $data.selectedStockUnit != "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                      key: 1,
                                      icon: $data.editIcon,
                                      color: "success",
                                      text: "Edit",
                                      click: () => {
                                        _ctx.$router.push("/stock-management/metrics");
                                      }
                                    }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Quantity of measurement",
                                    validation: "required",
                                    modelValue: $data.measurementQuantity,
                                    "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "bg-white" }, [
                                  createVNode(_component_CoreMultiselect, {
                                    mode: "single",
                                    label: "Category",
                                    items: $data.categories,
                                    "items-selected": $data.selectedCategory,
                                    "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                  }, null, 8, ["items", "items-selected", "onUpdate:itemsSelected"])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "font-medium mb-2.5 text-lg" }, "Location"),
                                  createVNode(_component_CoreDropdown, {
                                    items: $data.stockLocations,
                                    modelValue: $data.selectedLocation,
                                    "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Strength",
                                    modelValue: $data.strength,
                                    "onUpdate:modelValue": ($event) => $data.strength = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Minimum order level",
                                    validation: "required",
                                    modelValue: $data.minimumOrderLevel,
                                    "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  },
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
                                  createTextVNode(" Create stock item ")
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
                                  createVNode("div", { class: "w-full flex items-center" }, [
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
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      validation: "required",
                                      modelValue: $data.description,
                                      "onUpdate:modelValue": ($event) => $data.description = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_CoreMultiselect, {
                                      mode: "single",
                                      "items-selected": $data.selectedStockUnit,
                                      "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                      label: "Measurement Unit",
                                      items: $data.stockUnits
                                    }, null, 8, ["items-selected", "onUpdate:itemsSelected", "items"]),
                                    createVNode("div", { class: "flex items-center space-x-2 pt-8 ml-3" }, [
                                      $data.selectedStockUnit == "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                        key: 0,
                                        icon: $data.addIcon,
                                        color: "primary",
                                        text: "Add",
                                        click: () => {
                                          _ctx.$router.push("/stock-management/metrics");
                                        }
                                      }, null, 8, ["icon", "click"])) : createCommentVNode("", true),
                                      $data.selectedStockUnit != "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                        key: 1,
                                        icon: $data.editIcon,
                                        color: "success",
                                        text: "Edit",
                                        click: () => {
                                          _ctx.$router.push("/stock-management/metrics");
                                        }
                                      }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Quantity of measurement",
                                      validation: "required",
                                      modelValue: $data.measurementQuantity,
                                      "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "bg-white" }, [
                                    createVNode(_component_CoreMultiselect, {
                                      mode: "single",
                                      label: "Category",
                                      items: $data.categories,
                                      "items-selected": $data.selectedCategory,
                                      "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                    }, null, 8, ["items", "items-selected", "onUpdate:itemsSelected"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "font-medium mb-2.5 text-lg" }, "Location"),
                                    createVNode(_component_CoreDropdown, {
                                      items: $data.stockLocations,
                                      modelValue: $data.selectedLocation,
                                      "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Strength",
                                      modelValue: $data.strength,
                                      "onUpdate:modelValue": ($event) => $data.strength = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Minimum order level",
                                      validation: "required",
                                      modelValue: $data.minimumOrderLevel,
                                      "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                      $options.clearForm();
                                    },
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
                                createTextVNode(" Create stock item ")
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
                                createVNode("div", { class: "w-full flex items-center" }, [
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
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Description",
                                    validation: "required",
                                    modelValue: $data.description,
                                    "onUpdate:modelValue": ($event) => $data.description = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_CoreMultiselect, {
                                    mode: "single",
                                    "items-selected": $data.selectedStockUnit,
                                    "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                    label: "Measurement Unit",
                                    items: $data.stockUnits
                                  }, null, 8, ["items-selected", "onUpdate:itemsSelected", "items"]),
                                  createVNode("div", { class: "flex items-center space-x-2 pt-8 ml-3" }, [
                                    $data.selectedStockUnit == "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                      key: 0,
                                      icon: $data.addIcon,
                                      color: "primary",
                                      text: "Add",
                                      click: () => {
                                        _ctx.$router.push("/stock-management/metrics");
                                      }
                                    }, null, 8, ["icon", "click"])) : createCommentVNode("", true),
                                    $data.selectedStockUnit != "" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                      key: 1,
                                      icon: $data.editIcon,
                                      color: "success",
                                      text: "Edit",
                                      click: () => {
                                        _ctx.$router.push("/stock-management/metrics");
                                      }
                                    }, null, 8, ["icon", "click"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Quantity of measurement",
                                    validation: "required",
                                    modelValue: $data.measurementQuantity,
                                    "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "bg-white" }, [
                                  createVNode(_component_CoreMultiselect, {
                                    mode: "single",
                                    label: "Category",
                                    items: $data.categories,
                                    "items-selected": $data.selectedCategory,
                                    "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                  }, null, 8, ["items", "items-selected", "onUpdate:itemsSelected"])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "font-medium mb-2.5 text-lg" }, "Location"),
                                  createVNode(_component_CoreDropdown, {
                                    items: $data.stockLocations,
                                    modelValue: $data.selectedLocation,
                                    "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Strength",
                                    modelValue: $data.strength,
                                    "onUpdate:modelValue": ($event) => $data.strength = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Minimum order level",
                                    validation: "required",
                                    modelValue: $data.minimumOrderLevel,
                                    "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  },
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/items/add-dialog/index.vue");
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
    XMarkIcon: render$4
  },
  data() {
    return {
      viewIcon: render$1,
      show: false,
      editIcon: render$3
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
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: () => {
      $options.handleClick();
    },
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-8 h-8 mr-2"${_scopeId5}> View Stock Item `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View Stock Item ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="space-y-3 px-5 py-5"${_scopeId4}><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Name</label><p${_scopeId4}>${ssrInterpolate($props.data.name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Description</label><p${_scopeId4}>${ssrInterpolate($props.data.description)}</p></div></div>`);
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
                                  createTextVNode(" View Stock Item ")
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
                                createVNode("p", null, toDisplayString($props.data.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                                createVNode("p", null, toDisplayString($props.data.description), 1)
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
                                createTextVNode(" View Stock Item ")
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
                              createVNode("p", null, toDisplayString($props.data.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                              createVNode("p", null, toDisplayString($props.data.description), 1)
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
                                  createTextVNode(" View Stock Item ")
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
                                createVNode("p", null, toDisplayString($props.data.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                                createVNode("p", null, toDisplayString($props.data.description), 1)
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
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" View Stock Item ")
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
                              createVNode("p", null, toDisplayString($props.data.name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Description"),
                              createVNode("p", null, toDisplayString($props.data.description), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/items/view-dialog/index.vue");
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
      editIcon: render$3,
      show: false,
      saveIcon: render$6,
      name: "",
      description: "",
      loading: false,
      cookie: useCookie("token"),
      rawCategories: new Array(),
      categories: new Array(),
      selectedCategory: "",
      measurementQuantity: 0,
      rawStockUnits: new Array(),
      stockUnits: new Array(),
      selectedStockUnit: "",
      strength: "",
      minimumOrderLevel: 0,
      stockLocations: new Array(),
      selectedLocation: { name: "-- selected location --", id: 0 }
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    async getStockLocation() {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockLocation(`${this.cookie}`);
      if (data.value) {
        this.stockLocations = data.value;
        this.selectedLocation = data.value.filter((location) => location.id == this.data.stock_location_id)[0];
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async getStockCategory() {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockCategory(`${this.cookie}`);
      if (data.value) {
        this.rawCategories = data.value;
        this.categories = data.value.map((category) => category.name);
        this.selectedCategory = this.rawCategories.filter((c) => c.id == this.data.stock_category_id)[0].name;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async getStockUnit() {
      const stockModule = new StockModule$1();
      const { data, error } = await stockModule.getStockUnit(`${this.cookie}`);
      if (data.value) {
        this.rawStockUnits = data.value;
        this.stockUnits = data.value.map((unit) => unit.name);
        this.selectedStockUnit = this.rawStockUnits.filter((c) => c.id == this.data.measurement_unit)[0].name;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async init() {
      await this.getStockCategory();
      await this.getStockUnit();
      await this.getStockLocation();
      this.handleClick();
      this.name = this.data.name;
      this.description = this.data.description;
      this.strength = this.data.strength;
      this.minimumOrderLevel = this.data.minimum_order_level;
    },
    async submitForm() {
      this.loading = true;
      const stockModule = new StockModule$1();
      let params = {
        id: this.data.id,
        name: this.name,
        description: this.description,
        stock_location_id: this.selectedLocation.id,
        stock_category_id: this.rawCategories.filter((category) => category.name === this.selectedCategory)[0].id,
        measurement_unit: this.rawStockUnits.filter((unit) => unit.name === this.selectedStockUnit)[0].id,
        quantity_unit: this.measurementQuantity,
        strength: this.strength,
        minimum_order_level: this.minimumOrderLevel
      };
      const { data, error, pending } = await stockModule.updateStockItem(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`${this.name} stock item updated successfully!`);
        this.loading = false;
        this.description = "";
        this.name = "";
        this.$emit("update", true);
      }
      if (error.value) {
        this.handleClick();
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    },
    clearForm() {
      this.$formkit.reset("editForm");
    },
    handleClick() {
      this.show = !this.show;
    }
  }
};
const _imports_0 = "" + buildAssetsURL("database.d2f0af29.svg");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreMultiselect = __nuxt_component_1$2;
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_CoreOutlinedButton = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: () => {
      $options.init();
    },
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Edit Stock Item `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit Stock Item ")
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
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="w-full flex items-center"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  validation: "required",
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="w-full flex items-center space-x-3"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Description",
                                  validation: "required",
                                  modelValue: $data.description,
                                  "onUpdate:modelValue": ($event) => $data.description = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="flex items-center"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreMultiselect, {
                                  mode: "single",
                                  "items-selected": $data.selectedStockUnit,
                                  "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                  label: "Measurement Unit",
                                  items: $data.stockUnits
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "number",
                                  label: "Quantity of measurement",
                                  validation: "required",
                                  modelValue: $data.measurementQuantity,
                                  "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="bg-white"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreMultiselect, {
                                  mode: "single",
                                  label: "Category",
                                  items: $data.categories,
                                  "items-selected": $data.selectedCategory,
                                  "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div${_scopeId5}><label class="font-medium mb-2.5 text-lg"${_scopeId5}>Location</label>`);
                                _push6(ssrRenderComponent(_component_CoreDropdown, {
                                  items: $data.stockLocations,
                                  modelValue: $data.selectedLocation,
                                  "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Strength",
                                  modelValue: $data.strength,
                                  "onUpdate:modelValue": ($event) => $data.strength = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex flex-col space-y-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "number",
                                  label: "Minimum order level",
                                  validation: "required",
                                  modelValue: $data.minimumOrderLevel,
                                  "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  },
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
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "w-full flex items-center" }, [
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
                                    createVNode("div", { class: "w-full flex items-center space-x-3" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "textarea",
                                          label: "Description",
                                          validation: "required",
                                          modelValue: $data.description,
                                          "onUpdate:modelValue": ($event) => $data.description = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode(_component_CoreMultiselect, {
                                        mode: "single",
                                        "items-selected": $data.selectedStockUnit,
                                        "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                        label: "Measurement Unit",
                                        items: $data.stockUnits
                                      }, null, 8, ["items-selected", "onUpdate:itemsSelected", "items"])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "number",
                                        label: "Quantity of measurement",
                                        validation: "required",
                                        modelValue: $data.measurementQuantity,
                                        "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "bg-white" }, [
                                      createVNode(_component_CoreMultiselect, {
                                        mode: "single",
                                        label: "Category",
                                        items: $data.categories,
                                        "items-selected": $data.selectedCategory,
                                        "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                      }, null, 8, ["items", "items-selected", "onUpdate:itemsSelected"])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("label", { class: "font-medium mb-2.5 text-lg" }, "Location"),
                                      createVNode(_component_CoreDropdown, {
                                        items: $data.stockLocations,
                                        modelValue: $data.selectedLocation,
                                        "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Strength",
                                        modelValue: $data.strength,
                                        "onUpdate:modelValue": ($event) => $data.strength = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "number",
                                        label: "Minimum order level",
                                        validation: "required",
                                        modelValue: $data.minimumOrderLevel,
                                        "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                        $options.clearForm();
                                      },
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
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit Stock Item ")
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
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "w-full flex items-center" }, [
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
                                  createVNode("div", { class: "w-full flex items-center space-x-3" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "textarea",
                                        label: "Description",
                                        validation: "required",
                                        modelValue: $data.description,
                                        "onUpdate:modelValue": ($event) => $data.description = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_CoreMultiselect, {
                                      mode: "single",
                                      "items-selected": $data.selectedStockUnit,
                                      "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                      label: "Measurement Unit",
                                      items: $data.stockUnits
                                    }, null, 8, ["items-selected", "onUpdate:itemsSelected", "items"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Quantity of measurement",
                                      validation: "required",
                                      modelValue: $data.measurementQuantity,
                                      "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "bg-white" }, [
                                    createVNode(_component_CoreMultiselect, {
                                      mode: "single",
                                      label: "Category",
                                      items: $data.categories,
                                      "items-selected": $data.selectedCategory,
                                      "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                    }, null, 8, ["items", "items-selected", "onUpdate:itemsSelected"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "font-medium mb-2.5 text-lg" }, "Location"),
                                    createVNode(_component_CoreDropdown, {
                                      items: $data.stockLocations,
                                      modelValue: $data.selectedLocation,
                                      "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Strength",
                                      modelValue: $data.strength,
                                      "onUpdate:modelValue": ($event) => $data.strength = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Minimum order level",
                                      validation: "required",
                                      modelValue: $data.minimumOrderLevel,
                                      "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                      $options.clearForm();
                                    },
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
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Edit Stock Item ")
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
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "w-full flex items-center" }, [
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
                                createVNode("div", { class: "w-full flex items-center space-x-3" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      validation: "required",
                                      modelValue: $data.description,
                                      "onUpdate:modelValue": ($event) => $data.description = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_CoreMultiselect, {
                                    mode: "single",
                                    "items-selected": $data.selectedStockUnit,
                                    "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                    label: "Measurement Unit",
                                    items: $data.stockUnits
                                  }, null, 8, ["items-selected", "onUpdate:itemsSelected", "items"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Quantity of measurement",
                                    validation: "required",
                                    modelValue: $data.measurementQuantity,
                                    "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "bg-white" }, [
                                  createVNode(_component_CoreMultiselect, {
                                    mode: "single",
                                    label: "Category",
                                    items: $data.categories,
                                    "items-selected": $data.selectedCategory,
                                    "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                  }, null, 8, ["items", "items-selected", "onUpdate:itemsSelected"])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "font-medium mb-2.5 text-lg" }, "Location"),
                                  createVNode(_component_CoreDropdown, {
                                    items: $data.stockLocations,
                                    modelValue: $data.selectedLocation,
                                    "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Strength",
                                    modelValue: $data.strength,
                                    "onUpdate:modelValue": ($event) => $data.strength = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Minimum order level",
                                    validation: "required",
                                    modelValue: $data.minimumOrderLevel,
                                    "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  },
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
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit Stock Item ")
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
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "w-full flex items-center" }, [
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
                                  createVNode("div", { class: "w-full flex items-center space-x-3" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "textarea",
                                        label: "Description",
                                        validation: "required",
                                        modelValue: $data.description,
                                        "onUpdate:modelValue": ($event) => $data.description = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_CoreMultiselect, {
                                      mode: "single",
                                      "items-selected": $data.selectedStockUnit,
                                      "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                      label: "Measurement Unit",
                                      items: $data.stockUnits
                                    }, null, 8, ["items-selected", "onUpdate:itemsSelected", "items"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Quantity of measurement",
                                      validation: "required",
                                      modelValue: $data.measurementQuantity,
                                      "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "bg-white" }, [
                                    createVNode(_component_CoreMultiselect, {
                                      mode: "single",
                                      label: "Category",
                                      items: $data.categories,
                                      "items-selected": $data.selectedCategory,
                                      "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                    }, null, 8, ["items", "items-selected", "onUpdate:itemsSelected"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "font-medium mb-2.5 text-lg" }, "Location"),
                                    createVNode(_component_CoreDropdown, {
                                      items: $data.stockLocations,
                                      modelValue: $data.selectedLocation,
                                      "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Strength",
                                      modelValue: $data.strength,
                                      "onUpdate:modelValue": ($event) => $data.strength = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Minimum order level",
                                      validation: "required",
                                      modelValue: $data.minimumOrderLevel,
                                      "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                      $options.clearForm();
                                    },
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
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Edit Stock Item ")
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
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "w-full flex items-center" }, [
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
                                createVNode("div", { class: "w-full flex items-center space-x-3" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Description",
                                      validation: "required",
                                      modelValue: $data.description,
                                      "onUpdate:modelValue": ($event) => $data.description = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_CoreMultiselect, {
                                    mode: "single",
                                    "items-selected": $data.selectedStockUnit,
                                    "onUpdate:itemsSelected": ($event) => $data.selectedStockUnit = $event,
                                    label: "Measurement Unit",
                                    items: $data.stockUnits
                                  }, null, 8, ["items-selected", "onUpdate:itemsSelected", "items"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Quantity of measurement",
                                    validation: "required",
                                    modelValue: $data.measurementQuantity,
                                    "onUpdate:modelValue": ($event) => $data.measurementQuantity = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "bg-white" }, [
                                  createVNode(_component_CoreMultiselect, {
                                    mode: "single",
                                    label: "Category",
                                    items: $data.categories,
                                    "items-selected": $data.selectedCategory,
                                    "onUpdate:itemsSelected": ($event) => $data.selectedCategory = $event
                                  }, null, 8, ["items", "items-selected", "onUpdate:itemsSelected"])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "font-medium mb-2.5 text-lg" }, "Location"),
                                  createVNode(_component_CoreDropdown, {
                                    items: $data.stockLocations,
                                    modelValue: $data.selectedLocation,
                                    "onUpdate:modelValue": ($event) => $data.selectedLocation = $event
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Strength",
                                    modelValue: $data.strength,
                                    "onUpdate:modelValue": ($event) => $data.strength = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Minimum order level",
                                    validation: "required",
                                    modelValue: $data.minimumOrderLevel,
                                    "onUpdate:modelValue": ($event) => $data.minimumOrderLevel = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.clearForm();
                                  },
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/items/edit-dialog/index.vue");
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
     * @method voidStockSupplier deletes test type
     * @param id test type id
     * @return promise @typeof void
     */
    async voidStockSupplier(id) {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.voidStockItem(`${this.cookie}`, { "reason": this.reason, id });
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`Stock item deleted successfully!`);
        this.loading = false;
        this.reason = "";
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
                            onSubmit: ($event) => $options.voidStockSupplier($props.data.id),
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
                                    $options.handleClick();
                                  },
                                  type: "button",
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
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      click: () => {
                                        $options.handleClick();
                                      },
                                      type: "button",
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
                              onSubmit: ($event) => $options.voidStockSupplier($props.data.id),
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
                                      $options.handleClick();
                                    },
                                    type: "button",
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
                            onSubmit: ($event) => $options.voidStockSupplier($props.data.id),
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
                                    $options.handleClick();
                                  },
                                  type: "button",
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
                              onSubmit: ($event) => $options.voidStockSupplier($props.data.id),
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
                                      $options.handleClick();
                                    },
                                    type: "button",
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
                            onSubmit: ($event) => $options.voidStockSupplier($props.data.id),
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
                                    $options.handleClick();
                                  },
                                  type: "button",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/items/delete-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Specimen Items`
    });
  },
  data() {
    return {
      header: "Stock Items",
      loading: false,
      addIcon: render,
      viewIcon: render$1,
      deleteIcon: render$2,
      editIcon: render$3,
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Stock Management",
          link: "#"
        }
      ],
      stockItems: new Array(),
      headers: [
        { text: "name", value: "name", sortable: true },
        { text: "description", value: "description" },
        { text: "date modified", value: "updated_date" },
        { text: "actions", value: "actions" }
      ],
      search: "",
      cookie: useCookie("token")
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.getStockItem(`${this.cookie}`);
      this.loading = pending;
      if (data.value) {
        this.stockItems = data.value.map((item) => ({
          ...item,
          updated_date: moment(item.updated_date).format(dateFormat)
        }));
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$5;
  const _component_StockItemsAddDialog = __nuxt_component_1;
  const _component_CoreSearchBar = __nuxt_component_1$1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_StockItemsViewDialog = __nuxt_component_4;
  const _component_StockItemsEditDialog = __nuxt_component_5;
  const _component_StockItemsDeleteDialog = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_StockItemsAddDialog, { onUpdate: $options.init }, null, _parent));
  _push(`</div></div><div class="flex items-center justify-end mt-3">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, { search: $data.search }, null, _parent));
  _push(`</div><div class="mt-10">`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $data.stockItems
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_StockItemsViewDialog, {
          data: item,
          onUpdate: $options.init
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_StockItemsEditDialog, {
          data: item,
          onUpdate: $options.init
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_StockItemsDeleteDialog, {
          data: item,
          onUpdate: $options.init
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_StockItemsViewDialog, {
              data: item,
              onUpdate: $options.init
            }, null, 8, ["data", "onUpdate"]),
            createVNode(_component_StockItemsEditDialog, {
              data: item,
              onUpdate: $options.init
            }, null, 8, ["data", "onUpdate"]),
            createVNode(_component_StockItemsDeleteDialog, {
              data: item,
              onUpdate: $options.init
            }, null, 8, ["data", "onUpdate"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/stock-items.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stockItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { stockItems as default };
//# sourceMappingURL=stock-items-2ebf60a4.mjs.map
