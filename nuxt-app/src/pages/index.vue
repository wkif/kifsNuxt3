<template>
  <NuxtLayout name="custom">
    <template #header-box>
      <div>
        <NuxtLink to="/">首页</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/about">关于</NuxtLink>
      </div>
    </template>
    <template #left-sider>
      <div>快速入门</div>
      <div>使用</div>
      <div>目录结构</div>
    </template>
    <template #body-content>
      <div>
        我应该显示一点内容
        <n-button type="error">naive-ui</n-button>
      </div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  layout: false,
};
</script>
<script lang="ts" setup>
import { useUserStore } from "@/stores";
import { NButton } from "naive-ui";
const route = useRoute();
console.log("useUserStore", useUserStore);

// const { data: list } = await useAsyncData("list", () =>
//   $fetch("http://jsonplaceholder.typicode.com/posts")
// );
const { data: list } = await useFetch(
  "http://jsonplaceholder.typicode.com/posts"
);
console.log("list", list.value);
const a = ifLogin();
console.log(a, "a");
</script>
