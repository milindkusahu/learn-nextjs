# 🚀 Learn Next.js

This repository documents everything I’m learning about Next.js.

## 📌 React vs Next.js

| Feature                | React                                | Next.js                            |
| ---------------------- | ------------------------------------ | ---------------------------------- |
| **Rendering**    | Client-Side Rendering (CSR)          | Supports CSR, SSR, SSG, ISR        |
| **SEO**          | Poor (CSR loads content dynamically) | Great (Pre-rendering improves SEO) |
| **Routing**      | Uses React Router (client-side)      | Built-in file-based routing        |
| **Performance**  | Needs optimizations for fast loading | Optimized with built-in SSR/SSG    |
| **Bundle Size**  | Can be large if not optimized        | Smaller due to server components   |
| **API Handling** | Needs external backend or Firebase   | Built-in API routes                |

**Why Choose Next.js?**

* Better SEO and performance
* Built-in routing, API routes, and image optimization
* Supports both static and dynamic content
* Server Components for smaller JS bundles

---

## 📂 Directory Structure

* **`/public/`** → Stores static assets like images, videos, and CSS files.
* **`/app/`** → The entry point of the application.
  * By default, all components are  **Server Components** .
  * Use `"use client"` directive for **Client Components** (interactive elements).
  * **Benefits:**
    * **SEO-friendly** (server-rendered content)
    * **Smaller JS bundle** (Only interactive components are client-side)
* **`/app/layout.tsx`** → The root layout file.
* **`.next/`** → Stores the build output after running `npm run build`.

---

## 📌 Pages Router vs App Router

### **Pages Router (`/pages/`)**

* Uses file-based routing inside `/pages/`.
* Supports API routes (`/pages/api/`).
* Older method (before Next.js 13).
* Works similar to React with `getServerSideProps`, `getStaticProps`, and `getInitialProps`.

### **App Router (`/app/`)** *(Recommended in Next.js 13+)*

* Uses  **Server Components by default** .
* Supports layouts, streaming, and Suspense.
* Enables **nested routing** and parallel routes.
* Improved performance with smaller bundles.
* **Example of defining a route:**

```tsx
// /app/page.tsx
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}
```

👉 **Use the App Router for new projects!** 🚀

---

## 🔍 Server Components Explained

* **What are Server Components?**
  * They **run on the server** and send **pre-rendered HTML** to the client.
  * No JavaScript is sent to the browser for non-interactive elements.
  * Improves **performance** and  **reduces the client bundle size** .
* **How to use Server Components in Next.js?**
  * By default, all components in `/app/` are  **Server Components** .
  * If a component needs interactivity (event handlers, state), add `"use client"` at the top.

```tsx
// Client Component
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
}
```

✅ **Use Server Components for static content and Client Components for interactive elements.**

---

## 🌊 Fixing Hydration Errors

### **What is a Hydration Error?**

* Happens when the **server-rendered HTML** doesn’t match the  **client-rendered output** .
* Common causes:
  * Using `useEffect` incorrectly.
  * Dynamically changing content before hydration.
  * Mismatched server/client timestamps.

### **How to Fix Hydration Errors?**

Modify `layout.tsx` to suppress hydration warnings:

```tsx
return (
    <html lang="en" suppressHydrationWarning>
```

⚠️ **Note:** This hides warnings but doesn’t fix the root cause.

✅ A better fix is to ensure that **dynamic data** matches on both server and client.
