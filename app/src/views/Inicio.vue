<template>
  <div class="inicio">
    <Buscador />
    <Header />

    <div class="container col-12">
      <div class="row">
        <div class="col">
          <div class="card" style="width: 20rem">
            <img src="../assets/piezaDos.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Nombre</h5>
              <p class="card-text">descripcion</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style="width: 20rem">
            <img src="../assets/piezaDos.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Nombre</h5>
              <p class="card-text">descripcion</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 20rem">
            <img src="../assets/piezaDos.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Nombre</h5>
              <p class="card-text">descripcion</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 20rem">
            <img src="../assets/piezaDos.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Nombre</h5>
              <p class="card-text">descripcion</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 20rem">
            <img src="../assets/piezaDos.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Nombre</h5>
              <p class="card-text">descripcion</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 20rem">
            <img src="../assets/piezaDos.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Nombre</h5>
              <p class="card-text">descripcion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Buscador from "@/components/Buscador.vue";
export default {
  name: "Inicio",
  components: {
    Header,
    Buscador,
  },
};
</script>
<style scoped>
input {
  border-radius: 100px;
}

button {
  display: block !important;
  width: 50px !important;
  height: 50px !important;
  border-radius: 100% !important;
}

.uno {
  background-color: #11202f;
  background-image: url("../assets/fondo.jpg") !important;
  background-repeat: no-repeat;
  background-position: 400px -160px;
}
.box {
  width: 285px;
  height: 300px;
  background-color: red;
  float: left;
  margin: 40px 50px;
}


</style>
