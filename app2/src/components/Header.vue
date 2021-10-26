<template>

<div class="container-fluid">
    <header>
            <a href="#"><img src="../assets/fondo.jpg" alt="logo"></a>
            <h1>Hotel</h1>
       <nav>
           <ul class=" flex-row d-flex">
               <li><router-link to="/Home">Inicio</router-link> </li>
               <li>nosotros</li>
               <li><router-link to="/Contactos">Contactos</router-link> </li>
               <li>clientes</li>
           </ul>
       </nav>
    </header>
</div>
    
</template>




<script>
export default {
  name: "Header",
  parameters: {
    mensaje: String,
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
</style>

