import { useState, useEffect } from "react";

/**
 * Custom hook to handle horizontal scrolling behavior
 * @param {Object} scrollRef - The ref object for the scrollable container
 * @returns {Object} - Returns canScrollLeft, canScrollRight, scrollLeft, and scrollRight
 */
const useHorizontalScroll = (scrollRef) => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    /**
     * Checks the current scroll position and updates scroll states
     */
    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 1); // Enable left scroll if not at the start
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // Enable right scroll if not at the end
        }
    };

    /**
     * Scroll the container to the left by 200px
     */
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -200,
                behavior: 'smooth',
            });
        }
    };

    /**
     * Scroll the container to the right by 200px
     */
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 200,
                behavior: 'smooth',
            });
        }
    };

    /**
     * Adds event listener on mount to check scroll position and cleans up on unmount
     */
    useEffect(() => {
        const scrollableElement = scrollRef.current;
        if (scrollableElement) {
            scrollableElement.addEventListener('scroll', checkScrollPosition);
            checkScrollPosition(); // Initial check when the component mounts
        }

        return () => {
            if (scrollableElement) {
                scrollableElement.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, [scrollRef]);

    // Return scroll properties and methods
    return { canScrollLeft, canScrollRight, scrollLeft, scrollRight };
};

export default useHorizontalScroll;
