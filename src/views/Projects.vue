<script setup>
import { ref, computed } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

// Lista przykładowych projektów
const projects = ref([
  { title: 'Aplikacja do zarządzania zadaniami', author: 'Jan Paweł' },
  { title: 'System rezerwacji sali', author: 'Jan Kowalski' },
  { title: 'Analiza danych pogodowych', author: 'Kamil Nowak' }
]);

const searchQuery = ref('');
const selectedProject = ref(null);

// Filtrowanie projektów na podstawie wpisanej frazy
const filteredProjects = computed(() => {
  return projects.value.filter(project =>
    project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    project.author.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Wybór projektu do podglądu
const selectProject = (project) => {
  selectedProject.value = project;
};
</script>

<template>
  <div class="container">
    <!-- Lewy panel: wyszukiwanie i lista projektów -->
    <aside class="sidebar">
      <input v-model="searchQuery" placeholder="Szukaj projektu..." class="search-input" />
      <ul class="project-list">
        <li v-for="(project, index) in filteredProjects" :key="index" @click="selectProject(project)" class="project-item">
          {{ project.title }} - {{ project.author }}
        </li>
      </ul>
    </aside>

    <!-- Prawy panel: szczegóły projektu -->
    <main class="main-content">
      <h1>Baza Projektów</h1>
      <ProjectCard v-if="selectedProject" :project="selectedProject" />
      <p v-else>Wybierz projekt z listy, aby zobaczyć szczegóły.</p>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
}

.sidebar {
  width: 30%;
  padding: 1rem;
  background: #f4f4f4;
}

.search-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.project-list {
  list-style: none;
  padding: 0;
}

.project-item {
  padding: 0.5rem;
  cursor: pointer;
  background: white;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
}

.project-item:hover {
  background: #ddd;
}

.main-content {
  width: 70%;
  padding: 1rem;
}
</style>
