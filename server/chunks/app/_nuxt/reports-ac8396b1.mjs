import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as _export_sfc, u as useCookie, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './Dropdown-15d8abe8.mjs';
import { _ as __nuxt_component_1 } from './Loader-c735e4ba.mjs';
import { d as dateFormat } from './constants-353d90a1.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'vue';
import { u as useHead } from './index-ca787103.mjs';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { S as StockModule$1 } from './stock-2e5686dd.mjs';
import moment from 'moment';
import { ExportToExcel, ExportToWord } from 'vue-doc-exporter';
import { P as Package } from './package-cc00c60c.mjs';
import { r as render } from './ExclamationCircleIcon-059ad4ca.mjs';
import { r as render$1 } from './CheckCircleIcon-e0bae33f.mjs';
import { a as render$4 } from './fetch-1797e116.mjs';
import { r as render$2 } from './ArchiveBoxXMarkIcon-1426f444.mjs';
import { r as render$3 } from './ArrowPathIcon-6ff7b048.mjs';
import { r as render$5 } from './DocumentTextIcon-d89971e2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-86b75328.mjs';
import { _ as _imports_0$1 } from './stock_out-9944e6b9.mjs';
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
import './CheckIcon-e4d11b9e.mjs';
import './MagnifyingGlassIcon-7f68e1d6.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './XMarkIcon-170c776f.mjs';
import './PencilSquareIcon-77446728.mjs';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main = {
  setup() {
    useHead({
      title: `${Package.name.toUpperCase()} - Stock Reports`
    });
  },
  components: { ExportToExcel, ExportToWord, ExclamationCircleIcon: render, CheckCircleIcon: render$1, ExclamationTriangleIcon: render$4, ArchiveBoxXMarkIcon: render$2 },
  data() {
    return {
      moment,
      header: "Stock Reports",
      facility: useFacilityStore(),
      tab: 0,
      generating: false,
      dateRange: [],
      pages: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "Stock Management",
          link: "#"
        }
      ],
      reportData: new Array(),
      generateIcon: render$3,
      exportIcon: render$5,
      cookie: useCookie("token"),
      transactionTypes: new Array(),
      selectedType: { name: "-- select type --" }
    };
  },
  created() {
    this.init();
  },
  computed: {
    generalStockExportData() {
      return this.reportData.map((data) => ({
        "STOCK ITEM": data.name,
        "DESCRIPTION": data.description,
        "BALANCE": data.consolidated_available_balance,
        "MINIMUM ORDER LEVEL": data.minimum_order_level,
        "LOCATION": data.stock_location,
        "CATEGORY": data.stock_category,
        "STRENGTH": data.strength,
        "BATCH": data.batch,
        "LOT NUMBER": data.lot,
        "TRANSACTION TYPE": data.transaction_type,
        "EXPIRY DATE": moment(data.expiry_date).format(dateFormat),
        "RECEIVER": data.receiving_from,
        "SENDER": data.sending_to,
        "REMAKRS": this.checkStock(data)
      }));
    },
    stockMovementExportData() {
      return this.reportData.map((data) => ({
        "Stock Item": data.name,
        "TYPE": data.transaction_type,
        "STOCK BEFORE": data.overall_stock_balance_before_transaction,
        "ADJUSTMENT": data.transacted_quantity,
        "STOCK AFTER": data.overall_stock_balance_after_transaction,
        "DATE": moment(data.transaction_date).format(dateFormat)
      }));
    },
    generalStockData() {
      return this.reportData.map((data) => ({
        ...data,
        remarks: this.checkStock(data)
      }));
    },
    getStockClass() {
      return (remarks) => {
        const lowerRemarks = (remarks || "").toLowerCase();
        if (lowerRemarks === "not expired") {
          return "text-green-600";
        } else if (lowerRemarks === "expired") {
          return "text-red-600";
        } else if (lowerRemarks === "near expiry") {
          return "text-yellow-500";
        } else if (lowerRemarks === "out of stock") {
          return "text-gray-600";
        }
        return "";
      };
    },
    getStockIcon() {
      return (remarks) => {
        const lowerRemarks = (remarks || "").toLowerCase();
        if (lowerRemarks === "not expired") {
          return "CheckCircleIcon";
        } else if (lowerRemarks === "expired" || lowerRemarks === "near expiry") {
          return "ExclamationTriangleIcon";
        } else if (lowerRemarks === "out of stock") {
          return "ArchiveBoxXMarkIcon";
        }
        return "div";
      };
    },
    getStockText() {
      return (remarks) => {
        const lowerRemarks = (remarks || "").toLowerCase();
        if (lowerRemarks === "not expired") {
          return "";
        } else if (lowerRemarks === "expired") {
          return "Expired";
        } else if (lowerRemarks === "near expiry") {
          return "Near Expiry";
        } else if (lowerRemarks === "out of stock") {
          return "Out of Stock";
        }
        return "";
      };
    }
  },
  methods: {
    checkStock(stock) {
      let status = this.checkExpiryStatus(stock);
      if (status == "Not Expired") {
        if (stock.after_transaction_remaining_balance > 0) {
          if (stock.after_transaction_remaining_balance < stock.minimum_order_level) {
            return "Low Stock";
          }
        } else {
          return "Out of Stock";
        }
      } else {
        return status;
      }
    },
    checkExpiryStatus(stockData) {
      const currentDate = /* @__PURE__ */ new Date();
      currentDate.setHours(0, 0, 0, 0);
      const expiryDate = new Date(stockData.expiry_date);
      expiryDate.setHours(0, 0, 0, 0);
      if (expiryDate < currentDate) {
        return "Expired";
      }
      const twoWeeksLater = /* @__PURE__ */ new Date();
      twoWeeksLater.setDate(currentDate.getDate() + 14);
      if (expiryDate <= twoWeeksLater) {
        return "Near Expiry";
      }
      return "Not Expired";
    },
    async init() {
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.getStockTransactionTypes(`${this.cookie}`);
      if (data.value) {
        this.transactionTypes = data.value;
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async generateStockReport() {
      this.generating = true;
      const startDate = this.dateRange !== null && this.dateRange.length > 0 ? moment(this.dateRange[0]).format("YYYY-MM-DD") : "";
      const endDate = this.dateRange !== null && this.dateRange.length > 1 ? moment(this.dateRange[1]).format("YYYY-MM-DD") : "";
      const type = this.selectedType.name == "-- select type --" ? "" : this.selectedType.name;
      const stockModule = new StockModule$1();
      const { data, error, pending } = await stockModule.generateStockMovementReport(`${this.cookie}`, type, startDate, endDate);
      this.generating = pending;
      if (data.value) {
        this.reportData = data.value.data;
        this.generating = false;
      }
      if (error.value) {
        console.error(error.value);
        this.generating = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreBreadcrumb = __nuxt_component_0;
  const _component_CoreActionButton = __nuxt_component_0$1;
  const _component_excel = resolveComponent("excel");
  const _component_datepicker = resolveComponent("datepicker");
  const _component_CoreDropdown = __nuxt_component_0$2;
  const _component_CoreLoader = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: $data.pages }, null, _parent));
  _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate($data.header)}</h3></div><div><div class="flex items-center space-x-2 bg-gray-50"><button class="${ssrRenderClass($data.tab == 0 ? `bg-sky-500 text-white py-2 px-4` : `font-medium px-4 text-gray-600 hover:text-sky-500 transition duration-150`)}"> General Stock </button><button class="${ssrRenderClass($data.tab == 1 ? `bg-sky-500 text-white py-2 px-4` : `font-medium px-4 text-gray-600 hover:text-sky-500 transition duration-150`)}"> Stock Movements </button></div>`);
  if ($data.tab == 0) {
    _push(`<div class="py-5"><div><div class="w-full flex items-center justify-between py-5"><div class="flex items-center space-x-2">`);
    _push(ssrRenderComponent(_component_CoreActionButton, {
      loading: $data.generating,
      click: () => {
        $options.generateStockReport();
      },
      text: "Generate Report",
      color: "success",
      icon: $data.generateIcon
    }, null, _parent));
    _push(`</div><div class="flex items-center space-x-2">`);
    _push(ssrRenderComponent(_component_excel, {
      class: "btn btn-default",
      header: [`GENERAL STOCK LABORATORY REPORT`, $data.facility.details.name, $data.facility.details.address, $data.facility.details.phone],
      data: $options.generalStockExportData,
      worksheet: "report-work-sheet",
      name: `general_stock_laboratory.xls`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            color: "success",
            click: () => {
            },
            icon: $data.exportIcon,
            text: "Export"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_CoreActionButton, {
              color: "success",
              click: () => {
              },
              icon: $data.exportIcon,
              text: "Export"
            }, null, 8, ["icon"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div><div id="print-container1"><table class="w-full bg-gray-50 rounded-t px-10 py-5"><tr class="flex items-center justify-between px-5"><td><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"></td><td class="py-5"><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></td></tr></table><table class="w-full"><thead class="w-full"><tr class="border bg-gray-50"><th class="px-2 py-2 text-left border-r">Stock Item</th><th class="px-2 py-2 text-left border-r">Location</th><th class="px-2 py-2 text-left border-r">Batch</th><th class="px-2 py-2 text-left border-r">Lot</th><th class="px-2 py-2 text-left border-r">Quantity</th><th class="px-2 py-2 text-left border-r">Remarks</th></tr></thead><tbody class="w-full"><!--[-->`);
    ssrRenderList($options.generalStockData, (stock) => {
      _push(`<tr class="w-full border-b"><td class="px-2 py-2 text-left border-r border-l">${ssrInterpolate(stock.name)}</td><td class="px-2 py-2 text-left border-r border-l">${ssrInterpolate(stock.stock_location)}</td><td class="px-2 py-2 text-left border-r border-l">${ssrInterpolate(stock.batch)}</td><td class="px-2 py-2 text-left border-r border-l text-green-500">#${ssrInterpolate(stock.lot)}</td><td class="px-2 py-2 text-left border-r border-l">${ssrInterpolate(stock.consolidated_available_balance)}</td><td class="px-2 py-2 text-left border-r border-l"><div class="${ssrRenderClass([$options.getStockClass(stock == null ? void 0 : stock.remarks), "flex items-center space-x-1"])}">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent($options.getStockIcon(stock == null ? void 0 : stock.remarks)), { class: "w-5 h-5" }, null), _parent);
      _push(`<p>${ssrInterpolate($options.getStockText(stock == null ? void 0 : stock.remarks))}</p></div></td></tr>`);
    });
    _push(`<!--]--></tbody></table></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.tab == 1) {
    _push(`<div class="px-3 py-3"><div><div class="flex items-center justify-between py-5"><div class="flex items-center space-x-2">`);
    _push(ssrRenderComponent(_component_datepicker, {
      position: "left",
      range: "",
      placeholder: "-- start date & end date --",
      "input-classes": "w-72 border rounded px-2 py-1.5 block font-inter focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",
      modelValue: $data.dateRange,
      "onUpdate:modelValue": ($event) => $data.dateRange = $event,
      format: "dd/MM/yyyy"
    }, null, _parent));
    _push(ssrRenderComponent(_component_CoreDropdown, {
      items: $data.transactionTypes,
      modelValue: $data.selectedType,
      "onUpdate:modelValue": ($event) => $data.selectedType = $event
    }, null, _parent));
    _push(ssrRenderComponent(_component_CoreActionButton, {
      text: "Generate",
      click: () => {
        $options.generateStockReport();
      },
      color: "success",
      icon: $data.generateIcon
    }, null, _parent));
    _push(`</div><div>`);
    _push(ssrRenderComponent(_component_excel, {
      class: "btn btn-default",
      header: [`STOCK MOVEMENT LABORATORY REPORT`, $data.facility.details.name, $data.facility.details.address, $data.facility.details.phone],
      data: $options.stockMovementExportData,
      worksheet: "report-work-sheet",
      name: `stock_movement_laboratory.xls`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_CoreActionButton, {
            color: "success",
            click: () => {
            },
            icon: $data.exportIcon,
            text: "Export"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_CoreActionButton, {
              color: "success",
              click: () => {
              },
              icon: $data.exportIcon,
              text: "Export"
            }, null, 8, ["icon"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div><div class="border rounded mt-10" id="print-container"><table class="w-full bg-gray-50 rounded-t border-b px-10 py-5"><tr class="flex items-center justify-between px-5"><td><img${ssrRenderAttr("src", _imports_0)} alt="app-logo" class="w-24 h-24 object-cover"></td><td class="py-5"><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.name)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.address)}</p><p class="uppercase font-medium">${ssrInterpolate($data.facility.details.phone)}</p><p class="uppercase font-medium underline">Laboratory Report</p></td></tr></table><div class="px-3 py-3"><div class="mb-2"><h4 class="font-medium mb-2">Stock Movement Report for Period: <span class="text-normal font-normal">${ssrInterpolate($data.dateRange !== null && $data.dateRange.length > 0 ? $data.moment($data.dateRange[0]).format("YYYY-MM-DD") : "")} - ${ssrInterpolate($data.dateRange !== null && $data.dateRange.length > 1 ? $data.moment($data.dateRange[1]).format("YYYY-MM-DD") : "")}</span></h4></div><div style="${ssrRenderStyle($data.generating ? null : { display: "none" })}" class="flex itmes-center mx-auto justify-center py-20">`);
    _push(ssrRenderComponent(_component_CoreLoader, { loading: $data.generating }, null, _parent));
    _push(`</div>`);
    if ($data.reportData.length > 0 && !$data.generating) {
      _push(`<table class="w-full"><thead class="w-full"><tr class="border bg-gray-50"><th class="px-2 py-2 text-left border-r">Stock Item</th><th class="px-2 py-2 text-left border-r">Type</th><th class="px-2 py-2 text-left border-r">Stock Before</th><th class="px-2 py-2 text-left border-r">Adjustment</th><th class="px-2 py-2 text-left border-r">Stock After</th><th class="px-2 py-2 text-left border-r">Date</th></tr></thead><tbody class="w-full"><!--[-->`);
      ssrRenderList($data.reportData, (report) => {
        _push(`<tr class="w-full border-b"><td class="px-2 py-2 text-left border-r border-l">${ssrInterpolate(report.name)}</td><td class="px-2 py-2 text-left border-r border-l">${ssrInterpolate(report.transaction_type)}</td><td class="px-2 py-2 text-left border-r border-l">${ssrInterpolate(report.overall_stock_balance_before_transaction)}</td><td class="px-2 py-2 text-left border-r border-l">${ssrInterpolate(report.transacted_quantity)}</td><td class="px-2 py-2 text-left border-r border-l">${ssrInterpolate(report.overall_stock_balance_after_transaction)}</td><td class="px-2 py-2 text-left border-r border-l">${ssrInterpolate($data.moment(report.transaction_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
    if ($data.reportData.length == 0 && !$data.generating) {
      _push(`<div class="flex flex-col space-y-3 items-center justify-center"><img${ssrRenderAttr("src", _imports_0$1)} class="w-20 h-20"><p>Please generate report data to preview the report</p></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock-management/reports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reports = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { reports as default };
//# sourceMappingURL=reports-ac8396b1.mjs.map
