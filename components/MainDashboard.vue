<script setup>
import ExpertConsultation from './ExpertConsultation.vue';
import PhotoGallery from './PhotoGallery.vue';
defineProps(['style']);
</script>

<template>
  <div class="main-dashboard">
    <ExpertConsultation class="expert-consultation-container" />
    <PhotoGallery class="photo-gallery-container" />
  </div>
</template>

<style scoped>
/* Main Dashboard */
.main-dashboard {
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 1.3333333333333335vw;
  border-width: 0.26666666666666666vw;
  border-style: solid;
  border-color: #9747ff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  isolation: isolate;
  min-height: 100%;
}

/* Expert Consultation Container */
.expert-consultation-container {
  position: relative;
  margin-left: 2.533333333333333vw;
  margin-top: 2.533333333333333vw;
}

/* Photo Gallery Container */
.photo-gallery-container {
  position: relative;
  width: 37.33333333333333vw;
  height: 35.46666666666667vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 0;
  margin-left: 31.466666666666665vw;
  margin-top: 2.533333333333333vw;
}
</style>
