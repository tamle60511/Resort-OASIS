"use client";

import Layout from "@/components/Layout";
import DiningItem from "@/components/DiningItem";

import { dining } from "@/mocks/dining";

const DiningPage = () => {
    return (
        <Layout>
            <div className="pt-15 pb-20 lg:pt-10 md:pt-3">
                <div className="container">
                    <div className="max-w-[53.125rem] mx-auto mb-20 text-center xl:mb-14 md:mb-10">
                        <div className="mb-6 text-h2">
                            Discover Local & World <br></br>Cuisines At Hidden
                            Oasis.
                        </div>
                        <div className="">
                            At Hidden Oasis, we offer a diverse selection of
                            dining options with three restaurants and a bar
                            on-site. Our culinary team has crafted unique menus
                            with flavors that are both exotic and familiar,
                            catering to a variety of tastes. In addition, we
                            offer Destination Dining experiences for those
                            seeking a romantic and adventurous private dining
                            experience.
                        </div>
                    </div>
                    <div className="space-y-14 md:space-y-8">
                        {dining.map((item) => (
                            <DiningItem
                                className="even:flex-row-reverse"
                                item={item}
                                key={item.id}
                                row
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DiningPage;
