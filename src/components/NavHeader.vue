<template>
  <header>
    <div class="logo">
      <img src="../assets/shopping.jpg" />
    </div>
    <div class="login">
      <span v-if="!userInfo.username" @click="openLogin">Login</span>
      <span v-else>
        欢迎您{{userInfo.username}}
        <span @click="logout">logout</span>
      </span>
      <span>cart</span>
    </div>
    <el-dialog title="登录" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form" status-icon ref="form" label-width class="demo-ruleForm">
        <el-form-item label="账号">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="login">确 定</el-button>
      </span>
    </el-dialog>
  </header>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
  data() {
    return {
      dialogVisible: false,
      userInfo: {
        username: ""
      },
      form: {
        username: "",
        password: ""
      }
    };
  },
  created() {
    this.checkLogin();
  },
  components: {},
  methods: {
    checkLogin() {
      axios
        .get("/users/checkLogin")
        .then(res => {
          this.userInfo.username = res.data.result;
        })
        .catch(err => {});
      // let cookies = document.cookie;
      // let cookieMap = new Map();
      // cookies = cookies.split("; ");
      // for (let i in cookies) {
      //   cookies[i] = cookies[i].split("=");
      //   cookieMap.set(cookies[i][0], cookies[i][1]);
      // }
      // if (cookieMap.has("username")) {
      //   this.userInfo.username = cookieMap.get("username");
      // } else {
      //   this.userInfo.username = "";
      // }
    },
    openLogin() {
      this.dialogVisible = true;
    },
    login() {
      axios
        .post("/users/login", this.form)
        .then(result => {
          let data = result.data;
          if (data.status == 0) {
            this.userInfo.username = data.result.userName;
            this.dialogVisible = false;
          }
        })
        .catch(err => {
          this.$message.error("账号或密码错误");
        });
    },
    logout() {
      axios
        .get("/users/logout")
        .then(result => {
          this.userInfo.username = "";
        })
        .catch(err => {});
    }
  }
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
.el-dialog__wrapper {
  line-height: normal;
}
</style>
