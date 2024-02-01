import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$1 } from './Breadcrumb-fc731a79.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { resolveComponent, withCtx, createVNode, toDisplayString, withDirectives, vModelCheckbox, openBlock, createBlock, vModelText, createCommentVNode, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { u as useHead } from './index-2cdcde44.mjs';
import { u as useAuthStore, o as useAlert, d as calculateAge, e as endpoints, f as fetchRequest, p as isEmpty, P as PrinterService, A as Api } from './fetch-5298dfa4.mjs';
import { e as errorMessage } from './constants-9b77e6ea.mjs';
import { Listbox, ListboxButton, ListboxLabel, ListboxOptions, ListboxOption } from '@headlessui/vue';
import moment from 'moment';
import { P as Package } from './package-6f8153c4.mjs';
import { r as render } from './IdentificationIcon-39b8324b.mjs';
import { r as render$1 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import './nuxt-link-42c558b2.mjs';
import './HomeIcon-299b993b.mjs';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
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
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class OrderService {
  constructor(patientId) {
    __publicField(this, "client", { id: "", uuid: "" });
    __publicField(this, "tests", []);
    __publicField(this, "order", {
      priority: 1,
      requested_by: "",
      collected_by: useAuthStore().$state.department,
      sample_collected_time: "",
      tracking_number: ""
    });
    __publicField(this, "encounter", {
      sending_facility: 1,
      encounter_type: 1,
      facility_section: 1
    });
    this.client.id = patientId;
  }
  createEncounter(encounter_type, facility_section) {
    this.encounter = { ...this.encounter, encounter_type, facility_section };
  }
  buildOrder(requester = "", date = moment().format("YYYY-MM-DD HH:mm:ss")) {
    this.order.requested_by = requester;
    this.order.sample_collected_time = date;
  }
  setTests(specimen, tests) {
    this.tests = tests.map((test) => ({ specimen, test_type: test }));
  }
  async createOrder() {
    return Api.postJson("orders", {
      tests: this.tests,
      order: this.order,
      encounter: this.encounter,
      client: this.client
    });
  }
}
const _sfc_main = {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOptions,
    ListboxOption,
    IdentificationIcon: render
  },
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - New Test`
    });
  },
  data() {
    return {
      ArrowDownTrayIcon: render$1,
      pages: [
        { name: "Home", link: "/home" },
        { name: "Tests", link: "/tests" }
      ],
      patient: {
        date_of_birth: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        client_id: 0,
        id: 0,
        sex: "",
        birth_date_estimated: false
      },
      visitTypes: new Array(),
      specimens: new Array(),
      wards: new Array(),
      tests: new Array(),
      visitTypeSelected: { name: "select visit type", id: 0 },
      specimenSelected: { name: "select specimen", id: 0 },
      wardSelected: { name: "select ward", id: 0 },
      testsSelected: new Array(),
      physician: "",
      sampleCollectionDate: "",
      requestingTitle: "Requesting Ward",
      isBDE: false,
      authStore: useAuthStore(),
      alert: useAlert(),
      route: useRoute(),
      token: useCookie("token")
    };
  },
  computed: {
    patientAge() {
      return calculateAge(this.patient.date_of_birth);
    },
    patientSex() {
      return this.patient.sex.match(/f/i) ? "Female" : "Male";
    },
    patientName() {
      return `${this.patient.first_name} ${this.patient.middle_name} ${this.patient.last_name}`;
    },
    patientNumber() {
      return this.patient.client_id;
    },
    currentDepartment() {
      return this.authStore.user.departments.find(
        (item) => item.name === this.authStore.department
      );
    }
  },
  methods: {
    getPatient(client_id) {
      const request = {
        route: `${endpoints.clients}/${client_id}`,
        method: "GET",
        token: `${this.token}`
      };
      fetchRequest(request).then(({ data, error, pending }) => {
        if (data.value) {
          this.patient = data.value;
        }
        if (error.value) {
          console.error(errorMessage);
        }
      });
    },
    async saveChanges() {
      const orderService = new OrderService(this.patient.client_id);
      orderService.createEncounter(
        this.visitTypeSelected.id,
        this.wardSelected.id
      );
      orderService.buildOrder(this.physician, this.sampleCollectionDate);
      orderService.setTests(this.specimenSelected.id, this.testsSelected);
      const order = await orderService.createOrder();
      if (!isEmpty(order)) {
        useNuxtApp().$toast.success(
          `Order with accession number ${order.accession_number} has been created successfully!`
        );
        if (await this.alert.alertConfirmation({
          message: "Do you want to print specimen label?"
        })) {
          await PrinterService.printSpecimenLabel(order.accession_number);
        }
      }
      useNuxtApp().$router.push("/tests");
    },
    validator() {
      if (this.visitTypeSelected.id == 0) {
        useNuxtApp().$toast.warning("Please select visit type and try again!");
        return false;
      }
      if (this.specimenSelected.id == 0) {
        useNuxtApp().$toast.warning("Please select specimen and try again!");
        return false;
      }
      if (this.wardSelected.id == 0) {
        useNuxtApp().$toast.warning("Please select ward and try again!");
        return false;
      }
      if (this.testsSelected.length == 0) {
        useNuxtApp().$toast.warning("Please select tests and try again!");
        return false;
      }
      return true;
    }
  },
  watch: {
    async visitTypeSelected(visitType) {
      if (visitType.name.toLowerCase() == "referral") {
        this.requestingTitle = "Requesting Facility";
        this.wardSelected = { name: "select facility", id: 0 };
      } else {
        this.requestingTitle = "Requesting Ward";
      }
      this.wards = new Array();
      if (isEmpty(this.wards[visitType.id])) {
        this.wards = await Api.getJson(
          "encounter_type_facility_section_mappings/facility_sections",
          {
            encounter_type_id: visitType.id
          }
        );
      }
    },
    async specimenSelected(specimen) {
      if (isEmpty(this.tests[specimen.id])) {
        this.tests[specimen.id] = await Api.getJson("specimen/test_types", {
          specimen_id: specimen.id,
          department_id: this.currentDepartment.id
        }) || [];
      }
    },
    async authStore(authStore) {
      for (const key in this.tests) {
        if (this.tests.hasOwnProperty(key)) {
          delete this.tests[key];
        }
      }
      if (!isEmpty(this.specimenSelected)) {
        this.tests[this.specimenSelected.id] = await Api.getJson("specimen/test_types", {
          specimen_id: this.specimenSelected.id,
          department_id: authStore.user.departments.find(
            (item) => item.name === authStore.department
          ).id
        }) || [];
      }
    }
  },
  created() {
    Api.getJson("encounter_types").then((res) => this.visitTypes = res.data);
    Api.getJson("specimen").then((data) => this.specimens = data);
    this.getPatient(this.route.query.patient_id);
  }
};
const _imports_0 = "" + buildAssetsURL("test.087be835.png");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$1;
  const _component_IdentificationIcon = resolveComponent("IdentificationIcon");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_CoreDropdown = __nuxt_component_0;
  const _component_multi_select = resolveComponent("multi-select");
  const _component_CoreActionButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="py-5 px-5">`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="mt-5"><div class="flex items-center space-x-2"><img${ssrRenderAttr("src", _imports_0)} class="w-auto h-8" alt="flash-icon"><h3 class="text-2xl font-semibold uppercase"> New test for <span class="text-sky-500 text-2xl font-semibold">\u201C${ssrInterpolate($options.patientName)}\u201D</span></h3></div><div class="border rounded mt-5"><div class="bg-gray-50 flex items-center space-x-3 px-2 py-2 rounded-tr rounded-tl border-b">`);
  _push(ssrRenderComponent(_component_IdentificationIcon, { class: "w-5 h-5" }, null, _parent));
  _push(`<h3 class="font-semibold text-lg">Patient Details</h3></div><div class="w-full py-5 px-5"><div class="flex items-center space-x-20"><div class="flex items-center space-x-3"><h3 class="text-lg font-medium">Patient Number:</h3><p class="mt-1 text-gray-600">${ssrInterpolate($options.patientNumber)}</p></div><div class="flex items-center space-x-3"><h3 class="text-lg font-medium">Age</h3><p class="mt-1 text-gray-600">${ssrInterpolate($options.patientAge)} years old</p></div><div class="flex items-center space-x-3"><h3 class="text-lg font-medium">Sex:</h3><p class="mt-1 text-gray-600">${ssrInterpolate($options.patientSex)}</p></div></div></div></div>`);
  _push(ssrRenderComponent(_component_FormKit, {
    type: "form",
    "submit-label": "Update",
    onSubmit: ($event) => $options.validator() && $options.saveChanges(),
    actions: false,
    id: "submitForm"
  }, {
    default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="border px-5 py-5 mt-5 rounded"${_scopeId}><div class="w-full mb-5"${_scopeId}><div class="flex flex-col space-y-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_FormKit, {
          label: "Requesting Physician",
          validation: "required",
          modelValue: $data.physician,
          "onUpdate:modelValue": ($event) => $data.physician = $event
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="w-full flex items-center space-x-10 mb-5"${_scopeId}><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Visit Type</label>`);
        _push2(ssrRenderComponent(_component_CoreDropdown, {
          items: $data.visitTypes,
          modelValue: $data.visitTypeSelected,
          "onUpdate:modelValue": ($event) => $data.visitTypeSelected = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>${ssrInterpolate($data.requestingTitle)}</label>`);
        _push2(ssrRenderComponent(_component_CoreDropdown, {
          isSearchable: "",
          items: $data.wards,
          modelValue: $data.wardSelected,
          "onUpdate:modelValue": ($event) => $data.wardSelected = $event
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="w-full flex items-center space-x-10 mb-5"${_scopeId}><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Specimen Type</label>`);
        _push2(ssrRenderComponent(_component_CoreDropdown, {
          items: $data.specimens,
          modelValue: $data.specimenSelected,
          "onUpdate:modelValue": ($event) => $data.specimenSelected = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="w-1/2 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Tests</label>`);
        _push2(ssrRenderComponent(_component_multi_select, {
          required: true,
          style: { "--ms-max-height": "none !important" },
          modelValue: $data.testsSelected,
          "onUpdate:modelValue": ($event) => $data.testsSelected = $event,
          options: $data.tests[$data.specimenSelected.id || 0],
          placeholder: "-- select tests --",
          mode: "tags",
          clear: "",
          searchable: "",
          class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="w-full my-6"${_scopeId}><input type="checkbox" placeholder="Name of physician" class="mr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-none transition duration-150"${ssrIncludeBooleanAttr(Array.isArray($data.isBDE) ? ssrLooseContain($data.isBDE, null) : $data.isBDE) ? " checked" : ""}${_scopeId}><label class="font-medium"${_scopeId}>Back Data Entry</label></div>`);
        if ($data.isBDE) {
          _push2(`<div class="w-full mb-5 flex flex-col space-y-2"${_scopeId}><label class="font-medium"${_scopeId}>Sample collection date</label><input type="date" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-none transition duration-150"${ssrRenderAttr("value", $data.sampleCollectionDate)}${_scopeId}></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="w-full"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          type: "submit",
          text: "Place order",
          color: "success",
          icon: $data.ArrowDownTrayIcon,
          click: () => {
          }
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "border px-5 py-5 mt-5 rounded" }, [
            createVNode("div", { class: "w-full mb-5" }, [
              createVNode("div", { class: "flex flex-col space-y-2" }, [
                createVNode(_component_FormKit, {
                  label: "Requesting Physician",
                  validation: "required",
                  modelValue: $data.physician,
                  "onUpdate:modelValue": ($event) => $data.physician = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ]),
            createVNode("div", { class: "w-full flex items-center space-x-10 mb-5" }, [
              createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                createVNode("label", { class: "font-medium" }, "Visit Type"),
                createVNode(_component_CoreDropdown, {
                  items: $data.visitTypes,
                  modelValue: $data.visitTypeSelected,
                  "onUpdate:modelValue": ($event) => $data.visitTypeSelected = $event
                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                createVNode("label", { class: "font-medium" }, toDisplayString($data.requestingTitle), 1),
                createVNode(_component_CoreDropdown, {
                  isSearchable: "",
                  items: $data.wards,
                  modelValue: $data.wardSelected,
                  "onUpdate:modelValue": ($event) => $data.wardSelected = $event
                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
              ])
            ]),
            createVNode("div", { class: "w-full flex items-center space-x-10 mb-5" }, [
              createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                createVNode("label", { class: "font-medium" }, "Specimen Type"),
                createVNode(_component_CoreDropdown, {
                  items: $data.specimens,
                  modelValue: $data.specimenSelected,
                  "onUpdate:modelValue": ($event) => $data.specimenSelected = $event
                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                createVNode("label", { class: "font-medium" }, "Tests"),
                createVNode(_component_multi_select, {
                  required: true,
                  style: { "--ms-max-height": "none !important" },
                  modelValue: $data.testsSelected,
                  "onUpdate:modelValue": ($event) => $data.testsSelected = $event,
                  options: $data.tests[$data.specimenSelected.id || 0],
                  placeholder: "-- select tests --",
                  mode: "tags",
                  clear: "",
                  searchable: "",
                  class: "focus:ring-none fcus:border-none focus:outline-none multiselect-green"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ])
            ]),
            createVNode("div", { class: "w-full my-6" }, [
              withDirectives(createVNode("input", {
                type: "checkbox",
                placeholder: "Name of physician",
                class: "mr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-none transition duration-150",
                "onUpdate:modelValue": ($event) => $data.isBDE = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelCheckbox, $data.isBDE]
              ]),
              createVNode("label", { class: "font-medium" }, "Back Data Entry")
            ]),
            $data.isBDE ? (openBlock(), createBlock("div", {
              key: 0,
              class: "w-full mb-5 flex flex-col space-y-2"
            }, [
              createVNode("label", { class: "font-medium" }, "Sample collection date"),
              withDirectives(createVNode("input", {
                type: "date",
                class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-none transition duration-150",
                "onUpdate:modelValue": ($event) => $data.sampleCollectionDate = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.sampleCollectionDate]
              ])
            ])) : createCommentVNode("", true),
            createVNode("div", { class: "w-full" }, [
              createVNode(_component_CoreActionButton, {
                type: "submit",
                text: "Place order",
                color: "success",
                icon: $data.ArrowDownTrayIcon,
                click: () => {
                }
              }, null, 8, ["icon"])
            ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tests/new-test/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-2732ef1a.mjs.map
