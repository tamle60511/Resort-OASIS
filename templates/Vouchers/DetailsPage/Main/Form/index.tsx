import { useState } from "react";
import Link from "next/link";
import Select from "@/components/Select";
import Field from "@/components/Field";

const prefixes = [
    {
        id: "0",
        title: "Prefix 1",
    },
    {
        id: "1",
        title: "Prefix 2",
    },
    {
        id: "2",
        title: "Prefix 3",
    },
];

type FormProps = {};

const Form = ({}: FormProps) => {
    const [prefix, setPrefix] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form
            className="p-6 bg-white"
            action=""
            onSubmit={() => console.log("Submit")}
        >
            <div className="mb-6 text-h4-libre text-primary-500">
                Contact Info
            </div>
            <div className="flex mb-6 xl:-mx-3 md:block md:mx-0">
                <div className="flex w-[28.44rem] xl:w-[calc(50%-1.5rem)] xl:mx-3 md:block md:w-full md:mx-0 md:mb-6">
                    <Select
                        className="z-3 w-36 md:w-full md:mb-6"
                        placeholder="Prefix*"
                        value={prefix}
                        onChange={setPrefix}
                        items={prefixes}
                    />
                    <Field
                        className="grow -ml-0.25 md:ml-0"
                        classInput="relative focus:z-3"
                        placeholder="First Name*"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <Field
                    className="grow ml-6 xl:w-[calc(50%-1.5rem)] xl:mx-3 md:w-full md:mx-0"
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div className="flex -mx-3 mb-10 md:block md:mx-0">
                <Field
                    className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0 md:mb-6"
                    placeholder="Phone Number*"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <Field
                    className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0"
                    placeholder="Email Address*"
                    note="This is the email we will send your confirmation to."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3 text-h4-libre text-primary-500">
                Additional Details and Preferences
            </div>
            <Field
                classInput="h-[12.875rem]"
                placeholder="Please note your requests or special needs"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                textarea
            />
            <div className="mt-10 text-right">
                <Link
                    className="btn-primary btn-lg min-w-[14.75rem] md:min-w-full"
                    href="/vouchers/confirmed"
                >
                    Send messenge
                </Link>
            </div>
        </form>
    );
};

export default Form;
