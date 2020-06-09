<template>
  <div>
    <h3>Users</h3>
    <button @click="toHome">Homeへ</button>
    <router-link to="/users/1">User1へ</router-link>
    <router-link to="/users/2">User2へ</router-link>
    <h3>User No.{{ id }}</h3>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    toHome() {
      this.$router.push("/");
    }
  }
};
</script>