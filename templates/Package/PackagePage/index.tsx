"use client";

import Layout from "@/components/Layout";
import PackageItem from "@/components/PackageItem";

import { packageList } from "@/mocks/packageList";

const PackagePage = () => {
    return (
        <Layout>
            <div className="pt-10 pb-40 2xl:pb-30 xl:pb-20 md:pt-3">
                <div className="container">
                    <div className="mb-20 text-center text-h2 2xl:mb-10">
                        Package & Promotion.
                    </div>
                    <div className="flex flex-wrap -mt-14 -mx-3 md:block md:m-0">
                        {packageList.map((item) => (
                            <PackageItem
                                className="w-[calc(33.333%-1.5rem)] mt-14 mx-3 lg:w-[calc(50%-1.5rem)] md:w-full md:m-0 md:mb-6 md:last:mb-0"
                                item={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PackagePage;
