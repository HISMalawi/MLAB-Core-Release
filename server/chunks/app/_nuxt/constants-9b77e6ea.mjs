import { openBlock, createElementBlock, createElementVNode } from 'vue';

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
const constants = {
  dateFormatter: {
    day: "DD",
    month: "MM",
    year: "YYYY"
  }
};
const dateRange = ["1920", `${(/* @__PURE__ */ new Date()).getFullYear()}`];
const dateFormat = "DD/MMM/YYYY HH:mm";
const sex = [
  { name: "Male", label: "Male", value: "M" },
  { name: "Female", label: "Female", value: "F" }
];
const errorMessage = "An error occurred, please try again!";
const sessionExpiryMessage = "Session expired! Please login again";
const loginErrorMessage = "Login failed! Please check your credentials and try again";
const interpretations = [
  {
    name: "I"
  },
  {
    name: "S"
  },
  {
    name: "R"
  }
];

export { dateRange as a, sessionExpiryMessage as b, constants as c, dateFormat as d, errorMessage as e, interpretations as i, loginErrorMessage as l, render as r, sex as s };
//# sourceMappingURL=constants-9b77e6ea.mjs.map
