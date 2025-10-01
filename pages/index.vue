<template>
  <div class="main-container">
    <MainDashboard class="main-dashboard" />
  </div>
</template>

<script setup lang="ts">
import MainDashboard from '~/components/MainDashboard.vue';

useHead({
  title: 'Главная страница - Luis Konsultant',
  meta: [
    { name: 'description', content: 'Главная страница приложения с анимированным стикером' }
  ]
})
</script>

<style>
* {
  box-sizing: border-box;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.justify-start {
  display: flex;
  justify-content: flex-start;
}
.justify-center {
  display: flex;
  justify-content: center;
}
.justify-end {
  display: flex;
  justify-content: flex-end;
}
.justify-between {
  display: flex;
  justify-content: space-between;
}
.items-start {
  display: flex;
  align-items: flex-start;
}
.items-end {
  display: flex;
  align-items: flex-end;
}
.items-center {
  display: flex;
  align-items: center;
}
.no-shrink {
  flex-shrink: 0;
}

.main-container {
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.main-dashboard {
  width: 100%;
  height: 100%;
}
</style>
