import {useState, useEffect} from 'react';

const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window;
    if (width > 600) {
        return 'desktop'
    } else {
        return 'mobile'
    }
    // return {
    // width,
    //  height
    // };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log({windowDimensions})
    return windowDimensions;
}

export default useWindowDimensions