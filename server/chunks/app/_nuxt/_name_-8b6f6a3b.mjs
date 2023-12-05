import { useSSRContext, resolveComponent, mergeProps, withCtx, unref, createVNode, withDirectives, vModelCheckbox, vShow, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, vModelSelect, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$3 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './Breadcrumb-7cc71911.mjs';
import { r as render$4, _ as __nuxt_component_0$2 } from './Dropdown-15d8abe8.mjs';
import { s as sex } from './constants-353d90a1.mjs';
import { u as useHead } from './index-ca787103.mjs';
import { r as render$5, e as endpoints, f as fetchRequest, j as reverseFilterArrays, c as filterArrays } from './fetch-647b8df7.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './XMarkIcon-170c776f.mjs';
import { r as render$1 } from './UserIcon-3d66d73e.mjs';
import { r as render$2 } from './CheckCircleIcon-e0bae33f.mjs';
import { r as render$3 } from './InformationCircleIcon-68986861.mjs';
import { r as render$6 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$7 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { r as render$8 } from './TrashIcon-b1416ff8.mjs';
import { r as render$9 } from './PencilSquareIcon-77446728.mjs';
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
import './nuxt-link-0e3a4fce.mjs';
import './HomeIcon-299b993b.mjs';
import './CheckIcon-e4d11b9e.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'moment';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col space-y-2.5" }, _attrs))}><div class="w-full bg-gray-100 animate-pulse h-10 rounded"></div><div class="w-1/2 bg-gray-100 animate-pulse h-10 rounded"></div><div class="w-1/3 bg-gray-100 animate-pulse h-10 rounded"></div><!--[-->`);
  ssrRenderList(12, (i) => {
    _push(`<div class="flex items-center space-x-2.5"><div class="w-1/2 bg-gray-100 animate-pulse h-10 rounded"></div><div class="w-1/2 bg-gray-100 animate-pulse h-10 rounded"></div></div>`);
  });
  _push(`<!--]--><div class="w-48 flex items-center justify-end bg-gray-100 animate-pulse h-10 rounded"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shimmer/TestTypeEdit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    XMarkIcon: render,
    UserIcon: render$1,
    CheckCircleIcon: render$2,
    InformationCircleIcon: render$3,
    ChevronUpDownIcon: render$4
  },
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Test Types`
    });
  },
  data() {
    return {
      open: false,
      addIcon: render$5,
      saveIcon: render$6,
      clearIcon: render$7,
      removeIcon: render,
      trashIcon: render$8,
      loadingSpecimens: false,
      showMeasures: false,
      measures: 1,
      ranges: 0,
      indicators: [{ name: "", test_indicator_type: 0, unit: "", description: "", indicator_ranges: [] }],
      numericRange: { max_age: 0, min_age: 0, lower_range: 0, upper_range: 0, interpretation: "" },
      autocompleteRange: { value: "", interpretation: "" },
      name: "",
      shortName: "",
      turnAroundTime: "",
      measureTypes: Array(),
      measureSelected: { name: "", id: 0 },
      loading: false,
      updating: false,
      editIcon: render$9,
      id: this.$route.query.testType,
      details: {
        name: "",
        short_name: "",
        expected_turn_around_time: {
          value: "",
          unit: ""
        },
        test_indicator_type: {
          id: 0,
          name: ""
        },
        department: {
          id: 0,
          name: ""
        },
        specimens: {
          id: 0,
          name: "",
          created_date: ""
        },
        indicators: new Array(),
        organisms: new Array()
      },
      specimensSelected: new Array(),
      rawOrganisms: new Array(),
      organisms: new Array(),
      organismsSelected: new Array(),
      shouldPrintResults: false,
      showCultureWorksheet: false,
      timeTypes: new Array({ name: "Month" }, { name: "Weeks" }, { name: "Days" }, { name: "Hours" }, { name: "Minutes" }),
      duration: { name: "-- select value --" },
      expected_turn_around_time: "",
      cookie: useCookie("token"),
      rawSpecimens: new Array(),
      specimens: new Array(),
      departments: new Array(),
      measureType: "",
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Test Catalog",
          link: "#"
        },
        {
          name: "Test Types",
          link: "/test-catalog/test-types"
        }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      var _a, _b, _c;
      this.loading = true;
      await this.loadSpecimens();
      await this.loadDepartments();
      await this.loadTestTypeIndicators();
      await this.loadOrganisms();
      const request = {
        route: `${endpoints.viewTestType}/${this.$route.query.testType}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.details = data.value;
        this.specimensSelected = reverseFilterArrays(data.value.specimens);
        this.organismsSelected = reverseFilterArrays(data.value.organisms);
        this.showCultureWorksheet = data.value.organisms.length > 0;
        this.duration = { name: ((_a = data.value.expected_turn_around_time) == null ? void 0 : _a.unit) !== null ? (_b = data.value.expected_turn_around_time) == null ? void 0 : _b.unit : "-- select value --" };
        this.expected_turn_around_time = (_c = data.value.expected_turn_around_time) == null ? void 0 : _c.value;
        this.loading = false;
      }
      if (error.value) {
        console.error("error:", error.value);
        this.loading = false;
      }
    },
    async loadOrganisms() {
      const request = {
        route: endpoints.organisms,
        method: "GET",
        token: `${this.cookie}`
      };
      const { error, data } = await fetchRequest(request);
      if (data.value) {
        this.rawOrganisms = data.value;
        data.value.map((organism) => {
          this.organisms.push(organism.name);
        });
      }
      if (error.value) {
        console.log(error.value);
      }
    },
    async loadSpecimens() {
      const request = {
        route: endpoints.specimens,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, pending, error } = await fetchRequest(request);
      this.loadingSpecimens = pending;
      if (data.value) {
        this.loadingSpecimens = false;
        this.rawSpecimens = data.value;
        data.value.map((specimen) => {
          this.specimens.push(specimen.name);
        });
      }
      if (error.value) {
        this.loadingSpecimens = false;
        console.error(error.value);
      }
    },
    async loadDepartments() {
      const request = {
        route: endpoints.departments,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.departments = data.value;
      }
      if (error.value) {
        console.error("error:", error.value);
      }
    },
    async loadTestTypeIndicators() {
      const request = {
        route: `${endpoints.testTypes}/test_indicator_types`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error } = await fetchRequest(request);
      if (data.value) {
        this.measureTypes = data.value;
        this.measureSelected = data.value[0];
        this.measureType = this.measureSelected.name;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    addMeasure(indicators) {
      indicators.push({
        name: "",
        test_indicator_type: this.measureSelected,
        unit: "",
        description: "",
        indicator_ranges: []
      });
    },
    addRange(_index, indicators) {
      this.ranges = this.ranges + 1;
      if (this.measureSelected.name == "Numeric") {
        try {
          indicators.indicator_ranges.push(this.numericRange);
        } catch (error) {
          console.error("error:", error);
        }
      } else if (this.measureSelected.name === "Auto Complete") {
        try {
          indicators.indicator_ranges.push({
            value: "",
            interpretation: ""
          });
        } catch (error) {
          console.error("error:", error);
        }
      }
    },
    filterSpecimens(raw, items) {
      let filteredSpecimens = new Array();
      items.map((name) => {
        const obj = raw.filter((obj2) => obj2.name === name);
        filteredSpecimens.push(obj[0].id);
      });
      return filteredSpecimens;
    },
    async submitForm() {
      this.updating = true;
      this.details.specimens = this.filterSpecimens(this.rawSpecimens, this.specimensSelected);
      this.details.department_id = this.details.department_id.id;
      this.details.organisms = this.showCultureWorksheet ? filterArrays(this.rawOrganisms, this.organismsSelected) : new Array();
      this.details.expected_turn_around_time = {
        value: this.expected_turn_around_time,
        unit: this.duration.name
      };
      this.details.print_device = this.shouldPrintResults;
      const request = {
        route: `${endpoints.testTypes}/${this.$route.query.testType}`,
        method: "PUT",
        token: `${this.cookie}`,
        body: this.details
      };
      const { pending, data, error } = await fetchRequest(request);
      this.updating = pending;
      if (data.value) {
        this.open = false;
        useNuxtApp().$toast.success(`Test type updated successfully!`);
        this.updating = false;
        this.$emit("update", true);
      }
      if (error.value) {
        useNuxtApp().$toast.error(`An error occurred, please try again!`);
        console.error("error:", error.value);
        this.updating = false;
      }
    },
    removeObjectKeys(measure, key) {
      if (measure == "rich_text" || measure == "free_text") {
        delete this.details[key];
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ShimmerTestTypeEdit = __nuxt_component_0;
  const _component_CoreBreadcrumb = __nuxt_component_0$1;
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreDropdown = __nuxt_component_0$2;
  const _component_multi_select = resolveComponent("multi-select");
  const _component_CoreActionButton = __nuxt_component_0$3;
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_InformationCircleIcon = resolveComponent("InformationCircleIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}">`);
  _push(ssrRenderComponent(_component_ShimmerTestTypeEdit, null, null, _parent));
  _push(`</div><div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}">`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.details.name)}</h3></div><div>`);
  _push(ssrRenderComponent(_component_FormKit, {
    type: "form",
    "submit-label": "Update",
    onSubmit: $options.submitForm,
    actions: false
  }, {
    default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 space-y-3"${_scopeId}><div class="grid grid-cols-2 gap-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "text",
          label: "Name",
          validation: "required",
          modelValue: $data.details.name,
          "onUpdate:modelValue": ($event) => $data.details.name = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "text",
          label: "Short name",
          validation: "required",
          modelValue: $data.details.short_name,
          "onUpdate:modelValue": ($event) => $data.details.short_name = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="w-full flex"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_FormKit, {
          type: "number",
          label: "Expected Turn Around Time",
          validation: "required|number",
          modelValue: $data.expected_turn_around_time,
          "onUpdate:modelValue": ($event) => $data.expected_turn_around_time = $event
        }, null, _parent2, _scopeId));
        _push2(`<div class="py-1 ml-2"${_scopeId}><label class="font-medium text-base"${_scopeId}>Duration</label>`);
        _push2(ssrRenderComponent(_component_CoreDropdown, {
          items: $data.timeTypes,
          modelValue: $data.duration,
          "onUpdate:modelValue": ($event) => $data.duration = $event
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="w-full flex items-center space-x-2"${_scopeId}><input id="showCultureWorksheet" name="showCultureWorksheet" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.showCultureWorksheet) ? ssrLooseContain($data.showCultureWorksheet, null) : $data.showCultureWorksheet) ? " checked" : ""}${_scopeId}><label for="showCultureWorksheet"${_scopeId}>Show Culture Worksheet?</label></div><div style="${ssrRenderStyle($data.showCultureWorksheet ? null : { display: "none" })}" class="w-full flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Organisms</label>`);
        _push2(ssrRenderComponent(_component_multi_select, {
          style: { "--ms-max-height": "none !important" },
          modelValue: $data.organismsSelected,
          "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
          options: $data.organisms,
          mode: "tags",
          clear: "",
          searchable: "",
          class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="w-full flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Specimens</label>`);
        _push2(ssrRenderComponent(_component_multi_select, {
          style: { "--ms-max-height": "none !important" },
          modelValue: $data.specimensSelected,
          "onUpdate:modelValue": ($event) => $data.specimensSelected = $event,
          options: $data.specimens,
          mode: "tags",
          required: "",
          clear: "",
          class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="w-full flex items-center space-x-2"${_scopeId}><input id="shouldPrintResults" name="shouldPrintResults" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.shouldPrintResults) ? ssrLooseContain($data.shouldPrintResults, null) : $data.shouldPrintResults) ? " checked" : ""}${_scopeId}><label for="shouldPrintResults"${_scopeId}>Print Results On Small Label?</label></div><div class="w-full flex items-center"${_scopeId}><div class="w-full flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Lab section</label>`);
        _push2(ssrRenderComponent(_component_CoreDropdown, {
          items: $data.departments,
          modelValue: $data.details.department_id,
          "onUpdate:modelValue": ($event) => $data.details.department_id = $event
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="w-full flex"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          type: "button",
          click: () => {
            $options.addMeasure($data.details.indicators);
          },
          color: "primary",
          text: "Add Measure",
          icon: $data.addIcon
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if ($data.details.indicators.length != 0) {
          _push2(`<!--[-->`);
          ssrRenderList($data.details.indicators, (indicator, index) => {
            _push2(`<div class="border py-3 px-3 rounded"${_scopeId}><div class="py-3 flex items-center justify-between"${_scopeId}><h3 class="text-lg text-grameasuresy-700 font-semibold"${_scopeId}>Measures (${ssrInterpolate(index + 1)})</h3><button type="button"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent2, _scopeId));
            _push2(`</button></div><div class="grid grid-cols-4 gap-2 mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Name",
              validation: "required",
              modelValue: indicator.name,
              "onUpdate:modelValue": ($event) => indicator.name = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-1"${_scopeId}><label class="font-medium"${_scopeId}>Type</label>`);
            _push2(ssrRenderComponent(_component_CoreDropdown, {
              items: $data.measureTypes,
              modelValue: indicator.test_indicator_type,
              "onUpdate:modelValue": ($event) => indicator.test_indicator_type = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Unit",
              modelValue: indicator.unit,
              "onUpdate:modelValue": ($event) => indicator.unit = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Description",
              modelValue: indicator.description,
              "onUpdate:modelValue": ($event) => indicator.description = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (indicator.test_indicator_type.name != "Free Text") {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_CoreActionButton, {
                type: "button",
                click: () => {
                  $options.addRange(index, indicator);
                },
                color: "primary",
                text: "Add New Range",
                icon: $data.addIcon
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (indicator.indicator_ranges.length > 0 && indicator.test_indicator_type.name === "Numeric") {
              _push2(`<!--[-->`);
              ssrRenderList(indicator.indicator_ranges, (measure, index2) => {
                _push2(`<div class="px-3 py-3"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><div class="grid grid-cols-2 gap-2"${_scopeId}><div class=""${_scopeId}><label class="mb-2 text-lg font-semibold text-gray-600"${_scopeId}>Age Range</label><div class="grid grid-cols-2 gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_FormKit, {
                  type: "number",
                  label: "Minimum",
                  validation: "required",
                  modelValue: measure.min_age,
                  "onUpdate:modelValue": ($event) => measure.min_age = $event
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_FormKit, {
                  type: "number",
                  label: "Maximum",
                  validation: "required",
                  modelValue: measure.max_age,
                  "onUpdate:modelValue": ($event) => measure.max_age = $event
                }, null, _parent2, _scopeId));
                _push2(`<div${_scopeId}><label class="-mb-2 font-semibold"${_scopeId}>Sex</label><select class="w-full bg-white border px-2 py-2 focus:ring-none rounded"${_scopeId}><!--[-->`);
                ssrRenderList("sex" in _ctx ? _ctx.sex : unref(sex), (item, index3) => {
                  _push2(`<option${ssrRenderAttr("value", item.name)}${_scopeId}>${ssrInterpolate(item.name)}</option>`);
                });
                _push2(`<!--]--></select></div></div></div><div class=""${_scopeId}><label class="mb-2 text-lg font-semibold text-gray-600"${_scopeId}>Measure Range</label><div class="grid grid-cols-2 gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_FormKit, {
                  type: "number",
                  step: "any",
                  number: "",
                  label: "Minimum",
                  validation: "required|float",
                  modelValue: measure.lower_range,
                  "onUpdate:modelValue": ($event) => measure.lower_range = $event
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_FormKit, {
                  type: "number",
                  step: "any",
                  number: "",
                  label: "Maximum",
                  validation: "required|float",
                  modelValue: measure.upper_range,
                  "onUpdate:modelValue": ($event) => measure.upper_range = $event
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
                _push2(ssrRenderComponent(_component_FormKit, {
                  type: "text",
                  label: "Interpretation",
                  validation: "required",
                  modelValue: measure.interpretation,
                  "onUpdate:modelValue": ($event) => measure.interpretation = $event
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="-mt-20"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_CoreActionButton, {
                  type: "button",
                  color: "error",
                  text: "Remove",
                  icon: $data.trashIcon,
                  click: () => {
                    indicator.indicator_ranges.splice(index2, 1);
                  }
                }, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (indicator.indicator_ranges.length != 0 && indicator.test_indicator_type.name === "Auto Complete") {
              _push2(`<!--[-->`);
              ssrRenderList(indicator.indicator_ranges, (measure, index2) => {
                _push2(`<div class="px-3 py-3"${_scopeId}><div class="w-full items-center flex space-x-3"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_FormKit, {
                  type: "text",
                  label: "Value",
                  validation: "required",
                  modelValue: measure.value,
                  "onUpdate:modelValue": ($event) => measure.value = $event
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_FormKit, {
                  type: "text",
                  label: "Interpretation",
                  validation: "required",
                  modelValue: measure.interpretation,
                  "onUpdate:modelValue": ($event) => measure.interpretation = $event
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="mt-8"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_CoreActionButton, {
                  type: "button",
                  color: "error",
                  text: "Remove",
                  icon: $data.trashIcon,
                  click: () => {
                    indicator.indicator_ranges.splice(index2, 1);
                  }
                }, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if ($data.ranges != 0 && indicator.test_indicator_type.name === "Free Text") {
              _push2(`<!--[-->`);
              ssrRenderList($data.ranges, (measure, index2) => {
                _push2(`<div class="flex items-center px-3 py-3 rounded bg-gray-50 mt-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_InformationCircleIcon, { class: "w-5 h-5 mr-2" }, null, _parent2, _scopeId));
                _push2(` A text box will appear for results entry </div>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          });
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="justify-end flex items-center space-x-3 px-3 py-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          type: "submit",
          click: () => {
          },
          loading: $data.updating,
          color: "success",
          icon: $data.saveIcon,
          text: "Save Changes"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-2 space-y-3" }, [
            createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
              createVNode(_component_FormKit, {
                type: "text",
                label: "Name",
                validation: "required",
                modelValue: $data.details.name,
                "onUpdate:modelValue": ($event) => $data.details.name = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_FormKit, {
                type: "text",
                label: "Short name",
                validation: "required",
                modelValue: $data.details.short_name,
                "onUpdate:modelValue": ($event) => $data.details.short_name = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "w-full flex" }, [
              createVNode(_component_FormKit, {
                type: "number",
                label: "Expected Turn Around Time",
                validation: "required|number",
                modelValue: $data.expected_turn_around_time,
                "onUpdate:modelValue": ($event) => $data.expected_turn_around_time = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "py-1 ml-2" }, [
                createVNode("label", { class: "font-medium text-base" }, "Duration"),
                createVNode(_component_CoreDropdown, {
                  items: $data.timeTypes,
                  modelValue: $data.duration,
                  "onUpdate:modelValue": ($event) => $data.duration = $event
                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
              ])
            ]),
            createVNode("div", { class: "w-full flex items-center space-x-2" }, [
              withDirectives(createVNode("input", {
                id: "showCultureWorksheet",
                name: "showCultureWorksheet",
                type: "checkbox",
                "onUpdate:modelValue": ($event) => $data.showCultureWorksheet = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelCheckbox, $data.showCultureWorksheet]
              ]),
              createVNode("label", { for: "showCultureWorksheet" }, "Show Culture Worksheet?")
            ]),
            withDirectives(createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
              createVNode("label", { class: "font-medium" }, "Organisms"),
              createVNode(_component_multi_select, {
                style: { "--ms-max-height": "none !important" },
                modelValue: $data.organismsSelected,
                "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                options: $data.organisms,
                mode: "tags",
                clear: "",
                searchable: "",
                class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
            ], 512), [
              [vShow, $data.showCultureWorksheet]
            ]),
            createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
              createVNode("label", { class: "font-medium" }, "Specimens"),
              createVNode(_component_multi_select, {
                style: { "--ms-max-height": "none !important" },
                modelValue: $data.specimensSelected,
                "onUpdate:modelValue": ($event) => $data.specimensSelected = $event,
                options: $data.specimens,
                mode: "tags",
                required: "",
                clear: "",
                class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
            ]),
            createVNode("div", { class: "w-full flex items-center space-x-2" }, [
              withDirectives(createVNode("input", {
                id: "shouldPrintResults",
                name: "shouldPrintResults",
                type: "checkbox",
                "onUpdate:modelValue": ($event) => $data.shouldPrintResults = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelCheckbox, $data.shouldPrintResults]
              ]),
              createVNode("label", { for: "shouldPrintResults" }, "Print Results On Small Label?")
            ]),
            createVNode("div", { class: "w-full flex items-center" }, [
              createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                createVNode("label", { class: "font-medium" }, "Lab section"),
                createVNode(_component_CoreDropdown, {
                  items: $data.departments,
                  modelValue: $data.details.department_id,
                  "onUpdate:modelValue": ($event) => $data.details.department_id = $event
                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
              ])
            ]),
            createVNode("div", { class: "w-full flex" }, [
              createVNode(_component_CoreActionButton, {
                type: "button",
                click: () => {
                  $options.addMeasure($data.details.indicators);
                },
                color: "primary",
                text: "Add Measure",
                icon: $data.addIcon
              }, null, 8, ["click", "icon"])
            ]),
            $data.details.indicators.length != 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($data.details.indicators, (indicator, index) => {
              return openBlock(), createBlock("div", {
                key: index,
                class: "border py-3 px-3 rounded"
              }, [
                createVNode("div", { class: "py-3 flex items-center justify-between" }, [
                  createVNode("h3", { class: "text-lg text-grameasuresy-700 font-semibold" }, "Measures (" + toDisplayString(index + 1) + ")", 1),
                  createVNode("button", {
                    type: "button",
                    onClick: () => {
                      $data.details.indicators.splice(index, 1);
                    }
                  }, [
                    createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                  ], 8, ["onClick"])
                ]),
                createVNode("div", { class: "grid grid-cols-4 gap-2 mb-3" }, [
                  createVNode(_component_FormKit, {
                    type: "text",
                    label: "Name",
                    validation: "required",
                    modelValue: indicator.name,
                    "onUpdate:modelValue": ($event) => indicator.name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "mt-1" }, [
                    createVNode("label", { class: "font-medium" }, "Type"),
                    createVNode(_component_CoreDropdown, {
                      items: $data.measureTypes,
                      modelValue: indicator.test_indicator_type,
                      "onUpdate:modelValue": ($event) => indicator.test_indicator_type = $event
                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_FormKit, {
                    type: "text",
                    label: "Unit",
                    modelValue: indicator.unit,
                    "onUpdate:modelValue": ($event) => indicator.unit = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_FormKit, {
                    type: "text",
                    label: "Description",
                    modelValue: indicator.description,
                    "onUpdate:modelValue": ($event) => indicator.description = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                indicator.test_indicator_type.name != "Free Text" ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_CoreActionButton, {
                    type: "button",
                    click: () => {
                      $options.addRange(index, indicator);
                    },
                    color: "primary",
                    text: "Add New Range",
                    icon: $data.addIcon
                  }, null, 8, ["click", "icon"])
                ])) : createCommentVNode("", true),
                indicator.indicator_ranges.length > 0 && indicator.test_indicator_type.name === "Numeric" ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(indicator.indicator_ranges, (measure, index2) => {
                  return openBlock(), createBlock("div", {
                    class: "px-3 py-3",
                    key: index2
                  }, [
                    createVNode("div", { class: "flex items-center space-x-3" }, [
                      createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                        createVNode("div", { class: "" }, [
                          createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Age Range"),
                          createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                            createVNode(_component_FormKit, {
                              type: "number",
                              label: "Minimum",
                              validation: "required",
                              modelValue: measure.min_age,
                              "onUpdate:modelValue": ($event) => measure.min_age = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_FormKit, {
                              type: "number",
                              label: "Maximum",
                              validation: "required",
                              modelValue: measure.max_age,
                              "onUpdate:modelValue": ($event) => measure.max_age = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", null, [
                              createVNode("label", { class: "-mb-2 font-semibold" }, "Sex"),
                              withDirectives(createVNode("select", {
                                class: "w-full bg-white border px-2 py-2 focus:ring-none rounded",
                                "onUpdate:modelValue": ($event) => measure.sex = $event
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList("sex" in _ctx ? _ctx.sex : unref(sex), (item, index3) => {
                                  return openBlock(), createBlock("option", {
                                    key: index3,
                                    value: item.name
                                  }, toDisplayString(item.name), 9, ["value"]);
                                }), 128))
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, measure.sex]
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "" }, [
                          createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Measure Range"),
                          createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                            createVNode(_component_FormKit, {
                              type: "number",
                              step: "any",
                              number: "",
                              label: "Minimum",
                              validation: "required|float",
                              modelValue: measure.lower_range,
                              "onUpdate:modelValue": ($event) => measure.lower_range = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_FormKit, {
                              type: "number",
                              step: "any",
                              number: "",
                              label: "Maximum",
                              validation: "required|float",
                              modelValue: measure.upper_range,
                              "onUpdate:modelValue": ($event) => measure.upper_range = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode(_component_FormKit, {
                          type: "text",
                          label: "Interpretation",
                          validation: "required",
                          modelValue: measure.interpretation,
                          "onUpdate:modelValue": ($event) => measure.interpretation = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "-mt-20" }, [
                        createVNode(_component_CoreActionButton, {
                          type: "button",
                          color: "error",
                          text: "Remove",
                          icon: $data.trashIcon,
                          click: () => {
                            indicator.indicator_ranges.splice(index2, 1);
                          }
                        }, null, 8, ["icon", "click"])
                      ])
                    ])
                  ]);
                }), 128)) : createCommentVNode("", true),
                indicator.indicator_ranges.length != 0 && indicator.test_indicator_type.name === "Auto Complete" ? (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(indicator.indicator_ranges, (measure, index2) => {
                  return openBlock(), createBlock("div", {
                    class: "px-3 py-3",
                    key: index2
                  }, [
                    createVNode("div", { class: "w-full items-center flex space-x-3" }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_FormKit, {
                          type: "text",
                          label: "Value",
                          validation: "required",
                          modelValue: measure.value,
                          "onUpdate:modelValue": ($event) => measure.value = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_FormKit, {
                          type: "text",
                          label: "Interpretation",
                          validation: "required",
                          modelValue: measure.interpretation,
                          "onUpdate:modelValue": ($event) => measure.interpretation = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-8" }, [
                        createVNode(_component_CoreActionButton, {
                          type: "button",
                          color: "error",
                          text: "Remove",
                          icon: $data.trashIcon,
                          click: () => {
                            indicator.indicator_ranges.splice(index2, 1);
                          }
                        }, null, 8, ["icon", "click"])
                      ])
                    ])
                  ]);
                }), 128)) : createCommentVNode("", true),
                $data.ranges != 0 && indicator.test_indicator_type.name === "Free Text" ? (openBlock(true), createBlock(Fragment, { key: 3 }, renderList($data.ranges, (measure, index2) => {
                  return openBlock(), createBlock("div", {
                    class: "flex items-center px-3 py-3 rounded bg-gray-50 mt-3",
                    key: index2
                  }, [
                    createVNode(_component_InformationCircleIcon, { class: "w-5 h-5 mr-2" }),
                    createTextVNode(" A text box will appear for results entry ")
                  ]);
                }), 128)) : createCommentVNode("", true)
              ]);
            }), 128)) : createCommentVNode("", true)
          ]),
          createVNode("div", { class: "justify-end flex items-center space-x-3 px-3 py-2" }, [
            createVNode(_component_CoreActionButton, {
              type: "submit",
              click: () => {
              },
              loading: $data.updating,
              color: "success",
              icon: $data.saveIcon,
              text: "Save Changes"
            }, null, 8, ["loading", "icon"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-catalog/test-types/edit/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _name_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _name_ as default };
//# sourceMappingURL=_name_-8b6f6a3b.mjs.map
