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
            {destination?.map((tab, index) => (
                currentTab == index &&
                <Image
                    key={tab.name}
                    src={tab.images.webp}
                    className=""
                    width={445}
                    height={445}
                    alt={`An artist's depiction of ${tab.name == "Moon" ? "the" : ""} ${tab.name}.`}
                />
            ))}
            <Tabs
                tabs={destination?.map((tab) => { let tabName: tabObj = { name: tab.name }; return tabName })}
                setCurrentTab={setCurrentTab}
            />
            {destination?.map((tab, index) => (
                currentTab == index &&
                <article key={tab.name} className='destination-info flow'>
                    <h2 className='fs-800 uppercase' style={{ fontFamily: "--ff-serif" }}>{tab.name}</h2>
                    <p>{tab.description}</p>
                    <div className='destination-meta flex'>
                        <div>
                            <h3 className='text-accent fs-200 uppercase'>Avg. Distance</h3>
                            <p className='uppercase' style={{ fontFamily: "--ff-serif" }}>{tab.distance}</p>
                        </div>
                        <div>
                            <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
                            <p className='uppercase' style={{ fontFamily: "--ff-serif" }}>{tab.travel}</p>
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}