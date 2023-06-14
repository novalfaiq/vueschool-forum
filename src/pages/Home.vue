<template>
   <h1>Welcome to our Forum</h1>
   <CategoryList :categories="categories"/>
</template>

<script setup>
import sourceData from '@/data.json'
import CategoryList from '../components/CategoryList.vue';

// Data
const categories = sourceData.categories
</script>

<style scoped></style>
