<script>
import { RouterView } from 'vue-router';
import shoppingCar from '@/assets/Image/shopcar.svg';


export default {
  // 元件宣告
  components: {
    RouterView
  },
  data(){
    return {
      shoppingCar,
      shoppingList: 0,
    }
  },
  // computed: {
  //   shoppingCarLength() {
  //     return JSON.parse(localStorage.getItem('cart'))?.length || 0;
  //   }
  // },
  methods: {
    updateCartLength() {
      this.shoppingList = JSON.parse(localStorage.getItem('cart'))?.length || 0;
    }
  },
  mounted() {
    this.updateCartLength();
  }
  }
</script>

<template >
  <!-- 觀察你的設計稿 把共用的部分放在此頁面 -->
  <header class="flex justify-between h-[40px]">
    <div>
      <RouterLink to="/todolist">todolist</RouterLink>
      <RouterLink to="/shopping">shopping</RouterLink>
    </div>
    <div class="pr-5 relative">
      <RouterLink to="/Shoppingcar">
        <img class="w-[30px]" :src="shoppingCar" alt="" srcset="">
      </RouterLink>
      <div class="absolute top-[20px] z-10 right-[17px] w-[16px] h-[16px] flex justify-center items-center rounded-full bg-red-600">{{ shoppingList }}</div>
    </div>
  </header>
  <main class="w-full pt-[50px] font-big">
    <RouterView @cart-updated="updateCartLength"/>

  </main>
  <footer>
  </footer>

</template>

<!-- scoped style只影響這支vue -->
<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  padding:  0 1rem;
  background-color: black;
  color: wheat;
  position: fixed;
  top: 0px;
}

</style>
