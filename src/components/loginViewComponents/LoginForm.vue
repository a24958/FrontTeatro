<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <section class="login-section">
        <h1>Login</h1>
        <form class="login-formulario">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required>

            <label for="contraseña">Contraseña</label>
            <input type="text" id="contraseña" name="contraseña" required>

            <button id="primary">
              <RouterLink to="/">Login</RouterLink>
            </button>
            <button id="secondary"><a href="/register">Register</a></button>
        </form>
    </section>
</template>

<style scoped>
.login-formulario #primary {
    padding: 8px;
    background-color: #3385D9;
    width: 350px;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: #3385D9;
    margin-top: 12px;
    margin-bottom: 48px;
}

.login-formulario #primary a {
  text-decoration: none;
  color: white;
}

.login-formulario #secondary {
  padding: 8px;
  width: 350px;
  background-color: white;
  color: #3385D9;
  font-size: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #3385D9;
  margin-top: 12px;
  margin-bottom: 48px;
}

.login-formulario #secondary a {
  text-decoration: none;
  color: #3385D9;
}

.login-formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 320px;
  border-color: #EBEBEB;
  border-style: solid;
  border-radius: 12px;
}
.login-formulario label, .login-formulario input {
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 280px;
}
.login-formulario input {
  border-radius: 8px;
  border-style: solid;
  border-color: #EBEBEB;
  padding: 8px;
}
.login-formulario input:focus {
  border: 1px solid #3385D9;
}
.login-formulario #primary {
  width: 300px;
  margin-top: 32px;
  margin-bottom: 24px;
}
.login-formulario #secondary {
  width: 300px;
  margin-top: 0px;
  margin-bottom: 24px;
}
.login-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 300px;
}
.login-section h1 {
  color: #3385D9;
  font-size: 48px;
}

@media screen and (min-width: 800px) {
  .login-section{
    margin-bottom: 325px;
  }
}
</style>