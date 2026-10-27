<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { House, Menu } from '@lucide/vue'
import { Toggle } from '@/components/ui/toggle'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

interface MenuItems {
  label: string
  href: string
  onClick?: () => void
}

interface Props {
  items: MenuItems[]
  homeRoute?: string
}

const props = withDefaults(defineProps<Props>(), {
  homeRoute: '/',
})

const menuOpen = ref(false)

const navigate = (event: MouseEvent, item: MenuItems) => {
  if (item.onClick) {
    event.preventDefault()
    item.onClick()
  }

  menuOpen.value = false
}
</script>

<template>
  <div>
    <Toggle
      aria-label="Apri o chiudi il menu"
      aria-controls="batman-menu"
      :aria-expanded="menuOpen"
      class="fixed right-4 top-2 z-50 bg-slate-500 text-white sm:hidden"
      @click="menuOpen = !menuOpen"
    >
      <Menu />
    </Toggle>

    <nav
      id="batman-menu"
      class="extra-nav flex-col justify-between px-3 sm:flex-row sm:items-center"
      :class="menuOpen ? 'flex' : 'hidden sm:flex'"
    >
      <RouterLink :to="props.homeRoute" aria-label="Home">
        <House class="icon-home" />
      </RouterLink>

      <NavigationMenu>
        <NavigationMenuList class="flex flex-col sm:flex-row">
          <NavigationMenuItem
            v-for="item in props.items"
            :key="item.href"
          >
            <NavigationMenuLink
              :href="item.href"
              :class="[
                navigationMenuTriggerStyle(),
                'hover:bg-purple-600 hover:text-white transition-colors',
              ]"
              @click="navigate($event, item)"
            >
              {{ item.label }}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  </div>
</template>

<style scoped>
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

@media (min-width: 640px) {
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
  }
}
</style>