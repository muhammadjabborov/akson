<template>
  <section class="py-20 bg-white relative overflow-hidden">
    <!-- Pattern -->
    <PatternDecorator
      color="blue"
      position="absolute"
      size="large"
      animation="float"
      top="15%"
      left="-5%"
      :opacity="0.08"
      :z-index="0"
    />

    <div class="container relative z-10">
      <!-- Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: #1946b9">
          {{ $t("faq.title") }}
        </h2>
        <p class="text-xl max-w-3xl mx-auto" style="color: #6b7280">
          {{ $t("faq.subtitle") }}
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="max-w-4xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="faq.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-[#fed116]"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
            :class="
              openFaqs.includes(index) ? 'bg-[#fed116]' : 'hover:bg-gray-50'
            "
          >
            <h3
              class="text-base md:text-lg font-semibold pr-4"
              style="color: #111827"
            >
              {{ faq.question }}
            </h3>
            <div
              class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              :style="
                openFaqs.includes(index)
                  ? 'background-color: #1946b9'
                  : 'background-color: #1946b9'
              "
            >
              <Icon
                :name="
                  openFaqs.includes(index)
                    ? 'heroicons:minus'
                    : 'heroicons:plus'
                "
                class="w-5 h-5 text-white"
              />
            </div>
          </button>
          <div
            v-if="openFaqs.includes(index)"
            class="px-6 pb-5 pt-2 leading-relaxed text-sm md:text-base"
            style="color: #6b7280"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const openFaqs = ref<number[]>([]);

const toggleFaq = (index: number) => {
  const idx = openFaqs.value.indexOf(index);
  if (idx > -1) {
    openFaqs.value.splice(idx, 1);
  } else {
    openFaqs.value.push(index);
  }
};

const faqs = computed(() => [
  {
    id: 1,
    question: t("faq.q1.question"),
    answer: t("faq.q1.answer"),
  },
  {
    id: 2,
    question: t("faq.q2.question"),
    answer: t("faq.q2.answer"),
  },
  {
    id: 3,
    question: t("faq.q3.question"),
    answer: t("faq.q3.answer"),
  },
  {
    id: 4,
    question: t("faq.q4.question"),
    answer: t("faq.q4.answer"),
  },
  {
    id: 5,
    question: t("faq.q5.question"),
    answer: t("faq.q5.answer"),
  },
]);
</script>
