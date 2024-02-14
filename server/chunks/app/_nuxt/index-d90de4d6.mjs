import { _ as _sfc_main$1 } from './Breadcrumb-fc731a79.mjs';
import { _ as __nuxt_component_1 } from './SearchBar-a0fe3266.mjs';
import { _ as __nuxt_component_2 } from './Datatable-d607d390.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0 } from '../server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useHead } from './index-2cdcde44.mjs';
import { d as dateFormat, e as errorMessage } from './constants-9b77e6ea.mjs';
import moment from 'moment';
import { e as endpoints, f as fetchRequest } from './fetch-63157596.mjs';
import { P as Package } from './package-dd64359e.mjs';
import { r as render } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import { a as render$1 } from './PencilSquareIcon-77446728.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-42c558b2.mjs';
import './HomeIcon-299b993b.mjs';
import './XMarkIcon-170c776f.mjs';
import './Loader-86943425.mjs';
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
import '@headlessui/vue';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Patient Report`
    });
  },
  components: { MagnifyingGlassIcon: render },
  data() {
    return {
      headers: [
        { text: "patient id", value: "client_id", sortable: true },
        { text: "name", value: "name", sortable: true },
        { text: "sex", value: "sex", sortable: true },
        { text: "date of birth", value: "date_of_birth", sortable: true },
        { text: "actions", value: "actions" }
      ],
      patients: new Array(),
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Reports",
          link: "#"
        }
      ],
      search: "",
      loading: false,
      viewIcon: render$1,
      cookie: useCookie("token"),
      serverItemsLength: 0,
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      },
      searchField: "name",
      searchValue: ""
    };
  },
  created() {
    this.init();
  },
  computed: {
    filteredPatients() {
      return this.patients.map((patient) => ({
        ...patient,
        name: `${patient.first_name} ${patient.middle_name} ${patient.last_name}`.split(" ").map((namePart) => namePart.charAt(0).toUpperCase() + namePart.slice(1)).join(" "),
        date_of_birth: moment(patient.date_of_birth).format(dateFormat)
      }));
    }
  },
  methods: {
    updateSearch(value) {
      this.searchValue = value;
      this.search = value;
      this.updatePatients(true);
    },
    updatePatients(value) {
      if (typeof value === "object") {
        this.serverOptions = value;
      }
      this.init();
    },
    async init() {
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
        console.log(error.value.data);
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    },
    async viewReport(patient) {
      this.$router.push(
        `/reports/daily/patient-report/${patient.client_id}`
      );
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$1;
  const _component_CoreSearchBar = __nuxt_component_1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_CoreActionButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">Patient reports</h3></div><div class="flex justify-end w-full px-2 py-2 mb-2">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    onUpdate: $options.updateSearch
  }, null, _parent));
  _push(`</div>`);
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
          click: () => $options.viewReport(item),
          color: "primary",
          text: "View Report",
          icon: $data.viewIcon
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_CoreActionButton, {
              click: () => $options.viewReport(item),
              color: "primary",
              text: "View Report",
              icon: $data.viewIcon
            }, null, 8, ["click", "icon"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/daily/patient-report/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-d90de4d6.mjs.map
