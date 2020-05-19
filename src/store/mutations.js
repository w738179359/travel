export default {
  mchangeCity (state, city){
    state.city = city
    try {
      localStorage.city = city // h5新api 比cookie好用
    } catch(e) { console.log(e)}
  }
}