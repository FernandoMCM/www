const methods = {
  setup() {
    const name = ref('Israel')
    const surname = ref('Ferando')
    const fullName = computed(() => {
      return `${name.value} ${surname.value}`
    })
    const helloUser = () => {
      // alert(`Hola ${fullName.value}`);
      alert(fullName.value)
    }
    return {
      helloUser
    }
  },
  template: `      
        <h2>Ejecutr métodos con Vue3</h2>
        <p @click='helloUser'>Pulsa aquí para ejecutar</p>
  `
}