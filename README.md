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

* Happens when the **server-rendered HTML** doesn’t match the **client-rendered output** .
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

---

## Routing in Next.js

Next.js provides **file-based routing**, meaning that the file structure inside the `app/` directory determines the routes.

### Basic Routing

- **File Structure:**
  ```plaintext
  app/user/page.tsx  --->  Renders as `/user`
  ```

* **Supported file extensions:** `.js`, `.jsx`, `.tsx`
* Next.js automatically creates routes based on folder and file names.

### Special Route Files

Next.js has **special files** that enhance routing functionality:

| File                       | Purpose                                                             |
| -------------------------- | ------------------------------------------------------------------- |
| **layout.tsx**       | Shared UI for a segment and its children.                           |
| **page.tsx**         | The unique UI of a route, making it publicly accessible.            |
| **loading.tsx**      | Displays a loading state for a segment while waiting for data.      |
| **not-found.tsx**    | Custom "Not Found" UI for a segment.                                |
| **error.tsx**        | Handles errors within a specific segment.                           |
| **global-error.tsx** | Global error handling across the entire app.                        |
| **route.ts**         | Defines server-side API endpoints.                                  |
| **template.tsx**     | A re-rendered version of `layout.tsx`, allowing fresh UI updates. |
| **default.tsx**      | Acts as a fallback UI for Parallel Routes.                          |

### Static Routes

Static routes are defined by simple folder and file structures:

```plaintext
app/about/page.tsx  -->  `/about`
app/contact/page.tsx  -->  `/contact`
```

### Dynamic Routes

* Dynamic routes use **square brackets (`[ ]`)** to define route parameters.
* Example:

  ```plaintext
  app/user/[id]/page.tsx  -->  `/user/:id`
  ```

  Usage:

  ```tsx
  import { useParams } from 'next/navigation';

  export default function UserPage() {
      const params = useParams();
      return <h1>User ID: {params.id}</h1>;
  }
  ```

### Routing Groups

* Parentheses **`()`** can be used to **group routes** without affecting the URL structure.
* Example:

  ```plaintext
  app/(dashboard)/users/page.tsx  -->  `/users`
  ```

  The **`(dashboard)`** folder is ignored in the URL.

### Server Layouts in Next.js

* Next.js uses **server components** by default, allowing layouts to be rendered on the server.
* This helps reduce the **client-side JavaScript bundle size** and improves  **performance & SEO.**

![nextjs server layouts](https://file+.vscode-resource.vscode-cdn.net/Users/milindsahu/Projects/learn-nextjs/image/README/nextjs-server-layouts.png "nextjs server layouts")

### Navigating Between Routes

Next.js provides built-in methods for client-side navigation:

* **Preferred:** `<Link>` for fast, client-side navigation.
  ```tsx
  import Link from 'next/link';

  function Home() {
      return <Link href="/about">Go to About</Link>;
  }
  ```
* **Standard `<a>` tag** : Triggers a full page reload (not recommended for internal links).

```tsx
  <a href="/about">Go to About</a>
```

---

## Data Fetching Patterns

### Server-Side Data Fetching

* Fetches data on the server before sending the page to the client.
* Improves SEO since the content is pre-rendered.
* Reduces the JavaScript bundle size on the client.

### Streaming Server-Side Data and Loading

* **`loading.js`** : Displays a loading state while waiting for server-rendered data.
* Enables progressive rendering, sending HTML chunks as data is fetched.
* SEO benefits since content appears faster for search engines.

### Client-Side Data Fetching

* Uses React hooks like `useEffect` or `useSWR` for fetching data in the browser.
* Good for user-specific or real-time data that doesn’t impact SEO.
* Example: Fetching user dashboard data after the page loads.

### Cache Data Revalidation

* **Server-Side Fetching:** Uses `fetch()` to get fresh data.
* **Caching:** `fetch()` caches data indefinitely unless revalidated.
* **Revalidation Strategies:**
  * **Time-based:** Revalidate after a fixed interval (e.g., blogs update every 7 days).
  * **On-demand:** Manually trigger revalidation when data updates (e.g., stock trading).
* Helps balance performance and freshness of data.

### API Routes in Next.js

* API routes live inside the `app/api/route.ts` directory.
* Useful for handling backend logic like authentication, database queries, or third-party API requests.
* Automatically optimized by Next.js for efficient data handling.

### How Server Actions Work?

* Declared using `"use server";` at the top of the function.
* Must be **asynchronous (`async`)** to handle data processing.
* Eliminates the need for API routes in some cases by directly executing server logic.
* Helps optimize performance by reducing client-side data fetching.

---
