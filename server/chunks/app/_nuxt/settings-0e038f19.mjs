import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { _ as _export_sfc, u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0 } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useAuthStore, e as endpoints, f as fetchRequest } from './fetch-40f40580.mjs';
import { P as Package } from './package-27625040.mjs';
import { r as render } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$1 } from './IdentificationIcon-39b8324b.mjs';
import { r as render$2 } from './PencilSquareIcon-77446728.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './user-ef197328.mjs';
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
import 'moment';
import './constants-353d90a1.mjs';
import '@headlessui/vue';
import './XMarkIcon-170c776f.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = {
  name: "settings",
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Settings`
    });
  },
  data() {
    return {
      saveIcon: render,
      pages: [
        {
          name: "Home",
          link: "/home"
        }
      ],
      tabs: [
        "Personal Information",
        "Credentials"
      ],
      activeTab: 0,
      loading: false,
      updating: false,
      cookie: useCookie("token"),
      oldPassword: "",
      newPassword: "",
      username: "",
      authStore: useAuthStore()
    };
  },
  methods: {
    async changePassword() {
      this.loading = true;
      const request = {
        route: `${endpoints.users}/change_password/${this.authStore.user.id}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {
          "user": {
            "old_password": this.oldPassword,
            "password": this.newPassword
          }
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        const { logUserOut } = useAuthStore();
        this.loading = false;
        useNuxtApp().$toast.success(`Password changed successfully!`);
        logUserOut();
        this.$router.push("/");
      }
      if (error.value) {
        this.loading = false;
        useNuxtApp().$toast.error(`${error.value.data.error}`);
        console.error(error.value);
      }
    },
    async changeUsername() {
      this.updating = true;
      const request = {
        route: `${endpoints.users}/change_username/${this.authStore.user.id}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {
          "user": {
            "username": this.username
          }
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.updating = pending;
      if (data.value) {
        const { logUserOut } = useAuthStore();
        this.updating = false;
        useNuxtApp().$toast.success(`Username changed successfully!`);
        logUserOut();
        this.$router.push("/");
      }
      if (error.value) {
        this.updating = false;
        useNuxtApp().$toast.error(`${error.value.data.error}`);
        console.error(error.value);
      }
    }
  },
  components: { IdentificationIcon: render$1, PencilSquareIcon: render$2 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$1;
  const _component_IdentificationIcon = resolveComponent("IdentificationIcon");
  const _component_PencilSquareIcon = resolveComponent("PencilSquareIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreActionButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="mt-5 flex items-center space-x-3"><div><img${ssrRenderAttr("src", _imports_0)} class="w-16 h-16 mr-2 object-cover rounded-full" alt="user-icon"></div><div class="space-y-0.5"><h3 class="text-lg font-semibold uppercase">${ssrInterpolate($data.authStore.user.username)}</h3><p class="font-normal">${ssrInterpolate(`${$data.authStore.user.first_name} ${$data.authStore.user.last_name}`)}</p></div></div><div class="py-5"><div class="w-full flex items-center border-b"><!--[-->`);
  ssrRenderList($data.tabs, (tab, index) => {
    _push(`<button class="${ssrRenderClass($data.activeTab == index ? "flex items-center px-1.5 py-2 text-white border-b-2 border-sky-600 bg-sky-500 font-medium" : "px-2 py-2 hover:bg-sky-200 font-medium hover:text-sky-500 transition duration-150 flex items-center")}">`);
    if (index == 0) {
      _push(ssrRenderComponent(_component_IdentificationIcon, { class: "w-5 h-5 mr-2" }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (index == 1) {
      _push(ssrRenderComponent(_component_PencilSquareIcon, { class: "w-5 h-5 mr-2" }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(` ${ssrInterpolate(tab)}</button>`);
  });
  _push(`<!--]--></div>`);
  if ($data.activeTab === 0) {
    _push(`<div><div class="py-3 space-y-2.5"><div class="grid grid-cols-3 gap-2"><div class="w-full flex flex-col space-y-1"><label class="font-semibold text-lg">Username</label><p class="underline">${ssrInterpolate($data.authStore.user.username)}</p></div><div class="w-full flex flex-col space-y-1"><label class="font-semibold text-lg">First name</label><p class="underline">${ssrInterpolate($data.authStore.user.first_name)}</p></div><div class="w-full flex flex-col space-y-1"><label class="font-semibold text-lg">Middle name</label><p class="underline">${ssrInterpolate($data.authStore.user.middle_name)}</p></div><div class="w-full flex flex-col space-y-1"><label class="font-semibold text-lg">Last name</label><p class="underline">${ssrInterpolate($data.authStore.user.last_name)}</p></div><div class="w-full flex flex-col space-y-1"><label class="font-semibold text-lg">Date Of Birth</label><p class="underline">${ssrInterpolate($data.authStore.user.date_of_birth)}</p></div></div><div class="w-full flex flex-col space-y-1"><label class="font-semibold text-lg">Roles</label><div class="flex flex-wrap gap-2"><!--[-->`);
    ssrRenderList($data.authStore.user.roles, (role, index) => {
      _push(`<div class="border rounded px-3 py-1.5">${ssrInterpolate(role.role_name)}</div>`);
    });
    _push(`<!--]--></div></div><div class="w-full flex flex-col space-y-1"><label class="font-semibold text-lg">Departments</label><div class="flex flex-wrap gap-2"><!--[-->`);
    ssrRenderList($data.authStore.user.departments, (department, index) => {
      _push(`<div class="border rounded px-3 py-1.5">${ssrInterpolate(department.name)}</div>`);
    });
    _push(`<!--]--></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeTab === 1) {
    _push(`<div><div class="border-b pb-2"><div class="py-3"><h3 class="text-xl font-semibold">Username</h3><p>Please enter your desired username below and save changes. </p></div>`);
    _push(ssrRenderComponent(_component_FormKit, {
      type: "form",
      "submit-label": "Update",
      onSubmit: $options.changeUsername,
      actions: false
    }, {
      default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_FormKit, {
            type: "text",
            name: "username",
            label: "Username",
            validation: "required",
            modelValue: $data.username,
            "onUpdate:modelValue": ($event) => $data.username = $event
          }, null, _parent2, _scopeId));
          _push2(`<div class="flex items-center justify-end space-x-2 mt-5"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            type: "submit",
            icon: $data.saveIcon,
            text: "Save changes",
            color: "success",
            click: () => {
            },
            loading: $data.updating
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode(_component_FormKit, {
              type: "text",
              name: "username",
              label: "Username",
              validation: "required",
              modelValue: $data.username,
              "onUpdate:modelValue": ($event) => $data.username = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("div", { class: "flex items-center justify-end space-x-2 mt-5" }, [
              createVNode(_component_CoreActionButton, {
                type: "submit",
                icon: $data.saveIcon,
                text: "Save changes",
                color: "success",
                click: () => {
                },
                loading: $data.updating
              }, null, 8, ["icon", "loading"])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="py-3"><h3 class="text-xl font-semibold">Password</h3><p>Please enter your current password to change your password</p></div>`);
    _push(ssrRenderComponent(_component_FormKit, {
      type: "form",
      "submit-label": "Update",
      onSubmit: $options.changePassword,
      actions: false
    }, {
      default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="py-3 space-y-2.5"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_FormKit, {
            type: "password",
            label: "Old password",
            validation: "required",
            modelValue: $data.oldPassword,
            "onUpdate:modelValue": ($event) => $data.oldPassword = $event
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_FormKit, { type: "group" }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_FormKit, {
                  type: "password",
                  name: "password",
                  label: "Password",
                  validation: "required",
                  modelValue: $data.newPassword,
                  "onUpdate:modelValue": ($event) => $data.newPassword = $event,
                  "validation-visibility": "live"
                }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_FormKit, {
                  type: "password",
                  label: "Confirm new password",
                  name: "password_confirm",
                  validation: "required|confirm",
                  "validation-label": "Password confirmation",
                  "validation-visibility": "live"
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_FormKit, {
                    type: "password",
                    name: "password",
                    label: "Password",
                    validation: "required",
                    modelValue: $data.newPassword,
                    "onUpdate:modelValue": ($event) => $data.newPassword = $event,
                    "validation-visibility": "live"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_FormKit, {
                    type: "password",
                    label: "Confirm new password",
                    name: "password_confirm",
                    validation: "required|confirm",
                    "validation-label": "Password confirmation",
                    "validation-visibility": "live"
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div><div class="flex items-center justify-end space-x-2 mt-5"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            type: "submit",
            icon: $data.saveIcon,
            text: "Save changes",
            color: "success",
            click: () => {
            },
            loading: $data.loading
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", { class: "py-3 space-y-2.5" }, [
              createVNode(_component_FormKit, {
                type: "password",
                label: "Old password",
                validation: "required",
                modelValue: $data.oldPassword,
                "onUpdate:modelValue": ($event) => $data.oldPassword = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_FormKit, { type: "group" }, {
                default: withCtx(() => [
                  createVNode(_component_FormKit, {
                    type: "password",
                    name: "password",
                    label: "Password",
                    validation: "required",
                    modelValue: $data.newPassword,
                    "onUpdate:modelValue": ($event) => $data.newPassword = $event,
                    "validation-visibility": "live"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_FormKit, {
                    type: "password",
                    label: "Confirm new password",
                    name: "password_confirm",
                    validation: "required|confirm",
                    "validation-label": "Password confirmation",
                    "validation-visibility": "live"
                  })
                ]),
                _: 1
              })
            ]),
            createVNode("div", { class: "flex items-center justify-end space-x-2 mt-5" }, [
              createVNode(_component_CoreActionButton, {
                type: "submit",
                icon: $data.saveIcon,
                text: "Save changes",
                color: "success",
                click: () => {
                },
                loading: $data.loading
              }, null, 8, ["icon", "loading"])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { settings as default };
//# sourceMappingURL=settings-0e038f19.mjs.map
