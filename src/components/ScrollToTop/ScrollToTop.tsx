import { useLocation } from "react-router-dom";
import {useLayoutEffect, ReactNode} from 'react';

const ScrollToTop = ({children}: {children: ReactNode}) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default ScrollToTop;