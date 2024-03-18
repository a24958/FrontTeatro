<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { menuFunctionsStore } from "../stores/storeMenuFunctions";

const menuFunctions = menuFunctionsStore();
</script>

<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <header class="navbar" id="Des">
        <RouterLink to="/"><img src="../assets/images/Logo.png" alt="" @click="menuFunctions.closeMenu"></RouterLink>
        <span class="menu-icon" @click="menuFunctions.toggleMenu">&#9776;</span>
        <ul class="nav-list">
            <li class="nav-item link" @click="menuFunctions.closeMenu"><RouterLink to="/contact">CONTACTO</RouterLink></li>
            <li class="nav-item">
                <a>OBRAS</a>
            </li>
            <li class="nav-item link" @click="menuFunctions.closeMenu"><RouterLink to="/rent">ALQUILER</RouterLink></li>
            <li class="nav-item" id="login" @click="menuFunctions.closeMenu"><RouterLink to="/login">LOGIN</RouterLink></li>
            <li class="nav-item" id="carrito" @click="menuFunctions.closeMenu"><a href="#">CARRITO</a></li>
        </ul>
    </header>
    <header class="header-desktop">
        <nav>
            <div id="Izq">
                <RouterLink to="/"><img src="../assets/images/Logo.png" alt=""></RouterLink>
                <RouterLink to="/contact">CONTACTO</RouterLink>
                <RouterLink to="/obras">OBRAS</RouterLink>
                <RouterLink to="/rent">ALQUILER</RouterLink>
            </div>
            <div id="Der">
                <RouterLink to="/login">LOGIN</RouterLink>
                <a href="#">🛒</a>
            </div>
        </nav>
    </header>
</template>

<style scoped>
ul {
    padding: 0;
}

.navbar {
    padding: 15px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.navbar a img {
    height: 64px;
    width: 64px;
}

.menu-icon {
    display: flex;
    justify-content: flex-end;
    color: #3385D9;
    cursor: pointer;
}

.nav-list {
    display: none;
    flex-direction: column;
    text-align: center;
    width: 94%;
    position: absolute;
    top: 60px;
    font-size: 14px;
}

.nav-item {
    color: rgb(63, 63, 63);
}

.nav-item a {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
}

.link a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: relative;
    text-decoration: none;
    color: rgb(63, 63, 63);
}

.link a::after {
    content: "";
    position: absolute;
    background-color: #3385D9;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -5px;
    transition: 0.5s;
}

.link a:hover {
    color: #050505;
}

.link a:hover::after {
    width: 100%;
}

.nav-list.show {
    display: flex;
    list-style: none;
    margin-left: -10px;
}

.dropdown {
    display: none;
}

.dropdown li {
    list-style: none;
    padding: 5px;
}

.header-desktop {
    display: none;
}

#login {
    margin-top: 12px;
    margin-bottom: 12px;
    border-width: 1px;
    border-radius: 8px;
    border-color: #3385D9;
    border-style: solid;
}

#login a {
    color: #3385D9;
}

#carrito {
    background-color: #3385D9;
    border-width: 1px;
    border-radius: 8px;
    border-color: #3385D9;
    border-style: solid;
}

#carrito a {
    color: white;
}

@media screen and (min-width: 800px) {
  .navbar {
    display: none;
  }
  .header-desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .header-desktop nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .header-desktop nav #Izq {
    width: 400px;
  }
  .header-desktop nav #Der {
    width: 100px;
    margin-right: 16px;
  }
  .header-desktop nav div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-desktop nav div a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: relative;
    text-decoration: none;
    color: rgb(63, 63, 63);
  }
  .header-desktop nav div a::after {
    content: "";
    position: absolute;
    background-color: #3385D9;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -5px;
    transition: 0.3s;
  }
  .header-desktop nav div a:hover {
    color: #050505;
  }
  .header-desktop nav div a:hover::after {
    width: 100%;
  }
  .header-desktop nav div a img {
    height: 64px;
    width: 64px;
  }
}
</style>../utils/MenuFunctions