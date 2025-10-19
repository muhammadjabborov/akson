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
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <div
          v-for="result in results"
          :key="result.id"
          class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
        >
          <!-- Certificate Header -->
          <div
            class="h-24 sm:h-28 md:h-32 flex items-center justify-center relative overflow-hidden"
            style="
              background: linear-gradient(135deg, #1946b9 0%, #153d9e 100%);
            "
          >
            <!-- Decorative Pattern -->
            <div class="absolute inset-0 opacity-10">
              <div
                class="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"
              ></div>
              <div
                class="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-4 border-white rounded-full translate-x-1/2 translate-y-1/2"
              ></div>
            </div>

            <!-- Trophy Icon -->
            <div class="relative z-10">
              <div
                class="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Icon
                  name="heroicons:trophy"
                  class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white"
                />
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5 sm:p-6">
            <!-- Student Info -->
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-base sm:text-lg"
                style="
                  background: linear-gradient(135deg, #1946b9 0%, #153d9e 100%);
                "
              >
                {{ result.initial }}
              </div>
              <div>
                <h3
                  class="font-bold text-base sm:text-lg"
                  style="color: #111827"
                >
                  {{ result.name }}
                </h3>
              </div>
            </div>

            <!-- Achievement -->
            <p
              class="text-xs sm:text-sm mb-4 leading-relaxed"
              style="color: #6b7280"
            >
              {{ result.achievement }}
            </p>
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
    initial: "KN",
    achievement: t("results.student1.achievement"),
    score: t("results.student1.score"),
    status: t("results.status.accepted"),
  },
  {
    id: 2,
    name: t("results.student2.name"),
    initial: "KB",
    achievement: t("results.student2.achievement"),
    score: t("results.student2.score"),
    status: t("results.status.accepted"),
  },
  {
    id: 3,
    name: t("results.student3.name"),
    initial: "SD",
    achievement: t("results.student3.achievement"),
    score: t("results.student3.score"),
    status: t("results.status.accepted"),
  },
  {
    id: 4,
    name: t("results.student4.name"),
    initial: "RY",
    achievement: t("results.student4.achievement"),
    score: t("results.student4.score"),
    status: t("results.status.accepted"),
  },
  {
    id: 5,
    name: t("results.student5.name"),
    initial: "XH",
    achievement: t("results.student5.achievement"),
    score: t("results.student5.score"),
    status: t("results.status.accepted"),
  },
  {
    id: 6,
    name: t("results.student6.name"),
    initial: "MA",
    achievement: t("results.student6.achievement"),
    score: t("results.student6.score"),
    status: t("results.status.accepted"),
  },
]);
</script>
