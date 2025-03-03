<template>
  <div>
    <h2>{{ project.title }}</h2>
    <p><strong>Autor:</strong> {{ project.author }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  color: #333;
}
</style>
