const home = {
  setup() {
    const message = ref("Holaaaa")
    return { message }
  },
  template: `
        <h2>Componente Hola mundo</h2>
        <p>{{message}}</p> 
      `
}