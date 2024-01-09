<script>
import weatherCard from '@/components/WeatherCard.vue';

export default {
  components: {
    weatherCard,
  },
  data(){
    return {
      weatherData: [],
    };
  },
  mounted() {
    fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-71BFA974-BB32-477B-9B86-9D862699CEB5')
    .then(res =>{
      return res.json();
    })
    .then(result => {
      this.weatherData = result.records.location
    });
  },

}
</script>

<template>
  <div  class="pt-3 w-full flex flex-wrap gap-3 justify-center">
    <!-- {{ weatherData }} -->
    <weatherCard v-for="item in weatherData"  :key="item.id"  class="w-[20%] mb-5" :weather-place="item" />

    
  </div>
</template>

<style scoped="scss">
</style>