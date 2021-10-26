<template>
  <div id="app">
    <div class="container-fluid ">
      <header class="row justify-content-md-center">
        <nav class="navbar row">
          <div class="col col-lg-2">
            <a href="#" class="navbar-brand">
              <img src="@/assets/fondo.jpg" alt="logo" />
              <router-link to="/Inicio">  Hyatt Regency  </router-link>
            </a>
          </div>

          <div class="col col-lg-3">
            <ul class="flex-row d-flex">
              <li>
                <button class="btn btn-info">
                  <router-link to="/Login">Iniciar Sesion</router-link>
                </button>
              </li>
              <li>
                <button class="btn btn-info">
                  <router-link to="/Publicidad">Registrarse</router-link>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>

    <router-view />
  </div>
</template>
<script>



export default{



}

</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
header {
  background-color: #11202f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
}
h1 {
  color: white;
  font-size: 25px;
}

li {
  color: white;
  margin: 5px;
  text-decoration: none;
  list-style: none;
}
header a img {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 120%;
}

a {
    color: #ffffff!important;
    text-decoration: none!important;
}
</style>

