/* 
useEffect:
-----------
it s a hook function that tells React to do something when :
    1 - this component re render                                   OR
    2 - this component mount(first rendering calls mounting)       OR
    3 - state of variable 

example:
---------
useEffect(() => {
    console.log("Component re rendered");
});    // this will run with every component reloading (re-rendering)
************************************************************************************************
useEffect(() => {
    console.log("Component Mounted");
}, []);// this will run when the component mounts
************************************************************************************************
useEffect(() => {
    console.log("state of variable");
}, [dependencies]); // this will be used when the component mount and when the dependencies are changed its value
*/
/* 
Use :
------
1. To fetch data from an API or a database.
2. To perform some cleanup when the component unmounts.
3. in real time application components
*/
import React from "react";

function Page() {
  return (
    <div className="mt-16 px-6">
      <div className="container mx-auto">
        Page
      </div>
    </div>
  );
}
export default Page;
