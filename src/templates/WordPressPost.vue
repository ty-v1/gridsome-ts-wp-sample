<template>
    <Layout>
        <h1 v-html="$page.wordPressPost.title"/>
        <img v-if="$page.wordPressPost.featuredMedia"
             :src="$page.wordPressPost.featuredMedia.sourceUrl"
             :width="$page.wordPressPost.featuredMedia.mediaDetails.width"
             :alt="$page.wordPressPost.featuredMedia.altText"/>
        <div v-html="$page.wordPressPost.content"/>
        <template v-if="$page.wordPressPost.categories.length">
            <h4>Posted in</h4>
            <ul class="list categories">
                <li v-for="category in $page.wordPressPost.categories" :key="category.id">
                    <g-link :to="category.path">{{ category.title }}</g-link>
                </li>
            </ul>
        </template>
    </Layout>
</template>

<page-query>
    # ref https://gist.github.com/joshangell/6b590ca1953599303e207f89f0181824
    query WordPressPost ($id: ID!) {
    wordPressPost(id: $id) {
    id
    status
    date
    title
    content
    featuredMedia {
    sourceUrl
    altText
    mediaDetails {
    width
    }
    }
    categories {
    id
    title
    path
    }
    }
    }
</page-query>

<script>
    export default {
        metaInfo() {
            return {
                title: this.$page.wordPressPost.title,
            };
        },
    };
</script>

<style>
    ul.list {
        list-style: none;
        padding: 0;
    }

    ul.list li {
        display: inline-block;
        margin-right: 0.25em;
    }

    ul.list.tags li a {
        padding: 0.25em 0.5em;
        background-color: lightgray;
    }

    ul.list.categories li:after {
        content: ',';
        display: inline-block;
    }

    ul.list li:last-child:after {
        content: '';
    }
</style>
