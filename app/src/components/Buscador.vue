<template>
  <div class="Buscador">
    <div class="container-fluid uno p-5">
      <div class="m-0 row">
        <div class="col-auto-12 p-5">
          <div class="input-group justify-content-center">
            <div class="form-outline">
              <input
                type="search"
                class="form-control-lg"
                placeholder="Buscar..."
              />
            </div>
            <button type="button" class="botonUno btn btn-info">
              <img src="../assets/lupa.png" style="width: 20px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "Buscador",
  parameters: {
    
  },
};
</script>




<style  scoped>
input {
  border-radius: 100px;
}

button {
  display: block !important;
  width: 50px !important;
  height: 50px !important;
  border-radius: 100% !important;
}

.uno{
  
background-image: url("../assets/fondo.jpg")!important;
background-position:center center ;
background-repeat:no-repeat;
background-attachment:fixed ;
background-size:cover;
background-color:#11202f;
    
}

</style>

