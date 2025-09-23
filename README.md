# Horizontal Slider Web App

A modern, horizontally scrollable slider web application built with Next.js and GSAP, featuring keyboard accessibility, smooth animations, and responsive design.
> https://co-ipsum.vercel.app/ 
---

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS V4, TypeScript 
- **Animations:** GSAP (ScrollTrigger, ScrollSmoother)  
- **Image Optimization:** Next.js `Image` component  
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation  
- **Testing:** Playwright

---

## How to Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/ShykatDev/co-ipsum.git
cd co-ipsum

# install dependencies
npm install # or yarn install

# run the development server
npm run dev # or yarn dev
```

2. **Open development server in your browser:** - [Click here to open local server](http://localhost:3000)

## The project is deployed on **Vercel**:

**[Visit live url](https://co-ipsum.vercel.app/)**
```bash
#or copy link from here
https://co-ipsum.vercel.app/
```
## Assumptions & Trade-offs

- The horizontal slider assumes full-width panels with consistent aspect ratios.
- Using GSAP `ScrollSmoother`, which overrides native scrolling.
- `Images` are lazy-loaded except for the first panel for performance.
- Focus are implemented but only for first and last hading section, not for the images.

## Performance Notes

- Bundle size optimizations:
  - `Dynamic` imports for heavy components like Slider.
  - Optimize Next.js `Image` component for big size images.

- Animations optimized:
  - GSAP `timelines` and `ScrollSmoother` for smooth animations.
  - `prefers-reduced-motion` respected for motion-sensitive users.

- `Lazy-loading`: Only the first image loads eagerly; others load lazily.

## Accessibility Notes

- Text content panels have `tabIndex={0}` for keyboard navigation.
- aria-label and role="group" used on panels.
- Used `sementic HTML`.
- Focus animations and smooth scrolling implemented to improve user experience.
- Reduced motion media query supported.

## Testing

> **Note:** Make sure your local server in running...
```bash
npx playwright test
```
Test screenshot 👇
<img width="1011" height="551" alt="image" src="https://github.com/user-attachments/assets/8b037241-fb6b-4390-9c1e-e9bb7fad3a0c" />

## Design Parity Notes

- **Slider panel widths:**  
  The last panel width slightly differs on mobile due to responsive adjustments.  
  **Reason:** To prevent horizontal white space and ensure smooth GSAP scroll.

- **Focus animation scale:**  
  Slightly smaller scale effect on focus than in Figma.  
  **Reason:** Maintaining performance on low-end devices and respecting reduced-motion preferences.

- **Text content spacing:**  
  Minor adjustments in padding/margin for small screens.  
  **Reason:** To prevent text overlap with scrollable panels and keep responsive readability.

- **Bottom section reveal animation:**  
  Added fade + slide-up animation not present in Figma.  
  **Reason:** Improves UX and accessibility; smooth reveal for keyboard and scroll users.

- **Image quality/optimization:**  
  Images compressed slightly from Figma export.  
  **Reason:** To improve page load performance without significant visual loss.

## Performance Report (Lighthouse)

**For Desktop Device**
<img width="1095" height="896" alt="image" src="https://github.com/user-attachments/assets/480723d2-8ee1-45f9-9e89-04205dae6f0b" />

**For Mobile Device**
<img width="1083" height="1017" alt="image" src="https://github.com/user-attachments/assets/8c75a9c4-9dff-4b10-8fd7-6d7bd8400751" />

