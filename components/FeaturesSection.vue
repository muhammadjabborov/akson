<template>
  <section
    id="features"
    class="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
  >
    <!-- Pattern -->
    <PatternDecorator
      color="yellow"
      position="absolute"
      size="large"
      animation="rotate"
      top="20%"
      right="-10%"
      :opacity="0.1"
      :z-index="0"
    />

    <div class="container relative z-10 px-4">
      <div class="text-center mb-10 sm:mb-12 md:mb-16">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4"
          style="color: #1946b9"
        >
          {{ $t("features.title") }}
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4"
          style="color: #6b7280"
        >
          {{ $t("features.subtitle") }}
        </p>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto"
      >
        <div
          v-for="feature in features"
          :key="feature.id"
          class="bg-[#eff6ff] rounded-2xl sm:rounded-3xl transition-shadow duration-300 p-6 sm:p-8"
        >
          <div class="relative flex items-start gap-4 sm:gap-6">
            <!-- Left Content -->
            <div class="flex-1 max-w-[400px]">
              <!-- Number Badge -->
              <div class="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                  style="background-color: #fed116"
                >
                  <span class="text-white font-bold text-xl sm:text-2xl">{{
                    feature.id
                  }}</span>
                </div>
              </div>

              <!-- Title and Description -->
              <h3
                class="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
                style="color: #111827"
              >
                {{ feature.title }}
              </h3>
              <p
                class="leading-relaxed text-sm sm:text-base"
                style="color: #6b7280"
              >
                {{ feature.description }}
              </p>
            </div>

            <!-- Right Icon/Illustration -->
            <div
              class="hidden sm:flex flex-shrink-0 absolute -right-10 -top-10"
            >
              <div
                class="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] flex items-center justify-center"
              >
                <img
                  :src="feature.icon"
                  alt="Feature Icon"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const features = computed(() => [
  {
    id: 1,
    icon: "/covers/1.webp",
    title: t("features.interactive.title"),
    description: t("features.interactive.description"),
  },
  {
    id: 2,
    icon: "/covers/2.webp",
    title: t("features.sat.title"),
    description: t("features.sat.description"),
  },
  {
    id: 3,
    icon: "/covers/3.webp",
    title: t("features.olympiads.title"),
    description: t("features.olympiads.description"),
  },
  {
    id: 4,
    icon: "/covers/4.webp",
    title: t("features.seminars.title"),
    description: t("features.seminars.description"),
  },
  {
    id: 5,
    icon: "/covers/5.webp",
    title: t("features.nutrition.title"),
    description: t("features.nutrition.description"),
  },
  {
    id: 6,
    icon: "/covers/6.webp",
    title: t("features.sports.title"),
    description: t("features.sports.description"),
  },
]);
</script>
