"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "@/components/Image";

const ConfirmedPage = () => {
    return (
        <Layout>
            <div className="py-20 lg:pt-10">
                <div className="container-lg">
                    <div className="p-12 px-14 bg-white md:px-5 md:py-12">
                        <div className="flex md:block">
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
                                <div className="mb-2 text-h4-libre text-primary-500">
                                    Gift Card Purchase Request Received
                                </div>
                                <div className="space-y-6">
                                    <p>
                                        We are delighted to inform you that we
                                        have received your gift card purchase
                                        request for our Stay & Dine Package.
                                        Thank you for choosing to give the gift
                                        of relaxation and fine dining to your
                                        loved one or yourself.
                                    </p>
                                    <p>
                                        Our team is currently processing your
                                        request, and we will send you a
                                        confirmation email with the gift card
                                        details once the transaction is
                                        complete.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            className="btn-secondary btn-lg min-w-[14.75rem] text-16m md:min-w-full"
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

export default ConfirmedPage;
