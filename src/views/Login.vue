<template>
  <div id="login-container">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_477672_7ey310632htihpvi.css">
    <!--控制整体布局-->
    <div class="main">
      <!--控制模块内部的布局-->
      <div class="main-inner">
        <!--登录左边布局-->
        <div class="login-left box-login" style="text-align: center;">
          <div>
            <img src="@/assets/logo.png" class="header">
          </div>
          <h2 style="color:#009688">智学无忧后台系统</h2>
          <h6 style="color: #9e9e9e;">做最有态度、责任、良心的IT教育</h6>
        </div>
        <!--登录右边布局-->
        <div class="login-right box-login">
          <p class="p-user">
            <input
              type=" text"
              class="textBox"
              id="txtUserName"
              autocomplete="off"
              placeholder="管理员账号"
            >
          </p>
          <p class="p-pwd">
            <input
              type="password"
              class="textBox"
              id="txtPassword"
              autocomplete="off"
              placeholder="管理员密码"
            >
          </p>
          <p style="padding: 0;padding-top: 10px;">
            <button class="btn" id="btnLogin" @click="login" type="button" value="登录">
              <i class="fa fa-sign-in"></i>
              登&nbsp;&nbsp;录
            </button>
          </p>
        </div>
      </div>
      <div id="msg" class="error">
        <span id="spanMsg"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
      login(){
           this.$router.replace('/');
      },
    }
}
</script>
<style>
body {
  background: #fff;
  color: #555;
  padding: 0;
  margin: 0;
  background: url(/img/background.jpg);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: auto;
  overflow: hidden;
}
</style>

<style scoped>
* {
  box-sizing: border-box;
}

.main {
  position: absolute;
  display: flex;
  height: 100%;
  /*height:100%要生效，position必须是absolute，否则无效*/
  width: 100%;
}

.main-inner {
  margin: auto;
  box-shadow: 0 0 11px 11px #4c94e8;
  border-radius: 5px;
  display: flex;
  background-color: #d8ecf5;
}

.box-login {
  float: left;
  width: 50%;
  padding: 30px;
  position: relative;
}

.login-left::after {
  content: "";
  display: block;
  width: 1px;
  display: block;
  position: absolute;
  right: -0.5px;
  height: 100%;
  top: 0px;
  background-image: linear-gradient(
    to top,
    #fff 0%,
    #ccc 15%,
    #009688 30%,
    #4caf50 70%,
    #ccc 85%,
    #fff 100%
  );
  background-image: -moz-linear-gradient(
    to top,
    #fff 0%,
    #ccc 15%,
    #009688 30%,
    #4caf50 70%,
    #ccc 85%,
    #fff 100%
  );
  background-image: -ms-linear-gradient(
    to top,
    #fff 0%,
    #ccc 15%,
    #009688 30%,
    #4caf50 70%,
    #ccc 85%,
    #fff 100%
  );
  background-image: -webkit-linear-gradient(
    to top,
    #fff 0%,
    #ccc 15%,
    #009688 30%,
    #4caf50 70%,
    #ccc 85%,
    #fff 100%
  );
}
.header {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  /* 图片周围有阴影 */
  box-shadow: 0 0 10px 3px #cccccc;
  border: none;
}
.textBox {
  width: 200px;
  height: 40px;
  line-height: 40px;
  padding-left: 35px;
  border: 1px solid #4caf50;
  outline: none;
  font-size: 16px;
}
.textBox:focus {
  background-color: #f1f8e9;
}
.btn {
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  background: #4caf50;
  width: 200px;
  border-radius: 5px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  cursor: pointer;
}
.btn:hover {
  color: #fff;
  background-color: #81c784;
}
.p-user,
.p-pwd {
  position: relative;
  padding: 6px 0;
}
.p-user::after,
.p-pwd::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 99;
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  top: 10px;
  left: 5px;
  color: #4caf50;
  font-size: 25px;
}
.p-user::after {
  content: "\e75a";
}
.p-pwd::after {
  content: "\e6d1";
}
#msg {
  position: fixed;
  top: -40px;
  height: 40px;
  line-height: 40px;
  margin: auto;
  width: 100%;
  z-index: 9999;
  text-align: center;
  transition: all 0.6s ease-in-out;
}
.success {
  background-color: #c8e6c9;
  color: green;
}
.success span::before {
  content: "";
  display: inline-block;
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e66e";
  color: green;
  margin-right: 5px;
}

.error {
  background-color: #ffebee;
  color: #ff5722;
}
.error span::before {
  content: "";
  display: inline-block;
  font-family: "iconfont" !important;

  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e6b4";
  color: #f44336;
  margin-right: 5px;
}
@media (max-width: 520px) {
  body {
    background-image: none !important;
    background-color: #d8ecf5 !important;
  }
  .main-inner {
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0;
    position: absolute;
  }
  .box-login {
    float: none;
    width: 100%;
    padding: 15px;
    position: relative;
  }
  .textBox,
  .btn {
    width: 100% !important;
  }
  .login-left::after {
    bottom: -0.5px;
    left: 0px;
    width: 100% !important;
    right: 0px !important;
    height: 1px !important;
    top: auto !important;
    background-image: linear-gradient(
      to left,
      #fff 0%,
      #ccc 15%,
      #009688 30%,
      #4caf50 70%,
      #ccc 85%,
      #fff 100%
    ) !important;
    background-image: -moz-linear-gradient(
      to left,
      #fff 0%,
      #ccc 15%,
      #009688 30%,
      #4caf50 70%,
      #ccc 85%,
      #fff 100%
    ) !important;
    background-image: -ms-linear-gradient(
      to left,
      #fff 0%,
      #ccc 15%,
      #009688 30%,
      #4caf50 70%,
      #ccc 85%,
      #fff 100%
    ) !important;
    background-image: -webkit-linear-gradient(
      to left,
      #fff 0%,
      #ccc 15%,
      #009688 30%,
      #4caf50 70%,
      #ccc 85%,
      #fff 100%
    ) !important;
  }
}
</style>

