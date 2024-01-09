<script>
import { RouterView } from 'vue-router';
import background from '@/assets/Image/weatherPic.gif';

export default {
  // 元件宣告
  components: {
    RouterView
  },
  data(){
    return {
      background,
    }
  }
}
</script>

<template>
  <!-- 觀察你的設計稿 把共用的部分放在此頁面 -->
  <header>
    <a href="/">home</a>
    <a href="/about">about</a>
    <a href="/calc">calc</a>
    <a href="/todolist">todolist</a>
    <a href="/picupload">picupload</a>
    <a href="/weather">weather</a>
    <!-- <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/calc">calc</RouterLink> -->
    
  </header>
  <main :style="{backgroundImage: `url(${background})`, fontSize: '50px'}">
    <RouterView />

  </main>
  <footer>
  </footer>

</template>

<!-- scoped style只影響這支vue -->
<style scoped>
header {
  line-height: 1.5;
  min-height: 50px;
  max-height: 100vh;
  border-radius: 5px;
  background-color: black;
  color: wheat;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
main{
  background-size: cover;
  background-repeat: no-repeat;
  color: rgb(252, 251, 255);
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
