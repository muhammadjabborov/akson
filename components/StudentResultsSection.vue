<template>
  <section
    id="results"
    class="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
  >
    <!-- Pattern -->
    <PatternDecorator
      color="yellow"
      position="absolute"
      size="large"
      animation="rotate"
      top="15%"
      right="-5%"
      :opacity="0.1"
      :z-index="0"
    />

    <div class="container relative z-10 px-4">
      <!-- Title -->
      <div class="text-center mb-10 sm:mb-12 md:mb-16">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
          style="color: #1946b9"
        >
          {{ $t("results.title") }}
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          style="color: #6b7280"
        >
          {{ $t("results.subtitle") }}
        </p>
      </div>

      <!-- Results Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div
          v-for="result in results"
          :key="result.id"
          class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row"
        >
          <!-- Left: Vertical Certificate -->
          <div
            class="w-full h-full sm:w-32 md:w-40 flex-shrink-0 bg-gradient-to-b from-[#1946b9] to-[#153d9e] flex flex-col items-center justify-center relative overflow-hidden"
          >
            <!-- Certificate Icon -->
            <div class="w-full h-full relative z-10 flex flex-col items-center">
              <img
                :src="result.cover"
                alt="Certificate"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Right: Student Information -->
          <div class="flex-1 p-5 sm:p-6 flex flex-col justify-center">
            <!-- Student Name & Initial -->
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-base sm:text-lg shadow-md"
                style="
                  background: linear-gradient(135deg, #1946b9 0%, #153d9e 100%);
                "
              >
                {{ result.initial }}
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-base sm:text-lg text-gray-900">
                  {{ result.name }}
                </h3>
              </div>
            </div>

            <!-- Achievement -->
            <p class="text-sm sm:text-base mb-3 leading-relaxed text-gray-600">
              {{ result.achievement }}
            </p>

            <!-- Score -->
            <div
              class="flex items-center gap-2 text-sm font-semibold text-[#1946b9]"
            >
              <Icon name="heroicons:star" class="w-4 h-4" />
              <span>{{ result.score }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const results = computed(() => [
  {
    id: 1,
    name: t("results.student1.name"),
    cover: "/results/1-cer.jpg",
    initial: "MO",
    achievement: t("results.student1.achievement"),
    score: t("results.student1.score"),
  },
  {
    id: 2,
    name: t("results.student2.name"),
    cover: "/results/2-cer.jpg",
    initial: "BM",
    achievement: t("results.student2.achievement"),
    score: t("results.student2.score"),
  },
  {
    id: 3,
    name: t("results.student3.name"),
    cover: "/results/3-cer.jpg",
    initial: "SB",
    achievement: t("results.student3.achievement"),
    score: t("results.student3.score"),
  },
  {
    id: 4,
    name: t("results.student4.name"),
    cover: "/results/4-cer.jpg",
    initial: "YI",
    achievement: t("results.student4.achievement"),
    score: t("results.student4.score"),
  },
  {
    id: 5,
    name: t("results.student5.name"),
    cover: "/results/5-cer.jpg",
    initial: "DE",
    achievement: t("results.student5.achievement"),
    score: t("results.student5.score"),
  },
  {
    id: 6,
    name: t("results.student6.name"),
    cover: "/results/6-cer.jpg",
    initial: "SS",
    achievement: t("results.student6.achievement"),
    score: t("results.student6.score"),
  },
]);
</script>
