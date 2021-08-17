<template>
  <div id="app">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto" max-width="800" max-height="600">
            <v-card-title class="text--primary justify-center">
              Video Downloader
            </v-card-title>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="URL"
                filled
                rounded
                dense
                v-model="url"
              ></v-text-field>
            </v-col>
            <v-card-actions class="align-end justify-center">
              <v-btn
                large
                @click="getDetalhes"
                color="blue"
                outlined
                :disabled="loading"
              >
                <v-icon left>mdi-download</v-icon> Baixar
              </v-btn>
            </v-card-actions>
            <div class="text-center" v-if="loading">
              <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </div>
          </v-card>
        </v-col>
        <v-card class="mx-auto" max-width="800" max-height="600" v-if="exibirDetalhes">
            <v-row>
              <v-col cols="4">
                <v-img
                  :src="detalhes.thumbnail"
                ></v-img>
              </v-col>
              <v-col cols="8">
                <v-card-subtitle>{{detalhes.fulltitle}}</v-card-subtitle>
                <v-card-text>{{duracaoConvertida}}</v-card-text>

                <v-btn large @click="getDownload('hd')" color="success" outlined :disabled="loadingDownload"><v-icon left>mdi-download</v-icon> HD</v-btn>
                <v-btn large @click="getDownload('sd')" color="success" outlined :disabled="loadingDownload" style="margin-left: 5px"><v-icon left>mdi-download</v-icon> SD</v-btn>
                <v-btn large @click="getDownload('audio')" color="success" outlined :disabled="loadingDownload" style="margin-left: 5px"><v-icon left>mdi-download</v-icon> Áudio</v-btn>
              </v-col>
            </v-row>
              <div class="text-center" v-if="loadingDownload">
                <v-progress-circular
                  :size="50"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
            </div>
          </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      url: "",
      loading: false,
      loadingDownload: false
    };
  },
  methods: {
    async getDetalhes() {
      this.loading = true;
      await this.$store.dispatch("getDetalhes", this.url);
      this.loading = false;
    },
    async getDownload(quality) {
      this.loadingDownload = true
      await this.$store.dispatch("getDownload", {url: this.url, quality: quality})
      this.loadingDownload = false
      window.open(this.download)
    },
    convertDuration(value) {
      return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')
    },
  },
  computed: {
    detalhes() {
      return this.$store.state.detalhes;
    },
    exibirDetalhes(){
      return this.$store.state.exibirDetalhes
    },
    download() {
      return this.$store.state.download;
    },
    duracaoConvertida(){
      let value = this.$store.state.detalhes.duration
      return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')
    }
  },
};
</script>