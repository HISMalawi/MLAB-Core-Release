import { _ as __nuxt_component_0 } from './Breadcrumb-058f5536.mjs';
import { _ as _export_sfc, u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './index-1e13fc30.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { S as StockModule$1 } from './stock-00ae6113.mjs';
import { r as render } from './TicketIcon-9bd92af9.mjs';
import { r as render$1 } from './CheckIcon-e4d11b9e.mjs';
import { r as render$2 } from './DocumentCheckIcon-e2548817.mjs';
import { r as render$3 } from './NoSymbolIcon-c85145af.mjs';
import { r as render$4 } from './TrashIcon-b1416ff8.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import './nuxt-link-7a607302.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './HomeIcon-299b993b.mjs';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
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
import './OutlinedButton-945a5cd0.mjs';
import './constants-353d90a1.mjs';
import '@headlessui/vue';
import './XMarkIcon-170c776f.mjs';
import './fetch-a6c33994.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'moment';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = {
  components: { TicketIcon: render },
  data() {
    return {
      header: "Verify Stock Order",
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
      verifying: false,
      requisitions: new Array(),
      voidReason: ""
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
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    async verifyStockRequisition(requisition) {
      this.loading = true;
      const stockModule = new StockModule$1();
      const params = {
        stock_order_id: `${this.$route.query.order_id}`,
        stock_requisition_id: requisition.id
      };
      const { data, error, pending } = await stockModule.verifyStockOrderRequisition(`${this.cookie}`, params);
      this.loading = pending;
      if (data.value) {
        useNuxtApp().$toast.success("Stock order requisition verified successfully!");
        this.init();
        this.loading = false;
      }
      if (error.value) {
        console.error(error.value);
        this.loading = false;
      }
    },
    async verifyStockOrder() {
      this.verifying = true;
      const stockModule = new StockModule$1();
      const params = {
        stock_order_id: `${this.$route.query.order_id}`,
        stock_requisition_ids: this.requisitions.map((requisition) => requisition.id)
      };
      const { data, error, pending } = await stockModule.verifyStockOrder(`${this.cookie}`, params);
      this.verifying = pending;
      if (data.value) {
        useNuxtApp().$toast.success("Stock order verified successfully!");
        this.$router.push("/stock-management/orders");
        this.verifying = false;
      }
      if (error.value) {
        console.error(error.value);
        this.verifying = false;
      }
    },
    deleteStockItem(index) {
      if (index >= 0 && index < this.requisitions.length) {
        this.requisitions.splice(index, 1);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_TicketIcon = resolveComponent("TicketIcon");
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_StockOrdersRejectDialog = __nuxt_component_2;
  const _component_FormKit = resolveComponent("FormKit");
  const _component_StockOrdersRejectRequisition = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="py-5 flex items-center justify-between"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3></div><div class="px-4 py-2 bg-gray-50 flex items-center justify-between"><div class="flex items-center space-x-2">`);
  _push(ssrRenderComponent(_component_TicketIcon, { class: "h-5 w-5" }, null, _parent));
  _push(`<p>Voucher Number: <strong>${ssrInterpolate(_ctx.$route.params.voucherId)}</strong></p></div><div class="flex items-center space-x-3 justify-end">`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    loading: $data.verifying,
    icon: $data.allIcon,
    text: "Verify all",
    color: "success",
    click: $options.verifyStockOrder
  }, null, _parent));
  _push(ssrRenderComponent(_component_StockOrdersRejectDialog, {
    stockId: `${_ctx.$route.query.order_id}`,
    orderId: `${_ctx.$route.params.voucherId}`
  }, null, _parent));
  _push(`</div></div><div><!--[-->`);
  ssrRenderList($data.requisitions, (requisition, index) => {
    _push(`<div style="${ssrRenderStyle(!$data.loading ? null : { display: "none" })}" class="flex flex-col space-y-3">`);
    if (requisition.requisition_status.toLowerCase() !== "rejected") {
      _push(`<div class="grid grid-cols-4 gap-4 mt-5"><div class="flex flex-col space-y-2">`);
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
        validation: "required",
        modelValue: requisition.quantity_requested,
        "onUpdate:modelValue": ($event) => requisition.quantity_requested = $event
      }, null, _parent));
      if (requisition.requisition_status.toLowerCase() !== "requested") {
        _push(`<div class="mt-8 flex space-x-2.5 items-center">`);
        _push(ssrRenderComponent(_component_CoreActionButton, {
          key: requisition.id,
          icon: $data.checkIcon,
          text: "Verify",
          color: "success",
          click: () => {
            $options.verifyStockRequisition(requisition);
          }
        }, null, _parent));
        _push(ssrRenderComponent(_component_StockOrdersRejectRequisition, {
          onUpdate: $options.init,
          data: requisition,
          orderId: `${_ctx.$route.params.voucherId}`
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--><div style="${ssrRenderStyle($data.loading ? null : { display: "none" })}"><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<div class="flex items-center space-x-3 mb-3"><div class="w-1/4 bg-gray-100 rounded animate-pulse h-10 mt"></div><div class="w-1/4 bg-gray-100 rounded animate-pulse h-10"></div><div class="w-1/4 bg-gray-100 rounded animate-pulse h-10"></div><div class="w-1/4 bg-gray-100 rounded animate-pulse h-10"></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/orders/request/[voucherId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _voucherId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _voucherId_ as default };
//# sourceMappingURL=_voucherId_-a6057c46.mjs.map
