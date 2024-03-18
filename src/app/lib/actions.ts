import { useState, useEffect, useLayoutEffect } from "react";
import { StaticImageData } from "next/image.js";
import { destination, crew, technology } from './data.js';

const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
        return window.matchMedia(query).matches;
    }
    return false;
};

/**
 * Returns true if the given media query matches.
 * Returns undefined until the first render occured to prevent hydration errors.
 * @param query A media query as string
 * @returns
 * @author Adrian Fahrbach
 * @link https://github.com/vercel/next.js/discussions/21379
 */
export function useMediaQuery(query: string): boolean | undefined {
    const [hasMatch, setHasMatches] = useState<boolean>(getMatches(query));
    const [initialLoad, setInitialLoad] = useState(true);

    useLayoutEffect(() => {
        if (initialLoad) {
            setInitialLoad(false);
        }
    }, [initialLoad]);

    function handleChange() {
        setHasMatches(getMatches(query));
    }

    useEffect(() => {
        const matchMedia = window.matchMedia(query);
        handleChange();
        matchMedia.addEventListener('change', handleChange);
        return () => {
            matchMedia.removeEventListener('change', handleChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return initialLoad ? undefined : hasMatch;
}


interface DestinationObj {
    name: string;
    images: {
        png: StaticImageData;
        webp: StaticImageData;
    };
    description: string;
    distance: string;
    travel: string;
}

/**
 * Returns destination data as an array of destination objects.
 * @returns
 */
export function getDestination(): DestinationObj[] {
    return destination;
}

interface CrewObj {
    name: string;
    images: {
        png: StaticImageData;
        webp: StaticImageData;
    };
    role: string;
    bio: string;
}

/**
 * Returns crew data as an array of crew objects.
 * @returns
 */
export function getCrew(): CrewObj[] {
    return crew;
}

export interface TechnologyObj {
    name: string;
    images: {
        portrait: StaticImageData;
        landscape: StaticImageData;
    };
    description: string;
}

/**
 * Returns technology data as an array of technology objects.
 * @returns
 */
export function getTechnology(): TechnologyObj[] {
    return technology;
}