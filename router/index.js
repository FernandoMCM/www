const routes = [
  { path: '/www/', component: login, name: login },
  { path: '/www/department', component: department, meta: { requiresAuth: true } },
  { path: '/www/metodo', component: methods, meta: { requiresAuth: true } },
 // { path: '/login', component: login, name: login }
]

const router = VueRouter.createRouter({
  // history: VueRouter.createWebHashHistory(), //uso con numeral localhost/#/home
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
  //linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  //console.log(to)
  if (to.meta.requiresAuth) {
    const authUser = recGetCookie('token')
    if(!authUser){
      console.log("here")
      next('/www/')
      return
    }else{
      next();
      return
    }
  }
  console.log("here");
  next();
  });