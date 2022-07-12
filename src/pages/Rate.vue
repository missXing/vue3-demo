<template>
  <br />
  <Rate v-model="score">课程评分:</Rate>
  <br />
  <Rate v-model="score" theme="green">课程评分:</Rate>
</template>

<script setup>
import { ref } from "vue";
import Rate from "../components/Rate.vue";
const score = ref(3.5);
</script>
