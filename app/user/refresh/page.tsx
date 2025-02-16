import { revalidateUsers } from "@/app/actions";

export default function RefreshUserPage() {
  return (
    <form action={revalidateUsers}>
      <button type="submit">Revalidate Users</button>
    </form>
  );
}
