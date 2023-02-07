<template>
  <form @submit="prevent" class="form-control p-8">
    <input
      type="text"
      placeholder="Escribe lo que quieras buscar..."
      v-model.lazy="userName"
      @input="onInput"
      class="input input-secondary w-1/2"
    />
  </form>
</template>
<script lang="ts">
import { useEmailsStore } from "@/store/store";
import { debounce, getSearchResults } from "@/utils";

export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    prevent(event: Event) {
      event.preventDefault();
    },
  },
  setup() {
    const emails = useEmailsStore();
    const onInput = debounce(async (e: Event) => {
      const value = (e.target as any).value;
      try {
        const searchResults = await getSearchResults(value);
        emails.setEmails(searchResults);
      } catch (error) {
        console.log(error);
      }
    }, 200);
    return { onInput };
  },
};
</script>
<style scoped></style>
