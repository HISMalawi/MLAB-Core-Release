import { unpackMeta, composableNames } from 'unhead';
import { r as resolveUnrefHeadInput, u as useHead } from '../server.mjs';
import { ref, watchEffect } from 'vue';

function useSeoMeta(input, options) {
  const headInput = ref({});
  watchEffect(() => {
    const resolvedMeta = resolveUnrefHeadInput(input);
    const { title, titleTemplate, ...meta } = resolvedMeta;
    headInput.value = {
      title,
      titleTemplate,
      meta: unpackMeta(meta)
    };
  });
  return useHead(headInput, options);
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

export { useSeoMeta as u };
//# sourceMappingURL=index-10289ccc.mjs.map
