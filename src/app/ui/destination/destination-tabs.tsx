'use client'

import Image from 'next/image';
import { getAllDestinations } from '../../lib/actions';

export default function DestinationTabs() {
    const destinations = getAllDestinations();

    const currentTab = true;

    return (
        <>
            {destinations?.map((tab) => (
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
