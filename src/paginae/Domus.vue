<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ref } from 'vue'
const dialogApertaEst = ref<boolean>(false)
const quaestio = ref<string>("")
const router = useRouter()
const cumKeyPressumEnter = (eventus: KeyboardEvent) => {
  if (eventus.key === "Enter") {
    const textusItinerans = quaestio.value.trim()

    if (textusItinerans.length > 8 && textusItinerans.endsWith("?")) {
      dialogApertaEst.value = false
      router.push({
        path: '/indecision',
        state: { quaestio: textusItinerans }
      })
    }
  }
}
</script>

<template>
  <div class="home-page">
  <img
    class="home-background"
    src="/imagines/tonitrui.png"
    alt=""
    aria-hidden="true"
  />
  <main
    class="flex min-h-screen flex-col items-center justify-center
           gap-12 bg-[rgb(21,25,52)] px-6 py-12
           text-center font-sans text-white"
  >
    <h1
      class="text-5xl font-bold leading-tight transition-all
             md:text-7xl lg:text-8xl"
    >
      <span class="text-[rgb(24,182,246)]">Diseño</span> Web y
      <br />
      Apps
      <span class="text-[rgb(24,182,246)]">Interactivas</span>
    </h1>

    <p class="text-lg transition-all md:text-2xl lg:text-3xl">
      Aprendiendo a crear aplicaciones web
    </p>

    <div class="flex flex-wrap justify-center gap-3">
     <Dialog
  :open="dialogApertaEst"
  @update:open="dialogApertaEst = $event"
>
  <DialogTrigger as-child>
    <Button
      class="bg-[rgb(24,182,246)] text-white
             hover:bg-[rgba(24,182,246,0.7)]
             md:px-6 md:py-5 md:text-lg"
    >
      Sí o No
    </Button>
  </DialogTrigger>

  <DialogContent
    class="sm:max-w-[425px] bg-[rgb(21,25,52)]
           text-white border-[rgb(24,182,246)]"
  >
    <DialogHeader>
      <DialogTitle style="color: white">
        Pregúntame
      </DialogTitle>

      <DialogDescription class="text-gray-300">
        No sigas con tus dudas, yo te responderé Sí o NO.
      </DialogDescription>
    </DialogHeader>

    <div class="mt-4">
      <Input
  v-model="quaestio"
  placeholder="Escribe aquí tu pregunta..."
  @keydown="cumKeyPressumEnter"
/>
    </div>
  </DialogContent>
</Dialog>

      <Button
        as-child
        class="bg-[rgb(24,182,246)] text-white
               hover:bg-[rgba(24,182,246,0.7)]
               md:px-6 md:py-5 md:text-lg"
      >
        <RouterLink to="/batman">Batman</RouterLink>
      </Button>

      <Button
        as-child
        class="bg-[rgb(24,182,246)] text-white
               hover:bg-[rgba(24,182,246,0.7)]
               md:px-6 md:py-5 md:text-lg"
      >
        <RouterLink to="/simpsons">Simpsons</RouterLink>
      </Button>

      <Button
        as-child
        class="bg-[rgb(24,182,246)] text-white
               hover:bg-[rgba(24,182,246,0.7)]
               md:px-6 md:py-5 md:text-lg"
      >
        <a
          href="https://www.upv.es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UPV
        </a>
      </Button>
    </div>
  </main>
  </div>
</template>
<style scoped>
.home-page {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  background-color: rgb(21, 25, 52);
}

.home-background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  z-index: -1;
  opacity: 0.2;
}

main {
  background-color: transparent;
}

main > h1 {
  color: white;
}
</style>