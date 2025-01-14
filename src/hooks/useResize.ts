import { useEffect, useState } from 'react';
import { ScreenBreakpoint } from '../const/consts';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const win = event.target as Window;
      setWidth(win.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    isScreenLg: width <= ScreenBreakpoint.LG,
    isScreenXl: width <= ScreenBreakpoint.XL,
    isScreenTb: width <= ScreenBreakpoint.TB,
  };
};
