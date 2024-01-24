import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_1 } from './Stepper-f7a86a20.mjs';
import { _ as __nuxt_component_0 } from './Dropdown-666ad98b.mjs';
import { a as dateRange, c as constants } from './constants-353d90a1.mjs';
import { resolveComponent, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, createCommentVNode, withDirectives, vModelRadio, createTextVNode, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { r as render$1, a as render } from './ChevronRightIcon-400fbc51.mjs';
import { r as render$2 } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import { r as render$3 } from './QrCodeIcon-566a836e.mjs';
import { r as render$4 } from './InformationCircleIcon-68986861.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-link-149f0ed2.mjs';
import 'ufo';
import './HomeIcon-299b993b.mjs';
import '@headlessui/vue';
import './CheckIcon-e4d11b9e.mjs';
import './CheckCircleIcon-e0bae33f.mjs';
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

const _sfc_main = {
  data() {
    return {
      leftIcon: render$1,
      rightIcon: render,
      dateFrom: new Array(),
      search: "",
      formatter: {
        date: "DD MMM YYYY",
        month: "MMM"
      },
      genderSelected: { name: "Male" },
      gender: [
        {
          name: "Male"
        },
        {
          name: "Female Non-Preg./ Bf."
        },
        {
          name: "Female Pregnant"
        },
        {
          name: "Female Breastfeeding"
        }
      ],
      gurdianPhone: "",
      selectedDistrict: { name: "Lilongwe" },
      districts: [
        { name: "Blantyre" },
        { name: "Lilongwe" },
        { name: "Mzuzu" },
        { name: "Zomba" },
        { name: "Mchinji" },
        { name: "Dedza" },
        { name: "Nkhotakota" },
        { name: "Nsanje" },
        { name: "Salima" },
        { name: "Karonga" }
      ],
      selectedFacility: { name: "Queen Elizabeth Central Hospital" },
      facilities: [
        { name: "Kamuzu Central Hospital", city: "Lilongwe" },
        { name: "Queen Elizabeth Central Hospital", city: "Blantyre" },
        { name: "Mzuzu Central Hospital", city: "Mzuzu" },
        { name: "Zomba Central Hospital", city: "Zomba" },
        { name: "Dedza District Hospital", city: "Dedza" },
        { name: "Nkhotakota District Hospital", city: "Nkhotakota" },
        { name: "Mulanje District Hospital", city: "Mulanje" },
        { name: "Balaka District Hospital", city: "Balaka" },
        { name: "Salima District Hospital", city: "Salima" },
        { name: "Machinga District Hospital", city: "Machinga" }
      ],
      reasonForTest: "",
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Sample Entry",
          link: "#"
        }
      ],
      regimens: {
        one: [
          {
            value: "0P"
          },
          {
            value: "2P"
          },
          {
            value: "4P"
          },
          {
            value: "9P"
          },
          {
            value: "11P"
          },
          {
            value: "14P"
          },
          {
            value: "15P"
          },
          {
            value: "16P"
          }
        ],
        two: [
          {
            value: "0A"
          },
          {
            value: "2A"
          },
          {
            value: "4A"
          },
          {
            value: "5A"
          },
          {
            value: "6A"
          },
          {
            value: "7A"
          },
          {
            value: "8A"
          },
          {
            value: "9A"
          },
          {
            value: "10A"
          },
          {
            value: "11A"
          },
          {
            value: "12A"
          },
          {
            value: "13A"
          },
          {
            value: "14A"
          },
          {
            value: "15A"
          },
          {
            value: "NS"
          }
        ]
      },
      selectedRegimen: "",
      sampleType: ""
    };
  },
  components: { MagnifyingGlassIcon: render$2, QrCodeIcon: render$3, InformationCircleIcon: render$4 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$1;
  const _component_QrCodeIcon = resolveComponent("QrCodeIcon");
  const _component_CoreStepper = __nuxt_component_1;
  const _component_CoreDropdown = __nuxt_component_0;
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CorePhonePicker = resolveComponent("CorePhonePicker");
  const _component_InformationCircleIcon = resolveComponent("InformationCircleIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))} data-v-9dceebe7>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex justify-between w-full px-2 py-2 mb-2 mt-3" data-v-9dceebe7><div class="flex items-center space-x-3" data-v-9dceebe7><h3 class="text-2xl font-semibold" data-v-9dceebe7>New viral load entry</h3></div><div class="flex items-center border rounded" data-v-9dceebe7><div class="border-r px-2 p-2 bg-gray-50" data-v-9dceebe7>`);
  _push(ssrRenderComponent(_component_QrCodeIcon, { class: "w-5 h-5" }, null, _parent));
  _push(`</div><input type="text" id="email-address-icon" class="px-2 block focus:border-none outline-none transition duration-150 text-sm" placeholder="Scan barcode" data-v-9dceebe7></div></div>`);
  _push(ssrRenderComponent(_component_CoreStepper, { steps: 4 }, {
    default: withCtx(({ step }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (step === 1) {
          _push2(`<div data-v-9dceebe7${_scopeId}><div class="rounded border" data-v-9dceebe7${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" data-v-9dceebe7${_scopeId}> Section 1: Health Facility Information </div><div data-v-9dceebe7${_scopeId}><div class="w-full flex items-center px-5 space-x-3 py-5" data-v-9dceebe7${_scopeId}><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>District</label>`);
          _push2(ssrRenderComponent(_component_CoreDropdown, {
            items: $data.districts,
            "model-value": $data.selectedDistrict
          }, null, _parent2, _scopeId));
          _push2(`</div><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Facility</label>`);
          _push2(ssrRenderComponent(_component_CoreDropdown, {
            items: $data.facilities,
            "model-value": $data.selectedFacility
          }, null, _parent2, _scopeId));
          _push2(`</div></div></div></div><div class="rounded border mt-5" data-v-9dceebe7${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" data-v-9dceebe7${_scopeId}> Section 2: Patient Information </div><div class="space-y-3 pb-10" data-v-9dceebe7${_scopeId}><div class="w-full flex items-center px-5 space-x-3 mt-3" data-v-9dceebe7${_scopeId}><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Patient Surname</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150" data-v-9dceebe7${_scopeId}></div><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Patient First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150" data-v-9dceebe7${_scopeId}></div></div><div class="w-full flex items-center px-5 space-x-3" data-v-9dceebe7${_scopeId}><div class="w-1/2 flex flex-col space-y-2 mb-4" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Patient ID</label><div id="otp" class="flex flex-row text-center mb-3" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}></div></div><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Date of Birth</label><div class="w-full" data-v-9dceebe7${_scopeId}>`);
          _push2(ssrRenderComponent(_component_datepicker, {
            placeholder: (/* @__PURE__ */ new Date()).toDateString(),
            "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
            "as-single": "",
            shortcuts: true,
            modelValue: $data.dateFrom,
            "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
            "text-input": true,
            "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
            "max-date": /* @__PURE__ */ new Date(),
            "ignore-time-validation": true,
            teleport: true,
            "enable-time-picker": false,
            formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
          }, null, _parent2, _scopeId));
          _push2(`</div></div></div><div class="w-full flex items-center px-5 space-x-3 mt-3" data-v-9dceebe7${_scopeId}><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Gender</label>`);
          _push2(ssrRenderComponent(_component_CoreDropdown, {
            items: $data.gender,
            "model-value": $data.genderSelected
          }, null, _parent2, _scopeId));
          _push2(`</div><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Patient/Gurdian Phone</label>`);
          _push2(ssrRenderComponent(_component_CorePhonePicker, { phone: $data.gurdianPhone }, null, _parent2, _scopeId));
          _push2(`</div></div><div class="w-full flex items-center px-5 space-x-3 mt-3" data-v-9dceebe7${_scopeId}><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Date Sample Drawn</label><div class="w-full" data-v-9dceebe7${_scopeId}>`);
          _push2(ssrRenderComponent(_component_datepicker, {
            placeholder: (/* @__PURE__ */ new Date()).toDateString(),
            "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
            "as-single": "",
            shortcuts: true,
            modelValue: $data.dateFrom,
            "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
            "text-input": true,
            "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
            "max-date": /* @__PURE__ */ new Date(),
            "ignore-time-validation": true,
            teleport: true,
            "enable-time-picker": false,
            formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
          }, null, _parent2, _scopeId));
          _push2(`</div></div></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (step === 2) {
          _push2(`<div data-v-9dceebe7${_scopeId}><div class="rounded border" data-v-9dceebe7${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" data-v-9dceebe7${_scopeId}> Section 3: Reason For Test </div><div class="px-2" data-v-9dceebe7${_scopeId}><div class="px-2 py-2" data-v-9dceebe7${_scopeId}><label for="radio-group" data-v-9dceebe7${_scopeId}>Select reason:</label><div id="radio-group" class="mt-2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label data-v-9dceebe7${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.reasonForTest, "routine")) ? " checked" : ""} value="routine" data-v-9dceebe7${_scopeId}> Routine </label><label data-v-9dceebe7${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.reasonForTest, "targeted")) ? " checked" : ""} value="targeted" data-v-9dceebe7${_scopeId}> Targeted </label><label data-v-9dceebe7${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.reasonForTest, "follow up after highVL")) ? " checked" : ""} value="follow up after highVL" data-v-9dceebe7${_scopeId}> Follow up after highVL </label><label data-v-9dceebe7${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.reasonForTest, "repeat")) ? " checked" : ""} value="repeat" data-v-9dceebe7${_scopeId}> Repeat </label></div></div></div></div><div class="rounded border mt-5" data-v-9dceebe7${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" data-v-9dceebe7${_scopeId}> Section 4: Patient &amp; Sample Details </div><div class="px-2" data-v-9dceebe7${_scopeId}><div class="px-2 py-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>ART Initiation Date</label><div class="w-72" data-v-9dceebe7${_scopeId}>`);
          _push2(ssrRenderComponent(_component_datepicker, {
            placeholder: (/* @__PURE__ */ new Date()).toDateString(),
            "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
            "as-single": "",
            shortcuts: true,
            modelValue: $data.dateFrom,
            "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
            "text-input": true,
            "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
            "max-date": /* @__PURE__ */ new Date(),
            "ignore-time-validation": true,
            teleport: true,
            "enable-time-picker": false,
            formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
          }, null, _parent2, _scopeId));
          _push2(`</div></div><div class="px-2 py-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Sample Type:</label><div id="radio-group" class="mt-2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label data-v-9dceebe7${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.sampleType, "dbs")) ? " checked" : ""} value="dbs" data-v-9dceebe7${_scopeId}> DBS (using Capillary Tube) </label><label data-v-9dceebe7${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.sampleType, "plasma")) ? " checked" : ""} value="plasma" data-v-9dceebe7${_scopeId}> Plasma </label></div></div><div class="px-2 py-2" data-v-9dceebe7${_scopeId}><label for="radio-group" class="mb-3 mt-2 font-medium" data-v-9dceebe7${_scopeId}>Current ART Regimen:</label><div class="grid grid-cols-7 w-1/2 mt-2" data-v-9dceebe7${_scopeId}><!--[-->`);
          ssrRenderList($data.regimens.one, (regimen) => {
            _push2(`<div class="col-span-1 bg-purple-200 px-4 py-4 border-t border-b border-l border-purple-100" data-v-9dceebe7${_scopeId}><label class="flex items-center" data-v-9dceebe7${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selectedRegimen, regimen.value)) ? " checked" : ""}${ssrRenderAttr("value", regimen.value)} class="mr-2" data-v-9dceebe7${_scopeId}> ${ssrInterpolate(regimen.value)}</label></div>`);
          });
          _push2(`<!--]--><!--[-->`);
          ssrRenderList($data.regimens.two, (regimen) => {
            _push2(`<div class="col-span-1 bg-yellow-200 px-4 py-4 border-t border-b border-l border-yellow-100" data-v-9dceebe7${_scopeId}><label class="flex items-center" data-v-9dceebe7${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selectedRegimen, regimen.value)) ? " checked" : ""}${ssrRenderAttr("value", regimen.value)} class="mr-2" data-v-9dceebe7${_scopeId}> ${ssrInterpolate(regimen.value)}</label></div>`);
          });
          _push2(`<!--]--></div></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (step === 3) {
          _push2(`<div data-v-9dceebe7${_scopeId}><div class="rounded border mt-5" data-v-9dceebe7${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" data-v-9dceebe7${_scopeId}> Section 5: Details of Person Collecting Sample </div><div class="py-5 px-5" data-v-9dceebe7${_scopeId}><div class="w-full flex items-center space-x-3 mt-3" data-v-9dceebe7${_scopeId}><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Surname</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150" data-v-9dceebe7${_scopeId}></div><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>First Name</label><input type="text" class="w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150" data-v-9dceebe7${_scopeId}></div></div><div class="w-full flex items-center space-x-3 mt-3" data-v-9dceebe7${_scopeId}><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>Phone Number</label>`);
          _push2(ssrRenderComponent(_component_CorePhonePicker, { phone: $data.gurdianPhone }, null, _parent2, _scopeId));
          _push2(`</div><div class="w-1/2 flex flex-col space-y-2" data-v-9dceebe7${_scopeId}><label class="font-medium" data-v-9dceebe7${_scopeId}>HTC Provider ID</label><div id="htc_provider_id" class="flex flex-row text-center mb-3" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="first" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="second" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="third" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="fourth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="fifth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}><input class="mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none" type="text" id="sixth" maxlength="1" data-v-9dceebe7${_scopeId}></div></div></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (step === 4) {
          _push2(`<div data-v-9dceebe7${_scopeId}><div class="rounded border mt-5" data-v-9dceebe7${_scopeId}><div class="bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" data-v-9dceebe7${_scopeId}> Section 6: Confirmation </div><div class="px-5 py-5" data-v-9dceebe7${_scopeId}><div class="bg-orange-100 text-orange-500 font-medium flex items-center px-2 py-2 rounded" data-v-9dceebe7${_scopeId}>`);
          _push2(ssrRenderComponent(_component_InformationCircleIcon, { class: "w-5 h-5 mr-3" }, null, _parent2, _scopeId));
          _push2(` Please make sure you have entered the correct information as they appear on the EID &amp; Viral Load Requisition Form </div><div data-v-9dceebe7${_scopeId}><div data-v-9dceebe7${_scopeId}></div></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          step === 1 ? (openBlock(), createBlock("div", { key: 0 }, [
            createVNode("div", { class: "rounded border" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 1: Health Facility Information "),
              createVNode("div", null, [
                createVNode("div", { class: "w-full flex items-center px-5 space-x-3 py-5" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "District"),
                    createVNode(_component_CoreDropdown, {
                      items: $data.districts,
                      "model-value": $data.selectedDistrict
                    }, null, 8, ["items", "model-value"])
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Facility"),
                    createVNode(_component_CoreDropdown, {
                      items: $data.facilities,
                      "model-value": $data.selectedFacility
                    }, null, 8, ["items", "model-value"])
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "rounded border mt-5" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 2: Patient Information "),
              createVNode("div", { class: "space-y-3 pb-10" }, [
                createVNode("div", { class: "w-full flex items-center px-5 space-x-3 mt-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Patient Surname"),
                    createVNode("input", {
                      type: "text",
                      class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                    })
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Patient First Name"),
                    createVNode("input", {
                      type: "text",
                      class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                    })
                  ])
                ]),
                createVNode("div", { class: "w-full flex items-center px-5 space-x-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2 mb-4" }, [
                    createVNode("label", { class: "font-medium" }, "Patient ID"),
                    createVNode("div", {
                      id: "otp",
                      class: "flex flex-row text-center mb-3"
                    }, [
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "first",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "second",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "third",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "fourth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "fifth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      })
                    ])
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Date of Birth"),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_datepicker, {
                        placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                        "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
                        "as-single": "",
                        shortcuts: true,
                        modelValue: $data.dateFrom,
                        "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
                        "text-input": true,
                        "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                        "max-date": /* @__PURE__ */ new Date(),
                        "ignore-time-validation": true,
                        teleport: true,
                        "enable-time-picker": false,
                        formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                      }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "year-range", "max-date", "formatter"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full flex items-center px-5 space-x-3 mt-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Gender"),
                    createVNode(_component_CoreDropdown, {
                      items: $data.gender,
                      "model-value": $data.genderSelected
                    }, null, 8, ["items", "model-value"])
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Patient/Gurdian Phone"),
                    createVNode(_component_CorePhonePicker, { phone: $data.gurdianPhone }, null, 8, ["phone"])
                  ])
                ]),
                createVNode("div", { class: "w-full flex items-center px-5 space-x-3 mt-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Date Sample Drawn"),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_datepicker, {
                        placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                        "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
                        "as-single": "",
                        shortcuts: true,
                        modelValue: $data.dateFrom,
                        "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
                        "text-input": true,
                        "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                        "max-date": /* @__PURE__ */ new Date(),
                        "ignore-time-validation": true,
                        teleport: true,
                        "enable-time-picker": false,
                        formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                      }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "year-range", "max-date", "formatter"])
                    ])
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          step === 2 ? (openBlock(), createBlock("div", { key: 1 }, [
            createVNode("div", { class: "rounded border" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 3: Reason For Test "),
              createVNode("div", { class: "px-2" }, [
                createVNode("div", { class: "px-2 py-2" }, [
                  createVNode("label", { for: "radio-group" }, "Select reason:"),
                  createVNode("div", {
                    id: "radio-group",
                    class: "mt-2 flex flex-col space-y-2"
                  }, [
                    createVNode("label", null, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.reasonForTest = $event,
                        value: "routine"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.reasonForTest]
                      ]),
                      createTextVNode(" Routine ")
                    ]),
                    createVNode("label", null, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.reasonForTest = $event,
                        value: "targeted"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.reasonForTest]
                      ]),
                      createTextVNode(" Targeted ")
                    ]),
                    createVNode("label", null, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.reasonForTest = $event,
                        value: "follow up after highVL"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.reasonForTest]
                      ]),
                      createTextVNode(" Follow up after highVL ")
                    ]),
                    createVNode("label", null, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.reasonForTest = $event,
                        value: "repeat"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.reasonForTest]
                      ]),
                      createTextVNode(" Repeat ")
                    ])
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "rounded border mt-5" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 4: Patient & Sample Details "),
              createVNode("div", { class: "px-2" }, [
                createVNode("div", { class: "px-2 py-2" }, [
                  createVNode("label", { class: "font-medium" }, "ART Initiation Date"),
                  createVNode("div", { class: "w-72" }, [
                    createVNode(_component_datepicker, {
                      placeholder: (/* @__PURE__ */ new Date()).toDateString(),
                      "input-class-name": "border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150",
                      "as-single": "",
                      shortcuts: true,
                      modelValue: $data.dateFrom,
                      "onUpdate:modelValue": ($event) => $data.dateFrom = $event,
                      "text-input": true,
                      "year-range": "dateRange" in _ctx ? _ctx.dateRange : unref(dateRange),
                      "max-date": /* @__PURE__ */ new Date(),
                      "ignore-time-validation": true,
                      teleport: true,
                      "enable-time-picker": false,
                      formatter: ("constants" in _ctx ? _ctx.constants : unref(constants)).dateFormatter
                    }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "year-range", "max-date", "formatter"])
                  ])
                ]),
                createVNode("div", { class: "px-2 py-2" }, [
                  createVNode("label", { class: "font-medium" }, "Sample Type:"),
                  createVNode("div", {
                    id: "radio-group",
                    class: "mt-2 flex flex-col space-y-2"
                  }, [
                    createVNode("label", null, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.sampleType = $event,
                        value: "dbs"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.sampleType]
                      ]),
                      createTextVNode(" DBS (using Capillary Tube) ")
                    ]),
                    createVNode("label", null, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => $data.sampleType = $event,
                        value: "plasma"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, $data.sampleType]
                      ]),
                      createTextVNode(" Plasma ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "px-2 py-2" }, [
                  createVNode("label", {
                    for: "radio-group",
                    class: "mb-3 mt-2 font-medium"
                  }, "Current ART Regimen:"),
                  createVNode("div", { class: "grid grid-cols-7 w-1/2 mt-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList($data.regimens.one, (regimen) => {
                      return openBlock(), createBlock("div", { class: "col-span-1 bg-purple-200 px-4 py-4 border-t border-b border-l border-purple-100" }, [
                        createVNode("label", { class: "flex items-center" }, [
                          withDirectives(createVNode("input", {
                            type: "radio",
                            "onUpdate:modelValue": ($event) => $data.selectedRegimen = $event,
                            value: regimen.value,
                            class: "mr-2"
                          }, null, 8, ["onUpdate:modelValue", "value"]), [
                            [vModelRadio, $data.selectedRegimen]
                          ]),
                          createTextVNode(" " + toDisplayString(regimen.value), 1)
                        ])
                      ]);
                    }), 256)),
                    (openBlock(true), createBlock(Fragment, null, renderList($data.regimens.two, (regimen) => {
                      return openBlock(), createBlock("div", { class: "col-span-1 bg-yellow-200 px-4 py-4 border-t border-b border-l border-yellow-100" }, [
                        createVNode("label", { class: "flex items-center" }, [
                          withDirectives(createVNode("input", {
                            type: "radio",
                            "onUpdate:modelValue": ($event) => $data.selectedRegimen = $event,
                            value: regimen.value,
                            class: "mr-2"
                          }, null, 8, ["onUpdate:modelValue", "value"]), [
                            [vModelRadio, $data.selectedRegimen]
                          ]),
                          createTextVNode(" " + toDisplayString(regimen.value), 1)
                        ])
                      ]);
                    }), 256))
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          step === 3 ? (openBlock(), createBlock("div", { key: 2 }, [
            createVNode("div", { class: "rounded border mt-5" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 5: Details of Person Collecting Sample "),
              createVNode("div", { class: "py-5 px-5" }, [
                createVNode("div", { class: "w-full flex items-center space-x-3 mt-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Surname"),
                    createVNode("input", {
                      type: "text",
                      class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                    })
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "First Name"),
                    createVNode("input", {
                      type: "text",
                      class: "w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"
                    })
                  ])
                ]),
                createVNode("div", { class: "w-full flex items-center space-x-3 mt-3" }, [
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "Phone Number"),
                    createVNode(_component_CorePhonePicker, { phone: $data.gurdianPhone }, null, 8, ["phone"])
                  ]),
                  createVNode("div", { class: "w-1/2 flex flex-col space-y-2" }, [
                    createVNode("label", { class: "font-medium" }, "HTC Provider ID"),
                    createVNode("div", {
                      id: "htc_provider_id",
                      class: "flex flex-row text-center mb-3"
                    }, [
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "first",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "second",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "third",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "fourth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "fifth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      }),
                      createVNode("input", {
                        class: "mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",
                        type: "text",
                        id: "sixth",
                        maxlength: "1"
                      })
                    ])
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          step === 4 ? (openBlock(), createBlock("div", { key: 3 }, [
            createVNode("div", { class: "rounded border mt-5" }, [
              createVNode("div", { class: "bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md" }, " Section 6: Confirmation "),
              createVNode("div", { class: "px-5 py-5" }, [
                createVNode("div", { class: "bg-orange-100 text-orange-500 font-medium flex items-center px-2 py-2 rounded" }, [
                  createVNode(_component_InformationCircleIcon, { class: "w-5 h-5 mr-3" }),
                  createTextVNode(" Please make sure you have entered the correct information as they appear on the EID & Viral Load Requisition Form ")
                ]),
                createVNode("div", null, [
                  createVNode("div")
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sample-entry/viral-load.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const viralLoad = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9dceebe7"]]);

export { viralLoad as default };
//# sourceMappingURL=viral-load-1fe78331.mjs.map
