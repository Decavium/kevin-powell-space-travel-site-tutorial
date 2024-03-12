'use client'

import { useState } from 'react';
import Image from 'next/image';
import Tabs, { tabObj } from '../tabs';
import { getDestination } from '../../lib/actions';

export default function DestinationTabs() {
    const destination = getDestination();

    const [currentTab, setCurrentTab] = useState(0);

    return (
        <>
            <Tabs tabs={destination?.map((tab) => { let tabName: tabObj = { name: tab.name }; return tabName })} setCurrentTab={setCurrentTab} />
            {destination?.map((tab, index) => (
                currentTab == index &&
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

// {name: string}