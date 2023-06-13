<template>
    <div class="col-large push-top">

        <h1>{{ thread.title }}</h1>

        <PostList :posts="threadPosts"/>
    </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed } from 'vue';
import PostList from '@/components/PostList.vue'

// Props
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

// Data
const threads = sourceData.threads
const posts = sourceData.posts

// Computed property
const thread = computed(() => {
    return threads.find(thread => thread.id === props.id)
})

const threadPosts = computed(() => {
    return posts.filter(post => post.threadId === props.id)
})
</script>


<style scoped></style>