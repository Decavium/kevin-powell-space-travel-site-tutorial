'use client'

import { useState } from 'react';
import Image from 'next/image';
import Numbers, { numberObj } from '../numbers';
import { getTechnology, TechnologyObj, useMediaQuery } from '../../lib/actions';

export default function TechnologyNumbers() {
    const technologies = getTechnology();

    const [currentNumber, setCurrentNumber] = useState(0);

    return (
        <>
            {technologies?.map((technology, index) => (
                currentNumber == index &&
                <TechnologyImage
                    key={technology.name}
                    technology={technology}
                />
            ))}
            <Numbers
                numbers={technologies?.map((technology) => { let numberName: numberObj = { name: technology.name }; return numberName })}
                setCurrentNumber={setCurrentNumber}
            />
            {technologies?.map((technology, index) => (
                currentNumber == index &&
                <article key={technology.name} className='technology-meta flow'>
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase text-accent'>the terminology ...</h2>
                        <p className='fs-700 uppercase' style={{ fontFamily: "--ff-serif" }}>{technology.name}</p>
                    </header>
                    <p className='text-accent'>{technology.description}</p>
                </article>
            ))}

        </>
    );
}

interface TechnologyImageProps {
    technology: TechnologyObj;
}

export function TechnologyImage({ technology }: TechnologyImageProps) {

    // 45rem
    const isTablet = useMediaQuery(`(max-width: 720px)`);

    return (
        <>
            {(isTablet || isTablet === undefined) &&
                <Image
                    src={technology.images.landscape}
                    className=""
                    width={515}
                    height={527}
                    alt={technology.name}
                />}
            {(!isTablet || isTablet === undefined) &&
                <Image
                    src={technology.images.portrait}
                    className=""
                    width={768}
                    height={310}
                    alt={technology.name}
                />}
        </>
    );
}