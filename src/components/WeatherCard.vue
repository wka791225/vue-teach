<script>
// 
import cloud from '@/assets/Image/cloud.gif';
import rain from '@/assets/Image/rain.gif';
import sun from '@/assets/Image/sun.gif';
import Sunnycloudy from '@/assets/Image/Sunnycloudy.gif';
import thunderstorm from '@/assets/Image/thunderstorm.gif';
export default {
  props: {
    weatherPlace: {
      type: Object,
    }
  },
  methods: {
    // 圖片分級
    weatherImage(item) {
      //轉數字
      const temperature = parseInt(item);
      let imageUrl = '';
      if (temperature <= 20) {
        imageUrl = sun;
      } else if (temperature <= 40) {
        imageUrl = Sunnycloudy;
      } else if (temperature <= 60) {
        imageUrl = cloud;
      } else if (temperature <= 70) {
        imageUrl = rain;
      } else if (temperature <= 90) {
        imageUrl = thunderstorm;
      }
      return imageUrl;
    },

  }
}
</script>

<template>
  <div >
    <div class="w-full rounded-t-lg">
      <img class="w-full h-[300px] rounded-t-lg" :src="weatherImage(weatherPlace.weatherElement[1].time[0].parameter.parameterName)" alt="">
    </div>
    <div class=" flex flex-col justify-center  gap-2 relative bg-white opacity-50 rounded-b-lg px-3 pb-2">
        <span class="text-center">{{ weatherPlace.locationName }}</span>
        <!-- 日期跟時間切分開來 -->
        <span>時間：{{ weatherPlace.weatherElement[0].time[0].startTime.split(' ')[0] }}<br>
          {{ weatherPlace.weatherElement[0].time[0].startTime.split(' ')[1] }}~{{
            weatherPlace.weatherElement[0].time[0].endTime.split(' ')[1] }}</span>
        <span>舒適度：{{ weatherPlace.weatherElement[3].time[0].parameter.parameterName }} </span>
        <span>氣溫：{{ weatherPlace.weatherElement[2].time[0].parameter.parameterName }}~{{
          weatherPlace.weatherElement[4].time[0].parameter.parameterName }} 度</span>
        <span>天氣概況：{{ weatherPlace.weatherElement[0].time[0].parameter.parameterName }}</span>
        <span>降雨機率：{{ weatherPlace.weatherElement[1].time[0].parameter.parameterName }}%</span>

    </div>
    
  </div>
</template>
<style>

</style>