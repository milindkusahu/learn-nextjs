/* Client Component */

"use client";

import React, { useState } from "react";

const ClientButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>{`Click Count - ${count}`}</button>
    </div>
  );
};

export default ClientButton;
