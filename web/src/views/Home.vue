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
              <v-form ref="form" v-model="valid">
                <v-text-field
                  label="Cole o link do seu vídeo aqui"
                  filled
                  rounded
                  dense
                  v-model="url"
                  :rules="[v => !!v || 'Insira o link']"
                ></v-text-field>                
              </v-form>

            </v-col>
            <v-card-actions class="align-end justify-center">
              <v-btn
                large
                @click="getDetalhes"
                color="dark"
                outlined
                :disabled="loading"
              >
                Baixar
              </v-btn>
            </v-card-actions>
            <div class="text-center" v-if="loading">
              <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </div>
            <div class="text-center" v-if="error" style="padding-left:10%;padding-right:10%;padding-bottom:0.1rem">
              <v-alert
                dense
                outlined
                type="error"
              >
                {{error}}
              </v-alert>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
        <v-card class="mx-auto" v-if="exibirDetalhes" max-width="800" max-height="600">
          <v-row style="margin: 5px">
            <v-col cols="4" md="4">
              <v-img width="250px" height="150px"
                :src="detalhes.thumbnail"
              ></v-img>
            </v-col>
            <v-col cols="8" md="8">
              <v-card-title>{{detalhes.fulltitle}}</v-card-title>      
            </v-col>
          </v-row>
 
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn large @click="getDownload('best')" color="blue" outlined :disabled="loadingDownload"><v-icon left>mdi-download</v-icon> HD</v-btn>
                <v-btn large @click="getDownload('worst')" color="blue" outlined :disabled="loadingDownload" style="margin-left: 5px"><v-icon left>mdi-download</v-icon> SD</v-btn>
                <v-btn large @click="getDownload('bestaudio')" color="blue" outlined :disabled="loadingDownload || url.includes('instagram')" style="margin-left: 5px"><v-icon left>mdi-download</v-icon> Áudio</v-btn>              
                <v-spacer></v-spacer>
              </v-card-actions>              
              
            <div class="text-center" v-if="errorDownload" style="padding-left:10%;padding-right:10%;padding-bottom:0.1rem">
              <v-alert
                dense
                outlined
                type="error"
              >
                {{errorDownload}}
              </v-alert>
            </div>

            <div class="text-center" v-if="loadingDownload">
              <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </div>
        </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid v-if="video && !video.includes('instagram')">
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto" max-width="800" max-height="600">
            <v-card-actions class="align-end justify-center">
              <video :src="video" controls preload="auto" style="width: 50%; max-height: 400px;"></video>
            </v-card-actions>
            <v-card-title>Caso o download não inicie, siga as instruções para baixar</v-card-title>
            <v-card-text>
              <b>Opção 1:</b> Aperte no botão: <v-icon>mdi-dots-vertical</v-icon> Em seguida selecione a opção: <v-icon>mdi-download</v-icon> Baixar (De acordo com seu navegador)
              <br>           
              <b>Opção 2:</b> Botão direito sobre o vídeo e em seguida: Salvar video/áudio como...
            </v-card-text>
          </v-card>          
        </v-col>
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
      loadingDownload: false,
      valid: false,
    };
  },
  methods: {
    async getDetalhes() {
      if(this.valid){
        this.loading = true;
        try{
          await this.$store.dispatch("getDetalhes", this.url)
          this.loading = false;
        }
        catch{
          this.loading = false;
        }
      }
      else{
        this.$refs.form.validate()
      }

    },
    async getDownload(quality) {
      this.loadingDownload = true
      try{
        await this.$store.dispatch("getDownload", {url: this.url, quality: quality})
        if(this.video.includes('googlevideo') && quality == 'best'){
          window.open(this.video + '&title=' + this.detalhes.fulltitle)
        }
        else if(this.video.includes('instagram') || this.video.includes('facebook') || this.video.includes('fbcdn')){
          window.open(this.video + '&dl=1')
        } 
        this.loadingDownload = false
      }
      catch{
        this.loadingDownload = false
      }
      //window.open(this.video)
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
    video() {
      return this.$store.state.video;
    },
    error() {
      return this.$store.state.error;
    },
    errorDownload() {
      return this.$store.state.errorDownload;
    },
  },
};
</script>