<template>
  <section class="py-12 sm:py-16 md:py-20 bg-white">
    <div class="container px-4">
      <div class="text-center mb-10 sm:mb-12 md:mb-16">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
          style="color: #1946b9"
        >
          {{ $t("testimonials.title") }}
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          style="color: #6b7280"
        >
          {{ $t("testimonials.subtitle") }}
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2"
          style="border-color: #fed116"
        >
          <div class="flex items-center mb-3 sm:mb-4">
            <div class="flex" style="color: #fed116">
              <Icon
                v-for="i in 5"
                :key="i"
                name="heroicons:star-solid"
                class="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
          </div>
          <p
            class="mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base"
            style="color: #374151"
          >
            "{{ testimonial.text }}"
          </p>
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style="
                background: linear-gradient(135deg, #1946b9 0%, #153d9e 100%);
              "
            >
              <span class="text-white font-bold text-sm sm:text-base">{{
                testimonial.initial
              }}</span>
            </div>
            <div>
              <h4 class="font-bold text-sm sm:text-base" style="color: #111827">
                {{ testimonial.name }}
              </h4>
              <p class="text-xs sm:text-sm" style="color: #6b7280">
                {{ testimonial.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const testimonials = computed(() => [
  {
    id: 1,
    name: t("testimonials.testimonial1.name"),
    role: t("testimonials.testimonial1.role"),
    initial: "AN",
    text: t("testimonials.testimonial1.text"),
  },
  {
    id: 2,
    name: t("testimonials.testimonial2.name"),
    role: t("testimonials.testimonial2.role"),
    initial: "SD",
    text: t("testimonials.testimonial2.text"),
  },
  {
    id: 3,
    name: t("testimonials.testimonial3.name"),
    role: t("testimonials.testimonial3.role"),
    initial: "MK",
    text: t("testimonials.testimonial3.text"),
  },
]);
</script>
