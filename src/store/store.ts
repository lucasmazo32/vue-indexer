import { reactive } from "vue";
import { defineStore } from "pinia";
import type { HitModel } from "@/models";

export const useEmailsStore = defineStore("emailRecords", {
  state: () => {
    const emails = reactive([] as Array<HitModel>);
    return { emails };
  },
  getters: {
    getEmails: (state) => state.emails,
  },
  actions: {
    setEmails(r: Array<HitModel>) {
      this.emails = r;
    },
  },
});
