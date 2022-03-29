<template>
  <div>
    <el-container>
      <el-aside style="background-color: rgb(50,64,87)" class="aside">
        <el-menu
          background-color="rgb(50, 64, 87)"
          text-color="#fff"
          :router="true"
        >
          <el-menu-item class="item1" index="/">
            <span slot="title">ElementUI管理后台</span>
          </el-menu-item>
          <el-menu-item class="item" index="/">
            <i class="el-icon-platform-eleme"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <i class="el-icon-message"></i>
                <span>文章列表</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-video-play"></i>
                <span>多层级路由实例</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <div class="container">
        <div class="nav">
          <div class="n-left">
            <i class="el-icon-menu"></i>
          </div>
          <div class="right">
            <i class="el-icon-s-unfold"></i>
            <i class="el-icon-s-unfold"></i>
            <i class="el-icon-s-unfold"></i>
            <span>Admin</span>
          </div>
        </div>
        <div class="nav-c">
          <p>首页</p>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.aside{
  height:100vh;
}
.container{
  width:100vw;
  height:100vh;
  background: aqua;
}
.container .nav{
  width:100%;
  height:0.3rem;
  background: red;
  display: flex;
 
}
.container .nav div{
  flex:1;
  display: flex;
  justify-content: space-around;
}
.container .nav .n-left{
  width:1rem;
}
.container .nav .n-left i{
  margin-right:2.5rem;
}
.container .nav i{
  font-size:0.16rem;
  justify-content: space-between;
  line-height:0.3rem;
}
.container .nav .right{
  width:5rem;
  display: flex;
  justify-content: space-between;
}
.container .nav span{
  font-size:0.16rem;
}
.nav-c{
  width:100%;
  height:0.19rem;
  background: #fff;
}
.nav-c p{
  font-size:0.12rem;
  margin-left:0.1rem;
}
</style>