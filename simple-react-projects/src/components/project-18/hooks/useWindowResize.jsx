import { useEffect, useState } from "react";

export function useWindowResize ()  {

    // saving the dimension state
    const [dimensions, setDimensions] = useState(
        {
            width : window.innerWidth,
            height : window.innerHeight
        }
    );
    
    // updating the dimension state on window resize event

    useEffect(
        () => {
            const handleResize = () => {
                setDimensions({
                    width : window.innerWidth,
                    height : window.innerHeight
                });
            };
            
            window.addEventListener('resize', handleResize);
            
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        },
        []
    );
    
    // returning the current dimension state
    return dimensions;
};