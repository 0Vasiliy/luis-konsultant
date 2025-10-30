<template>
  <div class="cases-page">
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
      <h1 class="page-title">Наши кейсы</h1>
      <p class="page-subtitle">Реальные проекты и достигнутые результаты</p>
    </div>

    <div class="cases-container">
      <div class="cases-grid">
        <div 
          v-for="(caseItem, index) in cases" 
          :key="caseItem.id"
          class="case-card"
          :class="{ 'active': activeCase === index }"
          @click="setActiveCase(index)"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="case-image">
            <img 
              :src="caseItem.image" 
              :alt="caseItem.title"
              loading="lazy"
            />
            <div class="case-overlay">
              <div class="case-category">{{ caseItem.category }}</div>
              <div class="case-duration">{{ caseItem.duration }}</div>
            </div>
          </div>
          
          <div class="case-content">
            <h3 class="case-title">{{ caseItem.title }}</h3>
            <p class="case-description">{{ caseItem.description }}</p>
            
            <div class="case-challenge">
              <h4>Задача:</h4>
              <p>{{ caseItem.challenge }}</p>
            </div>
            
            <div class="case-solution">
              <h4>Решение:</h4>
              <ul>
                <li v-for="solution in caseItem.solution" :key="solution">
                  {{ solution }}
                </li>
              </ul>
            </div>
            
            <div class="case-results">
              <h4>Результаты:</h4>
              <div class="results-grid">
                <div 
                  v-for="result in caseItem.results" 
                  :key="result.metric"
                  class="result-item"
                >
                  <div class="result-value">{{ result.value }}</div>
                  <div class="result-metric">{{ result.metric }}</div>
                </div>
              </div>
            </div>
            
            <div class="case-tags">
              <span 
                v-for="tag in caseItem.tags" 
                :key="tag"
                class="case-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="navigation-dots">
        <button 
          v-for="(caseItem, index) in cases" 
          :key="index"
          class="nav-dot"
          :class="{ 'active': activeCase === index }"
          @click="setActiveCase(index)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

useHead({
  title: 'Кейсы - Luis Konsultant',
  meta: [
    { name: 'description', content: 'Реальные проекты и достигнутые результаты в области бизнес-аналитики, аутсорсинга, систематизации бизнеса и найма персонала' }
  ]
});

const activeCase = ref(0);

const cases = ref([
  {
    id: 1,
    title: 'Оптимизация бизнес-процессов в IT-компании',
    category: 'Бизнес-аналитика',
    duration: '3 месяца',
    image: '~/assets/images/cases/case-1.jpg',
    description: 'Комплексный анализ и оптимизация бизнес-процессов в быстрорастущей IT-компании с 200+ сотрудниками.',
    challenge: 'Компания столкнулась с проблемами масштабирования: снижение эффективности процессов, дублирование функций, отсутствие единой системы управления проектами.',
    solution: [
      'Проведен детальный анализ текущих бизнес-процессов',
      'Внедрена система управления проектами и задачами',
      'Оптимизированы процессы коммуникации между отделами',
      'Создана система KPI для отслеживания эффективности',
      'Проведено обучение сотрудников новым процессам'
    ],
    results: [
      { value: '+35%', metric: 'Рост эффективности' },
      { value: '-40%', metric: 'Снижение времени на задачи' },
      { value: '+25%', metric: 'Увеличение прибыли' },
      { value: '95%', metric: 'Удовлетворенность клиентов' }
    ],
    tags: ['Аналитика', 'Процессы', 'KPI', 'Автоматизация']
  },
  {
    id: 2,
    title: 'Аутсорсинг HR-функций для производственной компании',
    category: 'Аутсорсинг',
    duration: '6 месяцев',
    image: '/images/cases/case-2.jpg',
    description: 'Полный аутсорсинг HR-функций для производственной компании с 500+ сотрудниками.',
    challenge: 'Компания нуждалась в профессиональном управлении персоналом, но не имела ресурсов для создания собственного HR-отдела.',
    solution: [
      'Создана система управления персоналом',
      'Внедрены процессы найма и адаптации',
      'Разработана система мотивации и развития',
      'Настроена система документооборота',
      'Проведено обучение менеджеров'
    ],
    results: [
      { value: '-60%', metric: 'Снижение текучести кадров' },
      { value: '+45%', metric: 'Рост производительности' },
      { value: '85%', metric: 'Удовлетворенность сотрудников' },
      { value: '-30%', metric: 'Снижение HR-затрат' }
    ],
    tags: ['HR', 'Аутсорсинг', 'Персонал', 'Мотивация']
  },
  {
    id: 3,
    title: 'Систематизация бизнеса в сфере услуг',
    category: 'Систематизация бизнеса',
    duration: '4 месяца',
    image: '/images/cases/case-3.jpg',
    description: 'Комплексная систематизация бизнес-процессов в компании, предоставляющей консалтинговые услуги.',
    challenge: 'Компания работала в хаотичном режиме: отсутствовали стандарты, документооборот был неорганизован, клиенты получали разный уровень сервиса.',
    solution: [
      'Разработаны стандарты обслуживания клиентов',
      'Создана система документооборота',
      'Внедрена CRM-система',
      'Настроены процессы контроля качества',
      'Создана система обучения сотрудников'
    ],
    results: [
      { value: '+50%', metric: 'Рост клиентской базы' },
      { value: '+40%', metric: 'Увеличение выручки' },
      { value: '98%', metric: 'Качество сервиса' },
      { value: '+60%', metric: 'Скорость обработки заявок' }
    ],
    tags: ['Систематизация', 'CRM', 'Качество', 'Стандарты']
  },
  {
    id: 4,
    title: 'Найм ключевых специалистов для стартапа',
    category: 'Найм персонала',
    duration: '2 месяца',
    image: '/images/cases/case-4.jpg',
    description: 'Поиск и привлечение ключевых специалистов для технологического стартапа на ранней стадии развития.',
    challenge: 'Стартапу требовались опытные разработчики и менеджеры, но ограниченный бюджет и отсутствие репутации затрудняли поиск талантов.',
    solution: [
      'Разработана стратегия привлечения талантов',
      'Создан привлекательный employer brand',
      'Настроены каналы поиска кандидатов',
      'Проведен отбор и интервьюирование',
      'Организована адаптация новых сотрудников'
    ],
    results: [
      { value: '8', metric: 'Найденных специалистов' },
      { value: '90%', metric: 'Успешность найма' },
      { value: '2 недели', metric: 'Среднее время закрытия вакансии' },
      { value: '95%', metric: 'Удовлетворенность наймом' }
    ],
    tags: ['Найм', 'Стартап', 'IT', 'Таланты']
  }
]);

const setActiveCase = (index: number) => {
  activeCase.value = index;
};

const goBack = () => {
  const page = document.querySelector('.cases-page');
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
  const page = document.querySelector('.cases-page');
  if (page) {
    page.classList.add('entering');
  }
});
</script>

<style scoped>
.cases-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.cases-page.entering {
  opacity: 1;
  transform: translateY(0);
}

.cases-page.exiting {
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

.cases-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  position: relative;
  z-index: 10;
}

.cases-grid {
  display: grid;
  gap: 3rem;
  margin-bottom: 4rem;
}

.case-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(50px) scale(0.9);
  animation: cardEntrance 0.8s ease-out var(--delay) both;
}

.case-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.case-card.active {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2);
}

@keyframes cardEntrance {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.case-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  display: block;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
}

.case-card:hover .case-image img {
  transform: scale(1.1);
}

.case-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.8), rgba(13, 148, 136, 0.8));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  color: white;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.case-card:hover .case-overlay {
  opacity: 1;
}

.case-category {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  align-self: flex-start;
}

.case-duration {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  align-self: flex-end;
}

.case-content {
  padding: 2rem;
}

.case-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
}

.case-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.case-challenge,
.case-solution,
.case-results {
  margin-bottom: 2rem;
}

.case-challenge h4,
.case-solution h4,
.case-results h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.case-challenge h4::before,
.case-solution h4::before,
.case-results h4::before {
  content: '';
  width: 4px;
  height: 20px;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  margin-right: 0.5rem;
  border-radius: 2px;
}

.case-challenge p {
  color: #666;
  line-height: 1.6;
}

.case-solution ul {
  list-style: none;
  padding: 0;
}

.case-solution li {
  padding: 0.5rem 0;
  border-left: 3px solid #14b8a6;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
  position: relative;
}

.case-solution li::before {
  content: '✓';
  position: absolute;
  left: -1rem;
  top: 0.5rem;
  color: #14b8a6;
  font-weight: bold;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.result-item {
  text-align: center;
  padding: 1rem;
  background: rgba(20, 184, 166, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(20, 184, 166, 0.2);
}

.result-value {
  font-size: 2rem;
  font-weight: 700;
  color: #14b8a6;
  margin-bottom: 0.5rem;
}

.result-metric {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
}

.case-tag {
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.case-tag:hover {
  transform: translateY(-2px);
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
  
  .case-card {
    margin-bottom: 2rem;
  }
  
  .case-content {
    padding: 1.5rem;
  }
  
  .back-button {
    top: 1rem;
    left: 1rem;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .results-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
