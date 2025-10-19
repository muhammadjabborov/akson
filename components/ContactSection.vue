<template>
  <section
    id="contact"
    class="py-20 text-white relative overflow-hidden"
    style="background: linear-gradient(135deg, #1946b9 0%, #153d9e 100%)"
  >
    <!-- Patterns -->
    <PatternDecorator
      color="white"
      position="absolute"
      size="large"
      animation="rotate"
      top="10%"
      right="5%"
      :opacity="0.15"
      :z-index="0"
    />
    <PatternDecorator
      color="yellow"
      position="absolute"
      size="medium"
      animation="float"
      bottom="20%"
      left="5%"
      :opacity="0.2"
      :z-index="0"
    />

    <div class="container relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
          {{ $t("contact.title") }}
        </h2>
        <p class="text-xl max-w-3xl mx-auto text-white/90">
          {{ $t("contact.subtitle") }}
        </p>
      </div>

      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold mb-2 text-white">{{
                $t("contact.form.name")
              }}</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                :placeholder="$t('contact.form.namePlaceholder')"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2 text-white">{{
                $t("contact.form.phone")
              }}</label>
              <input
                v-model="form.phone"
                type="tel"
                required
                class="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                :placeholder="$t('contact.form.phonePlaceholder')"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold mb-2 text-white">{{
              $t("contact.form.message")
            }}</label>
            <textarea
              v-model="form.message"
              rows="4"
              required
              class="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              :placeholder="$t('contact.form.messagePlaceholder')"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors shadow-lg"
            style="background-color: #fed116; color: #1946b9"
          >
            {{ $t("contact.form.submit") }}
          </button>
        </form>

        <div class="mt-12 text-center">
          <p class="text-lg mb-4 text-white">{{ $t("contact.location") }}</p>
          <p class="text-2xl font-bold text-white">
            Toshkent shahar, Yashnobod tumani, 6
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const form = ref({
  name: "",
  phone: "",
  message: "",
});

const handleSubmit = () => {
  // Handle form submission
  console.log("Form submitted:", form.value);
  alert(t("contact.form.success"));

  // Reset form
  form.value = {
    name: "",
    phone: "",
    message: "",
  };
};
</script>
