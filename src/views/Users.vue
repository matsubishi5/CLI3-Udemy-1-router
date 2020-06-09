<template>
  <div>
    <h3>Users</h3>
    <button @click="toHome">Usersへ</button>
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