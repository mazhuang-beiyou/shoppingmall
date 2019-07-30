<template>
  <header>
    <div class="logo">
      <img src="../assets/shopping.jpg" />
    </div>
    <div class="login">
      <span>Login</span>
      <!-- <span>logout</span> -->
      <span>cart</span>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
header {
  height: 100px;
  line-height: 100px;
  padding: 10px 100px;
  overflow: hidden;
  box-sizing: border-box;
}
.logo {
  float: left;
  width: 200px;
  height: 80px;
}
.logo::after {
  clear: both;
}
.logo img {
  width: 100%;
  height: 100%;
}
.login {
  line-height: 80px;
  float: right;
  color: #666;
  text-decoration: none;
  font-weight: 600;
}
.login span {
  margin-left: 20px;
  cursor: pointer;
}
</style>
