import { defineStore } from "pinia";
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';


export const menuFunctionsStore = defineStore('menuFunctions', () => {
    function toggleMenu(): void {
        const navList = document.querySelector('.nav-list') as HTMLElement;
        navList.classList.toggle('show');

        const location = window.location.href;

        const slider = document.querySelector('.slider-section') as HTMLElement;
        const alquiler = document.querySelector('.alquilar-section') as HTMLElement;
        const contacto = document.querySelector('.contacto-section') as HTMLElement;
        // const obras = document.querySelector('.obras-section') as HTMLElement;
        const login = document.querySelector('.login-section') as HTMLElement;
        // const asientos = document.querySelector('.asientos-section') as HTMLElement;
        // const carrito = document.querySelector('.carrito-h1') as HTMLElement;

        if (navList.classList.contains('show')) {
            if (location.includes('/rent')) {
                alquiler.style.marginTop = '220px';
            } else if (location.includes('/contact')) {
                contacto.style.marginTop = '220px';
            /*} else if (location.includes('-')) {
                asientos.style.marginTop = '220px';
            } else if (location.includes('/obras')) {
                obras.style.marginTop = '220px';*/
            } else if (location.includes('/login') || location.includes('/register')) {
                login.style.marginTop = '220px';
            } /*else if (location.includes('/carrito')) {
                carrito.style.marginTop = '220px';
            } */else {
                slider.style.marginTop = '220px';
            }
        } else {
            if (location.includes('/rent')) {
                alquiler.style.marginTop = '0px';
            } else if (location.includes('/contact')) {
                contacto.style.marginTop = '0px';
            /*} else if (location.includes('-')) {
                asientos.style.marginTop = '0px';
            } else if (location.includes('/obras')) {
                obras.style.marginTop = '0px';*/
            } else if (location.includes('/login') || location.includes('/register')) {
                login.style.marginTop = '0px';
            } /*else if (location.includes('/carrito')) {
                carrito.style.marginTop = '0px';
            } */else {
                slider.style.marginTop = '0px';
            }
        }
    };

    function toggleDropdown(): void {
        const dropdown = document.querySelector('.dropdown') as HTMLElement;
        const icon = document.querySelector('.material-symbols-outlined') as HTMLElement;
        const iconText = icon.innerText || icon.textContent as String;

        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        const nuevoIcon = iconText.trim() === 'expand_more' ? 'expand_less' : 'expand_more';
        icon.innerHTML = nuevoIcon;

        const location = window.location.href;

        const slider = document.querySelector('.slider-section') as HTMLElement;
        const alquiler = document.querySelector('.alquilar-section') as HTMLElement;
        const contacto = document.querySelector('.contacto-section') as HTMLElement;
        // const obras = document.querySelector('.obras-section') as HTMLElement;
        const login = document.querySelector('.login-section') as HTMLElement;
        // const asientos = document.querySelector('.asientos-section') as HTMLElement;
        // const carrito = document.querySelector('.carrito-h1') as HTMLElement;

        if (dropdown.style.display === 'block') {
            if (location.includes('/rent')) {
                alquiler.style.marginTop = '350px';
            } else if (location.includes('/contact')) {
                contacto.style.marginTop = '350px';
            /*} else if (location.includes('-')) {
                asientos.style.marginTop = '350px';
            } else if (location.includes('/obras')) {
                obras.style.marginTop = '350px';*/
            } else if (location.includes('/login') || location.includes('/register')) {
                login.style.marginTop = '350px';
            } /*else if (location.includes('/carrito')) {
                carrito.style.marginTop = '350px';
            }*/ else {
                slider.style.marginTop = '350px';
            }
        } else {
            if (location.includes('/rent')) {
                alquiler.style.marginTop = '220px';
            } else if (location.includes('/contact')) {
                contacto.style.marginTop = '220px';
            /*} else if (location.includes('-')) {
                asientos.style.marginTop = '220px';
            } else if (location.includes('/obras')) {
                obras.style.marginTop = '220px';*/
            } else if (location.includes('/login') || location.includes('/register')) {
                login.style.marginTop = '220px';
            } /*else if (location.includes('/carrito')) {
                carrito.style.marginTop = '220px';
            } */else {
                slider.style.marginTop = '220px';
            }
        }
    };

    function showHideNavBar() {
        var route = useRoute();
        const showHeader = ref(route.meta.showHeader !== false);


        watch(
            () => route.meta.showHeader,
            (newVal) => {
                showHeader.value = newVal !== false;
            }
        );

        return {
            showHeader,
        };
    }

    return { toggleMenu, toggleDropdown, showHideNavBar }
})