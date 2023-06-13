<template>
    <div class="col-large push-top">

        <h1>{{ thread.title }}</h1>

        <PostList :posts="threadPosts"/>

        <div class="col-full">
            <form @submit.prevent="addNewPost">
                <div class="form-grup">
                    <textarea v-model="newPostText" name="" id="" cols="30" rows="10" class="form-input"></textarea>
                </div>
                <div class="form-actions">
                    <button class="btn-blue">Submit post</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed, ref } from 'vue'
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
const posts = ref(sourceData.posts)
const newPostText = ref('')

// Computed property
const thread = computed(() => {
    return threads.find(thread => thread.id === props.id)
})

const threadPosts = computed(() => {
    return posts.value.filter(post => post.threadId === props.id)
})

// Methods
const addNewPost = () => {
    const postId = 'ggwp' + Math.random()
    const post = {
        id: postId,
        text: newPostText.value,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: props.id,
        userId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3',
    }

    posts.value.push(post)
    thread.value.posts.push(postId)
}

</script>


<style scoped></style>