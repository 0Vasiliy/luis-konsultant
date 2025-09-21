<script setup>
defineProps(['style']);

const handleClick = () => {
  // Переход на страницу стикера
  navigateTo('/sticker');
};
</script>

<template>
  <div class="consultation-button" @click="handleClick">
    <span class="button-text"> Получить консультацию </span>
  </div>
</template>

<style scoped>
/* Consultation Button */
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
  box-shadow: 0px 2px 10px 0px rgba(115, 115, 115, 0.1);
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

.consultation-button:hover {
  transform: translateY(-1px);
  box-shadow: 0px 3px 12px 0px rgba(115, 115, 115, 0.15);
}

.consultation-button:active {
  transform: translateY(0);
  box-shadow: 0px 1px 8px 0px rgba(115, 115, 115, 0.1);
}

/* Button Text */
.button-text {
  flex-shrink: 0;
}
</style>
