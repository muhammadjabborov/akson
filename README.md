# Akson Maktab - School Website

A modern, responsive website for Akson Maktab (International School) built with Nuxt 3, Vue 3, and Tailwind CSS.

## 🌟 Features

- **Multi-language Support**: Uzbek (UZ) and Russian (RU) languages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Beautiful gradient designs and smooth animations
- **Interactive Components**: FAQ accordion, contact form, and more
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📋 Sections

1. **Header**: Fixed navigation with language switcher
2. **Hero Section**: Eye-catching introduction with statistics
3. **Features Section**: 6 key features of the school
4. **Education System**: Principles and goals
5. **Teachers Section**: Showcase of experienced teachers
6. **Student Results**: Success stories and achievements
7. **Testimonials**: Parent and student reviews
8. **FAQ Section**: Collapsible frequently asked questions
9. **Contact Section**: Contact form and location
10. **Footer**: Links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd akson
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview

# Generate static site
npm run generate
```

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **UI Library**: Vue 3
- **Styling**: Tailwind CSS v4
- **Icons**: Nuxt Icon (Heroicons)
- **Internationalization**: @nuxtjs/i18n
- **TypeScript**: Full TypeScript support
- **Image Optimization**: @nuxt/image

## 📁 Project Structure

```
akson/
├── assets/
│   └── css/
│       └── index.css          # Global styles and animations
├── components/                # Vue components
│   ├── Header.vue            # Navigation header
│   ├── Footer.vue            # Footer section
│   ├── HeroSection.vue       # Hero/landing section
│   ├── FeaturesSection.vue   # Features grid
│   ├── EducationSystemSection.vue
│   ├── TeachersSection.vue   # Teachers showcase
│   ├── StudentResultsSection.vue
│   ├── TestimonialsSection.vue
│   ├── FAQSection.vue        # FAQ accordion
│   └── ContactSection.vue    # Contact form
├── i18n/
│   └── locales/
│       ├── uz.json           # Uzbek translations
│       └── ru.json           # Russian translations
├── public/                   # Static assets
├── app.vue                   # Main app component
├── nuxt.config.ts            # Nuxt configuration
├── package.json
└── tsconfig.json
```

## 🎨 Customization

### Adding New Languages

1. Add a new locale file in `i18n/locales/`
2. Update `nuxt.config.ts` to include the new locale
3. Add language switcher option in `Header.vue`

### Modifying Content

All content is stored in the translation files:

- `i18n/locales/uz.json` - Uzbek content
- `i18n/locales/ru.json` - Russian content

### Styling

Global styles are in `assets/css/index.css`. Component-specific styles use Tailwind CSS utility classes.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Contact

For questions or support, please contact the development team.

---

Built with ❤️ using Nuxt 3 and Vue 3
