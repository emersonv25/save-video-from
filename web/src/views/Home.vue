<template>
  <div id="app">
    <Pesquisar/>
    <Download/>
  </div>
</template>

<script>
import Pesquisar from '@/components/Downloader/Pesquisar.vue'
import Download from '@/components/Downloader/Download.vue'
export default {
  components:{
    Pesquisar,
    Download
  },
  data: function () {
    return {
    };
  },
  methods: {
  },
  computed: {
  },
};
</script>