<template>

  <main>
    <div class="list p-10 flex flex-wrap justify-center gap-8">
        <TopSongs100 />
    </div>
  </main>

</template>

<script>
import TopSongs100 from "../components/TopSongs100.vue";

export default {
  name: 'TopSongs',
  components: {
    TopSongs100
  }
}
</script>
