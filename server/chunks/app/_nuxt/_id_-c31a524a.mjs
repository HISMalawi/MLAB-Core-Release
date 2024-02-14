import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { _ as __nuxt_component_1 } from './SearchBar-a0fe3266.mjs';
<<<<<<<< HEAD:server/chunks/app/_nuxt/_id_-e9388857.mjs
import { _ as __nuxt_component_2 } from './Datatable-d607d390.mjs';
import { _ as _export_sfc, b as __nuxt_component_0 } from '../server.mjs';
========
import { _ as __nuxt_component_2 } from './Datatable-45e62187.mjs';
import { _ as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
>>>>>>>> 6676e6c582c458131c78193d4457be94894744ff:server/chunks/app/_nuxt/_id_-c31a524a.mjs
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { r as render } from './CheckCircleIcon-e0bae33f.mjs';
import { r as render$1 } from './PrinterIcon-02ac6ae4.mjs';
import { r as render$2 } from './ArrowPathIcon-6ff7b048.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './nuxt-link-149f0ed2.mjs';
import 'ufo';
import './HomeIcon-299b993b.mjs';
import './XMarkIcon-170c776f.mjs';
import './Loader-86943425.mjs';
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
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Worksheets",
          link: "/worksheets"
        }
      ],
      search: "",
      page: `Tests for worksheet no:: ${this.$route.params.id}`,
      confirmIcon: render,
      printIcon: render$1,
      rerunIcon: render$2,
      worksheets: [
        {
          "tracking_no": "TN001",
          "patient_no": "P001",
          "random_id": "RID001",
          "test_type": "PCR",
          "specimen": "Nasopharyngeal swab",
          "date_created": "2022-01-15",
          "facility": "Hospital A",
          "status": "Completed",
          "result": "Positive"
        },
        {
          "tracking_no": "TN002",
          "patient_no": "P002",
          "random_id": "RID002",
          "test_type": "Antigen",
          "specimen": "Saliva",
          "date_created": "2022-01-16",
          "facility": "Clinic B",
          "status": "Completed",
          "result": "Negative"
        },
        {
          "tracking_no": "TN003",
          "patient_no": "P003",
          "random_id": "RID003",
          "test_type": "PCR",
          "specimen": "Nasopharyngeal swab",
          "date_created": "2022-01-17",
          "facility": "Laboratory C",
          "status": "In Progress",
          "result": null
        }
      ]
    };
  },
  setup() {
    const headers = [
      { text: "Tracking Number", value: "tracking_no", sortable: true },
      { text: "Patient Name", value: "patient_no", sortable: true },
      { text: "ARV Number", value: "random_id" },
      { text: "Test", value: "test_type" },
      { text: "Specimen", value: "specimen" },
      { text: "Date Created", value: "date_created" },
      { text: "Facility", value: "facility" },
      { text: "Status", value: "status" },
      { text: "Result", value: "result" },
      { text: "Actions", value: "actions" }
    ];
    return { headers };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$1;
  const _component_CoreSearchBar = __nuxt_component_1;
  const _component_CoreDatatable = __nuxt_component_2;
  const _component_CoreActionButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.page)}</h3></div><div class="flex justify-between w-full py-2 mb-2"><div></div>`);
  _push(ssrRenderComponent(_component_CoreSearchBar, { search: $data.search }, null, _parent));
  _push(`</div><div class="mt-2 space-y-3">`);
  _push(ssrRenderComponent(_component_CoreDatatable, {
    headers: $setup.headers,
    data: $data.worksheets
  }, {
    actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_CoreActionButton, {
          color: "error",
          text: `Re-run`,
          icon: $data.rerunIcon
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
            createVNode(_component_CoreActionButton, {
              color: "error",
              text: `Re-run`,
              icon: $data.rerunIcon
            }, null, 8, ["icon"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 rounded bg-gray-50">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    icon: $data.confirmIcon,
    text: "Verify worksheet",
    color: "success"
  }, null, _parent));
  _push(ssrRenderComponent(_component_CoreActionButton, {
    icon: $data.printIcon,
    text: "Print results",
    color: "success"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/worksheets/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
<<<<<<<< HEAD:server/chunks/app/_nuxt/_id_-e9388857.mjs
//# sourceMappingURL=_id_-e9388857.mjs.map
========
//# sourceMappingURL=_id_-c31a524a.mjs.map
>>>>>>>> 6676e6c582c458131c78193d4457be94894744ff:server/chunks/app/_nuxt/_id_-c31a524a.mjs
