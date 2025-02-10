"use client";

import Layout from "@/components/Layout";
import VouchersItem from "@/components/VouchersItem";

import { vouchers } from "@/mocks/vouchers";

const VouchersPage = () => {
    return (
        <Layout>
            <div className="pt-10 pb-36 2xl:pb-24 md:pt-3 md:pb-10">
                <div className="container">
                    <div className="max-w-[53.125rem] mx-auto mb-20 text-center lg:mb-13">
                        <div className="mb-6 text-h2">Gift Vouchers.</div>
                        <div>
                            Offer a truly unforgettable gift that will leave a
                            lasting impression on their hearts and minds,
                            standing the test of time and becoming a cherished
                            memory for years to come.
                        </div>
                    </div>
                    <div className="flex flex-wrap -mt-16 -mx-3 md:-mt-10">
                        {vouchers.map((voucher) => (
                            <VouchersItem
                                className="w-[calc(50%-1.5rem)] mt-16 mx-3 md:w-[calc(100%-1.5rem)] md:mt-10"
                                item={voucher}
                                key={voucher.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default VouchersPage;
