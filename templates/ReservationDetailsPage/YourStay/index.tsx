import { useState } from "react";
import Select from "@/components/Select";

const durations = [
    {
        id: "0",
        title: "2 Nights",
    },
    {
        id: "1",
        title: "3 Nights",
    },
    {
        id: "2",
        title: "4 Nights",
    },
];

type YourStayProps = {};

const YourStay = ({}: YourStayProps) => {
    const [duration, setDuration] = useState(durations[0]);

    return (
        <div className="sticky top-6 shrink-0 w-[25.75rem] p-6 border border-n-700 bg-white text-n-600 2xl:w-[22rem] xl:w-[20rem] lg:w-full">
            <div className="mb-5 text-h4-libre text-primary-500">Your Stay</div>
            <div className="flex mb-5">
                <div className="mr-12 xl:mr-8 lg:mr-12">
                    <div className="mb-3">Check-in</div>
                    <div>After 2:00 PM</div>
                </div>
                <div className="">
                    <div className="mb-3">Check-out</div>
                    <div>Before 12:00 PM</div>
                </div>
            </div>
            <div className="mb-5">
                <div className="mb-3">
                    Sun, Mar 26, 2023 - Tue, Mar 28, 2023
                </div>
                <div>2 Adults</div>
            </div>
            <div className="mb-5">
                <div className="flex justify-between mb-2">
                    <div>1 King Bed Junior Suite</div>
                    <div>$1,120.00</div>
                </div>
                <div>Best Available Rate</div>
            </div>
            <Select
                className="mb-5"
                value={duration}
                onChange={setDuration}
                items={durations}
                simple
            />
            <div className="flex">
                <button className="text-14r text-n-600 transition-colors hover:text-n-500">
                    Edit
                </button>
                <div className="mx-3 text-n-100">|</div>
                <button className="text-14r text-n-600 transition-colors hover:text-n-500">
                    Remove
                </button>
            </div>
            <div className="flex justify-between mt-5 pt-5 border-t border-n-100 text-h4-libre text-primary-500">
                <div>Total:</div>
                <div>$1,120.00</div>
            </div>
        </div>
    );
};

export default YourStay;
