<template>
  <section class="bread">
    <div class="breadwrap">
      <nav>
        <router-link :to="{path:'/'}" class="root">Home /</router-link>
        <slot></slot>
      </nav>
    </div>
  </section>
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
.bread {
  height: 45px;
  line-height: 45px;
  background-color: #f0f0f0;
}

.breadwrap {
  padding-left: 20px;
  text-align: left;
  font-size: 14px;
  color: #a1a1a1;
  font-weight: 500;
}

nav .root {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

nav span {
  color: #d1434a;
}
</style>
