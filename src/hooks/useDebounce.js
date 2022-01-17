import { useRef } from 'react';

const useDebounce = () => {
    const typingSearchRef = useRef();

    return (cb, time = 500) => {
        if (typingSearchRef.current) {
            clearTimeout(typingSearchRef.current);
        }

        typingSearchRef.current = setTimeout(() => {
            cb();
        }, time);
    };
};

export default useDebounce;
