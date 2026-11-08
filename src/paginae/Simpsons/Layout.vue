<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'
import LogoSimpsons from '@/components/icones/LogoSimpsons.vue'
</script>

<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <header class="border-b border-black bg-yellow-300">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center
               justify-between gap-3 p-3 md:flex-row"
      >
        <LogoSimpsons class="h-auto w-32" />

        <nav class="flex items-center gap-6">
          <RouterLink
            to="/simpsons/gallery"
            active-class="font-bold"
          >
            Characters
          </RouterLink>

          <RouterLink
            to="/simpsons/about"
            active-class="font-bold"
          >
            About
          </RouterLink>

          <Button
            as-child
            variant="tertiarius"
            size="elongatis"
            class="bg-red-500 hover:bg-red-600"
          >
            <RouterLink to="/">Exit</RouterLink>
          </Button>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer
      class="border-t border-black bg-yellow-300 p-5 text-center text-sm"
    >
      <p>All Rights Reserved — © Matt Groening</p>
      <p class="mt-1 text-xs">
        This app was made by Aurora Murrocu
      </p>
    </footer>
  </div>
</template>