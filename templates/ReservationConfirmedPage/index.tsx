"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "@/components/Image";

const ReservationConfirmedPage = () => {
    return (
        <Layout>
            <div className="pt-18 pb-30 lg:pt-10 lg:pb-20">
                <div className="container-lg">
                    <div className="p-12 bg-white lg:p-8 md:px-5 md:py-6">
                        <div className="flex items-center mb-16 lg:mb-12 md:block md:mb-8">
                            <div className="shrink-0 w-20 md:mx-auto md:mb-6">
                                <Image
                                    className="w-full opacity-100"
                                    src="/images/content/check-circle.svg"
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                            </div>
                            <div className="grow pl-6 md:pl-0">
                                <div className="mb-2 text-h4-libre text-primary-500">
                                    Booking Confirmed
                                </div>
                                <div>
                                    We&apos;re excited to confirm your resort
                                    stay! Please review the check-in
                                    instructions for a seamless experience. Let
                                    us know of any special requirements or
                                    requests beforehand. We look forward to
                                    welcoming you!
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:block">
                            <div className="grow pr-6 lg:pr-0">
                                <div className="text-h4-libre text-primary-500">
                                    Booking ID: 98B26032023
                                </div>
                                <ul className="mt-5 list-disc pl-6 columns-2 gap-4 md:columns-1 md:gap-0">
                                    <li>Mr. Nguyen Van Nam</li>
                                    <li>Phone number: 0334244651</li>
                                    <li>Email: vannam89gmail.com</li>
                                    <li>
                                        Address: 85 Nguyen Xi, Phuong 25, Quan
                                        Binh Thanh, Ho Chi Minh, Vietnam 700000
                                    </li>
                                </ul>
                                <div className="flex mt-5 pt-5 border-t border-n-100 space-x-10 xl:space-x-6 md:block md:space-x-0 md:space-y-6">
                                    <div className="">
                                        <div className="mb-3">Check-in</div>
                                        <div>After 2:00 PM</div>
                                    </div>
                                    <div className="">
                                        <div className="mb-3">Check-out</div>
                                        <div>Before 12:00 PM</div>
                                    </div>
                                    <div className="">
                                        <div className="mb-3">
                                            Sun, Mar 26, 2023 - Tue, Mar 28,
                                            2023
                                        </div>
                                        <div>2 Adults</div>
                                    </div>
                                </div>
                                <div className="mt-5 pt-5 border-t border-n-100">
                                    <div className="mb-3">
                                        1 King Bed Junior Suite
                                    </div>
                                    <div>Best Available Rate</div>
                                </div>
                                <div className="mt-5 pt-5 border-t border-n-100">
                                    <div className="mb-3">Total: $1,120.00</div>
                                    <div>
                                        Payment Method: Creadit Card (Master
                                        Card)
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center shrink-0 w-[22.8rem] p-6 bg-[#EFF2F6] xl:w-[17rem] lg:w-full lg:h-80 lg:mt-12 md:mt-6">
                                <Image
                                    className="w-40"
                                    src="/images/content/qr-code.png"
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            className="btn-secondary btn-lg min-w-[14.75rem] md:min-w-full"
                            href="/"
                        >
                            Return to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ReservationConfirmedPage;
