# Project Overview

This is a Next.js e-commerce project for a brand named "Juan Becerra". It uses Tailwind CSS for styling and features a modern, responsive design. The main page is composed of several React components, including a navigation bar, a hero section with a video background, a category section, a featured products carousel, and a footer.

**Key Technologies:**

*   **Framework:** Next.js
*   **UI Library:** React
*   **Styling:** Tailwind CSS
*   **Components:** lucide-react for icons, react-slick for the carousel.

**Project Structure:**

*   `app/`: Contains the main application logic, including the root layout and pages.
*   `components/`: Contains reusable React components used throughout the application.
*   `public/`: Contains static assets like images and videos.
*   `package.json`: Defines project dependencies and scripts.
*   `next.config.js`: Configuration file for Next.js.

# Building and Running

To get the development server running, use the following command:

```bash
npm run dev
```

To create a production build, use:

```bash
npm run build
```

To start the production server, use:

```bash
npm run start
```

# Development Conventions

*   The project uses functional React components with hooks.
*   Styling is done primarily with Tailwind CSS utility classes.
*   Components are organized in the `components/` directory.
*   The project uses a custom font (Geist) loaded via `next/font`.
*   The `lucide-react` library is used for icons.
*   The `react-slick` library is used for carousels.

# Collaboration Guidelines

*   **SEO First:** We are prioritizing Search Engine Optimization (SEO). To achieve this, we will be using Server-Side Rendering (SSR) as the primary rendering strategy.
*   **Documentation:** When in doubt, consult the official documentation for Next.js, React, Tailwind CSS, and other libraries used in this project.
