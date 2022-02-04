const login = {
  setup() {
    const data = reactive({
      name: 'fernando',
      password: '2014'
    })

    const submit = async () => {
      recSetCookie("username", btoa(data.name), 1);
      recSetCookie("password", btoa(data.password), 1);
      await fetch( recAPI_URL + 'gettoken', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + btoa(data.name + ':' + data.password),
          'Content-type': 'application/json'},
        //credentials: 'include',
        //body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data =>
        {
          recSetCookie("token", data.token, 1);
          // await router.push('/www/metodo');
          router.push('/www/department')
        }
      )
      .catch(error => console.error(error));
    }

    return { data, submit }
  },
  template: `
    <form @submit.prevent="submit">
      <h1>Register</h1>
      <input v-model="data.name" type="text" required>
      <input v-model="data.password" type="password" required>
      <button type="submit">Sign in</button>
    </form>
 `
}