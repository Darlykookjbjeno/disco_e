<template>
  <div class="container-fluid col-12 sticky-top">
    <header class=" row   navbar navbar-light bg-light">
      <nav class="row2">
        <ul class="flex-row d-flex">
          <div class="col">
            <li class="linea"><router-link to="/Inicio">Inicio</router-link></li>
          </div>
          <div class="col">
            <li class="linea"><router-link to="/Contactos">Sucursales</router-link></li>
          </div>
          <div class="col">
            <li class="linea"><router-link to="/Home">Comodidades</router-link></li>
          </div>
          <div class="col">
            <li class="linea"><router-link to="/Home">Mis Reservaciones</router-link></li>
          </div>
        </ul>
      </nav>
    </header>
    <br/>
    <br/>
  </div>
</template>




<script>
export default {
  name: "Header",
  parameters: {
    
  },
};
</script>




<style  scoped>
header {
  background-color: rgb(39, 39, 112);
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
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}



.linea:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #054869;
  content: "";
  transition: width 0.2s;
}

.linea:hover {
  color: #0d0d0d;
}
/*hasta donde la la linea*/
.linea:hover:after{
  width: 100%;
}

a[data-v-61dd7a3d] {
color:#054869;
    text-decoration: none;
}
/*.sticky-top-2 {
    position: -webkit-sticky;
    position: sticky;
    top: 56px;
    z-index: 1020;
}*/
.row{
  border-bottom: solid 3px #054869;
}
</style>

