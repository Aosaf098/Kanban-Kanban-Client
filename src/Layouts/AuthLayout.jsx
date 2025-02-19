import { Button } from "@/components/ui/button";
import { AuthContext } from "@/Provider/AuthProvider";
import { MailOpen } from "lucide-react";
import React, { useContext } from "react";

const AuthLayout = () => {
  const {googleSignIn} = useContext(AuthContext)
  return (
    <>
      <div className="h-dvh flex items-center justify-center bg-authBg">
        
        <Button onClick={googleSignIn} className="px-8 py-8 rounded-lg">
          <MailOpen /> Login with Google
        </Button>
      </div>
    </>
  );
};

export default AuthLayout;
