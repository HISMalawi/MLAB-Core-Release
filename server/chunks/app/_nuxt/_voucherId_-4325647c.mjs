import { _ as _sfc_main$1 } from './Breadcrumb-92cb573c.mjs';
import { _ as _export_sfc, u as useHead, a as useCookie, b as useNuxtApp, d as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './index-aa7e7405.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { d as dateFormat, e as errorMessage } from './constants-9b77e6ea.mjs';
import { S as StockModule$1 } from './stock-1cab6d44.mjs';
import moment from 'moment';
import { P as Package } from './package-f9450e57.mjs';
import { r as render } from './TicketIcon-9bd92af9.mjs';
import { r as render$1 } from './CheckIcon-e4d11b9e.mjs';
import { r as render$2 } from './DocumentCheckIcon-e2548817.mjs';
import { r as render$3 } from './NoSymbolIcon-c85145af.mjs';
import { r as render$4 } from './TrashIcon-b1416ff8.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './pharmacy_alt-9c93ede3.mjs';
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
import './OutlinedButton-945a5cd0.mjs';
import '@headlessui/vue';
import './XMarkIcon-170c776f.mjs';
import './fetch-39024911.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Approve Stock Order`
    });
  },
  components: {
    TicketIcon: render
  },
  data() {
    return {
      header: "Approve Stock Order",
      checkIcon: render$1,
      allIcon: render$2,
      rejectIcon: render$3,
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Stock Orders",
          link: "/stock-management/orders"
        }
      ],
      cookie: useCookie("token"),
      deleteicon: render$4,
      loading: false,
      approving: false,
      verifying: false,
      requisitions: new Array(),
      voidReason: "",
      issuerName: "",
      issuerDesignation: "",
      issuerPhone: "",
      issuerSignature: "",
      approverName: "",
      approverDesignation: "",
      approverPhone: "",
      approverSignature: "",
      issuedDate: "",
      approvedDate: ""
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.getStockOrder(`${this.cookie}`, `${this.$route.query.order_id}`);
      this.loading = pending;
      if (data.value) {
        this.requisitions = data.value.stock_requisitions;
        this.loading = false;
        data.value.stock_pharmacy_approver_and_issuers.map((item) => {
          if (item.record_type == "issuer") {
            this.issuerName = item.name;
            this.issuerPhone = item.phone_number;
            this.issuerDesignation = item.designation;
            this.issuerSignature = item.signature;
            this.issuedDate = moment(item.created_date).format(dateFormat);
          } else {
            this.approverName = item.name;
            this.approverPhone = item.phone_number;
            this.approverDesignation = item.designation;
            this.approverSignature = item.signature;
            this.approvedDate = moment(item.created_date).format(dateFormat);
          }
        });
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    async approveStockOrder() {
      this.approving = true;
      const stockModule = new StockModule$1();
      let requisitions = this.requisitions.map((requisition) => requisition.id);
      const { data, error, pending } = await stockModule.approveStockOrder(`${this.cookie}`, { stock_order_id: `${this.$route.query.order_id}`, stock_requisition_ids: requisitions });
      this.approving = pending;
      if (data.value) {
        this.approving = false;
        this.$router.push("/stock-management/orders");
        useNuxtApp().$toast.success(`Stock order request #${this.$route.params.voucherId} approved successfully`);
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.approving = false;
      }
    },
    async approveRequisition(id) {
      this.loading = true;
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.approveStockOrderRequisition(`${this.cookie}`, { stock_requisition_id: id });
      this.loading = pending;
      if (data.value) {
        this.loading = false;
        useNuxtApp().$toast.success(`Stock order requisition approved successfully`);
      }
      if (error.value) {
        console.error(error.value);
        useNuxtApp().$toast.error(errorMessage);
        this.loading = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = _sfc_main$1;
  const _component_TicketIcon = resolveComponent("TicketIcon");
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_StockOrdersRejectDialog = __nuxt_component_2;
  const _component_FormKit = resolveComponent("FormKit");
  const _component_StockOrdersRejectRequisition = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="py-5 flex items-center justify-between"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3></div><div class="px-4 py-2 bg-gray-50 flex items-center justify-between"><div class="flex items-center space-x-2">`);
  _push(ssrRenderComponent(_component_TicketIcon, { class: "h-5 w-5" }, null, _parent));
  _push(`<p>Voucher Number: <strong>${ssrInterpolate(_ctx.$route.params.voucherId)}</strong></p></div><div class="flex items-center space-x-3 justify-end">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    loading: $data.approving,
    icon: $data.allIcon,
    text: "Approve Order",
    color: "success",
    click: $options.approveStockOrder
  }, null, _parent));
  _push(ssrRenderComponent(_component_StockOrdersRejectDialog, {
    stockId: `${_ctx.$route.query.order_id}`,
    orderId: `${_ctx.$route.params.voucherId}`
  }, null, _parent));
  _push(`</div></div><div class="rounded border mt-5"><div class="flex items-center space-x-3 bg-gray-50 py-2 rounded-t px-2 border-b"><img${ssrRenderAttr("src", _imports_0)} class="w-6 h-6"><h3 class="text-lg font-semibold">Pharmacy</h3></div><div class="w-full grid grid-cols-2 gap-5 py-5 px-5"><div class="col-span-1 flex flex-col space-y-2"><div class="w-full flex items-center space-x-2"><p class="w-72 font-medium">Issued by: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300">${ssrInterpolate($data.issuerName)}</span></div><div class="w-full flex items-center space-x-2"><p class="w-72 font-medium">Designation: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300">${ssrInterpolate($data.issuerDesignation)}</span></div><div class="w-full flex items-center space-x-2"><p class="w-72 font-medium">Signature: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300">${ssrInterpolate($data.issuerSignature)}</span></div><div class="w-full flex items-center space-x-2"><p class="w-72 font-medium">Date:</p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300">${ssrInterpolate($data.issuedDate)}</span></div></div><div class="col-span-1 flex flex-col space-y-2"><div class="w-full flex items-center space-x-2"><p class="w-72 font-medium">Approved by: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300">${ssrInterpolate($data.approverName)}</span></div><div class="w-full flex items-center space-x-2"><p class="w-72 font-medium">Designation: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300">${ssrInterpolate($data.approverDesignation)}</span></div><div class="w-full flex items-center space-x-2"><p class="w-72 font-medium">Signature: </p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300">${ssrInterpolate($data.issuerSignature)}</span></div><div class="w-full flex items-center space-x-2"><p class="w-72 font-medium">Date:</p><span class="w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300">${ssrInterpolate($data.approvedDate)}</span></div></div></div></div><!--[-->`);
  ssrRenderList($data.requisitions, (requisition, index) => {
    _push(`<div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}" class="flex flex-col space-y-3">`);
    if (requisition.requisition_status.toLowerCase() !== "rejected") {
      _push(`<div class="grid grid-cols-5 gap-4 mt-5"><div class="flex flex-col space-y-2">`);
      _push(ssrRenderComponent(_component_FormKit, {
        label: "Stock item",
        disabled: true,
        modelValue: requisition.item.name,
        "onUpdate:modelValue": ($event) => requisition.item.name = $event
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FormKit, {
        label: "Quantity requested",
        type: "number",
        disabled: true,
        modelValue: requisition.quantity_requested,
        "onUpdate:modelValue": ($event) => requisition.quantity_requested = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormKit, {
        label: "Quantity issued",
        type: "number",
        disabled: true,
        modelValue: requisition.quantity_issued,
        "onUpdate:modelValue": ($event) => requisition.quantity_issued = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormKit, {
        label: "Quantity collected",
        type: "number",
        disabled: true,
        modelValue: requisition.quantity_collected,
        "onUpdate:modelValue": ($event) => requisition.quantity_collected = $event
      }, null, _parent));
      _push(`<div class="flex items-center space-x-2 pt-8">`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        text: "Approve",
        icon: $data.checkIcon,
        color: "success",
        click: () => {
          $options.approveRequisition(requisition.id);
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_StockOrdersRejectRequisition, {
        onUpdate: $options.init,
        data: requisition,
        orderId: `${_ctx.$route.params.voucherId}`
      }, null, _parent));
      _push(`</div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/orders/approve/[voucherId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _voucherId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _voucherId_ as default };
//# sourceMappingURL=_voucherId_-4325647c.mjs.map
