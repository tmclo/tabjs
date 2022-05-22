<template>

  <main>
    <div class="list p-10 flex flex-wrap justify-center gap-8">
        <NewTabsAll />
    </div>
  </main>

</template>

<script>
import NewTabsAll from "../components/NewTabsAll.vue";

export default {
  name: 'NewTabs',
  components: {
    NewTabsAll
  }
}
</script>
