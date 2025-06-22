<template>
  <v-container class="py-4" fluid>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">

        <v-tabs v-model="activeTab" grow :color="thisgame.color" class="mb-4">
          <v-tab value="game">Game</v-tab>
          <v-tab v-if="game.characters.length" value="characters">Characters</v-tab>
          <v-tab v-if="game.trains.length" value="trains">Trains</v-tab>
          <v-tab v-if="game.guides.length" value="guides">Guides</v-tab>
          <v-tab v-if="game.speedrunning.length" value="speedrunning">Speedrunning</v-tab>
        </v-tabs>

        <v-row class="mb-4" justify="center" align="center" dense>
          <v-col cols="12" sm="6" md="3" class="text-center">
            <v-btn block :color="thisgame.color" @click="buyGameDialog" variant="text">Buy the Game</v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="text-center">
            <v-btn block :color="thisgame.color" @click="buyOstDialog" variant="text">Buy the Ost</v-btn>
          </v-col>
        </v-row>

        <v-tabs-window v-model="activeTab">
          <v-tabs-window-item value="game">
            <v-card class="d-flex flex-wrap flex-1-0 ma-2 pa-2" :style="cardStyle">
              <v-row>
                <v-col cols="12" md="5">
                  <v-img :src="gameImagePath" max-width="256" class="img-fluid my-4" contain />
                </v-col>
                <v-col cols="12" md="7" class="d-flex flex-column justify-center">
                  <h1>{{ game.name }}</h1>
                  <p>{{ game.description }}</p>
                  <v-responsive v-if="game.name === 'Gleaming Stage'" :aspect-ratio="16/9" class="mt-4">
                    <iframe
                      style="width: 100%; height: 100%;"
                      src="https://www.youtube.com/embed/n3Q6H3C-SJI"
                      title="Densha de D: Gleaming Stage - Soundtrack"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </v-responsive>
                </v-col>
              </v-row>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="characters">
            <v-card class="ma-2 pa-2" :style="cardStyle">
              <div v-if="game.characters.length" class="text-center">
                <v-row v-for="(character, index) in game.characters" :key="index" align="center" class="my-4" no-gutters>
                  <v-col cols="12" md="4" v-if="(index % 2) === 0">
                    <v-img :src="getCharacterImagePath(character.name)" class="img-fluid" contain />
                  </v-col>

                  <v-col cols="12" md="8" :class="[(index % 2) !== 0 ? 'text-right' : 'text-left']">
                    <h2>{{ character.alias }}</h2>
                    <div v-for="(desc, dIndex) in character.description" :key="dIndex" v-html="desc"></div>
                  </v-col>

                  <v-col cols="12" md="4" v-if="(index % 2) !== 0">
                    <v-img :src="getCharacterImagePath(character.name)" class="img-fluid" contain />
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="trains">
            <v-card class="ma-2 pa-2" :style="cardStyle">
              <div v-if="game.trains.length" class="text-center">
                <v-row v-for="(train, index) in game.trains" :key="index" align="center" class="my-4" no-gutters>
                  <v-col cols="12" md="4" v-if="(index % 2) === 0">
                    <v-responsive :aspect-ratio="4/3">
                      <v-img :src="getTrainImagePath(train.name)" class="img-fluid" contain />
                    </v-responsive>
                  </v-col>

                  <v-col cols="12" md="8" :class="[(index % 2) !== 0 ? 'text-right' : 'text-left']" class="pa-4">
                    <h2>{{ train.alias }}</h2>
                    <div v-for="(desc, dIndex) in train.description" :key="dIndex" v-html="desc"></div>
                  </v-col>

                  <v-col cols="12" md="4" v-if="(index % 2) !== 0">
                    <v-responsive :aspect-ratio="4/3">
                      <v-img :src="getTrainImagePath(train.name)" class="img-fluid" contain />
                    </v-responsive>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="guides">
            <v-card class="ma-2 pa-2" :style="cardStyle">
              <div v-if="game.guides.length" class="text-center">
                <v-row v-for="(guide, index) in game.guides" :key="index" align="center" class="my-4" no-gutters>
                  <v-col cols="12" md="6">
                    <v-responsive :aspect-ratio="16/9">
                      <iframe
                        style="width: 100%; height: 100%;"
                        :src="guide.link"
                        :title="guide.title"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </v-responsive>
                  </v-col>
                  <v-col cols="12" md="6" class="text-left pa-4">
                    <h2>{{ guide.title }}</h2>
                    <div v-for="(desc, dIndex) in guide.description" :key="dIndex" v-html="desc" class="mb-4"></div>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="speedrunning">
            <v-card class="ma-2 pa-2" :style="cardStyle">
              <div v-if="game.speedrunning.length" class="text-center">
                <v-row v-for="(speedrun, index) in game.speedrunning" :key="index" align="center" class="my-4" no-gutters>
                  <v-col cols="12" md="6">
                    <v-responsive :aspect-ratio="16/9">
                      <iframe
                        style="width: 100%; height: 100%;"
                        :src="speedrun.link"
                        :title="speedrun.title"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </v-responsive>
                  </v-col>
                  <v-col cols="12" md="6" class="text-left pa-4">
                    <h2>{{ speedrun.title }}</h2>
                    <div v-for="(desc, dIndex) in speedrun.description" :key="dIndex" v-html="desc" class="mb-4"></div>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-tabs-window-item>
        </v-tabs-window>

        <v-snackbar v-model="error" location="center" :timeout="2000" color="red" variant="outlined">
          {{ errorMessage }}
        </v-snackbar>

        <WarningDialog ref="warningDialog" :link="buyGameLink" />
      </v-col>
    </v-row>
  </v-container>
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
        guides: [],
        speedrunning: [],
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
      return new URL(`/src/assets/covers/${this.slug}_cover.jpg`, import.meta.url).href;
    },
    thisgame() {
      return variables.games.find(game => game.name.toLocaleLowerCase().includes(this.slug)) || {};
    },
    cardStyle() {
      return {
        border: `0.1rem solid ${this.thisgame.color || '#ccc'}`
      };
    }
  },
  methods: {
    showError(message) {
      this.error = true;
      this.errorMessage = message;
    },
    getCharacterImagePath(name) {
      const formattedName = name.replace(/\s/g, "_").toLowerCase();
      return new URL(`/src/assets/characters/${this.slug}/${formattedName}.png`, import.meta.url).href;
    },
    getTrainImagePath(name) {
      const formattedName = name.replace(/\D/g, "");
      return new URL(`/src/assets/trains/${this.slug}/icon_${formattedName}.png`, import.meta.url).href;
    },
    fetchGameData(slug) {
      const gameData = this.$i18n.messages[this.$i18n.locale].games[slug];
      if (gameData) {
        this.game.name = gameData.name;
        this.game.description = gameData.description;
        this.game.characters = gameData.characters || [];
        this.game.trains = gameData.trains || [];
        this.game.guides = gameData.guides || [];
        this.game.speedrunning = gameData.speedrunning || [];
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
.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.img {
  max-width: 100%;
  height: auto;
}

.img-fluid {
  width: 100%;
  height: auto;
}
</style>
