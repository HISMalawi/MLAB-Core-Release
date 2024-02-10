import { _ as _sfc_main$1 } from './Breadcrumb-fc731a79.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as _sfc_main$2 } from './ExportButton-c520dc00.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, resolveComponent, mergeProps, unref, withCtx, isRef, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, toDisplayString, createElementBlock, createElementVNode } from 'vue';
import { u as useHead } from './index-2cdcde44.mjs';
import { d as calculateAge, e as endpoints, f as fetchRequest } from './fetch-63157596.mjs';
import { d as dateFormat, e as errorMessage } from './constants-9b77e6ea.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_1 } from './page-c16a1934.mjs';
import moment from 'moment';
import { P as Package } from './package-f9450e57.mjs';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { r as render$1 } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$2 } from './XMarkIcon-170c776f.mjs';
import { r as render$3 } from './ArrowPathIcon-6ff7b048.mjs';
import './nuxt-link-42c558b2.mjs';
import './HomeIcon-299b993b.mjs';
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
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
import './PencilSquareIcon-77446728.mjs';
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
      d: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
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
      rowsPerPage: 20,
      sortBy: "name"
    });
    const serverItemsLength = ref(0);
    const loading = ref(false);
    const dateRange = ref([]);
    const title = ref("User Statistics Report");
    const users = ref([]);
    ref(false);
    const facility = useFacilityStore();
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
    const exportData = computed(() => {
      const report = reportTypeSelected.value;
      const generateSummary = () => {
        return filteredStatistics.value.length > 0 && report.name == "Summary" ? filteredStatistics.value.map((statistic) => ({
          "USER": statistic.user,
          "TESTS COMPLETED": statistic.tests_completed,
          "TESTS RECEIVED": statistic.tests_received,
          "SPECIMEN COLLECTED": statistic.specimen_collected,
          "SPECIMEN REJECTED": statistic.specimen_rejected,
          "TESTS AUTHORIZED": statistic.tests_authorized
        })) : [];
      };
      const generatePatientsRegistry = () => {
        return filteredStatistics.value.length > 0 && report.name == "Patient Registry" ? filteredStatistics.value.map((statistic) => ({
          "PATIENT NO": statistic.id,
          "PATIENT NAME": `${statistic.client.first_name} ${statistic.client.last_name}`,
          "AGE": statistic.age,
          "SEX": statistic.sex
        })) : [];
      };
      const generateTestsRegistry = () => {
        return filteredStatistics.value.length > 0 && report.name == "Tests Registry" ? filteredStatistics.value.map((statistic) => ({
          "TEST TYPE": statistic.test_type_name,
          "PATIENT NUMBER": statistic.id,
          "PATIENT NAME": `${statistic.client.first_name} ${statistic.client.last_name}`,
          "SPECIMEN": statistic.specimen_type,
          "DATE REGISTERED": statistic.created_date
        })) : [];
      };
      const generateSpecimenRegistry = () => {
        return filteredStatistics.value.length > 0 && report.name == "Specimen Registry" ? filteredStatistics.value.map((statistic) => ({
          "SPECIMEN NUMBER": statistic.id,
          "PATIENT NAME": statistic.patient_name,
          "PATIENT NUMBER": statistic.patient_no,
          "DATE REGISTERED": statistic.created_date
        })) : [];
      };
      const generateTestsPerformed = () => {
        return filteredStatistics.value.length > 0 && report.name == "Tests Performed" ? filteredStatistics.value.map((statistic) => ({
          "TEST TYPE": statistic.test_type_name,
          "PATIENT NUMBER": statistic.id,
          "PATIENT NAME": statistic.patient_name,
          "SPECIMEN": statistic.specimen_type,
          "DATE REGISTERED": statistic.created_date
        })) : [];
      };
      const mapping = {
        "Summary": generateSummary(),
        "Patient Registry": generatePatientsRegistry(),
        "Tests Registry": generateTestsRegistry(),
        "Specimen Registry": generateSpecimenRegistry(),
        "Tests Performed": generateTestsPerformed()
      };
      return mapping[report.name];
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
      const mappings = {
        "summary": new Array(
          { text: "Name", value: "user" },
          { text: "Tests Received", value: "tests_received" },
          { text: "Specimen Collected", value: "specimen_collected" },
          { text: "Specimen Rejected", value: "specimen_rejected" },
          { text: "Tests Performed", value: "tests_completed" },
          { text: "Tests Authorized", value: "tests_authorized" }
        ),
        "specimen registry": new Array(
          { text: "Specimen Number", value: "id" },
          { text: "Name", value: "specimen" },
          { text: "Patient Number", value: "patient_no" },
          { text: "Patient Name", value: "patient_name" },
          { text: "Date Registered", value: "created_date" }
        ),
        "tests registry": new Array(
          { text: "Test Type", value: "test_type_name" },
          { text: "Patient Number", value: "client.id" },
          { text: "Patient Name", value: "actions" },
          { text: "Specimen", value: "specimen_type" },
          { text: "Date Registered", value: "created_date" }
        ),
        "patients registry": new Array(
          { text: "Patient Number", value: "id" },
          { text: "Name", value: "actions" },
          { text: "Gender", value: "sex" },
          { text: "Age", value: "age" },
          { text: "Date Registered", value: "created_date" }
        ),
        "tests performed": new Array(
          { text: "Test Id", value: "test_id" },
          { text: "Test Type", value: "test_type" },
          { text: "Patient No", value: "patient_no" },
          { text: "Patient Name", value: "patient_name" },
          { text: "Accession Number", value: "accession_number" },
          { text: "Date Registered", value: "created_date" }
        )
      };
      const reportType = reportTypeSelected.value.name.toLowerCase();
      return mappings[reportType] || new Array();
    });
    const startDate = computed(() => {
      return dateRange.value[0] ? moment(dateRange.value[0]).format("YYYY-MM-DD") : "";
    });
    const endDate = computed(() => {
      return dateRange.value[1] ? moment(dateRange.value[1]).format("YYYY-MM-DD") : "";
    });
    async function generateReport() {
      if (checkReportType(reportTypeSelected.value) == "")
        useNuxtApp().$toast.warning("Please select a report type!");
      else {
        loading.value = true;
        const { page, rowsPerPage } = serverOptions.value;
        let queryParams = `from=${startDate.value}&to=${endDate.value}&report_type=${checkReportType(reportTypeSelected.value).toLocaleLowerCase()}&page=${page}&limit=${rowsPerPage}&user=${selectedUser.value.id}`;
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
          data.value.data.tests.length > 0 ? useNuxtApp().$toast.success("Report data generated successfully") : useNuxtApp().$toast.warning(`No data found in period ${startDate.value} - ${endDate.value}`);
        }
        if (error.value) {
          loading.value = false;
          console.error(error.value);
          useNuxtApp().$toast.error(errorMessage);
        }
      }
    }
    async function getUsers() {
      const { data, error } = await fetchRequest(
        {
          route: `${endpoints.users}?page=${1}&per_page=${2e3}`,
          method: "GET",
          token: `${cookie.value}`
        }
      );
      if (data.value) {
        users.value = data.value.data;
        const allUserExist = filteredUsers.value.some(
          (user) => user.name == "All"
        );
        if (!allUserExist) {
          filteredUsers.value.unshift({ id: 0, name: "All" });
        }
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
      () => serverOptions.value,
      (o, n) => {
        o != n && generateReport();
      }
    );
    watch(
      () => reportTypeSelected.value,
      (t, d) => {
        t != d && (statistics.value = []);
      }
    );
    getUsers();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = _sfc_main$1;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreDropdown = __nuxt_component_0;
      const _component_CoreActionButton = __nuxt_component_0$1;
      const _component_excel = resolveComponent("excel");
      const _component_CoreExportButton = _sfc_main$2;
      const _component_CoreDatatable = __nuxt_component_2;
      const _component_CoreLoader = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))} data-v-737abe50>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center py-5" data-v-737abe50><img${ssrRenderAttr("src", _imports_2)} alt="report-icon" class="w-8 h-8 mr-2" data-v-737abe50><h3 class="text-2xl font-semibold uppercase" data-v-737abe50>${ssrInterpolate(unref(title))}</h3></div><div class="w-full flex items-center justify-between mb-5" data-v-737abe50>`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "form",
        "submit-label": "Update",
        onSubmit: generateReport,
        actions: false,
        id: "submitForm"
      }, {
        default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex items-center space-x-3" data-v-737abe50${_scopeId}><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" data-v-737abe50${_scopeId}>`);
            _push2(ssrRenderComponent(unref(render$1), { class: "w-5 h-5 mr-2" }, null, _parent2, _scopeId));
            _push2(` Filter By Date Range <div class="w-72 ml-2" data-v-737abe50${_scopeId}>`);
            _push2(ssrRenderComponent(_component_datepicker, {
              required: "",
              position: "left",
              placeholder: "select start & end date",
              range: true,
              "input-class-name": "datepicker",
              modelValue: unref(dateRange),
              "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null,
              format: "dd/MM/yyyy"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" data-v-737abe50${_scopeId}>`);
            _push2(ssrRenderComponent(unref(render), { class: "w-5 h-5 mr-2 my-2.5" }, null, _parent2, _scopeId));
            _push2(` Report Type <div class="w-48 ml-2" data-v-737abe50${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreDropdown, {
              class: "bg-white",
              items: unref(reportTypes),
              modelValue: unref(reportTypeSelected),
              "onUpdate:modelValue": ($event) => isRef(reportTypeSelected) ? reportTypeSelected.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end py-2" data-v-737abe50${_scopeId}><div class="bg-gray-100 rounded flex items-center text-zinc-500" data-v-737abe50${_scopeId}><div class="w-48" data-v-737abe50${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreDropdown, {
              class: "bg-white rounded",
              isSearchable: true,
              items: unref(filteredUsers),
              modelValue: unref(selectedUser),
              "onUpdate:modelValue": ($event) => isRef(selectedUser) ? selectedUser.value = $event : null,
              onUpdate: update
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(selectedUser).name != null && unref(selectedUser).name !== "Select and search for user...") {
              _push2(`<button type="button" data-v-737abe50${_scopeId}>`);
              _push2(ssrRenderComponent(unref(render$2), { class: "w-5 h-5 mx-2 my-2.5" }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="w-48" data-v-737abe50${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CoreActionButton, {
              type: "submit",
              color: "primary",
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
                  createVNode(unref(render$1), { class: "w-5 h-5 mr-2" }),
                  createTextVNode(" Filter By Date Range "),
                  createVNode("div", { class: "w-72 ml-2" }, [
                    createVNode(_component_datepicker, {
                      required: "",
                      position: "left",
                      placeholder: "select start & end date",
                      range: true,
                      "input-class-name": "datepicker",
                      modelValue: unref(dateRange),
                      "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null,
                      format: "dd/MM/yyyy"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500" }, [
                  createVNode(unref(render), { class: "w-5 h-5 mr-2 my-2.5" }),
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
                createVNode("div", { class: "flex justify-end py-2" }, [
                  createVNode("div", { class: "bg-gray-100 rounded flex items-center text-zinc-500" }, [
                    createVNode("div", { class: "w-48" }, [
                      createVNode(_component_CoreDropdown, {
                        class: "bg-white rounded",
                        isSearchable: true,
                        items: unref(filteredUsers),
                        modelValue: unref(selectedUser),
                        "onUpdate:modelValue": ($event) => isRef(selectedUser) ? selectedUser.value = $event : null,
                        onUpdate: update
                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                    ]),
                    unref(selectedUser).name != null && unref(selectedUser).name !== "Select and search for user..." ? (openBlock(), createBlock("button", {
                      key: 0,
                      type: "button",
                      onClick: ($event) => selectedUser.value = { name: "Select and search for user..." }
                    }, [
                      createVNode(unref(render$2), { class: "w-5 h-5 mx-2 my-2.5" })
                    ], 8, ["onClick"])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "w-48" }, [
                  createVNode(_component_CoreActionButton, {
                    type: "submit",
                    color: "primary",
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
      _push(ssrRenderComponent(_component_excel, {
        class: "btn btn-default",
        header: [`USER STATISTICS ${unref(reportTypeSelected).name.toUpperCase()} REPORT`, `PERIOD FROM ${unref(moment)(unref(startDate)).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))} TO ${unref(moment)(unref(endDate)).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))}`, unref(facility).details.name, unref(facility).details.address, unref(facility).details.phone],
        data: unref(exportData),
        worksheet: "report-work-sheet",
        name: `user_statistics_report_${unref(reportTypeSelected).name.toLowerCase().split(" ").join("_")}_${unref(moment)(unref(startDate)).format("DD_MM_yyyy")}_to_${unref(moment)(unref(endDate)).format("DD_MM_yyyy")}.xls`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CoreExportButton, { text: "Export Excel" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CoreExportButton, { text: "Export Excel" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(statistics).length > 0) {
        _push(`<div id="print-container" data-v-737abe50>`);
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
              _push2(`<td data-v-737abe50${_scopeId}>${ssrInterpolate(unref(reportTypeSelected).name.toLowerCase() == "patients registry" ? `${item.first_name}
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
        _push(`<div class="w-full flex flex-col items-center justify-center space-y-2 py-10" data-v-737abe50><img${ssrRenderAttr("src", _imports_1)} alt="page-icon" class="object-cover w-20 h-20" data-v-737abe50><p data-v-737abe50>Data not found, please generate report</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) && unref(statistics).length == 0) {
        _push(`<div class="mx-auto justify-center flex flex-col items-center space-y-3" data-v-737abe50>`);
        _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
        _push(`<p class="text-base" data-v-737abe50>Generating report, please wait<span class="animate-ping" data-v-737abe50>...</span></p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/aggregate/user-statistics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const userStatistics = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-737abe50"]]);

export { userStatistics as default };
//# sourceMappingURL=user-statistics-e55ba318.mjs.map
