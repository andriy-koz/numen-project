import {useState, useEffect} from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const updateIsMobile = (e) => {
      const width = e.target.innerWidth;

      setIsMobile(width < 768);
    };

    window.addEventListener("resize", (e) => updateIsMobile(e));

    return () => window.removeEventListener("resize", (e) => updateIsMobile(e));
  }, []);

  return isMobile;
};

export default useIsMobile;
