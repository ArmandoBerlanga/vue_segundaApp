import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import UserProfile from '../views/UserProfile.vue';
import Admin from '../views/Admin.vue';
import store from '../store';
import {users} from '../assets/users'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userID',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta:{
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to, from, next)=> {

  const user = store.state.user;

  if (!user) {
    await store.dispatch('setUser', users[4]);
  }

  const admin = true;
  const adminRequired = to.matched.some(record => record.meta.requiresAdmin);

  if (!admin && adminRequired)
    next({name: 'Home'});
  else
    next();
})

export default router