import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-15d8abe8.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$2 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './SearchBar-0bf20ba4.mjs';
import { _ as __nuxt_component_2 } from './Datatable-0c4b7b4f.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useHead } from './index-ca787103.mjs';
import { d as calculateAge, e as endpoints, f as fetchRequest } from './fetch-63049419.mjs';
import { e as errorMessage } from './constants-353d90a1.mjs';
import moment from 'moment';
import { P as Package } from './package-cc00c60c.mjs';
import { ExportToExcel, ExportToWord } from 'vue-doc-exporter';
import { r as render } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import { r as render$1 } from './ArrowUpTrayIcon-a90cd76a.mjs';
import { r as render$2 } from './ArrowPathIcon-6ff7b048.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './stock_out-9944e6b9.mjs';
import './nuxt-link-0e3a4fce.mjs';
import './HomeIcon-299b993b.mjs';
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
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
import './XMarkIcon-170c776f.mjs';
import './Loader-c735e4ba.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = {
  components: { MagnifyingGlassIcon: render, ExportToExcel, ExportToWord },
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - User Statistics Report`
    });
  },
  data() {
    return {
      title: "User Statistics Report",
      exportIcon: render$1,
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Reports",
          link: "#"
        },
        {
          name: "Aggregate Reports",
          link: "#"
        }
      ],
      reportTypes: [{ name: "Summary" }, { name: "Specimen Registry" }, { name: "Patients Registry" }, { name: "Tests Registry" }, { name: "Tests Performed" }],
      reportTypeSelected: { name: "-- select report type --" },
      dateFrom: "",
      dateTo: "",
      search: "",
      searchValue: "",
      refreshIcon: render$2,
      statistics: new Array(),
      cookie: useCookie("token"),
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      },
      serverItemsLength: 0,
      loading: false
    };
  },
  computed: {
    headers() {
      const headerMappings = {
        "summary": [
          { text: "Name", value: "user", sortable: true },
          { text: "Tests Received", value: "tests_received", sortable: true },
          { text: "Specimen Collected", value: "specimen_collected", sortable: true },
          { text: "Specimen Rejected", value: "specimen_rejected", sortable: true },
          { text: "Tests Performed", value: "tests_completed", sortable: true },
          { text: "Tests Authorized", value: "tests_authorized" }
        ],
        "specimen registry": [
          { text: "Specimen Number", value: "id", sortable: true },
          { text: "Name", value: "specimen", sortable: true },
          { text: "Patient Number", value: "patient_no", sortable: true },
          { text: "Name", value: "patient_no", sortable: true },
          { text: "Date Registered", value: "created_date", sortable: true }
        ],
        "tests registry": [
          { text: "Test Type", value: "test_type_name", sortable: true },
          { text: "Patient Number", value: "client.id", sortable: true },
          { text: "Patient Name", value: "actions", sortable: true },
          { text: "Specimen", value: "specimen_type", sortable: true },
          { text: "Date Registered", value: "created_date" }
        ],
        "patients registry": [
          { text: "Patient Number", value: "id", sortable: true },
          { text: "Name", value: "actions", sortable: true },
          { text: "Gender", value: "sex", sortable: true },
          { text: "Age", value: "age", sortable: true },
          { text: "Date Registered", value: "created_date", sortable: true }
        ],
        "tests performed": [
          { text: "Test Id", value: "test_id", sortable: true },
          { text: "Test Type", value: "test_type", sortable: true },
          { text: "Patient No", value: "patient_no", sortable: true },
          { text: "Patient Name", value: "patient_name", sortable: true },
          { text: "Accession Number", value: "accession_number", sortable: true },
          { text: "Date Registered", value: "created_date" }
        ]
      };
      const reportType = this.reportTypeSelected.name.toLowerCase();
      return headerMappings[reportType] || [];
    },
    filteredStatistics() {
      return this.statistics.map((item) => ({
        ...item,
        created_date: moment(item.created_date).format("DD/MMM/YYYY"),
        age: calculateAge(item.date_of_birth)
      }));
    },
    dataSeachValue() {
      const valueMappings = {
        "tests performed": "test_type",
        "patients registry": "actions",
        "tests registry": "test_type_name",
        "specimen registry": "specimen",
        "summary": "user"
      };
      const reportType = this.reportTypeSelected.name.toLowerCase();
      return valueMappings[reportType] || "";
    }
  },
  methods: {
    async generateReport() {
      this.loading = true;
      let startDate = this.dateFrom != "" ? moment(this.dateFrom).format("YYYY-MM-DD") : "";
      let endDate = this.dateTo != "" ? moment(this.dateTo).format("YYYY-MM-DD") : "";
      const { page, rowsPerPage } = this.serverOptions;
      let queryParams = `from=${startDate}&to=${endDate}&report_type=${this.checkReportType(this.reportTypeSelected).toLocaleLowerCase()}&page=${page}&limit=${rowsPerPage}`;
      const request = {
        route: `${endpoints.aggregateReports}user_statistics?${queryParams}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        this.statistics = data.value.data.tests;
        this.serverItemsLength = data.value.data.metadata.total_count;
        useNuxtApp().$toast.success("Report data generated successfully");
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
        useNuxtApp().$toast.success(errorMessage);
      }
    },
    checkReportType(report) {
      return report.name == "-- select report type --" ? "" : report.name;
    },
    updateReport(value) {
      if (typeof value === "object") {
        this.serverOptions = value;
      }
      this.generateReport();
    },
    update(value) {
      this.seach = value;
      this.searchValue = value;
    }
  },
  watch: {
    reportTypeSelected: {
      handler() {
        this.statistics = new Array();
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_CoreActionButton = __nuxt_component_0$2;
  const _component_ExportToWord = resolveComponent("ExportToWord");
  const _component_CoreSearchBar = __nuxt_component_1;
  const _component_CoreDatatable = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.title)}</h3></div><div class="w-full flex items-center justify-between mb-5"><div class="w-full flex items-center space-x-3"><div class="w-48 space-y-2">`);
  _push(ssrRenderComponent(_component_datepicker, {
    position: "left",
    placeholder: "-- start date --",
    range: false,
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    modelValue: $data.dateFrom,
    "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
    format: "dd/MM/yyyy"
  }, null, _parent));
  _push(`</div><div class="w-48 space-y-2">`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: "-- end date --",
    range: false,
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    modelValue: $data.dateTo,
    "onUpdate:modelValue": ($event) => $data.dateTo = $event,
    format: "dd/MM/yyyy"
  }, null, _parent));
  _push(`</div><div class="w-48 space-y-2">`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.reportTypes,
    modelValue: $data.reportTypeSelected,
    "onUpdate:modelValue": ($event) => $data.reportTypeSelected = $event
  }, null, _parent));
  _push(`</div><div class="w-48">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    color: "success",
    text: "Generate Report",
    icon: $data.refreshIcon,
    click: () => $options.generateReport(),
    loading: $data.loading
  }, null, _parent));
  _push(`</div></div><div class="flex justify-end w-full px-2 py-2 mb-2">`);
  _push(ssrRenderComponent(_component_ExportToWord, {
    element: "print-container",
    filename: "document"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          text: "Export",
          color: "success",
          icon: $data.exportIcon,
          click: () => {
          }
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreActionButton, {
            text: "Export",
            color: "success",
            icon: $data.exportIcon,
            click: () => {
            }
          }, null, 8, ["icon"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  if ($data.statistics.length > 0) {
    _push(`<div class="flex justify-end w-full px-2 py-2 mb-2">`);
    _push(ssrRenderComponent(_component_CoreSearchBar, {
      search: $data.search,
      "onUpdate:search": ($event) => $data.search = $event,
      onUpdate: $options.update
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.statistics.length > 0) {
    _push(`<div id="print-container">`);
    _push(ssrRenderComponent(_component_CoreDatatable, {
      headers: $options.headers,
      data: $options.filteredStatistics,
      serverItemsLength: $data.serverItemsLength,
      serverOptions: $data.serverOptions,
      loading: $data.loading,
      "search-field": $options.dataSeachValue,
      "search-value": $data.searchValue,
      onUpdate: $options.updateReport
    }, {
      actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p${_scopeId}>${ssrInterpolate($data.reportTypeSelected.name.toLowerCase() == "patients registry" ? `${item.first_name}
                                            ${item.middle_name} ${item.last_name}` : `${item.client.first_name} ${item.client.middle_name}
                                            ${item.client.last_name}`)}</p>`);
        } else {
          return [
            createVNode("p", null, toDisplayString($data.reportTypeSelected.name.toLowerCase() == "patients registry" ? `${item.first_name}
                                            ${item.middle_name} ${item.last_name}` : `${item.client.first_name} ${item.client.middle_name}
                                            ${item.client.last_name}`), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.statistics.length == 0) {
    _push(`<div class="flex flex-col space-y-3 items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="w-20 h-20"><p class="font-medium">Please generate report data to preview the report</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/user-statistics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const userStatistics = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { userStatistics as default };
//# sourceMappingURL=user-statistics-4a790f1c.mjs.map
