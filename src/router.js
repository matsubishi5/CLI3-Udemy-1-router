import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';
import HomeHeader from './views/HomeHeader.vue';
import UsersHeader from './views/UsersHeader.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        header: HomeHeader,
      },
    },
    {
      path: '/users/:id',
      components: {
        default: Users,
        header: UsersHeader,
      },
      props: {
        default: true,
        header: false,
      },
      children: [
        {
          path: 'posts',
          component: UsersPosts,
        },
        {
          path: 'profile',
          component: UsersProfile,
          name: 'users-id-profile',
        },
      ],
    },
    {
      path: '/hello',
      redirect: '/',
    },
  ],
});
