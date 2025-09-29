import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen h-[200vh] flex flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

<div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-1">{/* Your page content */}</main>
  <Footer />
</div>;

export default Layout;
