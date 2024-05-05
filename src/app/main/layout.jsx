import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export const metadata = {
  title: "আমার পাকুন্দিয়া",
  description: "আমার পাকুন্দিয়া",
};

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
