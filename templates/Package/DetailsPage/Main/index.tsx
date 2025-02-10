import Image from "@/components/Image";
import Сommunication from "@/components/Сommunication";

import { packageList } from "@/mocks/packageList";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const item = packageList.find((item) => item.id === id);

    return item ? (
        <div className="py-20 md:py-10">
            <div className="container flex items-start lg:block">
                <div className="grow pr-10 2xl:pr-8 lg:mb-10 lg:pr-0">
                    <div className="mb-10 text-h2 md:mb-8">{item.title}</div>
                    <div className="mb-10 text-16m md:mb-6">
                        From Now Until 31 December 2022
                    </div>
                    <div className="mb-10">
                        <Image
                            className="w-full md:min-h-[16rem] md:object-cover"
                            src="/images/content/main-pic-1.jpg"
                            width={993}
                            height={624}
                            alt=""
                        />
                    </div>
                    <div className="content-lg mb-6 text-16r">
                        <p>
                            Experience more fun and adventure when you stay 4
                            nights with us. Rejuvenate and indulge in memorable
                            experiences of a lifetime at our resort. Enjoy up to
                            35% off your 4-night stay at Hidden Oasis Resort.
                        </p>
                        <ul>
                            <li>
                                Daily breakfast for 2 people per bedroom at the
                                Water Court Restaurant
                            </li>
                            <li>Complimentary internet service in the room</li>
                            <li>
                                Complimentary private round trip airport
                                transfer for booking of room type from Beach
                                Pool Villa and above
                            </li>
                            <li>
                                Complimentary scheduled two-way airport shuttle
                                bus from/ to Danang airport (applicable for
                                Lagoon Pool Villa)
                            </li>
                            <li>
                                Complimentary use of Health Club and other
                                sports and recreational facilities
                            </li>
                        </ul>
                        <hr />
                        <strong>
                            <i>Package Specific Terms and Conditions:</i>
                        </strong>
                        <ul>
                            <li>
                                This offer cannot be combined with other
                                promotions and gift certificates.
                            </li>
                            <li>
                                A full non-refundable prepayment is required
                                upon confirmation of the booking.
                            </li>
                            <li>
                                Reservation is required minimum length of stay
                                04 nights.
                            </li>
                            <li>Validity: from now until 31 December, 2022.</li>
                        </ul>
                        <hr />
                    </div>
                    <div className="flex flex-wrap md:block">
                        <div className="text-16m mr-6 md:mr-0 md:mb-4">
                            Tel: +84 256 342 566
                        </div>
                        <div className="text-16m">
                            Email: Reservations@naturalparadise.com
                        </div>
                    </div>
                </div>
                <Сommunication className="sticky top-5 shrink-0 w-[25.75rem] 2xl:w-[24rem] xl:w-[22rem] lg:w-full" />
            </div>
        </div>
    ) : null;
};

export default Main;
