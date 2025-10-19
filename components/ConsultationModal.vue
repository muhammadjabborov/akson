<template>
  <!-- Consultation Modal -->
  <Transition name="modal">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4"
      @click.self="close"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in"
      >
        <!-- Close Button -->
        <button
          @click="close"
          class="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors w-10 h-10 flex items-center justify-center"
        >
          <Icon name="heroicons:x-mark" class="!w-6 !h-6 text-gray-600" />
        </button>

        <!-- Modal Header -->
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2" style="color: #1946b9">
            {{ $t("consultation.title") }}
          </h2>
          <p class="text-gray-600">{{ $t("consultation.subtitle") }}</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Full Name -->
          <div>
            <label
              for="fullName"
              class="block text-sm font-semibold mb-2"
              style="color: #1946b9"
            >
              {{ $t("consultation.fullName") }}
            </label>
            <input
              id="fullName"
              v-model="formData.fullName"
              type="text"
              required
              class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-blue-600 transition-colors"
              style="border-color: #e5e7eb"
              :placeholder="$t('consultation.fullNamePlaceholder')"
            />
          </div>

          <!-- Phone Number -->
          <div>
            <label
              for="phone"
              class="block text-sm font-semibold mb-2"
              style="color: #1946b9"
            >
              {{ $t("consultation.phone") }}
            </label>
            <div class="relative">
              <div
                class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-2"
              >
                <span class="font-semibold text-gray-700">+998</span>
              </div>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                required
                v-maska="'## ### ## ##'"
                placeholder="00 000 00 00"
                class="w-full pl-15 pr-4 py-3 font-semibold text-gray-700 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-blue-600 transition-colors"
                style="border-color: #e5e7eb"
              />
            </div>
            <p class="text-xs text-gray-500 mt-1">
              {{ $t("consultation.phoneHint") }}
            </p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-all duration-300 hover:shadow-lg"
            style="background-color: #fed116; color: #1946b9"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">
              {{ $t("consultation.submit") }}
            </span>
            <span v-else class="flex items-center justify-center space-x-2">
              <Icon name="heroicons:arrow-path" class="w-5 h-5 animate-spin" />
              <span>{{ $t("consultation.submitting") }}</span>
            </span>
          </button>
        </form>

        <!-- Success Message -->
        <div
          v-if="showSuccess"
          class="mt-4 p-4 rounded-lg flex items-center space-x-2"
          style="background-color: #d1fae5; color: #065f46"
        >
          <Icon name="heroicons:check-circle" class="w-6 h-6" />
          <span class="font-semibold">{{ $t("consultation.success") }}</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: "close"): void;
  (e: "submit", data: { fullName: string; phone: string }): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const isSubmitting = ref(false);
const showSuccess = ref(false);

const formData = ref({
  fullName: "",
  phone: "",
});

const close = () => {
  emit("close");
  showSuccess.value = false;
  formData.value = {
    fullName: "",
    phone: "",
  };
};

const submitForm = async () => {
  isSubmitting.value = true;
  showSuccess.value = false;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Emit the form data
    emit("submit", {
      fullName: formData.value.fullName,
      phone: `+998${formData.value.phone}`,
    });

    // Show success message
    showSuccess.value = true;

    // Close modal after 2 seconds
    setTimeout(() => {
      close();
    }, 2000);
  } catch (error) {
    console.error("Error submitting consultation:", error);
  } finally {
    isSubmitting.value = false;
  }
};

// Reset form when modal opens
watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      formData.value = {
        fullName: "",
        phone: "",
      };
      showSuccess.value = false;
    }
  }
);
</script>
<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
