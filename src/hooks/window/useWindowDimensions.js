import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  if (width > 600){
    return 'desktop'
  }
  else{
    return 'mobile'
  }
  // return {
   // width,
  //  height
 // };
}

const useWindowDimensions =() => {
  const [windowDimensions, setWindowDimensions] = useState(useWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions