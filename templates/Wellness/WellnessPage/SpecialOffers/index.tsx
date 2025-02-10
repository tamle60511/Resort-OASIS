import Link from "next/link";
import Explore from "@/components/Explore";
import Image from "@/components/Image";

type SpecialOffersProps = {};

const SpecialOffers = ({}: SpecialOffersProps) => (
    <div className="py-[11.25rem] 2xl:py-30 xl:py-24 lg:py-20 md:py-10">
        <div className="container-lg">
            <div className="mb-10 text-center text-h2 md:text-left">
                Special Offers.
            </div>
            <div className="flex mb-10 bg-white md:block">
                <div className="shrink-0 w-[25.75rem] lg:w-[20rem] md:w-full md:h-[25.125rem]">
                    <Image
                        className="w-full h-full object-cover"
                        src="/images/content/wellness-photo-2.jpg"
                        width={412}
                        height={504}
                        alt=""
                    />
                </div>
                <div className="grow px-10 py-18 lg:px-6 lg:py-8 md:p-6">
                    <div className="mb-8 text-h3 md:text-h4-libre">
                        Hydrotherapy Suites
                    </div>
                    <div className="mb-6 text-h6-sans">
                        “30% off Hydrotherapy Resort”
                    </div>
                    <div className="mb-8">
                        Indulge in a world of tranquility and relaxation with
                        our Hydrotherapy Resort, now with an exclusive 30%
                        discount. Our state-of-the-art hydrotherapy suites
                        feature a range of healing water treatments to
                        invigorate your senses and promote wellness. From
                        soothing jet pools to hydro-massage showers and
                        invigorating ice fountains, our Hydrotherapy Resort
                        offers the ultimate rejuvenating experience.
                    </div>
                    <Explore url="/special-offers/1" />
                </div>
            </div>
            <div className="text-center">
                <Link
                    className="btn-secondary min-w-[16.25rem] md:min-w-full"
                    href="/special-offers"
                >
                    More Offers
                </Link>
            </div>
        </div>
    </div>
);

export default SpecialOffers;
