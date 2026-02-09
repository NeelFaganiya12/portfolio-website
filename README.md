# Portfolio Website

A modern, responsive portfolio website for an MMath Computer Science student specializing in Cryptography, Security, and Privacy research at the University of Waterloo.

## Features

- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations using Framer Motion
- 🎯 SEO optimized
- 🌙 Dark/Light mode toggle with persistent preference

## Sections

- **Hero**: Introduction and social links
- **About**: Personal background and interests
- **Education**: Academic qualifications
- **Research**: Research areas and interests at CrySP Lab
- **Projects**: Showcase of key projects
- **Skills**: Technical skills and expertise
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`): Update name, title, and social links
2. **About Section** (`components/About.tsx`): Modify the about text
3. **Education** (`components/Education.tsx`): Update education history
4. **Research** (`components/Research.tsx`): Customize research areas
5. **Projects** (`components/Projects.tsx`): Add your projects
6. **Skills** (`components/Skills.tsx`): Update skill categories
7. **Contact** (`components/Contact.tsx`): Update email and location

### Styling

The website uses Tailwind CSS. You can customize colors in `tailwind.config.ts`. The primary color scheme is currently set to blue tones.

### Contact Form

The contact form currently shows an alert on submission. To make it functional, integrate with:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- Your own backend API

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Your own server

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **React Icons**: Icon library

## License

This project is open source and available under the MIT License.
