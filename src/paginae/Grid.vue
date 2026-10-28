<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/" class="m-4 inline-block text-2xl">
    Home
  </RouterLink>

  <div
    class="m-4 grid h-[800px] w-[800px] grid-cols-4 grid-rows-3 gap-4 border-2"
  >
    <div
      class="col-span-3 flex flex-row-reverse items-end gap-4 bg-sky-500 p-4"
    >
      <div class="h-full w-18 bg-sky-200"></div>
      <div class="order-first h-[60%] w-18 bg-white"></div>
      <div class="h-[30%] w-18 bg-sky-200"></div>
      <div class="h-full w-18 flex-1 bg-sky-800"></div>
    </div>

    <div
      class="row-span-3 flex flex-col items-center justify-between bg-pink-500 p-4"
    >
      <div class="h-16 w-[80%] bg-pink-200"></div>

      <div
        class="grid h-[60%] w-full grid-cols-2 grid-rows-3 gap-3 bg-pink-200 p-3"
      >
        <div class="row-span-2 bg-pink-500"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="col-span-2 bg-pink-500"></div>
      </div>

      <div class="h-16 w-[40%] self-end bg-pink-200"></div>
    </div>

    <div
      class="row-span-2 flex flex-col-reverse flex-wrap gap-4 bg-lime-500 p-4"
    >
      <div class="h-[20%] w-12 bg-lime-200"></div>
      <div class="h-[20%] w-12 bg-lime-200"></div>
      <div class="order-first h-[20%] w-12 bg-white"></div>
      <div class="h-[20%] w-12 bg-lime-200"></div>
      <div class="order-first h-[20%] w-12 bg-white"></div>
      <div class="h-[20%] w-12 bg-lime-200"></div>
    </div>

    <div
      class="col-span-2 grid grid-cols-3 grid-rows-2 gap-3 bg-amber-400 p-4"
    >
      <div class="col-span-2 bg-amber-100"></div>
      <div class="row-span-2 bg-white"></div>
      <div class="bg-amber-100"></div>
      <div class="bg-amber-100"></div>
    </div>

    <div class="flex items-center justify-center bg-violet-500">
      <div class="h-22 w-22 rounded-full bg-violet-200"></div>
    </div>

    <div class="flex flex-wrap content-center gap-3 bg-teal-500 p-3">
      <div class="h-10 w-10 bg-teal-200"></div>
      <div class="h-10 w-10 bg-teal-200"></div>
      <div class="h-10 w-10 bg-teal-200"></div>
      <div class="h-10 w-10 bg-teal-200"></div>
      <div class="h-10 w-10 bg-teal-200"></div>
    </div>
  </div>
</template>