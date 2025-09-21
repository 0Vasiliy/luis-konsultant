<script setup>
defineProps(['style']);

const handleArrowClick = () => {
  // Анимация перехода на страницу биографий
  const arrow = document.querySelector('.gallery-arrow');
  const gallery = document.querySelector('.photo-gallery-content');
  
  if (arrow && gallery) {
    // Анимация клика
    arrow.style.transform = 'scale(0.8)';
    arrow.style.filter = 'brightness(0.8)';
    
    // Анимация исчезновения галереи
    gallery.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    gallery.style.transform = 'scale(0.8) rotate(5deg)';
    gallery.style.opacity = '0';
    
    setTimeout(() => {
      navigateTo('/biography');
    }, 300);
  } else {
    navigateTo('/biography');
  }
};
</script>

<template>
  <div class="photo-gallery-content">
    <div class="gallery-frame">
      <img
        class="gallery-photo"
        src="https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698397933/bcf6/07e5/b716/c645b1ef62514a75448dbafa601030f7.png" />      <img
        class="gallery-arrow"
        src="https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698403427/13af/5b46/c7e9/8053ba3eb14980be551dae8d6f4d59c3.png"
        @click="handleArrowClick"
        alt="Arrow back" />
    </div>
  </div>
</template>

<style scoped>
/* Photo Gallery Content */
.photo-gallery-content {
  position: relative;
  width: 37.33333333333333vw;
  height: 35.46666666666667vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 0;
  margin-left: 31.466666666666665vw;
  margin-top: 2.533333333333333vw;
  animation: slideInFromRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

/* Gallery Frame */
.gallery-frame {
  width: 9.066666666666666vw;
  height: 35.46666666666667vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.26666666666666666vw;
  padding-right: 0.26666666666666666vw;
  padding-bottom: 2.1333333333333333vw;
  padding-left: 0.26666666666666666vw;
  gap: 4.266666666666667vw;
  border-radius: 1.866666666666667vw 0 0 1.866666666666667vw;
  background-color: #f4f6f9;
  margin-top: 0;
  margin-left: auto;
  margin-right: 2vh;
}

/* Gallery Photo */
.gallery-photo {
  width: 8.533333333333333vw;
  height: 20.266666666666666vw;
  position: relative;
  flex-shrink: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}

/* Gallery Arrow */
.gallery-arrow {
  width: 3.2vw;
  height: 3.2vw;
  position: relative;
  flex-shrink: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  z-index: 10;
  animation: pulseGlow 2s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(20, 184, 166, 0.3));
}

.gallery-arrow:hover {
  transform: scale(1.2) rotate(10deg);
  filter: brightness(1.3) drop-shadow(0 0 15px rgba(20, 184, 166, 0.6));
  animation: none;
}

.gallery-arrow:active {
  transform: scale(0.9) rotate(5deg);
  filter: brightness(0.8);
}

@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 8px rgba(20, 184, 166, 0.3));
  }
  50% {
    transform: scale(1.1);
    filter: drop-shadow(0 0 12px rgba(20, 184, 166, 0.5));
  }
}
</style>
