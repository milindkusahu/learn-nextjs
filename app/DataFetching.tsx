{
  /* Server Side Data fetching */
}
// export const dynamic = "force-dynamic";

import Link from "next/link";

export default async function DataFetching() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/", {
    // cache: "no-store",
    // next: {
    //   revalidate: 60, // time based revalidation
    // },
    next: { tags: ["users"], revalidate: 3600 },
  });
  const users = await data.json();

  return (
    <div>
      DataFetching
      <div>
        {users &&
          users.map((user: any) => (
            <li key={user.username}>
              <Link href={`/user/${user.id}`}>{user.username}</Link>
            </li>
          ))}
      </div>
    </div>
  );
}

{
  /* Client Side Data fetching */
}
// "use client";

// import { useEffect, useState } from "react";

// export default function DataFetching() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await fetch("https://jsonplaceholder.typicode.com/users/");
//       const users = await data.json();
//       setUsers(users);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       DataFetching
//       <div>
//         <ul>
//           {users &&
//             users?.map((user, index) => <li key={user.id}>{user.username}</li>)}
//         </ul>
//       </div>
//     </div>
//   );
// }
