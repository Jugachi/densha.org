<template>
  <v-app>
      <Navbar />
      <v-main>
        <router-view />
      </v-main>
  </v-app>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>