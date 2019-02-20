/** 
 * 后台操作的主页面
 */  
<template>
  <div id="home-container">
    <el-header
      style="background-color:#303133;color:#fff; font-size: 12px; overflow: hidden;white-space: nowrap;"
    >
      <div
        class="header-logo"
        :style="{width:isCollapse?'44px':'180px',marginLeft:isCollapse?'-20px':0,padding:isCollapse?'0 10px':0}"
      >{{isCollapse?'智学':'智学无忧IT教育'}}</div>
      <div class="toggle-button">
        <a @click="toggleCollapse">
          <i class="el-icon-d-arrow-left" :class="{'rotate-180':isCollapse}"></i>
        </a>
      </div>
      <!-- 导航窗体 -->
      <div class="header-tabs">
        <el-tabs stretch v-model="currTabValue" type="card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item, index) in tabMenus"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            :closable="true"
          ></el-tab-pane>
        </el-tabs>
      </div>
      <div class="user-info">
        <img src="@/assets/logo.png" class="user-header" alt>
        <span>管理员</span>
      </div>
    </el-header>
    <el-container :style="{height:containerHeight+'px'}">
      <el-aside style="background-color: #545c64;" :width="isCollapse?'64px':'200px'">
        <el-menu
          :default-openeds="['1','2']"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          :collapse="isCollapse"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">在线测试</span>
            </template>
            <el-menu-item index="/home/test/setter">安排测试</el-menu-item>
            <el-menu-item index="/home/test/viewpaper">批阅试卷</el-menu-item>
            <el-menu-item index="/home/test/makepaper">老师出卷</el-menu-item>
            <el-menu-item index="/home/test/papermanage">试卷管理</el-menu-item>
            <el-menu-item index="/home/test/result">查看成绩</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">基础数据</span>
            </template>
            <el-menu-item index="/home/base/modifypassword">修改密码</el-menu-item>
            <el-menu-item index="/home/base/teachermanage">老师管理</el-menu-item>
            <el-menu-item index="/home/base/classmanage">班级管理</el-menu-item>
            <el-menu-item index="/home/base/studentmanage">学生管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view name="right"></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  beforeRouteUpdate(to, from, next) {
    if (to) {
      var name = to.name;
      var path = to.path;
      var title = to.meta.title;
      this.addTab({ name, path, title });
    }
    this.name = to.params.name
    console.log(to, from, next);
    next()
  },
  data() {
    return {
      containerHeight: 500,//容器的高度
      isCollapse: false,//显示或隐藏
      currTabValue: 'Home',//当前选项卡
      tabMenus: [{ //选项卡信息
        title: '首页',
        name: 'Home',
        path: '/'
      }],

    }
  },
  mounted() {
    var innerHeight = window.innerHeight;
    this.containerHeight = innerHeight - 60;
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    findTable(name) {//找选项卡，返回对应的下标
      return this.tabMenus.findIndex(p => p.name == name);
    },
    addTab(obj) {
      if (this.findTable(obj.name) == -1) {//不存在相同的选项卡
        if (this.tabWillLimit()) {
          this.$message({ message: '选项卡达到上限了', type: 'warning' });
          return;
        } else {
          this.tabMenus.push(obj);
        }
      }
      this.currTabValue = obj.name;
    },

    removeTab(targetName) {
      var index = this.findTable(targetName);
      if (index == -1) return;
      this.tabMenus.splice(index, 1);
      this.currTabValue = this.tabMenus[index - 1].name;
    },
    tabWillLimit() {//选项卡添加是否即将达到上限
      var header = document.querySelector(".el-header");
      var childs = document.querySelectorAll(".el-header>div");
      var totalWidth = header.offsetWidth - 40;//减去两边的填充
      var tabWidth = 0;//选项卡的占用的宽度
      if (this.tabMenus.length > 1) {//至少有两个选项卡
        var tabCard = document.querySelector(".header-tabs .el-tabs__item:nth-child(2)");
        if (tabCard) {
          tabWidth = tabCard.offsetWidth;
        }
      }
      var len = childs.length;
      var nowWidth = 0;//头部子容器，当前的总长度
      for (var i = 0; i < len; i++) {
        nowWidth += childs[i].offsetWidth;
      }
      if (nowWidth + tabWidth > totalWidth) {//超过总长度
        return true;//达到上限
      } else {
        return false;
      }

    }
  },
  watch: {//观察器
    currTabValue(n, o) {
      var name = n; 
      var index = this.findTable(name);
      var path = this.tabMenus[index].path;
      this.$router.replace(path);
    }
  }
};
</script>
<style scoped>
 
.header-tabs {
  display: inline-block;
  padding: 10px;
  line-height: initial;
}
.header-tabs .el-tabs {
  position: relative;
  bottom: -9px;
  background-color: #fff;
  border-radius: 4px 4px 0 0;
}
/*深度选择器*/
.header-tabs /deep/ .el-tabs__header {
  margin-bottom: 0;
}
/* 隐藏选项卡的第一项的关闭按钮 */
.header-tabs
  .el-tabs--card
  /deep/
  .el-tabs__nav
  > .el-tabs__item:first-child
  > .el-icon-close {
  visibility: hidden;
}
.header-logo {
  font-size: 22px;
  float: left;
  width: 180px;
  overflow: hidden;
  transition: all ease-in 0.5s;
  height: 60px;
}
.user-info {
  float: right;
}
.user-info .user-header {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
  box-shadow: 0px 0px 4px 3px #607d8b;
}
.el-aside {
  transition: all ease-in 0.5s;
}
.toggle-button {
  float: left;
}
.toggle-button > a {
  display: block;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  background-color: #607d8b;
  padding: 0 10px;
}
.toggle-button > a > i {
  transition: all ease-in 0.5s;
}
.rotate-180 {
  /*旋转180°*/
  transform: rotate(180deg);
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.el-menu {
  border-right: none;
}

</style>

<style>
body {
  background-image: none;
}
</style>
