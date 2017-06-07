import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import login from '@/pages/login.vue' // 登录
import findPassWord from '@/pages/findPassWord.vue' // 找回密码
import resetPassWord from '@/pages/resetPassWord.vue' // 重设密码
// 医生平台
import doctor from '@/pages/doctorM/index.vue'
import doctorList from '@/pages/doctorM/list.vue'
// 收费管理
import charge from '@/pages/chargeM/index.vue'
import chargeList from '@/pages/chargeM/list.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: login
    }, {
      path: '/findPassWord',
      name: '找回密码',
      component: findPassWord
    }, {
      path: '/resetPassWord',
      name: '设置密码',
      component: resetPassWord
    }, {
      path: '',
      name: '医掌柜',
      component: index,
      children: [{
        path: '',
        redirect: ''
      }, {
        path: 'doctor',
        component: doctor,
        children: [
          { path: '', redirect: 'list' },
          { path: 'list', component: doctorList }
        ]
      }, {
        path: 'charge',
        component: charge,
        children: [
          { path: '', redirect: 'list' },
          { path: 'list', component: chargeList }
        ]
      }]
    }
  ]
})
