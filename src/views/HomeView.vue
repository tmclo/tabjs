<template>

  <main>
    <div class="home p-10 flex flex-wrap justify-center gap-8">
      <TopSongs />
      <NewTabs />
    </div>
  </main>

</template>

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
