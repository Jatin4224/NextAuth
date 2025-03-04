import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>login auth page</nav>
      {children}
    </div>
  );
};

export default layout;
