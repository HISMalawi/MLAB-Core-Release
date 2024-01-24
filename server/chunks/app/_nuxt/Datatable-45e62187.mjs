import { _ as __nuxt_component_3 } from './Loader-86943425.mjs';
import { resolveComponent, withCtx, createVNode, toDisplayString, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: {
    headers: {
      required: true,
      type: Array
    },
    data: {
      required: true,
      type: Object
    },
    loading: {
      required: false,
      type: Boolean,
      default: false
    },
    searchField: {
      required: false,
      type: String
    },
    searchValue: {
      required: false,
      type: String
    },
    serverOptions: {
      required: false,
      type: Object
    },
    serverItemsLength: {
      required: false,
      type: Number
    }
  },
  data() {
    return {
      options: this.serverOptions,
      isTestPanel: false
    };
  },
  watch: {
    options: {
      handler(newValue, oldValue) {
        this.$emit("update", newValue);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_datatable = resolveComponent("datatable", true);
  const _component_CoreLoader = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-5f1ee2d3>`);
  _push(ssrRenderComponent(_component_datatable, {
    headers: $props.headers,
    items: $props.data,
    "buttons-pagination": "",
    "theme-color": "#0ea5e9",
    "table-class-name": "header",
    alternating: "",
    loading: $props.loading,
    "search-field": $props.searchField,
    "search-value": $props.searchValue,
    "server-options": $data.options,
    "onUpdate:serverOptions": ($event) => $data.options = $event,
    "server-items-length": $props.serverItemsLength
  }, {
    header: withCtx((header, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="uppercase" data-v-5f1ee2d3${_scopeId}>${ssrInterpolate(header.text)}</p>`);
      } else {
        return [
          createVNode("p", { class: "uppercase" }, toDisplayString(header.text), 1)
        ];
      }
    }),
    "item-actions": withCtx((item, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "actions", { item }, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "actions", { item }, void 0, true)
        ];
      }
    }),
    loading: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CoreLoader, { loading: true }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CoreLoader, { loading: true })
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Datatable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5f1ee2d3"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Datatable-45e62187.mjs.map
