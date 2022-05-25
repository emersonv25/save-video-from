<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto" max-width="800" max-height="600">
          <v-card-title class="text--primary justify-center">
            Save Video From
          </v-card-title>
          <v-col cols="12" sm="12" md="12">
            <v-form ref="form" v-model="valid">
              <v-text-field
                label="Cole o link do vídeo aqui"
                filled
                rounded
                dense
                v-model="url"
                :rules="[(v) => !!v || 'Insira o link']"
                style="margin-bottom: 0px; padding-bottom: 0px"
              ></v-text-field>
              
            <v-card-text class="caption text-center" style="margin: 0px; padding: 0px">Ao utilizar este serviço, você concorda com nossos <router-link to="/termos">termos de uso</router-link> </v-card-text>
            
            </v-form>
          </v-col>
          <v-card-actions class="align-end justify-center">
            <v-btn
              large
              @click="getDetalhes"
              color="success"
              outlined
              :disabled="loading"
            >
              <v-icon>mdi-download</v-icon>
              Baixar
            </v-btn>
          </v-card-actions>
          <Loading v-if="loading" />
          <Error v-if="error" :error="error" />
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
      loading: false,
      valid: false,
    };
  },
  methods: {
    async getDetalhes() {
      if (this.valid) {
        this.loading = true;
        try {
          await this.$store.dispatch("getDetalhes", this.url);
          this.loading = false;
        } catch {
          this.loading = false;
        }
      } else {
        this.$refs.form.validate();
      }
    },
    convertDuration(value) {
      return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')
    },
  },
  computed: {
    error() {
      return this.$store.state.error;
    },
    url:{
        get: function(){
            return this.$store.state.url
        },
        set: function(url){
            this.$store.commit('set_url', url)
        }
        
    }
  },
};
</script>