<template>
    <div class="col-md-12 mb-5">
              <h5>Categoria de Habitacion</h5>
              <header class="row conte border p-3 rounded mb-4 ">
                
                  <ul class=" d-flex">
                    <div class="col">
                      <li class="linea">
                        <router-link to="/">Sencilla</router-link>
                      </li>
                    </div>
                    <div class="col">
                      <li class="linea">
                        <router-link to="/">Doble</router-link>
                      </li>
                    </div>
                    <div class="col">
                      <li class="linea">
                        <router-link to="/">Ejecutiva</router-link>
                      </li>
                    </div>
                    <div class="col">
                      <li class="linea">
                        <router-link to="/">Suite</router-link>
                      </li>
                    </div>
                    <div class="col">
                      <li class="linea">
                        <router-link to="/">Presidencial</router-link>
                      </li>
                    </div>
                  </ul>
             
              </header>
              <br />
            </div>
          
</template>

<script scoped>
export default {
     name: "Habitaciones",
  parameters: {
    
  },
};

</script>

<style scoped>
header{
    height: 75px!important;
}
h1 {
  color: white!important;
  font-size: 25px!important;
}

li {
  color: white!important;
  margin: 5px!important;
  text-decoration: none!important;
  list-style: none!important;
}

a {
    color: #054869!important;
    text-decoration: none!important;
}
a:hover {
    color: #000000!important;
    text-decoration: none!important;
}
/*.sticky-top-2 {
    position: -webkit-sticky;
    position: sticky;
    top: 56px;
    z-index: 1020;
}*/
h5 {
  text-align: initial !important;
  font-size: 15px;
}

</style>