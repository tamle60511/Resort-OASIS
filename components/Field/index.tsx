import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

type FieldProps = {
    className?: string;
    classInput?: string;
    label?: string;
    note?: string;
    textarea?: boolean;
    type?: string;
};

const Field = ({
    className,
    classInput,
    label,
    note,
    textarea,
    type,
    ...inputProps
}: FieldProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <div className={`${className || ""}`}>
            {label && <div className="py-2.5 text-16m text-n-600">{label}</div>}
            <div className={`relative ${textarea ? "text-0" : ""}`}>
                {textarea ? (
                    <textarea
                        className={twMerge(
                            `w-full h-[15.5rem] px-4 py-2.5 bg-white border border-n-100 font-sans text-base text-n-600 resize-none placeholder:text-n-600 transition-colors focus:border-n-200 outline-none ${
                                classInput || ""
                            }`
                        )}
                        {...inputProps}
                    ></textarea>
                ) : (
                    <input
                        className={twMerge(
                            `w-full h-13.5 px-4 bg-white border border-n-100 font-sans text-base text-n-600 placeholder:text-n-600 transition-colors focus:border-n-200 outline-none ${
                                classInput || ""
                            }`
                        )}
                        type={type || "text"}
                        {...inputProps}
                    />
                )}
            </div>
            {note && <div className="mt-2 text-14r">{note}</div>}
        </div>
    );
};

export default Field;
