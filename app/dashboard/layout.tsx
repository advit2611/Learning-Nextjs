import React from "react";

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
      <div className="flex">
        <div className="h-screen bg-slate-700 w-[20vw] text-slate-300 py-4">
          <ul className="flex flex-col gap-2">
            <li>Dashboard</li>
            <li>Credits</li>
            <li>Profile</li>
            <li>Payments</li>
          </ul>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default DashBoardLayouts;
