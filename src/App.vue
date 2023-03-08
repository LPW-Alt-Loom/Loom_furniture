<script setup>
import { RouterView } from "vue-router";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
</script>

<template>
  <MyHeader />
  <RouterView />
  <MyFooter />
</template>
<style lang="scss"></style>
