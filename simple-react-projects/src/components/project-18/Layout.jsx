import React  from "react";
import { useWindowResize } from "./hooks/useWindowResize";
function Layout() {
  const dimensions = useWindowResize();
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6 flex flex-col items-center">
            {
                `Dimensions: width: ${dimensions.width}px, height: ${dimensions.height}px`
            }
        </div>
      </div>
    </div>
  );
}

export default Layout;
