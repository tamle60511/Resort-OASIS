import { useState } from "react";
import Field from "@/components/Field";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";
import Position from "./Position";

import { career } from "@/mocks/career";

const regions = [
    {
        id: "0",
        title: "All Region",
    },
    {
        id: "1",
        title: "Asia",
    },
    {
        id: "2",
        title: "Europe",
    },
];

type CareerProps = {};

const Career = ({}: CareerProps) => {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState(regions[0]);

    const [checkboxes, setCheckboxes] = useState([
        {
            id: "0",
            title: "Contract",
            isChecked: false,
        },
        {
            id: "1",
            title: "Full-time",
            isChecked: false,
        },
        {
            id: "2",
            title: "Intership",
            isChecked: false,
        },
        {
            id: "3",
            title: "Part-time",
            isChecked: false,
        },
        {
            id: "4",
            title: "Temporary",
            isChecked: false,
        },
    ]);

    const handleCheckboxChange = (checkboxId: string) => {
        const updatedCheckboxes = [...checkboxes];
        const checkboxIndex = updatedCheckboxes.findIndex(
            (checkbox) => checkbox.id === checkboxId
        );
        updatedCheckboxes[checkboxIndex].isChecked =
            !updatedCheckboxes[checkboxIndex].isChecked;
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div className="py-20 md:pt-10">
            <div className="container-lg">
                <div className="mb-8">
                    <Field
                        className="mb-4"
                        classInput="placeholder:text-n-200"
                        placeholder="Keywords"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                    />
                    <Select
                        className="z-1"
                        value={region}
                        onChange={setRegion}
                        items={regions}
                    />
                    <div className="flex flex-wrap -ml-4">
                        {checkboxes.map((checkbox) => (
                            <Checkbox
                                className="mt-4 ml-4"
                                label={checkbox.title}
                                key={checkbox.id}
                                value={checkbox.isChecked}
                                onChange={() =>
                                    handleCheckboxChange(checkbox.id)
                                }
                            />
                        ))}
                    </div>
                </div>
                <div className="">
                    {career.map((position) => (
                        <Position item={position} key={position.id} />
                    ))}
                </div>
                <div className="mt-14 text-center lg:mt-10">
                    <button className="btn-secondary btn-lg min-w-[18.6rem] lg:min-w-full">
                        Load more listings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Career;
