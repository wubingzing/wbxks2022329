<template>
  <div class="container">
    <div class="login">
      <div class="title">
        <h3>Login Form</h3>
      </div>
      <div class="form">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="form.pass"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn">Login</el-button>
          </el-form-item>
          <div class="btm">
            <p>
              <span>username: admin</span
              ><span class="b-left">password: any</span>
            </p>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      form: {},
    };
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: #2d3a4b;
  position: relative;
}
.login {
  width: 4.48rem;
  height: 2rem;
  position: absolute;
  margin: 0 auto;
  /* border: 1px solid red; */
  margin-left: 2.24rem;
  margin-top: 1rem;
}
.login .title {
  font-size: 0.26rem;
  text-align: center;
  font-weight: 700;
  color: #fff;
}
.form {
  width: 3.8rem;
  height: 0.5rem;
  position: absolute;
  margin-top: 0.3rem;
}
.btn {
  width: 100%;
}
.btm p {
  font-size: 0.1rem;
  color: #fff;
  position: absolute;
  margin-left: 0.4rem;
}
.b-left {
  margin-left: 0.1rem;
}
</style>
