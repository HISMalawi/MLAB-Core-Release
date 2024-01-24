import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { _ as _export_sfc, u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, resolveComponent, mergeProps, unref, withCtx, isRef, createVNode, createTextVNode, withDirectives, vShow, toDisplayString, openBlock, createElementBlock, createElementVNode } from 'vue';
import { d as calculateAge, e as endpoints, f as fetchRequest } from './fetch-40f40580.mjs';
import { e as errorMessage } from './constants-353d90a1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_1$1 } from './page-c16a1934.mjs';
import moment from 'moment';
import { P as Package } from './package-93ceb647.mjs';
import { ExportToWord } from 'vue-doc-exporter';
import { r as render$2 } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$3 } from './ArrowPathIcon-6ff7b048.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import './nuxt-link-149f0ed2.mjs';
import './HomeIcon-299b993b.mjs';
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import 'unctx';
import 'vue-router';
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
import 'pinia-plugin-persistedstate';
import 'vue3-easy-data-table';
import '@vuepic/vue-datepicker';
import 'vue-json-excel3';
import '@vueform/multiselect';
import 'vue3-toastify';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
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
    createElementVNode("path", { d: "M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" })
  ]);
}
const _imports_1 = "" + buildAssetsURL("word.873cd44d.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user-statistics",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - User Statistics Report`
    });
    const reportTypeSelected = ref({ name: "select report type" });
    const search = ref("");
    const searchValue = ref("");
    const refreshIcon = render$3;
    const statistics = ref(new Array());
    const cookie = useCookie("token");
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 100,
      sortBy: "name"
    });
    const serverItemsLength = ref(0);
    const loading = ref(false);
    const dateRange = ref([]);
    const title = ref("User Statistics Report");
    const users = ref([]);
    const showUsers = ref(false);
    const selectedUser = ref({
      name: "Select and search for user..."
    });
    const pages = ref([
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
    ]);
    const reportTypes = ref(
      [
        { name: "Summary" },
        { name: "Specimen Registry" },
        { name: "Patients Registry" },
        { name: "Tests Registry" },
        { name: "Tests Performed" }
      ]
    );
    const filteredStatistics = computed(() => {
      return statistics.value.map((item) => ({
        ...item,
        created_date: moment(item.created_date).format("DD/MMM/YYYY"),
        age: calculateAge(item.date_of_birth)
      }));
    });
    const filteredUsers = computed(() => {
      return users.value.map((user) => ({
        id: user.id,
        name: `${user.first_name} ${user.last_name}`
      }));
    });
    const dataSeachValue = computed(() => {
      const valueMappings = {
        "tests performed": "test_type",
        "patients registry": "actions",
        "tests registry": "test_type_name",
        "specimen registry": "specimen",
        "summary": "user"
      };
      const reportType = reportTypeSelected.value.name.toLowerCase();
      return valueMappings[reportType] || "";
    });
    const headers = computed(() => {
      const headerMappings = {
        "summary": new Array(
          { text: "Name", value: "user", sortable: true },
          { text: "Tests Received", value: "tests_received", sortable: true },
          { text: "Specimen Collected", value: "specimen_collected", sortable: true },
          { text: "Specimen Rejected", value: "specimen_rejected", sortable: true },
          { text: "Tests Performed", value: "tests_completed", sortable: true },
          { text: "Tests Authorized", value: "tests_authorized" }
        ),
        "specimen registry": new Array(
          { text: "Specimen Number", value: "id", sortable: true },
          { text: "Name", value: "specimen", sortable: true },
          { text: "Patient Number", value: "patient_no", sortable: true },
          { text: "Name", value: "patient_no", sortable: true },
          { text: "Date Registered", value: "created_date", sortable: true }
        ),
        "tests registry": new Array(
          { text: "Test Type", value: "test_type_name", sortable: true },
          { text: "Patient Number", value: "client.id", sortable: true },
          { text: "Patient Name", value: "actions", sortable: true },
          { text: "Specimen", value: "specimen_type", sortable: true },
          { text: "Date Registered", value: "created_date" }
        ),
        "patients registry": new Array(
          { text: "Patient Number", value: "id", sortable: true },
          { text: "Name", value: "actions", sortable: true },
          { text: "Gender", value: "sex", sortable: true },
          { text: "Age", value: "age", sortable: true },
          { text: "Date Registered", value: "created_date", sortable: true }
        ),
        "tests performed": new Array(
          { text: "Test Id", value: "test_id", sortable: true },
          { text: "Test Type", value: "test_type", sortable: true },
          { text: "Patient No", value: "patient_no", sortable: true },
          { text: "Patient Name", value: "patient_name", sortable: true },
          { text: "Accession Number", value: "accession_number", sortable: true },
          { text: "Date Registered", value: "created_date" }
        )
      };
      const reportType = reportTypeSelected.value.name.toLowerCase();
      return headerMappings[reportType] || new Array();
    });
    async function generateReport() {
      if (checkReportType(reportTypeSelected.value) == "")
        useNuxtApp().$toast.warning("Please select a report type!");
      else {
        loading.value = true;
        let startDate = dateRange.value[0].toDateString() != "" ? moment(dateRange.value[0].toDateString()).format("YYYY-MM-DD") : "";
        let endDate = dateRange.value[1].toDateString() != "" ? moment(dateRange.value[1].toDateString()).format("YYYY-MM-DD") : "";
        const { page, rowsPerPage } = serverOptions.value;
        let queryParams = `from=${startDate}&to=${endDate}&report_type=${checkReportType(reportTypeSelected.value).toLocaleLowerCase()}&page=${page}&limit=${rowsPerPage}&search=${search.value}`;
        const request = {
          route: `${endpoints.aggregateReports}user_statistics?${queryParams}`,
          method: "GET",
          token: `${cookie.value}`
        };
        const { data, error, pending } = await fetchRequest(request);
        loading.value = pending;
        if (data.value) {
          loading.value = false;
          statistics.value = data.value.data.tests;
          serverItemsLength.value = data.value.data.metadata.total_count;
          useNuxtApp().$toast.success("Report data generated successfully");
        }
        if (error.value) {
          loading.value = false;
          console.error(error.value);
          useNuxtApp().$toast.success(errorMessage);
        }
      }
    }
    async function getUsers() {
      const request = {
        route: `${endpoints.users}?page=${1}&per_page=${2e3}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        users.value = data.value.data;
      }
      if (error.value) {
        console.error(error.value);
      }
    }
    function checkReportType(report) {
      return report.name == "select report type" ? "" : report.name;
    }
    function updateReport(value) {
      if (typeof value === "object") {
        serverOptions.value = value;
      }
    }
    function update(value) {
      search.value = value;
      searchValue.value = value;
      generateReport();
    }
    watch(
      () => reportTypeSelected.value,
      (newValue, oldValue) => {
        newValue !== oldValue && (statistics.value = new Array());
        if (newValue.name.toLowerCase() == "summary") {
          getUsers();
          showUsers.value = true;
        } else {
          showUsers.value = false;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$1;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreDropdown = __nuxt_component_0;
      const _component_CoreActionButton = __nuxt_component_0$1;
      const _component_CoreDatatable = __nuxt_component_2;
      const _component_CoreLoader = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))} data-v-b998859c>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center py-5" data-v-b998859c><img${ssrRenderAttr("src", _imports_2)} alt="report-icon" class="w-8 h-8 mr-2" data-v-b998859c><h3 class="text-2xl font-semibold uppercase" data-v-b998859c>${ssrInterpolate(unref(title))}</h3></div><div class="w-full flex items-center justify-between mb-5" data-v-b998859c>`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "form",
        "submit-label": "Update",
        onSubmit: generateReport,
        actions: false,
        id: "submitForm"
      }, {
        default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex items-center space-x-3" data-v-b998859c${_scopeId}><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" data-v-b998859c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(render$2), { class: "w-5 h-5 mr-2" }, null, _parent2, _scopeId));
            _push2(` Filter By Date Range <div class="w-72 ml-2" data-v-b998859c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_datepicker, {
              required: "",
              position: "left",
              placeholder: "-- select start & end date --",
              range: true,
              "input-class-name": "datepicker",
              modelValue: unref(dateRange),
              "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" data-v-b998859c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(render$1), { class: "w-5 h-5 mr-2 my-2.5" }, null, _parent2, _scopeId));
            _push2(` Report Type <div class="w-48 ml-2" data-v-b998859c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreDropdown, {
              class: "bg-white",
              items: unref(reportTypes),
              modelValue: unref(reportTypeSelected),
              "onUpdate:modelValue": ($event) => isRef(reportTypeSelected) ? reportTypeSelected.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div style="${ssrRenderStyle(unref(showUsers) ? null : { display: "none" })}" class="flex justify-end px-2 py-2" data-v-b998859c${_scopeId}><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" data-v-b998859c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(render), { class: "w-5 h-5 mr-2 my-2.5" }, null, _parent2, _scopeId));
            _push2(` User `);
            _push2(ssrRenderComponent(_component_CoreDropdown, {
              class: "ml-2 bg-white",
              isSearchable: true,
              items: unref(filteredUsers),
              modelValue: unref(selectedUser),
              "onUpdate:modelValue": ($event) => isRef(selectedUser) ? selectedUser.value = $event : null,
              onUpdate: update
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="w-48" data-v-b998859c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreActionButton, {
              type: "submit",
              color: "success",
              text: "Generate Report",
              icon: unref(refreshIcon),
              click: () => {
              },
              loading: unref(loading)
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex items-center space-x-3" }, [
                createVNode("div", { class: "bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" }, [
                  createVNode(unref(render$2), { class: "w-5 h-5 mr-2" }),
                  createTextVNode(" Filter By Date Range "),
                  createVNode("div", { class: "w-72 ml-2" }, [
                    createVNode(_component_datepicker, {
                      required: "",
                      position: "left",
                      placeholder: "-- select start & end date --",
                      range: true,
                      "input-class-name": "datepicker",
                      modelValue: unref(dateRange),
                      "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" }, [
                  createVNode(unref(render$1), { class: "w-5 h-5 mr-2 my-2.5" }),
                  createTextVNode(" Report Type "),
                  createVNode("div", { class: "w-48 ml-2" }, [
                    createVNode(_component_CoreDropdown, {
                      class: "bg-white",
                      items: unref(reportTypes),
                      modelValue: unref(reportTypeSelected),
                      "onUpdate:modelValue": ($event) => isRef(reportTypeSelected) ? reportTypeSelected.value = $event : null
                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                withDirectives(createVNode("div", { class: "flex justify-end px-2 py-2" }, [
                  createVNode("div", { class: "bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" }, [
                    createVNode(unref(render), { class: "w-5 h-5 mr-2 my-2.5" }),
                    createTextVNode(" User "),
                    createVNode(_component_CoreDropdown, {
                      class: "ml-2 bg-white",
                      isSearchable: true,
                      items: unref(filteredUsers),
                      modelValue: unref(selectedUser),
                      "onUpdate:modelValue": ($event) => isRef(selectedUser) ? selectedUser.value = $event : null,
                      onUpdate: update
                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                  ])
                ], 512), [
                  [vShow, unref(showUsers)]
                ]),
                createVNode("div", { class: "w-48" }, [
                  createVNode(_component_CoreActionButton, {
                    type: "submit",
                    color: "success",
                    text: "Generate Report",
                    icon: unref(refreshIcon),
                    click: () => {
                    },
                    loading: unref(loading)
                  }, null, 8, ["icon", "loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-end px-2 py-2 mb-2" data-v-b998859c>`);
      _push(ssrRenderComponent(unref(ExportToWord), {
        element: "print-container",
        filename: "document"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="flex text-sm bg-sky-500 px-4 py-2 rounded text-white" data-v-b998859c${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="word-icon" class="w-5 h-5 object-cover mr-2" data-v-b998859c${_scopeId}> Export Word </button>`);
          } else {
            return [
              createVNode("button", { class: "flex text-sm bg-sky-500 px-4 py-2 rounded text-white" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: "word-icon",
                  class: "w-5 h-5 object-cover mr-2"
                }),
                createTextVNode(" Export Word ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(statistics).length > 0) {
        _push(`<div id="print-container" data-v-b998859c>`);
        _push(ssrRenderComponent(_component_CoreDatatable, {
          headers: unref(headers),
          data: unref(filteredStatistics),
          serverItemsLength: unref(serverItemsLength),
          serverOptions: unref(serverOptions),
          loading: unref(loading),
          "search-field": unref(dataSeachValue),
          "search-value": unref(search),
          onUpdate: updateReport
        }, {
          actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<td data-v-b998859c${_scopeId}>${ssrInterpolate(unref(reportTypeSelected).name.toLowerCase() == "patients registry" ? `${item.first_name}
                                            ${item.middle_name} ${item.last_name}` : `${item.client.first_name} ${item.client.middle_name}
                                            ${item.client.last_name}`)}</td>`);
            } else {
              return [
                createVNode("td", null, toDisplayString(unref(reportTypeSelected).name.toLowerCase() == "patients registry" ? `${item.first_name}
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
      if (unref(statistics).length == 0 && !unref(loading)) {
        _push(`<div class="w-full flex flex-col items-center justify-center space-y-2 py-10" data-v-b998859c><img${ssrRenderAttr("src", _imports_1$1)} alt="page-icon" class="object-cover w-20 h-20" data-v-b998859c><p data-v-b998859c>Data not found, please generate report</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(loading) ? null : { display: "none" })}" class="mx-auto justify-center flex flex-col items-center space-y-3" data-v-b998859c>`);
      _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
      _push(`<p data-v-b998859c>Generating report, please wait<span class="animate-ping" data-v-b998859c>...</span></p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/user-statistics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const userStatistics = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b998859c"]]);

export { userStatistics as default };
//# sourceMappingURL=user-statistics-694ff32f.mjs.map
