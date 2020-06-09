<template>
  <div>
    <nav>
      <router-link to="/" active-class="link--active" exact>Home</router-link>
      <router-link to="/users" active-class="link--active" exact>Users</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
.link--active {
  font-size: 30px;
}
</style>