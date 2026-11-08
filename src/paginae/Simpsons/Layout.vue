<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="grid min-h-screen grid-rows-3">
    <header class="bg-yellow-300"></header>

    <main>
      <RouterView />
    </main>

    <footer></footer>
  </div>
</template>