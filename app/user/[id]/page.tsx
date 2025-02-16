import type { Metadata } from "next";

interface Props {
  params: { id: string };
}

// Dynamic Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    title: user.name,
    description: `${user.address.street} ${user.address.suite} ${user.address.city}`,
    keywords: ["User", "Info"],
    robots: "index, follow",
    publisher: user.name,
    alternates: {
      canonical: `http://localhost:3000/user/${id}`,
    },
    // openGraph: {
    //   type: "website",
    //   url: `http://localhost:3000/user/${id}`,
    //   title: user.name,
    //   description: user.email,
    //   images: {
    //     url: "http://localhost:3000/default-user-image.jpg",
    //     alt: user.name,
    //   },
    // },
  };
}

export default async function UserInfoPage({ params }: Props) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return (
    <div>
      <h5>Name: {user.name}</h5>
      <h5>Email: {user.email}</h5>
      <h5>Phone No. {user.phone}</h5>
    </div>
  );
}
