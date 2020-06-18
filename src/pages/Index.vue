<template>
    <Layout>
        <h1>Welcome to my blog :)</h1>
        <ul class="post-list">
            <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
                <Post :post="node"/>
            </li>
        </ul>
        <Pager :info="$page.allWordPressPost.pageInfo"/>
    </Layout>
</template>

<page-query>
    query Home ($page: Int) {
    allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
    totalPages
    currentPage
    }
    edges {
    node {
    id
    title
    path
    excerpt
    }
    }
    }
    }
</page-query>

<script lang="ts">
    import {Pager} from 'gridsome';
    import Post from '@/components/Post.vue';
    import Vue from 'vue';

    export default Vue.extend({
        components: {
            Pager,
            Post
        },
        data() {
            return {
                value: 'hoge'
            };
        },
        created() {
            // this.$
        }
    });
</script>
