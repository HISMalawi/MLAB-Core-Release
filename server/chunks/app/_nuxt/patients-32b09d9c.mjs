import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$5 } from './Breadcrumb-fc731a79.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, defineComponent, ref, watch, resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, mergeProps, openBlock, createElementBlock, createElementVNode, withDirectives, vShow, createBlock, Fragment, renderList, vModelRadio } from 'vue';
import { a as dateRange, c as constants, s as sex, e as errorMessage } from './constants-9b77e6ea.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import moment from 'moment';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/vue';
import { d as calculateAge, r as render$3, e as endpoints, f as fetchRequest, h as capitalize, g as getParameterizedUrl } from './fetch-63157596.mjs';
import { r as render$1 } from './XMarkIcon-170c776f.mjs';
import { r as render$2 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { r as render$8 } from './UserIcon-3d66d73e.mjs';
import { r as render$6, a as render$1$2 } from './PencilSquareIcon-77446728.mjs';
import { r as render$9 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
<<<<<<<< HEAD:server/chunks/app/_nuxt/patients-f72583cb.mjs
========
import { u as useHead } from './index-2cdcde44.mjs';
>>>>>>>> db8a3962de902d8d9f97ce555bb6c63b1094610b:server/chunks/app/_nuxt/patients-32b09d9c.mjs
import { P as Package } from './package-f9450e57.mjs';
import { r as render$4, a as render$1$1 } from './UsersIcon-08914159.mjs';
import { r as render$5 } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import { r as render$7 } from './ArrowPathIcon-6ff7b048.mjs';
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

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _imports_0$1 = "" + buildAssetsURL("nausea.bd1778ec.svg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    openForm: { type: Boolean },
    defaultData: {}
  },
  emits: ["onPatientCreated", "setAdjustVisibility"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const open = ref(false);
    const loading = ref(false);
    const cookie = useCookie("token");
    const props = __props;
    const details = ref({
      uuid: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      physicalAddress: "",
      dateOfBirth: "",
      estimatedDate: false,
      age: ""
    });
    const adjustVisibility = () => {
      open.value = !open.value;
      emit("setAdjustVisibility", open.value);
    };
    const submitForm = async () => {
      loading.value = true;
      const request = {
        route: endpoints.clients,
        method: "POST",
        token: `${cookie.value}`,
        body: {
          client: {
            uuid: ""
          },
          person: {
            first_name: details.value.firstName,
            middle_name: details.value.middleName,
            last_name: details.value.lastName,
            sex: details.value.gender.charAt(0),
            date_of_birth: details.value.dateOfBirth,
            birth_date_estimated: details.value.estimatedDate
          },
          client_identifiers: {
            current_village: "",
            current_district: "",
            current_traditional_authority: "",
            physical_address: details.value.physicalAddress
          }
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      loading.value = pending;
      if (data.value) {
        useNuxtApp().$toast.success(`Patient created successfully!`);
        adjustVisibility();
        invalidateInputs();
        emit("onPatientCreated", true);
        loading.value = false;
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(`${errorMessage}`);
        loading.value = false;
      }
    };
    const invalidateInputs = () => {
      details.value.uuid = "";
      details.value.firstName = "";
      details.value.middleName = "";
      details.value.lastName = "";
      details.value.gender = "";
      details.value.physicalAddress = "";
      details.value.dateOfBirth = "";
      details.value.estimatedDate = false;
      details.value.age = "";
    };
    watch(
      () => details.value.age,
      (newAge) => {
        details.value.dateOfBirth = moment().subtract(newAge, "years").format("YYYY-MM-DD");
        details.value.estimatedDate = true;
      }
    );
    watch(
      () => props.defaultData,
      (data) => {
        console.log(props.defaultData);
        details.value.firstName = data.firstName;
        details.value.lastName = data.lastName;
        details.value.gender = data.gender;
      }
    );
    watch(
      () => details.value.dateOfBirth,
      (newDateOfBirth) => {
        details.value.age = calculateAge(details.value.dateOfBirth);
        details.value.estimatedDate = false;
      }
    );
    watch(
      () => props.openForm,
      (value) => {
        open.value = value;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreOutlinedButton = __nuxt_component_1;
      const _component_CoreActionButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: open.value,
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
                                    _push6(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-8 h-8 mr-2"${_scopeId5}> Create patient `);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: _imports_0$1,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" Create patient ")
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
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx(({}, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><div class="w-full grid grid-cols-3 gap-2"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "First name",
                                      validation: "required",
                                      modelValue: details.value.firstName,
                                      "onUpdate:modelValue": ($event) => details.value.firstName = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "Middle name",
                                      modelValue: details.value.middleName,
                                      "onUpdate:modelValue": ($event) => details.value.middleName = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "Last name",
                                      validation: "required",
                                      modelValue: details.value.lastName,
                                      "onUpdate:modelValue": ($event) => details.value.lastName = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="grid grid-cols-2 gap-2 space-x-3"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}><label class="font-medium"${_scopeId5}>Date Of Birth</label><div class="w-full"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_datepicker, {
                                      placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                      "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
                                      "as-single": "",
                                      shortcuts: true,
                                      modelValue: details.value.dateOfBirth,
                                      "onUpdate:modelValue": ($event) => details.value.dateOfBirth = $event,
                                      "text-input": true,
                                      "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                                      "max-date": /* @__PURE__ */ new Date(),
                                      "ignore-time-validation": true,
                                      teleport: true,
                                      "enable-time-picker": false,
                                      formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "Age",
                                      modelValue: details.value.age,
                                      "onUpdate:modelValue": ($event) => details.value.age = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="w-full grid grid-cols-2 gap-2"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      modelValue: details.value.gender,
                                      "onUpdate:modelValue": ($event) => details.value.gender = $event,
                                      type: "radio",
                                      label: "Sex",
                                      options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                      validation: "required"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "Physical Address",
                                      validation: "required",
                                      modelValue: details.value.physicalAddress,
                                      "onUpdate:modelValue": ($event) => details.value.physicalAddress = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></div><div class="mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                        invalidateInputs();
                                      },
                                      text: "Clear form"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_CoreActionButton, {
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: unref(render$2),
                                      text: "Save changes",
                                      loading: loading.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                        createVNode("div", { class: "w-full grid grid-cols-3 gap-2" }, [
                                          createVNode(_component_FormKit, {
                                            type: "text",
                                            label: "First name",
                                            validation: "required",
                                            modelValue: details.value.firstName,
                                            "onUpdate:modelValue": ($event) => details.value.firstName = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_FormKit, {
                                            type: "text",
                                            label: "Middle name",
                                            modelValue: details.value.middleName,
                                            "onUpdate:modelValue": ($event) => details.value.middleName = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_FormKit, {
                                            type: "text",
                                            label: "Last name",
                                            validation: "required",
                                            modelValue: details.value.lastName,
                                            "onUpdate:modelValue": ($event) => details.value.lastName = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "grid grid-cols-2 gap-2 space-x-3" }, [
                                          createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                            createVNode("label", { class: "font-medium" }, "Date Of Birth"),
                                            createVNode("div", { class: "w-full" }, [
                                              createVNode(_component_datepicker, {
                                                placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                                "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
                                                "as-single": "",
                                                shortcuts: true,
                                                modelValue: details.value.dateOfBirth,
                                                "onUpdate:modelValue": ($event) => details.value.dateOfBirth = $event,
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
                                          createVNode(_component_FormKit, {
                                            type: "text",
                                            label: "Age",
                                            modelValue: details.value.age,
                                            "onUpdate:modelValue": ($event) => details.value.age = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                          createVNode(_component_FormKit, {
                                            modelValue: details.value.gender,
                                            "onUpdate:modelValue": ($event) => details.value.gender = $event,
                                            type: "radio",
                                            label: "Sex",
                                            options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                            validation: "required"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                          createVNode(_component_FormKit, {
                                            type: "text",
                                            label: "Physical Address",
                                            validation: "required",
                                            modelValue: details.value.physicalAddress,
                                            "onUpdate:modelValue": ($event) => details.value.physicalAddress = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                        createVNode(_component_CoreOutlinedButton, {
                                          type: "button",
                                          click: () => {
                                            invalidateInputs();
                                          },
                                          text: "Clear form"
                                        }, null, 8, ["click"]),
                                        createVNode(_component_CoreActionButton, {
                                          type: "submit",
                                          click: () => {
                                          },
                                          color: "success",
                                          icon: unref(render$2),
                                          text: "Save changes",
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
                                      createVNode("img", {
                                        src: _imports_0$1,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" Create patient ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: adjustVisibility }, [
                                    createVNode(unref(render$1), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  id: "patientForm",
                                  "submit-label": "Update",
                                  onSubmit: submitForm,
                                  actions: false
                                }, {
                                  default: withCtx(({}) => [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-3 gap-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "First name",
                                          validation: "required",
                                          modelValue: details.value.firstName,
                                          "onUpdate:modelValue": ($event) => details.value.firstName = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Middle name",
                                          modelValue: details.value.middleName,
                                          "onUpdate:modelValue": ($event) => details.value.middleName = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Last name",
                                          validation: "required",
                                          modelValue: details.value.lastName,
                                          "onUpdate:modelValue": ($event) => details.value.lastName = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "grid grid-cols-2 gap-2 space-x-3" }, [
                                        createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                          createVNode("label", { class: "font-medium" }, "Date Of Birth"),
                                          createVNode("div", { class: "w-full" }, [
                                            createVNode(_component_datepicker, {
                                              placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                              "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
                                              "as-single": "",
                                              shortcuts: true,
                                              modelValue: details.value.dateOfBirth,
                                              "onUpdate:modelValue": ($event) => details.value.dateOfBirth = $event,
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
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Age",
                                          modelValue: details.value.age,
                                          "onUpdate:modelValue": ($event) => details.value.age = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                        createVNode(_component_FormKit, {
                                          modelValue: details.value.gender,
                                          "onUpdate:modelValue": ($event) => details.value.gender = $event,
                                          type: "radio",
                                          label: "Sex",
                                          options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                          validation: "required"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Physical Address",
                                          validation: "required",
                                          modelValue: details.value.physicalAddress,
                                          "onUpdate:modelValue": ($event) => details.value.physicalAddress = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreOutlinedButton, {
                                        type: "button",
                                        click: () => {
                                          invalidateInputs();
                                        },
                                        text: "Clear form"
                                      }, null, 8, ["click"]),
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        click: () => {
                                        },
                                        color: "success",
                                        icon: unref(render$2),
                                        text: "Save changes",
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
                                    createVNode("img", {
                                      src: _imports_0$1,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" Create patient ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: adjustVisibility }, [
                                  createVNode(unref(render$1), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx(({}) => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-3 gap-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "First name",
                                        validation: "required",
                                        modelValue: details.value.firstName,
                                        "onUpdate:modelValue": ($event) => details.value.firstName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Middle name",
                                        modelValue: details.value.middleName,
                                        "onUpdate:modelValue": ($event) => details.value.middleName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Last name",
                                        validation: "required",
                                        modelValue: details.value.lastName,
                                        "onUpdate:modelValue": ($event) => details.value.lastName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-2 gap-2 space-x-3" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode("label", { class: "font-medium" }, "Date Of Birth"),
                                        createVNode("div", { class: "w-full" }, [
                                          createVNode(_component_datepicker, {
                                            placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                            "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
                                            "as-single": "",
                                            shortcuts: true,
                                            modelValue: details.value.dateOfBirth,
                                            "onUpdate:modelValue": ($event) => details.value.dateOfBirth = $event,
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
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Age",
                                        modelValue: details.value.age,
                                        "onUpdate:modelValue": ($event) => details.value.age = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                      createVNode(_component_FormKit, {
                                        modelValue: details.value.gender,
                                        "onUpdate:modelValue": ($event) => details.value.gender = $event,
                                        type: "radio",
                                        label: "Sex",
                                        options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Physical Address",
                                        validation: "required",
                                        modelValue: details.value.physicalAddress,
                                        "onUpdate:modelValue": ($event) => details.value.physicalAddress = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                        invalidateInputs();
                                      },
                                      text: "Clear form"
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: unref(render$2),
                                      text: "Save changes",
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
                                      createVNode("img", {
                                        src: _imports_0$1,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" Create patient ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: adjustVisibility }, [
                                    createVNode(unref(render$1), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  id: "patientForm",
                                  "submit-label": "Update",
                                  onSubmit: submitForm,
                                  actions: false
                                }, {
                                  default: withCtx(({}) => [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-3 gap-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "First name",
                                          validation: "required",
                                          modelValue: details.value.firstName,
                                          "onUpdate:modelValue": ($event) => details.value.firstName = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Middle name",
                                          modelValue: details.value.middleName,
                                          "onUpdate:modelValue": ($event) => details.value.middleName = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Last name",
                                          validation: "required",
                                          modelValue: details.value.lastName,
                                          "onUpdate:modelValue": ($event) => details.value.lastName = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "grid grid-cols-2 gap-2 space-x-3" }, [
                                        createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                          createVNode("label", { class: "font-medium" }, "Date Of Birth"),
                                          createVNode("div", { class: "w-full" }, [
                                            createVNode(_component_datepicker, {
                                              placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                              "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
                                              "as-single": "",
                                              shortcuts: true,
                                              modelValue: details.value.dateOfBirth,
                                              "onUpdate:modelValue": ($event) => details.value.dateOfBirth = $event,
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
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Age",
                                          modelValue: details.value.age,
                                          "onUpdate:modelValue": ($event) => details.value.age = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                        createVNode(_component_FormKit, {
                                          modelValue: details.value.gender,
                                          "onUpdate:modelValue": ($event) => details.value.gender = $event,
                                          type: "radio",
                                          label: "Sex",
                                          options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                          validation: "required"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Physical Address",
                                          validation: "required",
                                          modelValue: details.value.physicalAddress,
                                          "onUpdate:modelValue": ($event) => details.value.physicalAddress = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreOutlinedButton, {
                                        type: "button",
                                        click: () => {
                                          invalidateInputs();
                                        },
                                        text: "Clear form"
                                      }, null, 8, ["click"]),
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        click: () => {
                                        },
                                        color: "success",
                                        icon: unref(render$2),
                                        text: "Save changes",
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
                                      src: _imports_0$1,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" Create patient ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: adjustVisibility }, [
                                  createVNode(unref(render$1), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                id: "patientForm",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx(({}) => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-3 gap-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "First name",
                                        validation: "required",
                                        modelValue: details.value.firstName,
                                        "onUpdate:modelValue": ($event) => details.value.firstName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Middle name",
                                        modelValue: details.value.middleName,
                                        "onUpdate:modelValue": ($event) => details.value.middleName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Last name",
                                        validation: "required",
                                        modelValue: details.value.lastName,
                                        "onUpdate:modelValue": ($event) => details.value.lastName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-2 gap-2 space-x-3" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode("label", { class: "font-medium" }, "Date Of Birth"),
                                        createVNode("div", { class: "w-full" }, [
                                          createVNode(_component_datepicker, {
                                            placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                            "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
                                            "as-single": "",
                                            shortcuts: true,
                                            modelValue: details.value.dateOfBirth,
                                            "onUpdate:modelValue": ($event) => details.value.dateOfBirth = $event,
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
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Age",
                                        modelValue: details.value.age,
                                        "onUpdate:modelValue": ($event) => details.value.age = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                      createVNode(_component_FormKit, {
                                        modelValue: details.value.gender,
                                        "onUpdate:modelValue": ($event) => details.value.gender = $event,
                                        type: "radio",
                                        label: "Sex",
                                        options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Physical Address",
                                        validation: "required",
                                        modelValue: details.value.physicalAddress,
                                        "onUpdate:modelValue": ($event) => details.value.physicalAddress = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                        invalidateInputs();
                                      },
                                      text: "Clear form"
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: unref(render$2),
                                      text: "Save changes",
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/patients/add-dialog/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["action-completed"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const open = ref(false);
    const loading = ref(false);
    const cookie = useCookie("token");
    const details = ref({
      firstName: "",
      lastName: "",
      gender: ""
    });
    const adjustVisibility = () => open.value = !open.value;
    const handleSearchPatient = async () => {
      loading.value = true;
      const request = {
        route: getParameterizedUrl(endpoints.client.search, {
          first_name: details.value.firstName,
          last_name: details.value.lastName,
          gender: details.value.gender
        }),
        method: "GET",
        token: `${cookie.value}`
      };
      const v = await fetchRequest(request);
      loading.value = v.pending;
      if (v.data.value) {
        adjustVisibility();
        emit("action-completed", { patient: v.data.value, defaults: details.value });
        details.value = {
          firstName: "",
          lastName: "",
          gender: ""
        };
      }
      if (v.error.value) {
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
      loading.value = open.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreActionButton = __nuxt_component_0;
      const _component_FormKit = resolveComponent("FormKit");
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        text: "Find/Create Patient",
        color: "primary",
        icon: unref(render$3),
        click: adjustVisibility
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
                                    _push6(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-8 h-8 mr-2"${_scopeId5}> ${ssrInterpolate("Find or Create patient")}`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: _imports_0$1,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" " + toDisplayString("Find or Create patient"))
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
                                onSubmit: handleSearchPatient,
                                actions: false
                              }, {
                                default: withCtx(({}, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><div class="w-full grid grid-cols-2 gap-2"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "First name",
                                      validation: "required",
                                      modelValue: unref(details).firstName,
                                      "onUpdate:modelValue": ($event) => unref(details).firstName = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "Last name",
                                      validation: "required",
                                      modelValue: unref(details).lastName,
                                      "onUpdate:modelValue": ($event) => unref(details).lastName = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="items-center"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      modelValue: unref(details).gender,
                                      "onUpdate:modelValue": ($event) => unref(details).gender = $event,
                                      type: "radio",
                                      label: "Gender",
                                      options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                      validation: "required"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></div><div class="mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_CoreActionButton, {
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: unref(render),
                                      text: "Find",
                                      loading: unref(loading)
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                        createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                          createVNode(_component_FormKit, {
                                            type: "text",
                                            label: "First name",
                                            validation: "required",
                                            modelValue: unref(details).firstName,
                                            "onUpdate:modelValue": ($event) => unref(details).firstName = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_FormKit, {
                                            type: "text",
                                            label: "Last name",
                                            validation: "required",
                                            modelValue: unref(details).lastName,
                                            "onUpdate:modelValue": ($event) => unref(details).lastName = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "items-center" }, [
                                          createVNode(_component_FormKit, {
                                            modelValue: unref(details).gender,
                                            "onUpdate:modelValue": ($event) => unref(details).gender = $event,
                                            type: "radio",
                                            label: "Gender",
                                            options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                            validation: "required"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                        createVNode(_component_CoreActionButton, {
                                          type: "submit",
                                          click: () => {
                                          },
                                          color: "success",
                                          icon: unref(render),
                                          text: "Find",
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
                                        src: _imports_0$1,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" " + toDisplayString("Find or Create patient"))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: adjustVisibility }, [
                                    createVNode(unref(render$1), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  onSubmit: handleSearchPatient,
                                  actions: false
                                }, {
                                  default: withCtx(({}) => [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "First name",
                                          validation: "required",
                                          modelValue: unref(details).firstName,
                                          "onUpdate:modelValue": ($event) => unref(details).firstName = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Last name",
                                          validation: "required",
                                          modelValue: unref(details).lastName,
                                          "onUpdate:modelValue": ($event) => unref(details).lastName = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "items-center" }, [
                                        createVNode(_component_FormKit, {
                                          modelValue: unref(details).gender,
                                          "onUpdate:modelValue": ($event) => unref(details).gender = $event,
                                          type: "radio",
                                          label: "Gender",
                                          options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                          validation: "required"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        click: () => {
                                        },
                                        color: "success",
                                        icon: unref(render),
                                        text: "Find",
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
                                      src: _imports_0$1,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" " + toDisplayString("Find or Create patient"))
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: adjustVisibility }, [
                                  createVNode(unref(render$1), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                onSubmit: handleSearchPatient,
                                actions: false
                              }, {
                                default: withCtx(({}) => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "First name",
                                        validation: "required",
                                        modelValue: unref(details).firstName,
                                        "onUpdate:modelValue": ($event) => unref(details).firstName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Last name",
                                        validation: "required",
                                        modelValue: unref(details).lastName,
                                        "onUpdate:modelValue": ($event) => unref(details).lastName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "items-center" }, [
                                      createVNode(_component_FormKit, {
                                        modelValue: unref(details).gender,
                                        "onUpdate:modelValue": ($event) => unref(details).gender = $event,
                                        type: "radio",
                                        label: "Gender",
                                        options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: unref(render),
                                      text: "Find",
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
                                        src: _imports_0$1,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" " + toDisplayString("Find or Create patient"))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: adjustVisibility }, [
                                    createVNode(unref(render$1), { class: "w-5 h-5" })
                                  ])
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  onSubmit: handleSearchPatient,
                                  actions: false
                                }, {
                                  default: withCtx(({}) => [
                                    createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                      createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "First name",
                                          validation: "required",
                                          modelValue: unref(details).firstName,
                                          "onUpdate:modelValue": ($event) => unref(details).firstName = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_FormKit, {
                                          type: "text",
                                          label: "Last name",
                                          validation: "required",
                                          modelValue: unref(details).lastName,
                                          "onUpdate:modelValue": ($event) => unref(details).lastName = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "items-center" }, [
                                        createVNode(_component_FormKit, {
                                          modelValue: unref(details).gender,
                                          "onUpdate:modelValue": ($event) => unref(details).gender = $event,
                                          type: "radio",
                                          label: "Gender",
                                          options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                          validation: "required"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        click: () => {
                                        },
                                        color: "success",
                                        icon: unref(render),
                                        text: "Find",
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
                                      src: _imports_0$1,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" " + toDisplayString("Find or Create patient"))
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: adjustVisibility }, [
                                  createVNode(unref(render$1), { class: "w-5 h-5" })
                                ])
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                onSubmit: handleSearchPatient,
                                actions: false
                              }, {
                                default: withCtx(({}) => [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "First name",
                                        validation: "required",
                                        modelValue: unref(details).firstName,
                                        "onUpdate:modelValue": ($event) => unref(details).firstName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Last name",
                                        validation: "required",
                                        modelValue: unref(details).lastName,
                                        "onUpdate:modelValue": ($event) => unref(details).lastName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "items-center" }, [
                                      createVNode(_component_FormKit, {
                                        modelValue: unref(details).gender,
                                        "onUpdate:modelValue": ($event) => unref(details).gender = $event,
                                        type: "radio",
                                        label: "Gender",
                                        options: "sex" in _ctx ? _ctx.sex : unref(sex),
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: unref(render),
                                      text: "Find",
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/patients/find-dialog/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$1,
    UserIcon: render$8
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  /**
   * @returns model values
   */
  data() {
    return {
      details: new Object(),
      open: false,
      addIcon: render$3,
      viewIcon: render$1$2,
      saveIcon: render$2,
      clearIcon: render$9,
      cookie: useCookie("token"),
      loading: false
    };
  },
  methods: {
    /**
     * @method init
     * @returns Promise @type void
     */
    async init() {
      this.adjustVisibility();
      this.loading = true;
      const request = {
        route: `${endpoints.clients}/${this.data.client_id}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, pending, error } = await fetchRequest(request);
      if (data.value) {
        this.details = data.value;
        this.loading = false;
      }
      if (error.value) {
        console.log(error.value);
        useNuxtApp().$toast.error(errorMessage);
      }
    },
    /**
     * @method adjustVisibility visibility of the dialog
     * @returns @type void
     */
    adjustVisibility() {
      this.open = !this.open;
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
  const _component_CoreLoader = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "View",
    color: "success",
    icon: $data.viewIcon,
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-8 h-8 mr-2"${_scopeId5}> View patient `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View patient ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}" class="flex items-center justify-center mx-auto my-20"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreLoader, { loading: $data.loading }, null, _parent5, _scopeId4));
                          _push5(`</div><div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}" class="mt-2 space-y-3 px-5 py-5"${_scopeId4}><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Name</label><p class="underline"${_scopeId4}>${ssrInterpolate(`${$data.details.first_name} ${$data.details.last_name}`)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>National Patient ID</label><p class="underline"${_scopeId4}>${ssrInterpolate($data.details.npid)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Date Of Birth</label><p class="underline"${_scopeId4}>${ssrInterpolate($data.details.date_of_birth)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Sex</label><p class="underline"${_scopeId4}>${ssrInterpolate($data.details.sex)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Physical Address</label><p class="underline"${_scopeId4}>${ssrInterpolate($data.details.physical_address)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View patient ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.adjustVisibility }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                              createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                            ], 512), [
                              [vShow, $data.loading]
                            ]),
                            withDirectives(createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", { class: "underline" }, toDisplayString(`${$data.details.first_name} ${$data.details.last_name}`), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "National Patient ID"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.npid), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Date Of Birth"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.date_of_birth), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Sex"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.sex), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Physical Address"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.physical_address), 1)
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
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" View patient ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.adjustVisibility }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                            createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                          ], 512), [
                            [vShow, $data.loading]
                          ]),
                          withDirectives(createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                              createVNode("p", { class: "underline" }, toDisplayString(`${$data.details.first_name} ${$data.details.last_name}`), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "National Patient ID"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.npid), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Date Of Birth"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.date_of_birth), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Sex"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.sex), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Physical Address"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.physical_address), 1)
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
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" View patient ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.adjustVisibility }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                              createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                            ], 512), [
                              [vShow, $data.loading]
                            ]),
                            withDirectives(createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", { class: "underline" }, toDisplayString(`${$data.details.first_name} ${$data.details.last_name}`), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "National Patient ID"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.npid), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Date Of Birth"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.date_of_birth), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Sex"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.sex), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Physical Address"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.physical_address), 1)
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
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" View patient ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.adjustVisibility }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                            createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                          ], 512), [
                            [vShow, $data.loading]
                          ]),
                          withDirectives(createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                              createVNode("p", { class: "underline" }, toDisplayString(`${$data.details.first_name} ${$data.details.last_name}`), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "National Patient ID"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.npid), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Date Of Birth"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.date_of_birth), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Sex"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.sex), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Physical Address"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.physical_address), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/patients/view-dialog/index.vue");
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
    UserIcon: render$8
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      details: new Object(),
      open: false,
      addIcon: render$3,
      saveIcon: render$2,
      clearIcon: render$9,
      editIcon: render$6,
      loading: false,
      cookie: useCookie("token"),
      estimatedDate: false,
      age: null
    };
  },
  methods: {
    async init() {
      this.adjustVisibility();
      const request = {
        route: `${endpoints.clients}/${this.data.client_id}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        this.details = data.value;
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
      }
    },
    /***
    * @method submitForm
    * @returns Promise of @type void
    * @param @type void
    */
    async submitForm() {
      this.loading = true;
      const request = {
        route: `${endpoints.clients}/${this.data.client_id}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {
          "client": {
            "uuid": this.details.uuid
          },
          "person": {
            "first_name": this.details.first_name,
            "middle_name": this.details.middle_name,
            "last_name": this.details.last_name,
            "sex": this.details.sex.charAt(0),
            "date_of_birth": this.details.date_of_birth,
            "birth_date_estimated": this.estimatedDate
          },
          "client_identifiers": [
            {
              "type": "physical_address",
              "value": this.details.physical_address
            },
            {
              "type": "phone",
              "value": this.details.phone
            },
            {
              "type": "npid",
              "value": this.details.npid
            }
          ]
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        useNuxtApp().$toast.success(`Patient updated successfully!`);
        this.adjustVisibility();
        this.$emit("update", true);
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    },
    adjustVisibility() {
      this.open = !this.open;
    }
  },
  watch: {
    "details.date_of_birth"(newValue) {
      this.age = Number(calculateAge(newValue));
      this.details.date_of_birth = moment().subtract(Number(this.age), "years").format("YYYY-MM-DD");
      this.estimatedDate = true;
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
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreOutlinedButton = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Edit",
    color: "primary",
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-8 h-8 mr-2"${_scopeId5}> Edit patient `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit patient ")
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
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><div class="w-full grid grid-cols-2 gap-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Patient ID",
                                  modelValue: $data.details.uuid,
                                  "onUpdate:modelValue": ($event) => $data.details.uuid = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "National Patient ID",
                                  modelValue: $data.details.npid,
                                  "onUpdate:modelValue": ($event) => $data.details.npid = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full grid grid-cols-3 gap-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "First name",
                                  validation: "required",
                                  modelValue: $data.details.first_name,
                                  "onUpdate:modelValue": ($event) => $data.details.first_name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Middle name",
                                  modelValue: $data.details.middle_name,
                                  "onUpdate:modelValue": ($event) => $data.details.middle_name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Last name",
                                  validation: "required",
                                  modelValue: $data.details.last_name,
                                  "onUpdate:modelValue": ($event) => $data.details.last_name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="grid grid-cols-2 gap-2 space-x-3"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}><label class="font-medium"${_scopeId5}>Date Of Birth</label><div class="w-full"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_datepicker, {
                                  placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                  "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                  "as-single": "",
                                  shortcuts: true,
                                  modelValue: $data.details.date_of_birth,
                                  "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event,
                                  "text-input": true,
                                  "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                                  "max-date": /* @__PURE__ */ new Date(),
                                  "ignore-time-validation": true,
                                  "enable-time-picker": false,
                                  teleport: true,
                                  formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Age",
                                  modelValue: $data.age,
                                  "onUpdate:modelValue": ($event) => $data.age = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="lex items-center"${_scopeId5}><label class="mr-5 font-medium"${_scopeId5}>Sex</label><!--[-->`);
                                ssrRenderList("sex" in _ctx ? _ctx.sex : unref(sex), (item, index) => {
                                  _push6(`<label class="flex items-center mr-2"${_scopeId5}><input${ssrIncludeBooleanAttr(true) ? " required" : ""}${ssrIncludeBooleanAttr(ssrLooseEqual($data.details.sex, item.value)) ? " checked" : ""}${ssrRenderAttr("value", item.value)} type="radio" placeholder="Male" class="w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"${_scopeId5}><span class="ml-2"${_scopeId5}>${ssrInterpolate(item.name)}</span></label>`);
                                });
                                _push6(`<!--]--></div><div class="w-full grid grid-cols-2 gap-2"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Physical Address",
                                  validation: "required",
                                  modelValue: $data.details.physical_address,
                                  "onUpdate:modelValue": ($event) => $data.details.physical_address = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "tel",
                                  label: "Phone number",
                                  "prefix-icon": "telephone",
                                  modelValue: $data.details.phone,
                                  "onUpdate:modelValue": ($event) => $data.details.phone = $event,
                                  "prefix-icon-class": "inline-block w-5 h-5 text-gray-700 absolute mt-4 ml-2 mr-2",
                                  "validation-visibility": "dirty"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                  },
                                  text: "Clear form"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save changes",
                                  loading: $data.loading
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Patient ID",
                                        modelValue: $data.details.uuid,
                                        "onUpdate:modelValue": ($event) => $data.details.uuid = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "National Patient ID",
                                        modelValue: $data.details.npid,
                                        "onUpdate:modelValue": ($event) => $data.details.npid = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-3 gap-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "First name",
                                        validation: "required",
                                        modelValue: $data.details.first_name,
                                        "onUpdate:modelValue": ($event) => $data.details.first_name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Middle name",
                                        modelValue: $data.details.middle_name,
                                        "onUpdate:modelValue": ($event) => $data.details.middle_name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Last name",
                                        validation: "required",
                                        modelValue: $data.details.last_name,
                                        "onUpdate:modelValue": ($event) => $data.details.last_name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-2 gap-2 space-x-3" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode("label", { class: "font-medium" }, "Date Of Birth"),
                                        createVNode("div", { class: "w-full" }, [
                                          createVNode(_component_datepicker, {
                                            placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                            "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                            "as-single": "",
                                            shortcuts: true,
                                            modelValue: $data.details.date_of_birth,
                                            "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event,
                                            "text-input": true,
                                            "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                                            "max-date": /* @__PURE__ */ new Date(),
                                            "ignore-time-validation": true,
                                            "enable-time-picker": false,
                                            teleport: true,
                                            formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                                          }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "year-range", "max-date", "formatter"])
                                        ])
                                      ]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Age",
                                        modelValue: $data.age,
                                        "onUpdate:modelValue": ($event) => $data.age = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "lex items-center" }, [
                                      createVNode("label", { class: "mr-5 font-medium" }, "Sex"),
                                      (openBlock(true), createBlock(Fragment, null, renderList("sex" in _ctx ? _ctx.sex : unref(sex), (item, index) => {
                                        return openBlock(), createBlock("label", {
                                          class: "flex items-center mr-2",
                                          key: index
                                        }, [
                                          withDirectives(createVNode("input", {
                                            required: true,
                                            "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                            value: item.value,
                                            type: "radio",
                                            placeholder: "Male",
                                            class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                          }, null, 8, ["onUpdate:modelValue", "value"]), [
                                            [vModelRadio, $data.details.sex]
                                          ]),
                                          createVNode("span", { class: "ml-2" }, toDisplayString(item.name), 1)
                                        ]);
                                      }), 128))
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Physical Address",
                                        validation: "required",
                                        modelValue: $data.details.physical_address,
                                        "onUpdate:modelValue": ($event) => $data.details.physical_address = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "tel",
                                        label: "Phone number",
                                        "prefix-icon": "telephone",
                                        modelValue: $data.details.phone,
                                        "onUpdate:modelValue": ($event) => $data.details.phone = $event,
                                        "prefix-icon-class": "inline-block w-5 h-5 text-gray-700 absolute mt-4 ml-2 mr-2",
                                        "validation-visibility": "dirty"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                      },
                                      text: "Clear form"
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: $data.saveIcon,
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
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit patient ")
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
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Patient ID",
                                      modelValue: $data.details.uuid,
                                      "onUpdate:modelValue": ($event) => $data.details.uuid = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "National Patient ID",
                                      modelValue: $data.details.npid,
                                      "onUpdate:modelValue": ($event) => $data.details.npid = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-3 gap-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "First name",
                                      validation: "required",
                                      modelValue: $data.details.first_name,
                                      "onUpdate:modelValue": ($event) => $data.details.first_name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Middle name",
                                      modelValue: $data.details.middle_name,
                                      "onUpdate:modelValue": ($event) => $data.details.middle_name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Last name",
                                      validation: "required",
                                      modelValue: $data.details.last_name,
                                      "onUpdate:modelValue": ($event) => $data.details.last_name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-2 gap-2 space-x-3" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Date Of Birth"),
                                      createVNode("div", { class: "w-full" }, [
                                        createVNode(_component_datepicker, {
                                          placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                          "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                          "as-single": "",
                                          shortcuts: true,
                                          modelValue: $data.details.date_of_birth,
                                          "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event,
                                          "text-input": true,
                                          "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                                          "max-date": /* @__PURE__ */ new Date(),
                                          "ignore-time-validation": true,
                                          "enable-time-picker": false,
                                          teleport: true,
                                          formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                                        }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "year-range", "max-date", "formatter"])
                                      ])
                                    ]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Age",
                                      modelValue: $data.age,
                                      "onUpdate:modelValue": ($event) => $data.age = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "lex items-center" }, [
                                    createVNode("label", { class: "mr-5 font-medium" }, "Sex"),
                                    (openBlock(true), createBlock(Fragment, null, renderList("sex" in _ctx ? _ctx.sex : unref(sex), (item, index) => {
                                      return openBlock(), createBlock("label", {
                                        class: "flex items-center mr-2",
                                        key: index
                                      }, [
                                        withDirectives(createVNode("input", {
                                          required: true,
                                          "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                          value: item.value,
                                          type: "radio",
                                          placeholder: "Male",
                                          class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                        }, null, 8, ["onUpdate:modelValue", "value"]), [
                                          [vModelRadio, $data.details.sex]
                                        ]),
                                        createVNode("span", { class: "ml-2" }, toDisplayString(item.name), 1)
                                      ]);
                                    }), 128))
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Physical Address",
                                      validation: "required",
                                      modelValue: $data.details.physical_address,
                                      "onUpdate:modelValue": ($event) => $data.details.physical_address = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "tel",
                                      label: "Phone number",
                                      "prefix-icon": "telephone",
                                      modelValue: $data.details.phone,
                                      "onUpdate:modelValue": ($event) => $data.details.phone = $event,
                                      "prefix-icon-class": "inline-block w-5 h-5 text-gray-700 absolute mt-4 ml-2 mr-2",
                                      "validation-visibility": "dirty"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                    },
                                    text: "Clear form"
                                  }),
                                  createVNode(_component_CoreActionButton, {
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.saveIcon,
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
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Edit patient ")
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
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Patient ID",
                                    modelValue: $data.details.uuid,
                                    "onUpdate:modelValue": ($event) => $data.details.uuid = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "National Patient ID",
                                    modelValue: $data.details.npid,
                                    "onUpdate:modelValue": ($event) => $data.details.npid = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-3 gap-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "First name",
                                    validation: "required",
                                    modelValue: $data.details.first_name,
                                    "onUpdate:modelValue": ($event) => $data.details.first_name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Middle name",
                                    modelValue: $data.details.middle_name,
                                    "onUpdate:modelValue": ($event) => $data.details.middle_name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Last name",
                                    validation: "required",
                                    modelValue: $data.details.last_name,
                                    "onUpdate:modelValue": ($event) => $data.details.last_name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-2 gap-2 space-x-3" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Date Of Birth"),
                                    createVNode("div", { class: "w-full" }, [
                                      createVNode(_component_datepicker, {
                                        placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                        "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                        "as-single": "",
                                        shortcuts: true,
                                        modelValue: $data.details.date_of_birth,
                                        "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event,
                                        "text-input": true,
                                        "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                                        "max-date": /* @__PURE__ */ new Date(),
                                        "ignore-time-validation": true,
                                        "enable-time-picker": false,
                                        teleport: true,
                                        formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                                      }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "year-range", "max-date", "formatter"])
                                    ])
                                  ]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Age",
                                    modelValue: $data.age,
                                    "onUpdate:modelValue": ($event) => $data.age = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "lex items-center" }, [
                                  createVNode("label", { class: "mr-5 font-medium" }, "Sex"),
                                  (openBlock(true), createBlock(Fragment, null, renderList("sex" in _ctx ? _ctx.sex : unref(sex), (item, index) => {
                                    return openBlock(), createBlock("label", {
                                      class: "flex items-center mr-2",
                                      key: index
                                    }, [
                                      withDirectives(createVNode("input", {
                                        required: true,
                                        "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                        value: item.value,
                                        type: "radio",
                                        placeholder: "Male",
                                        class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                      }, null, 8, ["onUpdate:modelValue", "value"]), [
                                        [vModelRadio, $data.details.sex]
                                      ]),
                                      createVNode("span", { class: "ml-2" }, toDisplayString(item.name), 1)
                                    ]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Physical Address",
                                    validation: "required",
                                    modelValue: $data.details.physical_address,
                                    "onUpdate:modelValue": ($event) => $data.details.physical_address = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "tel",
                                    label: "Phone number",
                                    "prefix-icon": "telephone",
                                    modelValue: $data.details.phone,
                                    "onUpdate:modelValue": ($event) => $data.details.phone = $event,
                                    "prefix-icon-class": "inline-block w-5 h-5 text-gray-700 absolute mt-4 ml-2 mr-2",
                                    "validation-visibility": "dirty"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                  },
                                  text: "Clear form"
                                }),
                                createVNode(_component_CoreActionButton, {
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
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
                                    src: _imports_0$1,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit patient ")
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
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Patient ID",
                                      modelValue: $data.details.uuid,
                                      "onUpdate:modelValue": ($event) => $data.details.uuid = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "National Patient ID",
                                      modelValue: $data.details.npid,
                                      "onUpdate:modelValue": ($event) => $data.details.npid = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-3 gap-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "First name",
                                      validation: "required",
                                      modelValue: $data.details.first_name,
                                      "onUpdate:modelValue": ($event) => $data.details.first_name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Middle name",
                                      modelValue: $data.details.middle_name,
                                      "onUpdate:modelValue": ($event) => $data.details.middle_name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Last name",
                                      validation: "required",
                                      modelValue: $data.details.last_name,
                                      "onUpdate:modelValue": ($event) => $data.details.last_name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-2 gap-2 space-x-3" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Date Of Birth"),
                                      createVNode("div", { class: "w-full" }, [
                                        createVNode(_component_datepicker, {
                                          placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                          "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                          "as-single": "",
                                          shortcuts: true,
                                          modelValue: $data.details.date_of_birth,
                                          "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event,
                                          "text-input": true,
                                          "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                                          "max-date": /* @__PURE__ */ new Date(),
                                          "ignore-time-validation": true,
                                          "enable-time-picker": false,
                                          teleport: true,
                                          formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                                        }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "year-range", "max-date", "formatter"])
                                      ])
                                    ]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Age",
                                      modelValue: $data.age,
                                      "onUpdate:modelValue": ($event) => $data.age = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "lex items-center" }, [
                                    createVNode("label", { class: "mr-5 font-medium" }, "Sex"),
                                    (openBlock(true), createBlock(Fragment, null, renderList("sex" in _ctx ? _ctx.sex : unref(sex), (item, index) => {
                                      return openBlock(), createBlock("label", {
                                        class: "flex items-center mr-2",
                                        key: index
                                      }, [
                                        withDirectives(createVNode("input", {
                                          required: true,
                                          "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                          value: item.value,
                                          type: "radio",
                                          placeholder: "Male",
                                          class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                        }, null, 8, ["onUpdate:modelValue", "value"]), [
                                          [vModelRadio, $data.details.sex]
                                        ]),
                                        createVNode("span", { class: "ml-2" }, toDisplayString(item.name), 1)
                                      ]);
                                    }), 128))
                                  ]),
                                  createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Physical Address",
                                      validation: "required",
                                      modelValue: $data.details.physical_address,
                                      "onUpdate:modelValue": ($event) => $data.details.physical_address = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "tel",
                                      label: "Phone number",
                                      "prefix-icon": "telephone",
                                      modelValue: $data.details.phone,
                                      "onUpdate:modelValue": ($event) => $data.details.phone = $event,
                                      "prefix-icon-class": "inline-block w-5 h-5 text-gray-700 absolute mt-4 ml-2 mr-2",
                                      "validation-visibility": "dirty"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                    },
                                    text: "Clear form"
                                  }),
                                  createVNode(_component_CoreActionButton, {
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.saveIcon,
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
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Edit patient ")
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
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Patient ID",
                                    modelValue: $data.details.uuid,
                                    "onUpdate:modelValue": ($event) => $data.details.uuid = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "National Patient ID",
                                    modelValue: $data.details.npid,
                                    "onUpdate:modelValue": ($event) => $data.details.npid = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-3 gap-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "First name",
                                    validation: "required",
                                    modelValue: $data.details.first_name,
                                    "onUpdate:modelValue": ($event) => $data.details.first_name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Middle name",
                                    modelValue: $data.details.middle_name,
                                    "onUpdate:modelValue": ($event) => $data.details.middle_name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Last name",
                                    validation: "required",
                                    modelValue: $data.details.last_name,
                                    "onUpdate:modelValue": ($event) => $data.details.last_name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-2 gap-2 space-x-3" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Date Of Birth"),
                                    createVNode("div", { class: "w-full" }, [
                                      createVNode(_component_datepicker, {
                                        placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                                        "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
                                        "as-single": "",
                                        shortcuts: true,
                                        modelValue: $data.details.date_of_birth,
                                        "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event,
                                        "text-input": true,
                                        "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                                        "max-date": /* @__PURE__ */ new Date(),
                                        "ignore-time-validation": true,
                                        "enable-time-picker": false,
                                        teleport: true,
                                        formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                                      }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "year-range", "max-date", "formatter"])
                                    ])
                                  ]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Age",
                                    modelValue: $data.age,
                                    "onUpdate:modelValue": ($event) => $data.age = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "lex items-center" }, [
                                  createVNode("label", { class: "mr-5 font-medium" }, "Sex"),
                                  (openBlock(true), createBlock(Fragment, null, renderList("sex" in _ctx ? _ctx.sex : unref(sex), (item, index) => {
                                    return openBlock(), createBlock("label", {
                                      class: "flex items-center mr-2",
                                      key: index
                                    }, [
                                      withDirectives(createVNode("input", {
                                        required: true,
                                        "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                        value: item.value,
                                        type: "radio",
                                        placeholder: "Male",
                                        class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                      }, null, 8, ["onUpdate:modelValue", "value"]), [
                                        [vModelRadio, $data.details.sex]
                                      ]),
                                      createVNode("span", { class: "ml-2" }, toDisplayString(item.name), 1)
                                    ]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "w-full grid grid-cols-2 gap-2" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Physical Address",
                                    validation: "required",
                                    modelValue: $data.details.physical_address,
                                    "onUpdate:modelValue": ($event) => $data.details.physical_address = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "tel",
                                    label: "Phone number",
                                    "prefix-icon": "telephone",
                                    modelValue: $data.details.phone,
                                    "onUpdate:modelValue": ($event) => $data.details.phone = $event,
                                    "prefix-icon-class": "inline-block w-5 h-5 text-gray-700 absolute mt-4 ml-2 mr-2",
                                    "validation-visibility": "dirty"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                  },
                                  text: "Clear form"
                                }),
                                createVNode(_component_CoreActionButton, {
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/patients/edit-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    UsersIcon: render$4,
    PlusIcon: render$3,
    MagnifyingGlassIcon: render$5
  },
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Patients`
    });
  },
  data() {
    return {
      loading: false,
      openCreatePatientForm: false,
      newIcon: render$1$1,
      defaultData: {},
      editIcon: render$6,
      viewIcon: render$1$2,
      refreshIcon: render$7,
      headers: new Array(
        { text: "patient no", value: "client_id", sortable: true },
        { text: "name", value: "name", sortable: true },
        { text: "sex", value: "sex", sortable: true },
        { text: "date of birth", value: "date_of_birth", sortable: true },
        { text: "physical address", value: "physical_address", sortable: true },
        { text: "actions", value: "actions" }
      ),
      pages: [
        {
          name: "Home",
          link: "/home"
        }
      ],
      data: {},
      addIcon: render$3,
      patients: new Array(),
      cookie: useCookie("token"),
      serverItemsLength: 0,
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      },
      searchField: "name",
      search: "",
      searchValue: "",
      createPatient: false,
      showSearch: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    /**
     * @method updateSearch get emitted value for search value
     * @param value string as search value
     * @return void
     */
    updateSearch(value) {
      this.searchValue = value;
      this.search = value;
      this.updatePatients(true);
    },
    /***
     * @method init loads patients
     * @param void
     * @returns promise of @type void
     */
    async init() {
      this.createPatient = false;
      this.defaultData = {
        firstName: "",
        lastName: "",
        middleName: "",
        gender: ""
      };
      this.loading = true;
      const { page, rowsPerPage } = this.serverOptions;
      const request = {
        route: `${endpoints.clients}?page=${page}&per_page=${rowsPerPage}&search=${this.search}`,
        method: "GET",
        token: `${this.cookie}`,
        body: {}
      };
      let { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.patients = data.value.clients;
        this.serverItemsLength = data.value.meta.total_count;
      }
      if (error.value) {
        console.error(error.value.data);
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    },
    /***
     * @method updatePatients reload patients
     * @param value @type any
     * @returns void
     */
    updatePatients(value) {
      if (typeof value === "object") {
        this.serverOptions = value;
      }
      this.init();
    },
    /***
     * @method handleClick navigate to new test
     * @param null
     * @returns void
     */
    async handleClick(patient) {
      this.data = patient;
      if (patient.source === "remote")
        await this.handleSaveRemotePatient(this.data);
      this.$router.push(`/tests/new-test?patient_id=${patient.client_id}`);
    },
    async handleSaveRemotePatient(details) {
      const request = {
        route: endpoints.clients,
        method: "POST",
        token: this.cookie,
        body: {
          client: {
            uuid: details.uuid
          },
          person: {
            first_name: details.first_name,
            middle_name: details.middle_name,
            last_name: details.last_name,
            sex: details.sex,
            date_of_birth: details.date_of_birth,
            birth_date_estimated: false
          },
          client_identifiers: {
            current_village: details.current_village,
            current_district: details.current_district,
            current_traditional_authority: details.current_traditional_authority,
            physical_address: `${details.home_village} ${details.home_traditional_authority} ${details.home_district}`,
            npid: details.npid
          }
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value)
        this.data = data.value;
      if (error.value)
        useNuxtApp().$toast.error(`${errorMessage}`);
    },
    handleActionCompleted(data) {
      if (data.patient.length > 0) {
        this.createPatient = true;
        this.patients = data.patient;
        this.serverItemsLength = data.patient.length;
        this.showSearch = true;
      } else {
        useNuxtApp().$toast.warning("Patient not found");
        this.openCreatePatientForm = true;
        this.defaultData = data.defaults;
        this.showSearch = false;
      }
    },
    setCreatePatientFormVisibility(visibility) {
      this.openCreatePatientForm = visibility;
    }
  },
  computed: {
    /***
     * @method filteredPatients
     * @param void
     * @returns patients @type Object
     */
    filteredPatients() {
      return this.patients.map((patient) => ({
        ...patient,
        name: capitalize(
          `${patient.first_name} ${patient.middle_name != null ? patient.middle_name : ""} ${patient.last_name}`
        ),
        date_of_birth: moment(patient.date_of_birth).format("DD/MMMM/YYYY")
      }));
    }
  }
};
const _imports_0 = "" + buildAssetsURL("health_worker_form.1359104e.svg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_CoreBreadcrumb = _sfc_main$5;
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_PatientsAddDialog = _sfc_main$4;
  const _component_PatientsFindDialog = _sfc_main$3;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_PatientsViewDialog = __nuxt_component_5;
  const _component_PatientsEditDialog = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center space-x-2 py-5"><img${ssrRenderAttr("src", _imports_0)} alt="form-icon" class="w-auto h-10"><h3 class="text-2xl font-semibold uppercase">Patients List</h3></div><div class="flex justify-between items-center w-full px-2 py-2 mb-2"><div class="flex items-center space-x-2">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    color: "warning",
    icon: $data.refreshIcon,
    text: "Refresh",
    click: () => {
      $options.init();
    }
  }, null, _parent));
  _push(ssrRenderComponent(_component_CoreActionButton, {
    style: $data.createPatient ? null : { display: "none" },
    click: () => {
      $data.openCreatePatientForm = true;
    },
    text: "Create a new patient",
    color: "success",
    icon: $data.addIcon
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_PatientsAddDialog, {
    openForm: $data.openCreatePatientForm,
    onSetAdjustVisibility: $options.setCreatePatientFormVisibility,
    onOnPatientCreated: $options.updatePatients,
    "default-data": $data.defaultData
  }, null, _parent));
  _push(ssrRenderComponent(_component_PatientsFindDialog, { onActionCompleted: $options.handleActionCompleted }, null, _parent));
  _push(`</div><div class="mb-2.5" style="${ssrRenderStyle($data.showSearch ? null : { display: "none" })}"> Showing results for <span class="text-lg font-medium">${ssrInterpolate(`${(_a = $data.defaultData) == null ? void 0 : _a.firstName} ${(_b = $data.defaultData) == null ? void 0 : _b.lastName}`)}</span></div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $options.filteredPatients,
    loading: $data.loading,
    searchField: $data.searchField,
    searchValue: $data.searchValue,
    serverItemsLength: $data.serverItemsLength,
    serverOptions: $data.serverOptions,
    onUpdate: $options.updatePatients
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          click: () => $options.handleClick(item),
          text: "New Test",
          color: "primary",
          icon: $data.newIcon
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_PatientsViewDialog, { data: item }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_PatientsEditDialog, {
          data: item,
          onUpdate: $options.updatePatients
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_CoreActionButton, {
              click: () => $options.handleClick(item),
              text: "New Test",
              color: "primary",
              icon: $data.newIcon
            }, null, 8, ["click", "icon"]),
            createVNode(_component_PatientsViewDialog, { data: item }, null, 8, ["data"]),
            createVNode(_component_PatientsEditDialog, {
              data: item,
              onUpdate: $options.updatePatients
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patients.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const patients = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { patients as default };
<<<<<<<< HEAD:server/chunks/app/_nuxt/patients-f72583cb.mjs
//# sourceMappingURL=patients-f72583cb.mjs.map
========
//# sourceMappingURL=patients-32b09d9c.mjs.map
>>>>>>>> db8a3962de902d8d9f97ce555bb6c63b1094610b:server/chunks/app/_nuxt/patients-32b09d9c.mjs
