<template>
  <v-app>
      <Navbar />
      <v-main>
        <router-view />
      </v-main>
      <BackToTop />
  </v-app>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import BackToTop from './components/BackToTop.vue'

export default {
  components: {
    Navbar,
    BackToTop
  }
}
</script>