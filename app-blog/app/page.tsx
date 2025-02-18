import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      <p>{session?.user?.name}</p>
      <p>Blog will show up here</p>
    </div>
  );
}
