<script>
export default{
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
      console.log(result);
      this.weatherData = result.records.location
    });
  },

}
</script>

<template>
  <div>
    {{ weatherData }}
  </div>
</template>

<style scoped="scss">
</style>