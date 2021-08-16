<!-- Boilerplate Desenvolvido por: Emerson de Jesus Santos em 2021 !-->
<template>
  <v-app>   
    <Navbar/>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>       
      </v-container>     
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },

}
</script>