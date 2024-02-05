import { _ as _sfc_main$2 } from './Breadcrumb-92cb573c.mjs';
import { u as useHead, a as useCookie, b as useNuxtApp, _ as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './Dropdown-666ad98b.mjs';
import { openBlock, createElementBlock, createElementVNode, useSSRContext, resolveComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { d as dateFormat } from './constants-9b77e6ea.mjs';
import { l as render$3$1, u as useAuthStore, e as endpoints, f as fetchRequest, d as calculateAge, o as useAlert, P as PrinterService } from './fetch-61d93cc9.mjs';
import moment from 'moment';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';
import { P as Package } from './package-01289411.mjs';
import { r as render$1 } from './FunnelIcon-9d1b5e2d.mjs';
import { r as render$2 } from './ArrowPathIcon-6ff7b048.mjs';
import { r as render$3 } from './PrinterIcon-02ac6ae4.mjs';
import { r as render$4 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$5 } from './HandThumbDownIcon-7e2e48a6.mjs';
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
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _sfc_main$1 = {
  props: {
    loading: {
      required: true,
      type: Boolean
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: $props.loading ? null : { display: "none" },
    class: "py-3 px-3"
  }, _attrs))}><div class="grid grid-cols-3 gap-3"><!--[-->`);
  ssrRenderList(6, (i) => {
    _push(`<div class="w-full col-span-1 h-8 bg-gray-100 rounded animate-pulse"></div>`);
  });
  _push(`<!--]--></div><div class="w-full h-32 bg-gray-100 rounded animate-pulse mt-3"></div><div class="w-32 h-8 bg-gray-100 rounded animate-pulse mt-3"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shimmer/Results.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    ceditor: CKEditor.component
  },
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Enter Test Results`
    });
  },
  data() {
    return {
      details: {},
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "|",
          "alignment",
          "indent",
          "outdent",
          "|",
          "blockQuote",
          "insertTable",
          "mediaEmbed",
          "undo",
          "redo"
        ]
      },
      content: "",
      moment,
      header: "Enter Test Results",
      patientNo: "",
      name: "",
      age: "",
      sex_: "",
      selectedDate: "",
      specimenType: "",
      trackingNumber: "",
      accessionNumber: "",
      testType: "",
      requestingWard: "",
      dateRegistered: "",
      receiptDate: "",
      testStatus: "",
      requestingPhysician: "",
      requestOrigin: "",
      registeredBy: "",
      performedBy: "",
      turnAroundTime: { value: "", unit: "" },
      filterIcon: render$1,
      addIcon: render,
      refreshIcon: render$2,
      printIcon: render$3,
      approveIcon: render$3$1,
      item: this.$route.params.item,
      indicatorRangesArray: new Array(),
      accessionNo: "",
      cookie: useCookie("token"),
      arrowDownIcon: render$4,
      testId: "",
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Tests",
          link: "/tests"
        }
      ],
      measures: [],
      loading: false,
      fetching: false,
      updating: false,
      authorizing: false,
      resultsPresent: true,
      selectedRange: "",
      statuses: { id: 0, initiator: { id: 0 } },
      authStore: useAuthStore(),
      machineOriented: false,
      completedBy: {},
      machineName: "",
      rejectStatuses: [
        {
          name: "Reject",
          icon: render$5,
          action: "rejected"
        },
        {
          name: "Void",
          icon: render$5,
          action: "voided"
        },
        {
          name: "Not-done",
          icon: render$5,
          action: "not_done"
        }
      ]
    };
  },
  computed: {
    minDate() {
      const today = /* @__PURE__ */ new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
      return formattedDate;
    },
    textInputMeasures() {
      return this.measures.filter((measure) => measure.type === "numeric" || measure.type === "free_text");
    },
    dropDownMeasures() {
      return this.measures.filter((measure) => measure.type === "auto_complete" || measure.type == "alpha_numeric");
    },
    richTextEditorMeasures() {
      return this.measures.filter((measure) => measure.type === "rich_text");
    },
    hasTextInputMeasures() {
      return this.measures.filter((measure) => measure.type === "numeric" || measure.type === "free_text").length > 0;
    },
    hasDropdownMeasures() {
      return this.measures.filter((measure) => measure.type === "alpha_numeric" || measure.type === "auto_complete").length > 0;
    },
    hasRichTextMeasures() {
      return this.measures.filter((measure) => measure.type === "rich_text").length > 0;
    }
  },
  created() {
    this.accessionNo = `${this.$route.query.accession_number}`;
    this.testId = `${this.$route.query.test_id}`;
    this.init();
  },
  methods: {
    /**
     * @method resultsAvailable check if test results are available
     * @param accessionNumber
     * @return promise
     */
    async resultsAvailable(accessionNumber) {
      const request = {
        route: `${endpoints.resultsAvailable}?accession_number=${accessionNumber}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        data.value.result_available ? this.resultsPresent = false : this.resultsPresent = true;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    /**
     * @method init load test details
     * @param null
     * @returns promise
     */
    async init() {
      var _a, _b;
      this.loading = true;
      const request = {
        route: `${endpoints.tests}/${this.testId}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        this.name = data.value.client.first_name + " " + ((_a = data.value.client) == null ? void 0 : _a.last_name);
        this.patientNo = data.value.id;
        this.sex_ = (_b = data.value.client) == null ? void 0 : _b.sex;
        this.age = calculateAge(data.value.client.date_of_birth) + "";
        this.trackingNumber = data.value.tracking_number;
        this.accessionNumber = data.value.accession_number;
        this.testStatus = data.value.status;
        this.specimenType = data.value.specimen_type;
        this.requestingPhysician = data.value.requested_by;
        this.testType = data.value.test_type_name;
        this.requestingWard = data.value.requesting_ward;
        this.dateRegistered = data.value.created_date;
        this.receiptDate = data.value.created_date;
        this.requestOrigin = data.value.request_origin;
        this.turnAroundTime = data.value.expected_turn_around_time;
        this.loadTestMesures(data.value.indicators);
        data.value.status_trail.map((trail) => {
          if (trail.status.name.toLowerCase() === "completed") {
            this.statuses = trail;
            this.performedBy = `${trail.initiator.first_name} ${trail.initiator.last_name}`;
          }
        });
        data.value.status_trail.map((status) => {
          if (status.status.name.toLowerCase() === "pending") {
            this.registeredBy = `${status.initiator.first_name} ${status.initiator.last_name}`;
          }
        });
        this.resultsAvailable(data.value.accession_number);
        this.machineOriented = data.value.is_machine_oriented;
        this.completedBy = data.value.completed_by;
        this.details = data.value;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    /**
     * @method fetchResults get results json files via accession numbers
     * @param null
     * @returns promise
     */
    async fetchResults() {
      this.fetching = true;
      const request = {
        route: `${endpoints.fetchResults}?accession_number=${this.accessionNo}&PHP_AUTH_USER=${"administrator"}&PHP_AUTH_PW=${"kchlims"}`,
        method: "GET",
        token: `${this.cookie}`,
        body: {}
      };
      const { data, error, pending } = await fetchRequest(request);
      this.fetching = pending;
      if (data.value) {
        this.measures.map((measure) => {
          data.value.map((item) => {
            if (String(measure.id) === String(item.indicator_id)) {
              measure.value.name = item.value;
              this.machineName = item.machine_name;
            }
          });
        });
        this.fetching = false;
      }
      if (error.value) {
        console.error(error.value);
        this.fetching = false;
      }
    },
    /**
     * @method loadTestMesures
     * @param array @type indicator
     * @returns promise
     */
    async loadTestMesures(array) {
      this.measures = new Array();
      if (array) {
        array.forEach((element) => {
          var _a, _b, _c, _d;
          this.measures.push({
            name: element.name,
            id: element.id,
            machine_name: (_a = element.result) == null ? void 0 : _a.machine_name,
            value: element.test_indicator_type === "free_text" || element.test_indicator_type === "numeric" ? { name: (_b = element.result) == null ? void 0 : _b.value } : ((_c = element.result) == null ? void 0 : _c.value) != null ? { name: (_d = element.result) == null ? void 0 : _d.value } : element.test_indicator_type == "rich_text" ? { name: "" } : { name: "-- select result --" },
            type: element.test_indicator_type,
            ranges: this.toIndicatorRanges(
              element.indicator_ranges,
              element.id
            )
          });
        });
      }
    },
    /**
     * @method toIndicatorRanges
     * @returns array @type Object
     */
    toIndicatorRanges(array, IndicatorId) {
      let rangesArray = [];
      if (array) {
        array.forEach((element) => {
          rangesArray.push({ id: IndicatorId, name: element.value });
        });
      }
      return rangesArray;
    },
    /**
     * @method measuresToIndicators
     * @param null
     * @returns array @type Object
     */
    measuresToIndicators() {
      let indicators = new Array();
      this.measures.forEach((element) => {
        indicators.push({
          indicator: element.id,
          value: element.type == "free_text" ? element.value.name !== void 0 ? element.value.name : null : element.value !== void 0 ? element.value : null,
          machine_name: element.value !== null || void 0 ? this.machineName === "" ? element.machine_name : this.machineName : null
        });
      });
      return indicators;
    },
    /**
     * @method updateTestResults updating test results
     * @param null
     * @returns promise @type void
     */
    async updateTestResults() {
      this.updating = true;
      let indicatorValues = this.measuresToIndicators().map((indicator) => {
        if (typeof indicator.value === "object" && indicator.value !== null) {
          indicator.value = indicator.value.name == "-- select result --" ? null : indicator.value.name;
        }
        return indicator;
      });
      const request = {
        route: `${endpoints.updateResults}`,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          test_id: this.testId,
          test_indicators: indicatorValues
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.updating = pending;
      if (data.value) {
        this.updating = false;
        this.init();
        useNuxtApp().$toast.success("Test results updated successfully");
        this.$router.push("/tests");
      }
      if (error.value) {
        this.updating = false;
        console.error(error.value);
      }
    },
    async authorise() {
      this.authorizing = true;
      const request = {
        route: `${endpoints.testStatus}/${this.testId}/verified`,
        method: "PUT",
        token: `${this.cookie}`,
        body: {}
      };
      const { data, error, pending } = await fetchRequest(request);
      this.authorizing = pending;
      if (data.value) {
        this.authorizing = false;
        this.init();
        useNuxtApp().$toast.success("Test status authorized successfully!");
        this.$router.push("/tests");
      }
      if (error.value) {
        console.error(error.value);
        this.authorizing = false;
      }
    },
    isCompletedByCurrentUserOrSuperAdmin(item) {
      const currentUser = this.authStore.user;
      const completedBy = item.completed_by;
      if (completedBy) {
        if (completedBy.id !== currentUser.id) {
          return true;
        } else if (completedBy.is_super_admin === true) {
          return true;
        }
      }
      return false;
    },
    /**
     * @method shouldDisplayButton
     * @param item
     * @param status
     * @returns boolean
     */
    shouldDisplayButton(item) {
      const lowerCaseStatus = item.status.toLowerCase();
      if (lowerCaseStatus === "completed") {
        const isCompletedByCurrentUserOrAdmin = this.isCompletedByCurrentUserOrSuperAdmin(item);
        return isCompletedByCurrentUserOrAdmin;
      }
      return false;
    },
    /**
     * @method printMachine invokes hilabelprinter service on lbl file download
     * @param nullable
     * @returns promise
     */
    async printMachine() {
      const { alertConfirmation } = useAlert();
      if (await alertConfirmation({
        message: "Do you want to print specimen label?"
      })) {
        await PrinterService.printSpecimenLabel(this.accessionNo);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$2;
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_FormKit = resolveComponent("FormKit");
  const _component_ceditor = resolveComponent("ceditor");
  const _component_ShimmerResults = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3></div><div class="grid grid-cols-5 gap-4"><div class="flex flex-col space-y-4 col-span-2 order-2"><div class="rounded border"><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-semibold text-lg"> Patient Details </div><div><div class="w-full flex items-center" style="${ssrRenderStyle({ "padding-bottom": "20px" })}"><div class="w-full space-y-2.5 py-5"><div class="w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"><p class="font-medium">Patient No</p><p>${ssrInterpolate($data.patientNo)}</p></div><div class="w-full py-2 px-4 bg-white-100 flex justify-between items-center"><p class="font-medium">Name</p><p>${ssrInterpolate($data.name)}</p></div><div class="w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"><p class="font-medium">Age</p><p>${ssrInterpolate($data.age)}</p></div><div class="w-full py-2 px-4 bg-white-100 flex justify-between items-center"><p class="font-medium">Sex</p><p>${ssrInterpolate($data.sex_)}</p></div></div></div></div></div><div class="rounded border"><div class="bg-gray-50 px-2 py-2 border-b rounded-tl-lg rounded-tr-lg font-semibold text-lg"> Specimen Details </div><div><div class="w-full flex items-center"><div class="w-full space-y-2.5 py-5"><div class="w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"><p class="font-medium">Specimen Type</p><p>${ssrInterpolate($data.specimenType)}</p></div><div class="w-full py-2 px-4 flex justify-between items-center"><p class="font-medium">Tracking Number</p><p>${ssrInterpolate($data.trackingNumber)}</p></div><div class="w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"><p class="font-medium">Accession Number</p><p>${ssrInterpolate($data.accessionNumber)}</p></div><div class="w-full py-2 px-4 flex justify-between items-center"><p class="font-medium">Status</p><p>${ssrInterpolate($data.testStatus)}</p></div></div></div></div></div><div class="rounded border"><div class="bg-gray-50 px-2 py-2 border-b rounded-tl-lg rounded-tr-lg font-semibold text-lg"> Test Details </div><div class="w-full flex items-center max-h-60 overflow-y-auto"><div class="w-full py-5"><div class="w-full flex items-center pb-0 pt-72"><div class="w-full space-y-2 py-5"><div class="w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"><p class="font-medium">Test Type</p><p>${ssrInterpolate($data.testType)}</p></div><div class="w-full py-2 px-4 bg-white-100 flex justify-between items-center"><p class="font-medium">Requesting Ward/Location</p><p>${ssrInterpolate($data.requestingWard)}</p></div><div class="w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"><p class="font-medium">Date Registered</p><p>${ssrInterpolate($data.moment($data.dateRegistered).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div><div class="w-full py-2 px-4 bg-white-100 flex justify-between items-center"><p class="font-medium">Receipt Date</p><p>${ssrInterpolate($data.moment($data.receiptDate).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div><div class="w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"><p class="font-medium">Test Status</p><p>${ssrInterpolate($data.testStatus)}</p></div><div class="w-full py-2 px-4 bg-white-100 flex justify-between items-center"><p class="font-medium">Requesting Physician</p><p>${ssrInterpolate($data.requestingPhysician)}</p></div><div class="w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"><p class="font-medium">Request Origin</p><p>${ssrInterpolate($data.requestOrigin)}</p></div><div class="w-full py-2 px-4 bg-white-100 flex justify-between items-center"><p class="font-medium">Registered By</p><p>${ssrInterpolate($data.registeredBy)}</p></div><div class="w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"><p class="font-medium">Performed By</p><p>${ssrInterpolate($data.performedBy)}</p></div><div class="w-full py-2 px-4 bg-white-100 flex justify-between items-center"><p class="font-medium">Turn around time</p><p>${ssrInterpolate(`${$data.turnAroundTime.value} ${Number($data.turnAroundTime.value) == 1 ? $data.turnAroundTime.unit.toLowerCase().slice(0, -1) : $data.turnAroundTime.unit}`)}</p></div></div></div></div></div></div></div><div class="rounded border order-1 col-span-3"><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md gap-5 flex flex-row">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Fetch results",
    color: "warning",
    icon: $data.refreshIcon,
    loading: $data.fetching,
    disabled: $data.resultsPresent,
    click: () => $options.fetchResults(),
    style: $data.machineOriented ? null : { display: "none" }
  }, null, _parent));
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Print Accession Number",
    color: "primary",
    icon: $data.printIcon,
    click: () => $options.printMachine()
  }, null, _parent));
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "Authorize",
    color: "success",
    style: $options.shouldDisplayButton({ status: $data.testStatus, completed_by: $data.completedBy }) ? null : { display: "none" },
    icon: $data.approveIcon,
    click: () => $options.authorise(),
    loading: $data.authorizing
  }, null, _parent));
  _push(`</div><div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}" class="p-5">`);
  if ($data.measures.length !== 0) {
    _push(`<div class="w-full grid grid-cols-3 gap-4">`);
    if ($options.hasDropdownMeasures) {
      _push(`<div class="col-span-3 grid grid-cols-3 gap-3"><!--[-->`);
      ssrRenderList($options.dropDownMeasures, (measure, index2) => {
        _push(`<div><div><p class="font-medium">${ssrInterpolate(measure.name)}</p>`);
        _push(ssrRenderComponent(_component_CoreDropdown, {
          items: measure.ranges,
          modelValue: measure.value,
          "onUpdate:modelValue": ($event) => measure.value = $event
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($options.hasTextInputMeasures) {
      _push(`<div class="col-span-3 grid grid-cols-3 gap-3"><!--[-->`);
      ssrRenderList($options.textInputMeasures, (measure, index2) => {
        _push(`<div>`);
        if (measure.type === "numeric" || measure.type === "free_text") {
          _push(`<div>`);
          if (!measure.name.toLowerCase().includes("date")) {
            _push(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: measure.name,
              modelValue: measure.value.name,
              "onUpdate:modelValue": ($event) => measure.value.name = $event
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_FormKit, {
              label: measure.name,
              type: "date",
              modelValue: measure.value.name,
              "onUpdate:modelValue": ($event) => measure.value.name = $event,
              format: "dd/MM/yyyy",
              min: $options.minDate
            }, null, _parent));
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($options.hasRichTextMeasures) {
      _push(`<div class="col-span-3"><!--[-->`);
      ssrRenderList($options.richTextEditorMeasures, (measure, index2) => {
        _push(`<div><div><p class="font-medium mb-2">${ssrInterpolate(measure.name)}</p>`);
        _push(ssrRenderComponent(_component_ceditor, {
          editor: $data.editor,
          modelValue: measure.value.name,
          "onUpdate:modelValue": ($event) => measure.value.name = $event,
          config: $data.editorConfig
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.testStatus.toLowerCase() !== "verified") {
    _push(ssrRenderComponent(_component_CoreActionButton, {
      loading: $data.updating,
      text: "Update Test Results",
      color: "success",
      icon: $data.arrowDownIcon,
      click: () => $options.updateTestResults(),
      class: "mt-5"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ShimmerResults, { loading: $data.loading }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tests/result/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-71c61a7f.mjs.map
