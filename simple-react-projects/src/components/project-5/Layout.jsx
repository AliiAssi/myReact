import React, { useState } from "react";
import ProductList from "./ProductList";

function Layout() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6 flex space-x-2">
            <ProductList />
        </div>
      </div>
    </div>
  );
}

export default Layout;
