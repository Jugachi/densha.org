<template>
  <div style="width: 66%; margin: 1rem auto;">


    <v-tabs v-model="activeTab" grow color="primary" style="margin-bottom: 1rem;">
      <v-tab value="game">Game</v-tab>
      <v-tab value="characters">Characters</v-tab>
      <v-tab value="trains">Trains</v-tab>
    </v-tabs>

    <v-tabs-window v-model="activeTab">

      <!-- Game tab -->
      <v-tabs-window-item value="game">
        <div class="text-center">
          <div class="text-center">
            <div class="d-flex justify-center">

              <!-- Game cover -->
              <img :src="gameImagePath" class="gameCover"/>

              <!-- Game data -->
              <div>
                <h1>{{ game.name }}</h1>
                <p>{{ game.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </v-tabs-window-item>

      <!-- Characters tab -->
      <v-tabs-window-item value="characters">
        <div v-if="game.characters.length" class="text-center">
          <div v-for="(character, index) in game.characters" :key="index" class="d-flex justify-center">
            <!-- Character img -->
            <img :src="getCharacterImagePath(character.name)" v-if="(index%2)===0" />
            <!-- Character data -->
            <div :class="[{'align-right': (index%2)!==0}, {'align-left': (index%2)===0}]">
              <h2>{{ character.name }}</h2>
              <div v-for="(desc, index) in character.description" :key="index" v-html="desc"></div>
            </div>
            
            <img :src="getCharacterImagePath(character.name)" v-if="(index%2)!==0" />
          </div>
        </div>
      </v-tabs-window-item>

      <!-- Trains tab -->
      <v-tabs-window-item value="trains">
        <div v-if="game.trains.length" class="text-center">
          
          <div v-for="(train, index) in game.trains" :key="index" class="d-flex justify-center">
            <!-- Train data -->
            <div>
              <h2>{{ train.name }}</h2>
              <div v-for="(desc, index) in train.description" :key="index" v-html="desc"></div>
            </div>
          </div>
            
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
        characters: [],
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
      return new URL(`/src/assets/covers/${this.$route.params.slug}_cover.jpg`, import.meta.url).href;
    },
  },
  methods: {
    getCharacterImagePath(name) {
      const formattedName = name.replace(/\s/g, "_").toLowerCase();
      return new URL(`/src/assets/characters/${this.$route.params.slug}/${formattedName}.png`, import.meta.url).href;
    },
    fetchGameData(slug) {
      const gameData = this.$i18n.messages[this.$i18n.locale].games[slug];
      if (gameData) {
        this.game.name = gameData.name;
        this.game.description = gameData.description;
        this.game.characters = gameData.characters || [];
        this.game.trains = gameData.trains || { name: "", description: [] };
      }
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
  mounted() {
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

.align-right {
  text-align: right;
}
.align-left
{
  text-align: left;
}


</style>