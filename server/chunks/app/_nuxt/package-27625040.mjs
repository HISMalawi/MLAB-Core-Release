const name = "IBLIS";
const scripts = {
  build: "nuxt build",
  dev: "nuxt dev",
  generate: "nuxt generate",
  "git-tag": "tsc version.ts && node version.js && rm version.js",
  preview: "nuxt preview",
  postinstall: "nuxt prepare",
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:preview": "vitepress preview docs"
};
const devDependencies = {
  "@pinia-plugin-persistedstate/nuxt": "^1.1.1",
  nuxt: "3.6.5",
  vitepress: "^1.0.0-rc.25",
  "vue-i18n": "^9.4.0"
};
const dependencies = {
  "@ckeditor/ckeditor5-build-classic": "^39.0.1",
  "@ckeditor/ckeditor5-vue": "^5.1.0",
  "@formkit/icons": "^0.16.4",
  "@formkit/nuxt": "^0.16.2",
  "@formkit/vue": "^0.16.2",
  "@headlessui/vue": "^1.7.13",
  "@heroicons/vue": "^2.0.14",
  "@nuxt/types": "^2.16.3",
  "@nuxt/vite-builder": "^3.2.3",
  "@nuxtjs/i18n": "^8.0.0-rc.4",
  "@nuxtjs/tailwindcss": "^6.3.1",
  "@pinia/nuxt": "^0.4.7",
  "@tailwindcss/line-clamp": "^0.4.2",
  "@types/file-saver": "^2.0.5",
  "@types/fs-extra": "^11.0.2",
  "@types/lodash": "^4.14.195",
  "@types/node": "^20.6.1",
  "@types/vue": "^2.0.0",
  "@types/xlsx": "^0.0.36",
  "@unhead/vue": "^1.1.23",
  "@vueform/multiselect": "^2.5.8",
  "@vuepic/vue-datepicker": "^5.1.2",
  "chart.js": "^4.2.1",
  child_process: "^1.0.2",
  "file-saver": "^2.0.5",
  "fs-extra": "^11.1.1",
  html2canvas: "^1.4.1",
  "html2pdf.js": "^0.10.1",
  jsbarcode: "^3.11.5",
  jspdf: "^2.5.1",
  lodash: "^4.17.21",
  moment: "^2.29.4",
  nitro: "^2.2.28",
  "node-sass": "^8.0.0",
  pinia: "^2.0.33",
  quagga: "^0.12.1",
  sass: "^1.58.0",
  tailwindcss: "^3.2.4",
  vue: "3",
  "vue-chartjs": "^5.2.0",
  "vue-doc-exporter": "^1.1.7",
  "vue-json-excel3": "^0.0.9",
  "vue-router": "^4.1.6",
  "vue3-easy-data-table": "^1.5.31",
  "vue3-toastify": "^0.1.5",
  "vue3-xlsx": "^1.1.2",
  vuex: "^4.1.0"
};
const version = "v3.0.1-alpha-3";
const Package = {
  "private": true,
  name,
  scripts,
  devDependencies,
  dependencies,
  version
};

export { Package as P };
//# sourceMappingURL=package-27625040.mjs.map
