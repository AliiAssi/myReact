import React, { useEffect, useState } from "react";
import Banner from "./Banner";


function Layout() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
        <Banner />
      {/* <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6 flex flex-col items-center">
            Project 8
        </div>
      </div> */}
    </div>
  );
}

export default Layout;
