import { useState } from "react";
import AnimateHeight from "react-animate-height";

type ItemType = {
    id: string;
    title: string;
    content: string;
};

type AccordProps = {
    className?: string;
    title: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
};

const Accord = ({ className, title, defaultOpen, children }: AccordProps) => {
    const [height, setHeight] = useState<any>(defaultOpen ? "auto" : 0);

    return (
        <div className={`${className || ""}`}>
            <div
                className="flex h-14 border border-n-100 cursor-pointer"
                onClick={() => setHeight(height === 0 ? "auto" : 0)}
            >
                <div
                    className={`relative w-14 border-r border-n-100 before:absolute before:top-1/2 before:left-1/2 before:w-4 before:h-0.5 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-primary-500 before:rounded after:absolute after:top-1/2 after:left-1/2 after:w-0.5 after:h-4 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-primary-500 after:rounded after:transition-transform ${
                        height === 0 ? "after:rotate-0" : "after:rotate-90"
                    }`}
                ></div>
                <div className="grow self-center px-4 py-2 text-16m">
                    {title}
                </div>
            </div>
            <AnimateHeight duration={500} height={height}>
                <div className="pt-6">{children}</div>
            </AnimateHeight>
        </div>
    );
};

export default Accord;
