<template>
  <section id="courses" class="py-20 bg-white relative overflow-hidden">
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

    <div class="container relative z-10">
      <!-- Title with Two-Tone Style -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <!-- Left: Two-Tone Title -->
        <div>
          <h2 class="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            <span style="color: #1946b9">{{
              $t("courses.titleLine1.part1")
            }}</span>
            <span style="color: #42a5f5">{{
              $t("courses.titleLine1.part2")
            }}</span>
            <br />
            <span style="color: #1946b9">{{
              $t("courses.titleLine2.part1")
            }}</span>
            <span style="color: #42a5f5">{{
              $t("courses.titleLine2.part2")
            }}</span>
            <br />
            <span style="color: #1946b9">{{
              $t("courses.titleLine3.part1")
            }}</span>
            <span style="color: #42a5f5">{{
              $t("courses.titleLine3.part2")
            }}</span>
          </h2>
        </div>

        <!-- Right: Description -->
        <div>
          <p class="text-lg leading-relaxed" style="color: #616161">
            {{ $t("courses.description") }}
          </p>
        </div>
      </div>

      <!-- Courses Grid - Custom Layout: 2 top, 3 bottom -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <!-- Top Row - 2 cards spanning full width -->
        <div
          v-for="course in topRowCourses"
          :key="course.id"
          class="md:col-span-1 lg:col-span-1 rounded-3xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
          :style="`background-color: ${course.bgColor};`"
        >
          <!-- Category -->
          <div class="flex items-center gap-2 mb-4">
            <Icon
              :name="course.categoryIcon"
              class="!w-5 !h-5"
              style="color: #616161"
            />
            <span class="text-sm font-medium" style="color: #616161">
              {{ course.category }}
            </span>
          </div>

          <!-- Course Title -->
          <h3
            class="text-xl font-bold leading-tight"
            :style="`color: ${course.titleColor};`"
          >
            {{ course.title }}
          </h3>
        </div>

        <!-- Bottom Row - 3 cards -->
        <div
          v-for="course in bottomRowCourses"
          :key="course.id"
          class="md:col-span-1 lg:col-span-1 rounded-3xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
          :style="`background-color: ${course.bgColor};`"
        >
          <!-- Category -->
          <div class="flex items-center gap-2 mb-4">
            <Icon
              :name="course.categoryIcon"
              class="!w-5 !h-5"
              style="color: #616161"
            />
            <span class="text-sm font-medium" style="color: #616161">
              {{ course.category }}
            </span>
          </div>

          <!-- Course Title -->
          <h3
            class="text-xl font-bold leading-tight"
            :style="`color: ${course.titleColor};`"
          >
            {{ course.title }}
          </h3>
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
    categoryIcon: "heroicons:computer-desktop",
    category: t("courses.category1"),
    title: t("courses.course1"),
    bgColor: "#e3f2fd",
    titleColor: "#1946b9",
  },
  {
    id: 2,
    categoryIcon: "heroicons:cube",
    category: t("courses.category2"),
    title: t("courses.course2"),
    bgColor: "#fff9c4",
    titleColor: "#f57f17",
  },
  {
    id: 3,
    categoryIcon: "heroicons:pencil",
    category: t("courses.category3"),
    title: t("courses.course3"),
    bgColor: "#e8eaf6",
    titleColor: "#1946b9",
  },
  {
    id: 4,
    categoryIcon: "heroicons:language",
    category: t("courses.category4"),
    title: t("courses.course4"),
    bgColor: "#fff3e0",
    titleColor: "#f57f17",
  },
  {
    id: 5,
    categoryIcon: "heroicons:code-bracket",
    category: t("courses.category5"),
    title: t("courses.course5"),
    bgColor: "#e1f5fe",
    titleColor: "#1946b9",
  },
]);

const topRowCourses = computed(() => courses.value.slice(0, 2));
const bottomRowCourses = computed(() => courses.value.slice(2, 5));
</script>
