import Link from "next/link";

export default function AdminPage() {
  return (
    <main>
      <div>
        <Link href="/admin/blog/new">Create Blog</Link>
      </div>
    </main>
  );
}
