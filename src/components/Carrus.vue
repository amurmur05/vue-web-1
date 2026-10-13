<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

interface Props {
  photos?: string[]
  basePath?: string
  autoplayDelay?: number
  loop?: boolean
  dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  photos: () => [
    'justice',
    'arkham',
    'superman',
    'varios',
    'villana',
    'villano',
    'grupo',
    'robin',
  ],
  basePath: '/imagines/batman',
  autoplayDelay: 2000,
  loop: true,
  dragFree: true,
})

const plugins = [
  Autoplay({
    delay: props.autoplayDelay,
  }),
]
</script>

<template>
  <section
    class="flex min-h-[60vh] w-full items-center justify-center
           bg-gray-900 px-6 py-16 md:px-14 lg:min-h-[95vh]"
  >
    <Carousel
      class="w-full max-w-md md:max-w-2xl lg:max-w-4xl"
      :opts="{
        dragFree: props.dragFree,
        loop: props.loop,
      }"
      :plugins="plugins"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(photo, index) in props.photos"
          :key="photo"
        >
          <div class="p-1">
            <Card class="border-none bg-gray-900 shadow-none">
              <CardContent
                class="flex aspect-[6/4] items-center
                       justify-center p-6"
              >
                <img
                  :src="`${props.basePath}/${photo}.jpg`"
                  :alt="`Imagen ${index + 1}: ${photo}`"
                  class="h-full w-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious
        class="hidden items-center justify-center
               bg-gray-900 text-white md:flex"
      />
      <CarouselNext
        class="hidden items-center justify-center
               bg-gray-900 text-white md:flex"
      />
    </Carousel>
  </section>
</template>