import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        blue: colors.blue.darken2,
      },
      dark: {
        primary: colors.grey.darken4,
        blue: colors.blue.darken2
      }
    }
  }
  })
