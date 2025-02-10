import { useState } from "react";
import Tabs from "@/components/Tabs";
import OffersItem from "@/components/OffersItem";

import { offers } from "@/mocks/offers";

type OffersProps = {};

const Offers = ({}: OffersProps) => {
    const [type, setType] = useState<
        | "overview"
        | "accommodation"
        | "dining"
        | "spa-and-fitness"
        | "weddings-and-events"
    >("overview");

    const typeOffers = [
        {
            title: "Overview",
            active: type === "overview",
            onClick: () => setType("overview"),
        },
        {
            title: "Accommodation",
            active: type === "accommodation",
            onClick: () => setType("accommodation"),
        },
        {
            title: "Dining",
            active: type === "dining",
            onClick: () => setType("dining"),
        },
        {
            title: "Spa & Fitness",
            active: type === "spa-and-fitness",
            onClick: () => setType("spa-and-fitness"),
        },
        {
            title: "Weddings & Events",
            active: type === "weddings-and-events",
            onClick: () => setType("weddings-and-events"),
        },
    ];

    return (
        <div className="py-20">
            <div className="container">
                <Tabs className="mb-14 md:mb-10" items={typeOffers} />
                <div className="flex flex-wrap -mt-14 -mx-3">
                    {offers.map((offer) => (
                        <OffersItem
                            className="w-[calc(50%-1.5rem)] mt-14 mx-3 md:w-[calc(100%-1.5rem)]"
                            item={offer}
                            key={offer.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offers;
