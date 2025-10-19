<template>
  <section
    class="py-20 text-white relative overflow-hidden"
    style="background-color: #1946b9"
  >
    <!-- Pattern -->
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

    <div class="container relative z-10">
      <!-- Title and Subtitle -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
          {{ $t("callback.title") }}
        </h2>
        <p class="text-lg text-white/90 max-w-2xl mx-auto">
          {{ $t("callback.subtitle") }}
        </p>
      </div>

      <!-- Form -->
      <div class="max-w-md mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Name Input -->
          <div>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-6 py-4 rounded-xl text-white font-semibold placeholder-gray-400 focus:outline-none ring-1 ring-white focus:ring-[var(--brand-yellow)] transition-all"
              :placeholder="$t('callback.form.namePlaceholder')"
            />
          </div>

          <!-- Phone Input with Flag -->
          <div>
            <div class="relative">
              <div
                class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-2"
              >
                <span class="font-semibold text-white">+998</span>
              </div>
              <input
                v-model="form.phone"
                type="tel"
                required
                class="w-full pl-15 pr-6 py-4 rounded-xl text-white font-semibold placeholder-gray-400 focus:outline-none ring-1 ring-white focus:ring-[var(--brand-yellow)] transition-all"
                v-maska="'## ### ## ##'"
                placeholder="00 000 00 00"
              />
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:opacity-90 shadow-lg"
            style="background-color: #fed116; color: #1946b9"
          >
            {{ $t("callback.form.submit") }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const form = ref({
  name: "",
  phone: "",
});

const handleSubmit = () => {
  // Handle form submission
  console.log("Callback form submitted:", form.value);
  alert(t("callback.form.success"));

  // Reset form
  form.value = {
    name: "",
    phone: "",
  };
};
</script>
