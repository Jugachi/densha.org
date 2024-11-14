<template>
  <div style="width: 66%; margin: 0 auto;">
    <div class="d-flex justify-center">
      <v-tabs v-model="activeTab" grow color="primary">
        <v-tab value="game">Game</v-tab>
        <v-tab value="characters">Characters</v-tab>
        <v-tab value="trains">Trains</v-tab>
      </v-tabs>

    </div>

    <v-tabs-window v-model="activeTab">
      <v-tabs-window-item value="game">
        <div class="text-center">
          <div class="d-flex align-center justify-center">
            <img :src="gameImagePath" class="gameCover"/>
            <div>
              <h1>{{ game.name }}</h1>
              <p>{{ game.description }}</p>

            </div>
          </div>
          
        </div>
      </v-tabs-window-item>

      <v-tabs-window-item value="characters">
        <div v-if="game.characters" class="text-center">
          <h2>{{ game.characters.name }}</h2>
          <div
            v-for="(desc, index) in game.characters.description"
            :key="index"
            v-html="desc"
          ></div>
        </div>
      </v-tabs-window-item>

      <v-tabs-window-item value="trains">
        <div v-if="game.trains" class="text-center">
          <h2>{{ game.trains.name }}</h2>
          <div
            v-for="(desc, index) in game.trains.description"
            :key="index"
            v-html="desc"
          ></div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
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
    gameImagePath() {
      // Dynamically construct the image path based on game name
      console.log(this.$route.params.slug);
      return new URL(`/src/assets/covers/${this.$route.params.slug}_cover.jpg`, import.meta.url).href;
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

<style scoped>
.gameCover {
  width: 256px; /* Set the width to fit nicely with the title */
  height: auto;
  margin: 10px; /* Add some space between the title and the image */
}
</style>