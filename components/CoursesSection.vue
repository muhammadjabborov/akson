<template>
  <section
    id="courses"
    class="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
  >
    <!-- Pattern -->
    <PatternDecorator
      color="blue"
      position="absolute"
      size="large"
      animation="float"
      top="10%"
      right="-5%"
      :opacity="0.08"
      :z-index="0"
    />

    <div class="container relative z-10 px-4">
      <!-- Title with Two-Tone Style -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-10 sm:mb-12 md:mb-16"
      >
        <!-- Left: Two-Tone Title -->
        <div>
          <h2
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight px-4 lg:px-0"
          >
            <span style="color: #1946b9">{{
              $t("courses.titleLine1.part1")
            }}</span>
            <span style="color: #42a5f5"
              >{{ $t("courses.titleLine1.part2") }},</span
            >
            <br />
            <span style="color: #1946b9">{{
              $t("courses.titleLine2.part1")
            }}</span>
            <span style="color: #42a5f5">{{
              $t("courses.titleLine2.part2")
            }}</span>
          </h2>
        </div>

        <!-- Right: Description -->
        <div>
          <p
            class="text-base sm:text-lg leading-relaxed px-4 lg:px-0"
            style="color: #616161"
          >
            {{ $t("courses.description") }}
          </p>
        </div>
      </div>

      <!-- Courses Grid - Custom Layout: 2 top, 3 bottom -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        <!-- Top Row - 2 cards spanning full width -->
        <div
          v-for="course in courses"
          :key="course.id"
          class="group sm:col-span-1 lg:col-span-1 bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer relative overflow-hidden"
        >
          <!-- Decorative background gradient on hover -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :style="`background: linear-gradient(135deg, ${course.bgColor} 0%, transparent 100%);`"
          ></div>

          <!-- Content wrapper -->
          <div class="relative z-10">
            <!-- Icon Badge -->
            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
              :style="`background: ${course.bgColor};`"
            >
              <Icon
                :name="course.categoryIcon"
                class="!w-7 !h-7 transition-transform duration-500 group-hover:rotate-6"
                :style="`color: ${course.titleColor};`"
              />
            </div>

            <!-- Course Title -->
            <h3
              class="text-xl sm:text-2xl font-bold leading-tight text-gray-900 group-hover:text-gray-800 transition-colors duration-300"
            >
              {{ course.title }}
            </h3>

            <!-- Decorative line -->
            <div
              class="mt-6 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-16"
              :style="`background: ${course.titleColor};`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const courses = computed(() => [
  {
    id: 1,
    categoryIcon: "heroicons:beaker",
    category: t("courses.category1"),
    title: t("courses.course1"),
    bgColor: "#e3f2fd",
    titleColor: "#1946b9",
  },
  {
    id: 2,
    categoryIcon: "heroicons:scale",
    category: t("courses.category2"),
    title: t("courses.course2"),
    bgColor: "#e8f5e9",
    titleColor: "#2e7d32",
  },
  {
    id: 3,
    categoryIcon: "heroicons:calculator",
    category: t("courses.category3"),
    title: t("courses.course3"),
    bgColor: "#f3e5f5",
    titleColor: "#7b1fa2",
  },
  {
    id: 4,
    categoryIcon: "heroicons:book-open",
    category: t("courses.category4"),
    title: t("courses.course4"),
    bgColor: "#fff3e0",
    titleColor: "#e65100",
  },
  {
    id: 5,
    categoryIcon: "heroicons:academic-cap",
    category: t("courses.category5"),
    title: t("courses.course5"),
    bgColor: "#e1f5fe",
    titleColor: "#0277bd",
  },
]);

const topRowCourses = computed(() => courses);
</script>
