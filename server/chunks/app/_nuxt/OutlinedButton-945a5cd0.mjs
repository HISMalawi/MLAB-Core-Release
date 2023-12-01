import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: {
    text: {
      type: String,
      required: true
    },
    click: {
      required: false,
      type: Function
    },
    type: {
      required: false,
      type: String
    }
  },
  methods: {
    handleClick() {
      this.click();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: $props.type,
    class: "border text-gray-500 px-2 py-1.5 rounded text-sm hover:bg-red-600 transition duration-150 hover:text-white hover:boder-none"
  }, _attrs))}>${ssrInterpolate($props.text)}</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/OutlinedButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=OutlinedButton-945a5cd0.mjs.map
