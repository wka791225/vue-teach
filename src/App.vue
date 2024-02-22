<script>
import { RouterView } from 'vue-router';
import background from '@/assets/Image/111.png';

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

<template >
  <!-- 觀察你的設計稿 把共用的部分放在此頁面 -->
  <header>
    <RouterLink to="/todolist">todolist</RouterLink>
  </header>
  <main class="w-full h-[calc(100vh-30px)] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex  flex-col items-center justify-center font-big">
    <RouterView />

  </main>
  <footer>
  </footer>

</template>

<!-- scoped style只影響這支vue -->
<style scoped>
header {
  width: 100%;
  line-height: 1.5;
  padding:  0 1rem;
  background-color: black;
  color: wheat;

}

.logo {
  display: block;

}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
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
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;

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
