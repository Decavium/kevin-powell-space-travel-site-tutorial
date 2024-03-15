'use client'

import { useState } from 'react';
import Image from 'next/image';
import Dots, { dotObj } from '../dots';
import { getCrew } from '../../lib/actions';

export default function CrewDots() {
    const crew = getCrew();

    const [currentDot, setCurrentDot] = useState(0);

    return (
        <>
            <Dots
                dots={crew?.map((dot) => { let dotName: dotObj = { name: dot.name }; return dotName })}
                setCurrentDot={setCurrentDot}
            />
            {crew?.map((dot, index) => (
                currentDot == index &&
                <article key={dot.name} className='crew-details flow'>
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase' style={{ fontFamily: "--ff-serif" }}>{dot.role}</h2>
                        <p className='fs-700 uppercase' style={{ fontFamily: "--ff-serif" }}>{dot.name}</p>
                    </header>
                    <p className='text-accent'>{dot.bio}</p>
                </article>
            ))}
            {crew?.map((dot, index) => (
                currentDot == index &&
                <Image
                    key={dot.name}
                    src={dot.images.webp}
                    className=""
                    width={575}
                    height={700}
                    alt={dot.name}
                />
            ))}
        </>
    );
}