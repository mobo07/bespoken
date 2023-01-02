import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactElement | null;
}

//Compoonent to scroll to top of page on every page transition
const ScrollToTop = ({ children }: Props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;
