<template>
    <div class="test">
        <h2 v-html="post.title"/>
        <div v-html="post.excerpt"/>
        <g-link :to="post.path">
            Read More
        </g-link>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style lang="scss" scoped>
    $color: #232323 !default;

    .test {
        background: $color;
    }
</style>
