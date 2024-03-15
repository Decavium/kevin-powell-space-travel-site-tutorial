'use client'

import { useState } from "react";

export interface numberObj {
    name: string;
}

type Props = {
    numbers: numberObj[];
    setCurrentNumber?: any;
}

export default function Numbers({ numbers, setCurrentNumber }: Props) {

    const [selectedElement, setSelectedElement] = useState(0);

    const isSelected = (index: number) => index === selectedElement ? true : false;

    const handleOnClick = (index: number) => {
        setSelectedElement(index);
        setCurrentNumber != null && setCurrentNumber(index);
    }

    return (
        <div className="number-indicators grid" style={{ fontFamily: "--ff-serif" }}>
            {numbers.map((numberButton, index) => {
                return (
                    <button
                        role="tab"
                        aria-selected={isSelected(index)}
                        key={numberButton.name}
                        className="fs-600 text-white"
                        onClick={() => handleOnClick(index)}
                    >
                        <span className="sr-only">{numberButton.name}</span><p>{index + 1}</p>
                    </button>
                );
            })}
        </div>
    );
}