<template>
  <nav>
    <ul>
      <li><router-link to="/">Strona Główna</router-link></li>
      <li><router-link to="/projects">Baza Projektów</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: #333;
  padding: 1rem;
}
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 0;
}
li {
  display: inline;
}
a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}
</style>
