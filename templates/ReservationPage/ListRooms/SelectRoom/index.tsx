import { useState } from "react";
import Select from "@/components/Select";
import Icon from "@/components/Icon";
import Filters from "../Filters";

const options = [
    {
        id: "0",
        title: "Special Codes or Rates",
    },
    {
        id: "1",
        title: "Rooms",
    },
    {
        id: "2",
        title: "Rates",
    },
];

const sorting = [
    {
        id: "0",
        title: "Special Codes or Rates",
    },
    {
        id: "1",
        title: "Lowest Price",
    },
    {
        id: "2",
        title: "Highest Price",
    },
];

type SelectRoomProps = {};

const SelectRoom = ({}: SelectRoomProps) => {
    const [option, setOption] = useState(options[0]);
    const [sort, setSort] = useState("");
    const [visibleFilters, setVisibleFilters] = useState<boolean>(false);

    return (
        <div className="mt-9">
            <div className="mb-4 text-h4-libre text-primary-500">
                Select a Room
            </div>
            <div className="flex items-end px-6 py-8 bg-white border border-n-100 space-x-16 2xl:space-x-6 xl:space-x-0 md:block md:space-y-6">
                <div className="flex-1 xl:flex-auto xl:w-[37%] xl:pr-4 md:w-full">
                    <div className="mb-1.5 text-16m text-primary-500">
                        View Result By
                    </div>
                    <Select
                        className="shrink-0"
                        value={option}
                        onChange={setOption}
                        items={options}
                        simple
                    />
                </div>
                <div className="flex-1 xl:flex-auto xl:w-[37%] xl:pr-4 md:w-full">
                    <div className="mb-1.5 text-16m text-primary-500">
                        Sort By
                    </div>
                    <Select
                        className="shrink-0"
                        placeholder="Recommended"
                        value={sort}
                        onChange={setSort}
                        items={sorting}
                        simple
                    />
                </div>
                <div className="flex-1 xl:flex-auto xl:w-[26%] md:w-full">
                    <button
                        className="inline-flex items-center text-14r text-n-600"
                        onClick={() => setVisibleFilters(!visibleFilters)}
                    >
                        Show Fillter
                        <Icon
                            className={`shrink-0 ml-3 fill-primary-500 transition-transform ${
                                visibleFilters ? "rotate-180 md:rotate-0" : ""
                            }`}
                            name="arrow-down"
                        />
                    </button>
                </div>
            </div>
            <Filters
                visible={visibleFilters}
                onClose={() => setVisibleFilters(false)}
            />
        </div>
    );
};

export default SelectRoom;
