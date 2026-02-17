import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import RouteLoader from "@/components/ui/route-loader";
import { AuthProvider } from "@/context/AuthContext";
import React, { Suspense } from "react";

const Commonlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Suspense fallback={null}>
          <RouteLoader />
        </Suspense>
        {children}
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default Commonlayout;
