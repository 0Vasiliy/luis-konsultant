<template>
  <div class="biography-page">
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
      <h1 class="page-title">Наши эксперты</h1>
      <p class="page-subtitle">Познакомьтесь с командой профессионалов</p>
    </div>
    <div class="biography-container">
      <div 
        v-for="(consultant, index) in consultants" 
        :key="consultant.id"
        class="consultant-card"
        :class="{ 'active': activeCard === index }"
        @click="setActiveCard(index)"
        :style="{ '--delay': index * 0.2 + 's' }"
        :data-consultant-index="index"
      >
        <div class="consultant-photo">
          <img :src="consultant.photo" :alt="consultant.name" />
          <div class="photo-overlay">
            <div class="overlay-content">
              <h3>{{ consultant.name }}</h3>
              <p>{{ consultant.specialization }}</p>
            </div>
          </div>
        </div>
        <div class="consultant-biography">
          <div class="biography-content">
            <h2 class="consultant-name">{{ consultant.name }}</h2>
            <p class="consultant-role">{{ consultant.role }}</p>
            <p class="consultant-experience">{{ consultant.experience }}</p>
            
            <div class="biography-text">
              <p>{{ consultant.biography }}</p>
            </div>

            <div class="consultant-skills">
              <h4>Специализация:</h4>
              <div class="skills-list">
                <span 
                  v-for="skill in consultant.skills" 
                  :key="skill"
                  class="skill-tag"
                  tabindex="0"
                  :data-skill="skill"
                  :data-consultant-index="index"
                  @mouseenter="showTooltip($event, skill, index)"
                  @mouseleave="hideTooltip"
                  @click="showTooltip($event, skill, index)"
                  @focus="showTooltip($event, skill, index)"
                  @blur="hideTooltip"
                >
                  {{ skill }}
                </span>
              </div>
              <div 
                v-if="tooltipVisible && activeConsultantIndex === index"
                class="skill-tooltip"
                :class="{ 'tooltip-below': tooltipBelow }"
                :style="{
                  left: tooltipPosition.x + 'px',
                  top: tooltipPosition.y + 'px'
                }"
              >
                <div class="tooltip-content">
                  {{ tooltipContent }}
                </div>
                <div class="tooltip-arrow" :class="{ 'arrow-up': tooltipBelow }"></div>
              </div>
            </div>

            <div class="consultant-achievements">
              <h4>Достижения:</h4>
              <ul>
                <li v-for="achievement in consultant.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation-dots">
      <button 
        v-for="(consultant, index) in consultants" 
        :key="index"
        class="nav-dot"
        :class="{ 'active': activeCard === index }"
        @click="setActiveCard(index)"
      ></button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

useHead({
  title: 'Биографии экспертов - Luis Konsultant',
  meta: [
    { name: 'description', content: 'Познакомьтесь с нашими экспертами и их профессиональным опытом' }
  ]
});

const activeCard = ref(0);
const tooltip = ref<HTMLElement | null>(null);
const tooltipVisible = ref(false);
const tooltipContent = ref('');
const tooltipPosition = ref({ x: 0, y: 0 });
const tooltipBelow = ref(false);
const activeConsultantIndex = ref(0);
const activeSkill = ref('');

const skillDescriptions = {
  'Стратегическое планирование': 'Разработка долгосрочных стратегий развития компании, анализ рынка и конкурентов, определение целей и приоритетов для достижения устойчивого роста.',
  'Управление изменениями': 'Помощь организациям в адаптации к новым условиям, управление трансформационными процессами, минимизация сопротивления изменениям.',
  'Анализ рынка': 'Исследование рыночных тенденций, анализ конкурентной среды, выявление возможностей и угроз для бизнеса.',
  'Оптимизация процессов': 'Улучшение бизнес-процессов для повышения эффективности, снижения затрат и улучшения качества услуг.',
  'Цифровая трансформация': 'Внедрение современных технологий в бизнес-процессы, автоматизация операций, создание цифровых решений.',
  'Системная интеграция': 'Объединение различных IT-систем и приложений для создания единой информационной среды.',
  'Управление проектами': 'Планирование, координация и контроль выполнения проектов с использованием современных методологий.',
  'Аналитика данных': 'Сбор, обработка и анализ больших объемов данных для принятия обоснованных бизнес-решений.',
  'Управление талантами': 'Привлечение, развитие и удержание высококвалифицированных специалистов в организации.',
  'Корпоративная культура': 'Формирование ценностей, традиций и норм поведения, способствующих достижению целей компании.',
  'Обучение и развитие': 'Создание программ профессионального развития сотрудников, повышение их квалификации и компетенций.',
  'Мотивация персонала': 'Разработка систем стимулирования и мотивации сотрудников для повышения их вовлеченности и производительности.'
};

const consultants = ref([
  {
    id: 1,
    name: 'Александр Петров',
    role: 'Старший консультант по бизнес-стратегии',
    specialization: 'Бизнес-консультирование',
    experience: '15+ лет опыта',
    photo: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698404343/36a6/09f8/1612/666f26efefea89f249fca6a89aea5686.png',
    biography: 'Александр - признанный эксперт в области бизнес-стратегии с более чем 15-летним опытом работы с компаниями различных масштабов. Он специализируется на трансформации бизнес-процессов и помогает организациям достигать устойчивого роста.',
    skills: ['Стратегическое планирование', 'Управление изменениями', 'Анализ рынка', 'Оптимизация процессов'],
    achievements: [
      'Консультировал более 200 компаний',
      'Автор 5 книг по бизнес-стратегии',
      'Спикер международных конференций',
      'MBA от Harvard Business School'
    ]
  },
  {
    id: 2,
    name: 'Михаил Соколов',
    role: 'Эксперт по цифровой трансформации',
    specialization: 'IT-консультирование',
    experience: '12+ лет опыта',
    photo: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698403620/c82a/7f01/d21a/5094ce73392b9281bfcb58ad89e3cc08.png',
    biography: 'Михаил - ведущий специалист по цифровой трансформации, который помог множеству компаний внедрить современные технологии и оптимизировать их цифровые процессы. Его подход сочетает техническую экспертизу с глубоким пониманием бизнес-потребностей.',
    skills: ['Цифровая трансформация', 'Системная интеграция', 'Управление проектами', 'Аналитика данных'],
    achievements: [
      'Руководил 50+ IT-проектами',
      'Сертифицированный PMP',
      'Эксперт Microsoft и Google',
      'Автор патентов в области AI'
    ]
  },
  {
    id: 3,
    name: 'Дмитрий Волков',
    role: 'Консультант по управлению персоналом',
    specialization: 'HR-консультирование',
    experience: '10+ лет опыта',
    photo: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698402583/9ed8/9e16/9873/ef3dabacdd0846f204195e9094a4485f.png',
    biography: 'Дмитрий - опытный HR-консультант, специализирующийся на развитии корпоративной культуры и управлении талантами. Он помогает компаниям создавать эффективные команды и развивать лидерские качества у сотрудников.',
    skills: ['Управление талантами', 'Корпоративная культура', 'Обучение и развитие', 'Мотивация персонала'],
    achievements: [
      'Разработал HR-стратегии для 100+ компаний',
      'Сертифицированный коуч ICF',
      'Автор курсов по лидерству',
      'Эксперт в области психологии управления'
    ]
  }
]);

const setActiveCard = (index: number) => {
  activeCard.value = index;
  
  if (tooltipVisible.value) {
    updateTooltipPosition();
  }
};

const showTooltip = (event: MouseEvent, skill: string, consultantIndex: number) => {
  const description = skillDescriptions[skill as keyof typeof skillDescriptions];
  if (!description) return;

  activeConsultantIndex.value = consultantIndex;
  activeSkill.value = skill;

  const target = event.target as HTMLElement;
  const rect = target.getBoundingClientRect();
  const skillsContainer = target.closest('.consultant-skills') as HTMLElement;
  if (!skillsContainer) return;
  
  const containerRect = skillsContainer.getBoundingClientRect();
  let x = rect.left - containerRect.left + rect.width / 2;
  let y = rect.top - containerRect.top - 10;
  
  if (x < 150) {
    x = 150;
  }
  
  if (x > containerRect.width - 150) {
    x = containerRect.width - 150;
  }
  
  if (y < 50) {
    y = rect.top - containerRect.top + rect.height + 10; 
    tooltipBelow.value = true;
  } else {
    tooltipBelow.value = false;
  }
  
  tooltipContent.value = description;
  tooltipPosition.value = { x, y };
  tooltipVisible.value = true;
  event.stopPropagation();
};

const hideTooltip = () => {
  tooltipVisible.value = false;
};

const handleDocumentClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.skill-tag')) {
    hideTooltip();
  }
};

const updateTooltipPosition = () => {
  if (!tooltipVisible.value || !activeSkill.value) return;

  const skillTag = document.querySelector(`[data-skill="${activeSkill.value}"][data-consultant-index="${activeConsultantIndex.value}"]`) as HTMLElement;
  if (!skillTag) return;

  const rect = skillTag.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;
  const skillsContainer = skillTag.closest('.consultant-skills') as HTMLElement;
  if (!skillsContainer) return;
  
  const containerRect = skillsContainer.getBoundingClientRect();
  
  let x = rect.left - containerRect.left + rect.width / 2;
  let y = rect.top - containerRect.top - 10;
  
  if (x < 150) {
    x = 150;
  }
  
  if (x > containerRect.width - 150) {
    x = containerRect.width - 150;
  }
  
  if (y < 50) {
    y = rect.top - containerRect.top + rect.height + 10;
    tooltipBelow.value = true;
  } else {
    tooltipBelow.value = false;
  }
  
  tooltipPosition.value = { x, y };
};

let resizeTimeout: NodeJS.Timeout | null = null;
const handleResize = () => {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
  resizeTimeout = setTimeout(() => {
    updateTooltipPosition();
  }, 100);
};

const goBack = () => {
  const page = document.querySelector('.biography-page');
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
  const page = document.querySelector('.biography-page');
  if (page) {
    page.classList.add('entering');
  }
  
  document.addEventListener('click', handleDocumentClick);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {

  document.removeEventListener('click', handleDocumentClick);
  window.removeEventListener('resize', handleResize);
  
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
});
</script>

<style scoped>
.biography-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.biography-page.entering {
  opacity: 1;
  transform: translateY(0);
}

.biography-page.exiting {
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

.biography-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  position: relative;
  z-index: 10;
}

.consultant-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  margin-bottom: 3rem;
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

.consultant-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.consultant-card.active {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2);
}

@keyframes cardEntrance {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.consultant-photo {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.consultant-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.consultant-card:hover .consultant-photo img {
  transform: scale(1.1);
}

.photo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem;
  color: white;
  transform: translateY(100%);
  transition: transform 0.6s ease;
}

.consultant-card:hover .photo-overlay {
  transform: translateY(0);
}

.overlay-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.overlay-content p {
  font-size: 1rem;
  opacity: 0.9;
}

.consultant-biography {
  padding: 2rem;
}

.consultant-name {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

.consultant-role {
  font-size: 1.1rem;
  color: #14b8a6;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.consultant-experience {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.biography-text {
  margin-bottom: 2rem;
}

.biography-text p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.consultant-skills,
.consultant-achievements {
  margin-bottom: 1.5rem;
  position: relative;
}

.consultant-skills h4,
.consultant-achievements h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.3s ease;
  cursor: pointer;
  outline: none;
}

.skill-tag:hover {
  transform: translateY(-2px);
}

.skill-tag:focus {
  transform: translateY(-2px);
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.3);
}

.consultant-achievements ul {
  list-style: none;
  padding: 0;
}

.consultant-achievements li {
  padding: 0.5rem 0;
  border-left: 3px solid #14b8a6;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
  position: relative;
}

.consultant-achievements li::before {
  content: '✓';
  position: absolute;
  left: -1rem;
  top: 0.5rem;
  color: #14b8a6;
  font-weight: bold;
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

.skill-tooltip {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  transform: translate(-50%, -100%);
  animation: tooltipFadeIn 0.3s ease-out;
}

.skill-tooltip.tooltip-below {
  transform: translate(-50%, 0);
}

.tooltip-content {
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.4;
  max-width: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tooltip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid rgba(0, 0, 0, 0.9);
}

.tooltip-arrow.arrow-up {
  top: -8px;
  border-top: none;
  border-bottom: 8px solid rgba(0, 0, 0, 0.9);
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -100%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -100%) scale(1);
  }
}

.skill-tooltip.tooltip-below {
  animation: tooltipFadeInBelow 0.3s ease-out;
}

@keyframes tooltipFadeInBelow {
  from {
    opacity: 0;
    transform: translate(-50%, 0) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .consultant-card {
    margin-bottom: 2rem;
  }
  
  .consultant-biography {
    padding: 1.5rem;
  }
  
  .back-button {
    top: 1rem;
    left: 1rem;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }

  .tooltip-content {
    max-width: 250px;
    font-size: 13px;
    padding: 10px 14px;
  }
}
</style>
