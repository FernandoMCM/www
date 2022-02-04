const department = {
    setup() {
      const users = ref([]);

      const recurso = recSuma(999999, 150);

      onMounted(async () => {
        users.value = await recFetchGet();
        // const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // users.value = await response.json()
      })
      return { users, recurso }
    },
    template:
  `   <h2>Fech en Vue 3</h2>
     {{ recurso}}
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
      <button @click="recurso">Recurso</button>
      `
}