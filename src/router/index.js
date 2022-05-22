import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavouritesView from '../views/FavouritesView.vue'
import HistoryView from '../views/HistoryView.vue'
import ListView from '../views/ListView.vue'
import Top100 from '../views/Top100.vue'
import NewView from '../views/NewView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavouritesView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/top-songs',
    name: 'top-songs',
    component: Top100
  },
  {
    path: '/new-tabs',
    name: 'new-tabs',
    component: NewView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
