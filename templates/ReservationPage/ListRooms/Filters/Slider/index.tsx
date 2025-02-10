import { Range, getTrackBackground } from "react-range";

type SliderProps = {
    values: number[];
    onChange: (values: number[]) => void;
};

const Slider = ({ values, onChange }: SliderProps) => {
    const stepPrice = 100;
    const minPrice = 0;
    const maxPrice = 15000;

    const handleInputChange = (index: number, inputValue: string) => {
        const newValue = parseInt(inputValue.replace(/\D/g, ""), 10) || 0;
        const newValues = [...values];
        newValues[index] = newValue;
        onChange(newValues);
    };

    return (
        <div className="">
            <div className="max-w-[17rem]">
                <Range
                    step={stepPrice}
                    min={minPrice}
                    max={maxPrice}
                    values={values}
                    onChange={(newValues) => onChange(newValues)}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                display: "flex",
                                height: "1rem",
                                width: "100%",
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    width: "100%",
                                    height: "0.5rem",
                                    borderRadius: "0.25rem",
                                    background: getTrackBackground({
                                        values,
                                        colors: [
                                            "#E2E6E4",
                                            "#8a9b93",
                                            "#E2E6E4",
                                        ],
                                        min: minPrice,
                                        max: maxPrice,
                                    }),
                                    alignSelf: "center",
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            key={props.key}
                            style={{
                                ...props.style,
                                height: "1rem",
                                width: "1rem",
                                borderRadius: "50%",
                                backgroundColor: "white",
                                border: "1px solid #6E8177",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 4px rgba(0,0,0,.25)",
                                outline: "none",
                            }}
                        ></div>
                    )}
                />
            </div>
            <div className="flex justify-between max-w-[23.625rem] mt-4">
                <div className="">
                    <div className="mb-1 text-n-600">Price range from</div>
                    <div className="w-28">
                        <input
                            className="w-full h-10 border border-n-100 text-center text-16m text-n-700 outline-none"
                            type="text"
                            value={`${values[0]}$`}
                            onChange={(e) =>
                                handleInputChange(0, e.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="">
                    <div className="mb-1 text-n-600">Price range to</div>
                    <div className="w-28">
                        <input
                            className="w-full h-10 border border-n-100 text-center text-16m text-n-700 outline-none"
                            type="text"
                            value={`${values[1]}$`}
                            onChange={(e) =>
                                handleInputChange(1, e.target.value)
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
