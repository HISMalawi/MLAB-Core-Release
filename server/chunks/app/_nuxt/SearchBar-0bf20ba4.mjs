import { r as render } from './XMarkIcon-170c776f.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: {
    search: {
      required: true,
      type: String
    },
    placeholder: {
      required: false,
      type: String,
      default: "Search..."
    }
  },
  components: { XMarkIcon: render },
  data() {
    return {
      value: this.search,
      placeholderValue: this.placeholder
    };
  },
  methods: {
    update() {
      this.$emit("update", "");
      this.value = "";
    },
    emitValue() {
      this.$emit("update", this.value);
      this.$emit("update:search", this.value);
    }
  },
  watch: {
    value() {
      this.emitValue();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormKit = resolveComponent("FormKit");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_FormKit, {
    label: "",
    type: "search",
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    modelModifiers: { lazy: true },
    placeholder: _ctx.$t("search"),
    delay: 1e3,
    "prefix-icon": "search"
  }, null, _parent));
  _push(`<button style="${ssrRenderStyle($data.value != "" ? null : { display: "none" })}" class="absolute inset-y-0 right-0 flex items-center pr-3">`);
  _push(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5 mt-2" }, null, _parent));
  _push(`</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/SearchBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=SearchBar-0bf20ba4.mjs.map
