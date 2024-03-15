'use client'

import { useState } from "react";

export interface dotObj {
    name: string;
}

type Props = {
    dots: dotObj[];
    setCurrentDot?: any;
}

export default function Dots({ dots, setCurrentDot }: Props) {

    const [selectedElement, setSelectedElement] = useState(0);

    const isSelected = (index: number) => index === selectedElement ? true : false;

    const handleOnClick = (index: number) => {
        setSelectedElement(index);
        setCurrentDot != null && setCurrentDot(index);
    }

    return (
        <div className="dot-indicators flex">
            {dots.map((dot, index) => {
                return (
                    <button
                        role="tab"
                        aria-selected={isSelected(index)}
                        key={dot.name}
                        onClick={() => handleOnClick(index)}
                    >
                        <span className="sr-only">{dot.name}</span>
                    </button>
                );
            })}
        </div>
    );
}