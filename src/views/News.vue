<template>
    <div class="news">
        <h1>Google News Feeds!</h1>
        <ul class="list-group text-center">
            <li class="" v-for="(item, index) in news" :key="index">
                <div class="card">
                  <div class="card-header">
                    {{ item.title }}
                  </div>
                  <img :src="item.urlToImage" class="card-img-top" :alt="item.title">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text" v-html="item.description"></p>
                    <a :href="item.url" class="btn btn-primary" target="_blank">{{ item.source.name }}</a>
                  </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "news",
    computed: {
        news() {
            return this.$store.state.news;
        }
      },
      mounted() {
        this.$store.dispatch('loadNews');
      }
}
</script>