<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { House, Menu } from '@lucide/vue'
import Carrus from '@/components/Carrus.vue'
import { Toggle } from '@/components/ui/toggle'
import { scrollToSection } from '@/utils/scrollToSection'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const menuOpen = ref(false)

const menu = [
  { text: 'Portada', target: '#' },
  { text: 'Vehículos', target: '#vehiculis' },
  { text: 'Imágenes', target: '#videre' },
  { text: 'Contacto', target: '#contactus' },
]

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

const navigate = (target: string) => {
  scrollToSection(target)
  menuOpen.value = false
}
</script>

<template>
  <div class="batman">
    <Toggle
      aria-label="Apri o chiudi il menu"
      aria-controls="batman-menu"
      :aria-expanded="menuOpen"
      class="fixed right-4 top-2 z-50 bg-slate-500
             text-white sm:hidden"
      @click="menuOpen = !menuOpen"
    >
      <Menu />
    </Toggle>

    <nav
      id="batman-menu"
      class="extra-nav flex-col justify-between px-3
             sm:flex-row sm:items-center"
      :class="menuOpen ? 'flex' : 'hidden sm:flex'"
    >
      <RouterLink to="/domus" aria-label="Home">
        <House class="icon-home" />
      </RouterLink>

      <NavigationMenu>
        <NavigationMenuList class="flex flex-col sm:flex-row">
          <NavigationMenuItem
            v-for="link in menu"
            :key="link.target"
          >
            <NavigationMenuLink
              :href="link.target"
              :class="[
                navigationMenuTriggerStyle(),
                'hover:bg-purple-600 hover:text-white transition-colors',
              ]"
              @click.prevent="navigate(link.target)"
            >
              {{ link.text }}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>

    <header class="titulus">
      <h1>Batman</h1>
      <div class="titulus-img"></div>
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
  min-height: 100vh;
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem;
  color: white;
  pointer-events: none;
  font-family: "batman", sans-serif;
}

.titulus > p {
  position: absolute;
  top: 36%;
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