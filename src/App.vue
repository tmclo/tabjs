<template>
  <div class="flex-wrapper">
    <nav
            class="flex items-center justify-between flex-wrap bg-gray-900 py-4 lg:px-12 shadow border-solid border-t-2 border-gradi border-gradient-purple">
      <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-1 border-gray-800 lg:pb-0">
          <div class="flex items-center flex-shrink-0 text-white mr-16">
            <router-link to="/" class="text-white">
              <span class="font-semibold text-xl tracking-tight">Tablature</span>
            </router-link>
          </div>
          <div @click="showMenu = !showMenu" class="block lg:hidden ">
              <button
                  id="nav"
                  class="flex items-center px-3 py-2 text-white hover:text-blue-700">
                  <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                  </svg>
              </button>
          </div>
      </div>

      <div :class="showMenu ? 'flex' : 'hidden'" class="menu w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div class="text-md font-bold lg:flex-grow">
              <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded mr-2">Home</router-link>
              <router-link to="/top-songs" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded mr-2">Trending tabs</router-link>
              <router-link to="/history" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded mr-2">History</router-link>
          </div>
          <div class="bottom-0 inset-x-0 block mt-4 lg:inline-block lg:mt-0 px-4 py-2 rounded mr-2 right-0"> 
            <form class="flex items-center">   
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
                  <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
              </div>
              <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
            </form>
          </div>
      </div>
    </nav>
    <router-view @click="click" class="flex-grow"/>
    <footer class="inset-x-0 bottom-0 p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">Tablature™</a>. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
          </li>
          <li>
              <a href="#" class="hover:underline">Contact</a>
          </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  watch: {
    '$route' () {
      this.showMenu = false
    },
  },
  methods: {
    click() {
      this.showMenu = false
    }
  }
};
</script>


<style scoped>
.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

.border-gradi {
  border-top-style: 2px solid;
  border-image-slice: 1;
}
.border-gradient-purple {
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
}

.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
