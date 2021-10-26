<template>
<div>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<nav class="sidebar">
    <div class="text">Menu</div>
    <ul>
        <li><a href="#" >Dashboard</a></li>
        <li>
            <a href="#">Futures</a>
            <span class="fas fa-caret-down"></span>
            <ul>
                <li><a href="#">pages</a></li>
                <li><a href="#">pages</a></li>
            </ul>
        </li>
         <li>
            <a href="#">services</a>
            <ul>
                <li><a href="#">app</a></li>
                <li><a href="#">wed</a></li>
            </ul>
        </li>
        <li><a>Dashboard</a></li>
        <li><a>Dashboard</a></li>
        <li><a>Dashboard</a></li>
        <li><a>Dashboard</a></li>
    </ul>

</nav>

</div>
</template>

<script>
export default {
    name: 'Vertical',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>


<style  scoped>

*{
    margin:0;
    padding: 0;
    user-select: none;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
    color:white;
}

.sidebar{
    position: fixed;
    width: 250px;
    height: 100%;
    left: 0;
    background: #1b1b1b;
}
.sidebar .text{
    color: white;
    font-size: 25px;
    font-weight: 600;
    line-height: 65px;
    text-align: center;
    background: #1e1e1e;
    letter-spacing: 1px;

}
nav ul{
    background: #1b1b1b;
    height: 100%;
    width: 100%;
    list-style: none;
}

nav ul li{
    line-height: 60px;
    border-bottom: 1px solid rgba(255,255, 255, 0.1);
}

nav ul li a{
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding-left:40px;
    font-weight: 500;
    display: block;
    width: 100px;
    border-left: 3px solid transparent;
}

nav ul li a:hover{
    color: cyan;
    background: #1e1e1e;
    border-left-color: cyan;
}
nav ul ul{
    position: static;
    display: none;
}

nav ul ul li{
    line-height: 42px;
    border-bottom:none;
}

nav ul ul li a{
    font-size: 17px;
    color: #e6e6e6;
    padding: 80px;
}


</style>