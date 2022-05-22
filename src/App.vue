<template>
<nav
        class="flex items-center justify-between flex-wrap bg-gray-900 py-4 lg:px-12 shadow border-solid border-t-2 border-gradi border-gradient-purple">
  <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-1 border-gray-800 lg:pb-0">
      <div class="flex items-center flex-shrink-0 text-white mr-16">
          <span class="font-semibold text-xl tracking-tight">Tablature</span>
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

  <div :class="showMenu ? 'flex' : 'hidden'" class="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
      <div class="text-md font-bold text-white lg:flex-grow">
          <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white text-gray-300 px-4 py-2 rounded hover:bg-blue-700 mr-2">Home</router-link>
          <router-link to="/favourites" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">Favourites</router-link>
          <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">History</router-link>
      </div>
      <div class="relative mx-auto text-white lg:block hidden">
          <input
              class="bg-blue-900 h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search" name="search" placeholder="Search">
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
              <svg class="text-white h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                    version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                    xml:space="preserve"
                    width="512px" height="512px">
          <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
        </svg>
          </button>
      </div>
  </div>
</nav>
  <router-view/>
  <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
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
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>


<style scoped>
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

@layer nav a.router-link-exact-active {
  background-color: @apply bg-blue-700;
}
</style>
