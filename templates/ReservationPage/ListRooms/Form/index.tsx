import { useState } from "react";
import AnimateHeight from "react-animate-height";
import Select from "@/components/Select";
import MyDatePicker from "@/components/MyDatePicker";
import Icon from "@/components/Icon";
import Field from "@/components/Field";

const guests = [
    {
        id: "0",
        title: "1 Adult",
    },
    {
        id: "1",
        title: "2 Adults",
    },
    {
        id: "2",
        title: "2 Adult + 1 Child",
    },
];

const promocodes = [
    {
        id: "0",
        title: "Promo Code 1",
    },
    {
        id: "1",
        title: "Promo Code 2",
    },
    {
        id: "2",
        title: "Promo Code 3",
    },
];

type FormProps = {};

const Form = ({}: FormProps) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [guest, setGuest] = useState("");
    const [promocode, setPromocode] = useState("");
    const [code, setCode] = useState<string>("");
    const [height, setHeight] = useState<any>(0);

    return (
        <div className="p-6 bg-white border border-n-100">
            <div className="relative z-2 flex -mx-2.5 mb-5 md:block md:mx-0 md:space-y-6">
                <MyDatePicker
                    className="w-[calc(33.333%-1.25rem)] mx-2.5 md:w-full md:mx-0"
                    placeholderText="Check-in"
                    selected={startDate}
                    onChange={(date) => setStartDate(date as Date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
                <MyDatePicker
                    className="w-[calc(33.333%-1.25rem)] mx-2.5 md:w-full md:mx-0"
                    placeholderText="Check-out"
                    selected={endDate}
                    onChange={(date) => setEndDate(date as Date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
                <Select
                    className="z-1 w-[calc(33.333%-1.25rem)] mx-2.5 md:w-full md:mx-0"
                    placeholder="Guest(s)"
                    value={guest}
                    onChange={setGuest}
                    items={guests}
                />
            </div>
            <div className="text-right">
                <button
                    className="inline-flex text-14r"
                    onClick={() => setHeight(height === 0 ? "auto" : 0)}
                >
                    <span>Special Codes or Rates</span>
                    <Icon
                        className={`ml-3 fill-primary-500 transition-transform ${
                            height === 0 ? "rotate-0" : "rotate-180"
                        }`}
                        name="arrow-down"
                    />
                </button>
            </div>
            <AnimateHeight duration={500} height={height}>
                <div className="flex max-w-[35rem] pt-5 xl:max-w-full md:block">
                    <Select
                        className="shrink-0 md:mb-6"
                        placeholder="Promo Code"
                        value={promocode}
                        onChange={setPromocode}
                        items={promocodes}
                    />
                    <Field
                        className="grow -ml-0.25 md:ml-0"
                        classInput="relative placeholder:text-n-200 focus:z-1"
                        placeholder="Enter Code*"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-end items-center space-x-10 mt-5">
                    <button
                        className="text-14r text-primary-500 transition-colors hover:text-primary-400"
                        onClick={() => setHeight(0)}
                    >
                        Cancel
                    </button>
                    <button className="btn-secondary px-6">Apply</button>
                </div>
            </AnimateHeight>
        </div>
    );
};

export default Form;
