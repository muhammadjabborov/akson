<template>
  <section
    class="py-20 relative overflow-hidden"
    style="background-color: #1946b9"
  >
    <!-- Decorative Elements -->
    <PatternDecorator
      color="white"
      position="absolute"
      size="medium"
      animation="rotate"
      top="5%"
      right="5%"
      :opacity="0.15"
      :z-index="0"
    />

    <div class="container relative z-10">
      <!-- Title and Subtitle -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
          {{ $t("goals.title") }}
        </h2>
        <p class="text-xl max-w-3xl mx-auto text-white/90">
          {{ $t("goals.subtitle") }}
        </p>
      </div>

      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div
          v-for="goal in goals"
          :key="goal.id"
          class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative p-6"
          style="background-color: #fed116"
        >
          <!-- Cover Image -->
          <div class="absolute -top-10 -right-10 w-[110px] h-[110px]">
            <img
              :src="goal.cover"
              :alt="goal.title"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold mb-3 pr-12" style="color: #111827">
            {{ goal.title }}
          </h3>
          <p class="text-sm text-[#1e1e1e]/60" style="color: #374151">
            {{ goal.description }}
          </p>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <button
          @click="openConsultationModal"
          class="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors shadow-lg"
        >
          {{ $t("goals.cta") }}
        </button>
      </div>
    </div>

    <!-- Consultation Modal -->
    <ConsultationModal
      :is-open="isModalOpen"
      @close="closeModal"
      @submit="handleConsultationSubmit"
    />
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const isModalOpen = ref(false);

const openConsultationModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleConsultationSubmit = (data: {
  fullName: string;
  phone: string;
}) => {
  console.log("Consultation Form Data from Goals:", data);
  // Here you can add API call to send the data
  // Example: await $fetch('/api/consultation', { method: 'POST', body: data })
};

const goals = computed(() => [
  {
    id: 1,
    cover: "/covers/7.webp",
    title: t("goals.goal1.title"),
    description: t("goals.goal1.description"),
  },
  {
    id: 2,
    cover: "/covers/8.webp",
    title: t("goals.goal2.title"),
    description: t("goals.goal2.description"),
  },
  {
    id: 3,
    cover: "/covers/9.webp",
    title: t("goals.goal3.title"),
    description: t("goals.goal3.description"),
  },
]);
</script>
