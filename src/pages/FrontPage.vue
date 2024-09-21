<template>
  <v-container
  class="d-flex flex-column align-center justify-center text-center"
  fill-height
  >
    <v-img src="/src/assets/DDD_Logo.png" min-width="600" min-height="200" class="mb-6 mt-6" />
    <div>
      <h1>{{ $t("welcomeMessage") }}</h1>
      <p>{{ $t("description") }}</p>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n(); // use the vue-i18n function for translations
    return { t };
  },
});
</script>
