<template>
  <section ref="sectionRef" class="py-16 bg-white relative overflow-hidden">
    <!-- Pattern -->
    <PatternDecorator
      color="blue"
      position="absolute"
      size="large"
      animation="float"
      top="50%"
      left="-10%"
      :opacity="0.08"
      :z-index="0"
    />

    <div class="container relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.id"
          class="text-center relative"
        >
          <!-- Divider line between items (except last) -->
          <div
            v-if="index < stats.length - 1"
            class="hidden md:block absolute top-1/2 right-0 w-px h-24 transform -translate-y-1/2 opacity-60"
            style="
              background: linear-gradient(
                to bottom,
                transparent,
                #1946b9,
                transparent
              );
            "
          ></div>

          <!-- Value and Label -->
          <div
            class="text-5xl md:text-6xl font-bold mb-3"
            style="color: #1946b9"
          >
            {{ animatedValues[index] }}{{ stat.suffix }}
          </div>
          <div class="font-medium leading-relaxed" style="color: #6b7280">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const hasAnimated = ref(false);

const stats = computed(() => [
  { id: 1, value: 5, suffix: "", label: t("hero.stats.years") },
  { id: 2, value: 100, suffix: "+", label: t("hero.stats.students") },
  { id: 3, value: 300, suffix: "+", label: t("hero.stats.olympiads") },
  { id: 4, value: 200, suffix: "+", label: t("hero.stats.graduates") },
]);

const animatedValues = ref([0, 0, 0, 0]);

const animateValue = (
  index: number,
  start: number,
  end: number,
  duration: number
) => {
  const startTime = performance.now();
  const suffix = stats.value[index].suffix;

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth animation
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);

    const current = Math.floor(start + (end - start) * easeOutCubic);
    animatedValues.value[index] = current;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Format large numbers
      if (end >= 1000000) {
        animatedValues.value[index] = (end / 1000000).toFixed(1) as any;
      } else if (end >= 1000) {
        animatedValues.value[index] = end;
      }
    }
  };

  requestAnimationFrame(animate);
};

const startAnimation = () => {
  if (hasAnimated.value) return;
  hasAnimated.value = true;

  stats.value.forEach((stat, index) => {
    setTimeout(() => {
      animateValue(index, 0, stat.value, 2000);
    }, index * 200);
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true;
          startAnimation();
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "0px",
    }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value);
    }
  });
});
</script>
