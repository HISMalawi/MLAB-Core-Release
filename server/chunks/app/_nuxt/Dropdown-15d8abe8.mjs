import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import { openBlock, createElementBlock, createElementVNode, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, withDirectives, vModelText, Fragment, renderList, Transition } from 'vue';
import { r as render$1 } from './CheckIcon-e4d11b9e.mjs';
import { r as render$2 } from './CheckCircleIcon-e0bae33f.mjs';
import { r as render$3 } from './MagnifyingGlassIcon-7f68e1d6.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _sfc_main = {
  components: {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    ChevronUpDownIcon: render,
    CheckIcon: render$1,
    CheckCircleIcon: render$2,
    MagnifyingGlassIcon: render$3
  },
  props: {
    items: {
      required: true,
      type: Array
    },
    modelValue: {
      type: Object,
      default: false
    },
    isSearchable: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      value: this.modelValue,
      search: "",
      isRequired: true
    };
  },
  computed: {
    selectedItem: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      }
    },
    filteredItems() {
      return this.items.filter((item) => item.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Listbox = resolveComponent("Listbox");
  const _component_ListboxButton = resolveComponent("ListboxButton");
  const _component_ChevronUpDownIcon = resolveComponent("ChevronUpDownIcon");
  const _component_ListboxOptions = resolveComponent("ListboxOptions");
  const _component_MagnifyingGlassIcon = resolveComponent("MagnifyingGlassIcon");
  const _component_ListboxOption = resolveComponent("ListboxOption");
  const _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");
  _push(ssrRenderComponent(_component_Listbox, mergeProps({
    modelValue: $options.selectedItem,
    "onUpdate:modelValue": ($event) => $options.selectedItem = $event,
    class: { "required": $data.isRequired && !$options.selectedItem }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative mt-1"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ListboxButton, { class: "relative w-full cursor-default rounded border py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-none sm:text-sm" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="block truncate"${_scopeId2}>${ssrInterpolate($options.selectedItem.name)}</span><span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_ChevronUpDownIcon, {
                class: "h-5 w-5 text-gray-500",
                "aria-hidden": "true"
              }, null, _parent3, _scopeId2));
              _push3(`</span>`);
            } else {
              return [
                createVNode("span", { class: "block truncate" }, toDisplayString($options.selectedItem.name), 1),
                createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                  createVNode(_component_ChevronUpDownIcon, {
                    class: "h-5 w-5 text-gray-500",
                    "aria-hidden": "true"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ListboxOptions, {
          class: "absolute mt-1 w-full max-h-96 overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm drop-shadow-md divide-y divide-slate-100",
          style: { "z-index": "10000" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if ($props.isSearchable) {
                _push3(`<div class="relative px-2 py-2"${_scopeId2}><div class="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_MagnifyingGlassIcon, { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                _push3(`</div><input${ssrRenderAttr("value", $data.search)} type="text" placeholder="Search..." class="w-full rounded border pl-8 px-2.5 py-2 focus:ring-none focus:outline-none"${_scopeId2}></div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<!--[-->`);
              ssrRenderList($options.filteredItems, (item, index) => {
                _push3(ssrRenderComponent(_component_ListboxOption, {
                  key: index,
                  value: item,
                  as: "template"
                }, {
                  default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<li class="${ssrRenderClass([
                        active ? "bg-green-100 text-green-500" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-10 pr-4"
                      ])}"${_scopeId3}><span class="${ssrRenderClass([
                        selected ? "font-medium" : "font-normal",
                        "block truncate"
                      ])}"${_scopeId3}>${ssrInterpolate(item.name)}</span>`);
                      if (selected) {
                        _push4(`<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_CheckCircleIcon, {
                          class: "h-5 w-5",
                          "aria-hidden": "true"
                        }, null, _parent4, _scopeId3));
                        _push4(`</span>`);
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`</li>`);
                    } else {
                      return [
                        createVNode("li", {
                          class: [
                            active ? "bg-green-100 text-green-500" : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-10 pr-4"
                          ]
                        }, [
                          createVNode("span", {
                            class: [
                              selected ? "font-medium" : "font-normal",
                              "block truncate"
                            ]
                          }, toDisplayString(item.name), 3),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                          }, [
                            createVNode(_component_CheckCircleIcon, {
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })
                          ])) : createCommentVNode("", true)
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                $props.isSearchable ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "relative px-2 py-2"
                }, [
                  createVNode("div", { class: "absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none" }, [
                    createVNode(_component_MagnifyingGlassIcon, { class: "w-5 h-5" })
                  ]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => $data.search = $event,
                    type: "text",
                    placeholder: "Search...",
                    class: "w-full rounded border pl-8 px-2.5 py-2 focus:ring-none focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.search]
                  ])
                ])) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList($options.filteredItems, (item, index) => {
                  return openBlock(), createBlock(_component_ListboxOption, {
                    key: index,
                    value: item,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }) => [
                      createVNode("li", {
                        class: [
                          active ? "bg-green-100 text-green-500" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-10 pr-4"
                        ]
                      }, [
                        createVNode("span", {
                          class: [
                            selected ? "font-medium" : "font-normal",
                            "block truncate"
                          ]
                        }, toDisplayString(item.name), 3),
                        selected ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                        }, [
                          createVNode(_component_CheckCircleIcon, {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          })
                        ])) : createCommentVNode("", true)
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "relative mt-1" }, [
            createVNode(_component_ListboxButton, { class: "relative w-full cursor-default rounded border py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-none sm:text-sm" }, {
              default: withCtx(() => [
                createVNode("span", { class: "block truncate" }, toDisplayString($options.selectedItem.name), 1),
                createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                  createVNode(_component_ChevronUpDownIcon, {
                    class: "h-5 w-5 text-gray-500",
                    "aria-hidden": "true"
                  })
                ])
              ]),
              _: 1
            }),
            createVNode(Transition, {
              "leave-active-class": "transition duration-100 ease-in",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: withCtx(() => [
                createVNode(_component_ListboxOptions, {
                  class: "absolute mt-1 w-full max-h-96 overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm drop-shadow-md divide-y divide-slate-100",
                  style: { "z-index": "10000" }
                }, {
                  default: withCtx(() => [
                    $props.isSearchable ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "relative px-2 py-2"
                    }, [
                      createVNode("div", { class: "absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none" }, [
                        createVNode(_component_MagnifyingGlassIcon, { class: "w-5 h-5" })
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => $data.search = $event,
                        type: "text",
                        placeholder: "Search...",
                        class: "w-full rounded border pl-8 px-2.5 py-2 focus:ring-none focus:outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, $data.search]
                      ])
                    ])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList($options.filteredItems, (item, index) => {
                      return openBlock(), createBlock(_component_ListboxOption, {
                        key: index,
                        value: item,
                        as: "template"
                      }, {
                        default: withCtx(({ active, selected }) => [
                          createVNode("li", {
                            class: [
                              active ? "bg-green-100 text-green-500" : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-10 pr-4"
                            ]
                          }, [
                            createVNode("span", {
                              class: [
                                selected ? "font-medium" : "font-normal",
                                "block truncate"
                              ]
                            }, toDisplayString(item.name), 3),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "absolute inset-y-0 left-0 flex items-center pl-3 text-green-500"
                            }, [
                              createVNode(_component_CheckCircleIcon, {
                                class: "h-5 w-5",
                                "aria-hidden": "true"
                              })
                            ])) : createCommentVNode("", true)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Dropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, render as r };
//# sourceMappingURL=Dropdown-15d8abe8.mjs.map
