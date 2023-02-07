<script setup lang="ts">
import HeaderForPageVue from "@/components/HeaderForPage.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import ResultsTable from "@/components/ResultsTable.vue";
</script>

<template>
  <main>
    <HeaderForPageVue />
    <SearchComponent />
    <ResultsTable />
  </main>
</template>
