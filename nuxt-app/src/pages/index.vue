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
      <div>我应该显示一点内容</div>
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
const route = useRoute();
console.log("useUserStore", useUserStore);
// console.log("route", route.name);
</script>
