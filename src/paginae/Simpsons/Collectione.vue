<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { computed, ref } from 'vue'
import { characters } from './data'
import { useRouter } from 'vue-router'

const router = useRouter()
const inPagina = 6

const nuncPagina = ref(1)

const totalPaginae = Math.ceil(characters.length / inPagina)

const listaSimpsons = computed(() => {
  const inicio = (nuncPagina.value - 1) * inPagina
  const fin = inicio + inPagina
  return characters.slice(inicio, fin)
})

const ireAdPaginam = (pagina: number) => {
  if (pagina >= 1 && pagina <= totalPaginae) {
    nuncPagina.value = pagina
  }
}

const paginaNumeri: number[] = [...Array(totalPaginae)].map((_, i) => i + 1)
</script>

<template>
  <div class="mx-auto my-8 flex w-full flex-col items-center gap-8 px-4">
    <div class="text-center">
      <h1 class="mb-5 text-xl font-bold lg:text-5xl">
        The Simpsons Quote App
      </h1>

      <p class="mb-5">
        Click on the quote of your favorite character
      </p>
    </div>

    <div class="mx-auto grid grid-cols-2 gap-8 md:grid-cols-3">
      <Card
        v-for="character in listaSimpsons"
        :key="character.id"
        class="h-[240px] w-[220px] cursor-pointer
               transition-colors hover:bg-red-500 hover:text-white"
      >
       <CardContent
  @click="router.push(`/simpsons/gallery/${character.id}`)"
  class="flex w-full flex-col items-center gap-1 px-0"
>
  <img
    :src="`/imagines/simpsons/${character.imago}`"
    class="mt-2 h-42 w-48 rounded-md border border-black
           bg-yellow-300 object-cover object-top"
  />

  <h2 class="text-lg font-medium">
    {{ character.nomen }}
  </h2>
</CardContent>
      </Card>
    </div>
    <div class="mt-4 flex items-center justify-center gap-2">
 <button
  @click="ireAdPaginam(nuncPagina - 1)"
  :disabled="nuncPagina === 1"
  :class="[
    'px-4 py-2 rounded-md font-medium transition-colors',
    nuncPagina === 1
      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
      : 'bg-yellow-300 hover:bg-red-500 hover:text-white',
  ]"
>
  Anterior
</button>
  <button
  v-for="pagina in paginaNumeri"
  @click="ireAdPaginam(pagina)"
  :class="[
    'h-10 w-10 rounded-md font-medium transition-colors',
    nuncPagina === pagina
      ? 'bg-red-500 text-white'
      : 'bg-yellow-300 hover:bg-red-500 hover:text-white',
  ]"
>
  {{ pagina }}
</button>

 <button
  @click="ireAdPaginam(nuncPagina + 1)"
  :disabled="nuncPagina === totalPaginae"
  :class="[
    'px-4 py-2 rounded-md font-medium transition-colors',
    nuncPagina === totalPaginae
      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
      : 'bg-yellow-300 hover:bg-red-500 hover:text-white',
  ]"
>
  Siguiente
</button>
</div>
  </div>
</template>