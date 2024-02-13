interface dotObj {
    name: string;
}

type Props = {
    dots: dotObj[]
}

export default function Tabs({ dots }: Props) {

    const isSelected = (index: number) => index === 0 ? true : false;

    return (
        <div className="dot-indicators flex">
            {dots.map((dot, index) => {
                return (
                    <button
                        aria-selected={isSelected(index)}
                        key={dot.name}
                    >
                        <span className="sr-only">{dot.name}</span>
                    </button>
                );
            })}
        </div>
    );
}