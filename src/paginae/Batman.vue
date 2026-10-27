<script setup lang="ts">
import Carrus from '@/components/Carrus.vue'
import NavigatioPrimarius from '@/components/NavigatioPrimarius.vue'
import { useMouseMotio } from '@/composables/useMouseMotio'
import { scrollToSection } from '@/utils/scrollToSection'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { shallowRef } from 'vue'
import type { DateValue } from '@internationalized/date'

const { mousePositione, cumMouseMove, cumMouseLeave } = useMouseMotio()

const vehicles = [
  {
    name: 'Avión',
    className: 'unus',
    image: 'avion',
    year: 2005,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.',
  },
  {
    name: 'Moto',
    className: 'duo',
    image: 'moto',
    year: 2006,
    description:
      'Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.',
  },
  {
    name: 'Coche',
    className: 'tribus',
    image: 'car',
    year: 2007,
    description:
      'Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non.',
  },
]
const menuItems = [
  {
    label: 'Portada',
    href: '#',
    onClick: () => scrollToSection('#'),
  },
  {
    label: 'Vehículos',
    href: '#vehiculis',
    onClick: () => scrollToSection('#vehiculis'),
  },
  {
    label: 'Imágenes',
    href: '#videre',
    onClick: () => scrollToSection('#videre'),
  },
  {
    label: 'Contacto',
    href: '#contactus',
    onClick: () => scrollToSection('#contactus'),
  },
]
const dies = shallowRef<DateValue>()
</script>



<template>
  <div class="batman">
    <NavigatioPrimarius :items="menuItems" home-route="/domus" />

    <header class="titulus">
      <h1>Batman</h1>
     <div
  id="titulus-batman"
  class="titulus-img"
  @mousemove="cumMouseMove"
  @mouseleave="cumMouseLeave"
  :style="{
    backgroundPositionX: `calc(50% + ${mousePositione.x}px)`,
    backgroundPositionY: `calc(50% + ${mousePositione.y}px)`,
    transition: 'background-position 0.1s ease-out',
  }"
></div>
      <p>
        Él puede tomar la decisión que nadie más puede,
        la decisión correcta.
      </p>
    </header>

    <section id="vehiculis">
      <div class="vehiculis-arca">
        <article
          v-for="vehicle in vehicles"
          :key="vehicle.image"
          :class="['item', vehicle.className]"
        >
          <div class="notitia">
            <h2>{{ vehicle.name }}</h2>
            <p>{{ vehicle.description }}</p>
            <small>Fabricado en {{ vehicle.year }}</small>
          </div>

          <img
            :src="`/imagines/batman/${vehicle.image}.jpg`"
            :alt="`${vehicle.name} de Batman`"
          />
        </article>
      </div>

      <div class="vehiculis-titulus">
        <h1>Vehículos de Batman</h1>
      </div>
    </section>

    <div id="videre">
      <Carrus />
      <section id="contactus" class="w-full py-12 bg-gray-100">

  <div class="container mx-auto max-w-5xl px-4">

    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Contacta con Batman</h2>
          
    <div class="flex flex-col lg:flex-row gap-8 items-center">

            <!-- Mapa de Google Maps -->
      <div class="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <div class="aspect-square">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.3627597518!2d-0.3489032094454206!3d39.48372259839009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488259073375%3A0xfb410ba707ca33c9!2sUPV%20-%20Facultat%20de%20Belles%20Arts!5e0!3m2!1sit!2ses!4v1793106346381!5m2!1sit!2ses"
  title="Mappa della Facoltà di Belle Arti UPV"
  class="w-full h-full rounded-lg"
  style="border: 0"
  allowfullscreen
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
></iframe>
        </div>
      </div>

            <!-- Formulario -->
      <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
        <form  class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square">
          <div class="space-y-2">
                  
           <Label for="nomen">Nombre</Label>
           <Input id="nomen" name="nombre" type="text" required />

          </div>
                
          <div class="space-y-2">
              
           <div class="space-y-2">
  <Label for="cognomen">Apellidos</Label>
  <Input
    id="cognomen"
    name="apellidos"
    type="text"
    required
  />
</div>

<div class="space-y-2">
  <Label for="email">Correo</Label>
  <Input
    id="email"
    name="email"
    type="email"
    required
  />
</div>

          </div>

          <div class="space-y-2">
  <Label>Fecha de la misión</Label>

  <Popover>
    <PopoverTrigger as-child>
      <Button type="button" variant="outline">
        <span v-if="dies">
          {{ dies.day }}/{{ dies.month }}/{{ dies.year }}
        </span>
        <span v-else>
          Selecciona una fecha
        </span>
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-auto p-0">
      <Calendar v-model="dies" />
    </PopoverContent>
  </Popover>
</div>

          <div class="space-y-2">

            <Label for="message">Mensaje</Label>
<Textarea
  id="message"
  name="mensaje"
  required
/>

          </div>
<div class="space-y-2">
  <Label>Fecha de la misión</Label>

  <Popover>
    <PopoverTrigger as-child>
      <Button type="button" variant="outline">
        Selecciona una fecha
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-auto p-0">
      <Calendar />
    </PopoverContent>
  </Popover>
</div>
          Poner un botón para enviar la solicitud
              
        </form>
      </div>
    </div>
  </div>
</section>

<footer class="w-full bg-gray-900 text-gray-300 py-12">
   <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

    <div class="space-y-4 text-center md:text-left">

      <h3 class="text-xl font-bold text-white">Información de Contacto</h3>
            
        <div class="space-y-2">
          <p class="flex items-center gap-2 justify-center md:justify-start">

            +1 (555) 123-4567

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">

            batman@wayneenterprises.com

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">

            Wayne Manor, Gotham City

          </p>
        </div>
      </div>

      <!-- Redes sociales -->
      <div class="space-y-4 text-center md:text-left text-gray-400">
        <h3 class="text-xl font-bold text-white">Síguenos</h3>
        <div class="flex gap-8 justify-center">
        
          Icono de X -
          Icono de Instagram -
          Icono de Linkedin - 
          Icono de MessageCircle
              
        </div>
    </div>
  </div>
</footer>
    </div>
  </div>
</template>

<style scoped>
.batman {
  font-family: Arial, Helvetica, sans-serif;
}

.icon-home {
  color: slateblue;
  width: 3rem;
  height: 3rem;
}

.icon-home:hover {
  color: white;
  background-color: slateblue;
}

.extra-nav {
  background-color: white;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 10;
}

.titulus {
  position: relative;
}

.titulus-img {
  background-image: url("/imagines/batman/batman.jpg");
  background-size: 100% 100%;
  background-position: center;
  aspect-ratio: 8 / 7;
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute;
 top: calc(100vw * 0.5);
  width: 100%;
  text-align: center;
  font-size: 5rem;
  color: white;
  pointer-events: none;
  font-family: "batman", sans-serif;
}

.titulus > p {
  position: absolute;
  top: calc(100vw * 0.25);
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events: none;
  font-family: "batman", sans-serif;
  display: none;
}

#vehiculis {
  max-width: 510px;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  scroll-margin-top: 4rem;
}

#videre {
  scroll-margin-top: 4rem;
}

.vehiculis-titulus {
  min-height: 5.5rem;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.vehiculis-arca {
  order: 1;
  display: flex;
  flex-direction: column;
}

.item {
  padding: 1.5rem 0;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  min-width: 0;
}

.item > img {
  width: 450px;
  max-width: 90%;
  height: auto;
  object-fit: contain;
}

.unus {
  background-color: rgba(220, 220, 220, 0.2);
  order: 2;
}

.duo {
  background-color: rgba(220, 220, 220, 0.8);
}

.tribus {
  background-color: rgba(220, 220, 220, 0.8);
  order: 3;
}

.notitia {
  width: 90%;
}

.notitia > h2 {
  font-size: 1.7rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 1rem;
  text-align: center;
}

.notitia > small {
  display: block;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
}

@media (min-width: 640px) {
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
  }

  #vehiculis {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  .titulus > p {
    display: block;
  }

  #vehiculis {
    max-width: 900px;
  }

  .item {
    flex-direction: row;
    min-height: 320px;
  }

  .notitia {
    width: 40%;
  }

  .item > img {
    max-width: 50%;
  }

  .unus > img {
    order: -1;
  }
}

@media (min-width: 1024px) {
  #vehiculis {
    max-width: 1280px;
  }

  .vehiculis-arca {
    flex-direction: row;
  }

  .item {
    flex: 1;
    flex-direction: column;
    min-height: 560px;
  }

  .notitia {
    width: 90%;
  }

  .item > img {
    max-width: 90%;
  }

  .unus > img {
    order: 0;
  }
}
</style>