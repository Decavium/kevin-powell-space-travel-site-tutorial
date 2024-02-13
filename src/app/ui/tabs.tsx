interface tabObj {
    name: string;
}

type Props = {
    tabs: tabObj[]
}

export default function Tabs({ tabs }: Props) {

    const isSelected = (index: number) => index === 0 ? true : false;

    return (
        <div className="tab-list underline-indicators flex">
            {tabs.map((tab, index) => {
                return (
                    <button
                        aria-selected={isSelected(index)}
                        key={tab.name}
                        className={`uppercase text-accent letter-spacing-2 bg-dark`}
                    >
                        <p>{tab.name}</p>
                    </button>
                );
            })}
        </div>
    );
}