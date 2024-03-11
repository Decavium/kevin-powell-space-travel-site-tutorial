'use client'

import Image from 'next/image';
import { getDestination } from '../../lib/actions';

export default function DestinationTabs() {
    const destination = getDestination();

    const currentTab = true;

    return (
        <>
            {destination?.map((tab) => (
                // currentTab && 
                <div
                    key={tab.name}
                    className=""
                >
                    <Image
                        src={tab.images.webp}
                        className=""
                        width={445}
                        height={445}
                        alt={`An artist's depiction of ${tab.name == "Moon" ? "the" : ""} ${tab.name}.`}
                    />
                    <p></p>

                </div>
            ))}
        </>
    );
}
