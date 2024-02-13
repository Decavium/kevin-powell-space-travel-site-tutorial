interface numberObj {
    name: string;
}

type Props = {
    numbers: numberObj[]
}

export default function Numbers({ numbers }: Props) {

    const isSelected = (index: number) => index === 0 ? true : false;

    return (
        <div className="number-indicators grid fs-600" style={{ fontFamily:"--ff-serif"}}>
            {numbers.map((numberButton, index) => {
                return (
                    <button
                        aria-selected={isSelected(index)}
                        key={numberButton.name}
                    >
                        <span className="sr-only">{numberButton.name}</span><p>{index + 1}</p>
                    </button>
                );
            })}
        </div>
    );
}