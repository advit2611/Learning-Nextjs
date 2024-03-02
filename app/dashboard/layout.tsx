import React from "react";
import Link from "next/link";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayouts: React.FC<DashBoardLayoutProps> = (props) => {
  return (
    <div>
      <nav className="bg-white text-black py-3 px-5 flex justify-between items-center">
        <h1 className="text-xl">Home</h1>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About Me</li>
          <li>Contact Me</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className=" flex">
        <div className="h-screen bg-slate-700 w-[20vw] text-slate-300 py-4">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/dashboard/todos"}>Todos</Link>
            </li>
            <li>
              <Link href={"/users"}>Users</Link>
            </li>
            <li>
              <Link href={"/dashboard/profile"}>Profile</Link>
            </li>
          </ul>
        </div>
        <div className="px-5 max-h-screen overflow-auto">{props.children}</div>
        
      </div>
    </div>
  );
};

export default DashBoardLayouts;
