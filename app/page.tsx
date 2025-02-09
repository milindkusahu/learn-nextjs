/* Server Component */

import ClientButton from "./ClientButton";
import ServerComponent from "./ServerComponent";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <ServerComponent /> {/* Server Component */}
      <ClientButton /> {/* Client Component */}
    </div>
  );
}
