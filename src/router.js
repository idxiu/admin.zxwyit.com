import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
var Home = () => import('@/views/Home')
var MakeTestPaper = () => import('@/views/test/MakeTestPaper')
var TestPaperManage = () => import('@/views/test/TestPaperManage')
var TestResult = () => import('@/views/test/TestResult')
var TestSetter = () => import('@/views/test/TestSetter')
var ViewTestPaper = () => import('@/views/test/ViewTestPaper')

var ClassManage = () => import('@/views/base/ClassManage')
var ModifyPassword = () => import('@/views/base/ModifyPassword')
var StudentManage = () => import('@/views/base/StudentManage')
var TeacherManage = () => import('@/views/base/TeacherManage')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          name:'MakeTestPaper',
          path: 'home/test/makepaper',//老师出卷
          meta: { title: '老师出卷', },
          components: {
            right: MakeTestPaper,
          }
        }, {
          name:'TestPaperManage',
          path: 'home/test/papermanage',//试卷管理
          meta: { title: '试卷管理', },
          components: {
            right: TestPaperManage,
          }
        }, {
          name:'TestResult',
          path: 'home/test/result',//查看成绩
          meta: { title: '查看成绩', },
          components: {
            right: TestResult,
          }
        }, {
          name:'TestSetter',
          path: 'home/test/setter',//安排测试
          meta: { title: '安排测试', },
          components: {
            right: TestSetter,
          }
        }, {
          name:'ViewTestPaper',
          path: 'home/test/viewpaper', //批阅试卷
          meta: { title: '批阅试卷', },
          components: {
            right: ViewTestPaper,
          }
        }, {
          name:'ClassManage',
          path: 'home/base/classmanage',//班级管理
          meta: { title: '班级管理', },
          components: {
            right: ClassManage,
          }
        }, {
          name:'ModifyPassword',
          path: 'home/base/modifypassword',//修改密码
          meta: { title: '修改密码', },
          components: {
            right: ModifyPassword,
          }
        }, {
          name:'StudentManage',
          path: 'home/base/studentmanage',//学生管理
          meta: { title: '学生管理', },
          components: {
            right: StudentManage,
          }
        }, {
          name:'TeacherManage',
          path: 'home/base/teachermanage',//老师管理
          meta: { title: '老师管理', },
          components: {
            right: TeacherManage,
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
