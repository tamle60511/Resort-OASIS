import { useState } from "react";
import AnimateHeight from "react-animate-height";

type ItemType = {
    title: string;
    content: React.ReactNode;
};

type FaqItemProps = {
    item: ItemType;
};

const FaqItem = ({ item }: FaqItemProps) => {
    const [height, setHeight] = useState<any>(0);

    return (
        <div className="border-b border-n-200">
            <div
                className={`relative py-5 pr-10 text-16m cursor-pointer before:absolute before:top-1/2 before:right-1 before:w-4 before:h-0.5 before:-translate-y-1/2 before:bg-primary-500 before:rounded after:absolute after:top-1/2 after:right-[0.6875rem] after:w-0.5 after:h-4 after:-translate-y-1/2 after:bg-primary-500 after:rounded after:transition-transform ${
                    height === 0 ? "after:rotate-0" : "after:rotate-90"
                }`}
                onClick={() => setHeight(height === 0 ? "auto" : 0)}
            >
                {item.title}
            </div>
            <AnimateHeight duration={500} height={height}>
                <div className="pb-5 text-16r">{item.content}</div>
            </AnimateHeight>
        </div>
    );
};

export default FaqItem;
