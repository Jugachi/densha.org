<template>
  <div>
    <h1>{{ game.name }}</h1>
    <p>{{ game.description }}</p>

	<div v-if="game.characters">
      <h2>{{ game.characters.name }}</h2>

      <!-- Loop through each description and render HTML -->
      <div
        v-for="(desc, index) in game.characters.description"
        :key="index"
        v-html="desc"
      ></div>
    </div>

    <div v-if="game.trains">
      <h2>{{ game.trains.name }}</h2>

      <!-- Loop through each description and render HTML -->
      <div
        v-for="(desc, index) in game.trains.description"
        :key="index"
        v-html="desc"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      game: {
        name: "",
        description: "",
		characters: {
          name: "",
          description: [],
        },
        trains: {
          name: "",
          description: [],
        },
      },
    };
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
  },
  watch: {
    slug(newSlug) {
      this.fetchGameData(newSlug);
    },
    "$i18n.locale"() {
      this.fetchGameData(this.slug);
    },
  },
  methods: {
    fetchGameData(slug) {
      // Directly accessing translation data from the $i18n.messages object
      const gameData = this.$i18n.messages[this.$i18n.locale].games[slug];
      if (gameData) {
        this.game.name = gameData.name;
        this.game.description = gameData.description;
        if (gameData.characters) {
          this.game.characters.name = gameData.characters.name;
          this.game.characters.description = gameData.characters.description;
        }
		if (gameData.trains) {
          this.game.trains.name = gameData.trains.name;
          this.game.trains.description = gameData.trains.description;
        }
      }
    },
  },
  created() {
    this.fetchGameData(this.slug);
  },
};
</script>
