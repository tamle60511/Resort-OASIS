import { useState } from "react";
import Field from "@/components/Field";
import Image from "@/components/Image";

type DetailsProps = {};

const Details = ({}: DetailsProps) => {
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="py-20 md:pt-10 md:pb-20">
            <div className="container-lg">
                {success ? (
                    <>
                        <div className="flex items-center px-14 py-12 bg-white md:block md:px-5">
                            <div className="shrink-0 w-20 md:mb-6">
                                <Image
                                    className="w-full opacity-100"
                                    src="/images/content/check-circle.svg"
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                            </div>
                            <div className="grow pl-6 md:pl-0">
                                Thank you for reaching out to us. We have
                                received your message and a dedicated Hidden
                                Oasis representative will be in touch with you
                                shortly. We appreciate your interest and look
                                forward to assisting you.
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <button
                                className="btn-secondary btn-lg min-w-[14.75rem] text-16m md:min-w-full"
                                onClick={() => setSuccess(false)}
                            >
                                Back to Form
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex space-x-6 md:block md:space-x-0">
                        <div className="flex-1 md:mb-20">
                            <div className="">
                                <div className="mb-4 text-h5">ADDRESS</div>
                                <div>
                                    <p>
                                        Yen Ninh, Binh Son, Ninh Chu, Phan Rang,
                                        Ninh Thuan 59000 Vietnam
                                    </p>
                                    <p>Tel: +84 654 343 543</p>
                                    <p>For reservations: +84 344 195 678</p>
                                    <p>Mail: contact@naturalparadise.com</p>
                                </div>
                            </div>
                            <div className="w-23 h-0.25 my-10 bg-n-100"></div>
                            <div className="">
                                <div className="mb-4 text-h5">
                                    PRESS REQUESTS
                                </div>
                                <div>
                                    For any press request, please contact Ms.
                                    Ngoc Tran ngoctran@naturalparadise.com
                                </div>
                            </div>
                            <div className="w-23 h-0.25 my-10 bg-n-100"></div>
                            <div className="">
                                <div className="mb-4 text-h5">
                                    CAREER REQUESTS
                                </div>
                                <div>
                                    Should you wish to join our team in Vietnam,
                                    please write to hrm@naturalparadise.com
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="mb-9">
                                <div className="mb-4 text-h5">Contact</div>
                                <div>
                                    To contact us, please fill out the form
                                    below. We will answer you within the next 24
                                    hours.
                                </div>
                            </div>
                            <form
                                className="space-y-6"
                                action=""
                                onSubmit={() => console.log("Submit")}
                            >
                                <Field
                                    placeholder="Your name*"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <Field
                                    placeholder="Your e-mail*"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Field
                                    placeholder="Your phone*"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />

                                <Field
                                    classInput="h-[12.63rem] placeholder:text-n-200"
                                    placeholder="Type your messenge here..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    textarea
                                />
                                <button
                                    className="btn-primary w-full h-13 text-16m"
                                    onClick={() => setSuccess(true)}
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;
