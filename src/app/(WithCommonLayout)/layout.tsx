import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import React from "react";

const Commonlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default Commonlayout;
