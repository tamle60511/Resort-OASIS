import Link from "next/link";
import Image from "@/components/Image";

type OfferProps = {};

const Offer = ({}: OfferProps) => (
    <div className="py-20">
        <div className="container flex items-center lg:flex-col-reverse">
            <div className="shrink-0 w-[34.88rem] mr-22 2xl:w-[30rem] 2xl:mr-12 xl:w-[24rem] lg:w-full lg:m-0">
                <div className="mb-8 text-h2">Grand Opening Offer.</div>
                <div className="mb-8">
                    Experience the world in a whole new way with our exclusive
                    offer of 30% savings on your stay and additional perks, such
                    as complimentary breakfast and spa treatments. Discover new
                    destinations, cultures, and experiences while enjoying
                    luxurious accommodations and personalized service.
                </div>
                <Link
                    className="btn-secondary min-w-[16.63rem] md:min-w-full"
                    href="/special-offers"
                >
                    Explore More
                </Link>
            </div>
            <div className="grow lg:mb-12">
                <Image
                    className="w-full"
                    src="/images/content/offer-pic-1.jpg"
                    width={788}
                    height={490}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Offer;
