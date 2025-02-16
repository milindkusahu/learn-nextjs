/* Server Component */

import ClientButton from "./ClientButton";
import ServerComponent from "./ServerComponent";
import DataFetching from "./DataFetching";
import Button from "./Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milind Kumar Sahu | Homepage",
  description: "Home Page description",
  alternates: {
    canonical: "http://localhost:3000/",
  },
  keywords: ["Home", "Page", "Keywords"],
  publisher: "Milind Kumar Sahu",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "http://localhost:3000/",
    title: "Milind Kumar Sahu | Homepage",
    description: "Home Page description",
    images: {
      url: "http://localhost:3000/",
      alt: "Milind Kumar Sahu | Homepage",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function Home() {
  return (
    <div className="m-10">
      <h1>Hello World</h1>
      <ServerComponent /> {/* Server Component */}
      <ClientButton /> {/* Client Component */}
      <DataFetching />
      <Button />
    </div>
  );
}
