import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { a as useNuxtApp, e as defineStore, p as persistedState, u as useCookie, g as useRequestFetch, b as __nuxt_component_0, _ as _export_sfc, c as createError } from '../server.mjs';
import { openBlock, createElementBlock, createElementVNode, useSSRContext, ref, unref, computed, reactive, defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, createApp, toRef, getCurrentInstance, onServerPrefetch, h, resolveComponent, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { A as hash } from '../../nitro/node-server.mjs';
import moment from 'moment';
import { b as sessionExpiryMessage, e as errorMessage, r as render$9, l as loginErrorMessage, d as dateFormat } from './constants-353d90a1.mjs';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { r as render$6 } from './XMarkIcon-170c776f.mjs';
import { a as render$1$1, r as render$7 } from './PencilSquareIcon-77446728.mjs';
import { r as render$8 } from './PrinterIcon-02ac6ae4.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a = options.server) != null ? _a : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.lazy = (_c = options.lazy) != null ? _c : false;
  options.immediate = (_d = options.immediate) != null ? _d : true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref((_e = getCachedData()) != null ? _e : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    createElementVNode("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", { d: "M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" })
  ]);
}
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
const instrumentService = {
  instrument: {
    index: `instruments`,
    list: `instruments/list`,
    create: `instruments`,
    show: `instruments`,
    edit: `instruments`,
    update: `instruments`,
    delete: `instruments`
  }
};
const specimensLifespanService = {
  specimensLifespan: {
    index: `specimen_test_type_mappings`,
    create: `specimen_test_type_mappings`,
    show: `specimen_test_type_mappings`,
    edit: `specimen_test_type_mappings`,
    update: `specimen_test_type_mappings`,
    delete: `specimen_test_type_mappings`
  }
};
const surveillanceService = {
  surveillance: {
    index: `surveillances`,
    create: `surveillances`,
    show: `surveillances`,
    edit: `surveillances`,
    update: `surveillances`,
    delete: `surveillances`
  },
  disease: {
    index: `diseases`,
    list: `diseases/list`,
    create: `diseases`,
    show: `diseases`,
    edit: `diseases`,
    update: `diseases`,
    delete: `diseases`
  }
};
const endpoints = {
  global: `global`,
  login: `auth/login`,
  refreshToken: `auth/refresh_token`,
  departments: `departments`,
  testTypes: `test_types`,
  viewTestType: `test_types`,
  testTypesIndicators: `test_indicator_types`,
  specimens: `specimen`,
  drugs: `drugs`,
  organisms: `organisms`,
  testPanels: `test_panels`,
  rejectionReasons: `status_reasons`,
  /**
  * User Management
  */
  users: `users`,
  roles: `roles`,
  privileges: `privileges`,
  /***
  * Client Management
  */
  client: {
    search: `clients/search_dde`
  },
  clients: `clients`,
  /***
  * Instrument Management
  */
  ...instrumentService,
  /***
  * surveillance Management
  */
  ...surveillanceService,
  /***
  * surveillance Management
  */
  ...specimensLifespanService,
  /**
  * Lab Configurations
  */
  visitTypes: `encounter_types`,
  facility: `facilities`,
  sections: `facility_sections`,
  /**
  * Fetch Test Results
  */
  fetchResults: `interfacer/fetch_results`,
  /**
  * Test statuses
  */
  testStatus: `test_statuses`,
  addTestOrder: `orders/add_test_to_order`,
  specimenTestTypes: `specimen/test_types`,
  /**
  * Results available
  */
  resultsAvailable: `interfacer/result_available`,
  /*
  * Tests Module
  */
  tests: `tests`,
  orderStatus: `order_statuses`,
  nlimsTestSearch: `orders/search_order_from_nlims_by_tracking_number`,
  /*
  * Update Tests results
  */
  updateResults: `test_results`,
  cultureObservations: `culture_observations`,
  drugSusceptibility: `culture_observations/drug_susceptibility_test_results`,
  /*
  * Update Tests results
  */
  authoriseTest: `interfacer`,
  /*
  * Printers
  */
  printers: `printers`,
  printOut: `printout/patient_report`,
  generalPrint: `printout/general_report`,
  printOutZebra: `printout/patient_zebra_report`,
  /***
   * Reports
   */
  reportIndicators: `moh_reports/report_indicators`,
  mohReport: `moh_reports/`,
  dailyReports: `/reports/daily_reports/`,
  aggregateReports: `/reports/aggregate/`,
  mergeOrder: `orders/merge_order_from_nlims`,
  /**
   * Analytics
   */
  analytics: `analytics`
};
function parameterizeURL(url, params) {
  if (isEmpty(params))
    return url;
  return url + "?" + Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
}
function expandUrl(url) {
  return url;
}
const Api = new class Api2 {
  getJson(url, params = {}) {
    var _a;
    return fetchRequest({
      route: parameterizeURL(expandUrl(url), params),
      method: "GET",
      token: ((_a = useCookie("token")) == null ? void 0 : _a.value) || "",
      body: {}
    }).then(({ data, error }) => {
      if (error.value)
        throw error.value.data;
      if (data.value)
        return data.value;
    }).catch((err) => {
      console.error(err);
      useNuxtApp().$toast.error(`${errorMessage}`);
    });
  }
  postJson(url, data, params = {}) {
    var _a;
    return fetchRequest({
      route: parameterizeURL(expandUrl(url), params),
      method: "POST",
      token: ((_a = useCookie("token")) == null ? void 0 : _a.value) || "",
      body: data
    }).then(({ data: data2, error }) => {
      if (error.value)
        throw error.value.data;
      if (data2.value)
        return data2.value;
    }).catch((err) => {
      console.error(err);
      useNuxtApp().$toast.error(`${errorMessage}`);
    });
  }
}();
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ConfirmationDialog",
  __ssrInlineRender: true,
  props: {
    title: {},
    message: {},
    show: { type: Boolean },
    color: {},
    useYesNoBtns: { type: Boolean }
  },
  emits: ["cancel", "confirm"],
  setup(__props) {
    const props = __props;
    const btnLabels = computed(
      () => props.useYesNoBtns === true ? { confirm: "Yes", cancel: "No" } : { confirm: "Confirm", cancel: "Cancel" }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreActionButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: _ctx.show,
        as: "template"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              class: "relative z-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
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
                  _push3(ssrRenderComponent(unref(TransitionChild), {
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
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(render$4), { class: "h-5 w-5 mr-2" }, null, _parent6, _scopeId5));
                                    _push6(` ${ssrInterpolate(_ctx.title || "Confirmation")}`);
                                  } else {
                                    return [
                                      createVNode(unref(render$4), { class: "h-5 w-5 mr-2" }),
                                      createTextVNode(" " + toDisplayString(_ctx.title || "Confirmation"), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<button${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(render$6), { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                              _push5(`</button></div><div class="px-4 py-6"${_scopeId4}>${ssrInterpolate(_ctx.message)}</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_CoreActionButton, {
                                click: () => _ctx.$emit("cancel"),
                                text: unref(btnLabels).cancel,
                                color: "primary"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_CoreActionButton, {
                                click: () => _ctx.$emit("confirm"),
                                text: unref(btnLabels).confirm,
                                color: "success"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-lg flex items-center font-medium leading-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(render$4), { class: "h-5 w-5 mr-2" }),
                                      createTextVNode(" " + toDisplayString(_ctx.title || "Confirmation"), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", {
                                    onClick: () => _ctx.$emit("cancel")
                                  }, [
                                    createVNode(unref(render$6), { class: "w-5 h-5" })
                                  ], 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "px-4 py-6" }, toDisplayString(_ctx.message), 1),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                  createVNode(_component_CoreActionButton, {
                                    click: () => _ctx.$emit("cancel"),
                                    text: unref(btnLabels).cancel,
                                    color: "primary"
                                  }, null, 8, ["click", "text"]),
                                  createVNode(_component_CoreActionButton, {
                                    click: () => _ctx.$emit("confirm"),
                                    text: unref(btnLabels).confirm,
                                    color: "success"
                                  }, null, 8, ["click", "text"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-lg flex items-center font-medium leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(render$4), { class: "h-5 w-5 mr-2" }),
                                    createTextVNode(" " + toDisplayString(_ctx.title || "Confirmation"), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", {
                                  onClick: () => _ctx.$emit("cancel")
                                }, [
                                  createVNode(unref(render$6), { class: "w-5 h-5" })
                                ], 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "px-4 py-6" }, toDisplayString(_ctx.message), 1),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                createVNode(_component_CoreActionButton, {
                                  click: () => _ctx.$emit("cancel"),
                                  text: unref(btnLabels).cancel,
                                  color: "primary"
                                }, null, 8, ["click", "text"]),
                                createVNode(_component_CoreActionButton, {
                                  click: () => _ctx.$emit("confirm"),
                                  text: unref(btnLabels).confirm,
                                  color: "success"
                                }, null, 8, ["click", "text"])
                              ])
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
                    createVNode(unref(TransitionChild), {
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
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-lg flex items-center font-medium leading-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(render$4), { class: "h-5 w-5 mr-2" }),
                                      createTextVNode(" " + toDisplayString(_ctx.title || "Confirmation"), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", {
                                    onClick: () => _ctx.$emit("cancel")
                                  }, [
                                    createVNode(unref(render$6), { class: "w-5 h-5" })
                                  ], 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "px-4 py-6" }, toDisplayString(_ctx.message), 1),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                  createVNode(_component_CoreActionButton, {
                                    click: () => _ctx.$emit("cancel"),
                                    text: unref(btnLabels).cancel,
                                    color: "primary"
                                  }, null, 8, ["click", "text"]),
                                  createVNode(_component_CoreActionButton, {
                                    click: () => _ctx.$emit("confirm"),
                                    text: unref(btnLabels).confirm,
                                    color: "success"
                                  }, null, 8, ["click", "text"])
                                ])
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
              createVNode(unref(Dialog), {
                as: "div",
                class: "relative z-10"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
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
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-lg flex items-center font-medium leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(render$4), { class: "h-5 w-5 mr-2" }),
                                    createTextVNode(" " + toDisplayString(_ctx.title || "Confirmation"), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", {
                                  onClick: () => _ctx.$emit("cancel")
                                }, [
                                  createVNode(unref(render$6), { class: "w-5 h-5" })
                                ], 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "px-4 py-6" }, toDisplayString(_ctx.message), 1),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50" }, [
                                createVNode(_component_CoreActionButton, {
                                  click: () => _ctx.$emit("cancel"),
                                  text: unref(btnLabels).cancel,
                                  color: "primary"
                                }, null, 8, ["click", "text"]),
                                createVNode(_component_CoreActionButton, {
                                  click: () => _ctx.$emit("confirm"),
                                  text: unref(btnLabels).confirm,
                                  color: "success"
                                }, null, 8, ["click", "text"])
                              ])
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/ConfirmationDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0$1 = "" + buildAssetsURL("zebra-label-printer.03eb4647.jpeg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PrintingStatus",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: _ctx.show,
        as: "template"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              class: "relative z-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
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
                  _push3(ssrRenderComponent(unref(TransitionChild), {
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
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all py-20" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-36 object-cover mx-auto"${_scopeId4}><h1 class="text-center my-5 mx-auto text-2xl"${_scopeId4}>Printing...</h1>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-36 object-cover mx-auto"
                                }),
                                createVNode("h1", { class: "text-center my-5 mx-auto text-2xl" }, "Printing...")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all py-20" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: _imports_0$1,
                                class: "w-36 object-cover mx-auto"
                              }),
                              createVNode("h1", { class: "text-center my-5 mx-auto text-2xl" }, "Printing...")
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
                    createVNode(unref(TransitionChild), {
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
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all py-20" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "w-36 object-cover mx-auto"
                                }),
                                createVNode("h1", { class: "text-center my-5 mx-auto text-2xl" }, "Printing...")
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
              createVNode(unref(Dialog), {
                as: "div",
                class: "relative z-10"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
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
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all py-20" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: _imports_0$1,
                                class: "w-36 object-cover mx-auto"
                              }),
                              createVNode("h1", { class: "text-center my-5 mx-auto text-2xl" }, "Printing...")
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/PrintingStatus.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function useAlert() {
  const show = ref(false);
  const mountComponent = (component, rootContainer) => createApp(component).mount(rootContainer);
  const destroyModal = (modal) => document.body.removeChild(modal);
  const createModal = () => {
    const modal = document.createElement("div");
    modal.id = "modal-wrapper-div";
    document.body.appendChild(modal);
    return modal;
  };
  const resolveComponent2 = (component, props) => ({
    render: () => h(component, {
      ...props,
      show: show.value
    })
  });
  const alertConfirmation = async (opts) => {
    const modal = createModal();
    const confirmed = await new Promise((resolve) => {
      const component = /* @__PURE__ */ defineComponent({
        extends: resolveComponent2(_sfc_main$2, {
          onConfirm: () => resolve(true),
          onCancel: () => resolve(false),
          ...opts
        })
      });
      mountComponent(component, modal);
      show.value = true;
    });
    show.value = false;
    destroyModal(modal);
    return confirmed;
  };
  const showPrinterStatus2 = async () => {
    const statusBox = createModal();
    const component = /* @__PURE__ */ defineComponent({ extends: resolveComponent2(_sfc_main$1) });
    mountComponent(component, statusBox);
    show.value = true;
    return statusBox;
  };
  const hidePrinterStatus2 = (statusBox) => {
    show.value = false;
    document.body.removeChild(statusBox);
  };
  return {
    alertConfirmation,
    showPrinterStatus: showPrinterStatus2,
    hidePrinterStatus: hidePrinterStatus2
  };
}
const { showPrinterStatus, hidePrinterStatus } = useAlert();
const PrinterService = new class PrinterService2 {
  async writeLbl(url, params, filename = `${Date.now()}.lbl`) {
    const statusModal = await showPrinterStatus();
    try {
      const res = await Api.getJson(url, params);
      url = URL.createObjectURL(res);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.click();
      URL.revokeObjectURL(url);
      await delay(2e3);
    } catch (error) {
      console.error(error);
      useNuxtApp().$toast.error("Unable to print the label");
    }
    hidePrinterStatus(statusModal);
  }
  printSpecimenLabel(accession_number) {
    return this.writeLbl("printout/accession_number", { accession_number }, `${accession_number}.lbl`);
  }
  printTrackingNumber(tracking_number) {
    return this.writeLbl("printout/tracking_number", { tracking_number }, `${tracking_number}.lbl`);
  }
}();
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render$6,
    PhoneIcon: render$1,
    EnvelopeIcon: render$5,
    MapPinIcon: render$2
  },
  data() {
    return {
      moment,
      viewIcon: render$1$1,
      show: this.open,
      addIcon: render,
      editIcon: render$7,
      acceptIcon: render$3,
      printerIcon: render$8,
      arrowIcon: render$9,
      cookie: useCookie("token"),
      details: {},
      loading: false
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    updateChanges() {
      this.show = false;
      this.$emit("update", true);
    },
    handleClick() {
      this.show = !this.show;
    },
    printAccessionNumber() {
      return PrinterService.printSpecimenLabel(this.details.accession_number);
    },
    printTrackingNumber() {
      return PrinterService.printTrackingNumber(this.details.tracking_number);
    },
    viewReport() {
      return this.$router.push(
        `/reports/daily/patient-report-details/${this.details.client.id}?order_id=${this.details.order_id}`
      );
    },
    getRequestedBy(values) {
      let name = "";
      values.map((item) => {
        if (item.status.name === "pending") {
          name = `${item.initiator.first_name} ${item.initiator.last_name}`;
        }
      });
      return capitalize(name);
    },
    getResults(data) {
      let returnValue = new Array();
      for (const test of data.tests) {
        const testType = test.test_type;
        if (data.results.hasOwnProperty(testType)) {
          const resultData = data.results[testType];
          resultData.result_date;
          returnValue.push(resultData);
        }
      }
      return returnValue;
    },
    async mergeOrder() {
      this.loading = true;
      const request = {
        route: endpoints.mergeOrder,
        method: "POST",
        token: `${this.cookie}`,
        body: this.data
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        useNuxtApp().$toast.success("Order merged successfully!");
        this.loading = false;
        this.handleClick();
      }
      if (error.value) {
        this.loading = false;
        useNuxtApp().$toast.error(errorMessage);
        console.error(error.value);
        this.handleClick();
      }
    }
  }
});
const _imports_0 = "" + buildAssetsURL("medical_records.33dccf1f.svg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_CoreActionButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: _ctx.show,
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
              _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center text-center"${_scopeId2}>`);
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
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-7xl m-20 transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> NLIMS Test Details `);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" NLIMS Test Details ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div><div class="grid grid-cols-3 gap-4 px-5 py-5"${_scopeId4}><div class="rounded border"${_scopeId4}><div class="px-4 py-2 bg-gray-50 border-b"${_scopeId4}><h3 class="text-lg font-semibold text-gray-600"${_scopeId4}> Patient </h3></div><div class="w-full space-y-2 py-2"${_scopeId4}><div class="w-full flex justify-between px-5 py-2"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Patient Number</h3><p${_scopeId4}>${ssrInterpolate(_ctx.data.patient_identifiers.npid)}</p></div><div class="w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Name</h3><p${_scopeId4}>${ssrInterpolate(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(
                            `${_ctx.data.patient.first_name} ${_ctx.data.patient.middle_name}
                                                            ${_ctx.data.patient.last_name}`
                          ))}</p></div><div class="w-full flex justify-between px-5 py-2"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Sex</h3><p${_scopeId4}>${ssrInterpolate(_ctx.data.patient.sex)}</p></div><div class="w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Age</h3><p${_scopeId4}>${ssrInterpolate(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))(_ctx.data.patient.date_of_birth))}</p></div></div></div><div class="rounded border"${_scopeId4}><div class="px-4 py-2 bg-gray-50 border-b"${_scopeId4}><h3 class="text-lg font-semibold text-gray-600"${_scopeId4}> Specimen </h3></div><div class="w-full space-y-2 py-2"${_scopeId4}><div class="w-full flex justify-between px-5 py-2"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Specimen Type</h3><p${_scopeId4}>${ssrInterpolate(_ctx.data.specimen)}</p></div><div class="w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Tracking Number</h3><p${_scopeId4}>${ssrInterpolate(_ctx.data.tracking_number)}</p></div><div class="w-full flex justify-between px-5 py-2"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Accession Number</h3><p${_scopeId4}>${ssrInterpolate(_ctx.data.accession_number)}</p></div><div class="w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Status</h3><p${_scopeId4}>${ssrInterpolate(_ctx.data.order_status)}</p></div></div></div><div class="rounded border max-h-72 overflow-y-auto"${_scopeId4}><div class="px-4 py-2 bg-gray-50 border-b"${_scopeId4}><h3 class="text-lg font-semibold text-gray-600"${_scopeId4}>Test</h3></div><div class="w-full space-y-2 py-2"${_scopeId4}><div class="w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Name</h3><!--[-->`);
                          ssrRenderList(_ctx.data.tests, (test, index) => {
                            _push5(`<p${_scopeId4}>${ssrInterpolate(test.test_type)}</p>`);
                          });
                          _push5(`<!--]--></div><div class="w-full flex justify-between px-5 py-2"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Date Registered</h3><p${_scopeId4}>${ssrInterpolate(_ctx.moment(_ctx.data.order_created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div><div class="w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Receipt Date</h3><p${_scopeId4}>${ssrInterpolate(_ctx.moment(_ctx.data.order_created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat)))}</p></div><div class="w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Ward/Location</h3><p${_scopeId4}>${ssrInterpolate(_ctx.data.facility_section)}</p></div><div class="w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Sending Facility</h3><p${_scopeId4}>${ssrInterpolate(_ctx.data.sending_facility)}</p></div><div class="w-full flex justify-between px-5 py-2"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Registered By</h3><p${_scopeId4}>${ssrInterpolate(_ctx.data.collected_by)}</p></div><div class="w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted"${_scopeId4}><h3 class="font-semibold"${_scopeId4}>Requested By</h3><p${_scopeId4}>${ssrInterpolate(_ctx.data.requested_by)}</p></div></div></div></div><div class="mx-5 rounded border mb-5"${_scopeId4}><div class="flex items-center justify-between bg-gray-50 px-4 py-2 border-b rounded-t"${_scopeId4}><h3 class="text-lg font-semibold text-gray-600"${_scopeId4}>Results</h3><div class="justify-end flex items-center space-x-3"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_CoreActionButton, {
                            loading: _ctx.loading,
                            icon: _ctx.arrowIcon,
                            color: "success",
                            text: "Proceed",
                            click: _ctx.mergeOrder
                          }, null, _parent5, _scopeId4));
                          _push5(`</div></div><!--[-->`);
                          ssrRenderList(_ctx.getResults(_ctx.data)[0], (value, key) => {
                            _push5(`<div${_scopeId4}>`);
                            if (key.toString().toLowerCase() !== "result_date") {
                              _push5(`<div class="${ssrRenderClass("w-full px-5 py-2 mt-2 mb-2 border-b border-dotted flex justify-between items-center")}"${_scopeId4}><h3${_scopeId4}>${ssrInterpolate(key)}</h3><div${_scopeId4}><p${_scopeId4}>${ssrInterpolate(value)}</p></div></div>`);
                            } else {
                              _push5(`<!---->`);
                            }
                            _push5(`</div>`);
                          });
                          _push5(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" NLIMS Test Details ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: _ctx.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "grid grid-cols-3 gap-4 px-5 py-5" }, [
                              createVNode("div", { class: "rounded border" }, [
                                createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, " Patient ")
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Patient Number"),
                                    createVNode("p", null, toDisplayString(_ctx.data.patient_identifiers.npid), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Name"),
                                    createVNode("p", null, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(
                                      `${_ctx.data.patient.first_name} ${_ctx.data.patient.middle_name}
                                                            ${_ctx.data.patient.last_name}`
                                    )), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Sex"),
                                    createVNode("p", null, toDisplayString(_ctx.data.patient.sex), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Age"),
                                    createVNode("p", null, toDisplayString(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))(_ctx.data.patient.date_of_birth)), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border" }, [
                                createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, " Specimen ")
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Specimen Type"),
                                    createVNode("p", null, toDisplayString(_ctx.data.specimen), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Tracking Number"),
                                    createVNode("p", null, toDisplayString(_ctx.data.tracking_number), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Accession Number"),
                                    createVNode("p", null, toDisplayString(_ctx.data.accession_number), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Status"),
                                    createVNode("p", null, toDisplayString(_ctx.data.order_status), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border max-h-72 overflow-y-auto" }, [
                                createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, "Test")
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Name"),
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.tests, (test, index) => {
                                      return openBlock(), createBlock("p", { key: index }, toDisplayString(test.test_type), 1);
                                    }), 128))
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Date Registered"),
                                    createVNode("p", null, toDisplayString(_ctx.moment(_ctx.data.order_created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Receipt Date"),
                                    createVNode("p", null, toDisplayString(_ctx.moment(_ctx.data.order_created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Ward/Location"),
                                    createVNode("p", null, toDisplayString(_ctx.data.facility_section), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Sending Facility"),
                                    createVNode("p", null, toDisplayString(_ctx.data.sending_facility), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Registered By"),
                                    createVNode("p", null, toDisplayString(_ctx.data.collected_by), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Requested By"),
                                    createVNode("p", null, toDisplayString(_ctx.data.requested_by), 1)
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mx-5 rounded border mb-5" }, [
                              createVNode("div", { class: "flex items-center justify-between bg-gray-50 px-4 py-2 border-b rounded-t" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, "Results"),
                                createVNode("div", { class: "justify-end flex items-center space-x-3" }, [
                                  createVNode(_component_CoreActionButton, {
                                    loading: _ctx.loading,
                                    icon: _ctx.arrowIcon,
                                    color: "success",
                                    text: "Proceed",
                                    click: _ctx.mergeOrder
                                  }, null, 8, ["loading", "icon", "click"])
                                ])
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.getResults(_ctx.data)[0], (value, key) => {
                                return openBlock(), createBlock("div", { key }, [
                                  key.toString().toLowerCase() !== "result_date" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "w-full px-5 py-2 mt-2 mb-2 border-b border-dotted flex justify-between items-center"
                                  }, [
                                    createVNode("h3", null, toDisplayString(key), 1),
                                    createVNode("div", null, [
                                      createVNode("p", null, toDisplayString(value), 1)
                                    ])
                                  ])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-7xl m-20 transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" NLIMS Test Details ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: _ctx.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "grid grid-cols-3 gap-4 px-5 py-5" }, [
                            createVNode("div", { class: "rounded border" }, [
                              createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, " Patient ")
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Patient Number"),
                                  createVNode("p", null, toDisplayString(_ctx.data.patient_identifiers.npid), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Name"),
                                  createVNode("p", null, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(
                                    `${_ctx.data.patient.first_name} ${_ctx.data.patient.middle_name}
                                                            ${_ctx.data.patient.last_name}`
                                  )), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Sex"),
                                  createVNode("p", null, toDisplayString(_ctx.data.patient.sex), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Age"),
                                  createVNode("p", null, toDisplayString(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))(_ctx.data.patient.date_of_birth)), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "rounded border" }, [
                              createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, " Specimen ")
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Specimen Type"),
                                  createVNode("p", null, toDisplayString(_ctx.data.specimen), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Tracking Number"),
                                  createVNode("p", null, toDisplayString(_ctx.data.tracking_number), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Accession Number"),
                                  createVNode("p", null, toDisplayString(_ctx.data.accession_number), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Status"),
                                  createVNode("p", null, toDisplayString(_ctx.data.order_status), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "rounded border max-h-72 overflow-y-auto" }, [
                              createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, "Test")
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Name"),
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.tests, (test, index) => {
                                    return openBlock(), createBlock("p", { key: index }, toDisplayString(test.test_type), 1);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Date Registered"),
                                  createVNode("p", null, toDisplayString(_ctx.moment(_ctx.data.order_created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Receipt Date"),
                                  createVNode("p", null, toDisplayString(_ctx.moment(_ctx.data.order_created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Ward/Location"),
                                  createVNode("p", null, toDisplayString(_ctx.data.facility_section), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Sending Facility"),
                                  createVNode("p", null, toDisplayString(_ctx.data.sending_facility), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Registered By"),
                                  createVNode("p", null, toDisplayString(_ctx.data.collected_by), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Requested By"),
                                  createVNode("p", null, toDisplayString(_ctx.data.requested_by), 1)
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mx-5 rounded border mb-5" }, [
                            createVNode("div", { class: "flex items-center justify-between bg-gray-50 px-4 py-2 border-b rounded-t" }, [
                              createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, "Results"),
                              createVNode("div", { class: "justify-end flex items-center space-x-3" }, [
                                createVNode(_component_CoreActionButton, {
                                  loading: _ctx.loading,
                                  icon: _ctx.arrowIcon,
                                  color: "success",
                                  text: "Proceed",
                                  click: _ctx.mergeOrder
                                }, null, 8, ["loading", "icon", "click"])
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.getResults(_ctx.data)[0], (value, key) => {
                              return openBlock(), createBlock("div", { key }, [
                                key.toString().toLowerCase() !== "result_date" ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "w-full px-5 py-2 mt-2 mb-2 border-b border-dotted flex justify-between items-center"
                                }, [
                                  createVNode("h3", null, toDisplayString(key), 1),
                                  createVNode("div", null, [
                                    createVNode("p", null, toDisplayString(value), 1)
                                  ])
                                ])) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 2
                      }, 1024)
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
                  createVNode("div", { class: "flex min-h-full items-center justify-center text-center" }, [
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
                        createVNode(_component_DialogPanel, { class: "w-full max-w-7xl m-20 transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-8 h-8 mr-2"
                                  }),
                                  createTextVNode(" NLIMS Test Details ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: _ctx.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "grid grid-cols-3 gap-4 px-5 py-5" }, [
                              createVNode("div", { class: "rounded border" }, [
                                createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, " Patient ")
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Patient Number"),
                                    createVNode("p", null, toDisplayString(_ctx.data.patient_identifiers.npid), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Name"),
                                    createVNode("p", null, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(
                                      `${_ctx.data.patient.first_name} ${_ctx.data.patient.middle_name}
                                                            ${_ctx.data.patient.last_name}`
                                    )), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Sex"),
                                    createVNode("p", null, toDisplayString(_ctx.data.patient.sex), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Age"),
                                    createVNode("p", null, toDisplayString(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))(_ctx.data.patient.date_of_birth)), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border" }, [
                                createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, " Specimen ")
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Specimen Type"),
                                    createVNode("p", null, toDisplayString(_ctx.data.specimen), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Tracking Number"),
                                    createVNode("p", null, toDisplayString(_ctx.data.tracking_number), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Accession Number"),
                                    createVNode("p", null, toDisplayString(_ctx.data.accession_number), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Status"),
                                    createVNode("p", null, toDisplayString(_ctx.data.order_status), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "rounded border max-h-72 overflow-y-auto" }, [
                                createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                  createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, "Test")
                                ]),
                                createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Name"),
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.tests, (test, index) => {
                                      return openBlock(), createBlock("p", { key: index }, toDisplayString(test.test_type), 1);
                                    }), 128))
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Date Registered"),
                                    createVNode("p", null, toDisplayString(_ctx.moment(_ctx.data.order_created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Receipt Date"),
                                    createVNode("p", null, toDisplayString(_ctx.moment(_ctx.data.order_created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Ward/Location"),
                                    createVNode("p", null, toDisplayString(_ctx.data.facility_section), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Sending Facility"),
                                    createVNode("p", null, toDisplayString(_ctx.data.sending_facility), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Registered By"),
                                    createVNode("p", null, toDisplayString(_ctx.data.collected_by), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                    createVNode("h3", { class: "font-semibold" }, "Requested By"),
                                    createVNode("p", null, toDisplayString(_ctx.data.requested_by), 1)
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mx-5 rounded border mb-5" }, [
                              createVNode("div", { class: "flex items-center justify-between bg-gray-50 px-4 py-2 border-b rounded-t" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, "Results"),
                                createVNode("div", { class: "justify-end flex items-center space-x-3" }, [
                                  createVNode(_component_CoreActionButton, {
                                    loading: _ctx.loading,
                                    icon: _ctx.arrowIcon,
                                    color: "success",
                                    text: "Proceed",
                                    click: _ctx.mergeOrder
                                  }, null, 8, ["loading", "icon", "click"])
                                ])
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.getResults(_ctx.data)[0], (value, key) => {
                                return openBlock(), createBlock("div", { key }, [
                                  key.toString().toLowerCase() !== "result_date" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "w-full px-5 py-2 mt-2 mb-2 border-b border-dotted flex justify-between items-center"
                                  }, [
                                    createVNode("h3", null, toDisplayString(key), 1),
                                    createVNode("div", null, [
                                      createVNode("p", null, toDisplayString(value), 1)
                                    ])
                                  ])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
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
                createVNode("div", { class: "flex min-h-full items-center justify-center text-center" }, [
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-7xl m-20 transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-8 h-8 mr-2"
                                }),
                                createTextVNode(" NLIMS Test Details ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: _ctx.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "grid grid-cols-3 gap-4 px-5 py-5" }, [
                            createVNode("div", { class: "rounded border" }, [
                              createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, " Patient ")
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Patient Number"),
                                  createVNode("p", null, toDisplayString(_ctx.data.patient_identifiers.npid), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Name"),
                                  createVNode("p", null, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(
                                    `${_ctx.data.patient.first_name} ${_ctx.data.patient.middle_name}
                                                            ${_ctx.data.patient.last_name}`
                                  )), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Sex"),
                                  createVNode("p", null, toDisplayString(_ctx.data.patient.sex), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Age"),
                                  createVNode("p", null, toDisplayString(("calculateAge" in _ctx ? _ctx.calculateAge : unref(calculateAge))(_ctx.data.patient.date_of_birth)), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "rounded border" }, [
                              createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, " Specimen ")
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Specimen Type"),
                                  createVNode("p", null, toDisplayString(_ctx.data.specimen), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Tracking Number"),
                                  createVNode("p", null, toDisplayString(_ctx.data.tracking_number), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Accession Number"),
                                  createVNode("p", null, toDisplayString(_ctx.data.accession_number), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Status"),
                                  createVNode("p", null, toDisplayString(_ctx.data.order_status), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "rounded border max-h-72 overflow-y-auto" }, [
                              createVNode("div", { class: "px-4 py-2 bg-gray-50 border-b" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, "Test")
                              ]),
                              createVNode("div", { class: "w-full space-y-2 py-2" }, [
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Name"),
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.tests, (test, index) => {
                                    return openBlock(), createBlock("p", { key: index }, toDisplayString(test.test_type), 1);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Date Registered"),
                                  createVNode("p", null, toDisplayString(_ctx.moment(_ctx.data.order_created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Receipt Date"),
                                  createVNode("p", null, toDisplayString(_ctx.moment(_ctx.data.order_created_date).format("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Ward/Location"),
                                  createVNode("p", null, toDisplayString(_ctx.data.facility_section), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Sending Facility"),
                                  createVNode("p", null, toDisplayString(_ctx.data.sending_facility), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Registered By"),
                                  createVNode("p", null, toDisplayString(_ctx.data.collected_by), 1)
                                ]),
                                createVNode("div", { class: "w-full flex justify-between px-5 py-2 bg-gray-50 border-t border-b border-dotted" }, [
                                  createVNode("h3", { class: "font-semibold" }, "Requested By"),
                                  createVNode("p", null, toDisplayString(_ctx.data.requested_by), 1)
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mx-5 rounded border mb-5" }, [
                            createVNode("div", { class: "flex items-center justify-between bg-gray-50 px-4 py-2 border-b rounded-t" }, [
                              createVNode("h3", { class: "text-lg font-semibold text-gray-600" }, "Results"),
                              createVNode("div", { class: "justify-end flex items-center space-x-3" }, [
                                createVNode(_component_CoreActionButton, {
                                  loading: _ctx.loading,
                                  icon: _ctx.arrowIcon,
                                  color: "success",
                                  text: "Proceed",
                                  click: _ctx.mergeOrder
                                }, null, 8, ["loading", "icon", "click"])
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.getResults(_ctx.data)[0], (value, key) => {
                              return openBlock(), createBlock("div", { key }, [
                                key.toString().toLowerCase() !== "result_date" ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "w-full px-5 py-2 mt-2 mb-2 border-b border-dotted flex justify-between items-center"
                                }, [
                                  createVNode("h3", null, toDisplayString(key), 1),
                                  createVNode("div", null, [
                                    createVNode("p", null, toDisplayString(value), 1)
                                  ])
                                ])) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])
            ]),
            _: 2
          }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tests/nlims-dialog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TestsViewDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
function interceptor(statusCode) {
  if (statusCode === 401) {
    return true;
  } else {
    return false;
  }
}
function calculateAge(date) {
  return moment().diff(date, "years");
}
function isEmpty(value) {
  if (value === null || value === void 0)
    return true;
  if (typeof value === "string" || Array.isArray(value) || typeof value.splice === "function")
    return !value.length;
  if (typeof value === "object")
    return !Object.keys(value).length;
  return false;
}
function filterArrays(raw, items) {
  let filteredArray = new Array();
  items.map((name) => {
    const obj = raw.filter((obj2) => obj2.name === name);
    filteredArray.push(obj[0].id);
  });
  return filteredArray;
}
function reverseFilterArrays(raw) {
  let model = raw.map((item) => item.name);
  return model;
}
const getParameterizedUrl = (url, params = {}) => {
  const hasParams = Object.keys(params).length > 0;
  if (!hasParams) {
    return url;
  }
  const queryParams = Object.entries(params).filter(([, value]) => Boolean(value)).map(([key, value]) => `${key}=${value}`).join("&");
  const delimiter = url.includes("?") ? "&" : "?";
  return `${url}${delimiter}${queryParams}`;
};
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
function capitalize(name) {
  const nameParts = name.toLowerCase().split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];
  let middleName = "";
  if (nameParts.length > 2) {
    middleName = nameParts.slice(1, -1).join(" ");
  }
  return `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${middleName.length > 0 ? middleName.charAt(0).toUpperCase() + middleName.slice(1) + " " : ""}${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`;
}
function showTestDetails(details) {
  let testsContainer = document.getElementById("tests-container");
  console.log(testsContainer);
  const app = createApp(TestsViewDialog, { data: details, open: true });
  app.mount(testsContainer, false);
}
function TranslateDepartments(str, t) {
  var chatranslate = "";
  str = str.trim();
  switch (str) {
    case "-- select department --":
      chatranslate = t("select_department");
      break;
    case "Parasitology":
      chatranslate = t("parasitology");
      break;
    case "Microbiology":
      chatranslate = t("microbiology");
      break;
    case "Haematology":
      chatranslate = t("haematology");
      break;
    case "Serology":
      chatranslate = t("serology");
      break;
    case "Blood Bank":
      chatranslate = t("blood_bank");
      break;
    case "Lab Reception":
      chatranslate = t("lab_reception");
      break;
    case "Biochemistry":
      chatranslate = t("biochemistry");
      break;
    case "Flow Cytometry":
      chatranslate = t("flow_cytometry");
      break;
    case "DNA/PCR":
      chatranslate = t("DNA_PCR");
      break;
    case "Immunochemistry":
      chatranslate = t("immunochemistry");
      break;
    case "Paediatric Lab":
      chatranslate = t("paediatric_lab");
      break;
    case "Archives":
      chatranslate = t("archives");
      break;
    default:
      chatranslate = str;
  }
  return chatranslate;
}
function StatusList(str, t) {
  var chatranslate = "";
  str = str.trim();
  switch (str) {
    case "select status":
      chatranslate = t("select_status");
      break;
    case "Not-received":
      chatranslate = t("Not_received");
      break;
    case "Pending":
      chatranslate = t("Pending");
      break;
    case "Started":
      chatranslate = t("Started");
      break;
    case "Completed":
      chatranslate = t("Completed");
      break;
    case "Verified":
      chatranslate = t("Verified");
      break;
    case "Voided":
      chatranslate = t("Voided");
      break;
    case "Not-done":
      chatranslate = t("Not_done");
      break;
    case "Test-rejected":
      chatranslate = t("Test_rejected");
      break;
    case "DNA/PCR":
      chatranslate = t("DNA_PCR");
      break;
    case "Immunochemistry":
      chatranslate = t("immunochemistry");
      break;
    case "Paediatric Lab":
      chatranslate = t("paediatric_lab");
      break;
    case "Archives":
      chatranslate = t("archives");
      break;
    default:
      chatranslate = str;
  }
  return chatranslate;
}
const ip = "0.0.0.0";
const port = 8005;
const config = {
  ip,
  port
};
const useNetworkStore = defineStore("network", {
  state: () => ({
    ip: config.ip,
    port: config.port
  }),
  actions: {
    async updateNetwork(data) {
      this.ip = data.ip;
      this.port = data.port;
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
});
class AuthModule {
  constructor(httpFactory) {
    __publicField(this, "RESOURCE", "auth/login");
    this.httpFactory = httpFactory;
  }
  async login(credentials) {
    const request = {
      route: this.RESOURCE,
      method: "POST",
      body: credentials
    };
    return this.httpFactory.call(request);
  }
}
class HttpFactory {
  async call(request) {
    const $res = await fetchRequest(request);
    return $res;
  }
}
const useRouteStore = defineStore("lastRoute", {
  state: () => ({
    route: "/home"
  }),
  actions: {
    lastKnownRoute(route) {
      this.route = route;
    }
  },
  persist: true
});
const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    user: {},
    department: ""
  }),
  actions: {
    async authenticateUser({ username, password, department }) {
      var _a, _b, _c;
      let authModule = new AuthModule(new HttpFactory());
      const credentials = { username, password, department };
      const { data, error, pending } = await authModule.login(credentials);
      this.loading = pending;
      if (error.value) {
        useNuxtApp().$toast.error(loginErrorMessage);
      }
      if (data.value) {
        let expiration = new Date((_a = data == null ? void 0 : data.value) == null ? void 0 : _a.authorization.expiry_time);
        expiration.setHours(expiration.getHours());
        const token = useCookie("token", { expires: expiration });
        const { route } = useRouteStore();
        token.value = (_b = data == null ? void 0 : data.value) == null ? void 0 : _b.authorization.token;
        if (token.value != null) {
          this.authenticated = true;
          this.user = (_c = data == null ? void 0 : data.value) == null ? void 0 : _c.authorization.user;
          this.department = department;
          useNuxtApp().$toast.success(`Logged in as ${username}`);
          route == "" ? useNuxtApp().$router.push("/home") : useNuxtApp().$router.push(route);
        }
      }
    },
    logUserOut() {
      const token = useCookie("token");
      this.authenticated = false;
      token.value = null;
      useNuxtApp().$router.push("/");
    }
  },
  persist: true
});
async function fetchRequest(request) {
  let bodyObject = null;
  const networkStore = useNetworkStore();
  const baseUrl = `http://${networkStore.ip}:${networkStore.port}/api/v1/`;
  if (request.method === "GET" || request.method === "HEAD") {
    bodyObject = null;
  } else {
    bodyObject = request.body;
  }
  const { data, error, pending } = await useFetch(
    `${baseUrl}${request.route}`,
    {
      method: `${request.method}`,
      headers: {
        Authorization: `${request.token}`
      },
      body: bodyObject
    },
    "$D50VbDr9Fb"
  );
  if (error.value) {
    if (interceptor(error.value.statusCode)) {
      useNuxtApp().$toast.error(sessionExpiryMessage);
      const { logUserOut } = useAuthStore();
      logUserOut();
    } else
      console.error(error.value.data);
  }
  return { data, error, pending };
}

export { Api as A, HttpFactory as H, PrinterService as P, StatusList as S, TranslateDepartments as T, _imports_0 as _, render$4 as a, useNetworkStore as b, useRouteStore as c, filterArrays as d, endpoints as e, fetchRequest as f, getParameterizedUrl as g, calculateAge as h, capitalize as i, useFetch as j, reverseFilterArrays as k, render$3 as l, render$1 as m, render$5 as n, render$2 as o, useAlert as p, isEmpty as q, render as r, showTestDetails as s, useAuthStore as u };
//# sourceMappingURL=fetch-a6c33994.mjs.map
