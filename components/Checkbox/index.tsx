import Icon from "@/components/Icon";

type CheckboxProps = {
    className?: string;
    label?: string;
    value: any;
    onChange: any;
};

const Checkbox = ({ className, label, value, onChange }: CheckboxProps) => (
    <label
        className={`group relative flex items-start select-none cursor-pointer tap-highlight-color ${
            className || ""
        }`}
    >
        <input
            className="absolute top-0 left-0 opacity-0 invisible"
            type="checkbox"
            value={value}
            onChange={onChange}
            checked={value}
        />
        <span
            className={`relative flex justify-center items-center shrink-0 w-6 h-6 mr-3.5 border border-n-300 transition-colors group-hover:border-primary-500 ${
                value ? "bg-primary-500 !border-primary-500" : "bg-transparent"
            }`}
        >
            <Icon
                className={`fill-white transition-opacity ${
                    value ? "opacity-100" : "opacity-0"
                }`}
                name="check"
            />
        </span>
        {label && <span className="text-14r text-n-700">{label}</span>}
    </label>
);

export default Checkbox;
