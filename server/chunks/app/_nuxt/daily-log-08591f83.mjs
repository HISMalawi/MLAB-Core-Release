import { _ as _sfc_main$4 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0$1, _ as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$5 } from './ExportButton-c520dc00.mjs';
import { _ as _sfc_main$6 } from './Address-069ccacc.mjs';
import { d as dateFormat } from './constants-9b77e6ea.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, resolveComponent, mergeProps, unref, isRef, withCtx, createVNode } from 'vue';
import moment from 'moment';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { d as calculateAge, e as endpoints, f as fetchRequest } from './fetch-39024911.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { _ as _imports_2 } from './report-32d900bb.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_1 } from './page-c16a1934.mjs';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import { P as Package } from './package-b5464064.mjs';
import { r as render } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$1 } from './ArrowPathIcon-6ff7b048.mjs';
import './nuxt-link-149f0ed2.mjs';
import 'ufo';
import './HomeIcon-299b993b.mjs';
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
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
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      moment,
      headers: [
        {
          name: "Patient ID"
        },
        {
          name: "Visit No"
        },
        {
          name: "Patient Name"
        },
        {
          name: "Accession Number"
        },
        {
          name: "Specimen"
        },
        {
          name: "Receipt Date"
        },
        {
          name: "Tests"
        },
        {
          name: "Performed By"
        },
        {
          name: "Results"
        },
        {
          name: "Remarks"
        },
        {
          name: "Results Entry Date"
        },
        {
          name: "Authorized By"
        }
      ],
      reportData: this.data
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-x-auto" }, _attrs))}><table class="w-full text-left overflow-y-auto"><thead class="uppercase bg-gray-100"><tr class="border-b"><!--[-->`);
  ssrRenderList(_ctx.headers, (header, index) => {
    _push(`<th class="uppercase py-2 px-2 border-r">${ssrInterpolate(header.name)}</th>`);
  });
  _push(`<!--]--></tr></thead><tbody><!--[-->`);
  ssrRenderList(_ctx.data.data, (report, index) => {
    _push(`<tr class="bg-white border-b"><th class="px-2 py-2 font-normal border-r">${ssrInterpolate(report.patient_id)}</th><th class="px-2 py-2 font-normal border-r">${ssrInterpolate(report.visit_no)}</th><th class="px-2 py-2 font-normal border-r">${ssrInterpolate(report.patient_name)}</th><th class="px-2 py-2 font-normal border-r">${ssrInterpolate(report.accession_number)}</th><th class="px-2 py-2 font-normal border-r">${ssrInterpolate(report.specimen)}</th><th class="px-2 py-2 font-normal border-r">${ssrInterpolate(_ctx.moment(report.receipt_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</th><th class="px-2 py-2 font-normal border-r">${ssrInterpolate(report.test)}</th><th class="px-2 py-2 font-normal border-r">${ssrInterpolate(report.performed_by)}</th><th class="px-2 py-2 font-normal border-r"><!--[-->`);
    ssrRenderList(report.results, (result, test) => {
      _push(`<p>`);
      if (result !== null && result !== void 0 && result !== "") {
        _push(`<span class="font-medium">${ssrInterpolate(`${test}:`)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(result)}</p>`);
    });
    _push(`<!--]--></th><th class="px-2 py-2 font-normal border-r">${ssrInterpolate(report.remarks)}</th><th class="px-2 py-2 font-normal border-r">${ssrInterpolate(_ctx.moment(report.result_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</th><th class="px-2 py-2 font-normal">${ssrInterpolate(report.authorized_by)}</th></tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/daily-log/test-records/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    var _a;
    return {
      details: (_a = this.data) == null ? void 0 : _a.data
    };
  },
  methods: {
    removeDuplicates(reportData) {
      const uniquePatients = reportData.filter((patient, index) => {
        return reportData.findIndex(
          (p) => p.patient_no === patient.patient_no
        ) === index;
      });
      return uniquePatients;
    }
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div><table class="w-full text-left"><thead class="uppercase bg-gray-100"><tr class="border-b"><th class="uppercase py-2 px-2 border-r">PATIENT NO</th><th class="uppercase py-2 px-2 border-r">PATIENT NAME</th><th class="uppercase py-2 px-2 border-r">AGE</th><th class="uppercase py-2 px-2 border-r">SEX</th><th class="uppercase py-2 px-2 border-r">ACCESSION NUMBER</th><th class="uppercase py-2 px-2 border-r">SPECIMEN TYPE</th><th class="uppercase py-2 px-2 border-r">TESTS</th></tr></thead><tbody><!--[-->`);
  ssrRenderList(_ctx.details, (report, index) => {
    _push(`<tr><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.patient_no)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.patient_name)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))(report.dob))}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.gender)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.accession_number)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.specimen)}</th><th class="px-2 py-2 font-normal border-r border-b space-y-1"><!--[-->`);
    ssrRenderList(report.test_type, (test_type, index2) => {
      _push(`<p>${ssrInterpolate(test_type)}</p>`);
    });
    _push(`<!--]--></th></tr>`);
  });
  _push(`<!--]--></tbody></table></div><div class="px-3 py-3 uppercase">SUMMARY</div><table class="w-full text-left"><thead class="uppercase bg-gray-100"><tr class="border-b"><th class="uppercase py-2 px-2 border-r">TOTAL VISITS</th><th class="uppercase py-2 px-2 border-r">MALE</th><th class="uppercase py-2 px-2 border-r">FEMALE</th></tr></thead><tbody><tr><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(_ctx.data.visits.length)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(_ctx.removeDuplicates(_ctx.details).filter(
    (detail) => detail.gender == "M"
  ).length)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(_ctx.removeDuplicates(_ctx.details).filter(
    (detail) => detail.gender == "F"
  ).length)}</th></tr></tbody></table></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/daily-log/patient-records/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    var _a;
    return {
      details: (_a = this.data) == null ? void 0 : _a.data
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><table class="w-full text-left"><thead class="uppercase bg-gray-100"><tr class="border-b"><th class="uppercase py-2 px-2 border-r"> ACCESSION NUMBER </th><th class="uppercase py-2 px-2 border-r"> SPECIMEN </th><th class="uppercase py-2 px-2 border-r"> RECEIPT DATE </th><th class="uppercase py-2 px-2 border-r"> TESTS </th><th class="uppercase py-2 px-2 border-r"> LAB selection </th><th class="uppercase py-2 px-2 border-r"> REJECTION REASON </th><th class="uppercase py-2 px-2 border-r"> PERSON TALKED TO </th><th class="uppercase py-2 px-2 border-r"> DATE REJECTED </th></tr></thead><tbody><!--[-->`);
  ssrRenderList(_ctx.details, (report, index) => {
    _push(`<tr><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.accession_number)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.specimen)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.receipt_date)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.test)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.department)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.rejection_reason)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.person_talked_to)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.test_status_date)}</th></tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/daily-log/specimen-rejected/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "daily-log",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name} - Daily Log Reports`
    });
    const facility = useFacilityStore();
    const pages = ref([
      {
        name: "Home",
        link: "/home"
      },
      {
        name: "Reports",
        link: "#"
      }
    ]);
    const cookie = useCookie("token");
    const departments = ref([]);
    const selectedDepartment = ref({ name: "select department" });
    const testTypes = ref([]);
    const selectedtTestType = ref({ name: "select test type" });
    const testStatuses = ref([]);
    const selectedTestStatus = ref({ name: "select test status" });
    const dateRange = ref([]);
    const reportData = ref({});
    const completeTests = ref(0);
    const reportTypes = ref([
      {
        name: "Test record",
        value: "test_record"
      },
      {
        name: "Patient record",
        value: "patient_record"
      }
    ]);
    const reportType = ref({
      name: "select report type",
      value: "select report type"
    });
    const loading = ref(false);
    const startDate = computed(() => {
      return dateRange.value[0] ? moment(dateRange.value[0]).format("YYYY-MM-DD") : "";
    });
    const endDate = computed(() => {
      return dateRange.value[1] ? moment(dateRange.value[1]).format("YYYY-MM-DD") : "";
    });
    async function getDepartments() {
      const request = {
        route: endpoints.departments,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        departments.value = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    }
    async function getTestTypes() {
      const request = {
        route: `${endpoints.testTypes}/by_department?department_id=${selectedDepartment.value.id}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        testTypes.value = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    }
    function checkStatus(status) {
      let returnValue = "";
      if (status == "select department" || status === "select test type" || status === "select test status") {
        returnValue = "";
      } else {
        returnValue = status;
      }
      return returnValue;
    }
    async function getTestStatuses() {
      const request = {
        route: `${endpoints.testStatus}/all`,
        method: "GET",
        token: `${cookie.value}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        testStatuses.value = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    }
    const extractResults = (results) => {
      return Object.entries(results).map(([key, value]) => `${key}: ${value}`).join(", ");
    };
    const exportData = computed(() => {
      let t = new Array();
      reportType.value.value == "test_record" && (reportData.value.data && reportData.value.data.map((data) => {
        t.push({
          "PATIENT ID": data.patient_id,
          "PATIENT NAME": data.patient_name,
          "ACCESSION NUMBER": data.accession_number,
          "SPECIMEN": data.specimen,
          "RECEIPT DATE": moment(data.receipt_date).format(dateFormat),
          "TEST": data.test,
          "PERFORMED BY": data.performed_by,
          "RESULTS": extractResults(data.results),
          "REMARKS": data.remarks,
          "RESULTS ENTRY DATE": moment(data.result_date).format(dateFormat),
          "AUTHORIZED BY": data.authorized_by
        });
      }));
      reportType.value.value == "patient_record" && (reportData.value.data && reportData.value.data.map((data) => {
        t.push({
          "PATIENT ID": data.patient_no,
          "PATIENT NAME": data.patient_name,
          "AGE": calculateAge(data.dob),
          "SEX": data.gender,
          "ACCESSION NUMBER": data.accession_number,
          "SPECIMEN TYPE": data.specimen,
          "TESTS": data.test_type.join(", ")
        });
      }));
      return t;
    });
    async function generateReport() {
      var _a;
      loading.value = true;
      if (reportType.value.value != "select report type") {
        let queryParams = `from=${startDate.value}&to=${endDate.value}&department=${checkStatus(selectedDepartment.value.name)}&report_type=${reportType.value.value}&test_status=${checkStatus(
          selectedTestStatus.value.name
        )}&test_type=${checkStatus(selectedtTestType.value.name)}`;
        const { data, error, pending } = await fetchRequest({
          route: `${endpoints.dailyReports}/daily_log?${queryParams}`,
          method: "GET",
          token: `${cookie.value}`
        });
        loading.value = pending;
        if (data.value) {
          loading.value = false;
          ((_a = data.value) == null ? void 0 : _a.data.length) == 0 && useNuxtApp().$toast.warning("No data found for specified parameters");
          reportData.value = data.value;
          if (reportType.value.value == "test_record") {
            calculateCompleteTests(data.value);
          }
        }
        if (error.value) {
          loading.value = false;
          console.error(error.value);
        }
      } else {
        useNuxtApp().$toast.warning(
          "Please select the report type before generating the report"
        );
        loading.value = false;
      }
    }
    function calculateCompleteTests(reportData2) {
      reportData2.data.map((report) => {
        if (report.test_status.toLowerCase() === "completed" || report.test_status.toLowerCase() === "verified") {
          completeTests.value += 1;
        }
      });
    }
    watch(
      () => selectedDepartment.value,
      () => {
        getTestTypes();
      }
    );
    watch(
      () => reportType.value,
      () => {
        reportData.value = [];
      }
    );
    getDepartments();
    getTestTypes();
    getTestStatuses();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_CoreBreadcrumb = _sfc_main$4;
      const _component_datepicker = resolveComponent("datepicker");
      const _component_CoreDropdown = __nuxt_component_0;
      const _component_CoreActionButton = __nuxt_component_0$1;
      const _component_excel = resolveComponent("excel");
      const _component_CoreExportButton = _sfc_main$5;
      const _component_ReportsAddress = _sfc_main$6;
      const _component_DailyLogTestRecords = __nuxt_component_5;
      const _component_DailyLogPatientRecords = __nuxt_component_6;
      const _component_DailyLogSpecimenRejected = __nuxt_component_7;
      const _component_CoreLoader = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center py-5"><img${ssrRenderAttr("src", _imports_2)} alt="report-icon" class="w-8 h-8 mr-2"><h3 class="text-2xl font-semibold uppercase">Daily Log Report</h3></div><div class="flex items-center"><div class="bg-white flex space-x-5 py-5 flex-wrap"><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500">`);
      _push(ssrRenderComponent(unref(render), { class: "w-5 h-5 mr-2" }, null, _parent));
      _push(` Filter By Date Range <div class="w-72 ml-2">`);
      _push(ssrRenderComponent(_component_datepicker, {
        required: "",
        position: "left",
        placeholder: "select start & end date",
        range: true,
        "input-class-name": "datepicker",
        modelValue: unref(dateRange),
        "onUpdate:modelValue": ($event) => isRef(dateRange) ? dateRange.value = $event : null
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col">`);
      _push(ssrRenderComponent(_component_CoreDropdown, {
        items: unref(departments),
        modelValue: unref(selectedDepartment),
        "onUpdate:modelValue": ($event) => isRef(selectedDepartment) ? selectedDepartment.value = $event : null
      }, null, _parent));
      _push(`</div><div class="flex flex-col">`);
      _push(ssrRenderComponent(_component_CoreDropdown, {
        items: unref(testTypes),
        modelValue: unref(selectedtTestType),
        "onUpdate:modelValue": ($event) => isRef(selectedtTestType) ? selectedtTestType.value = $event : null
      }, null, _parent));
      _push(`</div><div class="flex flex-col">`);
      _push(ssrRenderComponent(_component_CoreDropdown, {
        items: unref(testStatuses),
        modelValue: unref(selectedTestStatus),
        "onUpdate:modelValue": ($event) => isRef(selectedTestStatus) ? selectedTestStatus.value = $event : null
      }, null, _parent));
      _push(`</div><div class="flex flex-col">`);
      _push(ssrRenderComponent(_component_CoreDropdown, {
        items: unref(reportTypes),
        modelValue: unref(reportType),
        "onUpdate:modelValue": ($event) => isRef(reportType) ? reportType.value = $event : null
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        color: "primary",
        text: "Generate Report",
        icon: unref(render$1),
        loading: unref(loading),
        click: () => generateReport()
      }, null, _parent));
      _push(ssrRenderComponent(_component_excel, {
        class: "btn btn-default",
        header: [
          `DAILY LOG ${unref(reportType).name.toUpperCase()} REPORT`,
          `PERIOD: ${unref(startDate)} - ${unref(endDate)}`,
          unref(facility).details.name,
          unref(facility).details.address,
          unref(facility).details.phone
        ],
        data: unref(exportData),
        worksheet: "report-work-sheet",
        name: `daily_log_${unref(reportType).value}_report.xls`
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
      _push(`</div></div><div class="border rounded"><div class="flex items-center justify-between px-5 py-5 border-b"><div class="flex flex-col space-y-2"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-xl font-semibold">DAILY LOG REPORT</h3></div>`);
      _push(ssrRenderComponent(_component_ReportsAddress, null, null, _parent));
      _push(`</div><div class="px-5 py-3">`);
      if (unref(reportType).value == "test_record" && unref(selectedTestStatus).name !== "test-rejected") {
        _push(`<h3 class="text-lg font-semibold"> Test Record: <span class="text-md font-normal">${ssrInterpolate(unref(completeTests))} Complete tests</span></h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="text-lg font-semibold"> Tests Performed Period: <span class="text-md font-normal">${ssrInterpolate(unref(startDate))} - ${ssrInterpolate(unref(endDate))}</span></h3></div>`);
      if (((_b = (_a = unref(reportData)) == null ? void 0 : _a.data) == null ? void 0 : _b.length) > 0) {
        _push(`<div class="w-full border-t">`);
        if (unref(reportType).value == "test_record" && unref(selectedTestStatus).name !== "test-rejected") {
          _push(ssrRenderComponent(_component_DailyLogTestRecords, { data: unref(reportData) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(reportType).value == "patient_record") {
          _push(ssrRenderComponent(_component_DailyLogPatientRecords, { data: unref(reportData) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(selectedTestStatus).name == "test-rejected") {
          _push(ssrRenderComponent(_component_DailyLogSpecimenRejected, { data: unref(reportData) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(reportData).length == 0 && !unref(loading)) {
        _push(`<div class="w-full flex flex-col items-center justify-center space-y-2 py-10"><img${ssrRenderAttr("src", _imports_1)} alt="page-icon" class="object-cover w-20 h-20"><p>Data not found, please generate report</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) && unref(reportData).length == 0) {
        _push(`<div class="mx-auto justify-center flex flex-col items-center space-y-3 py-10">`);
        _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
        _push(`<p class="text-base"> Generating report, please wait<span class="animate-ping">...</span></p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/daily/daily-log.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=daily-log-08591f83.mjs.map
