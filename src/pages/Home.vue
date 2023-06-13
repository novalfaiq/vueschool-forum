<template>
   <h1>Welcome to our Forum</h1>
   <ThreadList :threads="threads"/>
</template>

<script setup>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'

// Data
const threads = sourceData.threads
</script>

<style scoped></style>
