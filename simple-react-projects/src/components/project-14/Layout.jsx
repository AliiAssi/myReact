import React, { useCallback, useEffect, useState } from "react";
import Board from "./Board";

function Layout() {

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
            <Board />
        </div>
      </div>
    </div>
  );
}

export default Layout;
