import { Listbox, Transition } from "@headlessui/react";
import Icon from "@/components/Icon";

type ItemsType = {
    id: string;
    title: string;
};

type SelectProps = {
    className?: string;
    placeholder?: string;
    value: any;
    onChange: any;
    items: ItemsType[];
    simple?: boolean;
};

const Select = ({
    className,
    placeholder,
    value,
    onChange,
    items,
    simple,
}: SelectProps) => (
    <Listbox
        className={`relative ui-open:z-3 ${className || ""}`}
        value={value}
        onChange={onChange}
        as="div"
    >
        <Listbox.Button
            className={`justify-between items-center text-n-600 outline-none ${
                simple
                    ? "inline-flex text-14r"
                    : "flex w-full h-13.5 px-4 border border-n-100 bg-white text-16r transition-colors ui-open:border-n-200"
            }`}
        >
            <div className="truncate">{value ? value.title : placeholder}</div>
            <Icon
                className="shrink-0 ml-2 fill-primary-500 transition-transform ui-open:rotate-180"
                name="arrow-down"
            />
        </Listbox.Button>
        <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Listbox.Options
                className={`absolute top-full z-2 bg-white outline-none ${
                    simple
                        ? "-left-6 min-w-[14rem] mt-2 p-6 space-y-4 shadow-[0.0625rem_0.3125rem_0.75rem_0_rgba(0,0,0,0.30)]"
                        : "left-0 right-0 mt-0.5 border border-n-200"
                }`}
            >
                {items.map((item) => (
                    <Listbox.Option
                        className={`text-n-600 transition-colors cursor-pointer ${
                            simple
                                ? "text-14r text-nowrap text-n-700 hover:text-n-500 ui-selected:!text-primary-500"
                                : "w-full px-4 py-3 text-16r hover:bg-n-100/30 ui-selected:!bg-n-100/80"
                        }`}
                        key={item.id}
                        value={item}
                    >
                        {item.title}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Transition>
    </Listbox>
);

export default Select;
