import { e as defineStore } from '../server.mjs';

const useFacilityStore = defineStore("facility", {
  state: () => ({
    details: {}
  }),
  actions: {
    fetchFacility(data) {
      this.details = data;
    }
  },
  persist: true
});

export { useFacilityStore as u };
//# sourceMappingURL=facility-ee716abe.mjs.map
