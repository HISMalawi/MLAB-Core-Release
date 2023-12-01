import { resolveComponent, mergeProps, useSSRContext, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { r as render$1 } from './constants-353d90a1.mjs';

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _sfc_main = {
  name: "Stepper",
  props: {
    steps: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentStep: 1
    };
  },
  methods: {
    incrementStep() {
      this.currentStep += 1;
    },
    decrementStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
      }
    }
  },
  components: { ArrowLongRightIcon: render$1, ArrowLongLeftIcon: render }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ArrowLongLeftIcon = resolveComponent("ArrowLongLeftIcon");
  const _component_ArrowLongRightIcon = resolveComponent("ArrowLongRightIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div>`);
  ssrRenderSlot(_ctx.$slots, "default", {
    key: _ctx.index,
    step: $data.currentStep
  }, null, _push, _parent);
  _push(`</div><div class="bg-white mt-3 w-full flex items-center space-x-3 justify-end">`);
  if ($data.currentStep > 1) {
    _push(`<button class="flex items-center bg-gray-200 rounded px-4 py-1.5 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 text-gray-500">`);
    _push(ssrRenderComponent(_component_ArrowLongLeftIcon, { class: "w-5 h-5 mr-2" }, null, _parent));
    _push(` Previous </button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.currentStep !== $props.steps) {
    _push(`<button class="flex items-center bg-sky-500 rounded px-4 py-1.5 focus:bg-sky-400 focus:ring-2 focus:ring-sky-400 text-white"> Next `);
    _push(ssrRenderComponent(_component_ArrowLongRightIcon, { class: "w-5 h-5 ml-2" }, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Stepper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Stepper-f7a86a20.mjs.map
