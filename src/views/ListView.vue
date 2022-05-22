<template>

  <main>
    <div class="list p-10 flex flex-wrap justify-center gap-8">
        <ListTabs />
    </div>
  </main>

</template>

<script>
import ListTabs from '../components/ListTabs.vue'

export default {
  name: 'HomeView',
  components: {
    ListTabs
  }
}
</script>
