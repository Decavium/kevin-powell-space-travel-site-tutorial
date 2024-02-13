interface tabObj {
    name: string;
    selected?: boolean;
}

type Props = {
    tabs: tabObj[]
}

export default function Tabs({ tabs }: Props) {

    const isSelected = (selected?: boolean) => selected === true ? true : false; 

    return (
        <div className="tab-list underline-indicators flex">
            {tabs.map((tab) => {
                return (
                    <button
                        aria-selected={isSelected(tab.selected)}
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