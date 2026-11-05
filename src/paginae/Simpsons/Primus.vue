<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import LogoSimpsons from '@/components/icones/LogoSimpsons.vue'
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center
           gap-4 bg-yellow-300 p-4 text-center"
  >
    <LogoSimpsons class="h-auto w-full max-w-[500px]" />
  <h1 class="text-xl font-medium">
      Discover some of the most amazing Quotes from The Simpsons
    </h1>

    <strong>This is an unofficial app (even though it looks so cool!)</strong>

    <div class="mt-8 flex gap-5">
      <Button as-child variant="tertiarius"size="elongatis">
        <RouterLink to="/">Exit</RouterLink>
      </Button>

      <Button type="button" variant="tertiarius"size="elongatis">
        Enter
      </Button>
    </div>
 <div class="flex gap-12">
  <img
    src="/imagines/simpsons/bart.png"
    alt="Bart Simpson"
    width="280"
    class="hidden object-contain md:block"
  />

  <img
    src="/imagines/simpsons/homer.png"
    alt="Homer Simpson"
    width="190"
    class="mt-20 hidden object-contain md:block"
  />

  <img
    src="/imagines/simpsons/moe.png"
    alt="Moe Szyslak"
    width="220"
    class="mt-12 object-contain"
  />
</div>
  </main>

</template>