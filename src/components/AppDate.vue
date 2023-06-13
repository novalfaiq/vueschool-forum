<template>
    <span :title="humanFriendlyDate()">
        {{ diffForHumans() }}
    </span>
</template>

<script setup>
const props = defineProps({
    timestamp: {
        type: Number,
        required: true
    }
})

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

const diffForHumans = () => {
    return dayjs.unix(props.timestamp).fromNow()
}

const humanFriendlyDate = () => {
    return dayjs.unix(props.timestamp).format('llll')
}
</script>

<style></style>