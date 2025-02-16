import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  return (
    <div>
      <p>{session?.user?.name}</p>
      <p>Blog will show up here</p>
    </div>
  );
}
