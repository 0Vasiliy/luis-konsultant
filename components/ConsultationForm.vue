<template>
  <div class="consultation-form-overlay" :class="{ 'active': isVisible }" @click="closeForm">
    <div class="consultation-form-modal" @click.stop>
      <div class="form-header">
        <h2>Заказать консультацию</h2>
        <button class="close-btn" @click="closeForm">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      
      <form class="consultation-form" @submit.prevent="submitForm">
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
          <label for="company">Компания</label>
          <input 
            type="text" 
            id="company" 
            v-model="form.company" 
            placeholder="Название компании"
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
            <option value="consultation">Общая консультация</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="budget">Бюджет</label>
          <select id="budget" v-model="form.budget">
            <option value="">Выберите бюджет</option>
            <option value="under-100k">До 100 000 ₽</option>
            <option value="100k-300k">100 000 - 300 000 ₽</option>
            <option value="300k-500k">300 000 - 500 000 ₽</option>
            <option value="over-500k">Свыше 500 000 ₽</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="message">Сообщение *</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required 
            rows="4" 
            placeholder="Опишите ваш вопрос или задачу..."
          ></textarea>
        </div>
        
        <div class="form-group checkbox-group">
          <label class="checkbox-label">
            <input 
              type="checkbox" 
              v-model="form.agreement" 
              required
            >
            <span class="checkmark"></span>
            Я согласен на обработку персональных данных
          </label>
        </div>
        
        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Отправить заявку</span>
          <span v-else>Отправляем...</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

const props = defineProps<{
  isVisible: boolean;
  preselectedService?: string;
}>();

const emit = defineEmits<{
  close: [];
  submitted: [data: any];
}>();

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
  agreement: false
});

const isSubmitting = ref(false);

// Устанавливаем предвыбранную услугу
watch(() => props.preselectedService, (newService) => {
  if (newService) {
    form.value.service = newService;
  }
});

// Автоматическая прокрутка при открытии модального окна
watch(() => props.isVisible, (isVisible) => {
  if (isVisible) {
    nextTick(() => {
      const modal = document.querySelector('.consultation-form-modal');
      if (modal) {
        const modalTop = modal.getBoundingClientRect().top;
        const scrollY = window.scrollY;
        
        // Если модальное окно находится выше видимой области
        if (scrollY > 0) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Также устанавливаем фокус на первое поле
        const firstInput = modal.querySelector('input');
        if (firstInput) {
          setTimeout(() => {
            firstInput.focus();
          }, 300);
        }
      }
    });
  }
});

const submitForm = async () => {
  isSubmitting.value = true;
  
  // Имитация отправки формы
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Здесь будет реальная отправка на сервер
  console.log('Consultation form submitted:', form.value);
  
  // Эмитим событие об успешной отправке
  emit('submitted', form.value);
  
  // Сброс формы
  form.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    agreement: false
  };
  
  isSubmitting.value = false;
  
  // Закрываем форму
  closeForm();
  
  // Показываем уведомление об успешной отправке
  alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
};

const closeForm = () => {
  emit('close');
};
</script>

<style scoped>
.consultation-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
}

.consultation-form-overlay.active {
  opacity: 1;
  visibility: visible;
}

.consultation-form-modal {
  background: white;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transform: scale(0.8) translateY(50px);
  transition: all 0.3s ease;
  position: relative;
  margin: auto;
}

.consultation-form-overlay.active .consultation-form-modal {
  transform: scale(1) translateY(0);
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.form-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.close-btn {
  width: 40px;
  height: 40px;
  background: #f3f4f6;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.close-btn:hover {
  background: #e5e7eb;
  transform: scale(1.1);
}

.close-btn svg {
  width: 20px;
  height: 20px;
}

.consultation-form {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 500;
  color: #333;
  margin-bottom: 1rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #14b8a6;
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1.4;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  margin: 0;
  transform: scale(1.2);
}

.submit-btn {
  width: 100%;
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
  .consultation-form-overlay {
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
  }
  
  .consultation-form-modal {
    max-height: 95vh;
    max-width: 100%;
    margin: 0;
  }
  
  .form-header,
  .consultation-form {
    padding: 1.5rem;
  }
  
  .form-header h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .consultation-form-overlay {
    padding: 0.25rem;
    align-items: center;
    justify-content: center;
  }
  
  .consultation-form-modal {
    border-radius: 15px;
    max-height: 98vh;
  }
  
  .form-header,
  .consultation-form {
    padding: 1rem;
  }
  
  .form-header h2 {
    font-size: 1.2rem;
  }
}
</style>
