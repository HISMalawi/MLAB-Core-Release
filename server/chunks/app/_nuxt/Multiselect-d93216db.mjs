import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  name: "core-multiselect",
  model: {
    prop: "itemsSelected",
    event: "updateItemsSelected"
  },
  data() {
    return {
      selected: this.itemsSelected
    };
  },
  props: {
    itemsSelected: {
      type: [Array, String],
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    dropdownClasses() {
      return {
        dropdownTop: "-translate-y-full top-px bottom-auto rounded-b-none rounded-t",
        dropdownHidden: "hidden",
        dropdown: "max-h-60 z-[1000] absolute -left-px -right-px bottom-0 transform translate-y-full border -mt-px overflow-y-scroll bg-white flex flex-col rounded-b",
        container: "relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border rounded bg-white text-base leading-snug outline-none"
      };
    }
  },
  watch: {
    selected: {
      handler(val) {
        this.$emit("update:itemsSelected", val);
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_multi_select = resolveComponent("multi-select");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-[1000] w-full flex flex-col space-y-2" }, _attrs))}><label class="font-medium">${ssrInterpolate($props.label)}</label>`);
  _push(ssrRenderComponent(_component_multi_select, {
    modelValue: $data.selected,
    "onUpdate:modelValue": ($event) => $data.selected = $event,
    options: $props.items,
    mode: $props.mode,
    searchable: true,
    clear: "",
    required: true,
    classes: $options.dropdownClasses,
    class: "focus:ring-0 multiselect-green"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Multiselect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Multiselect-d93216db.mjs.map
