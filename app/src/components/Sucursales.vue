<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-9 order-2">

          <!--NAV PEQUEÑO SUPERIOR-->


            <Havitaciones/>

          <!--CONTENIDO-->

          <!--<div class="row mb-5">
                    <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="block-4 text-center border">
                            <figure class="block-4-image">
                                <a href="shop-single.php">
                                <img src="" class="img-fluid"/></a>
                            </figure>
                            <div class="block-4-text p-4">
                                <h3><a href="shop-single.php">$</a></h3>
                                <p class="mb-0">$</p>
                                <p class="text-primary font-weight-bold">$</p>
                            </div>
                        </div>
                    </div>
                </div>-->
        </div>

        <!--BARRA VERTICAL--->

        <div class="col-md-3 order-1 mb-5 mb-md-0">
          <div class="border p-4 rounded mb-4">
            <h3 class="mb-3 h6 text-uppercase text-black d-block">
              Sucursales
            </h3>

            <!--OPCIONES-->

            <ul class="list-unstyled mb-0">
              <li class="mb-1">
                <a href="#" class="d-flex"
                  ><span>Hyatt Regency Trinidad </span>
                  <span class="ml-auto"></span
                ></a>
              </li>
              <br />
              <li class="mb-1">
                <a href="#" class="d-flex"
                  ><span>Hyatt Regency Aruba Resort Spa and Casino </span>
                  <span class="ml-auto"></span
                ></a>
              </li>
              <br />
              <li class="mb-1">
                <a href="#" class="d-flex"
                  ><span>Hyatt Place Aruba Airport</span>
                  <span class="ml-auto"></span
                ></a>
              </li>
              <br />
              <li class="mb-1">
                <a href="#" class="d-flex"
                  ><span>Hyatt Place Bogotá-Convention Center</span>
                  <span class="ml-auto"></span
                ></a>
              </li>
              <br />
              <li class="mb-1">
                <a href="#" class="d-flex"
                  ><span>Grand Hyatt Bogotá</span> <span class="ml-auto"></span
                ></a>
              </li>
              <br />
              <li class="mb-1">
                <a href="#" class="d-flex"
                  ><span>Hyatt Regency Cartagena</span>
                  <span class="ml-auto"></span
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--SEGUNDA-->
    </div>
  </div>
</template>


<script>
import Havitaciones from './Havitaciones.vue';
export default {
  name: "Sucursales",
  parameters: {
  },
  components:{
      Havitaciones
  }
};
</script>

<style scoped>
.mb-1 :hover {
  background-color: rgb(177, 177, 179);
  border-radius: 5px;
}

a {
  color: #054869;
  text-decoration: none;
}
.mb-1 {
  text-align: initial !important;
}
.text-uppercase {
  border-bottom: solid 3px #054869;
}





</style>