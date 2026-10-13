<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="text-6xl font-bold underline">Hola Mundo</h1>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/servicios">Servicios</RouterLink>
  </nav>

  <RouterView />
</template>