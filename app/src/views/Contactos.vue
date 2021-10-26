
<template>

<div class="contactos">
<Buscador/>
<Header />
<Sucursales/>

        
</div>
</template>


<script>

import Header from '@/components/Header.vue'
import Buscador from '@/components/Buscador.vue'
import Sucursales from '@/components/Sucursales.vue'


export default {
    name:'Contactos',
    components:{
       Header,
       Buscador,
       Sucursales

    }
}
</script>

<style>


</style>