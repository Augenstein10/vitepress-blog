<script setup>
import Giscus from "@giscus/vue";
import { storeToRefs } from "pinia";
import { mainStore } from "@/store";

const store = mainStore();
const { themeType} = storeToRefs(store);
</script>

<template>
  <div class="mt-[100px]">
    <Giscus
      id="comments"
      repo="Augenstein10/vitepress-blog"
      repoId="R_kgDON2Nd7w"
      category="Announcements"
      categoryId="DIC_kwDON2Nd784CnD6E"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      :theme="themeType == 'dark' ? 'dark_tritanopia':'light'"
      lang="zh-CN"
      loading="lazy"
    />
  </div>
</template>
