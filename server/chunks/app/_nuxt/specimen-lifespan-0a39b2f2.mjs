import { _ as __nuxt_component_0 } from './Breadcrumb-7cc71911.mjs';
import { _ as __nuxt_component_1 } from './SearchBar-0bf20ba4.mjs';
import { _ as __nuxt_component_2 } from './Datatable-0c4b7b4f.mjs';
import { u as useCookie, a as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, resolveComponent, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withDirectives, vShow } from 'vue';
import { g as getParameterizedUrl, e as endpoints, f as fetchRequest, i as useFetch } from './fetch-647b8df7.mjs';
import { e as errorMessage } from './constants-353d90a1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './clinical_fe-af97c61e.mjs';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/vue';
import { r as render } from './PencilSquareIcon-77446728.mjs';
import { r as render$1 } from './XMarkIcon-170c776f.mjs';
import { r as render$2 } from './ArrowDownTrayIcon-16af2c05.mjs';
import { a as useSeoMeta } from './index-ca787103.mjs';
import { P as Package } from './package-cc00c60c.mjs';
import './nuxt-link-0e3a4fce.mjs';
import './HomeIcon-299b993b.mjs';
import './Loader-c735e4ba.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import '@formkit/icons';
import 'pinia-plugin-persistedstate';
import 'vue3-easy-data-table';
import '@vuepic/vue-datepicker';
import 'vue-json-excel3';
import '@vueform/multiselect';
import 'vue3-toastify';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'moment';
import './PrinterIcon-02ac6ae4.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  emits: ["action-completed"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const show = ref(false);
    const loading = ref(false);
    const cookie = useCookie("token");
    const body = ref({
      life_span: "",
      life_span_units: ""
    });
    const data = ref({
      specimen_name: "",
      test_type_name: "",
      life_span: "",
      life_span_units: ""
    });
    const timeUnits = ref([
      { label: "mins", value: "mins" },
      { label: "hours", value: "hours" },
      { label: "days", value: "days" },
      { label: "months", value: "months" }
    ]);
    const loadSpecimenLifespan = async () => {
      loading.value = true;
      const request = {
        route: `${endpoints.specimensLifespan.edit}/${props.id}`,
        method: "GET",
        token: `${cookie.value}`
      };
      const v = await fetchRequest(request);
      if (v.data.value) {
        const row = v.data.value;
        body.value.life_span = row.life_span;
        body.value.life_span_units = row.life_span_units;
        data.value.specimen_name = row.specimen.name;
        data.value.test_type_name = row.test_type.name;
        show.value = true;
      }
      loading.value = false;
      if (v.error.value) {
        loading.value = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    };
    const submitForm = async () => {
      loading.value = true;
      const v = await useFetch(
        `${endpoints.specimensLifespan.update}/${props.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `${cookie.value}`
          },
          body
        },
        "$x31dFGojBG"
      );
      if (v.data.value) {
        handleClick();
        emit("action-completed", true);
        useNuxtApp().$toast.success(`Specimen lifespan updated successfully!`);
      }
      if (v.error.value) {
        useNuxtApp().$toast.success(`An error occurred, please try again!`);
        handleClick();
      }
    };
    const handleClick = () => {
      show.value = !show.value;
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreActionButton = __nuxt_component_0$1;
      const _component_FormKit = resolveComponent("FormKit");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CoreActionButton, {
        click: loadSpecimenLifespan,
        color: "success",
        text: "Edit",
        icon: unref(render)
      }, null, _parent));
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: unref(show),
        as: "template"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              class: "relative z-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-black bg-opacity-25"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 mr-2"${_scopeId5}> ${ssrInterpolate("Edit Specimen Lifespan")}`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" " + toDisplayString("Edit Specimen Lifespan"))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<button${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(render$1), { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                              _push5(`</button></div><div style="${ssrRenderStyle(!unref(loading) ? null : { display: "none" })}" class="mt-2 space-y-3 px-5 py-5"${_scopeId4}><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>${ssrInterpolate("Specimen Name")}</label><p class="underline"${_scopeId4}>${ssrInterpolate(unref(data).specimen_name)}</p></div><div class="w-full flex flex-col space-y-1"${_scopeId4}><label class="font-semibold text-lg"${_scopeId4}>${ssrInterpolate("Test Type")}</label><p class="underline"${_scopeId4}>${ssrInterpolate(unref(data).test_type_name)}</p></div></div>`);
                              _push5(ssrRenderComponent(_component_FormKit, {
                                type: "form",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx(({}, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mt-2 space-y-3"${_scopeId5}><div class="w-full grid grid-1 items-center px-5 space-x-3"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_FormKit, {
                                      class: "w-full",
                                      type: "number",
                                      label: "Lifespan",
                                      validation: "required",
                                      modelValue: unref(body).life_span,
                                      "onUpdate:modelValue": ($event) => unref(body).life_span = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="w-full grid grid-1 items-center px-5 space-x-3"${_scopeId5}>`);
                                    if (unref(timeUnits).length) {
                                      _push6(ssrRenderComponent(_component_FormKit, {
                                        type: "select",
                                        label: "Test Type",
                                        modelValue: unref(body).life_span_units,
                                        "onUpdate:modelValue": ($event) => unref(body).life_span_units = $event,
                                        placeholder: "Select disease",
                                        validation: "required",
                                        options: unref(timeUnits)
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_CoreActionButton, {
                                      type: "submit",
                                      click: () => {
                                      },
                                      color: "success",
                                      loading: unref(loading),
                                      icon: unref(render$2),
                                      text: "Save changes"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "mt-2 space-y-3" }, [
                                        createVNode("div", { class: "w-full grid grid-1 items-center px-5 space-x-3" }, [
                                          createVNode(_component_FormKit, {
                                            class: "w-full",
                                            type: "number",
                                            label: "Lifespan",
                                            validation: "required",
                                            modelValue: unref(body).life_span,
                                            "onUpdate:modelValue": ($event) => unref(body).life_span = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "w-full grid grid-1 items-center px-5 space-x-3" }, [
                                          unref(timeUnits).length ? (openBlock(), createBlock(_component_FormKit, {
                                            key: 0,
                                            type: "select",
                                            label: "Test Type",
                                            modelValue: unref(body).life_span_units,
                                            "onUpdate:modelValue": ($event) => unref(body).life_span_units = $event,
                                            placeholder: "Select disease",
                                            validation: "required",
                                            options: unref(timeUnits)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                          createVNode(_component_CoreActionButton, {
                                            type: "submit",
                                            click: () => {
                                            },
                                            color: "success",
                                            loading: unref(loading),
                                            icon: unref(render$2),
                                            text: "Save changes"
                                          }, null, 8, ["loading", "icon"])
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-lg flex items-center font-medium leading-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" " + toDisplayString("Edit Specimen Lifespan"))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: handleClick }, [
                                    createVNode(unref(render$1), { class: "w-5 h-5" })
                                  ])
                                ]),
                                withDirectives(createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                    createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Specimen Name")),
                                    createVNode("p", { class: "underline" }, toDisplayString(unref(data).specimen_name), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                    createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Test Type")),
                                    createVNode("p", { class: "underline" }, toDisplayString(unref(data).test_type_name), 1)
                                  ])
                                ], 512), [
                                  [vShow, !unref(loading)]
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  "submit-label": "Update",
                                  onSubmit: submitForm,
                                  actions: false
                                }, {
                                  default: withCtx(({}) => [
                                    createVNode("div", { class: "mt-2 space-y-3" }, [
                                      createVNode("div", { class: "w-full grid grid-1 items-center px-5 space-x-3" }, [
                                        createVNode(_component_FormKit, {
                                          class: "w-full",
                                          type: "number",
                                          label: "Lifespan",
                                          validation: "required",
                                          modelValue: unref(body).life_span,
                                          "onUpdate:modelValue": ($event) => unref(body).life_span = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-1 items-center px-5 space-x-3" }, [
                                        unref(timeUnits).length ? (openBlock(), createBlock(_component_FormKit, {
                                          key: 0,
                                          type: "select",
                                          label: "Test Type",
                                          modelValue: unref(body).life_span_units,
                                          "onUpdate:modelValue": ($event) => unref(body).life_span_units = $event,
                                          placeholder: "Select disease",
                                          validation: "required",
                                          options: unref(timeUnits)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                        createVNode(_component_CoreActionButton, {
                                          type: "submit",
                                          click: () => {
                                          },
                                          color: "success",
                                          loading: unref(loading),
                                          icon: unref(render$2),
                                          text: "Save changes"
                                        }, null, 8, ["loading", "icon"])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-lg flex items-center font-medium leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" " + toDisplayString("Edit Specimen Lifespan"))
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: handleClick }, [
                                  createVNode(unref(render$1), { class: "w-5 h-5" })
                                ])
                              ]),
                              withDirectives(createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Specimen Name")),
                                  createVNode("p", { class: "underline" }, toDisplayString(unref(data).specimen_name), 1)
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Test Type")),
                                  createVNode("p", { class: "underline" }, toDisplayString(unref(data).test_type_name), 1)
                                ])
                              ], 512), [
                                [vShow, !unref(loading)]
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx(({}) => [
                                  createVNode("div", { class: "mt-2 space-y-3" }, [
                                    createVNode("div", { class: "w-full grid grid-1 items-center px-5 space-x-3" }, [
                                      createVNode(_component_FormKit, {
                                        class: "w-full",
                                        type: "number",
                                        label: "Lifespan",
                                        validation: "required",
                                        modelValue: unref(body).life_span,
                                        "onUpdate:modelValue": ($event) => unref(body).life_span = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-1 items-center px-5 space-x-3" }, [
                                      unref(timeUnits).length ? (openBlock(), createBlock(_component_FormKit, {
                                        key: 0,
                                        type: "select",
                                        label: "Test Type",
                                        modelValue: unref(body).life_span_units,
                                        "onUpdate:modelValue": ($event) => unref(body).life_span_units = $event,
                                        placeholder: "Select disease",
                                        validation: "required",
                                        options: unref(timeUnits)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        click: () => {
                                        },
                                        color: "success",
                                        loading: unref(loading),
                                        icon: unref(render$2),
                                        text: "Save changes"
                                      }, null, 8, ["loading", "icon"])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                      createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-lg flex items-center font-medium leading-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "w-8 h-8 mr-2"
                                      }),
                                      createTextVNode(" " + toDisplayString("Edit Specimen Lifespan"))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", { onClick: handleClick }, [
                                    createVNode(unref(render$1), { class: "w-5 h-5" })
                                  ])
                                ]),
                                withDirectives(createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                  createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                    createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Specimen Name")),
                                    createVNode("p", { class: "underline" }, toDisplayString(unref(data).specimen_name), 1)
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                    createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Test Type")),
                                    createVNode("p", { class: "underline" }, toDisplayString(unref(data).test_type_name), 1)
                                  ])
                                ], 512), [
                                  [vShow, !unref(loading)]
                                ]),
                                createVNode(_component_FormKit, {
                                  type: "form",
                                  "submit-label": "Update",
                                  onSubmit: submitForm,
                                  actions: false
                                }, {
                                  default: withCtx(({}) => [
                                    createVNode("div", { class: "mt-2 space-y-3" }, [
                                      createVNode("div", { class: "w-full grid grid-1 items-center px-5 space-x-3" }, [
                                        createVNode(_component_FormKit, {
                                          class: "w-full",
                                          type: "number",
                                          label: "Lifespan",
                                          validation: "required",
                                          modelValue: unref(body).life_span,
                                          "onUpdate:modelValue": ($event) => unref(body).life_span = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "w-full grid grid-1 items-center px-5 space-x-3" }, [
                                        unref(timeUnits).length ? (openBlock(), createBlock(_component_FormKit, {
                                          key: 0,
                                          type: "select",
                                          label: "Test Type",
                                          modelValue: unref(body).life_span_units,
                                          "onUpdate:modelValue": ($event) => unref(body).life_span_units = $event,
                                          placeholder: "Select disease",
                                          validation: "required",
                                          options: unref(timeUnits)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                        createVNode(_component_CoreActionButton, {
                                          type: "submit",
                                          click: () => {
                                          },
                                          color: "success",
                                          loading: unref(loading),
                                          icon: unref(render$2),
                                          text: "Save changes"
                                        }, null, 8, ["loading", "icon"])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                as: "div",
                class: "relative z-10"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                    createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-lg flex items-center font-medium leading-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      class: "w-8 h-8 mr-2"
                                    }),
                                    createTextVNode(" " + toDisplayString("Edit Specimen Lifespan"))
                                  ]),
                                  _: 1
                                }),
                                createVNode("button", { onClick: handleClick }, [
                                  createVNode(unref(render$1), { class: "w-5 h-5" })
                                ])
                              ]),
                              withDirectives(createVNode("div", { class: "mt-2 space-y-3 px-5 py-5" }, [
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Specimen Name")),
                                  createVNode("p", { class: "underline" }, toDisplayString(unref(data).specimen_name), 1)
                                ]),
                                createVNode("div", { class: "w-full flex flex-col space-y-1" }, [
                                  createVNode("label", { class: "font-semibold text-lg" }, toDisplayString("Test Type")),
                                  createVNode("p", { class: "underline" }, toDisplayString(unref(data).test_type_name), 1)
                                ])
                              ], 512), [
                                [vShow, !unref(loading)]
                              ]),
                              createVNode(_component_FormKit, {
                                type: "form",
                                "submit-label": "Update",
                                onSubmit: submitForm,
                                actions: false
                              }, {
                                default: withCtx(({}) => [
                                  createVNode("div", { class: "mt-2 space-y-3" }, [
                                    createVNode("div", { class: "w-full grid grid-1 items-center px-5 space-x-3" }, [
                                      createVNode(_component_FormKit, {
                                        class: "w-full",
                                        type: "number",
                                        label: "Lifespan",
                                        validation: "required",
                                        modelValue: unref(body).life_span,
                                        "onUpdate:modelValue": ($event) => unref(body).life_span = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "w-full grid grid-1 items-center px-5 space-x-3" }, [
                                      unref(timeUnits).length ? (openBlock(), createBlock(_component_FormKit, {
                                        key: 0,
                                        type: "select",
                                        label: "Test Type",
                                        modelValue: unref(body).life_span_units,
                                        "onUpdate:modelValue": ($event) => unref(body).life_span_units = $event,
                                        placeholder: "Select disease",
                                        validation: "required",
                                        options: unref(timeUnits)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                      createVNode(_component_CoreActionButton, {
                                        type: "submit",
                                        click: () => {
                                        },
                                        color: "success",
                                        loading: unref(loading),
                                        icon: unref(render$2),
                                        text: "Save changes"
                                      }, null, 8, ["loading", "icon"])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/specimen-lifespan/edit-dialog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "specimen-lifespan",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `${Package.name.toUpperCase()} - Specimen Lifespan`
    });
    const serverItemsLength = ref(0);
    const loading = ref(false);
    const specimenLifespans = ref([]);
    const cookie = useCookie("token");
    const header = ref("Specimen Lifespan");
    const search = ref("");
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 10,
      sortBy: "name"
    });
    const pages = ref([
      {
        name: "Home",
        link: "/home"
      },
      {
        name: "Test Catalog",
        link: "#"
      }
    ]);
    const headers = ref([
      { text: "Specimen Type", value: "specimen_name", sortable: true },
      { text: "Test Type", value: "test_type_name" },
      { text: "Lifesapn", value: "specimen_life_span" },
      { text: "Actions", value: "actions" }
    ]);
    const loadSpecimenLifespans = async () => {
      var _a;
      loading.value = true;
      const { page, rowsPerPage } = serverOptions.value;
      const request = {
        route: getParameterizedUrl(endpoints.specimensLifespan.index, {
          page,
          per_page: rowsPerPage,
          search: search.value
        }),
        method: "GET",
        token: `${cookie.value}`
      };
      const v = await fetchRequest(request);
      if (v.data.value) {
        const rows = v.data.value.data;
        specimenLifespans.value = rows ? rows.map((row) => ({
          id: row.id,
          specimen_name: row.specimen_name,
          test_type_name: row.test_type_name,
          specimen_life_span: row.life_span && row.life_span_units ? `${row.life_span} ${row.life_span_units}` : "--",
          life_span: row.life_span,
          life_span_unit: row.life_span_units
        })) : [];
        serverItemsLength.value = (_a = v.data.value.meta.total_count) != null ? _a : 0;
      }
      loading.value = false;
      if (v.error.value) {
        loading.value = false;
        useNuxtApp().$toast.error(`${errorMessage}`);
      }
    };
    const updateSearch = (value) => {
      search.value = value;
      loadSpecimenLifespans();
    };
    const updateServerOptions = (options) => serverOptions.value = options;
    loadSpecimenLifespans();
    watch(serverOptions, () => loadSpecimenLifespans());
    const reloadItems = async () => {
      loadSpecimenLifespans();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBreadcrumb = __nuxt_component_0;
      const _component_CoreSearchBar = __nuxt_component_1;
      const _component_CoreDatatable = __nuxt_component_2;
      const _component_SpecimenLifespanEditDialog = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoreBreadcrumb, { pages: unref(pages) }, null, _parent));
      _push(`<div class="flex items-center justify-between py-5"><h3 class="text-2xl font-semibold">${ssrInterpolate(unref(header))}</h3></div><div class="flex justify-end w-full px-2 py-2 mb-2">`);
      _push(ssrRenderComponent(_component_CoreSearchBar, {
        search: unref(search),
        onUpdate: updateSearch
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CoreDatatable, {
        headers: unref(headers),
        data: unref(specimenLifespans),
        serverOptions: unref(serverOptions),
        loading: unref(loading),
        serverItemsLength: unref(serverItemsLength),
        onUpdate: updateServerOptions
      }, {
        actions: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-2 flex items-center space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SpecimenLifespanEditDialog, {
              onActionCompleted: reloadItems,
              id: item.id
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-2 flex items-center space-x-2" }, [
                createVNode(_component_SpecimenLifespanEditDialog, {
                  onActionCompleted: reloadItems,
                  id: item.id
                }, null, 8, ["id"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-catalog/specimen-lifespan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=specimen-lifespan-0a39b2f2.mjs.map
