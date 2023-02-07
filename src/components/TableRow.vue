<template>
  <label v-bind:for="id" class="relative table-row cursor-pointer">
    <th class="text-ellipsis overflow-hidden">
      {{ subject }}
    </th>
    <td class="text-ellipsis overflow-hidden">{{ fromEmail }}</td>
    <td class="text-ellipsis overflow-hidden">{{ toEmail }}</td>
  </label>
  <input type="checkbox" v-bind:id="id" class="modal-toggle" />
  <label v-bind:for="id" class="modal cursor-pointer">
    <label for="" class="modal-box relative w-1/2 max-w-fit">
      <div class="card-body">
        <span>From: {{ fromEmail }}</span>
        <span>To: {{ toEmail }}</span>
        <h2 class="text-lg font-bold">{{ subject }}</h2>
        <span class="mt-6">{{ message }}</span>
      </div>
    </label>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["subject", "fromEmail", "toEmail", "id", "message"],
});
</script>
