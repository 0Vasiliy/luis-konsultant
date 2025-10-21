<template>
  <div class="contacts-page">
    <div class="animated-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>

    <button class="back-button" @click="goBack">
      <div class="back-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span>Назад к консультации</span>
    </button>

    <div class="page-header">
      <h1 class="page-title">Контакты</h1>
      <p class="page-subtitle">Свяжитесь с нами для получения консультации</p>
    </div>

    <div class="contacts-container">
      <div class="contact-info-section">
        <div class="contact-card">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Адрес офиса</h3>
          <p>г. Москва, ул. Тверская, д. 15, офис 201</p>
          <p>БЦ "Тверской", 2 этаж</p>
        </div>

        <div class="contact-card">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06612 2.16708 8.43376 2.48353C8.80139 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Телефон</h3>
          <p>+7 (495) 123-45-67</p>
          <p>+7 (495) 765-43-21</p>
        </div>

        <div class="contact-card">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Email</h3>
          <p>info@luis-konsultant.ru</p>
          <p>consultation@luis-konsultant.ru</p>
        </div>

        <div class="contact-card">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Время работы</h3>
          <p>Пн-Пт: 9:00 - 18:00</p>
          <p>Сб-Вс: 10:00 - 16:00</p>
        </div>
      </div>

      <div class="map-section">
        <h2>Как нас найти</h2>
        <div class="map-container">
          <iframe
           src="https://yandex.ru/map-widget/v1/?um=mymaps%3AHWgd-G9GHLOD4Svwpib5R8yi6wDrHAuW&amp;source=constructor"
            width="100%"
            height="450"
            frameborder="0"
            title="Карта офиса Luis Konsultant"
            >
          </iframe>
        </div>
        <div class="map-info">
          <p><strong>Ближайшее метро:</strong> Тверская, Пушкинская (5 минут пешком)</p>
          <p><strong>Парковка:</strong> Подземная парковка БЦ "Тверской"</p>
          <p><strong>Вход:</strong> Главный вход, 2 этаж, офис 201</p>
        </div>
      </div>

      <div class="contact-form-section">
        <h2>Напишите нам</h2>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Имя *</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              placeholder="Ваше имя"
            >
          </div>
          
          <div class="form-group">
            <label for="email">Email *</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              placeholder="your@email.com"
            >
          </div>
          
          <div class="form-group">
            <label for="phone">Телефон</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              placeholder="+7 (___) ___-__-__"
            >
          </div>
          
          <div class="form-group">
            <label for="service">Интересующая услуга</label>
            <select id="service" v-model="form.service">
              <option value="">Выберите услугу</option>
              <option value="analytics">Бизнес-аналитика</option>
              <option value="outsourcing">Аутсорсинг</option>
              <option value="systematization">Систематизация бизнеса</option>
              <option value="recruitment">Найм персонала</option>
              <option value="consultation">Консультация</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="message">Сообщение *</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required 
              rows="5" 
              placeholder="Опишите ваш вопрос или задачу..."
            ></textarea>
          </div>
          
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Отправить сообщение</span>
            <span v-else>Отправляем...</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

useHead({
  title: 'Контакты - Luis Konsultant',
  meta: [
    { name: 'description', content: 'Свяжитесь с нами для получения консультации по бизнес-аналитике, аутсорсингу и систематизации бизнеса' }
  ]
});

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});

const isSubmitting = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  
  // Имитация отправки формы
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Здесь будет реальная отправка на сервер
  console.log('Form submitted:', form.value);
  
  // Сброс формы
  form.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };
  
  isSubmitting.value = false;
  
  // Показать уведомление об успешной отправке
  alert('Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
};

const goBack = () => {
  const page = document.querySelector('.contacts-page');
  if (page) {
    page.classList.add('exiting');
    setTimeout(() => {
      navigateTo('/');
    }, 500);
  } else {
    navigateTo('/');
  }
};

onMounted(() => {
  const page = document.querySelector('.contacts-page');
  if (page) {
    page.classList.add('entering');
  }
});
</script>

<style scoped>
.contacts-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.contacts-page.entering {
  opacity: 1;
  transform: translateY(0);
}

.contacts-page.exiting {
  opacity: 0;
  transform: translateY(-50px);
}

.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.floating-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  top: 80%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 30%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.back-button {
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 100;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  padding: 1rem 1.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: slideInLeft 0.8s ease-out 0.5s both;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.back-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.back-button:hover .back-icon {
  transform: translateX(-3px);
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.page-header {
  text-align: center;
  padding: 6rem 2rem 4rem;
  position: relative;
  z-index: 10;
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.page-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contacts-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  position: relative;
  z-index: 10;
}

.contact-info-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

.contact-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.contact-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.contact-icon svg {
  width: 30px;
  height: 30px;
}

.contact-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.contact-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.map-section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 4rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 0.8s ease-out 0.7s both;
}

.map-section h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.map-container {
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.map-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.map-info p {
  color: #666;
  line-height: 1.6;
  padding: 1rem;
  background: rgba(20, 184, 166, 0.1);
  border-radius: 10px;
  border-left: 4px solid #14b8a6;
}

.contact-form-section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 0.8s ease-out 0.9s both;
}

.contact-form-section h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-form {
  display: grid;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #14b8a6;
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
}

.submit-btn {
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(20, 184, 166, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .contact-info-section {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .contact-card {
    padding: 1.5rem;
  }
  
  .back-button {
    top: 1rem;
    left: 1rem;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .map-info {
    grid-template-columns: 1fr;
  }
}
</style>
