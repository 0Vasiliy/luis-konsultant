<template>
  <div class="min-h-screen bg-teal-gradient">
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-gray-800">
              Luis Konsultant
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">
              Назад на главную
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          О нас
        </h1>
        <p class="text-xl text-gray-600">
          Познакомьтесь с нашей командой и узнайте больше о наших услугах
        </p>
      </div>
      <div class="space-y-8">
        <div class="content-block">
          <h2>Консультация эксперта</h2>
          <p>
            Наши эксперты готовы предоставить вам профессиональную консультацию по любым вопросам. 
            Мы работаем с клиентами по всему миру и имеем многолетний опыт в различных областях.
          </p>
        </div>

        <div class="content-block">
          <h2>Наши услуги</h2>
          <p>
            Мы предлагаем широкий спектр консультационных услуг, включая бизнес-консультирование, 
            техническую поддержку, маркетинговые исследования и многое другое. Каждый проект 
            выполняется с максимальным вниманием к деталям.
          </p>
        </div>

        <div class="content-block">
          <h2>Почему выбирают нас</h2>
          <p>
            Наша команда состоит из высококвалифицированных специалистов с многолетним опытом работы. 
            Мы гарантируем качество, конфиденциальность и индивидуальный подход к каждому клиенту.
          </p>
        </div>

        <div class="content-block">
          <h2>Процесс работы</h2>
          <p>
            Наш процесс работы включает несколько этапов: первичная консультация, анализ ваших потребностей, 
            разработка индивидуального решения и его реализация. Мы всегда держим вас в курсе всех этапов работы.
          </p>
        </div>

        <div class="content-block">
          <h2>Отзывы клиентов</h2>
          <p>
            Более 1000 довольных клиентов по всему миру доверяют нам свои проекты. 
            Мы гордимся тем, что большинство наших клиентов возвращаются к нам снова и рекомендуют нас своим партнерам.
          </p>
        </div>

        <div class="content-block">
          <h2>Свяжитесь с нами</h2>
          <p>
            Готовы начать работу? Свяжитесь с нами любым удобным способом. 
            Мы ответим на все ваши вопросы и поможем выбрать оптимальное решение для ваших задач.
          </p>
        </div>

        <div class="content-block">
          <h2>Дополнительная информация</h2>
          <p>
            На нашем сайте вы можете найти подробную информацию о всех наших услугах, 
            ознакомиться с портфолио выполненных проектов и прочитать отзывы наших клиентов. 
            Мы постоянно обновляем информацию и добавляем новые материалы.
          </p>
        </div>

        <div class="content-block">
          <h2>Техническая поддержка</h2>
          <p>
            Наша служба технической поддержки работает 24/7 и готова помочь вам в любое время. 
            Мы используем современные технологии и инструменты для обеспечения максимального качества обслуживания.
          </p>
        </div>
      </div>
    </div>
    <AnimatedSticker />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Страница со стикером - Luis Konsultant',
  meta: [
    { name: 'description', content: 'Страница с анимированным стикером и контентом для демонстрации скролла' }
  ]
})
</script>

<style scoped>
.bg-teal-gradient {
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%);
}

.content-block {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.content-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.content-block h2 {
  color: #14b8a6;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.content-block p {
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
}

nav {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.text-center h1 {
  color: white;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.text-center p {
  color: rgba(255, 255, 255, 0.9);
}
</style>
