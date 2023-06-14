<template>
    <ForumList v-for="category in props.categories"
        :key="category.id"
        :forums="getForumsForCategory(category)"
        :title="category.name"
        :categoryId="category.id"
    />
</template>

<script setup>
import ForumList from '@/components/ForumList.vue';
import { defineProps } from 'vue'
import sourceData from '@/data.json'

const props = defineProps({
    categories: {
        type: Array,
        required: true
    }
})

const getForumsForCategory = ((category) => {
    return sourceData.forums.filter(forum => forum.categoryId === category.id)
})
</script>

<style></style>