import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/pages/index.vue'
// 键盘上下键选择
import list from '@/pages/keyboardList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testIng',
      component: list
    }
  ]
})
