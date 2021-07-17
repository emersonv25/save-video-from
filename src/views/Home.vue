<template>
  <div id="app">
    <v-container fluid>
      <v-row>
        <v-col cols="12"> 
          <v-card class="mx-auto" max-width="800" max-height="600">
            <v-card-title class="text--primary justify-center"> Video Downloader </v-card-title>
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
              <v-btn large color="blue" outlined> <v-icon left>mdi-download</v-icon> Baixar </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  name: "Home",
  data: () => ({
    url: '',
  }),
  methods: {
  },
};
</script>