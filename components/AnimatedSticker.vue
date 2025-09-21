<template>
  <div 
    class="sticker"
    :class="{ expanded: isExpanded }"
    @mouseenter="expandSticker"
    @mouseleave="collapseSticker"
  >
    <!-- Триггер стикера -->
    <div class="sticker-trigger">
      <div class="arrow" :class="{ rotated: isExpanded }">
        {{ isExpanded ? '→' : '←' }}
      </div>
    </div>

    <!-- Контент стикера -->
    <div 
      class="sticker-content"
      :class="{ visible: isExpanded }"
    >
      <h3 class="sticker-title">Наши эксперты</h3>
      <div class="sticker-images">
        <img 
          v-for="(image, index) in images" 
          :key="index"
          :src="image" 
          :alt="`Эксперт ${index + 1}`"
          class="sticker-image"
        />
      </div>
      <button class="biography-button" @click="goToBiography">
        Перейти к биографиям
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Состояние стикера
const isExpanded = ref(false)
const images = ref<string[]>([])
const isLoading = ref(false)

// Фотографии экспертов из biography
const expertImages = [
  'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698404343/36a6/09f8/1612/666f26efefea89f249fca6a89aea5686.png',
  'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698403620/c82a/7f01/d21a/5094ce73392b9281bfcb58ad89e3cc08.png',
  'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698402583/9ed8/9e16/9873/ef3dabacdd0846f204195e9094a4485f.png'
]

// Функция для загрузки изображений экспертов
const loadExpertImages = (): void => {
  images.value = expertImages
}

// Функции для управления стикером
const expandSticker = (): void => {
  isExpanded.value = true
}

const collapseSticker = (): void => {
  isExpanded.value = false
}

// Функция для перехода на страницу biography
const goToBiography = (): void => {
  navigateTo('/biography')
}

// Загружаем изображения при монтировании компонента
onMounted(() => {
  loadExpertImages()
})
</script>

<style scoped>
.sticker {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticker.expanded {
  right: 0;
  transform: translateY(-50%) scale(1.05);
}

.sticker-trigger {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.sticker-trigger:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
}

.arrow {
  color: white;
  font-size: 20px;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.arrow.rotated {
  transform: rotate(180deg);
}

.sticker-content {
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticker-content.visible {
  opacity: 1;
  visibility: visible;
  animation: slideIn 0.3s ease-out;
}

.sticker-title {
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 15px;
  text-align: center;
}

.sticker-images {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sticker-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e5e7eb;
  transition: all 0.3s ease;
  cursor: pointer;
}

.sticker-image:hover {
  transform: scale(1.1);
  border-color: #14b8a6;
  box-shadow: 0 4px 15px rgba(20, 184, 166, 0.3);
}

.biography-button {
  width: 100%;
  margin-top: 15px;
  padding: 10px 15px;
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(20, 184, 166, 0.3);
}

.biography-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(20, 184, 166, 0.4);
  background: linear-gradient(135deg, #0d9488 0%, #0f766e 50%, #115e59 100%);
}

@keyframes slideIn {
  from {
    transform: translateY(-50%) translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateY(-50%) translateX(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .sticker {
    right: 10px;
  }
  
  .sticker-content {
    right: 80px;
    min-width: 180px;
  }
}
</style>
