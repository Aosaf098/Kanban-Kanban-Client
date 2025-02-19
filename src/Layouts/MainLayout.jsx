import { Button } from "@/components/ui/button";
import React from "react";
import kanban from "../../public/kanban.png";
import { Link } from "react-router-dom";


const MainLayout = () => {
  return (
    <>
      <div className="h-dvh font-prompt bg-authBg">
        <div className="w-full h-[80px] flex justify-around items-center">
          <div className="flex items-center gap-4">
            <img className="w-10 aspect-square" src={kanban} alt="" />
            <h1 className="text-4xl">Kanban Kanban</h1>
          </div>
          <div>
            <Link to={'/auth'}><Button>Join for Free</Button></Link>
          </div>
        </div>
        <div className="flex items-center justify-center h-[calc(100vh-90px)]">
          <div className="w-3/4 h-3/4 border-4 border-solid border-blue-500"></div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
