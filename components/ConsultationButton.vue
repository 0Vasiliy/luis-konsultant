<script setup lang="ts">
import { ref } from 'vue';
import ConsultationForm from './ConsultationForm.vue';

defineProps(['style']);

const showConsultationForm = ref(false);

const handleClick = () => {
  showConsultationForm.value = true;
};

const closeConsultationForm = () => {
  showConsultationForm.value = false;
};

const handleFormSubmitted = (data: any) => {
  console.log('Form submitted with data:', data);
};
</script>

<template>
  <div>
    <div class="consultation-button" @click="handleClick">
      <span class="button-text"> Заказать консультацию </span>
    </div>
    
    <!-- Форма консультации -->
    <ConsultationForm 
      :is-visible="showConsultationForm"
      @close="closeConsultationForm"
      @submitted="handleFormSubmitted"
    />
  </div>
</template>

<style scoped>
.consultation-button {
  height: 6.666666666666667vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.666666666666667vw;
  padding-right: 3.2vw;
  padding-bottom: 2.666666666666667vw;
  padding-left: 3.2vw;
  gap: 1.0666666666666667vw;
  flex-shrink: 0;
  border-radius: 0.8vw;
  background-color: var(--Light-Theme-Primary-White, #ffffff);
  /* box-shadow: 0px 2px 10px 0px rgba(115, 115, 115, 0.1); */
  font-size: 2.1333333333333333vw;
  font-family: 'Exo 2';
  font-weight: 500;
  line-height: 8px;
  color: var(--Light-Theme-Primary-Cray-1, #333333);
  white-space: pre;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-text {
  flex-shrink: 0;
}
</style>
