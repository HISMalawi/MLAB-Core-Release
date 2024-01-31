import { defineComponent, mergeProps, unref, useSSRContext, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFacilityStore } from './facility-ee716abe.mjs';
import { i as render$1 } from './fetch-bdf4b52b.mjs';

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Address",
  __ssrInlineRender: true,
  setup(__props) {
    const facility = useFacilityStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 px-4 py-2 rounded border border-dotted" }, _attrs))}><address class="font-normal"><span class="flex items-center not-italic text-xl font-semibold border-b mb-2 border-dotted">${ssrInterpolate(unref(facility).details.name)}</span><span class="flex items-center not-italic text-gray-600">`);
      _push(ssrRenderComponent(unref(render), { class: "w-4 h-4 mr-1" }, null, _parent));
      _push(` ${ssrInterpolate(unref(facility).details.address)}</span><span class="flex items-center not-italic text-gray-600">`);
      _push(ssrRenderComponent(unref(render$1), { class: "w-4 h-4 mr-1" }, null, _parent));
      _push(` ${ssrInterpolate(unref(facility).details.phone)}</span></address></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reports/Address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Address-f3c26c99.mjs.map
