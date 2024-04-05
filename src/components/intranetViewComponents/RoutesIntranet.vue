<template>
    <div class="navbar">
        <RouterLink class="router-link" to="/intranet/sesions">Sesiones</RouterLink>
        <RouterLink class="router-link" to="/intranet/plays">Obras</RouterLink>
        <RouterLink class="router-link" to="/intranet/buys">Compras</RouterLink>
        <RouterLink class="router-link" to="/intranet/users">Usuarios</RouterLink>
        <RouterLink class="router-link-salir" to="/">Salir</RouterLink>

    </div>
</template>

<script>
</script>

<style scoped>
.navbar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 30px;
    width: 200px;
    height: 100%;
}

.router-link {
    margin-top: 40px;
    margin-bottom: 40px;
    color: #3385D9;
    text-decoration: none;
    text-align: center;
}

.router-link-salir {
    margin-top: 40px;
    margin-bottom: 40px;
    color: red;
    text-decoration: none;
    text-align: center;
}
</style>