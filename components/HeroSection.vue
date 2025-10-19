<template>
  <section
    class="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden"
  >
    <!-- Background Patterns -->
    <PatternDecorator
      color="yellow"
      position="absolute"
      size="large"
      animation="float"
      top="15%"
      left="-8%"
      :opacity="0.15"
      :z-index="0"
    />
    <PatternDecorator
      color="blue"
      position="absolute"
      size="large"
      animation="rotate"
      bottom="10%"
      right="-8%"
      :opacity="0.12"
      :z-index="0"
    />

    <div class="container py-16 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center md:text-left">
          <h1
            class="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style="color: #1946b9"
          >
            {{ $t("hero.title") }}
          </h1>
          <p class="text-xl mb-8" style="color: #4b5563">
            {{ $t("hero.subtitle") }}
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button
              @click="openConsultationModal"
              class="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors shadow-lg"
              style="background-color: #1946b9"
            >
              {{ $t("hero.cta") }}
            </button>
          </div>
        </div>

        <!-- Right Content - Illustration Placeholder -->
        <div class="flex items-center justify-center relative">
          <div
            class="w-full h-96 rounded-3xl flex items-center justify-center shadow-2xl relative z-10"
            style="
              background: linear-gradient(135deg, #1946b9 0%, #153d9e 100%);
            "
          >
            <div class="text-center p-8">
              <Icon
                name="heroicons:academic-cap"
                class="w-32 h-32 text-white opacity-50 mx-auto mb-4"
              />
              <p class="text-white text-lg font-semibold">
                Illustration Placeholder
              </p>
              <p class="text-white/80 text-sm mt-2">
                Will be replaced with actual illustration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
    >
      <Icon
        name="heroicons:chevron-down"
        class="w-8 h-8"
        style="color: #1946b9"
      />
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
  console.log("Consultation Form Data from Hero:", data);
  // Here you can add API call to send the data
  // Example: await $fetch('/api/consultation', { method: 'POST', body: data })
};
</script>
