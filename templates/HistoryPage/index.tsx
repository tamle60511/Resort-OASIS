"use client";

import Layout from "@/components/Layout";
import Image from "@/components/Image";

import { history } from "@/constants/history";

const HistoryPage = () => {
    return (
        <Layout>
            <div className="pt-10 pb-20">
                <div className="container-lg">
                    <div className="mb-16 text-center lg:mb-10">
                        <div className="mb-6 text-subtitle">
                            Hidden Oasis Resort History
                        </div>
                        <div className="text-h2">Hidden Oasis Is Born</div>
                    </div>
                    <div className="mb-20 lg:mb-16">
                        <Image
                            className="w-full md:min-h-[14.625rem] md:object-cover"
                            src="/images/content/history-pic.jpg"
                            width={1142}
                            height={625}
                            alt=""
                        />
                    </div>
                    <div className="max-w-[53.125rem] mx-auto">
                        {history.map((item) => (
                            <div
                                className="mb-10 pb-10 border-b border-n-200 first:text-center last:mb-0 last:pb-0 last:border-b-0 md:mb-8 md:pb-8"
                                key={item.id}
                            >
                                <div className="mb-4 text-h5 text-n-700">
                                    {item.title}
                                </div>
                                <div>{item.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HistoryPage;
