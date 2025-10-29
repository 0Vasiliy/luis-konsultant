<template>
  <div class="services-page">
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
      <h1 class="page-title">Наши услуги</h1>
      <p class="page-subtitle">Комплексные решения для развития вашего бизнеса</p>
    </div>

    <div class="services-container">
      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="service-card"
          :class="{ 'active': activeService === index }"
          @click="setActiveService(index)"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path v-if="service.id === 1" d="M3 3V21H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path v-if="service.id === 1" d="M9 9L12 6L16 10L21 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path v-if="service.id === 1" d="M21 3L16 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              
              <path v-if="service.id === 2" d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle v-if="service.id === 2" cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path v-if="service.id === 2" d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.6977C21.7033 16.0413 20.9999 15.5754 20.2 15.366" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path v-if="service.id === 2" d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              
              <rect v-if="service.id === 3" x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <line v-if="service.id === 3" x1="9" y1="9" x2="15" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <line v-if="service.id === 3" x1="9" y1="15" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <line v-if="service.id === 3" x1="9" y1="12" x2="15" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              
              <path v-if="service.id === 4" d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle v-if="service.id === 4" cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline v-if="service.id === 4" points="17,11 19,13 23,9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            
            <div class="service-features">
              <h4>Что включает:</h4>
              <ul>
                <li v-for="feature in service.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="service-benefits">
              <h4>Преимущества:</h4>
              <div class="benefits-grid">
                <div 
                  v-for="benefit in service.benefits" 
                  :key="benefit"
                  class="benefit-item"
                >
                  <div class="benefit-icon">✓</div>
                  <span>{{ benefit }}</span>
                </div>
              </div>
            </div>
            
            <div class="service-process">
              <h4>Процесс работы:</h4>
              <div class="process-steps">
                <div 
                  v-for="(step, stepIndex) in service.process" 
                  :key="stepIndex"
                  class="process-step"
                >
                  <div class="step-number">{{ stepIndex + 1 }}</div>
                  <div class="step-content">
                    <h5>{{ step.title }}</h5>
                    <p>{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="service-pricing">
              <div class="pricing-info">
                <span class="price-label">Стоимость:</span>
                <span class="price-value">{{ service.pricing }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="navigation-dots">
        <button 
          v-for="(service, index) in services" 
          :key="index"
          class="nav-dot"
          :class="{ 'active': activeService === index }"
          @click="setActiveService(index)"
        ></button>
      </div>
    </div>
    
    <!-- Одна кнопка консультации -->
    <button class="single-consultation-btn" @click="requestGeneralConsultation">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Заказать консультацию</span>
    </button>

    <!-- Форма консультации -->
    <ConsultationForm 
      :is-visible="showConsultationForm"
      :preselected-service="selectedService"
      @close="closeConsultationForm"
      @submitted="handleFormSubmitted"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ConsultationForm from '~/components/ConsultationForm.vue';

useHead({
  title: 'Услуги - Luis Konsultant',
  meta: [
    { name: 'description', content: 'Комплексные услуги по бизнес-аналитике, аутсорсингу, систематизации бизнеса и найму персонала' }
  ]
});

const activeService = ref(0);
const showConsultationForm = ref(false);
const selectedService = ref('');

const services = ref([
  {
    id: 1,
    title: 'Бизнес-аналитика',
    description: 'Комплексный анализ бизнес-процессов, выявление проблемных зон и разработка стратегий оптимизации для повышения эффективности компании.',
    features: [
      'Анализ текущих бизнес-процессов',
      'Выявление узких мест и проблемных зон',
      'Разработка KPI и системы мониторинга',
      'Создание отчетов и дашбордов',
      'Рекомендации по оптимизации'
    ],
    benefits: [
      'Повышение эффективности на 30-50%',
      'Снижение операционных затрат',
      'Улучшение качества процессов',
      'Быстрое принятие решений'
    ],
    process: [
      {
        title: 'Диагностика',
        description: 'Изучение текущего состояния бизнеса и процессов'
      },
      {
        title: 'Анализ',
        description: 'Выявление проблем и возможностей для улучшения'
      },
      {
        title: 'Планирование',
        description: 'Разработка стратегии оптимизации и плана действий'
      },
      {
        title: 'Внедрение',
        description: 'Реализация изменений и контроль результатов'
      }
    ],
    pricing: 'От 150 000 ₽'
  },
  {
    id: 2,
    title: 'Аутсорсинг',
    description: 'Полное или частичное ведение бизнес-процессов нашей командой экспертов. Освобождаем ваше время для развития ключевых направлений.',
    features: [
      'Ведение HR-процессов',
      'Управление финансами и отчетностью',
      'Маркетинг и продажи',
      'IT-поддержка и автоматизация',
      'Юридическое сопровождение'
    ],
    benefits: [
      'Экономия до 40% на операционных расходах',
      'Доступ к экспертизе высокого уровня',
      'Масштабируемость услуг',
      'Фокус на основном бизнесе'
    ],
    process: [
      {
        title: 'Аудит',
        description: 'Анализ процессов для передачи на аутсорсинг'
      },
      {
        title: 'Планирование',
        description: 'Разработка модели сотрудничества и SLA'
      },
      {
        title: 'Передача',
        description: 'Поэтапная передача процессов и обучение'
      },
      {
        title: 'Ведение',
        description: 'Ежедневное управление процессами и отчетность'
      }
    ],
    pricing: 'От 200 000 ₽/мес'
  },
  {
    id: 3,
    title: 'Систематизация бизнеса',
    description: 'Создание четкой структуры бизнес-процессов, стандартов работы и системы управления для стабильного роста и развития компании.',
    features: [
      'Создание организационной структуры',
      'Разработка стандартов и регламентов',
      'Настройка системы документооборота',
      'Внедрение CRM и ERP систем',
      'Обучение персонала'
    ],
    benefits: [
      'Повышение управляемости бизнеса',
      'Снижение зависимости от ключевых сотрудников',
      'Улучшение качества услуг',
      'Готовность к масштабированию'
    ],
    process: [
      {
        title: 'Анализ',
        description: 'Изучение текущей структуры и процессов'
      },
      {
        title: 'Проектирование',
        description: 'Создание новой структуры и стандартов'
      },
      {
        title: 'Внедрение',
        description: 'Поэтапная реализация изменений'
      },
      {
        title: 'Контроль',
        description: 'Мониторинг и корректировка процессов'
      }
    ],
    pricing: 'От 300 000 ₽'
  },
  {
    id: 4,
    title: 'Найм персонала',
    description: 'Профессиональный поиск и подбор квалифицированных специалистов для вашей компании. От анализа потребностей до адаптации новых сотрудников.',
    features: [
      'Анализ потребностей в персонале',
      'Поиск кандидатов по всем каналам',
      'Проведение интервью и оценка',
      'Проверка рекомендаций и бэкграунда',
      'Адаптация и введение в должность'
    ],
    benefits: [
      'Экономия времени на поиске',
      'Высокое качество кандидатов',
      'Снижение текучести кадров',
      'Быстрое закрытие вакансий'
    ],
    process: [
      {
        title: 'Брифинг',
        description: 'Определение требований к позиции и кандидату'
      },
      {
        title: 'Поиск',
        description: 'Активный поиск подходящих кандидатов'
      },
      {
        title: 'Отбор',
        description: 'Интервью, тестирование и оценка кандидатов'
      },
      {
        title: 'Адаптация',
        description: 'Введение в должность и контроль адаптации'
      }
    ],
    pricing: 'От 80 000 ₽'
  }
]);

const setActiveService = (index: number) => {
  activeService.value = index;
};

const requestConsultation = (service: any) => {
  selectedService.value = service.title.toLowerCase().replace(' ', '-');
  showConsultationForm.value = true;
};

const requestGeneralConsultation = () => {
  selectedService.value = '';
  showConsultationForm.value = true;
  // Scroll to top when modal opens if needed
  setTimeout(() => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 100);
};

const goBack = () => {
  const page = document.querySelector('.services-page');
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
  const page = document.querySelector('.services-page');
  if (page) {
    page.classList.add('entering');
  }
});

const closeConsultationForm = () => {
  showConsultationForm.value = false;
  selectedService.value = '';
};

const handleFormSubmitted = (data: any) => {
  console.log('Form submitted with data:', data);
  // Здесь можно добавить дополнительную логику после отправки формы
};
</script>

<style scoped>
.services-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.services-page.entering {
  opacity: 1;
  transform: translateY(0);
}

.services-page.exiting {
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

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  position: relative;
  z-index: 10;
}

.services-grid {
  display: grid;
  gap: 3rem;
  margin-bottom: 4rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(50px) scale(0.9);
  animation: cardEntrance 0.8s ease-out var(--delay) both;
}

.service-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.service-card.active {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2);
}

@keyframes cardEntrance {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.service-icon svg {
  width: 40px;
  height: 40px;
}

.service-content {
  text-align: center;
}

.service-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
}

.service-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.service-features,
.service-benefits,
.service-process {
  margin-bottom: 2rem;
  text-align: left;
}

.service-features h4,
.service-benefits h4,
.service-process h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.service-features h4::before,
.service-benefits h4::before,
.service-process h4::before {
  content: '';
  width: 4px;
  height: 20px;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  margin-right: 0.5rem;
  border-radius: 2px;
}

.service-features ul {
  list-style: none;
  padding: 0;
}

.service-features li {
  padding: 0.5rem 0;
  border-left: 3px solid #14b8a6;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
  position: relative;
}

.service-features li::before {
  content: '•';
  position: absolute;
  left: -1rem;
  top: 0.5rem;
  color: #14b8a6;
  font-weight: bold;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(20, 184, 166, 0.1);
  border-radius: 8px;
  border-left: 3px solid #14b8a6;
}

.benefit-icon {
  width: 20px;
  height: 20px;
  background: #14b8a6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.process-steps {
  display: grid;
  gap: 1rem;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(20, 184, 166, 0.05);
  border-radius: 10px;
  border-left: 4px solid #14b8a6;
}

.step-number {
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.service-pricing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(20, 184, 166, 0.1);
  border-radius: 15px;
  border: 1px solid rgba(20, 184, 166, 0.2);
}

.pricing-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.price-label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.price-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #14b8a6;
}

.consultation-btn {
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.consultation-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(20, 184, 166, 0.3);
}

.single-consultation-btn {
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 10px 40px rgba(20, 184, 166, 0.4);
  z-index: 100;
  animation: slideInUp 0.6s ease-out 1s both;
}

.single-consultation-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(20, 184, 166, 0.5);
}

.single-consultation-btn:active {
  transform: translateY(-2px);
}

.single-consultation-btn svg {
  width: 24px;
  height: 24px;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.navigation-dots {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 100;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-dot.active {
  background: white;
  transform: scale(1.2);
}

.nav-dot:hover {
  border-color: white;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .back-button {
    top: 1rem;
    left: 1rem;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .service-pricing {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .single-consultation-btn {
    right: 1rem;
    bottom: 4.5rem;
    padding: 1rem 1.5rem;
    font-size: 0.95rem;
  }
  
  .single-consultation-btn svg {
    width: 20px;
    height: 20px;
  }
}
</style>
