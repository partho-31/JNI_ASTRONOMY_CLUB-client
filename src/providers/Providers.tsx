import { AuthProvider } from "@/context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";
import StoreProvider from "./StoreProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleOAuthProvider clientId="477551431724-a9dsg6tkuo521oqsra813n9ugb70p6gg.apps.googleusercontent.com">
      <AuthProvider>
        <StoreProvider>{children}</StoreProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default Providers;
