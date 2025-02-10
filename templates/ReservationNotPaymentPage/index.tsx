"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Select from "@/components/Select";
import MyDatePicker from "@/components/MyDatePicker";
import Field from "@/components/Field";
import ConfirmationInfo from "./ConfirmationInfo";

const destinations = [
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

const guests = [
    {
        id: "0",
        title: "1 Adult",
    },
    {
        id: "1",
        title: "2 Adults",
    },
    {
        id: "2",
        title: "2 Adult + 1 Child",
    },
];

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

const ReservationNotPaymentPage = () => {
    const [confirmation, setConfirmation] = useState<boolean>(false);
    const [destination, setDestination] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [guest, setGuest] = useState("");
    const [prefix, setPrefix] = useState();
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    return (
        <Layout>
            <div className="pt-15 pb-20 lg:pt-10 md:pt-2">
                <div className="container-lg">
                    {confirmation ? (
                        <ConfirmationInfo />
                    ) : (
                        <form action="" onSubmit={() => console.log("Submit")}>
                            <div className="max-w-[53.125rem] mx-auto mb-20 text-center xl:mb-16 lg:mb-12">
                                <div className="mb-6 text-h2">
                                    Book Your Stay.
                                </div>
                                <div>
                                    Experience Hidden Oasis and book directly on
                                    our website for exclusive benefits,
                                    including the best rate guaranteed, promo
                                    codes, and discounts on hotel rooms. Book
                                    with us and enjoy a hassle-free and secure
                                    reservation process.
                                </div>
                            </div>
                            <div className="mb-6 text-h4-libre">Your Stay</div>
                            <Select
                                className="mb-6"
                                placeholder="Destination"
                                value={destination}
                                onChange={setDestination}
                                items={destinations}
                            />
                            <div className="flex space-x-6 mb-8 md:block md:space-x-0 md:space-y-6">
                                <MyDatePicker
                                    className="flex-1"
                                    placeholderText="Check-in"
                                    selected={startDate}
                                    onChange={(date) =>
                                        setStartDate(date as Date)
                                    }
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                />
                                <MyDatePicker
                                    className="flex-1"
                                    placeholderText="Check-out"
                                    selected={endDate}
                                    onChange={(date) =>
                                        setEndDate(date as Date)
                                    }
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                />
                                <Select
                                    className="flex-1"
                                    placeholder="Guest(s)"
                                    value={guest}
                                    onChange={setGuest}
                                    items={guests}
                                />
                            </div>
                            <div className="mb-6 text-h4-libre">
                                Contact Info
                            </div>
                            <div className="flex space-x-6 mb-6 md:block md:space-x-0 md:space-y-6">
                                <div className="flex flex-1 md:block md:space-y-6">
                                    <Select
                                        className="w-36 md:w-full"
                                        placeholder="Prefix*"
                                        value={prefix}
                                        onChange={setPrefix}
                                        items={prefixes}
                                    />
                                    <Field
                                        className="grow -ml-0.25 md:ml-0"
                                        classInput="relative placeholder:text-n-200 focus:z-1"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <Field
                                    className="flex-1"
                                    classInput="placeholder:text-n-200"
                                    placeholder="Last Name*"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="flex space-x-6 mb-8 md:block md:space-x-0 md:space-y-6">
                                <Field
                                    className="flex-1"
                                    classInput="placeholder:text-n-200"
                                    placeholder="Phone Number*"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                                <Field
                                    className="flex-1"
                                    classInput="placeholder:text-n-200"
                                    placeholder="Email Address*"
                                    note="This is the email we will send your confirmation to."
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="text-right">
                                <button
                                    className="btn-primary btn-lg min-w-[14.75rem] md:min-w-full"
                                    onClick={() => setConfirmation(true)}
                                >
                                    Book
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default ReservationNotPaymentPage;
