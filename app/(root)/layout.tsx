import NavBar from "@/components/NavBar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default layout;
