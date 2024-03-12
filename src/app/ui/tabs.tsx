'use client'

import {  useState } from "react";

export interface tabObj {
    name: string;
}

type Props = {
    tabs: tabObj[];
    setCurrentTab?: any;
}

export default function Tabs({ tabs, setCurrentTab }: Props) {

    const [selectedElement, setSelectedElement] = useState(0);

    const isSelected = (index: number) => index === selectedElement ? true : false;

    const handleOnClick = (index: number) => {
        setSelectedElement(index);
        setCurrentTab(index);
    }

    return (
        <div className="tab-list underline-indicators flex">
            {tabs.map((tab, index) => {
                return (
                    <button
                        aria-selected={isSelected(index)}
                        key={tab.name}
                        className={`uppercase text-accent letter-spacing-2 bg-dark`}
                        onClick={() => handleOnClick(index)}
                    >
                        <p>{tab.name}</p>
                    </button>
                );
            })}
        </div>
    );
}