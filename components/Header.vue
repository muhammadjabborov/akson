<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div class="container py-4">
      <nav class="flex items-center justify-between">
        <!-- Left Side: Logo and Courses Button -->
        <div class="flex items-center space-x-6">
          <!-- Logo -->
          <div class="flex items-center">
            <img
              src="/akson-yellow-blue-logo.svg"
              alt="Akson Logo"
              class="h-12 w-auto"
            />
          </div>

          <!-- Our Courses Button -->
          <button
            @click="scrollToCourses"
            class="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg hover:opacity-80 transition-colors"
            style="background-color: #fed116; color: #1946b9"
          >
            <Icon name="heroicons:book-open" class="w-5 h-5" />
            <span class="font-semibold">{{ $t("nav.courses") }}</span>
          </button>
        </div>

        <!-- Right Side: Phone, Language Switcher, and Form Button -->
        <div class="flex items-center space-x-4">
          <!-- Phone -->
          <div class="hidden lg:flex items-center space-x-2">
            <Icon
              name="heroicons:phone"
              class="!w-6 !h-6"
              style="color: #1946b9"
            />
            <a
              href="tel:+998991861414"
              class="font-semibold hover:opacity-80 transition-colors"
              style="color: #1946b9"
            >
              +998 99 186 14 14
            </a>
          </div>

          <!-- Language Switcher -->
          <select
            v-model="currentLocale"
            @change="switchLanguage"
            class="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors"
            style="border-color: #1946b9; color: #1946b9"
          >
            <option value="uz">🇺🇿 UZ</option>
            <option value="ru">🇷🇺 RU</option>
          </select>

          <!-- Send Form Button -->
          <button
            @click="openConsultationModal"
            class="hidden md:block text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors font-semibold"
            style="background-color: #1946b9"
          >
            {{ $t("nav.consultation") }}
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2"
          >
            <Icon
              name="heroicons:bars-3"
              class="w-6 h-6"
              style="color: #1946b9"
            />
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t"
        style="border-color: #e5e7eb"
      >
        <div class="flex flex-col space-y-3 mt-4">
          <!-- Phone in Mobile -->
          <div class="flex items-center space-x-2">
            <Icon
              name="heroicons:phone"
              class="w-5 h-5"
              style="color: #1946b9"
            />
            <a
              href="tel:+998787777799"
              class="font-semibold"
              style="color: #1946b9"
            >
              +998 78 777 77 99
            </a>
          </div>

          <!-- Our Courses Button in Mobile -->
          <button
            @click="scrollToCourses"
            class="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg"
            style="background-color: #fed116; color: #1946b9"
          >
            <Icon name="heroicons:book-open" class="w-5 h-5" />
            <span class="font-semibold">{{ $t("nav.courses") }}</span>
          </button>

          <!-- Send Form Button in Mobile -->
          <button
            @click="openConsultationModal"
            class="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors w-full font-semibold"
            style="background-color: #1946b9"
          >
            {{ $t("nav.consultation") }}
          </button>
        </div>
      </div>
    </div>

    <!-- Consultation Modal -->
    <ConsultationModal
      :is-open="isModalOpen"
      @close="closeModal"
      @submit="handleConsultationSubmit"
    />
  </header>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();
const currentLocale = ref(locale.value);
const mobileMenuOpen = ref(false);
const isModalOpen = ref(false);

const switchLanguage = () => {
  setLocale(currentLocale.value);
};

const scrollToCourses = () => {
  const coursesSection = document.getElementById("courses");
  if (coursesSection) {
    coursesSection.scrollIntoView({ behavior: "smooth" });
  }
};

const openConsultationModal = () => {
  isModalOpen.value = true;
  mobileMenuOpen.value = false;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleConsultationSubmit = (data: {
  fullName: string;
  phone: string;
}) => {
  console.log("Consultation Form Data:", data);
  // Here you can add API call to send the data
  // Example: await $fetch('/api/consultation', { method: 'POST', body: data })
};
</script>
