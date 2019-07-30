<template>
  <footer>
    <div class="footer_warp">
      <div class="footer_secondary">
        <div class="footer__region">
          <span>Region</span>
          <select class="footer__region__select">
            <option value="en-US">UK</option>
            <option value="zh-CN">China</option>
          </select>
        </div>
        <div class="footer__secondary__nav">
          <span>Copyright © 2019 zhaoxingyu All Rights Reserved.</span>
        </div>
      </div>
    </div>
  </footer>
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
footer {
  margin-top: 50px;
  background-color: #f5f7fc;
  color: #333;
  position: relative;
}

.footer_warp {
  max-width: 1280px;
  margin: 0 auto;
}

.footer_secondary {
  position:relative;
  height: 100px;
  border-top: 1px solid rgba(51, 51, 51, 0.15);
}

.footer__region {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 36px;
}

.footer__secondary__nav {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 36px;
}

div,
p,
dl,
dt,
dd {
  margin: 0;
  padding: 0;
}
</style>
