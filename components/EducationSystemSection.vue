<template>
  <section class="py-20 bg-white relative overflow-hidden">
    <!-- Pattern -->
    <PatternDecorator
      color="blue"
      position="absolute"
      size="large"
      animation="float"
      top="10%"
      left="-8%"
      :opacity="0.08"
      :z-index="0"
    />

    <div class="container relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: #1946b9">
          {{ $t("education.title") }}
        </h2>
        <p class="text-xl max-w-3xl mx-auto mb-8" style="color: #6b7280">
          {{ $t("education.subtitle") }}
        </p>
      </div>

      <!-- Goal -->
      <div
        class="rounded-3xl p-12 text-white text-center relative overflow-hidden"
        style="background: linear-gradient(135deg, #1946b9 0%, #153d9e 100%)"
      >
        <!-- Pattern in goal section -->
        <PatternDecorator
          color="white"
          position="absolute"
          size="medium"
          animation="rotate"
          top="15%"
          right="10%"
          :opacity="0.15"
          :z-index="0"
        />

        <div class="relative z-10">
          <h3 class="text-3xl md:text-4xl font-bold mb-6 text-white">
            {{ $t("education.goal.title") }}
          </h3>
          <p class="text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
            {{ $t("education.goal.description") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const principles = computed(() => [
  {
    id: 1,
    icon: "heroicons:x-circle",
    title: t("education.principles.noRanking.title"),
    description: t("education.principles.noRanking.description"),
  },
  {
    id: 2,
    icon: "heroicons:user",
    title: t("education.principles.individual.title"),
    description: t("education.principles.individual.description"),
  },
  {
    id: 3,
    icon: "heroicons:shield-check",
    title: t("education.principles.noFavoritism.title"),
    description: t("education.principles.noFavoritism.description"),
  },
]);
</script>
