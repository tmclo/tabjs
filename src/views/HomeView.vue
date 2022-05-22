<template>
  <div class="home p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-center gap-8 pt-10">
    <TopSongs />
    <NewTabs />
  </div>
</template>

<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template> -->

<script>
// @ is an alias to /src
import TopSongs from "../components/TopSongs.vue";
import NewTabs from "../components/NewTabs.vue";

export default {
  name: 'HomeView',
  components: {
    TopSongs,
    NewTabs,
  }
}
</script>
