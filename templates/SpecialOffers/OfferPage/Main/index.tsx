import Image from "@/components/Image";

import { offers } from "@/mocks/offers";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const offer = offers.find((offer) => offer.id === id);

    return offer ? (
        <div className="py-20 lg:py-12 md:py-6">
            <div className="container">
                <div className="mb-6 text-h2">{offer.title}</div>
                <div className="mb-10 text-h7 uppercase">
                    Posted on March 26, 2023
                </div>
                <div className="mb-10 text-h4 text-n-700">“{offer.info}”</div>
                <div className="content text-16r">
                    <p>
                        Escape to our Hidden Oasis Resort and enjoy the ultimate
                        flexibility with our Fully Flexible Rate. Whether
                        you&apos;re planning a romantic getaway or a family
                        vacation, our fully flexible rate allows you to change
                        or cancel your reservation up to 24 hours before your
                        arrival date without any penalty.<br></br>Our resort
                        offers a range of comfortable accommodations, including
                        traditional bungalows and luxurious villas, all equipped
                        with modern amenities for your ultimate comfort. Wake up
                        to stunning views of lush greenery, pristine rivers, and
                        serene mountains, and indulge in delicious local cuisine
                        made from fresh ingredients.
                    </p>
                    <figure>
                        <Image
                            className="w-full md:min-h-[14rem] md:object-cover"
                            src="/images/content/offer-pic.jpg"
                            width={1432}
                            height={624}
                            alt=""
                        />
                    </figure>
                    <p>
                        Escape to our Hidden Oasis Resort and enjoy the ultimate
                        flexibility with our Fully Flexible Rate. Whether
                        you&apos;re planning a romantic getaway or a family
                        vacation, our fully flexible rate allows you to change
                        or cancel your reservation up to 24 hours before your
                        arrival date without any penalty.<br></br>Our resort
                        offers a range of comfortable accommodations, including
                        traditional bungalows and luxurious villas, all equipped
                        with modern amenities for your ultimate comfort. Wake up
                        to stunning views of lush greenery, pristine rivers, and
                        serene mountains, and indulge in delicious local cuisine
                        made from fresh ingredients.<br></br>Take part in a
                        variety of outdoor activities, such as hiking, fishing,
                        and kayaking, or simply relax by the pool and soak up
                        the tranquillity of the natural surroundings. Our fully
                        flexible rate ensures that you can plan your vacation
                        with complete peace of mind, knowing that you can change
                        or cancel your reservation if your plans change.
                        <br></br>Book now and enjoy the ultimate flexibility at
                        our Hidden Oasis Resort with our Fully Flexible Rate.
                    </p>
                </div>
            </div>
        </div>
    ) : null;
};

export default Main;
