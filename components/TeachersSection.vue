<template>
  <section id="teachers" class="py-12 sm:py-16 md:py-20 bg-white">
    <div class="">
      <div class="container text-center mb-10 sm:mb-12 md:mb-16 px-4">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
          style="color: #1946b9"
        >
          {{ $t("teachers.title") }}
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          style="color: #6b7280"
        >
          {{ $t("teachers.subtitle") }}
        </p>
      </div>

      <div
        class="relative w-full flex justify-between items-center mt-8 sm:mt-10 md:mt-11 overflow-hidden"
      >
        <div class="relative container">
          <div
            class="overflow-hidden px-4 sm:px-8 md:px-[150px] !pb-[40px] sm:!pb-[50px] md:!pb-[60px] -mx-4 sm:-mx-8 md:-mx-[150px] md:py-5 md:-my-5 relative z-0"
          >
            <ClientOnly>
              <Swiper
                v-bind="settings"
                class="top-business-swiper w-full !overflow-visible"
              >
                <SwiperSlide v-for="(teacher, idx) of teachers" :key="idx">
                  <div
                    class="flex flex-col relative course-element h-max w-full rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 duration-200 shadow-xl bg-white"
                  >
                    <!-- Teacher Image -->
                    <div
                      class="relative h-[200px] sm:h-[240px] md:h-[260px] overflow-hidden"
                    >
                      <img
                        :src="teacher.image"
                        :alt="teacher.name"
                        class="w-full h-full object-cover"
                      />
                    </div>

                    <!-- Teacher Info (White Section) -->
                    <div
                      class="h-[35%] bg-white p-4 sm:p-5 md:p-6 flex flex-col justify-center"
                    >
                      <h3
                        class="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2"
                        style="color: #111827"
                      >
                        {{ teacher.name }}
                      </h3>
                      <p
                        class="text-xs sm:text-sm font-medium"
                        style="color: #6b7280"
                      >
                        {{ teacher.position }}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
          </div>
          <div
            class="swiper-overlay-left absolute -left-[180px] -top-0 rotate-180 w-[228px] h-full z-10 pointer-events-none"
          />
          <div
            class="swiper-overlay-right absolute -right-[180px] -top-0 w-[228px] h-full z-[1] pointer-events-none"
          />
          <button
            class="lg:flex hidden sw-button sw-prev-el absolute -left-[20px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[var(--brand-yellow)] items-center justify-center"
          >
            <Icon
              name="heroicons:chevron-left"
              class="!w-5 !h-5 text-[var(--brand-blue)]"
            />
          </button>
          <button
            class="lg:flex hidden sw-button sw-next-el absolute -right-[20px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[var(--brand-yellow)] items-center justify-center"
          >
            <Icon
              name="heroicons:chevron-right"
              class="!w-5 !h-5 text-[var(--brand-blue)]"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
const { t } = useI18n();

const teachers = computed(() => [
  {
    id: 1,
    image: "https://picsum.photos/500/300",
    name: t("teachers.teacher1.name"),
    position: t("teachers.teacher1.position"),
    subject: t("teachers.teacher1.subject"),
  },
  {
    id: 2,
    image: "https://picsum.photos/500/300",
    name: t("teachers.teacher2.name"),
    position: t("teachers.teacher2.position"),
    subject: t("teachers.teacher2.subject"),
  },
  {
    id: 3,
    image: "https://picsum.photos/500/300",
    name: t("teachers.teacher3.name"),
    position: t("teachers.teacher3.position"),
    subject: t("teachers.teacher3.subject"),
  },
  {
    id: 4,
    image: "https://picsum.photos/500/300",
    name: t("teachers.teacher4.name"),
    position: t("teachers.teacher4.position"),
    subject: t("teachers.teacher4.subject"),
  },
  {
    id: 5,
    image: "https://picsum.photos/500/300",
    name: t("teachers.teacher5.name"),
    position: t("teachers.teacher5.position"),
    subject: t("teachers.teacher5.subject"),
  },
  {
    id: 6,
    image: "https://picsum.photos/500/300",
    name: t("teachers.teacher6.name"),
    position: t("teachers.teacher6.position"),
    subject: t("teachers.teacher6.subject"),
  },
]);

interface Props {
  cards: {
    image: string;
    title: string;
    duration: number;
    type: "new";
    author: {
      name: string;
    };
  }[];
}
defineProps<Props>();

const navigationEls = {
  nextEl: `sw-next-el`,
  prevEl: `sw-prev-el`,
};

const settings = computed(() => {
  return {
    slidesPerView: 4,
    spaceBetween: 12,
    navigation: {
      nextEl: "." + navigationEls.nextEl,
      prevEl: "." + navigationEls.prevEl,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      600: {
        slidesPerView: 2.1,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
    modules: [Navigation],
  };
});
</script>
<style scoped>
.sw-button {
  backdrop-filter: blur(30px);
  cursor: pointer;
}
.sw-button.swiper-button-disabled {
  @apply scale-0 opacity-0;
}
.swiper-overlay {
  background: linear-gradient(90deg, rgba(245, 246, 247, 0) 0%, #f5f6f7 65%);
}

.swiper-overlay-left {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 65%
  );
}

.swiper-overlay-right {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 65%
  );
}
</style>
