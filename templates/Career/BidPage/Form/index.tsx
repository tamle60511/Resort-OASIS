import { useState } from "react";
import Field from "@/components/Field";
import Result from "./Result";

type FormProps = {};

const Form = ({}: FormProps) => {
    const [success, setSuccess] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");

    return (
        <div className="py-20">
            <div className="container-lg">
                {success ? (
                    <Result />
                ) : (
                    <form
                        className=""
                        action=""
                        onSubmit={() => console.log("Submit")}
                    >
                        <div className="mb-10 text-h4-libre text-primary-500">
                            Director of Sales & Marketing.
                        </div>
                        <div className="flex -mx-3 mb-6 md:block md:m-0 md:mb-5">
                            <Field
                                className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0 md:mb-5"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <Field
                                className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex -mx-3 mb-6 md:block md:m-0 md:mb-5">
                            <Field
                                className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0 md:mb-5"
                                placeholder="Phone Number"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <Field
                                className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex -mx-3 mb-6 md:block md:m-0 md:mb-5">
                            <Field
                                className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0 md:mb-5"
                                placeholder="Country/Region"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                required
                            />
                            <Field
                                className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4 text-16m text-n-600">
                            Upload Your Resume*
                        </div>
                        <div className="flex -mx-3 mb-10 lg:block lg:mx-0 md:mb-5">
                            <div className="w-[calc(50%-1.5rem)] mx-3 p-2 bg-white border border-n-100 lg:w-full lg:mx-0">
                                <div className="font-dm-serif">
                                    <input
                                        className="file:mr-4 file:px-6 file:py-2 file:bg-transparent file:border file:border-n-300 file:font-sans file:text-[.9rem] file:font-medium file:text-primary-500 file:transition-colors file:hover:bg-primary-500 file:hover:text-white md:file:px-4"
                                        type="file"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button
                                className="btn-primary h-10 md:w-full"
                                onClick={() => setSuccess(true)}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Form;
