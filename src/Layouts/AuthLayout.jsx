import { Button } from "@/components/ui/button";
import { AuthContext } from "@/Provider/AuthProvider";
import { Mail } from "lucide-react";
import React, { useContext } from "react";
import kanban from "../../public/kanban.png";
import { Link } from "react-router-dom";

const AuthLayout = () => {
  const { googleSignIn } = useContext(AuthContext);
  return (
    <>
      <div className="h-dvh flex flex-col items-center bg-authBg font-prompt">
        <Link to={"/"}>
          <div className="my-10 flex items-center gap-4">
            <img className="w-10 aspect-square" src={kanban} alt="" />
            <h1 className="text-4xl">Kanban Kanban</h1>
          </div>
        </Link>
        <Button onClick={googleSignIn} className="px-8 py-8 rounded-lg mt-56">
          <Mail /> Login with Google
        </Button>
      </div>
    </>
  );
};

export default AuthLayout;
