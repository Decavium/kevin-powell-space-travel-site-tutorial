'use client'

import { useState } from 'react';
import Image from 'next/image';
import Numbers, { numberObj } from '../numbers';
import { getTechnology } from '../../lib/actions';

export default function TechnologyNumbers() {
    const technologies = getTechnology();

    const [currentNumber, setCurrentNumber] = useState(0);

    return (
        <>
            <Numbers
                numbers={technologies?.map((technology) => { let numberName: numberObj = { name: technology.name }; return numberName })}
                setCurrentNumber={setCurrentNumber}
            />
            {technologies?.map((technology, index) => (
                currentNumber == index &&
                <article key={technology.name} className='crew-details flow'>
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase' style={{ fontFamily: "--ff-serif" }}>the terminology ...</h2>
                        <p className='fs-700 uppercase' style={{ fontFamily: "--ff-serif" }}>{technology.name}</p>
                    </header>
                    <p className='text-accent'>{technology.description}</p>
                </article>
            ))}
            {technologies?.map((technology, index) => (
                currentNumber == index &&
                <Image
                    key={technology.name}
                    src={technology.images.portrait}
                    className=""
                    width={575}
                    height={700}
                    alt={technology.name}
                />
            ))}
        </>
    );
}