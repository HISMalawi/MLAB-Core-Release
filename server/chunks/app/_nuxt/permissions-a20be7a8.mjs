import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as __nuxt_component_1 } from './SearchBar-0bf20ba4.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1$1 } from './Loader-c735e4ba.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { u as useHead } from './index-ca787103.mjs';
import { e as endpoints, f as fetchRequest } from './fetch-1797e116.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './AdjustmentsVerticalIcon-b0fd4e9f.mjs';
import { r as render$1 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$2 } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import { r as render$3 } from './InformationCircleIcon-68986861.mjs';
import { r as render$4 } from './EllipsisVerticalIcon-df211b72.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import './nuxt-link-0e3a4fce.mjs';
import './HomeIcon-299b993b.mjs';
import './XMarkIcon-170c776f.mjs';
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
import 'moment';
import './constants-353d90a1.mjs';
import '@headlessui/vue';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Permissions`
    });
  },
  data() {
    return {
      filterIcon: render,
      saveIcon: render$1,
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
      search: "",
      privileges: new Array(),
      roles: new Array(),
      cookie: useCookie("token"),
      loading: false
    };
  },
  components: { MagnifyingGlassIcon: render$2, InformationCircleIcon: render$3, EllipsisVerticalIcon: render$4 },
  created() {
    this.init();
    this.loadRoles();
  },
  computed: {
    filteredPrivileges() {
      if (!this.search) {
        return this.privileges;
      }
      const search = this.search.toLowerCase();
      return this.privileges.filter(
        (privilege) => privilege.display_name.toLowerCase().includes(search)
      );
    }
  },
  methods: {
    async init() {
      this.loading = true;
      const request = {
        route: endpoints.privileges,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, pending, error } = await fetchRequest(request);
      if (data.value) {
        this.privileges = data.value;
        this.loading = false;
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
        this.roles = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async update() {
      this.loading = true;
      const request = {
        route: `${endpoints.roles}/update_permissions`,
        method: "PUT",
        token: `${this.cookie}`,
        body: { "role_privileges": this.roles }
      };
      const { data, pending, error } = await fetchRequest(request);
      if (data.value) {
        this.loading = false;
        useNuxtApp().$toast.success(`Permissions updated successfully!`);
        this.init();
        this.loadRoles();
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
      }
    },
    updatePermissions(event, role, privilege) {
      if (event.target.checked) {
        role.privileges.push(privilege);
      } else {
        role.privileges.map((item, index) => {
          if (item.id === privilege.id) {
            role.privileges.splice(index, 1);
          }
        });
      }
    },
    updateSearch(value) {
      this.search = value;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_CoreSearchBar = __nuxt_component_1;
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_CoreLoader = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">Permissions</h3></div><div class="flex items-center space-x-3 justify-between">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    onUpdate: $options.updateSearch
  }, null, _parent));
  _push(ssrRenderComponent(_component_CoreActionButton, {
    loading: $data.loading,
    click: () => {
      $options.update();
    },
    text: "Save changes",
    color: "success",
    icon: $data.saveIcon
  }, null, _parent));
  _push(`</div><div class="w-full mt-5 rounded"><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}" class="flex items-center mx-auto justify-center py-20">`);
  _push(ssrRenderComponent(_component_CoreLoader, { loading: $data.loading }, null, _parent));
  _push(`</div><div class="overflow-x-auto mb-20 rounded" style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}"><table class="table-auto w-full border-collapse border rounded"><thead class="border-b"><tr><th class="px-20 py-2 text-left uppercase font-semibold border sticky left-0 bg-white">Permissions</th><!--[-->`);
  ssrRenderList($data.roles, (role) => {
    _push(`<th class="px-4 py-2 text-left uppercase font-semibold">${ssrInterpolate(role.name)}</th>`);
  });
  _push(`<!--]--></tr></thead><tbody><!--[-->`);
  ssrRenderList($options.filteredPrivileges, (privilege, index) => {
    _push(`<tr><td class="border-r sticky left-0 bg-white"><div class="space-y-2 border-l border-r"><div class="flex items-center justify-between border-b py-2 px-4 hover:bg-gray-100 transition duration-150 hover:font-medium"><p>${ssrInterpolate(privilege.display_name)}</p></div></div></td><!--[-->`);
    ssrRenderList($data.roles, (role, index2) => {
      _push(`<td class="border px-4 py-2"><input type="checkbox"${ssrIncludeBooleanAttr(role.privileges.filter((item) => item.name == privilege.name).length > 0) ? " checked" : ""} class="mr-2 leading-tight"></td>`);
    });
    _push(`<!--]--></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/access-controls/permissions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const permissions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { permissions as default };
//# sourceMappingURL=permissions-a20be7a8.mjs.map
