import Footer from "./footer";
import { Navbar } from "./navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-[#F4F4F0] flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
