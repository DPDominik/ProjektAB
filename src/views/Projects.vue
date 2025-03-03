<script setup>
import ProjectCard from '../components/ProjectCard.vue';

// Lista przykładowych projektów
const projects = [
  { title: 'Aplikacja do zarządzania zadaniami', author: 'Chuj1' },
  { title: 'System rezerwacji sali', author: 'Chuj2' },
  { title: 'Analiza danych pogodowych', author: 'Chuj3' }
];
</script>

<template>
  <div>
    <h1>Baza Projektów</h1>
    <div class="project-list">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
