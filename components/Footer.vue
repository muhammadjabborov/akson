<template>
  <footer
    class="py-8 sm:py-10 md:py-12 text-white relative overflow-hidden"
    style="background-color: #1946b9"
  >
    <div class="container relative z-10 px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
            {{ $t("footer.contact") }}
          </h3>
          <div class="space-y-2">
            <p
              class="flex items-center space-x-2 text-sm sm:text-base text-white/90"
            >
              <Icon
                name="heroicons:phone"
                class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
              />
              <span>+998 99 186 14 14</span>
            </p>
            <p
              class="flex items-center space-x-2 text-sm sm:text-base text-white/90"
            >
              <Icon
                name="heroicons:map-pin"
                class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
              />
              <span>{{ $t("footer.address") }}</span>
            </p>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
            {{ $t("footer.quickLinks") }}
          </h3>
          <div class="space-y-2">
            <NuxtLink
              to="#about"
              class="block hover:opacity-80 transition-colors text-sm sm:text-base text-white/90"
            >
              {{ $t("nav.about") }}
            </NuxtLink>
            <NuxtLink
              to="#features"
              class="block hover:opacity-80 transition-colors text-sm sm:text-base text-white/90"
            >
              {{ $t("nav.features") }}
            </NuxtLink>
            <NuxtLink
              to="#teachers"
              class="block hover:opacity-80 transition-colors text-sm sm:text-base text-white/90"
            >
              {{ $t("nav.teachers") }}
            </NuxtLink>
            <NuxtLink
              to="#results"
              class="block hover:opacity-80 transition-colors text-sm sm:text-base text-white/90"
            >
              {{ $t("nav.results") }}
            </NuxtLink>
          </div>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
            {{ $t("footer.socialMedia") }}
          </h3>
          <div class="flex space-x-3 sm:space-x-4">
            <a
              href="https://www.instagram.com/akson_talim_markaz"
              target="_blank"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-colors flex-shrink-0"
              style="background-color: #fed116; color: #1946b9"
            >
              <img
                src="/brand-instagram.svg"
                alt="Instagram"
                class="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>
            <a
              target="_blank"
              href="https://t.me/akson_talim_markaz"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-colors flex-shrink-0"
              style="background-color: #fed116; color: #1946b9"
            >
              <img
                src="/brand-telegram.svg"
                alt="Telegram"
                class="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        class="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center"
      >
        <p class="text-xs sm:text-sm text-white/90">
          &copy; 2024 Akson Maktab. {{ $t("footer.rights") }}
        </p>
      </div>
    </div>
  </footer>
</template>
