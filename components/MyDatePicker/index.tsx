import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "@/components/Icon";

type MyDatePickerProps = {
    className?: string;
    label?: string;
    selected: Date | null;
    onChange: (date: Date | null) => void;
} & ReactDatePickerProps;

const MyDatePicker = ({
    className,
    label,
    selected,
    onChange,
    ...props
}: MyDatePickerProps) => {
    const today = new Date();

    return (
        <div className={`${className || ""}`}>
            {label && <div className="py-2.5 text-16m text-n-600">{label}</div>}
            <div className="relative">
                <DatePicker
                    wrapperClassName="!block"
                    className="w-full h-13.5 pl-4 pr-12 bg-white border border-n-100 font-sans text-16r text-n-600 placeholder:text-n-600 transition-colors focus:border-n-200 outline-none"
                    dateFormat="MMM dd, yyyy"
                    selected={selected}
                    minDate={today}
                    onChange={onChange}
                    {...props}
                />
                <Icon
                    className="absolute top-1/2 right-3 -translate-y-1/2 fill-primary-500 pointer-events-none"
                    name="calendar"
                />
            </div>
        </div>
    );
};

export default MyDatePicker;
