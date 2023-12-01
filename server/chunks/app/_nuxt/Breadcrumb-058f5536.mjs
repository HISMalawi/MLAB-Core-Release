import { _ as __nuxt_component_0$1 } from './nuxt-link-7a607302.mjs';
import { r as render } from './HomeIcon-299b993b.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, withDirectives, vShow, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: {
    pages: {
      required: true,
      type: Array
    }
  },
  components: {
    HomeIcon: render
  },
  methods: {
    currentPath() {
      const segments = this.$route.path.split("/");
      return segments[segments.length - 1].replace(/-/g, " ");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_HomeIcon = resolveComponent("HomeIcon");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: "flex bg-gray-50 py-2 px-2",
    "aria-label": "Breadcrumb"
  }, _attrs))}><ol class="inline-flex items-center space-x-1"><!--[-->`);
  ssrRenderList($props.pages, (page, index) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: page.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex items-center"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_HomeIcon, {
            style: index == 0 ? null : { display: "none" },
            class: "w-4 h-4 text-sky-500"
          }, null, _parent2, _scopeId));
          _push2(`<svg style="${ssrRenderStyle(index != 0 ? null : { display: "none" })}" aria-hidden="true" class="w-6 h-6 text-sky-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><p class="ml-1 capitalize font-medium text-sky-500 hover:text-sky-600 md:ml-2"${_scopeId}>${ssrInterpolate(page.name)}</p></div>`);
        } else {
          return [
            createVNode("div", { class: "flex items-center" }, [
              withDirectives(createVNode(_component_HomeIcon, { class: "w-4 h-4 text-sky-500" }, null, 512), [
                [vShow, index == 0]
              ]),
              withDirectives((openBlock(), createBlock("svg", {
                "aria-hidden": "true",
                class: "w-6 h-6 text-sky-500",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                  "clip-rule": "evenodd"
                })
              ], 512)), [
                [vShow, index != 0]
              ]),
              createVNode("p", { class: "ml-1 capitalize font-medium text-sky-500 hover:text-sky-600 md:ml-2" }, toDisplayString(page.name), 1)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--><li class="inline-flex items-center"><p disabled href="#" class="capitalize inline-flex items-center font-medium text-gray-400"><svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> ${ssrInterpolate($options.currentPath())}</p></li></ol></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Breadcrumb-058f5536.mjs.map
