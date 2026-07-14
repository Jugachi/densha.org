<template>
  <v-btn
    v-show="visible"
    icon
    :color="accentColor"
    class="back-to-top d-sm-none"
    @click="scrollToTop"
  >
    <v-icon icon="fas fa-arrow-up" />
  </v-btn>
</template>

<script>
import variables from "@/locales/variables.json";

export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    accentColor() {
      const slug = this.$route.params.slug;
      const game = slug && variables.games.find((g) => g.name.toLowerCase().includes(slug));
      return game?.color || "primary";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.visible = window.scrollY > 400;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
}
</style>
