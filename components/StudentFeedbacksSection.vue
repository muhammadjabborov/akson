<template>
  <section class="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
    <!-- Pattern -->
    <PatternDecorator
      color="blue"
      position="absolute"
      size="large"
      animation="float"
      top="10%"
      left="-5%"
      :opacity="0.08"
      :z-index="0"
    />

    <div class="container relative z-10 px-4">
      <!-- Title -->
      <div class="text-center mb-10 sm:mb-12 md:mb-16">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
          style="color: #1946b9"
        >
          {{ $t("feedbacks.title") }}
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          style="color: #6b7280"
        >
          {{ $t("feedbacks.subtitle") }}
        </p>
      </div>

      <!-- Videos Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <div
          v-for="video in videos"
          :key="video.id"
          class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <!-- Video Container -->
          <div class="relative w-full aspect-video md:h-[360px] bg-gray-900">
            <iframe
              :id="`youtube-iframe-${video.id}`"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen
              allow="clipboard-write; autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              class="t-iframe loaded"
              :data-original="`https://www.youtube.com/embed/${video.videoId}?&enablejsapi=1`"
              :src="`https://www.youtube.com/embed/${video.videoId}?&enablejsapi=1`"
            ></iframe>
          </div>

          <!-- Video Info -->
          <div class="p-5 sm:p-6">
            <h3
              class="font-bold text-base sm:text-lg mb-2"
              style="color: #111827"
            >
              {{ video.title }}
            </h3>
            <p class="text-xs sm:text-sm" style="color: #6b7280">
              {{ video.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const videos = computed(() => [
  {
    id: 1,
    videoId: "Bzfn-a0rSqI",
    title: t("feedbacks.video1.title"),
    description: t("feedbacks.video1.description"),
  },
  {
    id: 2,
    videoId: "Bzfn-a0rSqI",
    title: t("feedbacks.video2.title"),
    description: t("feedbacks.video2.description"),
  },
  {
    id: 3,
    videoId: "Bzfn-a0rSqI",
    title: t("feedbacks.video3.title"),
    description: t("feedbacks.video3.description"),
  },
]);
</script>
