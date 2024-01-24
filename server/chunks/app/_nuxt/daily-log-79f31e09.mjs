import { _ as _sfc_main$4 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { _ as _export_sfc, u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0$1 } from '../server.mjs';
import { d as dateFormat } from './constants-353d90a1.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createVNode, unref } from 'vue';
import moment from 'moment';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { e as endpoints, f as fetchRequest, d as calculateAge } from './fetch-40f40580.mjs';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { ExportToExcel } from 'vue-doc-exporter';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import { P as Package } from './package-93ceb647.mjs';
import { r as render } from './XMarkIcon-170c776f.mjs';
import { r as render$1 } from './AdjustmentsVerticalIcon-b0fd4e9f.mjs';
import { r as render$2 } from './DocumentTextIcon-d89971e2.mjs';
import { r as render$3 } from './ArrowUpOnSquareIcon-7c0eceb5.mjs';
import { r as render$4 } from './CheckIcon-e4d11b9e.mjs';
import { r as render$5 } from './ArrowPathIcon-6ff7b048.mjs';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import './nuxt-link-149f0ed2.mjs';
import 'ufo';
import './HomeIcon-299b993b.mjs';
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
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
        return reportData.findIndex((p) => p.patient_no === patient.patient_no) === index;
      });
      return uniquePatients;
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-3 py-3 uppercase"> SUMMARY </div><table class="w-full text-left"><thead class="uppercase bg-gray-100"><tr class="border-b"><th class="uppercase py-2 px-2 border-r"> TOTAL VISITS </th><th class="uppercase py-2 px-2 border-r"> MALE </th><th class="uppercase py-2 px-2 border-r"> FEMALE </th></tr></thead><tbody><tr><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(_ctx.data.visits)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(_ctx.removeDuplicates(_ctx.details).filter((detail) => detail.gender == "M").length)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(_ctx.removeDuplicates(_ctx.details).filter((detail) => detail.gender == "F").length)}</th></tr></tbody></table><div><table class="w-full text-left mt-10"><thead class="uppercase bg-gray-100"><tr class="border-b"><th class="uppercase py-2 px-2 border-r"> PATIENT NO </th><th class="uppercase py-2 px-2 border-r"> PATIENT NAME </th><th class="uppercase py-2 px-2 border-r"> AGE </th><th class="uppercase py-2 px-2 border-r"> SEX </th><th class="uppercase py-2 px-2 border-r"> ACCESSION NUMBER </th><th class="uppercase py-2 px-2 border-r"> SPECIMEN TYPE </th><th class="uppercase py-2 px-2 border-r"> TESTS </th></tr></thead><tbody><!--[-->`);
  ssrRenderList(_ctx.details, (report, index) => {
    _push(`<tr><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.patient_no)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.patient_name)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))(report.dob))}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.gender)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.accession_number)}</th><th class="px-2 py-2 font-normal border-r border-b">${ssrInterpolate(report.specimen)}</th><th class="px-2 py-2 font-normal border-r border-b space-y-1"><!--[-->`);
    ssrRenderList(report.test_type, (test_type, index2) => {
      _push(`<p>${ssrInterpolate(test_type)}</p>`);
    });
    _push(`<!--]--></th></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/daily-log/patient-records/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name} - Daily Log Reports`
    });
  },
  components: {
    XMarkIcon: render,
    Popover,
    PopoverButton,
    PopoverPanel,
    ExportToExcel
  },
  data() {
    return {
      moment,
      filtersIcon: render$1,
      wordIcon: render$2,
      viewIcon: render$3,
      checkIcon: render$4,
      generateIcon: render$5,
      facility: useFacilityStore(),
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
      selectedRole: { name: "Administrator" },
      filters: [],
      cookie: useCookie("token"),
      departments: new Array(),
      selectedDepartment: { "name": "-- select department --" },
      testTypes: new Array(),
      selectedtTestType: { "name": "-- select test type --" },
      testStatuses: new Array(),
      selectedTestStatus: { "name": "-- select test status --" },
      startDate: "",
      endDate: "",
      reportData: {},
      completeTests: 0,
      reportTypes: new Array(
        {
          name: "Test record",
          value: "test_record"
        },
        {
          name: "Patient record",
          value: "patient_record"
        }
      ),
      reportType: {
        name: "-- select report type --",
        value: "-- select report type --"
      },
      loading: false
    };
  },
  created() {
    this.getDepartments();
    this.getTestStatuses();
  },
  methods: {
    async getDepartments() {
      const request = {
        route: endpoints.departments,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        this.departments = data.value;
      }
      if (error.value)
        ;
    },
    async getTestTypes() {
      const request = {
        route: `${endpoints.testTypes}/by_department?department_id=${this.selectedDepartment.id}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        this.testTypes = data.value;
      }
      if (error.value)
        ;
    },
    async getTestStatuses() {
      const request = {
        route: `${endpoints.testStatus}/all`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        this.testStatuses = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    checkStatus(status) {
      let returnValue = "";
      if (status == "-- select department --" || status === "-- select test type --" || status === "-- select test status --") {
        returnValue = "";
      } else {
        returnValue = status;
      }
      return returnValue;
    },
    async generateReport() {
      var _a;
      this.loading = true;
      if (this.reportType.value != "-- select report type --") {
        let startDate = this.startDate != "" ? moment(this.startDate).format("YYYY-MM-DD") : "";
        let endDate = this.endDate != "" ? moment(this.endDate).format("YYYY-MM-DD") : "";
        let queryParams = `from=${startDate}&to=${endDate}&department=${this.checkStatus(this.selectedDepartment.name)}&report_type=${this.reportType.value}&test_status=${this.checkStatus(this.selectedTestStatus.name)}&test_type=${this.checkStatus(this.selectedtTestType.name)}`;
        const request = {
          route: `${endpoints.dailyReports}/daily_log?${queryParams}`,
          method: "GET",
          token: `${this.cookie}`
        };
        const { data, error, pending } = await fetchRequest(request);
        this.loading = pending;
        if (data.value) {
          this.loading = false;
          ((_a = data.value) == null ? void 0 : _a.data.length) == 0 && useNuxtApp().$toast.warning("No data found for specified parameters");
          this.reportData = data.value;
          if (this.reportType.value == "test_record") {
            this.calculateCompleteTests(data.value);
          }
        }
        if (error.value) {
          this.loading = false;
          console.error(error.value);
        }
      } else {
        useNuxtApp().$toast.warning("Please select the report type before generating the report");
        this.loading = false;
      }
    },
    calculateCompleteTests(reportData) {
      reportData.data.map((report) => {
        if (report.test_status.toLowerCase() === "completed" || report.test_status.toLowerCase() === "verified") {
          this.completeTests += 1;
        }
      });
    }
  },
  watch: {
    selectedDepartment: {
      handler(newValue) {
        if (newValue) {
          this.getTestTypes();
        }
      },
      deep: true
    },
    reportType: {
      handler(newValue) {
        this.reportData = new Array();
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_CoreBreadcrumb = _sfc_main$4;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreDropdown = __nuxt_component_0;
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_ExportToExcel = resolveComponent("ExportToExcel");
  const _component_DailyLogTestRecords = __nuxt_component_3;
  const _component_DailyLogPatientRecords = __nuxt_component_4;
  const _component_DailyLogSpecimenRejected = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between"><div class="bg-white flex space-x-5 py-5 flex-wrap"><div class="w-52"><p class="text-lg font-medium mb-1">Start date</p>`);
  _push(ssrRenderComponent(_component_datepicker, {
    position: "left",
    placeholder: "-- start date --",
    format: "dd/MM/yyyy",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    range: false,
    shortcuts: false,
    modelValue: $data.startDate,
    "onUpdate:modelValue": ($event) => $data.startDate = $event
  }, null, _parent));
  _push(`</div><div class="w-52"><p class="text-lg font-medium mb-1">End date</p>`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: "-- end date --",
    format: "dd/MM/yyyy",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    range: false,
    shortcuts: false,
    modelValue: $data.endDate,
    "onUpdate:modelValue": ($event) => $data.endDate = $event
  }, null, _parent));
  _push(`</div><div class="flex flex-col"><p class="text-lg font-medium">Laboratory section</p>`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.departments,
    modelValue: $data.selectedDepartment,
    "onUpdate:modelValue": ($event) => $data.selectedDepartment = $event
  }, null, _parent));
  _push(`</div><div class="flex flex-col"><p class="text-lg font-medium">Test type</p>`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.testTypes,
    modelValue: $data.selectedtTestType,
    "onUpdate:modelValue": ($event) => $data.selectedtTestType = $event
  }, null, _parent));
  _push(`</div><div class="flex flex-col"><p class="text-lg font-medium">Test status</p>`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.testStatuses,
    modelValue: $data.selectedTestStatus,
    "onUpdate:modelValue": ($event) => $data.selectedTestStatus = $event
  }, null, _parent));
  _push(`</div></div></div><div class="mb-5 flex items-center space-x-5"><div class="flex flex-col"><p class="text-lg font-medium">Report type</p>`);
  _push(ssrRenderComponent(_component_CoreDropdown, {
    items: $data.reportTypes,
    modelValue: $data.reportType,
    "onUpdate:modelValue": ($event) => $data.reportType = $event
  }, null, _parent));
  _push(`</div><div class="mt-8 flex items-center space-x-5">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    color: "primary",
    text: "Generate Report",
    icon: $data.generateIcon,
    loading: $data.loading,
    click: () => $options.generateReport()
  }, null, _parent));
  _push(ssrRenderComponent(_component_ExportToExcel, {
    element: "export-container",
    filename: `daily_${$data.reportType.value}_${$data.moment( new Date()).format("yyy_MM_DD")}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          icon: $data.wordIcon,
          click: () => {
          },
          text: "Export to Excel",
          color: "success"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreActionButton, {
            icon: $data.wordIcon,
            click: () => {
            },
            text: "Export to Excel",
            color: "success"
          }, null, 8, ["icon"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  if (((_b = (_a = $data.reportData) == null ? void 0 : _a.data) == null ? void 0 : _b.length) > 0) {
    _push(`<div class="border rounded" id="export-container"><div class="flex items-center justify-between px-5 bg-gray-50 rounded-t border-b"><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2 py-5"><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></div></div><div class="px-5 py-5">`);
    if ($data.reportType.value == "test_record" && $data.selectedTestStatus.name !== "test-rejected") {
      _push(`<h3 class="text-lg font-semibold">Test Record: <span class="text-md font-normal">${ssrInterpolate($data.completeTests)} Complete tests</span></h3>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<h3 class="text-lg font-semibold">Date: <span class="text-md font-normal">${ssrInterpolate((_c = $data.reportData) == null ? void 0 : _c.from)}</span></h3></div><div class="w-full border-t">`);
    if ($data.reportType.value == "test_record" && $data.selectedTestStatus.name !== "test-rejected") {
      _push(ssrRenderComponent(_component_DailyLogTestRecords, { data: $data.reportData }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($data.reportType.value == "patient_record") {
      _push(ssrRenderComponent(_component_DailyLogPatientRecords, { data: $data.reportData }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($data.selectedTestStatus.name == "test-rejected") {
      _push(ssrRenderComponent(_component_DailyLogSpecimenRejected, { data: $data.reportData }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/daily/daily-log.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dailyLog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { dailyLog as default };
//# sourceMappingURL=daily-log-79f31e09.mjs.map
