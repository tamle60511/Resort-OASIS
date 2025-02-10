import { useState } from "react";
import Select from "@/components/Select";
import Field from "@/components/Field";
import MyDatePicker from "@/components/MyDatePicker";

const events = [
    {
        id: "0",
        title: "Weddings",
    },
    {
        id: "1",
        title: "Celebrations",
    },
    {
        id: "2",
        title: "Business Resorts & Meetings",
    },
];

type FormProps = {};

const Form = ({}: FormProps) => {
    const [event, setEvent] = useState("");
    const [bridesName, setBridesName] = useState<string>("");
    const [groomsName, setGroomsName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [counter, setCounter] = useState<string>("");
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [duration, setDuration] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <form
            className="grow mr-10 p-6 bg-white border border-n-100 xl:mr-6 lg:mr-0 lg:mb-10"
            action=""
            onSubmit={() => console.log("Submit")}
        >
            <div className="mb-10">
                <div className="mb-3 text-h4-libre text-primary-500">
                    About You
                </div>
                <Select
                    className="z-2 mb-6 md:mb-4"
                    placeholder="Type of Event"
                    value={event}
                    onChange={setEvent}
                    items={events}
                />
                <div className="flex space-x-6 mb-6 md:block md:space-x-0 md:space-y-4">
                    <Field
                        className="flex-1"
                        placeholder="Bride's Name*"
                        value={bridesName}
                        onChange={(e) => setBridesName(e.target.value)}
                        required
                    />
                    <Field
                        className="flex-1"
                        placeholder="Groom's Name*"
                        value={groomsName}
                        onChange={(e) => setGroomsName(e.target.value)}
                        required
                    />
                </div>
                <div className="flex space-x-6 md:block md:space-x-0 md:space-y-4">
                    <Field
                        className="flex-1"
                        placeholder="Email Address*"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Field
                        className="flex-1"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="mb-10 md:mb-4">
                <div className="mb-3 text-h4-libre text-primary-500">
                    About The Wedding
                </div>
                <Field
                    className="mb-6 md:mb-4"
                    placeholder="Number of Attendees*"
                    type="tel"
                    value={counter}
                    onChange={(e) => setCounter(e.target.value)}
                    required
                />
                <div className="flex space-x-6 md:block md:space-x-0 md:space-y-4">
                    <MyDatePicker
                        className="flex-1"
                        label="Wedding Date*"
                        selected={startDate}
                        onChange={(date) => setStartDate(date as Date)}
                    />
                    <Field
                        className="flex-1"
                        label="Duration (Day)"
                        placeholder="Number of days"
                        type="tel"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="mb-10">
                <Field
                    placeholder="Please note your requests or special needs"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    textarea
                />
            </div>
            <div className="text-right">
                <button className="btn-primary btn-lg min-w-[13.5rem] text-16m md:min-w-full">
                    SUBMIT
                </button>
            </div>
        </form>
    );
};

export default Form;
