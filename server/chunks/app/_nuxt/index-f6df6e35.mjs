import { _ as _sfc_main$4 } from './Breadcrumb-fc731a79.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0 } from '../server.mjs';
import { r as render$6, _ as __nuxt_component_0$1 } from './Dropdown-666ad98b.mjs';
import { _ as __nuxt_component_1$2 } from './OutlinedButton-945a5cd0.mjs';
import { e as errorMessage, s as sex, d as dateFormat } from './constants-9b77e6ea.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, Transition, unref, withDirectives, vModelCheckbox, vShow } from 'vue';
import { e as endpoints, f as fetchRequest, r as render$7, c as filterArrays, a as render$4$1 } from './fetch-5298dfa4.mjs';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import { r as render$2 } from './XMarkIcon-170c776f.mjs';
import { r as render$3 } from './UserIcon-3d66d73e.mjs';
import { r as render$4 } from './CheckCircleIcon-e0bae33f.mjs';
import { r as render$5 } from './InformationCircleIcon-68986861.mjs';
import { r as render$8 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { r as render$9 } from './ArrowUturnLeftIcon-33d23cb1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './cone_test_on_nets-bc5ffd69.mjs';
import { _ as __nuxt_component_1$1 } from './SearchBar-a0fe3266.mjs';
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import moment from 'moment';
import { r as render$1, a as render$1$1 } from './PencilSquareIcon-77446728.mjs';
import { r as render$a } from './TrashIcon-b1416ff8.mjs';
import { u as useHead } from './index-2cdcde44.mjs';
import { P as Package } from './package-6f8153c4.mjs';
import { r as render } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import './nuxt-link-42c558b2.mjs';
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
import './CheckIcon-e4d11b9e.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main$3 = {
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
    XMarkIcon: render$2,
    UserIcon: render$3,
    CheckCircleIcon: render$4,
    InformationCircleIcon: render$5,
    ChevronUpDownIcon: render$6
  },
  data() {
    return {
      open: false,
      addIcon: render$7,
      saveIcon: render$8,
      clearIcon: render$9,
      loadingSpecimens: false,
      showMeasures: false,
      measures: 1,
      ranges: 0,
      indicators: [
        {
          name: "",
          test_indicator_type: 0,
          unit: "",
          description: "",
          indicator_ranges: new Array()
        }
      ],
      numericRange: {
        id: 0,
        max_age: 0,
        min_age: 0,
        lower_range: 0,
        upper_range: 0,
        gender: { name: "-- select gender --" },
        interpretation: ""
      },
      autocompleteRange: {
        id: 1,
        value: "",
        interpretation: ""
      },
      name: "",
      shortName: "",
      turnAroundTime: "",
      measureTypes: Array(),
      measureSelected: { name: "-- Select measure --", id: 0 },
      loading: false,
      rawOrganisms: new Array(),
      organisms: new Array(),
      organismsSelected: new Array(),
      cookie: useCookie("token"),
      rawSpecimens: new Array(),
      specimens: new Array(),
      specimensSelected: new Array(),
      departments: new Array(),
      measureType: "",
      selectedDepartment: "-- select department --",
      showCultureWorksheet: false,
      shouldPrintResults: false,
      timeTypes: new Array({ name: "Month" }, { name: "Weeks" }, { name: "Days" }, { name: "Hours" }, { name: "Minutes" }),
      timeType: { name: "-- select value --" }
    };
  },
  methods: {
    async init() {
      await this.loadDepartments();
      await this.loadTestTypeIndicators();
      await this.loadOrganisms();
      this.handleClick();
      const request = {
        route: endpoints.specimens,
        method: "GET",
        token: `${this.cookie}`,
        body: {}
      };
      let { data, error, pending } = await fetchRequest(request);
      this.loadingSpecimens = pending;
      if (data.value) {
        this.rawSpecimens = data.value;
        data.value.map((specimen) => {
          this.specimens.push(specimen.name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    /**
     * @method loadDepartments load departments from api @endpoints
     * @returns promise @type void
     */
    async loadDepartments() {
      const request = {
        route: endpoints.departments,
        method: "GET",
        token: `${this.cookie}`
      };
      let { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        this.departments = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async loadOrganisms() {
      const request = {
        route: endpoints.organisms,
        method: "GET",
        token: `${this.cookie}`
      };
      let { data, error } = await fetchRequest(request);
      if (data.value) {
        this.rawOrganisms = data.value;
        data.value.map((organism) => {
          this.organisms.push(organism.name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async loadTestTypeIndicators() {
      const request = {
        route: `${endpoints.testTypes}/test_indicator_types/`,
        method: "GET",
        token: `${this.cookie}`
      };
      let { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        this.measureTypes = data.value;
        this.measureType = this.measureSelected.name;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    /**
     * @method handleClick change modal visibility
     */
    handleClick() {
      this.open = !this.open;
    },
    getEmitedDepartment(department) {
      this.selectedDepartment = department.name;
    },
    /**
     * @method addMeasure creates a new indicator object
     * @returns void
     */
    addMeasure() {
      this.indicators.push({
        name: "",
        test_indicator_type: 0,
        unit: "",
        description: "",
        indicator_ranges: [],
        value: "",
        id: ""
      });
    },
    addRange(index2) {
      try {
        const indicator = this.indicators[index2];
        const indicatorRanges = indicator.indicator_ranges;
        let lastItemId = 0;
        if (indicatorRanges.length > 0) {
          const lastItemIndex = indicatorRanges.length - 1;
          lastItemId = indicatorRanges[lastItemIndex].id;
        }
        const newId = lastItemId && lastItemId + 1;
        const defaultRange = {
          id: newId,
          interpretation: ""
        };
        if (this.measureSelected.name.toLowerCase().includes("numeric")) {
          defaultRange.age_max = 0;
          defaultRange.age_min = 0;
          defaultRange.upper_range = 0;
          defaultRange.lower_range = 0;
          defaultRange.gender = { name: "-- select gender --" };
        } else if (this.measureSelected.name.toLowerCase() == "auto complete" || this.measureSelected.name.toLowerCase().includes("alpha")) {
          defaultRange.value = "";
        }
        indicatorRanges.push(defaultRange);
      } catch (error) {
        console.error("Error: ", error);
      }
    },
    removeRange(indicatorIndex, index2) {
      this.indicators[indicatorIndex].indicator_ranges.splice(index2, 1);
    },
    async submitForm() {
      this.loading = true;
      const updatedIndicators = this.indicators.map((indicator) => {
        const updatedRanges = indicator.indicator_ranges.map((range) => {
          if (range.hasOwnProperty("gender")) {
            const { gender, ...rest } = range;
            return {
              ...rest,
              sex: gender.name
            };
          } else {
            return range;
          }
        });
        return {
          ...indicator,
          indicator_ranges: updatedRanges
        };
      });
      const department = this.departments.find((department2) => department2.name === this.selectedDepartment);
      const department_id = department ? department.id : void 0;
      const request = {
        route: endpoints.testTypes,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          name: this.name,
          short_name: this.shortName,
          expected_turn_around_time: {
            value: this.turnAroundTime,
            unit: this.timeType.name
          },
          print_device: this.shouldPrintResults,
          department_id,
          specimens: filterArrays(this.rawSpecimens, this.specimensSelected),
          indicators: updatedIndicators,
          organisms: filterArrays(this.rawOrganisms, this.organismsSelected)
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`Test type created successfully!`);
        this.invalidateForm();
        this.$emit("update", true);
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.handleClick();
      }
    },
    addNumericRange(measure) {
      if (measure.name.toLowerCase() == "numeric") {
        this.indicators.map((indicator) => {
          indicator.indicator_ranges.push(this.numericRange);
        });
      }
    },
    addAutocompleteRange(measure) {
      if (measure.name.toLowerCase() === "auto complete") {
        this.indicators.map((indicator) => {
          indicator.indicator_ranges.push(this.autocompleteRange);
        });
      }
    },
    invalidateForm() {
      this.$formkit.reset("submitForm");
    }
  },
  watch: {
    measureSelected: {
      handler(value) {
        if (value.name == "Auto Complete") {
          this.addAutocompleteRange(value);
        } else {
          this.addNumericRange(value);
        }
      },
      deep: true
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreDropdown = __nuxt_component_0$1;
  const _component_multi_select = resolveComponent("multi-select");
  const _component_Listbox = resolveComponent("Listbox");
  const _component_ListboxButton = resolveComponent("ListboxButton");
  const _component_ChevronUpDownIcon = resolveComponent("ChevronUpDownIcon");
  const _component_ListboxOptions = resolveComponent("ListboxOptions");
  const _component_ListboxOption = resolveComponent("ListboxOption");
  const _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");
  const _component_InformationCircleIcon = resolveComponent("InformationCircleIcon");
  const _component_CoreOutlinedButton = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    text: "New test type",
    color: "primary",
    icon: $data.addIcon,
    click: $options.init
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: $data.open,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          onClose: $options.handleClick,
          class: "relative z-10"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="fixed inset-0 bg-gray-900 bg-opacity-50"${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "fixed inset-0 bg-gray-900 bg-opacity-50" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-5xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg text-black flex items-center font-semibold leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Create Test Type `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Create Test Type ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div>`);
                          _push5(ssrRenderComponent(_component_FormKit, {
                            id: "submitForm",
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3"${_scopeId5}><div class="grid grid-cols-2 gap-4 px-5"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Name",
                                  validation: "required",
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "text",
                                  label: "Short name",
                                  validation: "required",
                                  modelValue: $data.shortName,
                                  "onUpdate:modelValue": ($event) => $data.shortName = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex px-5"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "number",
                                  label: "Expected Turn Around Time",
                                  validation: "required|number",
                                  modelValue: $data.turnAroundTime,
                                  "onUpdate:modelValue": ($event) => $data.turnAroundTime = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`<div class="py-1 ml-2"${_scopeId5}><label class="font-medium text-base"${_scopeId5}>Duration</label>`);
                                _push6(ssrRenderComponent(_component_CoreDropdown, {
                                  items: $data.timeTypes,
                                  modelValue: $data.timeType,
                                  "onUpdate:modelValue": ($event) => $data.timeType = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="w-full px-5 flex items-center space-x-2"${_scopeId5}><input id="showCultureWorksheet" name="showCultureWorksheet" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.showCultureWorksheet) ? ssrLooseContain($data.showCultureWorksheet, null) : $data.showCultureWorksheet) ? " checked" : ""}${_scopeId5}><label for="showCultureWorksheet"${_scopeId5}>Show Culture Worksheet?</label></div><div style="${ssrRenderStyle($data.showCultureWorksheet ? null : { display: "none" })}" class="w-full flex flex-col space-y-2 px-5"${_scopeId5}><label class="font-medium"${_scopeId5}>Organisms</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.organismsSelected,
                                  "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                                  options: $data.organisms,
                                  mode: "tags",
                                  required: false,
                                  clear: "",
                                  searchable: "",
                                  class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full flex flex-col space-y-2 px-5"${_scopeId5}><label class="font-medium"${_scopeId5}>Specimens</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.specimensSelected,
                                  "onUpdate:modelValue": ($event) => $data.specimensSelected = $event,
                                  options: $data.specimens,
                                  mode: "tags",
                                  required: "",
                                  searchable: "",
                                  clear: "",
                                  class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="w-full px-5 flex items-center space-x-2"${_scopeId5}><input id="shouldPrintResults" name="shouldPrintResults" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.shouldPrintResults) ? ssrLooseContain($data.shouldPrintResults, null) : $data.shouldPrintResults) ? " checked" : ""}${_scopeId5}><label for="shouldPrintResults"${_scopeId5}>Print Results On Small Label?</label></div><div class="w-full flex items-center px-5"${_scopeId5}><div class="w-full flex flex-col space-y-2"${_scopeId5}><label class="font-medium"${_scopeId5}>Lab section</label>`);
                                _push6(ssrRenderComponent(_component_multi_select, {
                                  style: { "--ms-max-height": "none !important" },
                                  modelValue: $data.selectedDepartment,
                                  "onUpdate:modelValue": ($event) => $data.selectedDepartment = $event,
                                  options: $data.departments.map((department) => department.name),
                                  single: "",
                                  required: "",
                                  searchable: "",
                                  clear: "",
                                  class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div></div><div class="w-full flex px-5"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  click: () => {
                                    $options.addMeasure();
                                  },
                                  color: "primary",
                                  text: "Add Measure",
                                  icon: $data.addIcon
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                                if ($data.indicators.length != 0) {
                                  _push6(`<!--[-->`);
                                  ssrRenderList($data.indicators, (indicator, index2) => {
                                    _push6(`<div class="border px-5 mx-5 py-3 rounded"${_scopeId5}><div class="py-3 flex items-center justify-between"${_scopeId5}><h3 class="text-lg text-grameasuresy-700 font-semibold"${_scopeId5}> Measures (${ssrInterpolate(index2 + 1)}) </h3><button${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent6, _scopeId5));
                                    _push6(`</button></div><div class="grid grid-cols-4 gap-2 mb-3"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: indicator.name,
                                      "onUpdate:modelValue": ($event) => indicator.name = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div${_scopeId5}><label class="font-medium pb-2"${_scopeId5}>Type</label><div hidden${_scopeId5}>${ssrInterpolate(indicator.test_indicator_type = $data.measureSelected.id)}</div>`);
                                    _push6(ssrRenderComponent(_component_Listbox, {
                                      modelValue: $data.measureSelected,
                                      "onUpdate:modelValue": ($event) => $data.measureSelected = $event
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="relative mt-1"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_ListboxButton, { class: "relative w-full cursor-default rounded border py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-none sm:text-sm" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span class="block truncate"${_scopeId7}>${ssrInterpolate($data.measureSelected.name)}</span><span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_ChevronUpDownIcon, {
                                                  class: "h-5 w-5 text-gray-500",
                                                  "aria-hidden": "true"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`</span>`);
                                              } else {
                                                return [
                                                  createVNode("span", { class: "block truncate" }, toDisplayString($data.measureSelected.name), 1),
                                                  createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                                                    createVNode(_component_ChevronUpDownIcon, {
                                                      class: "h-5 w-5 text-gray-500",
                                                      "aria-hidden": "true"
                                                    })
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_ListboxOptions, {
                                            style: { "z-index": "10000" },
                                            class: "absolute mt-1 w-full max-h-96 overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm drop-shadow-md divide-y divide-slate-100"
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList($data.measureTypes, (item) => {
                                                  _push8(ssrRenderComponent(_component_ListboxOption, {
                                                    key: item.name,
                                                    value: item,
                                                    as: "template"
                                                  }, {
                                                    default: withCtx(({ active, selected }, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<li class="${ssrRenderClass([
                                                          active ? "bg-green-100 text-green-500" : "text-gray-900",
                                                          "relative cursor-default select-none py-2 pl-10 pr-4"
                                                        ])}"${_scopeId8}><span class="${ssrRenderClass([
                                                          selected ? "font-medium" : "font-normal",
                                                          "block truncate"
                                                        ])}"${_scopeId8}>${ssrInterpolate(item.name)}</span>`);
                                                        if (selected) {
                                                          _push9(`<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"${_scopeId8}>`);
                                                          _push9(ssrRenderComponent(_component_CheckCircleIcon, {
                                                            class: "h-5 w-5",
                                                            "aria-hidden": "true"
                                                          }, null, _parent9, _scopeId8));
                                                          _push9(`</span>`);
                                                        } else {
                                                          _push9(`<!---->`);
                                                        }
                                                        _push9(`</li>`);
                                                      } else {
                                                        return [
                                                          createVNode("li", {
                                                            class: [
                                                              active ? "bg-green-100 text-green-500" : "text-gray-900",
                                                              "relative cursor-default select-none py-2 pl-10 pr-4"
                                                            ]
                                                          }, [
                                                            createVNode("span", {
                                                              class: [
                                                                selected ? "font-medium" : "font-normal",
                                                                "block truncate"
                                                              ]
                                                            }, toDisplayString(item.name), 3),
                                                            selected ? (openBlock(), createBlock("span", {
                                                              key: 0,
                                                              class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                                                            }, [
                                                              createVNode(_component_CheckCircleIcon, {
                                                                class: "h-5 w-5",
                                                                "aria-hidden": "true"
                                                              })
                                                            ])) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList($data.measureTypes, (item) => {
                                                    return openBlock(), createBlock(_component_ListboxOption, {
                                                      key: item.name,
                                                      value: item,
                                                      as: "template"
                                                    }, {
                                                      default: withCtx(({ active, selected }) => [
                                                        createVNode("li", {
                                                          class: [
                                                            active ? "bg-green-100 text-green-500" : "text-gray-900",
                                                            "relative cursor-default select-none py-2 pl-10 pr-4"
                                                          ]
                                                        }, [
                                                          createVNode("span", {
                                                            class: [
                                                              selected ? "font-medium" : "font-normal",
                                                              "block truncate"
                                                            ]
                                                          }, toDisplayString(item.name), 3),
                                                          selected ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                                                          }, [
                                                            createVNode(_component_CheckCircleIcon, {
                                                              class: "h-5 w-5",
                                                              "aria-hidden": "true"
                                                            })
                                                          ])) : createCommentVNode("", true)
                                                        ], 2)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 128))
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "relative mt-1" }, [
                                              createVNode(_component_ListboxButton, { class: "relative w-full cursor-default rounded border py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-none sm:text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "block truncate" }, toDisplayString($data.measureSelected.name), 1),
                                                  createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                                                    createVNode(_component_ChevronUpDownIcon, {
                                                      class: "h-5 w-5 text-gray-500",
                                                      "aria-hidden": "true"
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(Transition, {
                                                "leave-active-class": "transition duration-100 ease-in",
                                                "leave-from-class": "opacity-100",
                                                "leave-to-class": "opacity-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_ListboxOptions, {
                                                    style: { "z-index": "10000" },
                                                    class: "absolute mt-1 w-full max-h-96 overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm drop-shadow-md divide-y divide-slate-100"
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList($data.measureTypes, (item) => {
                                                        return openBlock(), createBlock(_component_ListboxOption, {
                                                          key: item.name,
                                                          value: item,
                                                          as: "template"
                                                        }, {
                                                          default: withCtx(({ active, selected }) => [
                                                            createVNode("li", {
                                                              class: [
                                                                active ? "bg-green-100 text-green-500" : "text-gray-900",
                                                                "relative cursor-default select-none py-2 pl-10 pr-4"
                                                              ]
                                                            }, [
                                                              createVNode("span", {
                                                                class: [
                                                                  selected ? "font-medium" : "font-normal",
                                                                  "block truncate"
                                                                ]
                                                              }, toDisplayString(item.name), 3),
                                                              selected ? (openBlock(), createBlock("span", {
                                                                key: 0,
                                                                class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                                                              }, [
                                                                createVNode(_component_CheckCircleIcon, {
                                                                  class: "h-5 w-5",
                                                                  "aria-hidden": "true"
                                                                })
                                                              ])) : createCommentVNode("", true)
                                                            ], 2)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value"]);
                                                      }), 128))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "Unit",
                                      modelValue: indicator.unit,
                                      "onUpdate:modelValue": ($event) => indicator.unit = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      type: "text",
                                      label: "Description",
                                      modelValue: indicator.description,
                                      "onUpdate:modelValue": ($event) => indicator.description = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    if ($data.measureSelected.name !== "Free Text") {
                                      _push6(ssrRenderComponent(_component_CoreActionButton, {
                                        type: "button",
                                        click: () => {
                                          $options.addRange(index2);
                                        },
                                        color: "primary",
                                        text: "Add New Range",
                                        icon: $data.addIcon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if (indicator.indicator_ranges.length > 0 && $data.measureSelected.name === "Numeric") {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(indicator.indicator_ranges, (range, rangeIndex) => {
                                        _push6(`<div class="px-3 py-3"${_scopeId5}><div class="flex items-center justify-center space-x-3"${_scopeId5}><div class="grid grid-cols-2 gap-2"${_scopeId5}><div class=""${_scopeId5}><label class="mb-2 text-lg font-semibold text-gray-600"${_scopeId5}>Age Range</label><div class="grid grid-cols-2 gap-2"${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_FormKit, {
                                          type: "number",
                                          label: "Minimum",
                                          validation: "required",
                                          modelValue: range.min_age,
                                          "onUpdate:modelValue": ($event) => range.min_age = $event
                                        }, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_FormKit, {
                                          type: "number",
                                          label: "Maximum",
                                          validation: "required",
                                          modelValue: range.max_age,
                                          "onUpdate:modelValue": ($event) => range.max_age = $event
                                        }, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_CoreDropdown, {
                                          modelValue: range.gender,
                                          "onUpdate:modelValue": ($event) => range.gender = $event,
                                          items: "sex" in _ctx ? _ctx.sex : unref(sex)
                                        }, null, _parent6, _scopeId5));
                                        _push6(`</div></div><div class=""${_scopeId5}><label class="mb-2 text-lg font-semibold text-gray-600"${_scopeId5}>Measure Range</label><div class="grid grid-cols-2 gap-2"${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_FormKit, {
                                          type: "number",
                                          number: "",
                                          step: "any",
                                          label: "Minimum",
                                          validation: "required|required",
                                          modelValue: range.upper_range,
                                          "onUpdate:modelValue": ($event) => range.upper_range = $event
                                        }, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_FormKit, {
                                          type: "number",
                                          number: "",
                                          step: "any",
                                          label: "Maximum",
                                          validation: "required|required",
                                          modelValue: range.lower_range,
                                          "onUpdate:modelValue": ($event) => range.lower_range = $event
                                        }, null, _parent6, _scopeId5));
                                        _push6(`</div></div>`);
                                        _push6(ssrRenderComponent(_component_FormKit, {
                                          type: "text",
                                          label: "Interpretation",
                                          validation: "required",
                                          modelValue: range.interpretation,
                                          "onUpdate:modelValue": ($event) => range.interpretation = $event
                                        }, null, _parent6, _scopeId5));
                                        _push6(`</div><button${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent6, _scopeId5));
                                        _push6(`</button></div></div>`);
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if (indicator.indicator_ranges.length > 0 && $data.measureSelected.name == "Auto Complete" || $data.measureSelected.name === "Alpha Numeric") {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(indicator.indicator_ranges, (autoCompleteItem, k) => {
                                        _push6(`<div class="px-3 py-3"${_scopeId5}><div class="w-full flex items-center justify-center space-x-2"${_scopeId5}><div class="w-full grid grid-cols-2 gap-4"${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_FormKit, {
                                          type: "text",
                                          label: "Value",
                                          validation: "required",
                                          modelValue: autoCompleteItem.value,
                                          "onUpdate:modelValue": ($event) => autoCompleteItem.value = $event
                                        }, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_FormKit, {
                                          type: "text",
                                          label: "Interpretation",
                                          validation: "required",
                                          modelValue: autoCompleteItem.interpretation,
                                          "onUpdate:modelValue": ($event) => autoCompleteItem.interpretation = $event
                                        }, null, _parent6, _scopeId5));
                                        _push6(`</div><button class="h-full bg-red-500 flex items-center justify-center rounded text-white px-4 py-2 mt-2"${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent6, _scopeId5));
                                        _push6(`</button></div></div>`);
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if ($data.measureSelected.name === "Free Text") {
                                      _push6(`<div class="flex items-center px-3 py-3 rounded bg-sky-50 mt-3 text-sky-500"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_InformationCircleIcon, { class: "w-5 h-5 mr-2" }, null, _parent6, _scopeId5));
                                      _push6(` A text box will appear for results entry </div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</div>`);
                                  });
                                  _push6(`<!--]-->`);
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.invalidateForm();
                                  },
                                  text: "Clear form"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  type: "submit",
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save Changes"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3" }, [
                                    createVNode("div", { class: "grid grid-cols-2 gap-4 px-5" }, [
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Name",
                                        validation: "required",
                                        modelValue: $data.name,
                                        "onUpdate:modelValue": ($event) => $data.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_FormKit, {
                                        type: "text",
                                        label: "Short name",
                                        validation: "required",
                                        modelValue: $data.shortName,
                                        "onUpdate:modelValue": ($event) => $data.shortName = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full flex px-5" }, [
                                      createVNode(_component_FormKit, {
                                        type: "number",
                                        label: "Expected Turn Around Time",
                                        validation: "required|number",
                                        modelValue: $data.turnAroundTime,
                                        "onUpdate:modelValue": ($event) => $data.turnAroundTime = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "py-1 ml-2" }, [
                                        createVNode("label", { class: "font-medium text-base" }, "Duration"),
                                        createVNode(_component_CoreDropdown, {
                                          items: $data.timeTypes,
                                          modelValue: $data.timeType,
                                          "onUpdate:modelValue": ($event) => $data.timeType = $event
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "w-full px-5 flex items-center space-x-2" }, [
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
                                    withDirectives(createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                      createVNode("label", { class: "font-medium" }, "Organisms"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.organismsSelected,
                                        "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                                        options: $data.organisms,
                                        mode: "tags",
                                        required: false,
                                        clear: "",
                                        searchable: "",
                                        class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ], 512), [
                                      [vShow, $data.showCultureWorksheet]
                                    ]),
                                    createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                      createVNode("label", { class: "font-medium" }, "Specimens"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.specimensSelected,
                                        "onUpdate:modelValue": ($event) => $data.specimensSelected = $event,
                                        options: $data.specimens,
                                        mode: "tags",
                                        required: "",
                                        searchable: "",
                                        clear: "",
                                        class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ]),
                                    createVNode("div", { class: "w-full px-5 flex items-center space-x-2" }, [
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
                                    createVNode("div", { class: "w-full flex items-center px-5" }, [
                                      createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                        createVNode("label", { class: "font-medium" }, "Lab section"),
                                        createVNode(_component_multi_select, {
                                          style: { "--ms-max-height": "none !important" },
                                          modelValue: $data.selectedDepartment,
                                          "onUpdate:modelValue": ($event) => $data.selectedDepartment = $event,
                                          options: $data.departments.map((department) => department.name),
                                          single: "",
                                          required: "",
                                          searchable: "",
                                          clear: "",
                                          class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "w-full flex px-5" }, [
                                      createVNode(_component_CoreActionButton, {
                                        click: () => {
                                          $options.addMeasure();
                                        },
                                        color: "primary",
                                        text: "Add Measure",
                                        icon: $data.addIcon
                                      }, null, 8, ["click", "icon"])
                                    ]),
                                    $data.indicators.length != 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($data.indicators, (indicator, index2) => {
                                      return openBlock(), createBlock("div", {
                                        key: index2,
                                        class: "border px-5 mx-5 py-3 rounded"
                                      }, [
                                        createVNode("div", { class: "py-3 flex items-center justify-between" }, [
                                          createVNode("h3", { class: "text-lg text-grameasuresy-700 font-semibold" }, " Measures (" + toDisplayString(index2 + 1) + ") ", 1),
                                          createVNode("button", {
                                            onClick: () => {
                                              $data.indicators.splice(index2, 1);
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
                                          createVNode("div", null, [
                                            createVNode("label", { class: "font-medium pb-2" }, "Type"),
                                            createVNode("div", { hidden: "" }, toDisplayString(indicator.test_indicator_type = $data.measureSelected.id), 1),
                                            createVNode(_component_Listbox, {
                                              modelValue: $data.measureSelected,
                                              "onUpdate:modelValue": ($event) => $data.measureSelected = $event
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "relative mt-1" }, [
                                                  createVNode(_component_ListboxButton, { class: "relative w-full cursor-default rounded border py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-none sm:text-sm" }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "block truncate" }, toDisplayString($data.measureSelected.name), 1),
                                                      createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                                                        createVNode(_component_ChevronUpDownIcon, {
                                                          class: "h-5 w-5 text-gray-500",
                                                          "aria-hidden": "true"
                                                        })
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(Transition, {
                                                    "leave-active-class": "transition duration-100 ease-in",
                                                    "leave-from-class": "opacity-100",
                                                    "leave-to-class": "opacity-0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_ListboxOptions, {
                                                        style: { "z-index": "10000" },
                                                        class: "absolute mt-1 w-full max-h-96 overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm drop-shadow-md divide-y divide-slate-100"
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList($data.measureTypes, (item) => {
                                                            return openBlock(), createBlock(_component_ListboxOption, {
                                                              key: item.name,
                                                              value: item,
                                                              as: "template"
                                                            }, {
                                                              default: withCtx(({ active, selected }) => [
                                                                createVNode("li", {
                                                                  class: [
                                                                    active ? "bg-green-100 text-green-500" : "text-gray-900",
                                                                    "relative cursor-default select-none py-2 pl-10 pr-4"
                                                                  ]
                                                                }, [
                                                                  createVNode("span", {
                                                                    class: [
                                                                      selected ? "font-medium" : "font-normal",
                                                                      "block truncate"
                                                                    ]
                                                                  }, toDisplayString(item.name), 3),
                                                                  selected ? (openBlock(), createBlock("span", {
                                                                    key: 0,
                                                                    class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                                                                  }, [
                                                                    createVNode(_component_CheckCircleIcon, {
                                                                      class: "h-5 w-5",
                                                                      "aria-hidden": "true"
                                                                    })
                                                                  ])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["value"]);
                                                          }), 128))
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                        $data.measureSelected.name !== "Free Text" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                          key: 0,
                                          type: "button",
                                          click: () => {
                                            $options.addRange(index2);
                                          },
                                          color: "primary",
                                          text: "Add New Range",
                                          icon: $data.addIcon
                                        }, null, 8, ["click", "icon"])) : createCommentVNode("", true),
                                        indicator.indicator_ranges.length > 0 && $data.measureSelected.name === "Numeric" ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(indicator.indicator_ranges, (range, rangeIndex) => {
                                          return openBlock(), createBlock("div", {
                                            class: "px-3 py-3",
                                            key: range.id
                                          }, [
                                            createVNode("div", { class: "flex items-center justify-center space-x-3" }, [
                                              createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                createVNode("div", { class: "" }, [
                                                  createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Age Range"),
                                                  createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                    createVNode(_component_FormKit, {
                                                      type: "number",
                                                      label: "Minimum",
                                                      validation: "required",
                                                      modelValue: range.min_age,
                                                      "onUpdate:modelValue": ($event) => range.min_age = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_FormKit, {
                                                      type: "number",
                                                      label: "Maximum",
                                                      validation: "required",
                                                      modelValue: range.max_age,
                                                      "onUpdate:modelValue": ($event) => range.max_age = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_CoreDropdown, {
                                                      modelValue: range.gender,
                                                      "onUpdate:modelValue": ($event) => range.gender = $event,
                                                      items: "sex" in _ctx ? _ctx.sex : unref(sex)
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ])
                                                ]),
                                                createVNode("div", { class: "" }, [
                                                  createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Measure Range"),
                                                  createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                    createVNode(_component_FormKit, {
                                                      type: "number",
                                                      number: "",
                                                      step: "any",
                                                      label: "Minimum",
                                                      validation: "required|required",
                                                      modelValue: range.upper_range,
                                                      "onUpdate:modelValue": ($event) => range.upper_range = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_FormKit, {
                                                      type: "number",
                                                      number: "",
                                                      step: "any",
                                                      label: "Maximum",
                                                      validation: "required|required",
                                                      modelValue: range.lower_range,
                                                      "onUpdate:modelValue": ($event) => range.lower_range = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                createVNode(_component_FormKit, {
                                                  type: "text",
                                                  label: "Interpretation",
                                                  validation: "required",
                                                  modelValue: range.interpretation,
                                                  "onUpdate:modelValue": ($event) => range.interpretation = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              createVNode("button", {
                                                onClick: ($event) => $options.removeRange(index2, rangeIndex)
                                              }, [
                                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                              ], 8, ["onClick"])
                                            ])
                                          ]);
                                        }), 128)) : createCommentVNode("", true),
                                        indicator.indicator_ranges.length > 0 && $data.measureSelected.name == "Auto Complete" || $data.measureSelected.name === "Alpha Numeric" ? (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(indicator.indicator_ranges, (autoCompleteItem, k) => {
                                          return openBlock(), createBlock("div", {
                                            class: "px-3 py-3",
                                            key: autoCompleteItem.id
                                          }, [
                                            createVNode("div", { class: "w-full flex items-center justify-center space-x-2" }, [
                                              createVNode("div", { class: "w-full grid grid-cols-2 gap-4" }, [
                                                createVNode(_component_FormKit, {
                                                  type: "text",
                                                  label: "Value",
                                                  validation: "required",
                                                  modelValue: autoCompleteItem.value,
                                                  "onUpdate:modelValue": ($event) => autoCompleteItem.value = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_FormKit, {
                                                  type: "text",
                                                  label: "Interpretation",
                                                  validation: "required",
                                                  modelValue: autoCompleteItem.interpretation,
                                                  "onUpdate:modelValue": ($event) => autoCompleteItem.interpretation = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              createVNode("button", {
                                                onClick: ($event) => $options.removeRange(index2, k),
                                                class: "h-full bg-red-500 flex items-center justify-center rounded text-white px-4 py-2 mt-2"
                                              }, [
                                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                              ], 8, ["onClick"])
                                            ])
                                          ]);
                                        }), 128)) : createCommentVNode("", true),
                                        $data.measureSelected.name === "Free Text" ? (openBlock(), createBlock("div", {
                                          key: 3,
                                          class: "flex items-center px-3 py-3 rounded bg-sky-50 mt-3 text-sky-500"
                                        }, [
                                          createVNode(_component_InformationCircleIcon, { class: "w-5 h-5 mr-2" }),
                                          createTextVNode(" A text box will appear for results entry ")
                                        ])) : createCommentVNode("", true)
                                      ]);
                                    }), 128)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreOutlinedButton, {
                                      type: "button",
                                      click: () => {
                                        $options.invalidateForm();
                                      },
                                      text: "Clear form"
                                    }, null, 8, ["click"]),
                                    createVNode(_component_CoreActionButton, {
                                      type: "submit",
                                      click: () => {
                                      },
                                      loading: $data.loading,
                                      color: "success",
                                      icon: $data.saveIcon,
                                      text: "Save Changes"
                                    }, null, 8, ["loading", "icon"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg text-black flex items-center font-semibold leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Create Test Type ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              id: "submitForm",
                              type: "form",
                              "submit-label": "Update",
                              onSubmit: $options.submitForm,
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3" }, [
                                  createVNode("div", { class: "grid grid-cols-2 gap-4 px-5" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Short name",
                                      validation: "required",
                                      modelValue: $data.shortName,
                                      "onUpdate:modelValue": ($event) => $data.shortName = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex px-5" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Expected Turn Around Time",
                                      validation: "required|number",
                                      modelValue: $data.turnAroundTime,
                                      "onUpdate:modelValue": ($event) => $data.turnAroundTime = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "py-1 ml-2" }, [
                                      createVNode("label", { class: "font-medium text-base" }, "Duration"),
                                      createVNode(_component_CoreDropdown, {
                                        items: $data.timeTypes,
                                        modelValue: $data.timeType,
                                        "onUpdate:modelValue": ($event) => $data.timeType = $event
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full px-5 flex items-center space-x-2" }, [
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
                                  withDirectives(createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                    createVNode("label", { class: "font-medium" }, "Organisms"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.organismsSelected,
                                      "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                                      options: $data.organisms,
                                      mode: "tags",
                                      required: false,
                                      clear: "",
                                      searchable: "",
                                      class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ], 512), [
                                    [vShow, $data.showCultureWorksheet]
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                    createVNode("label", { class: "font-medium" }, "Specimens"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.specimensSelected,
                                      "onUpdate:modelValue": ($event) => $data.specimensSelected = $event,
                                      options: $data.specimens,
                                      mode: "tags",
                                      required: "",
                                      searchable: "",
                                      clear: "",
                                      class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ]),
                                  createVNode("div", { class: "w-full px-5 flex items-center space-x-2" }, [
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
                                  createVNode("div", { class: "w-full flex items-center px-5" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Lab section"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.selectedDepartment,
                                        "onUpdate:modelValue": ($event) => $data.selectedDepartment = $event,
                                        options: $data.departments.map((department) => department.name),
                                        single: "",
                                        required: "",
                                        searchable: "",
                                        clear: "",
                                        class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex px-5" }, [
                                    createVNode(_component_CoreActionButton, {
                                      click: () => {
                                        $options.addMeasure();
                                      },
                                      color: "primary",
                                      text: "Add Measure",
                                      icon: $data.addIcon
                                    }, null, 8, ["click", "icon"])
                                  ]),
                                  $data.indicators.length != 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($data.indicators, (indicator, index2) => {
                                    return openBlock(), createBlock("div", {
                                      key: index2,
                                      class: "border px-5 mx-5 py-3 rounded"
                                    }, [
                                      createVNode("div", { class: "py-3 flex items-center justify-between" }, [
                                        createVNode("h3", { class: "text-lg text-grameasuresy-700 font-semibold" }, " Measures (" + toDisplayString(index2 + 1) + ") ", 1),
                                        createVNode("button", {
                                          onClick: () => {
                                            $data.indicators.splice(index2, 1);
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
                                        createVNode("div", null, [
                                          createVNode("label", { class: "font-medium pb-2" }, "Type"),
                                          createVNode("div", { hidden: "" }, toDisplayString(indicator.test_indicator_type = $data.measureSelected.id), 1),
                                          createVNode(_component_Listbox, {
                                            modelValue: $data.measureSelected,
                                            "onUpdate:modelValue": ($event) => $data.measureSelected = $event
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "relative mt-1" }, [
                                                createVNode(_component_ListboxButton, { class: "relative w-full cursor-default rounded border py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-none sm:text-sm" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "block truncate" }, toDisplayString($data.measureSelected.name), 1),
                                                    createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                                                      createVNode(_component_ChevronUpDownIcon, {
                                                        class: "h-5 w-5 text-gray-500",
                                                        "aria-hidden": "true"
                                                      })
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(Transition, {
                                                  "leave-active-class": "transition duration-100 ease-in",
                                                  "leave-from-class": "opacity-100",
                                                  "leave-to-class": "opacity-0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_ListboxOptions, {
                                                      style: { "z-index": "10000" },
                                                      class: "absolute mt-1 w-full max-h-96 overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm drop-shadow-md divide-y divide-slate-100"
                                                    }, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList($data.measureTypes, (item) => {
                                                          return openBlock(), createBlock(_component_ListboxOption, {
                                                            key: item.name,
                                                            value: item,
                                                            as: "template"
                                                          }, {
                                                            default: withCtx(({ active, selected }) => [
                                                              createVNode("li", {
                                                                class: [
                                                                  active ? "bg-green-100 text-green-500" : "text-gray-900",
                                                                  "relative cursor-default select-none py-2 pl-10 pr-4"
                                                                ]
                                                              }, [
                                                                createVNode("span", {
                                                                  class: [
                                                                    selected ? "font-medium" : "font-normal",
                                                                    "block truncate"
                                                                  ]
                                                                }, toDisplayString(item.name), 3),
                                                                selected ? (openBlock(), createBlock("span", {
                                                                  key: 0,
                                                                  class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                                                                }, [
                                                                  createVNode(_component_CheckCircleIcon, {
                                                                    class: "h-5 w-5",
                                                                    "aria-hidden": "true"
                                                                  })
                                                                ])) : createCommentVNode("", true)
                                                              ], 2)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["value"]);
                                                        }), 128))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      $data.measureSelected.name !== "Free Text" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                        key: 0,
                                        type: "button",
                                        click: () => {
                                          $options.addRange(index2);
                                        },
                                        color: "primary",
                                        text: "Add New Range",
                                        icon: $data.addIcon
                                      }, null, 8, ["click", "icon"])) : createCommentVNode("", true),
                                      indicator.indicator_ranges.length > 0 && $data.measureSelected.name === "Numeric" ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(indicator.indicator_ranges, (range, rangeIndex) => {
                                        return openBlock(), createBlock("div", {
                                          class: "px-3 py-3",
                                          key: range.id
                                        }, [
                                          createVNode("div", { class: "flex items-center justify-center space-x-3" }, [
                                            createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                              createVNode("div", { class: "" }, [
                                                createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Age Range"),
                                                createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                  createVNode(_component_FormKit, {
                                                    type: "number",
                                                    label: "Minimum",
                                                    validation: "required",
                                                    modelValue: range.min_age,
                                                    "onUpdate:modelValue": ($event) => range.min_age = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_FormKit, {
                                                    type: "number",
                                                    label: "Maximum",
                                                    validation: "required",
                                                    modelValue: range.max_age,
                                                    "onUpdate:modelValue": ($event) => range.max_age = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_CoreDropdown, {
                                                    modelValue: range.gender,
                                                    "onUpdate:modelValue": ($event) => range.gender = $event,
                                                    items: "sex" in _ctx ? _ctx.sex : unref(sex)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ])
                                              ]),
                                              createVNode("div", { class: "" }, [
                                                createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Measure Range"),
                                                createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                  createVNode(_component_FormKit, {
                                                    type: "number",
                                                    number: "",
                                                    step: "any",
                                                    label: "Minimum",
                                                    validation: "required|required",
                                                    modelValue: range.upper_range,
                                                    "onUpdate:modelValue": ($event) => range.upper_range = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_FormKit, {
                                                    type: "number",
                                                    number: "",
                                                    step: "any",
                                                    label: "Maximum",
                                                    validation: "required|required",
                                                    modelValue: range.lower_range,
                                                    "onUpdate:modelValue": ($event) => range.lower_range = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              createVNode(_component_FormKit, {
                                                type: "text",
                                                label: "Interpretation",
                                                validation: "required",
                                                modelValue: range.interpretation,
                                                "onUpdate:modelValue": ($event) => range.interpretation = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("button", {
                                              onClick: ($event) => $options.removeRange(index2, rangeIndex)
                                            }, [
                                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                            ], 8, ["onClick"])
                                          ])
                                        ]);
                                      }), 128)) : createCommentVNode("", true),
                                      indicator.indicator_ranges.length > 0 && $data.measureSelected.name == "Auto Complete" || $data.measureSelected.name === "Alpha Numeric" ? (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(indicator.indicator_ranges, (autoCompleteItem, k) => {
                                        return openBlock(), createBlock("div", {
                                          class: "px-3 py-3",
                                          key: autoCompleteItem.id
                                        }, [
                                          createVNode("div", { class: "w-full flex items-center justify-center space-x-2" }, [
                                            createVNode("div", { class: "w-full grid grid-cols-2 gap-4" }, [
                                              createVNode(_component_FormKit, {
                                                type: "text",
                                                label: "Value",
                                                validation: "required",
                                                modelValue: autoCompleteItem.value,
                                                "onUpdate:modelValue": ($event) => autoCompleteItem.value = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_FormKit, {
                                                type: "text",
                                                label: "Interpretation",
                                                validation: "required",
                                                modelValue: autoCompleteItem.interpretation,
                                                "onUpdate:modelValue": ($event) => autoCompleteItem.interpretation = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("button", {
                                              onClick: ($event) => $options.removeRange(index2, k),
                                              class: "h-full bg-red-500 flex items-center justify-center rounded text-white px-4 py-2 mt-2"
                                            }, [
                                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                            ], 8, ["onClick"])
                                          ])
                                        ]);
                                      }), 128)) : createCommentVNode("", true),
                                      $data.measureSelected.name === "Free Text" ? (openBlock(), createBlock("div", {
                                        key: 3,
                                        class: "flex items-center px-3 py-3 rounded bg-sky-50 mt-3 text-sky-500"
                                      }, [
                                        createVNode(_component_InformationCircleIcon, { class: "w-5 h-5 mr-2" }),
                                        createTextVNode(" A text box will appear for results entry ")
                                      ])) : createCommentVNode("", true)
                                    ]);
                                  }), 128)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                      $options.invalidateForm();
                                    },
                                    text: "Clear form"
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    type: "submit",
                                    click: () => {
                                    },
                                    loading: $data.loading,
                                    color: "success",
                                    icon: $data.saveIcon,
                                    text: "Save Changes"
                                  }, null, 8, ["loading", "icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-5xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg text-black flex items-center font-semibold leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Create Test Type ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            id: "submitForm",
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3" }, [
                                createVNode("div", { class: "grid grid-cols-2 gap-4 px-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    validation: "required",
                                    modelValue: $data.name,
                                    "onUpdate:modelValue": ($event) => $data.name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Short name",
                                    validation: "required",
                                    modelValue: $data.shortName,
                                    "onUpdate:modelValue": ($event) => $data.shortName = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex px-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Expected Turn Around Time",
                                    validation: "required|number",
                                    modelValue: $data.turnAroundTime,
                                    "onUpdate:modelValue": ($event) => $data.turnAroundTime = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "py-1 ml-2" }, [
                                    createVNode("label", { class: "font-medium text-base" }, "Duration"),
                                    createVNode(_component_CoreDropdown, {
                                      items: $data.timeTypes,
                                      modelValue: $data.timeType,
                                      "onUpdate:modelValue": ($event) => $data.timeType = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "w-full px-5 flex items-center space-x-2" }, [
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
                                withDirectives(createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                  createVNode("label", { class: "font-medium" }, "Organisms"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.organismsSelected,
                                    "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                                    options: $data.organisms,
                                    mode: "tags",
                                    required: false,
                                    clear: "",
                                    searchable: "",
                                    class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ], 512), [
                                  [vShow, $data.showCultureWorksheet]
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                  createVNode("label", { class: "font-medium" }, "Specimens"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.specimensSelected,
                                    "onUpdate:modelValue": ($event) => $data.specimensSelected = $event,
                                    options: $data.specimens,
                                    mode: "tags",
                                    required: "",
                                    searchable: "",
                                    clear: "",
                                    class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "w-full px-5 flex items-center space-x-2" }, [
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
                                createVNode("div", { class: "w-full flex items-center px-5" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Lab section"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.selectedDepartment,
                                      "onUpdate:modelValue": ($event) => $data.selectedDepartment = $event,
                                      options: $data.departments.map((department) => department.name),
                                      single: "",
                                      required: "",
                                      searchable: "",
                                      clear: "",
                                      class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex px-5" }, [
                                  createVNode(_component_CoreActionButton, {
                                    click: () => {
                                      $options.addMeasure();
                                    },
                                    color: "primary",
                                    text: "Add Measure",
                                    icon: $data.addIcon
                                  }, null, 8, ["click", "icon"])
                                ]),
                                $data.indicators.length != 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($data.indicators, (indicator, index2) => {
                                  return openBlock(), createBlock("div", {
                                    key: index2,
                                    class: "border px-5 mx-5 py-3 rounded"
                                  }, [
                                    createVNode("div", { class: "py-3 flex items-center justify-between" }, [
                                      createVNode("h3", { class: "text-lg text-grameasuresy-700 font-semibold" }, " Measures (" + toDisplayString(index2 + 1) + ") ", 1),
                                      createVNode("button", {
                                        onClick: () => {
                                          $data.indicators.splice(index2, 1);
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
                                      createVNode("div", null, [
                                        createVNode("label", { class: "font-medium pb-2" }, "Type"),
                                        createVNode("div", { hidden: "" }, toDisplayString(indicator.test_indicator_type = $data.measureSelected.id), 1),
                                        createVNode(_component_Listbox, {
                                          modelValue: $data.measureSelected,
                                          "onUpdate:modelValue": ($event) => $data.measureSelected = $event
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "relative mt-1" }, [
                                              createVNode(_component_ListboxButton, { class: "relative w-full cursor-default rounded border py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-none sm:text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "block truncate" }, toDisplayString($data.measureSelected.name), 1),
                                                  createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                                                    createVNode(_component_ChevronUpDownIcon, {
                                                      class: "h-5 w-5 text-gray-500",
                                                      "aria-hidden": "true"
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(Transition, {
                                                "leave-active-class": "transition duration-100 ease-in",
                                                "leave-from-class": "opacity-100",
                                                "leave-to-class": "opacity-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_ListboxOptions, {
                                                    style: { "z-index": "10000" },
                                                    class: "absolute mt-1 w-full max-h-96 overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm drop-shadow-md divide-y divide-slate-100"
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList($data.measureTypes, (item) => {
                                                        return openBlock(), createBlock(_component_ListboxOption, {
                                                          key: item.name,
                                                          value: item,
                                                          as: "template"
                                                        }, {
                                                          default: withCtx(({ active, selected }) => [
                                                            createVNode("li", {
                                                              class: [
                                                                active ? "bg-green-100 text-green-500" : "text-gray-900",
                                                                "relative cursor-default select-none py-2 pl-10 pr-4"
                                                              ]
                                                            }, [
                                                              createVNode("span", {
                                                                class: [
                                                                  selected ? "font-medium" : "font-normal",
                                                                  "block truncate"
                                                                ]
                                                              }, toDisplayString(item.name), 3),
                                                              selected ? (openBlock(), createBlock("span", {
                                                                key: 0,
                                                                class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                                                              }, [
                                                                createVNode(_component_CheckCircleIcon, {
                                                                  class: "h-5 w-5",
                                                                  "aria-hidden": "true"
                                                                })
                                                              ])) : createCommentVNode("", true)
                                                            ], 2)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value"]);
                                                      }), 128))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    $data.measureSelected.name !== "Free Text" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                      key: 0,
                                      type: "button",
                                      click: () => {
                                        $options.addRange(index2);
                                      },
                                      color: "primary",
                                      text: "Add New Range",
                                      icon: $data.addIcon
                                    }, null, 8, ["click", "icon"])) : createCommentVNode("", true),
                                    indicator.indicator_ranges.length > 0 && $data.measureSelected.name === "Numeric" ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(indicator.indicator_ranges, (range, rangeIndex) => {
                                      return openBlock(), createBlock("div", {
                                        class: "px-3 py-3",
                                        key: range.id
                                      }, [
                                        createVNode("div", { class: "flex items-center justify-center space-x-3" }, [
                                          createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                            createVNode("div", { class: "" }, [
                                              createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Age Range"),
                                              createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                createVNode(_component_FormKit, {
                                                  type: "number",
                                                  label: "Minimum",
                                                  validation: "required",
                                                  modelValue: range.min_age,
                                                  "onUpdate:modelValue": ($event) => range.min_age = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_FormKit, {
                                                  type: "number",
                                                  label: "Maximum",
                                                  validation: "required",
                                                  modelValue: range.max_age,
                                                  "onUpdate:modelValue": ($event) => range.max_age = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_CoreDropdown, {
                                                  modelValue: range.gender,
                                                  "onUpdate:modelValue": ($event) => range.gender = $event,
                                                  items: "sex" in _ctx ? _ctx.sex : unref(sex)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ])
                                            ]),
                                            createVNode("div", { class: "" }, [
                                              createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Measure Range"),
                                              createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                createVNode(_component_FormKit, {
                                                  type: "number",
                                                  number: "",
                                                  step: "any",
                                                  label: "Minimum",
                                                  validation: "required|required",
                                                  modelValue: range.upper_range,
                                                  "onUpdate:modelValue": ($event) => range.upper_range = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_FormKit, {
                                                  type: "number",
                                                  number: "",
                                                  step: "any",
                                                  label: "Maximum",
                                                  validation: "required|required",
                                                  modelValue: range.lower_range,
                                                  "onUpdate:modelValue": ($event) => range.lower_range = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            createVNode(_component_FormKit, {
                                              type: "text",
                                              label: "Interpretation",
                                              validation: "required",
                                              modelValue: range.interpretation,
                                              "onUpdate:modelValue": ($event) => range.interpretation = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("button", {
                                            onClick: ($event) => $options.removeRange(index2, rangeIndex)
                                          }, [
                                            createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                          ], 8, ["onClick"])
                                        ])
                                      ]);
                                    }), 128)) : createCommentVNode("", true),
                                    indicator.indicator_ranges.length > 0 && $data.measureSelected.name == "Auto Complete" || $data.measureSelected.name === "Alpha Numeric" ? (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(indicator.indicator_ranges, (autoCompleteItem, k) => {
                                      return openBlock(), createBlock("div", {
                                        class: "px-3 py-3",
                                        key: autoCompleteItem.id
                                      }, [
                                        createVNode("div", { class: "w-full flex items-center justify-center space-x-2" }, [
                                          createVNode("div", { class: "w-full grid grid-cols-2 gap-4" }, [
                                            createVNode(_component_FormKit, {
                                              type: "text",
                                              label: "Value",
                                              validation: "required",
                                              modelValue: autoCompleteItem.value,
                                              "onUpdate:modelValue": ($event) => autoCompleteItem.value = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_FormKit, {
                                              type: "text",
                                              label: "Interpretation",
                                              validation: "required",
                                              modelValue: autoCompleteItem.interpretation,
                                              "onUpdate:modelValue": ($event) => autoCompleteItem.interpretation = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("button", {
                                            onClick: ($event) => $options.removeRange(index2, k),
                                            class: "h-full bg-red-500 flex items-center justify-center rounded text-white px-4 py-2 mt-2"
                                          }, [
                                            createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                          ], 8, ["onClick"])
                                        ])
                                      ]);
                                    }), 128)) : createCommentVNode("", true),
                                    $data.measureSelected.name === "Free Text" ? (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "flex items-center px-3 py-3 rounded bg-sky-50 mt-3 text-sky-500"
                                    }, [
                                      createVNode(_component_InformationCircleIcon, { class: "w-5 h-5 mr-2" }),
                                      createTextVNode(" A text box will appear for results entry ")
                                    ])) : createCommentVNode("", true)
                                  ]);
                                }), 128)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.invalidateForm();
                                  },
                                  text: "Clear form"
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  type: "submit",
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save Changes"
                                }, null, 8, ["loading", "icon"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode(_component_TransitionChild, {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0",
                  "enter-to": "opacity-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100",
                  "leave-to": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "fixed inset-0 bg-gray-900 bg-opacity-50" })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                  createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                    createVNode(_component_TransitionChild, {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogPanel, { class: "w-full max-w-5xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg text-black flex items-center font-semibold leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Create Test Type ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              id: "submitForm",
                              type: "form",
                              "submit-label": "Update",
                              onSubmit: $options.submitForm,
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3" }, [
                                  createVNode("div", { class: "grid grid-cols-2 gap-4 px-5" }, [
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Name",
                                      validation: "required",
                                      modelValue: $data.name,
                                      "onUpdate:modelValue": ($event) => $data.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_FormKit, {
                                      type: "text",
                                      label: "Short name",
                                      validation: "required",
                                      modelValue: $data.shortName,
                                      "onUpdate:modelValue": ($event) => $data.shortName = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "w-full flex px-5" }, [
                                    createVNode(_component_FormKit, {
                                      type: "number",
                                      label: "Expected Turn Around Time",
                                      validation: "required|number",
                                      modelValue: $data.turnAroundTime,
                                      "onUpdate:modelValue": ($event) => $data.turnAroundTime = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "py-1 ml-2" }, [
                                      createVNode("label", { class: "font-medium text-base" }, "Duration"),
                                      createVNode(_component_CoreDropdown, {
                                        items: $data.timeTypes,
                                        modelValue: $data.timeType,
                                        "onUpdate:modelValue": ($event) => $data.timeType = $event
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full px-5 flex items-center space-x-2" }, [
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
                                  withDirectives(createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                    createVNode("label", { class: "font-medium" }, "Organisms"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.organismsSelected,
                                      "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                                      options: $data.organisms,
                                      mode: "tags",
                                      required: false,
                                      clear: "",
                                      searchable: "",
                                      class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ], 512), [
                                    [vShow, $data.showCultureWorksheet]
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                    createVNode("label", { class: "font-medium" }, "Specimens"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.specimensSelected,
                                      "onUpdate:modelValue": ($event) => $data.specimensSelected = $event,
                                      options: $data.specimens,
                                      mode: "tags",
                                      required: "",
                                      searchable: "",
                                      clear: "",
                                      class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ]),
                                  createVNode("div", { class: "w-full px-5 flex items-center space-x-2" }, [
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
                                  createVNode("div", { class: "w-full flex items-center px-5" }, [
                                    createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                      createVNode("label", { class: "font-medium" }, "Lab section"),
                                      createVNode(_component_multi_select, {
                                        style: { "--ms-max-height": "none !important" },
                                        modelValue: $data.selectedDepartment,
                                        "onUpdate:modelValue": ($event) => $data.selectedDepartment = $event,
                                        options: $data.departments.map((department) => department.name),
                                        single: "",
                                        required: "",
                                        searchable: "",
                                        clear: "",
                                        class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full flex px-5" }, [
                                    createVNode(_component_CoreActionButton, {
                                      click: () => {
                                        $options.addMeasure();
                                      },
                                      color: "primary",
                                      text: "Add Measure",
                                      icon: $data.addIcon
                                    }, null, 8, ["click", "icon"])
                                  ]),
                                  $data.indicators.length != 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($data.indicators, (indicator, index2) => {
                                    return openBlock(), createBlock("div", {
                                      key: index2,
                                      class: "border px-5 mx-5 py-3 rounded"
                                    }, [
                                      createVNode("div", { class: "py-3 flex items-center justify-between" }, [
                                        createVNode("h3", { class: "text-lg text-grameasuresy-700 font-semibold" }, " Measures (" + toDisplayString(index2 + 1) + ") ", 1),
                                        createVNode("button", {
                                          onClick: () => {
                                            $data.indicators.splice(index2, 1);
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
                                        createVNode("div", null, [
                                          createVNode("label", { class: "font-medium pb-2" }, "Type"),
                                          createVNode("div", { hidden: "" }, toDisplayString(indicator.test_indicator_type = $data.measureSelected.id), 1),
                                          createVNode(_component_Listbox, {
                                            modelValue: $data.measureSelected,
                                            "onUpdate:modelValue": ($event) => $data.measureSelected = $event
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "relative mt-1" }, [
                                                createVNode(_component_ListboxButton, { class: "relative w-full cursor-default rounded border py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-none sm:text-sm" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "block truncate" }, toDisplayString($data.measureSelected.name), 1),
                                                    createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                                                      createVNode(_component_ChevronUpDownIcon, {
                                                        class: "h-5 w-5 text-gray-500",
                                                        "aria-hidden": "true"
                                                      })
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(Transition, {
                                                  "leave-active-class": "transition duration-100 ease-in",
                                                  "leave-from-class": "opacity-100",
                                                  "leave-to-class": "opacity-0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_ListboxOptions, {
                                                      style: { "z-index": "10000" },
                                                      class: "absolute mt-1 w-full max-h-96 overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm drop-shadow-md divide-y divide-slate-100"
                                                    }, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList($data.measureTypes, (item) => {
                                                          return openBlock(), createBlock(_component_ListboxOption, {
                                                            key: item.name,
                                                            value: item,
                                                            as: "template"
                                                          }, {
                                                            default: withCtx(({ active, selected }) => [
                                                              createVNode("li", {
                                                                class: [
                                                                  active ? "bg-green-100 text-green-500" : "text-gray-900",
                                                                  "relative cursor-default select-none py-2 pl-10 pr-4"
                                                                ]
                                                              }, [
                                                                createVNode("span", {
                                                                  class: [
                                                                    selected ? "font-medium" : "font-normal",
                                                                    "block truncate"
                                                                  ]
                                                                }, toDisplayString(item.name), 3),
                                                                selected ? (openBlock(), createBlock("span", {
                                                                  key: 0,
                                                                  class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                                                                }, [
                                                                  createVNode(_component_CheckCircleIcon, {
                                                                    class: "h-5 w-5",
                                                                    "aria-hidden": "true"
                                                                  })
                                                                ])) : createCommentVNode("", true)
                                                              ], 2)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["value"]);
                                                        }), 128))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      $data.measureSelected.name !== "Free Text" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                        key: 0,
                                        type: "button",
                                        click: () => {
                                          $options.addRange(index2);
                                        },
                                        color: "primary",
                                        text: "Add New Range",
                                        icon: $data.addIcon
                                      }, null, 8, ["click", "icon"])) : createCommentVNode("", true),
                                      indicator.indicator_ranges.length > 0 && $data.measureSelected.name === "Numeric" ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(indicator.indicator_ranges, (range, rangeIndex) => {
                                        return openBlock(), createBlock("div", {
                                          class: "px-3 py-3",
                                          key: range.id
                                        }, [
                                          createVNode("div", { class: "flex items-center justify-center space-x-3" }, [
                                            createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                              createVNode("div", { class: "" }, [
                                                createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Age Range"),
                                                createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                  createVNode(_component_FormKit, {
                                                    type: "number",
                                                    label: "Minimum",
                                                    validation: "required",
                                                    modelValue: range.min_age,
                                                    "onUpdate:modelValue": ($event) => range.min_age = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_FormKit, {
                                                    type: "number",
                                                    label: "Maximum",
                                                    validation: "required",
                                                    modelValue: range.max_age,
                                                    "onUpdate:modelValue": ($event) => range.max_age = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_CoreDropdown, {
                                                    modelValue: range.gender,
                                                    "onUpdate:modelValue": ($event) => range.gender = $event,
                                                    items: "sex" in _ctx ? _ctx.sex : unref(sex)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ])
                                              ]),
                                              createVNode("div", { class: "" }, [
                                                createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Measure Range"),
                                                createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                  createVNode(_component_FormKit, {
                                                    type: "number",
                                                    number: "",
                                                    step: "any",
                                                    label: "Minimum",
                                                    validation: "required|required",
                                                    modelValue: range.upper_range,
                                                    "onUpdate:modelValue": ($event) => range.upper_range = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_FormKit, {
                                                    type: "number",
                                                    number: "",
                                                    step: "any",
                                                    label: "Maximum",
                                                    validation: "required|required",
                                                    modelValue: range.lower_range,
                                                    "onUpdate:modelValue": ($event) => range.lower_range = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              createVNode(_component_FormKit, {
                                                type: "text",
                                                label: "Interpretation",
                                                validation: "required",
                                                modelValue: range.interpretation,
                                                "onUpdate:modelValue": ($event) => range.interpretation = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("button", {
                                              onClick: ($event) => $options.removeRange(index2, rangeIndex)
                                            }, [
                                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                            ], 8, ["onClick"])
                                          ])
                                        ]);
                                      }), 128)) : createCommentVNode("", true),
                                      indicator.indicator_ranges.length > 0 && $data.measureSelected.name == "Auto Complete" || $data.measureSelected.name === "Alpha Numeric" ? (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(indicator.indicator_ranges, (autoCompleteItem, k) => {
                                        return openBlock(), createBlock("div", {
                                          class: "px-3 py-3",
                                          key: autoCompleteItem.id
                                        }, [
                                          createVNode("div", { class: "w-full flex items-center justify-center space-x-2" }, [
                                            createVNode("div", { class: "w-full grid grid-cols-2 gap-4" }, [
                                              createVNode(_component_FormKit, {
                                                type: "text",
                                                label: "Value",
                                                validation: "required",
                                                modelValue: autoCompleteItem.value,
                                                "onUpdate:modelValue": ($event) => autoCompleteItem.value = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_FormKit, {
                                                type: "text",
                                                label: "Interpretation",
                                                validation: "required",
                                                modelValue: autoCompleteItem.interpretation,
                                                "onUpdate:modelValue": ($event) => autoCompleteItem.interpretation = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("button", {
                                              onClick: ($event) => $options.removeRange(index2, k),
                                              class: "h-full bg-red-500 flex items-center justify-center rounded text-white px-4 py-2 mt-2"
                                            }, [
                                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                            ], 8, ["onClick"])
                                          ])
                                        ]);
                                      }), 128)) : createCommentVNode("", true),
                                      $data.measureSelected.name === "Free Text" ? (openBlock(), createBlock("div", {
                                        key: 3,
                                        class: "flex items-center px-3 py-3 rounded bg-sky-50 mt-3 text-sky-500"
                                      }, [
                                        createVNode(_component_InformationCircleIcon, { class: "w-5 h-5 mr-2" }),
                                        createTextVNode(" A text box will appear for results entry ")
                                      ])) : createCommentVNode("", true)
                                    ]);
                                  }), 128)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreOutlinedButton, {
                                    type: "button",
                                    click: () => {
                                      $options.invalidateForm();
                                    },
                                    text: "Clear form"
                                  }, null, 8, ["click"]),
                                  createVNode(_component_CoreActionButton, {
                                    type: "submit",
                                    click: () => {
                                    },
                                    loading: $data.loading,
                                    color: "success",
                                    icon: $data.saveIcon,
                                    text: "Save Changes"
                                  }, null, 8, ["loading", "icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Dialog, {
            as: "div",
            onClose: $options.handleClick,
            class: "relative z-10"
          }, {
            default: withCtx(() => [
              createVNode(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "fixed inset-0 bg-gray-900 bg-opacity-50" })
                ]),
                _: 1
              }),
              createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                  createVNode(_component_TransitionChild, {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-5xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg text-black flex items-center font-semibold leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" Create Test Type ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            id: "submitForm",
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: $options.submitForm,
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3" }, [
                                createVNode("div", { class: "grid grid-cols-2 gap-4 px-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Name",
                                    validation: "required",
                                    modelValue: $data.name,
                                    "onUpdate:modelValue": ($event) => $data.name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_FormKit, {
                                    type: "text",
                                    label: "Short name",
                                    validation: "required",
                                    modelValue: $data.shortName,
                                    "onUpdate:modelValue": ($event) => $data.shortName = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "w-full flex px-5" }, [
                                  createVNode(_component_FormKit, {
                                    type: "number",
                                    label: "Expected Turn Around Time",
                                    validation: "required|number",
                                    modelValue: $data.turnAroundTime,
                                    "onUpdate:modelValue": ($event) => $data.turnAroundTime = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "py-1 ml-2" }, [
                                    createVNode("label", { class: "font-medium text-base" }, "Duration"),
                                    createVNode(_component_CoreDropdown, {
                                      items: $data.timeTypes,
                                      modelValue: $data.timeType,
                                      "onUpdate:modelValue": ($event) => $data.timeType = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "w-full px-5 flex items-center space-x-2" }, [
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
                                withDirectives(createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                  createVNode("label", { class: "font-medium" }, "Organisms"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.organismsSelected,
                                    "onUpdate:modelValue": ($event) => $data.organismsSelected = $event,
                                    options: $data.organisms,
                                    mode: "tags",
                                    required: false,
                                    clear: "",
                                    searchable: "",
                                    class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ], 512), [
                                  [vShow, $data.showCultureWorksheet]
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-2 px-5" }, [
                                  createVNode("label", { class: "font-medium" }, "Specimens"),
                                  createVNode(_component_multi_select, {
                                    style: { "--ms-max-height": "none !important" },
                                    modelValue: $data.specimensSelected,
                                    "onUpdate:modelValue": ($event) => $data.specimensSelected = $event,
                                    options: $data.specimens,
                                    mode: "tags",
                                    required: "",
                                    searchable: "",
                                    clear: "",
                                    class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "w-full px-5 flex items-center space-x-2" }, [
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
                                createVNode("div", { class: "w-full flex items-center px-5" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-2" }, [
                                    createVNode("label", { class: "font-medium" }, "Lab section"),
                                    createVNode(_component_multi_select, {
                                      style: { "--ms-max-height": "none !important" },
                                      modelValue: $data.selectedDepartment,
                                      "onUpdate:modelValue": ($event) => $data.selectedDepartment = $event,
                                      options: $data.departments.map((department) => department.name),
                                      single: "",
                                      required: "",
                                      searchable: "",
                                      clear: "",
                                      class: "focus:ring-none focus:border-none focus:outline-none multiselect-green"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex px-5" }, [
                                  createVNode(_component_CoreActionButton, {
                                    click: () => {
                                      $options.addMeasure();
                                    },
                                    color: "primary",
                                    text: "Add Measure",
                                    icon: $data.addIcon
                                  }, null, 8, ["click", "icon"])
                                ]),
                                $data.indicators.length != 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($data.indicators, (indicator, index2) => {
                                  return openBlock(), createBlock("div", {
                                    key: index2,
                                    class: "border px-5 mx-5 py-3 rounded"
                                  }, [
                                    createVNode("div", { class: "py-3 flex items-center justify-between" }, [
                                      createVNode("h3", { class: "text-lg text-grameasuresy-700 font-semibold" }, " Measures (" + toDisplayString(index2 + 1) + ") ", 1),
                                      createVNode("button", {
                                        onClick: () => {
                                          $data.indicators.splice(index2, 1);
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
                                      createVNode("div", null, [
                                        createVNode("label", { class: "font-medium pb-2" }, "Type"),
                                        createVNode("div", { hidden: "" }, toDisplayString(indicator.test_indicator_type = $data.measureSelected.id), 1),
                                        createVNode(_component_Listbox, {
                                          modelValue: $data.measureSelected,
                                          "onUpdate:modelValue": ($event) => $data.measureSelected = $event
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "relative mt-1" }, [
                                              createVNode(_component_ListboxButton, { class: "relative w-full cursor-default rounded border py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-none sm:text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "block truncate" }, toDisplayString($data.measureSelected.name), 1),
                                                  createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                                                    createVNode(_component_ChevronUpDownIcon, {
                                                      class: "h-5 w-5 text-gray-500",
                                                      "aria-hidden": "true"
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(Transition, {
                                                "leave-active-class": "transition duration-100 ease-in",
                                                "leave-from-class": "opacity-100",
                                                "leave-to-class": "opacity-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_ListboxOptions, {
                                                    style: { "z-index": "10000" },
                                                    class: "absolute mt-1 w-full max-h-96 overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm drop-shadow-md divide-y divide-slate-100"
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList($data.measureTypes, (item) => {
                                                        return openBlock(), createBlock(_component_ListboxOption, {
                                                          key: item.name,
                                                          value: item,
                                                          as: "template"
                                                        }, {
                                                          default: withCtx(({ active, selected }) => [
                                                            createVNode("li", {
                                                              class: [
                                                                active ? "bg-green-100 text-green-500" : "text-gray-900",
                                                                "relative cursor-default select-none py-2 pl-10 pr-4"
                                                              ]
                                                            }, [
                                                              createVNode("span", {
                                                                class: [
                                                                  selected ? "font-medium" : "font-normal",
                                                                  "block truncate"
                                                                ]
                                                              }, toDisplayString(item.name), 3),
                                                              selected ? (openBlock(), createBlock("span", {
                                                                key: 0,
                                                                class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                                                              }, [
                                                                createVNode(_component_CheckCircleIcon, {
                                                                  class: "h-5 w-5",
                                                                  "aria-hidden": "true"
                                                                })
                                                              ])) : createCommentVNode("", true)
                                                            ], 2)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value"]);
                                                      }), 128))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    $data.measureSelected.name !== "Free Text" ? (openBlock(), createBlock(_component_CoreActionButton, {
                                      key: 0,
                                      type: "button",
                                      click: () => {
                                        $options.addRange(index2);
                                      },
                                      color: "primary",
                                      text: "Add New Range",
                                      icon: $data.addIcon
                                    }, null, 8, ["click", "icon"])) : createCommentVNode("", true),
                                    indicator.indicator_ranges.length > 0 && $data.measureSelected.name === "Numeric" ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(indicator.indicator_ranges, (range, rangeIndex) => {
                                      return openBlock(), createBlock("div", {
                                        class: "px-3 py-3",
                                        key: range.id
                                      }, [
                                        createVNode("div", { class: "flex items-center justify-center space-x-3" }, [
                                          createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                            createVNode("div", { class: "" }, [
                                              createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Age Range"),
                                              createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                createVNode(_component_FormKit, {
                                                  type: "number",
                                                  label: "Minimum",
                                                  validation: "required",
                                                  modelValue: range.min_age,
                                                  "onUpdate:modelValue": ($event) => range.min_age = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_FormKit, {
                                                  type: "number",
                                                  label: "Maximum",
                                                  validation: "required",
                                                  modelValue: range.max_age,
                                                  "onUpdate:modelValue": ($event) => range.max_age = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_CoreDropdown, {
                                                  modelValue: range.gender,
                                                  "onUpdate:modelValue": ($event) => range.gender = $event,
                                                  items: "sex" in _ctx ? _ctx.sex : unref(sex)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ])
                                            ]),
                                            createVNode("div", { class: "" }, [
                                              createVNode("label", { class: "mb-2 text-lg font-semibold text-gray-600" }, "Measure Range"),
                                              createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                                createVNode(_component_FormKit, {
                                                  type: "number",
                                                  number: "",
                                                  step: "any",
                                                  label: "Minimum",
                                                  validation: "required|required",
                                                  modelValue: range.upper_range,
                                                  "onUpdate:modelValue": ($event) => range.upper_range = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_FormKit, {
                                                  type: "number",
                                                  number: "",
                                                  step: "any",
                                                  label: "Maximum",
                                                  validation: "required|required",
                                                  modelValue: range.lower_range,
                                                  "onUpdate:modelValue": ($event) => range.lower_range = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            createVNode(_component_FormKit, {
                                              type: "text",
                                              label: "Interpretation",
                                              validation: "required",
                                              modelValue: range.interpretation,
                                              "onUpdate:modelValue": ($event) => range.interpretation = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("button", {
                                            onClick: ($event) => $options.removeRange(index2, rangeIndex)
                                          }, [
                                            createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                          ], 8, ["onClick"])
                                        ])
                                      ]);
                                    }), 128)) : createCommentVNode("", true),
                                    indicator.indicator_ranges.length > 0 && $data.measureSelected.name == "Auto Complete" || $data.measureSelected.name === "Alpha Numeric" ? (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(indicator.indicator_ranges, (autoCompleteItem, k) => {
                                      return openBlock(), createBlock("div", {
                                        class: "px-3 py-3",
                                        key: autoCompleteItem.id
                                      }, [
                                        createVNode("div", { class: "w-full flex items-center justify-center space-x-2" }, [
                                          createVNode("div", { class: "w-full grid grid-cols-2 gap-4" }, [
                                            createVNode(_component_FormKit, {
                                              type: "text",
                                              label: "Value",
                                              validation: "required",
                                              modelValue: autoCompleteItem.value,
                                              "onUpdate:modelValue": ($event) => autoCompleteItem.value = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_FormKit, {
                                              type: "text",
                                              label: "Interpretation",
                                              validation: "required",
                                              modelValue: autoCompleteItem.interpretation,
                                              "onUpdate:modelValue": ($event) => autoCompleteItem.interpretation = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("button", {
                                            onClick: ($event) => $options.removeRange(index2, k),
                                            class: "h-full bg-red-500 flex items-center justify-center rounded text-white px-4 py-2 mt-2"
                                          }, [
                                            createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                          ], 8, ["onClick"])
                                        ])
                                      ]);
                                    }), 128)) : createCommentVNode("", true),
                                    $data.measureSelected.name === "Free Text" ? (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "flex items-center px-3 py-3 rounded bg-sky-50 mt-3 text-sky-500"
                                    }, [
                                      createVNode(_component_InformationCircleIcon, { class: "w-5 h-5 mr-2" }),
                                      createTextVNode(" A text box will appear for results entry ")
                                    ])) : createCommentVNode("", true)
                                  ]);
                                }), 128)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreOutlinedButton, {
                                  type: "button",
                                  click: () => {
                                    $options.invalidateForm();
                                  },
                                  text: "Clear form"
                                }, null, 8, ["click"]),
                                createVNode(_component_CoreActionButton, {
                                  type: "submit",
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  color: "success",
                                  icon: $data.saveIcon,
                                  text: "Save Changes"
                                }, null, 8, ["loading", "icon"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }, 8, ["onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-types/add-dialog/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$2
  },
  data() {
    return {
      viewIcon: render$1$1,
      show: false,
      moment,
      loading: false,
      details: { name: "", short_name: "", department_id: { id: 0, name: "" }, specimens: { id: 0, name: "", expected_turn_around_time: "", created_date: "" } }
    };
  },
  setup() {
    const cookie = useCookie("token");
    return { cookie };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    /**
     * @method init loads test type details by id
     * @params null
     * @return promise @typeof void
     */
    async init() {
      this.handleClick();
      this.loading = true;
      const request = {
        route: `${endpoints.viewTestType}/${this.data.id}`,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.details = data.value;
        this.loading = false;
      }
      if (error.value) {
        this.loading = false;
        useNuxtApp().$toast.error(`An error occurred, please try again!`);
      }
    },
    handleClick() {
      this.show = !this.show;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_CoreLoader = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.init,
    color: "primary",
    text: "View",
    icon: $data.viewIcon
  }, null, _parent));
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: $data.show,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          class: "relative z-10"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="fixed inset-0 bg-black bg-opacity-50"${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        var _a, _b, _c, _d;
                        if (_push5) {
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg flex items-center font-semibold leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> Test Type Details `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Test Type Details ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}" class="flex items-center justify-center mx-auto my-20"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreLoader, { loading: $data.loading }, null, _parent5, _scopeId4));
                          _push5(`</div><div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}" class="space-y-3 px-5 py-5"${_scopeId4}><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Name</label><p${_scopeId4}>${ssrInterpolate($data.details.name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Short Name</label><p${_scopeId4}>${ssrInterpolate($data.details.short_name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Laboratory Section</label><p${_scopeId4}>${ssrInterpolate($data.details.department_id.name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Compatible Specimen</label><div class="flex flex-wrap gap-2"${_scopeId4}><!--[-->`);
                          ssrRenderList($data.details.specimens, (i) => {
                            _push5(`<p${_scopeId4}>${ssrInterpolate(`${i.name}`)}</p>`);
                          });
                          _push5(`<!--]--></div></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Organisms</label><div class="flex flex-wrap gap-2"${_scopeId4}><!--[-->`);
                          ssrRenderList($data.details.organisms, (i, index2) => {
                            _push5(`<p${_scopeId4}>${ssrInterpolate(`${i.name}`)}`);
                            if (index2 !== $data.details.organisms.length - 1) {
                              _push5(`<span${_scopeId4}>,</span>`);
                            } else {
                              _push5(`<!---->`);
                            }
                            _push5(`</p>`);
                          });
                          _push5(`<!--]--></div></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Measure</label><!--[-->`);
                          ssrRenderList($data.details.indicators, (i) => {
                            _push5(`<p${_scopeId4}>${ssrInterpolate(`${i.name}`)}</p>`);
                          });
                          _push5(`<!--]--></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Expected Turn Around Time</label><p${_scopeId4}>${ssrInterpolate(`${(_a = $data.details.expected_turn_around_time) == null ? void 0 : _a.value} ${(_b = $data.details.expected_turn_around_time) == null ? void 0 : _b.unit}`)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>Date Created</label><p${_scopeId4}>${ssrInterpolate($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-semibold leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Test Type Details ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", {
                                onClick: () => {
                                  $options.handleClick();
                                }
                              }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                              createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                            ], 512), [
                              [vShow, $data.loading]
                            ]),
                            withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", null, toDisplayString($data.details.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Short Name"),
                                createVNode("p", null, toDisplayString($data.details.short_name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Laboratory Section"),
                                createVNode("p", null, toDisplayString($data.details.department_id.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Compatible Specimen"),
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.details.specimens, (i) => {
                                    return openBlock(), createBlock("p", { key: i }, toDisplayString(`${i.name}`), 1);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Organisms"),
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.details.organisms, (i, index2) => {
                                    return openBlock(), createBlock("p", { key: i }, [
                                      createTextVNode(toDisplayString(`${i.name}`), 1),
                                      index2 !== $data.details.organisms.length - 1 ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Measure"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.indicators, (i) => {
                                  return openBlock(), createBlock("p", { key: i }, toDisplayString(`${i.name}`), 1);
                                }), 128))
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Expected Turn Around Time"),
                                createVNode("p", null, toDisplayString(`${(_c = $data.details.expected_turn_around_time) == null ? void 0 : _c.value} ${(_d = $data.details.expected_turn_around_time) == null ? void 0 : _d.unit}`), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Date Created"),
                                createVNode("p", null, toDisplayString($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                              ])
                            ], 512), [
                              [vShow, !$data.loading]
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-semibold leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Test Type Details ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", {
                                onClick: () => {
                                  $options.handleClick();
                                }
                              }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                              createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                            ], 512), [
                              [vShow, $data.loading]
                            ]),
                            withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", null, toDisplayString($data.details.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Short Name"),
                                createVNode("p", null, toDisplayString($data.details.short_name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Laboratory Section"),
                                createVNode("p", null, toDisplayString($data.details.department_id.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Compatible Specimen"),
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.details.specimens, (i) => {
                                    return openBlock(), createBlock("p", { key: i }, toDisplayString(`${i.name}`), 1);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Organisms"),
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.details.organisms, (i, index2) => {
                                    return openBlock(), createBlock("p", { key: i }, [
                                      createTextVNode(toDisplayString(`${i.name}`), 1),
                                      index2 !== $data.details.organisms.length - 1 ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Measure"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.indicators, (i) => {
                                  return openBlock(), createBlock("p", { key: i }, toDisplayString(`${i.name}`), 1);
                                }), 128))
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Expected Turn Around Time"),
                                createVNode("p", null, toDisplayString(`${(_a = $data.details.expected_turn_around_time) == null ? void 0 : _a.value} ${(_b = $data.details.expected_turn_around_time) == null ? void 0 : _b.unit}`), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Date Created"),
                                createVNode("p", null, toDisplayString($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                              ])
                            ], 512), [
                              [vShow, !$data.loading]
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode(_component_TransitionChild, {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0",
                  "enter-to": "opacity-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100",
                  "leave-to": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50" })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                  createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                    createVNode(_component_TransitionChild, {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => {
                            var _a, _b;
                            return [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(_component_DialogTitle, {
                                  as: "h3",
                                  class: "text-lg flex items-center font-semibold leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" Test Type Details ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", {
                                  onClick: () => {
                                    $options.handleClick();
                                  }
                                }, [
                                  createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                                ], 8, ["onClick"])
                              ]),
                              withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                                createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                              ], 512), [
                                [vShow, $data.loading]
                              ]),
                              withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                  createVNode("p", null, toDisplayString($data.details.name), 1)
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, "Short Name"),
                                  createVNode("p", null, toDisplayString($data.details.short_name), 1)
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, "Laboratory Section"),
                                  createVNode("p", null, toDisplayString($data.details.department_id.name), 1)
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, "Compatible Specimen"),
                                  createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList($data.details.specimens, (i) => {
                                      return openBlock(), createBlock("p", { key: i }, toDisplayString(`${i.name}`), 1);
                                    }), 128))
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, "Organisms"),
                                  createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList($data.details.organisms, (i, index2) => {
                                      return openBlock(), createBlock("p", { key: i }, [
                                        createTextVNode(toDisplayString(`${i.name}`), 1),
                                        index2 !== $data.details.organisms.length - 1 ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, "Measure"),
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.details.indicators, (i) => {
                                    return openBlock(), createBlock("p", { key: i }, toDisplayString(`${i.name}`), 1);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, "Expected Turn Around Time"),
                                  createVNode("p", null, toDisplayString(`${(_a = $data.details.expected_turn_around_time) == null ? void 0 : _a.value} ${(_b = $data.details.expected_turn_around_time) == null ? void 0 : _b.unit}`), 1)
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, "Date Created"),
                                  createVNode("p", null, toDisplayString($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                ])
                              ], 512), [
                                [vShow, !$data.loading]
                              ])
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Dialog, {
            as: "div",
            class: "relative z-10"
          }, {
            default: withCtx(() => [
              createVNode(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50" })
                ]),
                _: 1
              }),
              createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                  createVNode(_component_TransitionChild, {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-semibold leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" Test Type Details ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", {
                                onClick: () => {
                                  $options.handleClick();
                                }
                              }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            withDirectives(createVNode("div", { class: "flex items-center justify-center mx-auto my-20" }, [
                              createVNode(_component_CoreLoader, { loading: $data.loading }, null, 8, ["loading"])
                            ], 512), [
                              [vShow, $data.loading]
                            ]),
                            withDirectives(createVNode("div", { class: "space-y-3 px-5 py-5" }, [
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Name"),
                                createVNode("p", null, toDisplayString($data.details.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Short Name"),
                                createVNode("p", null, toDisplayString($data.details.short_name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Laboratory Section"),
                                createVNode("p", null, toDisplayString($data.details.department_id.name), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Compatible Specimen"),
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.details.specimens, (i) => {
                                    return openBlock(), createBlock("p", { key: i }, toDisplayString(`${i.name}`), 1);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Organisms"),
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.details.organisms, (i, index2) => {
                                    return openBlock(), createBlock("p", { key: i }, [
                                      createTextVNode(toDisplayString(`${i.name}`), 1),
                                      index2 !== $data.details.organisms.length - 1 ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Measure"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.details.indicators, (i) => {
                                  return openBlock(), createBlock("p", { key: i }, toDisplayString(`${i.name}`), 1);
                                }), 128))
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Expected Turn Around Time"),
                                createVNode("p", null, toDisplayString(`${(_a = $data.details.expected_turn_around_time) == null ? void 0 : _a.value} ${(_b = $data.details.expected_turn_around_time) == null ? void 0 : _b.unit}`), 1)
                              ]),
                              createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                createVNode("label", { class: "font-semibold text-lg" }, "Date Created"),
                                createVNode("p", null, toDisplayString($data.moment($data.details.created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                              ])
                            ], 512), [
                              [vShow, !$data.loading]
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-types/view-dialog/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$2,
    ExclamationTriangleIcon: render$4$1
  },
  data() {
    return {
      show: false,
      deleteIcon: render$a,
      loading: false,
      cookie: useCookie("token"),
      reason: ""
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    /**
     * @method deleteData deletes test type
     * @param id test type id
     * @return promise @typeof void
     */
    async deleteData(id) {
      this.loading = true;
      const request = {
        route: `${endpoints.testTypes}/${id}`,
        method: "DELETE",
        token: `${this.cookie}`,
        body: {
          "retired_reason": this.reason
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.handleClick();
        useNuxtApp().$toast.success(`${this.data.name} test type deleted successfully!`);
        this.loading = false;
        this.$emit("update", true);
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    },
    /**
     * @method handleClick handles dialog visibilitity
     * @returns @type void
     */
    handleClick() {
      this.show = !this.show;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_ExclamationTriangleIcon = resolveComponent("ExclamationTriangleIcon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.handleClick,
    color: "error",
    text: "Delete",
    icon: $data.deleteIcon
  }, null, _parent));
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: $data.show,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          class: "relative z-10"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="fixed inset-0 bg-black bg-opacity-25"${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }, null, _parent6, _scopeId5));
                                _push6(` Confirm delete `);
                              } else {
                                return [
                                  createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Confirm delete ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div>`);
                          _push5(ssrRenderComponent(_component_FormKit, {
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: ($event) => $options.deleteData($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mt-2 space-y-3 px-5"${_scopeId5}><div class="rounded px-2 py-2"${_scopeId5}> Do you really want to delete <span class="font-semibold text-red-500"${_scopeId5}>${ssrInterpolate($props.data.name)}</span>? Note that once this action is completed, it can not be undone </div>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  type: "textarea",
                                  label: "Reason",
                                  validation: "required",
                                  modelValue: $data.reason,
                                  "onUpdate:modelValue": ($event) => $data.reason = $event
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.deleteIcon,
                                  text: "Delete"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                    createVNode("div", { class: "rounded px-2 py-2" }, [
                                      createTextVNode(" Do you really want to delete "),
                                      createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.name), 1),
                                      createTextVNode("? Note that once this action is completed, it can not be undone ")
                                    ]),
                                    createVNode(_component_FormKit, {
                                      type: "textarea",
                                      label: "Reason",
                                      validation: "required",
                                      modelValue: $data.reason,
                                      "onUpdate:modelValue": ($event) => $data.reason = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    createVNode(_component_CoreActionButton, {
                                      loading: $data.loading,
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "error",
                                      icon: $data.deleteIcon,
                                      text: "Delete"
                                    }, null, 8, ["loading", "icon"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Confirm delete ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              "submit-label": "Update",
                              onSubmit: ($event) => $options.deleteData($props.data.id),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Do you really want to delete "),
                                    createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.name), 1),
                                    createTextVNode("? Note that once this action is completed, it can not be undone ")
                                  ]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Reason",
                                    validation: "required",
                                    modelValue: $data.reason,
                                    "onUpdate:modelValue": ($event) => $data.reason = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "error",
                                    icon: $data.deleteIcon,
                                    text: "Delete"
                                  }, null, 8, ["loading", "icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                createTextVNode(" Confirm delete ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: ($event) => $options.deleteData($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Do you really want to delete "),
                                  createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.name), 1),
                                  createTextVNode("? Note that once this action is completed, it can not be undone ")
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "textarea",
                                  label: "Reason",
                                  validation: "required",
                                  modelValue: $data.reason,
                                  "onUpdate:modelValue": ($event) => $data.reason = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.deleteIcon,
                                  text: "Delete"
                                }, null, 8, ["loading", "icon"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode(_component_TransitionChild, {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0",
                  "enter-to": "opacity-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100",
                  "leave-to": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                  createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                    createVNode(_component_TransitionChild, {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Confirm delete ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              "submit-label": "Update",
                              onSubmit: ($event) => $options.deleteData($props.data.id),
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                  createVNode("div", { class: "rounded px-2 py-2" }, [
                                    createTextVNode(" Do you really want to delete "),
                                    createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.name), 1),
                                    createTextVNode("? Note that once this action is completed, it can not be undone ")
                                  ]),
                                  createVNode(_component_FormKit, {
                                    type: "textarea",
                                    label: "Reason",
                                    validation: "required",
                                    modelValue: $data.reason,
                                    "onUpdate:modelValue": ($event) => $data.reason = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  createVNode(_component_CoreActionButton, {
                                    loading: $data.loading,
                                    type: "submit",
                                    click: () => {
                                    },
                                    color: "error",
                                    icon: $data.deleteIcon,
                                    text: "Delete"
                                  }, null, 8, ["loading", "icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Dialog, {
            as: "div",
            class: "relative z-10"
          }, {
            default: withCtx(() => [
              createVNode(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                ]),
                _: 1
              }),
              createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                  createVNode(_component_TransitionChild, {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ExclamationTriangleIcon, { class: "h-5 w-5 mr-2" }),
                                createTextVNode(" Confirm delete ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: ($event) => $options.deleteData($props.data.id),
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "mt-2 space-y-3 px-5" }, [
                                createVNode("div", { class: "rounded px-2 py-2" }, [
                                  createTextVNode(" Do you really want to delete "),
                                  createVNode("span", { class: "font-semibold text-red-500" }, toDisplayString($props.data.name), 1),
                                  createTextVNode("? Note that once this action is completed, it can not be undone ")
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "textarea",
                                  label: "Reason",
                                  validation: "required",
                                  modelValue: $data.reason,
                                  "onUpdate:modelValue": ($event) => $data.reason = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                createVNode(_component_CoreActionButton, {
                                  loading: $data.loading,
                                  type: "submit",
                                  click: () => {
                                  },
                                  color: "error",
                                  icon: $data.deleteIcon,
                                  text: "Delete"
                                }, null, 8, ["loading", "icon"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-types/delete-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    MagnifyingGlassIcon: render
  },
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Test Types`
    });
  },
  data() {
    return {
      header: "List Of Test Types",
      loading: true,
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Test Catalog",
          link: "#"
        }
      ],
      editIcon: render$1,
      showEdit: false,
      serverItemsLength: 0,
      serverOptions: {
        page: 1,
        rowsPerPage: 25,
        sortBy: "name"
      },
      search: "",
      testTypes: new Array(),
      cookie: useCookie("token"),
      headers: [
        { text: "name", value: "name", sortable: true },
        { text: "short name", value: "short_name" },
        { text: "expected turn around time", value: "expected_turn_around_time" },
        { text: "actions", value: "actions" }
      ],
      searchField: "name",
      searchValue: ""
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const { page, rowsPerPage } = this.serverOptions;
      this.loading = true;
      const request = {
        route: `${endpoints.testTypes}?page=${page}&per_page=${rowsPerPage}&search=${this.search}`,
        method: "GET",
        token: `${this.cookie}`,
        body: {}
      };
      let { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        this.testTypes = data.value.test_types.map((testType) => {
          var _a, _b;
          return {
            ...testType,
            expected_turn_around_time: `${testType.expected_turn_around_time !== null ? ((_a = testType.expected_turn_around_time) == null ? void 0 : _a.value) + " " + (testType.expected_turn_around_time.unit == null ? "" : (_b = testType.expected_turn_around_time.unit) == null ? void 0 : _b.toLowerCase()) : ""}`
          };
        });
        this.serverItemsLength = data.value.meta.total_count;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    updateTestTypes(value) {
      if (typeof value === "object") {
        this.serverOptions = value;
      }
      this.init();
    },
    updateSearch(value) {
      this.searchValue = value;
      this.search = value;
      this.updateTestTypes(true);
    },
    edit(value) {
      this.showEdit = true;
    },
    navigateToEdit(item) {
      const slug = item.name.trim().toLowerCase().replace(/[\s\W-]+/g, "-").replace(/^-+|-+$/g, "");
      this.$router.push(`/test-catalog/test-types/edit/${slug}?testType=${item.id}`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$4;
  const _component_TestTypesAddDialog = __nuxt_component_1;
  const _component_CoreSearchBar = __nuxt_component_1$1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_TestTypesViewDialog = __nuxt_component_4;
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TestTypesDeleteDialog = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3><div class="flex items-center space-x-3">`);
  _push(ssrRenderComponent(_component_TestTypesAddDialog, { onUpdate: $options.updateTestTypes }, null, _parent));
  _push(`</div></div><div class="flex justify-end w-full px-2 py-2 mb-2">`);
  _push(ssrRenderComponent(_component_CoreSearchBar, {
    search: $data.search,
    onUpdate: $options.updateSearch
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $data.headers,
    data: $data.testTypes,
    loading: $data.loading,
    searchField: $data.searchField,
    searchValue: $data.searchValue,
    serverItemsLength: $data.serverItemsLength,
    serverOptions: $data.serverOptions,
    onUpdate: $options.updateTestTypes
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TestTypesViewDialog, {
          onEdit: $options.edit,
          open: $data.showEdit,
          data: item
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          click: () => {
            $options.navigateToEdit(item);
          },
          color: "success",
          text: "Edit",
          icon: $data.editIcon
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_TestTypesDeleteDialog, {
          onUpdate: $options.updateTestTypes,
          data: item
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_TestTypesViewDialog, {
              onEdit: $options.edit,
              open: $data.showEdit,
              data: item
            }, null, 8, ["onEdit", "open", "data"]),
            createVNode(_component_CoreActionButton, {
              click: () => {
                $options.navigateToEdit(item);
              },
              color: "success",
              text: "Edit",
              icon: $data.editIcon
            }, null, 8, ["click", "icon"]),
            createVNode(_component_TestTypesDeleteDialog, {
              onUpdate: $options.updateTestTypes,
              data: item
            }, null, 8, ["onUpdate", "data"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-catalog/test-types/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-f6df6e35.mjs.map
