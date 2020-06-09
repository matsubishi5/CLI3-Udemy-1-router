<template>
  <div>
    <h3>Users</h3>
    <button @click="toHome">Usersへ</button>
    <h3>User No.{{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/");
    }
  }
};
</script>