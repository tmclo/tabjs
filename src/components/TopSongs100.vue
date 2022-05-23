<template>
<div class="max-w-md rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
  <div class="mb-4 flex items-center justify-between">
    <h5 class="text-3xl sm:text-md md:text-md font-bold leading-none text-gray-900 dark:text-white">Trending Tabs</h5>
    <a href="#" class="text-lg md:text-xs sm:text-xs font-medium text-blue-600 hover:underline dark:text-blue-500"> See more </a>
  </div>
  <div class="flow-root">
    <ul v-if="trending  && trending.length" role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <li v-for="item in trending" :key="item.id" class="py-3 sm:py-4">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <p class="text-3xl text-white"></p>
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">{{ item.title }}</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">{{ item.artist }}</p>
          </div>
          <button class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-xs font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
            <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      trending: [],
    }
  },

  async created() {
    axios.get('https://tabsjs.aa2.workers.dev/api/trending')
    .then(response => {
      this.trending = response.data
    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>