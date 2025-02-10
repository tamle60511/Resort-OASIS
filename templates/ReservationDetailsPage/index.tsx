"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Icon from "@/components/Icon";
import Select from "@/components/Select";
import Field from "@/components/Field";
import Image from "@/components/Image";
import Checkbox from "@/components/Checkbox";
import Modal from "@/components/Modal";
import Policies from "./Policies";
import YourStay from "./YourStay";
import Success from "./Success";

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

const countries = [
    {
        id: "0",
        title: "Indonesia",
    },
    {
        id: "1",
        title: "Thailand",
    },
    {
        id: "2",
        title: "Vietnam",
    },
];

const ReservationDetailsPage = () => {
    const router = useRouter();
    const [prefix, setPrefix] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState();
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [date, setDate] = useState("");
    const [codeCVV, setCodeCVV] = useState("");
    const [nameCard, setNameCard] = useState("");
    const [letter, setLetter] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [condition, setCondition] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <>
            <Layout>
                <div className="py-20 lg:pt-15 md:pt-10">
                    <div className="container">
                        <button
                            className="group inline-flex items-center mb-9 text-h2 md:mb-6 md:text-h4-libre"
                            onClick={() => router.back()}
                        >
                            <Icon
                                className="w-8 h-8 mr-6 fill-primary-500 transition-transform group-hover:-translate-x-1"
                                name="arrow-long-left"
                            />
                            Guest Details
                        </button>
                        <div className="flex items-start lg:block">
                            <form
                                className="grow mr-9 p-6 bg-white border border-n-100 2xl:mr-6 lg:mr-0 lg:mb-10"
                                action=""
                                onSubmit={() => console.log("Submit")}
                            >
                                <div className="mb-10">
                                    <div className="mb-6 text-h4-libre text-primary-500 md:mb-3">
                                        Contact Info
                                    </div>
                                    <div className="flex -mx-3 mb-6 md:block md:mx-0">
                                        <div className="flex w-[calc(50%-1.5rem)] mx-3 md:block md:w-auto md:mx-0 md:mb-6">
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
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                        <Field
                                            className="w-[calc(50%-1.5rem)] mx-3 md:w-auto md:mx-0"
                                            placeholder="Last Name*"
                                            value={lastName}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="flex -mx-3 md:block md:mx-0">
                                        <Field
                                            className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0 md:mb-6"
                                            placeholder="Phone Number*"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                            required
                                        />
                                        <Field
                                            className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0"
                                            placeholder="Email Address*"
                                            note="This is the email we will send your confirmation to."
                                            type="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <div className="mb-3 text-h4-libre text-primary-500">
                                        Address
                                    </div>
                                    <div className="flex -mx-3 mb-6 md:block md:mx-0">
                                        <Select
                                            className="z-2 w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0"
                                            placeholder="Conuntry"
                                            value={country}
                                            onChange={setCountry}
                                            items={countries}
                                        />
                                    </div>
                                    <div className="flex -mx-3 mb-6 md:block md:mx-0">
                                        <Field
                                            className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0"
                                            placeholder="Address*"
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="flex -mx-3 md:block md:mx-0">
                                        <Field
                                            className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0 md:mb-6"
                                            placeholder="City*"
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                            required
                                        />
                                        <Field
                                            className="w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0"
                                            placeholder="Zip / Postel Code"
                                            value={code}
                                            onChange={(e) =>
                                                setCode(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <div className="mb-3 text-h4-libre text-primary-500">
                                        Additional Details and Preferences
                                    </div>
                                    <Field
                                        classInput="h-[12.875rem]"
                                        placeholder="Please note your requests or special needs"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        required
                                        textarea
                                    />
                                </div>
                                <div className="mb-10">
                                    <div className="mb-3 text-h4-libre text-primary-500">
                                        Payment Information
                                    </div>
                                    <div className="mb-6 text-n-600">
                                        $2,215.40 due March 26, 2023 at 2 PM
                                        (Hotel Local Time). Please provide a
                                        valid payment method.
                                    </div>
                                    <div className="flex items-center space-x-2 mb-6">
                                        {[
                                            "/images/content/visa.svg",
                                            "/images/content/master-card.svg",
                                            "/images/content/jcb.svg",
                                        ].map((card, index) => (
                                            <div className="w-12" key={index}>
                                                <Image
                                                    className="w-full"
                                                    src={card}
                                                    width={46}
                                                    height={32}
                                                    alt=""
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <Field
                                        className="mb-6"
                                        placeholder="Card Number*"
                                        value={cardNumber}
                                        onChange={(e) =>
                                            setCardNumber(e.target.value)
                                        }
                                        required
                                    />
                                    <div className="flex -mx-3 mb-6 md:block md:mx-0">
                                        <Field
                                            className="w-[calc(50%-1.5rem)] mx-3 md:w-auto md:mx-0 md:mb-6"
                                            placeholder="Expiration Date (MM/YY)*"
                                            type="tel"
                                            value={date}
                                            onChange={(e) =>
                                                setDate(e.target.value)
                                            }
                                            required
                                        />
                                        <Field
                                            className="w-[calc(50%-1.5rem)] mx-3 md:w-auto md:mx-0"
                                            placeholder="CVV*"
                                            type="tel"
                                            value={codeCVV}
                                            onChange={(e) =>
                                                setCodeCVV(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <Field
                                        className="mb-6"
                                        placeholder="Name on Card*"
                                        value={nameCard}
                                        onChange={(e) =>
                                            setNameCard(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <Policies />
                                <div className="flex flex-col items-start space-y-4">
                                    <Checkbox
                                        label="Yes, I would like to receive newsletters and special offers by email."
                                        value={letter}
                                        onChange={() => setLetter(!letter)}
                                    />
                                    <Checkbox
                                        label="I agree with the Privacy Terms."
                                        value={privacy}
                                        onChange={() => setPrivacy(!privacy)}
                                    />
                                    <Checkbox
                                        label="I agree with the Booking Conditions."
                                        value={condition}
                                        onChange={() =>
                                            setCondition(!condition)
                                        }
                                    />
                                </div>
                                <div className="mt-10 text-right">
                                    <button
                                        className="btn-primary btn-lg min-w-[14.75rem] md:min-w-full"
                                        onClick={() => setVisibleModal(true)}
                                        type="button"
                                    >
                                        COUNTINUE
                                    </button>
                                </div>
                            </form>
                            <YourStay />
                        </div>
                    </div>
                </div>
            </Layout>
            <Modal
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <Success />
            </Modal>
        </>
    );
};

export default ReservationDetailsPage;
