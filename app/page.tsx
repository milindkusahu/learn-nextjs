/* Server Component */

import ClientButton from "./ClientButton";
import ServerComponent from "./ServerComponent";
import DataFetching from "./DataFetching";
import Button from "./Button";

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
