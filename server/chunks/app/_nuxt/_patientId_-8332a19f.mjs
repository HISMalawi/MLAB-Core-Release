import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as _export_sfc, u as useCookie, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './index-83caf0d7.mjs';
import { d as dateFormat } from './constants-353d90a1.mjs';
import { e as endpoints, f as fetchRequest, _ as _imports_0, h as calculateAge } from './fetch-1797e116.mjs';
import { resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { u as useHead } from './index-ca787103.mjs';
import moment from 'moment';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './UserIcon-3d66d73e.mjs';
import { r as render$1 } from './QrCodeIcon-566a836e.mjs';
import { r as render$2 } from './PrinterIcon-02ac6ae4.mjs';
import { r as render$3 } from './ArrowPathIcon-6ff7b048.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './logo-86b75328.mjs';
import './nuxt-link-0e3a4fce.mjs';
import './HomeIcon-299b993b.mjs';
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
import '@headlessui/vue';
import 'html2canvas';
import 'jspdf';
import './XMarkIcon-170c776f.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './PencilSquareIcon-77446728.mjs';

const _sfc_main = {
  name: "PatientReport",
  components: {
    UserIcon: render,
    QrCodeIcon: render$1
  },
  setup() {
    useHead({
      title: `${Package.name} - Patient Report`
    });
  },
  data() {
    return {
      startDate: "",
      endDate: "",
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
      printIcon: render$2,
      refreshIcon: render$3,
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
      let startDate = this.startDate != "" ? moment(this.startDate).format("YYYY-MM-DD") : "";
      let endDate = this.endDate != "" ? moment(this.endDate).format("YYYY-MM-DD") : "";
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
              count += order.tests.filter((test) => test.status.toLowerCase() === "verified").length;
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
              count += order.tests.filter((test) => test.status.toLowerCase() === "verified").length;
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
      const result = data.find((item) => specimenStatus.includes(item.status.name));
      if (result) {
        return result.initiator.first_name + " " + result.initiator.last_name;
      }
      return "";
    },
    getOrderStatus(status) {
      return status !== null ? this.capitalizeStr(status.split("-")[1]) : "";
    },
    getTestStatusInitiatorName(data, status) {
      const result = data.find((item) => status === item.status.name);
      if (result) {
        return {
          name: result.initiator.first_name + " " + result.initiator.last_name,
          created_at: result.created_date
        };
      }
      return {
        name: "",
        created_at: ""
      };
    },
    getTestTypes(data) {
      return data.map((item) => item.name).join(", ");
    },
    getDepartments(data) {
      return data.map((item) => item.department).join(", ");
    },
    getAuthorizedTestCount(data) {
      let count = 0;
      data.length > 0 && data.map((order) => {
        count = order.tests_verified;
      });
      return count;
    },
    showIndicarRanges(data) {
      return data.some((indicator) => indicator.test_indicator_type === "numeric");
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
      let returnValue = false;
      report.tests.map((test) => {
        if (test.suscept_test_result.length !== 0) {
          returnValue = true;
        }
      });
      return returnValue;
    },
    getFilteredDrugs(drugs) {
      return drugs.filter((drug) => drug.zone !== null);
    },
    showResult(result, suscpeptibilityResults) {
      let returnValue = "";
      if (suscpeptibilityResults.length > 0) {
        const names = suscpeptibilityResults.map((result2) => result2.name);
        returnValue = `Growth of ${names.join(", ")}`;
      } else {
        returnValue = result;
      }
      return returnValue;
    },
    shouldPrintSmallLable(orders) {
      let returnValue = false;
      orders.map((order) => {
        order.tests.map((test) => {
          if (test.print_device) {
            returnValue = true;
          }
        });
      });
      return returnValue;
    },
    getSmallLabelPrintTests(orders) {
      let returnValue = Array();
      orders.map((order) => {
        order.tests.map((test) => {
          if (test.print_device) {
            returnValue.push(test.id);
          }
        });
      });
      return returnValue;
    },
    getPrintCount(reportData) {
      let count = 0;
      reportData.map((report) => {
        count = count + report.print_count;
      });
      return count;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_CorePrinter = __nuxt_component_1;
  const _component_QrCodeIcon = resolveComponent("QrCodeIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="mt-2 space-y-3 px-2 py-2"><div class="w-full flex items-center justify-between"><div class="flex items-center space-x-5"><div class="w-52">`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: "-- start date --",
    format: "dd/MM/yyyy",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    range: false,
    shortcuts: false,
    modelValue: $data.startDate,
    "onUpdate:modelValue": ($event) => $data.startDate = $event
  }, null, _parent));
  _push(`</div><div class="w-52">`);
  _push(ssrRenderComponent(_component_datepicker, {
    placeholder: "-- end date --",
    format: "dd/MM/yyyy",
    "input-classes": "border rounded px-2 py-1.5 block focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
    range: false,
    shortcuts: false,
    modelValue: $data.endDate,
    "onUpdate:modelValue": ($event) => $data.endDate = $event
  }, null, _parent));
  _push(`</div><div class="flex items-center space-x-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.showPendingTests) ? ssrLooseContain($data.showPendingTests, null) : $data.showPendingTests) ? " checked" : ""}><label>Include pending tests</label></div><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    loading: $data.loading,
    color: "success",
    text: "Generate Report",
    icon: $data.refreshIcon,
    click: () => $options.init()
  }, null, _parent));
  _push(`</div></div><div>`);
  if ($options.getAuthorizedTestCount($data.reportData) > 0) {
    _push(ssrRenderComponent(_component_CorePrinter, {
      "print-small-label": $options.shouldPrintSmallLable($data.reportData),
      id: $options.patientId,
      orderId: $options.orderId,
      tests: $options.getSmallLabelPrintTests($data.reportData),
      onUpdate: $options.updateReport
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="border rounded print-container"><div class="flex items-center justify-between border-b px-2 py-2"><div class="flex items-center space-x-2"><img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8"><h3>Patient Report</h3></div></div><div class="bg-gray-50 rounded-tr rounded-tl border-b px-5 py-5"><div class="flex items-center justify-between"><img${ssrRenderAttr("src", _imports_0$1)} alt="app-logo" class="w-24 h-24 object-cover"><div class="space-y-2"><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></div></div><div class="flex items-center justify-between mt-5"><div><span class="font-medium">Patient Report:</span> ${ssrInterpolate($data.moment(/* @__PURE__ */ new Date()).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</div><div><span class="font-medium">No. Printed:</span> ${ssrInterpolate($options.getPrintCount($data.reportData))}</div><div><span class="font-medium">Date Sample Collected:</span> ${ssrInterpolate($data.reportData.length > 0 && $data.moment($data.reportData[0].sample_collected_time).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</div></div><table class="w-full mt-5"><tbody><tr><td class="border px-2 py-2 font-bold">Patient Name</td><td class="border px-2 py-2">${ssrInterpolate(`${$data.person.first_name} ${$data.person.middle_name} ${$data.person.last_name}`)}</td><td class="border px-2 py-2 font-bold">Sex</td><td class="border px-2 py-2">${ssrInterpolate($data.person.sex === "F" ? "Female" : "Male")}</td><td class="border px-2 py-2 font-bold">Age</td><td class="border px-2 py-2">${ssrInterpolate(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))($data.person.date_of_birth))} yr(s)</td></tr><tr><td class="border px-2 py-2 font-bold">Patient ID</td><td class="border px-2 py-2">${ssrInterpolate($data.person.id)}</td><td class="border px-2 py-2 font-bold" colspan="2">Address</td><td class="border px-2 py-2" colspan="2">${ssrInterpolate($options.getPhysicalAddress)}</td></tr></tbody></table></div><!--[-->`);
  ssrRenderList($data.reportData, (report, index) => {
    _push(`<div class="rounded border border-sky-100 mx-2 my-2"><div class="bg-sky-100 text-sky-600 flex items-center justify-between px-2 py-2 font-medium"><div class="flex items-center">`);
    _push(ssrRenderComponent(_component_QrCodeIcon, { class: "w-5 h-5 mr-2" }, null, _parent));
    _push(` Accession No: ${ssrInterpolate(report.accession_number)}</div><div>Requested By: ${ssrInterpolate(report.requested_by)} (${ssrInterpolate(report.requesting_ward)})</div></div><div class="m-3"><table class="border-collapse border border-slate-500 w-full mb-5"><tbody><tr><td class="border px-2 py-2 font-bold">Specimen Type</td><td class="border px-2 py-2">${ssrInterpolate(report.specimen)}</td><td class="border px-2 py-2 font-bold">Date Registered</td><td class="border px-2 py-2">${ssrInterpolate($data.moment(report.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</td></tr><tr><td class="border px-2 py-2 font-bold">Test Type(s)</td><td class="border px-2 py-2">${ssrInterpolate($options.getTestTypes(report.test_types))}</td><td class="border px-2 py-2 font-bold">Lab Sections</td><td class="border px-2 py-2">${ssrInterpolate($options.getDepartments(report.test_types))}</td></tr><tr><td class="border px-2 py-2 font-bold">Specimen Status</td><td class="border px-2 py-2">${ssrInterpolate($options.getOrderStatus(report.order_status))}</td><td class="border px-2 py-2 font-bold">Received By</td><td class="border px-2 py-2">${ssrInterpolate($options.getOrderStatusInitiatorName(report.order_status_trail))}</td></tr></tbody></table></div><div class="m-3"><table class="border-collapse border w-full"><thead><tr><th class="px-2 py-2">Results</th><th class="px-2 py-2">Tests Authorized(${ssrInterpolate(report.tests_verified)})</th></tr></thead><tbody><tr><th class="border px-2 py-2 font-bold">Test Types</th><th class="border px-2 py-2 font-bold">Results</th><th class="border px-2 py-2 font-bold">Remarks</th><th class="border px-2 py-2 font-bold">Audit details</th></tr><!--[-->`);
    ssrRenderList($data.showPendingTests ? report.tests : report.tests.filter((item) => item.status.toLowerCase() !== "pending"), (test) => {
      var _a;
      _push(`<tr><td class="border px-2 py-2">${ssrInterpolate(test.test_type_name)}</td><td class="border px-2 py-2"><table class="w-full h-full"><tr><td class="border px-2 py-2 font-bold">Measure</td><td class="border px-2 py-2 font-bold">Result</td>`);
      if ($options.showIndicarRanges(test.indicators)) {
        _push(`<td class="border px-2 py-2 font-bold">Range</td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tr><!--[-->`);
      ssrRenderList(test.indicators, (indicator) => {
        var _a3;
        var _a2, _b;
        _push(`<tr><td class="border px-2 py-2">${ssrInterpolate(indicator.name)}</td><td class="border px-2 py-2"><p>${$options.showResult(
          (_a3 = (_a2 = indicator.result) == null ? void 0 : _a2.value) != null ? _a3 : "",
          test == null ? void 0 : test.suscept_test_result
        )}</p>`);
        if ((_b = indicator.result) == null ? void 0 : _b.value) {
          _push(`<span>${ssrInterpolate((test == null ? void 0 : test.suscept_test_result.length) > 0 ? "" : indicator == null ? void 0 : indicator.unit)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td>`);
        if ($options.showIndicarRanges(test.indicators)) {
          _push(`<!--[-->`);
          ssrRenderList(indicator.indicator_ranges, (range) => {
            _push(`<td class="border px-2 py-2 font-bold"><span>(${ssrInterpolate(range.lower_range)} - ${ssrInterpolate(range.upper_range)})</span></td>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr>`);
      });
      _push(`<!--]--></table></td><td class="border px-2 py-2">${ssrInterpolate((_a = test == null ? void 0 : test.remarks) != null ? _a : "N/A")}</td><td class="border px-2 py-2"><div class="test-status"><p class="font-bold">Test Status</p><p class="px-2">${ssrInterpolate($options.getTestStatusName(test.status))}</p><p class="px-2">By: ${ssrInterpolate($options.getTestStatusInitiatorName(test.status_trail, test.status)["name"])}</p><p class="px-2">On: ${ssrInterpolate($data.moment($options.getTestStatusInitiatorName(
        test.status_trail,
        test.status
      )["created_at"]).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div>`);
      if ($options.getTestStatusInitiatorName(test.status_trail, "completed")["name"]) {
        _push(`<div class="performed-by"><p class="font-bold">Performed By</p><p class="px-2">${ssrInterpolate($options.getTestStatusInitiatorName(test.status_trail, "completed")["name"])}</p><p class="px-2">On: ${ssrInterpolate($data.moment($options.getTestStatusInitiatorName(
          test.status_trail,
          "completed"
        )["created_at"]).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td></tr>`);
    });
    _push(`<!--]--></tbody></table></div><div class="m-2" style="${ssrRenderStyle($options.checkSusceptibilityResults(report) ? null : { display: "none" })}"><h3 class="text-lg font-semibold uppercase mb-3 mt-3">Suscpeptibility Test Results</h3><div><!--[-->`);
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
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/daily/patient-report/[patientId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _patientId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _patientId_ as default };
//# sourceMappingURL=_patientId_-8332a19f.mjs.map
