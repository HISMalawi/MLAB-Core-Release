import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _imports_0 = "" + buildAssetsURL("excel.7aa029c4.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExportButton",
  __ssrInlineRender: true,
  props: {
    text: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "flex items-center bg-green-500 border-green-50 rounded py-2 px-2 text-white text-sm" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="excel-icon" class="w-5 h-5 mr-2"> ${ssrInterpolate(props.text)}</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/ExportButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ExportButton-c520dc00.mjs.map
