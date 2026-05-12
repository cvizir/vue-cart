<template>
<div>
  <list />
  <info />
</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ListView' })
import { onMounted } from 'vue'
import List from './components/list.vue';
import Info from './components/info.vue';
</script>

<style>
</style>
