<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <HeroSection />
      <StatisticsSection />
      <FeaturesSection />
      <GoalsSection />
      <CoursesSection />
      <CallbackSection />
      <TeachersSection />
      <StudentResultsSection />
      <StudentFeedbacksSection />
      <EducationSystemSection />
      <FAQSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title:
    "Akson Maktab - O'zbekistondagi matematikaga ixtisoslashtirilgan TOP-5 maktab",
  meta: [
    {
      name: "description",
      content:
        "Dunyoning TOP universitetlariga tayyorlaydigan maktab! Xalqaro olimpiada g'oliblari bilan interaktiv darslar, SAT va IELTS tayyorgarlik.",
    },
  ],
});
</script>
