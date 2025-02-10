"use client";

import Layout from "@/components/Layout";
import AccommodationItem from "@/components/AccommodationItem";

import { accommodation } from "@/mocks/accommodation";

const AccommodationPage = () => {
    return (
        <Layout>
            <div className="pt-15 pb-20 md:pt-6">
                <div className="container">
                    <div className="max-w-[53.2rem] mx-auto mb-20 text-center xl:mb-12">
                        <div className="mb-6 text-h2">Accommodation.</div>
                        <div className="">
                            Each accommodation is designed with modern amenities
                            and decorated with local crafts, providing a
                            comfortable and authentic experience. Tucked away
                            from the hustle and bustle of the city, Hidden Oasis
                            is the perfect escape for those seeking peace and
                            tranquility.
                        </div>
                    </div>
                    <div className="flex flex-wrap -mt-18 -mx-3 md:-mt-8">
                        {accommodation.map((room) => (
                            <AccommodationItem
                                className="w-[calc(33.333%-1.5rem)] mt-18 mx-3 lg:w-[calc(50%-1.5rem)] md:w-[calc(100%-1.5rem)] md:mt-8"
                                item={room}
                                key={room.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AccommodationPage;
