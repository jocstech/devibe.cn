<template>
  <div class="page-view">
    <div class="article-view" py-8>
      <article v-if="article" mx-auto p-6 prose bg-white dark="bg-trueGray-9" shadow-xl max-w-4xl>
        <div class="head-info" text-sm text-trueGray-7 flex place-items-center gap-2>
          <div i="carbon-time"></div>
          <strong>创建时间 </strong>
          <span>{{ article.created_at }}</span>
        </div>
        <h1>{{ article.title }}</h1>
        <h2>{{ article.subtitle }}</h2>
        <div class="sub-info" my-8 p-1 rounded bg-trueGray-2 dark:bg-trueGray-8>
          <div v-if="article.author" class="author" flex place-items-center gap-2>
            <img w-8 rounded-full :src="article.author.avatar" :alt="article.author.username" />
            <span text-lg>{{ article.author.name }}</span>
          </div>
        </div>
        <div class="content" v-html="article.content"></div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const request = useRequest();
  const article = ref();
  const route = useRoute();
  const slug = route.params.slug;
  if (slug) {
    const { data, error } = await request.get<Response<CRMArticle>>(
      `/articles/slug/${route.params.slug}`,
    );
    if (data.value) {
      article.value = data.value.data;
    }
  }
</script>

<style scoped></style>
