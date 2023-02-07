<script lang="ts">
import { useEmailsStore } from "@/store/store";
import { storeToRefs } from "pinia";
import TableRow from "./TableRow.vue";

export default {
  setup() {
    const emailStore = useEmailsStore();
    const emails = storeToRefs(emailStore).emails;
    return { emails };
  },
  components: { TableRow },
};
</script>
<template>
  <div class="p-8 w-full">
    <table class="table table-fixed w-full overflow-x-hidden">
      <tr class="w-full bg-secondary text-secondary-content">
        <th class="w-2/5">Subject</th>
        <th>From</th>
        <th>To</th>
      </tr>
      <tbody class="w-full">
        <TableRow
          v-for="result in emails"
          :key="result._id"
          :subject="result._source['Subject']"
          :from-email="result._source['From']"
          :to-email="result._source['To']"
          :id="result._id"
          :message="result._source['Message']"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
