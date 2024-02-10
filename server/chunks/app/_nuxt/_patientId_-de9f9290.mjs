import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { _ as _export_sfc, u as useHead, a as useCookie, d as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './index-ec6348c9.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { a as dateRange, d as dateFormat } from './constants-9b77e6ea.mjs';
import { e as endpoints, f as fetchRequest, d as calculateAge } from './fetch-39024911.mjs';
import { resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import moment from 'moment';
import { u as useFacilityStore } from './facility-06a246b8.mjs';
import { P as Package } from './package-f9450e57.mjs';
import { r as render } from './UserIcon-3d66d73e.mjs';
import { r as render$1 } from './QrCodeIcon-566a836e.mjs';
import { r as render$2 } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$3 } from './PrinterIcon-02ac6ae4.mjs';
import { r as render$4 } from './ArrowPathIcon-6ff7b048.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './logo-86b75328.mjs';
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
import '@headlessui/vue';
import 'jspdf';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';

const _sfc_main = {
  name: "PatientReport",
  components: {
    UserIcon: render,
    QrCodeIcon: render$1,
    FunnelIcon: render$2
  },
  setup() {
    useHead({
      title: `${Package.name} - Patient Report`
    });
  },
  data() {
    return {
      dateRange: [],
      pages: [
        { name: "Home", link: "/home" },
        { name: "Reports", link: "#" },
        { name: "Daily Reports", link: "#" },
        { name: "Patient Report", link: "/reports/daily/patient-report" }
      ],
      location: {},
      reportData: new Array(),
      person_identifiers: [],
      physicalAddress: "",
      person: {},
      printIcon: render$3,
      refreshIcon: render$4,
      cookie: useCookie("token"),
      moment,
      facility: useFacilityStore(),
      hasSusceptivibility: false,
      authorizedTestCount: 0,
      showPendingTests: false,
      loading: false
    };
  },
  computed: {
    router() {
      return this.$router;
    },
    patientId() {
      return String(this.router.currentRoute.value.params.patientId);
    },
    orderId() {
      return String(this.$route.query.order_id);
    },
    getPhysicalAddress() {
      if (this.person_identifiers.length > 0) {
        this.person_identifiers.forEach((item) => {
          if (item.identifier_type === "current_traditional_authority" || item.identifier_type === "physical_address") {
            this.physicalAddress = item.value;
          }
        });
      }
      return this.physicalAddress;
    }
  },
  async created() {
    this.init();
  },
  methods: {
    async init() {
      this.loading = true;
      const orderId = this.$route.query.order_id;
      let startDate = dateRange[0].toString() != "" ? moment(dateRange[0].toString()).format("YYYY-MM-DD") : "";
      let endDate = dateRange[1].toString() != "" ? moment(dateRange[1].toString()).format("YYYY-MM-DD") : "";
      this.person_identifiers = new Array();
      if (orderId !== null && orderId !== void 0) {
        const request = {
          route: `${endpoints.tests}/${this.patientId}/report?order_id=${orderId}&from=${startDate}&to=${endDate}`,
          method: "GET",
          token: `${this.cookie}`
        };
        const { data, error, pending } = await fetchRequest(request);
        this.loading = pending;
        if (data.value) {
          this.loading = false;
          this.person = data.value.client.person;
          this.person_identifiers = data.value.client.client_identifiers;
          let formattedData = data.value.orders.map((order) => {
            let count = 0;
            if (order.tests !== void 0) {
              count += order.tests.filter(
                (test) => test.status.toLowerCase() === "verified"
              ).length;
            }
            return {
              ...order,
              tests_verified: count
            };
          });
          this.reportData = formattedData;
        }
        if (error.value) {
          this.loading = false;
          console.error(error.value);
        }
      } else {
        const request = {
          route: `${endpoints.tests}/${this.patientId}/report?from=${startDate}&to=${endDate}`,
          method: "GET",
          token: `${this.cookie}`
        };
        const { data, error, pending } = await fetchRequest(request);
        this.loading = pending;
        if (data.value) {
          this.person = data.value.client.person;
          this.person_identifiers = data.value.client.client_identifiers;
          let formattedData = data.value.orders.map((order) => {
            let count = 0;
            if (order.tests !== void 0) {
              count += order.tests.filter(
                (test) => test.status.toLowerCase() === "verified"
              ).length;
            }
            return {
              ...order,
              tests_verified: count
            };
          });
          this.reportData = formattedData;
          this.loading = false;
        }
        if (error.value) {
          console.error(error.value);
          this.loading = false;
        }
      }
    },
    getOrderStatusInitiatorName(data) {
      const specimenStatus = ["specimen-accepted", "specimen-rejected"];
      const result = data.find(
        (item) => specimenStatus.includes(item.status.name)
      );
      return result ? `${result.initiator.first_name} ${result.initiator.last_name}` : "";
    },
    getOrderStatus(status) {
      return status !== null ? this.capitalizeStr(status.split("-")[1]) : "";
    },
    getTestStatusInitiatorName(data, status) {
      const result = data.find((item) => status === item.status.name);
      return result ? {
        name: `${result.initiator.first_name} ${result.initiator.last_name}`,
        created_at: result.created_date
      } : {
        name: "",
        created_at: ""
      };
    },
    getTestTypes(data) {
      return data.map((item) => item.name).join(", ");
    },
    getDepartments(data) {
      const uniqueDepartments = [
        ...new Set(data.map((item) => item.department))
      ];
      return uniqueDepartments.join(", ");
    },
    getAuthorizedTestCount(data) {
      return data.reduce((count, order) => count + order.tests_verified, 0);
    },
    showIndicatorRanges(data) {
      return data.some(
        (indicator) => indicator.test_indicator_type === "numeric"
      );
    },
    getTestStatusName(status) {
      if (status == "verified") {
        status = "Authorized";
      } else {
        status = status.split("-").map((word) => this.capitalizeStr(word)).join(" ");
      }
      return status;
    },
    capitalizeStr(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    updateReport(value) {
      if (value) {
        this.init();
      }
    },
    checkSusceptibilityResults(report) {
      return report.tests.some(
        (test) => test.suscept_test_result.length !== 0
      );
    },
    getFilteredDrugs(drugs) {
      return drugs.filter((drug) => drug.zone !== null);
    },
    showResult(result, susceptibilityResults) {
      return susceptibilityResults.length > 0 ? `Growth of ${susceptibilityResults.map((result2) => result2.name).join(", ")}` : result;
    },
    shouldPrintSmallLabel(orders) {
      return orders.some(
        (order) => order.tests.some((test) => test.print_device)
      );
    },
    getSmallLabelPrintTests(orders) {
      const returnValue = [];
      orders.forEach((order) => {
        order.tests.forEach((test) => {
          if (test.print_device) {
            returnValue.push(test.id);
          }
        });
      });
      return returnValue;
    },
    getPrintCount(reportData) {
      return reportData.reduce(
        (count, report) => count + report.print_count,
        0
      );
    },
    getRequiredRange(patient, ranges) {
      const patientSex = patient.sex == "M" ? "Male" : "Female";
      const age = Number(calculateAge(patient.date_of_birth));
      return ranges.filter(
        (range) => range.sex === patientSex && age > Number(range.min_age) && age < Number(range.max_age) || range.sex === "Both" && age > Number(range.min_age) && age < Number(range.max_age)
      )[0];
    },
    shouldDisplayRange(indicators, patient, indicator) {
      let result = null;
      if (this.showIndicatorRanges(indicators)) {
        result = this.getRequiredRange(patient, indicator.indicator_ranges);
      }
      return result;
    }
  }
};
const _imports_0 = "" + buildAssetsURL("medical-record.2202ac05.png");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$1;
  const _component_FunnelIcon = resolveComponent("FunnelIcon");
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_CorePrinter = __nuxt_component_1;
  const _component_CoreLoader = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center py-5"><img${ssrRenderAttr("src", _imports_0)} alt="report-icon" class="w-8 h-8 mr-2"><h3 class="text-2xl font-semibold uppercase"> patient report for <span class="text-sky-500 text-2xl">&quot;${ssrInterpolate(`${$data.person.first_name} ${$data.person.middle_name} ${$data.person.last_name}`)}&quot;</span></h3></div><div class="mt-2 space-y-3"><div class="w-full flex items-center justify-between"><div class="flex items-center space-x-5"><div class="bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500">`);
  _push(ssrRenderComponent(_component_FunnelIcon, { class: "w-5 h-5 mr-2" }, null, _parent));
  _push(` Filter By Date Range <div class="w-72 ml-2">`);
  _push(ssrRenderComponent(_component_datepicker, {
    required: "",
    position: "left",
    placeholder: "select start & end date",
    range: true,
    "input-class-name": "datepicker",
    modelValue: $data.dateRange,
    "onUpdate:modelValue": ($event) => $data.dateRange = $event
  }, null, _parent));
  _push(`</div></div><div class="flex items-center space-x-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.showPendingTests) ? ssrLooseContain($data.showPendingTests, null) : $data.showPendingTests) ? " checked" : ""}><label>Include pending tests</label></div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    loading: $data.loading,
    color: "primary",
    text: "Generate Report",
    icon: $data.refreshIcon,
    click: () => $options.init()
  }, null, _parent));
  _push(`</div><div>`);
  if ($options.getAuthorizedTestCount($data.reportData) > 0) {
    _push(ssrRenderComponent(_component_CorePrinter, {
      "print-small-label": $options.shouldPrintSmallLabel($data.reportData),
      id: $options.patientId,
      orderId: $options.orderId,
      tests: $options.getSmallLabelPrintTests($data.reportData),
      onUpdate: $options.updateReport
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if ($data.reportData.length > 0) {
    _push(`<div class="border rounded print-container mt-10"><div class="rounded-tr rounded-tl border-b px-5 py-5"><div class="flex items-center justify-between"><div class="flex items-center space-x-2"><img${ssrRenderAttr("src", _imports_0$1)} alt="app-logo" class="w-24 h-24 object-cover"><h3 class="text-2xl font-semibold">PATIENT REPORT</h3></div><div class="bg-gray-50 px-4 py-2 rounded border border-dotted"><address class="font-normal"><span class="flex items-center not-italic text-xl font-semibold border-b mb-2 border-dotted">${ssrInterpolate($data.facility.details.name)}</span><span class="flex items-center not-italic text-gray-600">${ssrInterpolate($data.facility.details.address)}</span><span class="flex items-center not-italic text-gray-600">${ssrInterpolate($data.facility.details.phone)}</span></address></div></div><div class="flex items-center justify-between mt-5"><div><span class="font-medium">Report Date:</span> ${ssrInterpolate($data.moment( new Date()).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</div><div><span class="font-medium">No. Printed:</span> ${ssrInterpolate($options.getPrintCount($data.reportData))}</div><div><span class="font-medium">Date Sample Collected:</span> ${ssrInterpolate($data.reportData.length > 0 && $data.moment($data.reportData[0].sample_collected_time).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</div></div><table class="w-full mt-2"><tbody><tr><td class="border px-2 py-2 font-bold">Patient Name</td><td class="border px-2 py-2">${ssrInterpolate(`${$data.person.first_name} ${$data.person.middle_name} ${$data.person.last_name}`)}</td><td class="border px-2 py-2 font-bold">Sex</td><td class="border px-2 py-2">${ssrInterpolate($data.person.sex === "F" ? "Female" : "Male")}</td><td class="border px-2 py-2 font-bold">Age</td><td class="border px-2 py-2">${ssrInterpolate(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))($data.person.date_of_birth))} yr(s) </td></tr><tr><td class="border px-2 py-2 font-bold">Patient ID</td><td class="border px-2 py-2">${ssrInterpolate($data.person.id)}</td><td class="border px-2 py-2 font-bold" colspan="2">Address</td><td class="border px-2 py-2" colspan="2">${ssrInterpolate($options.getPhysicalAddress)}</td></tr></tbody></table></div><!--[-->`);
    ssrRenderList($data.reportData, (report, index) => {
      _push(`<div><div class="bg-gray-100 text-gray-600 border-b flex items-center justify-between px-2 py-2 font-medium"><div class="flex items-center"> Accession No: ${ssrInterpolate(report.accession_number)}</div><div> Requested By: ${ssrInterpolate(report.requested_by)} (${ssrInterpolate(report.requesting_ward)}) </div></div><table class="border-collapse border-slate-500 w-full"><tbody><tr><td class="border-b border-r px-2 py-2 font-bold"> Specimen Type </td><td class="border-b border-r px-2 py-2">${ssrInterpolate(report.specimen)}</td><td class="border-b border-r px-2 py-2 font-bold"> Date Registered </td><td class="border-b px-2 py-2">${ssrInterpolate($data.moment(report.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</td></tr><tr><td class="border-b border-r px-2 py-2 font-bold"> Test Type(s) </td><td class="border-b border-r px-2 py-2">${ssrInterpolate($options.getTestTypes(report.test_types))}</td><td class="border-b border-r px-2 py-2 font-bold"> Lab Sections </td><td class="border-b px-2 py-2">${ssrInterpolate($options.getDepartments(report.test_types))}</td></tr><tr><td class="border-b border-r px-2 py-2 font-bold"> Specimen Status </td><td class="border-b border-r px-2 py-2">${ssrInterpolate($options.getOrderStatus(report.order_status))}</td><td class="border-b border-r px-2 py-2 font-bold"> Received By </td><td class="border-b px-2 py-2">${ssrInterpolate($options.getOrderStatusInitiatorName(report.order_status_trail))}</td></tr></tbody></table><table class="border-collapse w-full"><thead><tr class="bg-gray-100 text-gray-600"><th class="px-2 py-2 text-lg font-semibold">Results</th><th${ssrRenderAttr("colspan", 3)} class="px-2 py-2 text-lg font-semibold"> Tests Authorized(${ssrInterpolate(report.tests_verified)}) </th></tr></thead><tbody><tr><th class="border px-2 py-2 font-bold">Test Types</th><th class="border px-2 py-2 font-bold">Results</th><th class="border px-2 py-2 font-bold">Remarks</th><th class="border px-2 py-2 font-bold">Audit details</th></tr><!--[-->`);
      ssrRenderList($data.showPendingTests ? report.tests : report.tests.filter((item) => item.status.toLowerCase() !== "pending"), (test) => {
        var _a;
        _push(`<tr><td class="border px-2 py-2">${ssrInterpolate(test.test_type_name)}</td><td class="border"><table class="w-full h-full"><tr><td class="border px-2 py-2 font-bold">Measure</td><td class="border px-2 py-2 font-bold">Result</td><td class="border px-2 py-2 font-bold">Range</td></tr><!--[-->`);
        ssrRenderList(test.indicators, (indicator) => {
          var _a3;
          var _a2, _b;
          _push(`<tr><td class="border px-2 py-2">${ssrInterpolate(indicator.name)}</td><td class="border-b px-2 py-2 flex items-center"><p>${$options.showResult(
            (_a3 = (_a2 = indicator.result) == null ? void 0 : _a2.value) != null ? _a3 : "",
            test == null ? void 0 : test.suscept_test_result
          )}</p>`);
          if ((_b = indicator.result) == null ? void 0 : _b.value) {
            _push(`<span class="text-xs pt-1 pl-1">${ssrInterpolate((test == null ? void 0 : test.suscept_test_result.length) > 0 ? "" : indicator == null ? void 0 : indicator.unit)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td>`);
          if ($options.shouldDisplayRange(
            test.indicators,
            $data.person,
            indicator
          ) !== void 0 && $options.shouldDisplayRange(
            test.indicators,
            $data.person,
            indicator
          ) !== null) {
            _push(`<td class="border px-2 py-2 font-bold"> (${ssrInterpolate($options.shouldDisplayRange(test.indicators, $data.person, indicator).lower_range)} - ${ssrInterpolate($options.shouldDisplayRange(test.indicators, $data.person, indicator).upper_range)}) </td>`);
          } else {
            _push(`<td class="border px-2 py-2">N/A</td>`);
          }
          _push(`</tr>`);
        });
        _push(`<!--]--></table></td><td class="border px-2 py-2">${ssrInterpolate((_a = test == null ? void 0 : test.remarks) != null ? _a : "N/A")}</td><td class="border px-2 py-2"><div class="test-status"><p class="font-bold">Test Status</p><p class="px-2">${ssrInterpolate($options.getTestStatusName(test.status))}</p><p class="px-2"> By: ${ssrInterpolate($options.getTestStatusInitiatorName(
          test.status_trail,
          test.status
        )["name"])}</p><p class="px-2"> On: ${ssrInterpolate($data.moment(
          $options.getTestStatusInitiatorName(
            test.status_trail,
            test.status
          )["created_at"]
        ).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div>`);
        if ($options.getTestStatusInitiatorName(
          test.status_trail,
          "completed"
        )["name"]) {
          _push(`<div class="performed-by"><p class="font-bold">Performed By</p><p class="px-2">${ssrInterpolate($options.getTestStatusInitiatorName(
            test.status_trail,
            "completed"
          )["name"])}</p><p class="px-2"> On: ${ssrInterpolate($data.moment(
            $options.getTestStatusInitiatorName(
              test.status_trail,
              "completed"
            )["created_at"]
          ).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="m-2" style="${ssrRenderStyle($options.checkSusceptibilityResults(report) ? null : { display: "none" })}"><h3 class="text-lg font-semibold uppercase mb-3 mt-3"> Suscpeptibility Test Results </h3><div><!--[-->`);
      ssrRenderList(report.tests, (test) => {
        _push(`<div class="grid grid-cols-2 gap-4">`);
        if (test.test_type_name.toLowerCase().includes("culture")) {
          _push(`<!--[-->`);
          ssrRenderList(test.suscept_test_result, (result, index2) => {
            _push(`<div><div class="border rounded-tr rounded-tl px-2 py-2 font-medium text-lg">${ssrInterpolate(result.name)}</div><table class="w-full"><thead><tr class="border-b px-2 py-2 text-left border-r border-l"><th class="px-4 py-2 border-r">Drug</th><th class="px-4 py-2 border-r">Zone (mm)</th><th class="px-4 py-2">Intrepretation</th></tr></thead><tbody classs="border-l border-r"><!--[-->`);
            ssrRenderList($options.getFilteredDrugs(result.drugs), (drug) => {
              _push(`<tr><th class="text-left border-l border-r px-4 py-2 border-b font-normal">${ssrInterpolate(drug.name)}</th><th class="text-left border-l border-r px-4 py-2 border-b font-normal">${ssrInterpolate(drug.zone)}</th><th class="text-left border-l border-r px-4 py-2 border-b font-normal">${ssrInterpolate(drug.interpretation)}</th></tr>`);
            });
            _push(`<!--]--></tbody></table></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}" class="mx-auto justify-center flex flex-col items-center space-y-3 py-20">`);
  _push(ssrRenderComponent(_component_CoreLoader, null, null, _parent));
  _push(`<p class="text-base"> Generating report, please wait<span class="animate-ping">...</span></p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/daily/patient-report/[patientId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _patientId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _patientId_ as default };
//# sourceMappingURL=_patientId_-de9f9290.mjs.map
