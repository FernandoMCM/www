const {
  createApp,
  ref,
  computed,
  onMounted,
  reactive,
  watch,
  provide,
  inject
} = Vue;

const app = createApp({});
app.use(router)
app.use(store)
app.mount('#app')