<template>
  <div>
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  }
})
</script>
