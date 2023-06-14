<template>
    <h1>{{ category.name }}</h1>
    <ForumList  
        :title="category.name"
        :forums="getForumsForCategory(category)"
        :category-id="category.id"
    />
</template>

<script setup>
import ForumList from '@/components/ForumList.vue';
import sourceData from '@/data.json';
import { defineProps, computed } from 'vue'

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const category = computed(() => {
    return sourceData.categories.find(category => category.id === props.id)
})

const getForumsForCategory = ((category) => {
    return sourceData.forums.filter(forum => forum.categoryId === category.id)
})

</script>

<style></style>