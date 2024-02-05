import { _ as _export_sfc, a as useCookie, b as useNuxtApp, d as __nuxt_component_0 } from '../server.mjs';
import { resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { a as render$4, e as endpoints, f as fetchRequest } from './fetch-61d93cc9.mjs';
import { r as render } from './XMarkIcon-170c776f.mjs';
import { r as render$1 } from './PrinterIcon-02ac6ae4.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    XMarkIcon: render,
    ExclamationTriangleIcon: render$4,
    PrinterIcon: render$1
  },
  props: {
    id: {
      type: String
    },
    orderId: {
      type: String
    },
    printSmallLabel: {
      required: false,
      type: Boolean,
      default: false
    },
    tests: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      show: false,
      printIcon: render$1,
      cookie: useCookie("token"),
      printers: new Array(),
      selectedPrinter: "",
      loading: false,
      zebraPrinting: false
    };
  },
  methods: {
    async init() {
      this.handleClick();
      const request = {
        route: endpoints.printers,
        method: "GET",
        token: `${this.cookie}`
      };
      const { data, error, pending } = await fetchRequest(request);
      if (data.value) {
        this.printers = new Array();
        data.value.map((value) => {
          this.printers.push(value.name);
        });
      }
      if (error.value) {
        console.error(error.value);
      }
    },
    async printSmallLabel() {
      this.zebraPrinting = true;
      const request = {
        route: endpoints.printOutZebra,
        method: "POST",
        token: `${this.cookie}`,
        body: {
          order_id: this.orderId,
          tests: this.tests
        }
      };
      const { data, error, pending } = await fetchRequest(request);
      this.zebraPrinting = pending;
      if (data.value) {
        this.zebraPrinting = false;
        const reader = new FileReader();
        reader.onload = () => {
          const url = URL.createObjectURL(data.value);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${Date.now()}.lbl`);
          link.click();
          URL.revokeObjectURL(url);
        };
        reader.readAsText(data.value);
      }
      if (error.value) {
        this.zebraPrinting = false;
        console.error(error.value);
      }
    },
    async generatePDF() {
      this.loading = true;
      const printContainer = document.querySelector(".print-container");
      const canvas = await html2canvas(printContainer);
      const image = canvas.toDataURL("image/jpeg");
      const pdf = new jsPDF();
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(image, "JPEG", 0, 0, imgWidth, imgHeight);
      const pdfBlob = pdf.output("blob");
      await this.submitForm(pdfBlob);
    },
    async submitForm(file) {
      let formData = new FormData();
      let OrderId = new Array();
      OrderId.push(Number(this.orderId));
      formData.append("pdf", file, `patient-name-${this.id}`);
      formData.append("printer_name", this.selectedPrinter);
      formData.append("order_ids", JSON.stringify(OrderId));
      const request = {
        route: endpoints.printOut,
        method: "POST",
        token: `${this.cookie}`,
        body: formData
      };
      const { data, error, pending } = await fetchRequest(request);
      this.loading = pending;
      if (data.value) {
        if (data.value.printed) {
          useNuxtApp().$toast.success("Patient report printed successfully!");
        } else {
          useNuxtApp().$toast.warning("Could not print patient report!");
        }
        this.loading = false;
        this.$emit("update", true);
        this.handleClick();
      }
      if (error.value) {
        this.loading = false;
        console.error(error.value);
        useNuxtApp().$toast.error("An error occurred while printing patient report");
        this.handleClick();
      }
    },
    handleClick() {
      this.show = !this.show;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CoreActionButton = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_PrinterIcon = resolveComponent("PrinterIcon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_FormKit = resolveComponent("FormKit");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CoreActionButton, {
    click: $options.init,
    color: "primary",
    text: "Print",
    icon: $data.printIcon
  }, null, _parent));
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: $data.show,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          class: "relative z-10"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TransitionChild, {
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
              _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex top-0 items-center justify-center p-4 text-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, {
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
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border-b px-3 py-3 flex items-center justify-between"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg flex items-center font-medium leading-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_PrinterIcon, { class: "h-5 w-5 mr-2" }, null, _parent6, _scopeId5));
                                _push6(` Print `);
                              } else {
                                return [
                                  createVNode(_component_PrinterIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Print ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<button${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                          _push5(`</button></div>`);
                          _push5(ssrRenderComponent(_component_FormKit, {
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: $options.generatePDF,
                            actions: false
                          }, {
                            default: withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="py-5 px-5"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_FormKit, {
                                  validation: "required",
                                  label: "Select a printer",
                                  type: "radio",
                                  modelValue: $data.selectedPrinter,
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  options: $data.printers
                                }, null, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"${_scopeId5}>`);
                                if ($options.printSmallLabel) {
                                  _push6(ssrRenderComponent(_component_CoreActionButton, {
                                    type: "button",
                                    loading: $data.zebraPrinting,
                                    click: () => {
                                      $options.printSmallLabel();
                                    },
                                    icon: $data.printIcon,
                                    text: "Print Small Label",
                                    color: "primary"
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(ssrRenderComponent(_component_CoreActionButton, {
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  type: "submit",
                                  icon: $data.printIcon,
                                  text: "Print",
                                  color: "success"
                                }, null, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "py-5 px-5" }, [
                                    createVNode(_component_FormKit, {
                                      validation: "required",
                                      label: "Select a printer",
                                      type: "radio",
                                      modelValue: $data.selectedPrinter,
                                      "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                      options: $data.printers
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ]),
                                  createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                    $options.printSmallLabel ? (openBlock(), createBlock(_component_CoreActionButton, {
                                      key: 0,
                                      type: "button",
                                      loading: $data.zebraPrinting,
                                      click: () => {
                                        $options.printSmallLabel();
                                      },
                                      icon: $data.printIcon,
                                      text: "Print Small Label",
                                      color: "primary"
                                    }, null, 8, ["loading", "click", "icon"])) : createCommentVNode("", true),
                                    createVNode(_component_CoreActionButton, {
                                      click: () => {
                                      },
                                      loading: $data.loading,
                                      type: "submit",
                                      icon: $data.printIcon,
                                      text: "Print",
                                      color: "success"
                                    }, null, 8, ["loading", "icon"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_PrinterIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Print ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              "submit-label": "Update",
                              onSubmit: $options.generatePDF,
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "py-5 px-5" }, [
                                  createVNode(_component_FormKit, {
                                    validation: "required",
                                    label: "Select a printer",
                                    type: "radio",
                                    modelValue: $data.selectedPrinter,
                                    "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                    options: $data.printers
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  $options.printSmallLabel ? (openBlock(), createBlock(_component_CoreActionButton, {
                                    key: 0,
                                    type: "button",
                                    loading: $data.zebraPrinting,
                                    click: () => {
                                      $options.printSmallLabel();
                                    },
                                    icon: $data.printIcon,
                                    text: "Print Small Label",
                                    color: "primary"
                                  }, null, 8, ["loading", "click", "icon"])) : createCommentVNode("", true),
                                  createVNode(_component_CoreActionButton, {
                                    click: () => {
                                    },
                                    loading: $data.loading,
                                    type: "submit",
                                    icon: $data.printIcon,
                                    text: "Print",
                                    color: "success"
                                  }, null, 8, ["loading", "icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_PrinterIcon, { class: "h-5 w-5 mr-2" }),
                                createTextVNode(" Print ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: $options.generatePDF,
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "py-5 px-5" }, [
                                createVNode(_component_FormKit, {
                                  validation: "required",
                                  label: "Select a printer",
                                  type: "radio",
                                  modelValue: $data.selectedPrinter,
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  options: $data.printers
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                $options.printSmallLabel ? (openBlock(), createBlock(_component_CoreActionButton, {
                                  key: 0,
                                  type: "button",
                                  loading: $data.zebraPrinting,
                                  click: () => {
                                    $options.printSmallLabel();
                                  },
                                  icon: $data.printIcon,
                                  text: "Print Small Label",
                                  color: "primary"
                                }, null, 8, ["loading", "click", "icon"])) : createCommentVNode("", true),
                                createVNode(_component_CoreActionButton, {
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  type: "submit",
                                  icon: $data.printIcon,
                                  text: "Print",
                                  color: "success"
                                }, null, 8, ["loading", "icon"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
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
                createVNode(_component_TransitionChild, {
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
                  createVNode("div", { class: "flex top-0 items-center justify-center p-4 text-center" }, [
                    createVNode(_component_TransitionChild, {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg flex items-center font-medium leading-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_PrinterIcon, { class: "h-5 w-5 mr-2" }),
                                  createTextVNode(" Print ")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { onClick: $options.handleClick }, [
                                createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                              ], 8, ["onClick"])
                            ]),
                            createVNode(_component_FormKit, {
                              type: "form",
                              "submit-label": "Update",
                              onSubmit: $options.generatePDF,
                              actions: false
                            }, {
                              default: withCtx(({ value }) => [
                                createVNode("div", { class: "py-5 px-5" }, [
                                  createVNode(_component_FormKit, {
                                    validation: "required",
                                    label: "Select a printer",
                                    type: "radio",
                                    modelValue: $data.selectedPrinter,
                                    "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                    options: $data.printers
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                  $options.printSmallLabel ? (openBlock(), createBlock(_component_CoreActionButton, {
                                    key: 0,
                                    type: "button",
                                    loading: $data.zebraPrinting,
                                    click: () => {
                                      $options.printSmallLabel();
                                    },
                                    icon: $data.printIcon,
                                    text: "Print Small Label",
                                    color: "primary"
                                  }, null, 8, ["loading", "click", "icon"])) : createCommentVNode("", true),
                                  createVNode(_component_CoreActionButton, {
                                    click: () => {
                                    },
                                    loading: $data.loading,
                                    type: "submit",
                                    icon: $data.printIcon,
                                    text: "Print",
                                    color: "success"
                                  }, null, 8, ["loading", "icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
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
          createVNode(_component_Dialog, {
            as: "div",
            class: "relative z-10"
          }, {
            default: withCtx(() => [
              createVNode(_component_TransitionChild, {
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
                createVNode("div", { class: "flex top-0 items-center justify-center p-4 text-center" }, [
                  createVNode(_component_TransitionChild, {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b px-3 py-3 flex items-center justify-between" }, [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg flex items-center font-medium leading-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_PrinterIcon, { class: "h-5 w-5 mr-2" }),
                                createTextVNode(" Print ")
                              ]),
                              _: 1
                            }),
                            createVNode("button", { onClick: $options.handleClick }, [
                              createVNode(_component_XMarkIcon, { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormKit, {
                            type: "form",
                            "submit-label": "Update",
                            onSubmit: $options.generatePDF,
                            actions: false
                          }, {
                            default: withCtx(({ value }) => [
                              createVNode("div", { class: "py-5 px-5" }, [
                                createVNode(_component_FormKit, {
                                  validation: "required",
                                  label: "Select a printer",
                                  type: "radio",
                                  modelValue: $data.selectedPrinter,
                                  "onUpdate:modelValue": ($event) => $data.selectedPrinter = $event,
                                  options: $data.printers
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t" }, [
                                $options.printSmallLabel ? (openBlock(), createBlock(_component_CoreActionButton, {
                                  key: 0,
                                  type: "button",
                                  loading: $data.zebraPrinting,
                                  click: () => {
                                    $options.printSmallLabel();
                                  },
                                  icon: $data.printIcon,
                                  text: "Print Small Label",
                                  color: "primary"
                                }, null, 8, ["loading", "click", "icon"])) : createCommentVNode("", true),
                                createVNode(_component_CoreActionButton, {
                                  click: () => {
                                  },
                                  loading: $data.loading,
                                  type: "submit",
                                  icon: $data.printIcon,
                                  text: "Print",
                                  color: "success"
                                }, null, 8, ["loading", "icon"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/printer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=index-a827b117.mjs.map
