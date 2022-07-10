import { PropsWithChildren } from "react";
import Navbar from "./NavBar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
