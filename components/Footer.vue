<template>
  <footer
    class="py-12 text-white relative overflow-hidden"
    style="background-color: #1946b9"
  >
    <div class="container relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-white">
            {{ $t("footer.contact") }}
          </h3>
          <div class="space-y-2">
            <p class="flex items-center space-x-2 text-white/90">
              <Icon name="heroicons:phone" class="w-5 h-5" />
              <span>+998 78 777 77 99</span>
            </p>
            <p class="flex items-center space-x-2 text-white/90">
              <Icon name="heroicons:map-pin" class="w-5 h-5" />
              <span>{{ $t("footer.address") }}</span>
            </p>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-white">
            {{ $t("footer.quickLinks") }}
          </h3>
          <div class="space-y-2">
            <NuxtLink
              to="#about"
              class="block hover:opacity-80 transition-colors text-white/90"
            >
              {{ $t("nav.about") }}
            </NuxtLink>
            <NuxtLink
              to="#features"
              class="block hover:opacity-80 transition-colors text-white/90"
            >
              {{ $t("nav.features") }}
            </NuxtLink>
            <NuxtLink
              to="#teachers"
              class="block hover:opacity-80 transition-colors text-white/90"
            >
              {{ $t("nav.teachers") }}
            </NuxtLink>
            <NuxtLink
              to="#results"
              class="block hover:opacity-80 transition-colors text-white/90"
            >
              {{ $t("nav.results") }}
            </NuxtLink>
          </div>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-white">
            {{ $t("footer.socialMedia") }}
          </h3>
          <div class="flex space-x-4">
            <a
              href="#"
              class="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-colors"
              style="background-color: #fed116; color: #1946b9"
            >
              <img src="/brand-instagram.svg" alt="Instagram" class="w-6 h-6" />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-colors"
              style="background-color: #fed116; color: #1946b9"
            >
              <img src="/brand-telegram.svg" alt="Telegram" class="w-6 h-6" />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-colors"
              style="background-color: #fed116; color: #1946b9"
            >
              <img src="/brand-youtube.svg" alt="Youtube" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-white/20 mt-8 pt-8 text-center">
        <p class="text-white/90">
          &copy; 2024 Akson Maktab. {{ $t("footer.rights") }}
        </p>
      </div>
    </div>
  </footer>
</template>
