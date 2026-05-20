# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://frontendmentor.io). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Navigate seamlessly between multiple sub-pages via a dynamic routing system without full-page reloads.
- Use a fully interactive and responsive mobile menu modal on smaller screens.

### Links

- Solution URL: [https://github.com](https://github.com)
- Live Site URL: [https://your-digitalbank-live-site.com](https://your-digitalbank-live-site.com)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [React](https://reactjs.org/) - Component-based UI Library
- [React Router v6](https://reactrouter.com) - For client-side routing & nested layouts
- [Tailwind CSS](https://tailwindcss.com) - For fast, responsive utility-first styling
- [Material UI (MUI)](https://mui.com) - Used for the mobile responsive menu modal

### What I learned

During this project, I significantly leveled up my skills in React Router and learned how to build a highly maintainable structure:

1. **Nested Routes & Shared Layouts:** Instead of duplicating headers and footers across pages, I learned how to use `<Outlet />` to inject unique page content into a centralized structure.
2. **Conditional Component Rendering (Reusable Code):** I avoided code duplication by using modern JavaScript props (`isPage`) inside Tailwind CSS classes to transform single components (`Articles` and `Features`) into entirely different visual layouts depending on the active page URL.
3. **MUI Integration with React Router:** I learned how to combine Material UI components like `ListItemButton` with React Router's `NavLink` using the `component={NavLink}` prop to retain functional multi-page navigation and active state coloring inside a mobile sidebar/modal.

```jsx
// Transforming a component dynamically using Props & Tailwind CSS
export default function Features({ isPage = false }) {
  return (
    <div className={isPage ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "grid grid-cols-1 lg:grid-cols-4 gap-10"}>
      {/* Features List */}
    </div>
  );
}
```

### AI Collaboration

During the development of this project, I collaborated effectively with an AI assistant to overcome challenges and refine my workflow:

- **Architecture Planning:** The AI helped me reorganize the directory structure cleanly between structural elements (`components/Layout.jsx`) and viewports (`pages/`).
- **Debugging Routing Errors:** Resolved configuration errors regarding nested route declarations (`path index` syntax fix) and absolute/relative path properties in React Router v6.
- **State Management & Refactoring:** Assisted in converting a hardcoded desktop navbar and mobile layout into a dynamic, mapping-driven list system to allow future expansion with minimal code overhead.

## Author

- Website - [Your Name Here](https://your-portfolio.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
