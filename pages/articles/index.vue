<template>
  <div container mx-auto>
    <div mx-1 sm:mx-0 my-16 class="articles">
      <ul space-y-2 v-if="articles">
        <li v-for="article of articles" :keys="article._id">
          <nuxt-link :to="`/article/${article.slug}`">
            <div flex h-32 gap-sm md="h-48 gap-lg" overflow-hidden>
              <div aspect-square md:aspect-video flex place-items-center class="cover">
                <img w-full h-full object-cover :src="article.cover" :alt="article.title" />
              </div>
              <div flex="~ col" gap-2 class="info">
                <div class="headline">
                  <h2 truncate md="text-2xl" font-semibold>
                    {{ article.title }}
                  </h2>
                  <h3 truncate text-sm md="text-lg">{{ article.subtitle }}</h3>
                </div>
                <p text-xs sm:text-sm md:text-md dark="text-light-900" max-h-full overflow-y-hidden>
                  {{ article.excerpt }}
                </p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  const request = useRequest();
  const articles = ref();

  const { data, error } = await request.get<Response<CRMArticle[]>>('/articles');
  if (data.value) {
    articles.value = data.value.data;
  }
</script>

<style scoped></style>
