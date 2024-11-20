<template>
  <div style="width: 66%; margin: 1rem auto;">

    <v-tabs v-model="activeTab" grow :color="thisgame.color" style="margin-bottom: 1rem;">
      <v-tab value="game">Game</v-tab>
      <v-tab value="characters">Characters</v-tab>
      <v-tab value="trains">Trains</v-tab>
      <div class="text-center">
          <v-btn :color="thisgame.color" style="height: 100%;" @click="buyGameDialog" variant="text">Buy the Game</v-btn>
      </div>
      <div class="text-center">
          <v-btn :color="thisgame.color" style="height: 100%;" @click="buyOstDialog" variant="text">Buy the Ost</v-btn>
      </div>
    </v-tabs>

    <v-tabs-window v-model="activeTab">
      <v-tabs-window-item value="game">
        <div class="text-center">
          <div class="d-flex justify-center">
            <img :src="gameImagePath" class="gameCover"/>
            <div>
              <h1>{{ game.name }}</h1>
              <p>{{ game.description }}</p>
            </div>
          </div>
        </div>
      </v-tabs-window-item>

      <v-tabs-window-item value="characters">
        <div v-if="game.characters.length" class="text-center">
          <div v-for="(character, index) in game.characters" :key="index" class="d-flex justify-center">
            <img :src="getCharacterImagePath(character.name)" v-if="(index%2)===0" class="img"/>
            <div :class="[{'align-right': (index%2)!==0}, {'align-left': (index%2)===0}]">
              <h2>{{ character.alias }}</h2>
              <div v-for="(desc, index) in character.description" :key="index" v-html="desc"></div>
            </div>
            <img :src="getCharacterImagePath(character.name)" v-if="(index%2)!==0" class="img"/>
          </div>
        </div>
      </v-tabs-window-item>

      <v-tabs-window-item value="trains">
        <div v-if="game.trains.length" class="text-center">
          <div v-for="(train, index) in game.trains" :key="index" class="d-flex justify-center">
            <img :src="getTrainImagePath(train.name)" v-if="(index%2)===0" class="img"/>
            <div :class="[{'align-right': (index%2)!==0}, {'align-left': (index%2)===0}]">
              <h2 style="margin: 1rem 1rem 1rem 1rem;">{{ train.alias }}</h2>
              <div v-for="(desc, index) in train.description" :key="index" v-html="desc" style="margin: 1rem 1rem 1rem 1rem;"></div>
            </div>
            <img :src="getTrainImagePath(train.name)" v-if="(index%2)!==0" class="img"/>
          </div>
        </div>
      </v-tabs-window-item>

    </v-tabs-window>


    <v-snackbar v-model="error" location="center" :timeout="2000" color="red" variant="outlined">
      {{ errorMessage }}
      
    </v-snackbar>


    <WarningDialog ref="warningDialog" :link="buyGameLink" />
  </div>
</template>

<script>
import WarningDialog from '@/components/WarningDialog.vue';
import variables from '@/locales/variables.json';

export default {
  data() {
    return {
      activeTab: 'game',
      game: {
        name: "",
        description: "",
        characters: [],
        trains: [],
      },
      buyGameLink: "",
    

      error: false,
      errorMessage: "",
    };
  },
  components: {
    WarningDialog
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    gameImagePath() {
      return new URL(`/src/assets/covers/${this.$route.params.slug}_cover.jpg`, import.meta.url).href;
    },
    thisgame() {
      return variables.games.find(game => game.name.toLocaleLowerCase().includes(this.slug)) || {};
    }
  },
  methods: {

    showError(message) {
      this.error = true;
      this.errorMessage = message;
    },

    getCharacterImagePath(name) {
      const formattedName = name.replace(/\s/g, "_").toLowerCase(); // replace every space with an underscore and convert to lowercase
      return new URL(`/src/assets/characters/${this.$route.params.slug}/${formattedName}.png`, import.meta.url).href;
    },
    getTrainImagePath(name) {
      const formattedName = name.replace(/\D/g, ""); // replace everything that is not a digit with an empty string
      return new URL(`/src/assets/trains/${this.$route.params.slug}/icon_${formattedName}.png`, import.meta.url).href;
    },
    fetchGameData(slug) {
      const gameData = this.$i18n.messages[this.$i18n.locale].games[slug];
      if (gameData) {
        this.game.name = gameData.name;
        this.game.description = gameData.description;
        this.game.characters = gameData.characters || [];
        this.game.trains = gameData.trains || [];
      }
    },
    buyGameDialog() {
      if (this.thisgame.gameLink) {
        this.buyGameLink = this.thisgame.gameLink;
        this.$refs.warningDialog.openDialog();
      } else {
        

        this.showError('No purchase link available for this game.');
      }
    },
    buyOstDialog() {
      if (this.thisgame.ostLink) {
        this.buyGameLink = this.thisgame.ostLink;
        this.$refs.warningDialog.openDialog();
      } else {
        

        this.showError('No purchase link available for this game.');
      }
    },
  },
  watch: {
    slug(newSlug) {
      this.fetchGameData(newSlug);
    },
    "$i18n.locale"() {
      this.fetchGameData(this.slug);
    }
  },
  mounted() {
    this.fetchGameData(this.slug);
  }
};
</script>

<style scoped>
.gameCover {
  width: 256px;
  height: auto;
  margin: 10px;
}

.align-right {
  text-align: right;
  margin-right: 1rem;
}

.align-left {
  text-align: left;
  margin-left: 1rem;
}

.img {
  margin-top: 2rem;
  height: fit-content;
  width: fit-content;
}
</style>