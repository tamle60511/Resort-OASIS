import OffersItem from "@/components/OffersItem";

import { offers } from "@/mocks/offers";

type OffersProps = {};

const Offers = ({}: OffersProps) => {
    return (
        <div className="py-20 md:py-12">
            <div className="container">
                <div className="mb-10 text-h2">More Offers.</div>
                <div className="flex -mx-3 md:block md:mx-0 md:space-y-12">
                    {offers.slice(1, 4).map((offer) => (
                        <OffersItem
                            className="w-[calc(33.333%-1.5rem)] mx-3 md:w-full md:mx-0"
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
