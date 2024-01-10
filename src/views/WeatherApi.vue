<script>
import weatherCard from '@/components/WeatherCard.vue';
import WeatherSlot from '@/components/WeatherSlot.vue'
export default {
  components: {
    weatherCard,
    WeatherSlot,
  },
  data(){
    return {
      weatherData: [],
      // 地區
      place:[
        {
          id: 'all',
          place: '全部',
        },
      {
        id: 1,
        place: '北部',
      },
      {
        id: 2,
        place: '中部',
      },
      {
        id: 3,
        place: '南部',
      },
      {
        id: 4,
        place: '離島',
      },
      ],
      checkPlace: 'all',
      
      north:['新北市', '新竹縣', '新竹市', '臺北市', '基隆市', '桃園市', '宜蘭縣' ],
      west:[ '雲林縣', '臺中市', '南投縣', '彰化縣', '苗栗縣'],
      south:['嘉義縣', '嘉義市','臺南市', '高雄市', '屏東縣', '澎湖縣'],
      east:['花蓮縣', '臺東縣'],
      outlyingIslands:['金門縣', '連江縣'],
    };
  },
  mounted() {
    fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-71BFA974-BB32-477B-9B86-9D862699CEB5')
    .then(res =>{
      return res.json();
    })
    .then(result => {
      this.weatherData = result.records.location;
    });
  },
   /*與methods相近，但是它是可以預處理你的資料，並且她有暫存的功能，利用這個特點可以做所謂的分頁功能
      因為我們是拿整包API到這個頁面來，所以為了要做分頁部分，我們不用再去重新拿取資料。
      在computed裡面要寫function但是不能帶數值進入，並且每個function一定要有return。
    */
  computed:{
    checkData(){
      return this.weatherData.filter((item)=>{
        if(this.checkPlace === 'all'){
          return true;
        }else if(this.checkPlace === 1){
          return this.north.includes(item.locationName);
        }
      });
    }
  },

}
</script>

<template>
  <div class=" flex gap-5">
  <weather-slot v-for="item in place" :key="item.id" :class="{' bg-warmGray-400  text-warmGray-900' : checkPlace == item.id }"  @click="checkPlace = item.id">
      {{ item.place }}
    </weather-slot>
  </div>
  <div  class="pt-3 w-full flex flex-wrap gap-3 justify-center">
<!-- 利用v-for帶入weatherData內的植，並且使用父傳子的方式 將單一值傳進components -->
    <weatherCard v-for="item in checkData"  :key="item.id"  class="w-[20%] mb-5" :weather-place="item" />
  </div>
</template>

<style lang="scss" scoped>
</style>