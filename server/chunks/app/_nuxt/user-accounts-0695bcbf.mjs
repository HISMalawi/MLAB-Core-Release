import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './OutlinedButton-945a5cd0.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createElementBlock, createElementVNode, resolveComponent, createTextVNode, withDirectives, vModelRadio, vShow, toDisplayString, createBlock, Fragment, renderList } from 'vue';
import { e as errorMessage } from './constants-353d90a1.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { e as endpoints, f as fetchRequest, r as render$4, a as render$4$1 } from './fetch-63049419.mjs';
import { r as render$2 } from './XMarkIcon-170c776f.mjs';
import { r as render$3 } from './UserIcon-3d66d73e.mjs';
import { r as render$5 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$6 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './SearchBar-0bf20ba4.mjs';
import { _ as __nuxt_component_2 } from './Datatable-0c4b7b4f.mjs';
import { _ as __nuxt_component_1$3 } from './Loader-c735e4ba.mjs';
import moment from 'moment';
import { a as render$1$1, r as render$7 } from './PencilSquareIcon-77446728.mjs';
import { u as useHead } from './index-ca787103.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render$1 } from './MagnifyingGlassIcon-7f68e1d6.mjs';
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
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _sfc_main$4 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$2,
    UserIcon: render$3
  },
  data() {
    return {
      open: false,
      addIcon: render$4,
      saveIcon: render$5,
      clearIcon: render$6,
      departmentSelected: null,
      departments: new Array(),
      rawDepartments: new Array(),
      cookie: useCookie("token"),
      roles: new Array(),
      rawRoles: new Array(),
      roleSelected: null,
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      sex: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      loading: false,
      maxDate: (() => {
        const date = /* @__PURE__ */ new Date();
        date.setFullYear(date.getFullYear() - 14);
        date.setDate(date.getDate() + 1);
        return date;
      })()
    };
  },
  methods: {
    async loadRoles() {
      const request = {
        route: endpoints.roles,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.rawRoles = data.value;
        data.value.map((role) => {
          this.roles.push(role.name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async loadDepartments() {
      const request = {
        route: endpoints.departments,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.rawDepartments = data.value;
        data.value.map((role) => {
          this.departments.push(role.name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async submitForm() {
      this.loading = true;
      let departmentId = new Array();
      let rolesId = new Array();
      if (this.departmentSelected != null) {
        this.departmentSelected.map((name) => {
          this.rawDepartments.filter((item) => {
            name == item.name && departmentId.push(item.id);
          });
        });
      }
      if (this.roleSelected != null) {
        this.roleSelected.map((name) => {
          this.rawRoles.filter((item) => {
            name == item.name && rolesId.push(item.id);
          });
        });
      }
      const request = {
        route: endpoints.users,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          person: {
            "first_name": this.firstName,
            "middle_name": this.middleName,
            "last_name": this.lastName,
            "sex": this.sex,
            "date_of_birth": this.dateOfBirth
          },
          user: {
            "username": this.username,
            "password": this.password
          },
          "roles": rolesId,
          "departments": departmentId
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`User created successfully!`);
        this.$emit("update", true);
        this.loading = false;
      }
      if (error.value) {
        this.handleClick();
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
        console.error(error.value);
      }
    },
    async init() {
      await this.loadDepartments();
      await this.loadRoles();
      this.handleClick();
    },
    clearForm() {
      this.$formkit.reset("submitForm");
    },
    handleClick() {
      this.open = !this.open;
    }
  }
};
const _imports_0 = "" + buildAssetsURL("person.534f8b85.svg");
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
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Add user",
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Add user `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Add user ")
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
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="grid grid-cols-2 gap-4"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Username",
                                  validation: "required",
                                  modelValue: $data.username,
                                  "onUpdate:modelValue": ($event) => $data.username = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "First name",
                                  modelValue: $data.firstName,
                                  "onUpdate:modelValue": ($event) => $data.firstName = $event,
                                  validation: "required"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="grid grid-cols-2 gap-4"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Middle name",
                                  modelValue: $data.middleName,
                                  "onUpdate:modelValue": ($event) => $data.middleName = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Last name",
                                  validation: "required",
                                  modelValue: $data.lastName,
                                  "onUpdate:modelValue": ($event) => $data.lastName = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                                _push6(ssrRenderComponent(_component_FormKit, { type: "group" }, {
                                  default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="grid grid-cols-2 gap-4"${_scopeId6}>`);
                                      _push7(ssrRenderComponent(_component_FormKit, {
                                        type: "password",
                                        label: "Password",
                                        name: "password",
                                        validation: "required",
                                        modelValue: $data.password,
                                        "onUpdate:modelValue": ($event) => $data.password = $event,
                                        "validation-visibility": "live"
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_FormKit, {
                                        type: "password",
                                        label: "Confirm password",
                                        name: "password_confirm",
                                        validation: "required|confirm",
                                        "validation-label": "Password confirmation",
                                        "validation-visibility": "live"
                                      }, null, _parent7, _scopeId6));
                                      _push7(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                          createVNode(_component_FormKit, {
                                            type: "password",
                                            label: "Password",
                                            name: "password",
                                            validation: "required",
                                            modelValue: $data.password,
                                            "onUpdate:modelValue": ($event) => $data.password = $event,
                                            "validation-visibility": "live"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_FormKit, {
                                            type: "password",
                                            label: "Confirm password",
                                            name: "password_confirm",
                                            validation: "required|confirm",
                                            "validation-label": "Password confirmation",
                                            "validation-visibility": "live"
                                          })
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent6, _scopeId5));
                                _push6(`<div class="flex items-center"${_scopeId5}><label class="mr-5 font-medium text-lg"${_scopeId5}>Sex</label><label class="flex items-center"${_scopeId5}><input required${ssrIncludeBooleanAttr(ssrLooseEqual($data.sex, "M")) ? " checked" : ""} type="radio" value="M" name="gender" class="w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"${_scopeId5}><span class="ml-2"${_scopeId5}>Male</span></label><label class="flex items-center ml-2"${_scopeId5}><input required${ssrIncludeBooleanAttr(ssrLooseEqual($data.sex, "F")) ? " checked" : ""} type="radio" value="F" name="gender" class="w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"${_scopeId5}><span class="ml-2"${_scopeId5}>Female</span></label></div><div class="w-full flex flex-col"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}><label class="font-medium"${_scopeId5}>Select Role(s)</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.roleSelected,
                                  "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                  options: $data.roles,
                                  mode: "tags",
                                  searchable: true,
                                  required: true,
                                  clear: "",
                                  class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="w-full flex flex-col"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}><label class="font-medium"${_scopeId5}>Select Lab Section(s)</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.departmentSelected,
                                  "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                  options: $data.departments,
                                  mode: "tags",
                                  searchable: true,
                                  required: true,
                                  clear: "",
                                  class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div></div><div class="px-5"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "date",
                                  label: "Date of birth",
                                  modelValue: $data.dateOfBirth,
                                  "onUpdate:modelValue": ($event) => $data.dateOfBirth = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
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
                                  text: "Save Changes"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Username",
                                        validation: "required",
                                        modelValue: $data.username,
                                        "onUpdate:modelValue": ($event) => $data.username = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "First name",
                                        modelValue: $data.firstName,
                                        "onUpdate:modelValue": ($event) => $data.firstName = $event,
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Middle name",
                                        modelValue: $data.middleName,
                                        "onUpdate:modelValue": ($event) => $data.middleName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Last name",
                                        validation: "required",
                                        modelValue: $data.lastName,
                                        "onUpdate:modelValue": ($event) => $data.lastName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode(_component_FormKit, { type: "group" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                          createVNode(_component_FormKit, {
                                            type: "password",
                                            label: "Password",
                                            name: "password",
                                            validation: "required",
                                            modelValue: $data.password,
                                            "onUpdate:modelValue": ($event) => $data.password = $event,
                                            "validation-visibility": "live"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_FormKit, {
                                            type: "password",
                                            label: "Confirm password",
                                            name: "password_confirm",
                                            validation: "required|confirm",
                                            "validation-label": "Password confirmation",
                                            "validation-visibility": "live"
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode("label", { class: "mr-5 font-medium text-lg" }, "Sex"),
                                      createVNode("label", { class: "flex items-center" }, [
                                        withDirectives(createVNode("input", {
                                          required: "",
                                          "onUpdate:modelValue": ($event) => $data.sex = $event,
                                          type: "radio",
                                          value: "M",
                                          name: "gender",
                                          class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelRadio, $data.sex]
                                        ]),
                                        createVNode("span", { class: "ml-2" }, "Male")
                                      ]),
                                      createVNode("label", { class: "flex items-center ml-2" }, [
                                        withDirectives(createVNode("input", {
                                          required: "",
                                          "onUpdate:modelValue": ($event) => $data.sex = $event,
                                          type: "radio",
                                          value: "F",
                                          name: "gender",
                                          class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelRadio, $data.sex]
                                        ]),
                                        createVNode("span", { class: "ml-2" }, "Female")
                                      ])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode("label", { class: "font-medium" }, "Select Role(s)"),
                                        createVNode(_component_multi_select, {
                                          style: { "--ms-max-height": "none !important" },
                                          modelValue: $data.roleSelected,
                                          "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                          options: $data.roles,
                                          mode: "tags",
                                          searchable: true,
                                          required: true,
                                          clear: "",
                                          class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode("label", { class: "font-medium" }, "Select Lab Section(s)"),
                                        createVNode(_component_multi_select, {
                                          style: { "--ms-max-height": "none !important" },
                                          modelValue: $data.departmentSelected,
                                          "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                          options: $data.departments,
                                          mode: "tags",
                                          searchable: true,
                                          required: true,
                                          clear: "",
                                          class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "px-5" }, [
                                    createVNode(_component_FormKit, {
                                      type: "date",
                                      label: "Date of birth",
                                      modelValue: $data.dateOfBirth,
                                      "onUpdate:modelValue": ($event) => $data.dateOfBirth = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      text: "Save Changes"
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
                                  createTextVNode(" Add user ")
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
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Username",
                                      validation: "required",
                                      modelValue: $data.username,
                                      "onUpdate:modelValue": ($event) => $data.username = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "First name",
                                      modelValue: $data.firstName,
                                      "onUpdate:modelValue": ($event) => $data.firstName = $event,
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Middle name",
                                      modelValue: $data.middleName,
                                      "onUpdate:modelValue": ($event) => $data.middleName = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Last name",
                                      validation: "required",
                                      modelValue: $data.lastName,
                                      "onUpdate:modelValue": ($event) => $data.lastName = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_FormKit, { type: "group" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                        createVNode(_component_FormKit, {
                                          type: "password",
                                          label: "Password",
                                          name: "password",
                                          validation: "required",
                                          modelValue: $data.password,
                                          "onUpdate:modelValue": ($event) => $data.password = $event,
                                          "validation-visibility": "live"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_FormKit, {
                                          type: "password",
                                          label: "Confirm password",
                                          name: "password_confirm",
                                          validation: "required|confirm",
                                          "validation-label": "Password confirmation",
                                          "validation-visibility": "live"
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("label", { class: "mr-5 font-medium text-lg" }, "Sex"),
                                    createVNode("label", { class: "flex items-center" }, [
                                      withDirectives(createVNode("input", {
                                        required: "",
                                        "onUpdate:modelValue": ($event) => $data.sex = $event,
                                        type: "radio",
                                        value: "M",
                                        name: "gender",
                                        class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelRadio, $data.sex]
                                      ]),
                                      createVNode("span", { class: "ml-2" }, "Male")
                                    ]),
                                    createVNode("label", { class: "flex items-center ml-2" }, [
                                      withDirectives(createVNode("input", {
                                        required: "",
                                        "onUpdate:modelValue": ($event) => $data.sex = $event,
                                        type: "radio",
                                        value: "F",
                                        name: "gender",
                                        class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelRadio, $data.sex]
                                      ]),
                                      createVNode("span", { class: "ml-2" }, "Female")
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Select Role(s)"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.roleSelected,
                                        "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                        options: $data.roles,
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Select Lab Section(s)"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.departmentSelected,
                                        "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                        options: $data.departments,
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "px-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "date",
                                    label: "Date of birth",
                                    modelValue: $data.dateOfBirth,
                                    "onUpdate:modelValue": ($event) => $data.dateOfBirth = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    text: "Save Changes"
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
                                createTextVNode(" Add user ")
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
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Username",
                                    validation: "required",
                                    modelValue: $data.username,
                                    "onUpdate:modelValue": ($event) => $data.username = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "First name",
                                    modelValue: $data.firstName,
                                    "onUpdate:modelValue": ($event) => $data.firstName = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Middle name",
                                    modelValue: $data.middleName,
                                    "onUpdate:modelValue": ($event) => $data.middleName = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Last name",
                                    validation: "required",
                                    modelValue: $data.lastName,
                                    "onUpdate:modelValue": ($event) => $data.lastName = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_FormKit, { type: "group" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                      createVNode(_component_FormKit, {
                                        type: "password",
                                        label: "Password",
                                        name: "password",
                                        validation: "required",
                                        modelValue: $data.password,
                                        "onUpdate:modelValue": ($event) => $data.password = $event,
                                        "validation-visibility": "live"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "password",
                                        label: "Confirm password",
                                        name: "password_confirm",
                                        validation: "required|confirm",
                                        "validation-label": "Password confirmation",
                                        "validation-visibility": "live"
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("label", { class: "mr-5 font-medium text-lg" }, "Sex"),
                                  createVNode("label", { class: "flex items-center" }, [
                                    withDirectives(createVNode("input", {
                                      required: "",
                                      "onUpdate:modelValue": ($event) => $data.sex = $event,
                                      type: "radio",
                                      value: "M",
                                      name: "gender",
                                      class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelRadio, $data.sex]
                                    ]),
                                    createVNode("span", { class: "ml-2" }, "Male")
                                  ]),
                                  createVNode("label", { class: "flex items-center ml-2" }, [
                                    withDirectives(createVNode("input", {
                                      required: "",
                                      "onUpdate:modelValue": ($event) => $data.sex = $event,
                                      type: "radio",
                                      value: "F",
                                      name: "gender",
                                      class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelRadio, $data.sex]
                                    ]),
                                    createVNode("span", { class: "ml-2" }, "Female")
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Role(s)"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.roleSelected,
                                      "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                      options: $data.roles,
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Lab Section(s)"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.departmentSelected,
                                      "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                      options: $data.departments,
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "px-5" }, [
                                createVNode(_component_FormKit, {
                                  type: "date",
                                  label: "Date of birth",
                                  modelValue: $data.dateOfBirth,
                                  "onUpdate:modelValue": ($event) => $data.dateOfBirth = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  text: "Save Changes"
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
                                  createTextVNode(" Add user ")
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
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Username",
                                      validation: "required",
                                      modelValue: $data.username,
                                      "onUpdate:modelValue": ($event) => $data.username = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "First name",
                                      modelValue: $data.firstName,
                                      "onUpdate:modelValue": ($event) => $data.firstName = $event,
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Middle name",
                                      modelValue: $data.middleName,
                                      "onUpdate:modelValue": ($event) => $data.middleName = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Last name",
                                      validation: "required",
                                      modelValue: $data.lastName,
                                      "onUpdate:modelValue": ($event) => $data.lastName = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_FormKit, { type: "group" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                        createVNode(_component_FormKit, {
                                          type: "password",
                                          label: "Password",
                                          name: "password",
                                          validation: "required",
                                          modelValue: $data.password,
                                          "onUpdate:modelValue": ($event) => $data.password = $event,
                                          "validation-visibility": "live"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_FormKit, {
                                          type: "password",
                                          label: "Confirm password",
                                          name: "password_confirm",
                                          validation: "required|confirm",
                                          "validation-label": "Password confirmation",
                                          "validation-visibility": "live"
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("label", { class: "mr-5 font-medium text-lg" }, "Sex"),
                                    createVNode("label", { class: "flex items-center" }, [
                                      withDirectives(createVNode("input", {
                                        required: "",
                                        "onUpdate:modelValue": ($event) => $data.sex = $event,
                                        type: "radio",
                                        value: "M",
                                        name: "gender",
                                        class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelRadio, $data.sex]
                                      ]),
                                      createVNode("span", { class: "ml-2" }, "Male")
                                    ]),
                                    createVNode("label", { class: "flex items-center ml-2" }, [
                                      withDirectives(createVNode("input", {
                                        required: "",
                                        "onUpdate:modelValue": ($event) => $data.sex = $event,
                                        type: "radio",
                                        value: "F",
                                        name: "gender",
                                        class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelRadio, $data.sex]
                                      ]),
                                      createVNode("span", { class: "ml-2" }, "Female")
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Select Role(s)"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.roleSelected,
                                        "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                        options: $data.roles,
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Select Lab Section(s)"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.departmentSelected,
                                        "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                        options: $data.departments,
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "px-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "date",
                                    label: "Date of birth",
                                    modelValue: $data.dateOfBirth,
                                    "onUpdate:modelValue": ($event) => $data.dateOfBirth = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    text: "Save Changes"
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
                                createTextVNode(" Add user ")
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
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Username",
                                    validation: "required",
                                    modelValue: $data.username,
                                    "onUpdate:modelValue": ($event) => $data.username = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "First name",
                                    modelValue: $data.firstName,
                                    "onUpdate:modelValue": ($event) => $data.firstName = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Middle name",
                                    modelValue: $data.middleName,
                                    "onUpdate:modelValue": ($event) => $data.middleName = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Last name",
                                    validation: "required",
                                    modelValue: $data.lastName,
                                    "onUpdate:modelValue": ($event) => $data.lastName = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_FormKit, { type: "group" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                      createVNode(_component_FormKit, {
                                        type: "password",
                                        label: "Password",
                                        name: "password",
                                        validation: "required",
                                        modelValue: $data.password,
                                        "onUpdate:modelValue": ($event) => $data.password = $event,
                                        "validation-visibility": "live"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "password",
                                        label: "Confirm password",
                                        name: "password_confirm",
                                        validation: "required|confirm",
                                        "validation-label": "Password confirmation",
                                        "validation-visibility": "live"
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("label", { class: "mr-5 font-medium text-lg" }, "Sex"),
                                  createVNode("label", { class: "flex items-center" }, [
                                    withDirectives(createVNode("input", {
                                      required: "",
                                      "onUpdate:modelValue": ($event) => $data.sex = $event,
                                      type: "radio",
                                      value: "M",
                                      name: "gender",
                                      class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelRadio, $data.sex]
                                    ]),
                                    createVNode("span", { class: "ml-2" }, "Male")
                                  ]),
                                  createVNode("label", { class: "flex items-center ml-2" }, [
                                    withDirectives(createVNode("input", {
                                      required: "",
                                      "onUpdate:modelValue": ($event) => $data.sex = $event,
                                      type: "radio",
                                      value: "F",
                                      name: "gender",
                                      class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelRadio, $data.sex]
                                    ]),
                                    createVNode("span", { class: "ml-2" }, "Female")
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Role(s)"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.roleSelected,
                                      "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                      options: $data.roles,
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Lab Section(s)"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.departmentSelected,
                                      "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                      options: $data.departments,
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "px-5" }, [
                                createVNode(_component_FormKit, {
                                  type: "date",
                                  label: "Date of birth",
                                  modelValue: $data.dateOfBirth,
                                  "onUpdate:modelValue": ($event) => $data.dateOfBirth = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  text: "Save Changes"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user-accounts/add-dialog/index.vue");
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
    XMarkIcon: render$2,
    UserIcon: render$3
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      moment,
      open: false,
      addIcon: render$4,
      viewIcon: render$1$1,
      editIcon: render$7,
      clearIcon: render$6,
      details: {
        id: "",
        username: "",
        first_name: "",
        last_name: "",
        middle_name: "",
        sex: "",
        date_of_birth: "",
        roles: new Array(),
        departments: new Array()
      },
      loading: false,
      cookie: useCookie("token")
    };
  },
  methods: {
    async init() {
      this.loading = true;
      const request = {
        route: `${endpoints.users}/${this.data.id}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.details = data.value;
        this.loading = false;
        this.adjustVisibility();
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    adjustVisibility() {
      this.open = !this.open;
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
  const _component_CoreLoader = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "View",
    color: "primary",
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-6 h-6 mr-2"${_scopeId5}> View User Account `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-6 h-6 mr-2"
                                  }),
                                  createTextVNode(" View User Account ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}" class="flex items-center justify-center mx-auto my-20"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreLoader, { loading: $data.loading }, null, _parent5, _scopeId4));
                          _push5(`</div><div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}" class="space-y-3 px-5 py-5"${_scopeId4}><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Username</label><p class="underline"${_scopeId4}>${ssrInterpolate($data.details.username)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>First name</label><p class="underline"${_scopeId4}>${ssrInterpolate($data.details.first_name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Last name</label><p class="underline"${_scopeId4}>${ssrInterpolate($data.details.last_name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Date of birth</label><p class="underline"${_scopeId4}>${ssrInterpolate($data.details.date_of_birth)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Roles</label><!--[-->`);
                          ssrRenderList($data.details.roles, (role, index) => {
                            _push5(`<p class="underline"${_scopeId4}>${ssrInterpolate(role.role_name)}</p>`);
                          });
                          _push5(`<!--]--></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Departments</label><!--[-->`);
                          ssrRenderList($data.details.departments, (department, index) => {
                            _push5(`<p class="underline"${_scopeId4}>${ssrInterpolate(department.name)}</p>`);
                          });
                          _push5(`<!--]--></div></div>`);
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
                                    class: "w-6 h-6 mr-2"
                                  }),
                                  createTextVNode(" View User Account ")
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
                            withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Username"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.username), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "First name"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.first_name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Last name"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.last_name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Date of birth"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.date_of_birth), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Roles"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.roles, (role, index) => {
                                  return openBlock(), createBlock("p", {
                                    class: "underline",
                                    key: index
                                  }, toDisplayString(role.role_name), 1);
                                }), 128))
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Departments"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.departments, (department, index) => {
                                  return openBlock(), createBlock("p", {
                                    class: "underline",
                                    key: index
                                  }, toDisplayString(department.name), 1);
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
                              class: "text-xl text-black flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-6 h-6 mr-2"
                                }),
                                createTextVNode(" View User Account ")
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
                          withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Username"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.username), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "First name"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.first_name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Last name"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.last_name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Date of birth"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.date_of_birth), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Roles"),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.details.roles, (role, index) => {
                                return openBlock(), createBlock("p", {
                                  class: "underline",
                                  key: index
                                }, toDisplayString(role.role_name), 1);
                              }), 128))
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Departments"),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.details.departments, (department, index) => {
                                return openBlock(), createBlock("p", {
                                  class: "underline",
                                  key: index
                                }, toDisplayString(department.name), 1);
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
                                class: "text-xl text-black flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-6 h-6 mr-2"
                                  }),
                                  createTextVNode(" View User Account ")
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
                            withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Username"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.username), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "First name"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.first_name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Last name"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.last_name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Date of birth"),
                                createVNode("p", { class: "underline" }, toDisplayString($data.details.date_of_birth), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Roles"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.roles, (role, index) => {
                                  return openBlock(), createBlock("p", {
                                    class: "underline",
                                    key: index
                                  }, toDisplayString(role.role_name), 1);
                                }), 128))
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Departments"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.departments, (department, index) => {
                                  return openBlock(), createBlock("p", {
                                    class: "underline",
                                    key: index
                                  }, toDisplayString(department.name), 1);
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
                                  src: _imports_0,
                                  class: "w-6 h-6 mr-2"
                                }),
                                createTextVNode(" View User Account ")
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
                          withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Username"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.username), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "First name"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.first_name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Last name"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.last_name), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Date of birth"),
                              createVNode("p", { class: "underline" }, toDisplayString($data.details.date_of_birth), 1)
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Roles"),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.details.roles, (role, index) => {
                                return openBlock(), createBlock("p", {
                                  class: "underline",
                                  key: index
                                }, toDisplayString(role.role_name), 1);
                              }), 128))
                            ]),
                            createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                              createVNode("label", { class: "font-semibold text-lg" }, "Departments"),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.details.departments, (department, index) => {
                                return openBlock(), createBlock("p", {
                                  class: "underline",
                                  key: index
                                }, toDisplayString(department.name), 1);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user-accounts/view-dialog/index.vue");
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
    XMarkIcon: render$2,
    UserIcon: render$3
  },
  data() {
    return {
      open: false,
      editIcon: render$7,
      saveIcon: render$5,
      clearIcon: render$6,
      departmentSelected: null,
      departments: new Array(),
      rawDepartments: new Array(),
      cookie: useCookie("token"),
      roles: new Array(),
      rawRoles: new Array(),
      roleSelected: null,
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      sex: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      loading: false,
      details: {
        id: "",
        username: "",
        first_name: "",
        last_name: "",
        middle_name: "",
        old_password: "",
        new_password: "",
        sex: "",
        date_of_birth: "",
        roles: new Array(),
        departments: new Array()
      }
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
      await this.loadRoles();
      await this.loadDepartments();
      const request = {
        route: `${endpoints.users}/${this.data.id}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.details = data.value;
        this.loading = false;
        let detailsRoles = new Array();
        data.value.roles.map((role) => {
          this.rawRoles.map((item) => {
            if (role.role_name == item.name) {
              detailsRoles.push(item.name);
            }
          });
        });
        this.roleSelected = detailsRoles;
        let detailsDepartments = new Array();
        data.value.departments.map((department) => {
          this.rawDepartments.map((item) => {
            if (department.name == item.name) {
              detailsDepartments.push(item.name);
            }
          });
        });
        this.departmentSelected = detailsDepartments;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    async loadRoles() {
      const request = {
        route: endpoints.roles,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.rawRoles = data.value;
        data.value.map((role) => {
          this.roles.push(role.name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async loadDepartments() {
      const request = {
        route: endpoints.departments,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.rawDepartments = data.value;
        data.value.map((role) => {
          this.departments.push(role.name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    /**
     * @method submitForm
     * @returns promise @type void
     */
    async submitForm() {
      this.loading = true;
      let departmentId = new Array();
      let rolesId = new Array();
      if (this.departmentSelected != null) {
        this.departmentSelected.map((name) => {
          this.rawDepartments.filter((item) => {
            name == item.name && departmentId.push(item.id);
          });
        });
      }
      if (this.roleSelected != null) {
        this.roleSelected.map((name) => {
          this.rawRoles.filter((item) => {
            name == item.name && rolesId.push(item.id);
          });
        });
      }
      this.details.roles = rolesId;
      this.details.departments = departmentId;
      const request = {
        route: `${endpoints.users}/${this.data.id}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {
          person: {
            first_name: this.details.first_name,
            middle_name: this.details.middle_name,
            last_name: this.details.last_name,
            sex: this.details.sex,
            date_of_birth: this.details.date_of_birth
          },
          user: {
            username: this.details.username,
            old_password: this.details.old_password,
            password: this.details.new_password
          },
          roles: rolesId,
          departments: departmentId
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`User updated successfully!`);
        this.loading = false;
        this.$emit("update", true);
      }
      if (error.value) {
        console.error(error.value);
        this.handleClick();
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    },
    handleClick() {
      this.open = !this.open;
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
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Edit user `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Edit user ")
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
                                _push6(`<div class="mt-2 space-y-3 px-5 py-5"${_scopeId5}><div class="grid grid-cols-2 gap-4"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Username",
                                  validation: "required",
                                  modelValue: $data.details.username,
                                  "onUpdate:modelValue": ($event) => $data.details.username = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "First name",
                                  modelValue: $data.details.first_name,
                                  "onUpdate:modelValue": ($event) => $data.details.first_name = $event,
                                  validation: "required"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="grid grid-cols-2 gap-4"${_scopeId5}>`);
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
                                _push6(`</div>`);
                                _push6(ssrRenderComponent(_component_FormKit, { type: "group" }, {
                                  default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="grid grid-cols-2 gap-4"${_scopeId6}><div class="w-full flex flex-col space-y-2"${_scopeId6}>`);
                                      _push7(ssrRenderComponent(_component_FormKit, {
                                        type: "password",
                                        label: "New password",
                                        name: "password",
                                        modelValue: $data.details.new_password,
                                        "onUpdate:modelValue": ($event) => $data.details.new_password = $event,
                                        "validation-visibility": "live"
                                      }, null, _parent7, _scopeId6));
                                      _push7(`</div><div class="w-full flex flex-col space-y-2"${_scopeId6}>`);
                                      _push7(ssrRenderComponent(_component_FormKit, {
                                        type: "password",
                                        label: "Confirm new password",
                                        name: "password_confirm",
                                        validation: $data.details.new_password && "required|confirm",
                                        "validation-label": "Password confirmation",
                                        "validation-visibility": "live"
                                      }, null, _parent7, _scopeId6));
                                      _push7(`</div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                          createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                            createVNode(_component_FormKit, {
                                              type: "password",
                                              label: "New password",
                                              name: "password",
                                              modelValue: $data.details.new_password,
                                              "onUpdate:modelValue": ($event) => $data.details.new_password = $event,
                                              "validation-visibility": "live"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                            createVNode(_component_FormKit, {
                                              type: "password",
                                              label: "Confirm new password",
                                              name: "password_confirm",
                                              validation: $data.details.new_password && "required|confirm",
                                              "validation-label": "Password confirmation",
                                              "validation-visibility": "live"
                                            }, null, 8, ["validation"])
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent6, _scopeId5));
                                _push6(`<div class="flex items-center"${_scopeId5}><label class="mr-5 font-medium text-lg"${_scopeId5}>Sex</label><label class="flex items-center"${_scopeId5}><input required${ssrIncludeBooleanAttr(ssrLooseEqual($data.details.sex, "M")) ? " checked" : ""} type="radio" value="M" name="gender" class="w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"${_scopeId5}><span class="ml-2"${_scopeId5}>Male</span></label><label class="flex items-center ml-2"${_scopeId5}><input required${ssrIncludeBooleanAttr(ssrLooseEqual($data.details.sex, "F")) ? " checked" : ""} type="radio" value="F" name="gender" class="w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"${_scopeId5}><span class="ml-2"${_scopeId5}>Female</span></label></div><div class="w-full flex flex-col"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}><label class="font-medium"${_scopeId5}>Select Role(s)</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.roleSelected,
                                  "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                  options: $data.roles,
                                  mode: "tags",
                                  searchable: true,
                                  required: true,
                                  clear: "",
                                  class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="w-full flex flex-col"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}><label class="font-medium"${_scopeId5}>Select Lab Section(s)</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.departmentSelected,
                                  "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                  options: $data.departments,
                                  mode: "tags",
                                  searchable: true,
                                  required: true,
                                  clear: "",
                                  class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div></div><div class="px-5"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "date",
                                  label: "Date of birth",
                                  modelValue: $data.details.date_of_birth,
                                  "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
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
                                  text: "Save Changes"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Username",
                                        validation: "required",
                                        modelValue: $data.details.username,
                                        "onUpdate:modelValue": ($event) => $data.details.username = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "First name",
                                        modelValue: $data.details.first_name,
                                        "onUpdate:modelValue": ($event) => $data.details.first_name = $event,
                                        validation: "required"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
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
                                    createVNode(_component_FormKit, { type: "group" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                          createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                            createVNode(_component_FormKit, {
                                              type: "password",
                                              label: "New password",
                                              name: "password",
                                              modelValue: $data.details.new_password,
                                              "onUpdate:modelValue": ($event) => $data.details.new_password = $event,
                                              "validation-visibility": "live"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                            createVNode(_component_FormKit, {
                                              type: "password",
                                              label: "Confirm new password",
                                              name: "password_confirm",
                                              validation: $data.details.new_password && "required|confirm",
                                              "validation-label": "Password confirmation",
                                              "validation-visibility": "live"
                                            }, null, 8, ["validation"])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode("label", { class: "mr-5 font-medium text-lg" }, "Sex"),
                                      createVNode("label", { class: "flex items-center" }, [
                                        withDirectives(createVNode("input", {
                                          required: "",
                                          "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                          type: "radio",
                                          value: "M",
                                          name: "gender",
                                          class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelRadio, $data.details.sex]
                                        ]),
                                        createVNode("span", { class: "ml-2" }, "Male")
                                      ]),
                                      createVNode("label", { class: "flex items-center ml-2" }, [
                                        withDirectives(createVNode("input", {
                                          required: "",
                                          "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                          type: "radio",
                                          value: "F",
                                          name: "gender",
                                          class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelRadio, $data.details.sex]
                                        ]),
                                        createVNode("span", { class: "ml-2" }, "Female")
                                      ])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode("label", { class: "font-medium" }, "Select Role(s)"),
                                        createVNode(_component_multi_select, {
                                          style: { "--ms-max-height": "none !important" },
                                          modelValue: $data.roleSelected,
                                          "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                          options: $data.roles,
                                          mode: "tags",
                                          searchable: true,
                                          required: true,
                                          clear: "",
                                          class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode("label", { class: "font-medium" }, "Select Lab Section(s)"),
                                        createVNode(_component_multi_select, {
                                          style: { "--ms-max-height": "none !important" },
                                          modelValue: $data.departmentSelected,
                                          "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                          options: $data.departments,
                                          mode: "tags",
                                          searchable: true,
                                          required: true,
                                          clear: "",
                                          class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "px-5" }, [
                                    createVNode(_component_FormKit, {
                                      type: "date",
                                      label: "Date of birth",
                                      modelValue: $data.details.date_of_birth,
                                      "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                      },
                                      text: "Clear form"
                                    }),
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: $data.saveIcon,
                                      text: "Save Changes"
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
                                  createTextVNode(" Edit user ")
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
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Username",
                                      validation: "required",
                                      modelValue: $data.details.username,
                                      "onUpdate:modelValue": ($event) => $data.details.username = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "First name",
                                      modelValue: $data.details.first_name,
                                      "onUpdate:modelValue": ($event) => $data.details.first_name = $event,
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
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
                                  createVNode(_component_FormKit, { type: "group" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                        createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                          createVNode(_component_FormKit, {
                                            type: "password",
                                            label: "New password",
                                            name: "password",
                                            modelValue: $data.details.new_password,
                                            "onUpdate:modelValue": ($event) => $data.details.new_password = $event,
                                            "validation-visibility": "live"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                          createVNode(_component_FormKit, {
                                            type: "password",
                                            label: "Confirm new password",
                                            name: "password_confirm",
                                            validation: $data.details.new_password && "required|confirm",
                                            "validation-label": "Password confirmation",
                                            "validation-visibility": "live"
                                          }, null, 8, ["validation"])
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("label", { class: "mr-5 font-medium text-lg" }, "Sex"),
                                    createVNode("label", { class: "flex items-center" }, [
                                      withDirectives(createVNode("input", {
                                        required: "",
                                        "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                        type: "radio",
                                        value: "M",
                                        name: "gender",
                                        class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelRadio, $data.details.sex]
                                      ]),
                                      createVNode("span", { class: "ml-2" }, "Male")
                                    ]),
                                    createVNode("label", { class: "flex items-center ml-2" }, [
                                      withDirectives(createVNode("input", {
                                        required: "",
                                        "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                        type: "radio",
                                        value: "F",
                                        name: "gender",
                                        class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelRadio, $data.details.sex]
                                      ]),
                                      createVNode("span", { class: "ml-2" }, "Female")
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Select Role(s)"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.roleSelected,
                                        "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                        options: $data.roles,
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Select Lab Section(s)"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.departmentSelected,
                                        "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                        options: $data.departments,
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "px-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "date",
                                    label: "Date of birth",
                                    modelValue: $data.details.date_of_birth,
                                    "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                    },
                                    text: "Clear form"
                                  }),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.saveIcon,
                                    text: "Save Changes"
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
                                createTextVNode(" Edit user ")
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
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Username",
                                    validation: "required",
                                    modelValue: $data.details.username,
                                    "onUpdate:modelValue": ($event) => $data.details.username = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "First name",
                                    modelValue: $data.details.first_name,
                                    "onUpdate:modelValue": ($event) => $data.details.first_name = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
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
                                createVNode(_component_FormKit, { type: "group" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "password",
                                          label: "New password",
                                          name: "password",
                                          modelValue: $data.details.new_password,
                                          "onUpdate:modelValue": ($event) => $data.details.new_password = $event,
                                          "validation-visibility": "live"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "password",
                                          label: "Confirm new password",
                                          name: "password_confirm",
                                          validation: $data.details.new_password && "required|confirm",
                                          "validation-label": "Password confirmation",
                                          "validation-visibility": "live"
                                        }, null, 8, ["validation"])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("label", { class: "mr-5 font-medium text-lg" }, "Sex"),
                                  createVNode("label", { class: "flex items-center" }, [
                                    withDirectives(createVNode("input", {
                                      required: "",
                                      "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                      type: "radio",
                                      value: "M",
                                      name: "gender",
                                      class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelRadio, $data.details.sex]
                                    ]),
                                    createVNode("span", { class: "ml-2" }, "Male")
                                  ]),
                                  createVNode("label", { class: "flex items-center ml-2" }, [
                                    withDirectives(createVNode("input", {
                                      required: "",
                                      "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                      type: "radio",
                                      value: "F",
                                      name: "gender",
                                      class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelRadio, $data.details.sex]
                                    ]),
                                    createVNode("span", { class: "ml-2" }, "Female")
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Role(s)"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.roleSelected,
                                      "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                      options: $data.roles,
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Lab Section(s)"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.departmentSelected,
                                      "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                      options: $data.departments,
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "px-5" }, [
                                createVNode(_component_FormKit, {
                                  type: "date",
                                  label: "Date of birth",
                                  modelValue: $data.details.date_of_birth,
                                  "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                  },
                                  text: "Clear form"
                                }),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save Changes"
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
                                  createTextVNode(" Edit user ")
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
                                createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Username",
                                      validation: "required",
                                      modelValue: $data.details.username,
                                      "onUpdate:modelValue": ($event) => $data.details.username = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "First name",
                                      modelValue: $data.details.first_name,
                                      "onUpdate:modelValue": ($event) => $data.details.first_name = $event,
                                      validation: "required"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
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
                                  createVNode(_component_FormKit, { type: "group" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                        createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                          createVNode(_component_FormKit, {
                                            type: "password",
                                            label: "New password",
                                            name: "password",
                                            modelValue: $data.details.new_password,
                                            "onUpdate:modelValue": ($event) => $data.details.new_password = $event,
                                            "validation-visibility": "live"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                          createVNode(_component_FormKit, {
                                            type: "password",
                                            label: "Confirm new password",
                                            name: "password_confirm",
                                            validation: $data.details.new_password && "required|confirm",
                                            "validation-label": "Password confirmation",
                                            "validation-visibility": "live"
                                          }, null, 8, ["validation"])
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("label", { class: "mr-5 font-medium text-lg" }, "Sex"),
                                    createVNode("label", { class: "flex items-center" }, [
                                      withDirectives(createVNode("input", {
                                        required: "",
                                        "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                        type: "radio",
                                        value: "M",
                                        name: "gender",
                                        class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelRadio, $data.details.sex]
                                      ]),
                                      createVNode("span", { class: "ml-2" }, "Male")
                                    ]),
                                    createVNode("label", { class: "flex items-center ml-2" }, [
                                      withDirectives(createVNode("input", {
                                        required: "",
                                        "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                        type: "radio",
                                        value: "F",
                                        name: "gender",
                                        class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelRadio, $data.details.sex]
                                      ]),
                                      createVNode("span", { class: "ml-2" }, "Female")
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Select Role(s)"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.roleSelected,
                                        "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                        options: $data.roles,
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Select Lab Section(s)"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.departmentSelected,
                                        "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                        options: $data.departments,
                                        mode: "tags",
                                        searchable: true,
                                        required: true,
                                        clear: "",
                                        class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "px-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "date",
                                    label: "Date of birth",
                                    modelValue: $data.details.date_of_birth,
                                    "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                    },
                                    text: "Clear form"
                                  }),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.saveIcon,
                                    text: "Save Changes"
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
                                createTextVNode(" Edit user ")
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
                              createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Username",
                                    validation: "required",
                                    modelValue: $data.details.username,
                                    "onUpdate:modelValue": ($event) => $data.details.username = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "First name",
                                    modelValue: $data.details.first_name,
                                    "onUpdate:modelValue": ($event) => $data.details.first_name = $event,
                                    validation: "required"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
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
                                createVNode(_component_FormKit, { type: "group" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "password",
                                          label: "New password",
                                          name: "password",
                                          modelValue: $data.details.new_password,
                                          "onUpdate:modelValue": ($event) => $data.details.new_password = $event,
                                          "validation-visibility": "live"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode(_component_FormKit, {
                                          type: "password",
                                          label: "Confirm new password",
                                          name: "password_confirm",
                                          validation: $data.details.new_password && "required|confirm",
                                          "validation-label": "Password confirmation",
                                          "validation-visibility": "live"
                                        }, null, 8, ["validation"])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("label", { class: "mr-5 font-medium text-lg" }, "Sex"),
                                  createVNode("label", { class: "flex items-center" }, [
                                    withDirectives(createVNode("input", {
                                      required: "",
                                      "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                      type: "radio",
                                      value: "M",
                                      name: "gender",
                                      class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelRadio, $data.details.sex]
                                    ]),
                                    createVNode("span", { class: "ml-2" }, "Male")
                                  ]),
                                  createVNode("label", { class: "flex items-center ml-2" }, [
                                    withDirectives(createVNode("input", {
                                      required: "",
                                      "onUpdate:modelValue": ($event) => $data.details.sex = $event,
                                      type: "radio",
                                      value: "F",
                                      name: "gender",
                                      class: "w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelRadio, $data.details.sex]
                                    ]),
                                    createVNode("span", { class: "ml-2" }, "Female")
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Role(s)"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.roleSelected,
                                      "onUpdate:modelValue": ($event) => $data.roleSelected = $event,
                                      options: $data.roles,
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Select Lab Section(s)"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.departmentSelected,
                                      "onUpdate:modelValue": ($event) => $data.departmentSelected = $event,
                                      options: $data.departments,
                                      mode: "tags",
                                      searchable: true,
                                      required: true,
                                      clear: "",
                                      class: "outline-none focus:ring-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "px-5" }, [
                                createVNode(_component_FormKit, {
                                  type: "date",
                                  label: "Date of birth",
                                  modelValue: $data.details.date_of_birth,
                                  "onUpdate:modelValue": ($event) => $data.details.date_of_birth = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                  },
                                  text: "Clear form"
                                }),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save Changes"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user-accounts/edit-dialog/index.vue");
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
    ExclamationTriangleIcon: render$4$1
  },
  data() {
    return {
      show: false,
      disableIcon: render,
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
        route: `${endpoints.users}/${id}`,
        method: "DELETE",
        token: `${this.cookie}`
      };
      const { pending, error, data } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`${data.value.message}`);
        this.loading = false;
        this.$emit("update", true);
        this.reason = "";
      }
      if (error.value) {
        console.log(data.value);
        this.loading = false;
      }
    },
    async activate(id) {
      this.loading = true;
      const request = {
        route: `${endpoints.users}/activate/${id}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {
          "retired_reason": this.reason
        }
      };
      const { pending, error, data } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`${data.value.message}`);
        this.loading = false;
        this.$emit("update", true);
        this.reason = "";
      }
      if (error.value) {
        console.log(data.value);
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
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  if ($props.data.is_active) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_CoreActionButton, {
      click: $options.handleClick,
      color: "error",
      text: "Disable",
      icon: $data.disableIcon
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$props.data.is_active) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_CoreActionButton, {
      click: $options.handleClick,
      color: "success",
      text: "Enable",
      icon: $data.disableIcon
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
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
                                _push6(` ${ssrInterpolate($props.data.is_active ? "Confirm disable" : "Confirm activate")}`);
                              } else {
                                return [
                                  createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" " + toDisplayString($props.data.is_active ? "Confirm disable" : "Confirm activate"), 1)
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
                            onSubmit: ($event) => $props.data.is_active ? $options.deleteData($props.data.id) : $options.activate($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="rounded px-2 py-2"${_scopeId5}> Do you want to ${ssrInterpolate($props.data.is_active ? "disable" : "activate")} <span class="font-semibold text-red-500"${_scopeId5}>${ssrInterpolate($props.data.username)}</span> account? Note that once this action is completed, it can not be undone </div>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Reason",
                                  validation: "required",
                                  modelValue: $data.reason,
                                  "onUpdate:modelValue": ($event) => $data.reason = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  click: $options.handleClick,
                                  type: "button",
                                  text: "Cancel"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.disableIcon,
                                  text: "Continue"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "rounded px-2 py-2" }, [
                                      createTextVNode(" Do you want to " + toDisplayString($props.data.is_active ? "disable" : "activate") + " ", 1),
                                      createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.username), 1),
                                      createTextVNode(" account? Note that once this action is completed, it can not be undone ")
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
                                      click: $options.handleClick,
                                      type: "button",
                                      text: "Cancel"
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      icon: $data.disableIcon,
                                      text: "Continue"
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
                                  createTextVNode(" " + toDisplayString($props.data.is_active ? "Confirm disable" : "Confirm activate"), 1)
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
                              onSubmit: ($event) => $props.data.is_active ? $options.deleteData($props.data.id) : $options.activate($props.data.id),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Do you want to " + toDisplayString($props.data.is_active ? "disable" : "activate") + " ", 1),
                                    createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.username), 1),
                                    createTextVNode(" account? Note that once this action is completed, it can not be undone ")
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
                                    click: $options.handleClick,
                                    type: "button",
                                    text: "Cancel"
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.disableIcon,
                                    text: "Continue"
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
                                createTextVNode(" " + toDisplayString($props.data.is_active ? "Confirm disable" : "Confirm activate"), 1)
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
                            onSubmit: ($event) => $props.data.is_active ? $options.deleteData($props.data.id) : $options.activate($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Do you want to " + toDisplayString($props.data.is_active ? "disable" : "activate") + " ", 1),
                                  createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.username), 1),
                                  createTextVNode(" account? Note that once this action is completed, it can not be undone ")
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
                                  click: $options.handleClick,
                                  type: "button",
                                  text: "Cancel"
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.disableIcon,
                                  text: "Continue"
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
                                  createTextVNode(" " + toDisplayString($props.data.is_active ? "Confirm disable" : "Confirm activate"), 1)
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
                              onSubmit: ($event) => $props.data.is_active ? $options.deleteData($props.data.id) : $options.activate($props.data.id),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Do you want to " + toDisplayString($props.data.is_active ? "disable" : "activate") + " ", 1),
                                    createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.username), 1),
                                    createTextVNode(" account? Note that once this action is completed, it can not be undone ")
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
                                    click: $options.handleClick,
                                    type: "button",
                                    text: "Cancel"
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "success",
                                    icon: $data.disableIcon,
                                    text: "Continue"
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
                                createTextVNode(" " + toDisplayString($props.data.is_active ? "Confirm disable" : "Confirm activate"), 1)
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
                            onSubmit: ($event) => $props.data.is_active ? $options.deleteData($props.data.id) : $options.activate($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Do you want to " + toDisplayString($props.data.is_active ? "disable" : "activate") + " ", 1),
                                  createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.username), 1),
                                  createTextVNode(" account? Note that once this action is completed, it can not be undone ")
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
                                  click: $options.handleClick,
                                  type: "button",
                                  text: "Cancel"
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "success",
                                  icon: $data.disableIcon,
                                  text: "Continue"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user-accounts/disable-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    MagnifyingGlassIcon: render$1
  },
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - User Accounts`
    });
  },
  data() {
    return {
      header: "List of Users",
      headers: [
        { text: "id", value: "id", sortable: true },
        { text: "username", value: "username", sortable: true },
        { text: "full name", value: "fullname", sortable: true },
        { text: "sex", value: "sex", sortable: true },
        { text: "actions", value: "actions" }
      ],
      users: new Array(),
      cookie: useCookie("token"),
      loading: false,
      search: "",
      searchValue: "",
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
      serverItemsLength: 0,
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      }
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
      this.updateUsers(value);
    },
    /**
     * @method init loads users list from api
     * @return promise of @type void
     */
    async init() {
      this.loading = true;
      const { page, rowsPerPage } = this.serverOptions;
      const request = {
        route: `${endpoints.users}?page=${page}&per_page=${rowsPerPage}&search=${this.search}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.users = data.value.data;
        this.loading = false;
        this.serverItemsLength = data.value.meta.total_count;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    updateUsers(value) {
      if (typeof value === "object") {
        this.serverOptions = value;
      }
      this.init();
    }
  },
  computed: {
    filteredUsers() {
      return this.users.map((user) => {
        return {
          id: user.id,
          is_active: user.is_active,
          username: user.username.charAt(0).toUpperCase() + user.username.slice(1),
          fullname: `${user.first_name} ${user.last_name}`,
          sex: user.sex
        };
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_UserAccountsAddDialog = __nuxt_component_1;
  const _component_CoreSearchBar = __nuxt_component_1$1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_UserAccountsViewDialog = __nuxt_component_4;
  const _component_UserAccountsEditDialog = __nuxt_component_5;
  const _component_UserAccountsDisableDialog = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3>`);
  _push(ssrRenderComponent(_component_UserAccountsAddDialog, { onUpdate: $options.init }, null, _parent));
  _push(`</div><div class="flex justify-end w-full px-2 py-2 mb-2">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    onUpdate: $options.updateSearch
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $options.filteredUsers,
    loading: $data.loading,
    searchField: "username",
    searchValue: $data.searchValue,
    serverItemsLength: $data.serverItemsLength,
    serverOptions: $data.serverOptions,
    onUpdate: $options.updateUsers
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UserAccountsViewDialog, { data: item }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UserAccountsEditDialog, {
          data: item,
          onUpdate: $options.init
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UserAccountsDisableDialog, {
          data: item,
          onUpdate: $options.init
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_UserAccountsViewDialog, { data: item }, null, 8, ["data"]),
            createVNode(_component_UserAccountsEditDialog, {
              data: item,
              onUpdate: $options.init
            }, null, 8, ["data", "onUpdate"]),
            createVNode(_component_UserAccountsDisableDialog, {
              data: item,
              onUpdate: $options.init
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/access-controls/user-accounts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const userAccounts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { userAccounts as default };
//# sourceMappingURL=user-accounts-0695bcbf.mjs.map
