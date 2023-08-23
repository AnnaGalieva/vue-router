<template>
  <div id="app">
    <header>
      <!-- <nav @click="clickMenu">
        <a href="#dashboard" class="menu__link">Dashboard</a>
        <a href="#about" class="menu__link">About</a>
        <a href="#notfound" class="menu__link">NotFound</a>
      </nav> -->
      <nav>
        <router-link to="/dashboard">Dashboard</router-link> |
        <router-link to="/about">AboutContent</router-link>
        <router-link to="/hello">Hello</router-link>

      </nav>
    </header>
    <router-view />
    <!-- <Dashboard v-if="page === 'dashboard'" />
    <AboutContent v-if="page === 'about'" />
    <NotFound v-if="page === 'notfound'" /> -->
  </div>
</template>
<script>
// import AboutContent from './pages/AboutContent.vue'
// import Dashboard from './pages/Dashboard.vue'
// import NotFound from './pages/NotFound.vue'
export default {
  name: 'App',
  components: {
    // AboutContent,
    // Dashboard,
    // NotFound
  },
  data() {
    return {
      //   page: 'dashboard',
    };
  },
  methods: {
    // setPage() {
    //   this.page = window.location.hash.slice(1);
    // },
    // clickMenu() {
    //   //console.log(window.location);
    //   this.setPage();
    //   window.addEventListener('hashchange', function () {
    //     this.setPage();
    //   });
    // }
  },
  mounted() {
    // const links = document.querySelectorAll('.menu__link');
    // links.forEach(element => {
    //   element.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     //console.log('Mounted click');
    //     history.pushState({}, '', element.href)
    //   });
    // });
  },
  created() {
    this.$router.push({ name: 'Dashboard' })
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
