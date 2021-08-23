<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card
          class="mx-auto"
          v-if="exibirDetalhes"
          max-width="800"
        >
          <v-row style="margin: 5px">
            <v-col cols="12" sm="4" md="4">
              <v-img :src="detalhes.thumbnail"></v-img>
            </v-col>
            <v-col cols="12" sm="8" md="8">
              <v-card-title>{{ detalhes.fulltitle }}</v-card-title>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-card-subtitle class="text-center font-weight-bold"
            >Download</v-card-subtitle
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              large
              @click="getDownload('best')"
              color="blue"
              outlined
              :disabled="loadingDownload"
              ><v-icon left>mdi-download</v-icon> HD</v-btn
            >
            <v-btn
              large
              @click="getDownload('worst')"
              color="blue"
              outlined
              :disabled="loadingDownload"
              style="margin-left: 5px"
              ><v-icon left>mdi-download</v-icon> SD</v-btn
            >
            <v-btn
              large
              @click="getDownload('bestaudio')"
              color="blue"
              outlined
              :disabled="loadingDownload || url.includes('instagram')"
              style="margin-left: 5px"
              ><v-icon left>mdi-download</v-icon> Áudio</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>

          <Error v-if="errorDownload" :error="errorDownload" />
          <Loading v-if="loadingDownload" />

          <v-divider></v-divider>

          <v-row v-if="video && !video.includes('instagram')">
            <v-col cols="12">
                <v-card-actions class="align-end justify-center">
                  <video :src="video" controls preload="auto" style="width: 100%; max-height: 250px;"></video>
                </v-card-actions>
                <v-card-title>Caso o download não inicie, siga as instruções para baixar</v-card-title>
                <v-card-text>
                  <b>Opção 1:</b> Aperte no botão: <v-icon>mdi-dots-vertical</v-icon> Em seguida selecione a opção: <v-icon>mdi-download</v-icon> <b>Fazer download/Baixar</b>
                  <br>           
                  <b>Opção 2:</b> <a :href="video"> Clique aqui com o botão direito (segure em dispositivos moveis)</a> e selecione <b>Fazer Download/Salvar link</b>
                </v-card-text>       
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Error from "@/components/Error.vue";
export default {
  components: {
    Error,
    Loading,
  },
  data: function () {
    return {
      loadingDownload: false,
    };
  },
  methods: {
    async getDownload(quality) {
      this.loadingDownload = true;
      try {
        await this.$store.dispatch("getDownload", {url: this.url,quality: quality});
        if (this.video.includes("googlevideo") && quality == "best") {
          window.open(this.video + "&title=" + this.detalhes.fulltitle);
        } else if (
          this.video.includes("instagram") ||
          this.video.includes("facebook") ||
          this.video.includes("fbcdn")
        ) {
          window.open(this.video + "&dl=1");
        }
        this.loadingDownload = false;
      } catch {
        this.loadingDownload = false;
      }
      //window.open(this.video)
    },
    convertDuration(value) {
      return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
    },
  },
  computed: {
    detalhes() {
      return this.$store.state.detalhes;
    },
    exibirDetalhes() {
      return this.$store.state.exibirDetalhes;
    },
    errorDownload() {
      return this.$store.state.errorDownload;
    },
    url(){
        return this.$store.state.url;
    },
    video() {
      return this.$store.state.video;
    },
  },
};
</script>