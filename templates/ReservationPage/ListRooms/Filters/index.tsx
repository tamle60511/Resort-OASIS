import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Icon from "@/components/Icon";
import Checkbox from "@/components/Checkbox";
import Slider from "./Slider";

import { filters } from "@/constants/filters";

type FiltersProps = {
    visible: boolean;
    onClose: () => void;
};

const Filters = ({ visible, onClose }: FiltersProps) => {
    const [checkboxes, setCheckboxes] = useState(filters);
    const [values, setValues] = useState([2000, 10000]);

    const ref = useRef(null);

    const handleCheckboxChange = (groupId: string, checkboxId: string) => {
        const updatedCheckboxes = [...checkboxes];
        const groupIndex = updatedCheckboxes.findIndex(
            (group) => group.id === groupId
        );
        const checkboxIndex = updatedCheckboxes[groupIndex].checkboxs.findIndex(
            (checkbox) => checkbox.id === checkboxId
        );
        updatedCheckboxes[groupIndex].checkboxs[checkboxIndex].isChecked =
            !updatedCheckboxes[groupIndex].checkboxs[checkboxIndex].isChecked;
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <CSSTransition
            classNames={{
                appear: "md:opacity-0",
                appearActive:
                    "md:transition-opacity md:duration-300 md:opacity-100",
                enter: "md:opacity-0",
                enterActive: "md:duration-300 md:opacity-100",
                exitActive: "md:opacity-0",
            }}
            in={visible}
            nodeRef={ref}
            timeout={400}
            unmountOnExit
        >
            <div
                className="mt-4 p-8 bg-white border border-n-100 md:fixed md:inset-0 md:z-[100] md:mt-0 md:overflow-auto md:px-6"
                ref={ref}
            >
                <div className="flex items-center justify-between mb-10 md:mb-8">
                    <div className="text-16m">Filter</div>
                    <button className="group w-6 h-6" onClick={onClose}>
                        <Icon
                            className="fill-n-500 transition-colors group-hover:fill-n-700"
                            name="close-fat"
                        />
                    </button>
                </div>
                <div className="flex flex-wrap md:block">
                    {checkboxes.map((group) => (
                        <div
                            className="w-1/2 mb-10 pb-10 pr-4 border-b border-n-100 md:w-full md:m-0 md:mb-8 md:p-0 md:border-b-0"
                            key={group.id}
                        >
                            <div className="mb-4 text-16m text-primary-500">
                                {group.title}
                            </div>
                            <div className="space-y-4">
                                {group.checkboxs.map((checkbox) => (
                                    <Checkbox
                                        label={checkbox.title}
                                        key={checkbox.id}
                                        value={checkbox.isChecked}
                                        onChange={() =>
                                            handleCheckboxChange(
                                                group.id,
                                                checkbox.id
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="w-1/2 mb-10 pb-10 pr-4 border-b border-n-100 md:w-full md:m-0 md:p-0 md:border-b-0">
                        <div className="mb-4 text-16m text-primary-500">
                            Price (avg./night)
                        </div>
                        <Slider
                            values={values}
                            onChange={(newValues) => setValues(newValues)}
                        />
                    </div>
                </div>
                <div className="flex justify-end items-center md:block md:mt-8">
                    <div className="mr-10 md:mr-0 md:mb-6 md:text-center">
                        18 matching rooms
                    </div>
                    <button className="btn-primary btn-lg min-w-[14.75rem] md:min-w-full">
                        Apply
                    </button>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Filters;
