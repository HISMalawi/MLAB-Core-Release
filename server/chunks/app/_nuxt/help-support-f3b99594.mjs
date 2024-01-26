import { defineComponent, unref, useSSRContext } from 'vue';
import { u as useHead, e as useRuntimeConfig } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { P as Package } from './package-834e49f3.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "help-support",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${Package.name.toUpperCase()} - Help & Support`
    });
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><iframe${ssrRenderAttr("src", unref(runtimeConfig).public.VITEPRESS_URL)} style="${ssrRenderStyle({ "width": "100%", "height": "100vh", "border": "none" })}"></iframe></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/help-support.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=help-support-f3b99594.mjs.map
