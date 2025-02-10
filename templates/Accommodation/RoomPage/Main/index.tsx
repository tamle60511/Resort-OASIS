import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { optionsRoom } from "@/mocks/accommodation";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => (
    <div className="py-10">
        <div className="container">
            <div className="mb-25 2xl:mb-16 lg:mb-10 md:-mx-5">
                <Image
                    className="w-full"
                    src="/images/content/room-photo.jpg"
                    width={1432}
                    height={810}
                    alt=""
                />
            </div>
            <div className="max-w-[70.125rem] mx-auto">
                <div className="mb-10 pb-10 border-b border-n-200 text-14m">
                    As soon as you step into Hidden Oasis Resort, you&apos;ll
                    feel inspired by the beauty of our beach resort. Our Classic
                    Rooms are designed in a traditional Vietnamese style and
                    feature unique touches that will delight you at every turn.
                    Relax in the comfortable indoor-outdoor living areas and
                    enjoy the refreshing sea breeze. You can also indulge in the
                    oversized marble tub or unwind on the extra-comfortable king
                    or queen beds. And, if you&apos;re in the mood for some
                    socializing, invite your friends over for evening drinks on
                    your terrace overlooking the lush gardens and sparkling sea.
                </div>
                <div className="flex flex-wrap -mt-10 mx-4 mb-10 xl:-mx-8 lg:block lg:m-0 lg:mb-10 lg:space-y-6">
                    {optionsRoom.map((option) => (
                        <div
                            className="flex items-center w-[calc(50%-4rem)] mt-10 mx-8 lg:w-full lg:m-0 md:block"
                            key={option.id}
                        >
                            <div className="flex items-center shrink-0 w-[8.75rem] text-14b lg:w-[12rem] md:w-full">
                                <div className="shrink-0 w-10 mr-4">
                                    <Image
                                        className="w-full opacity-100"
                                        src={option.image}
                                        width={40}
                                        height={40}
                                        alt=""
                                    />
                                </div>
                                {option.title}
                            </div>
                            <div className="grow pl-12 md:mt-4 md:pl-0">
                                {option.value}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mb-10 p-10 bg-white md:-mx-5 md:mb-0.25 md:px-5">
                    <div className="mb-6 text-h4-libre text-primary-500">
                        Benefits
                    </div>
                    <ul className="list-disc pl-4">
                        <li>
                            As a guest staying in a Classic Room at Hidden Oasis
                            Resort, you will enjoy exclusive access to our
                            stunning beach and all of its associated amenities,
                            including exciting beach games.
                        </li>
                        <li>
                            In addition, there are plenty of recreational
                            activities available for you to participate in, such
                            as non-motorized water sports (such as kayaking,
                            sailing, and stand-up paddleboarding), as well as
                            tennis courts, beach games, and daily yoga and tai
                            chi classes.
                        </li>
                        <li>
                            For those who want to stay fit and healthy during
                            their stay, our state-of-the-art Soar Gym fitness
                            center is available to use at any time.
                        </li>
                        <li>
                            Children under the age of six can enjoy
                            complimentary meals from the Kid&apos;s Menu, while
                            adults can relax and unwind with a game of billiards
                            or table tennis at Long Bar.
                        </li>
                        <li>
                            There&apos;s also something for animal lovers with
                            our one-hour Wildlife Workshop, led by our resident
                            zoologist.
                        </li>
                        <li>
                            Movie enthusiasts can indulge in scheduled film
                            screenings at our Cinema, and parents can relax
                            knowing that their children are in good hands at our
                            Planet Trekkers Kids Club.
                        </li>
                        <li>
                            Guests who need to stay connected can access
                            computers and wireless internet throughout the
                            resort at our Business Center.
                        </li>
                    </ul>
                </div>
                <div className="mb-10 p-10 bg-white md:-mx-5 md:px-5">
                    <div className="mb-6 text-h4-libre text-primary-500">
                        Amenities
                    </div>
                    <ul className="list-disc pl-4 columns-3 gap-6 lg:columns-2 md:columns-1 md:gap-0">
                        <li>Ocean views</li>
                        <li>Private pool</li>
                        <li>Timber sun deck</li>
                        <li>King-size bed</li>
                        <li>Living area with sofa, writing desk</li>
                        <li>Bathroom with bathtub, twin vanities</li>
                        <li>Separate shower/toilet</li>
                        <li>Sun deck with sun loungers</li>
                        <li>WiFi, TV, Netflix, Bose sound system, safe</li>
                        <li>Personal bar</li>
                    </ul>
                </div>
                <div className="text-center">
                    <Link
                        className="btn-primary btn-lg min-w-[14.75rem] md:min-w-full"
                        href="/reservation"
                    >
                        Make a Reservation
                    </Link>
                </div>
                <div className="flex justify-center items-center mt-24 space-x-2 2xl:mt-16 md:mt-12">
                    <div className="">1/9</div>
                    <button className="transition-opacity hover:opacity-50">
                        <Icon name="arrow-prev" />
                    </button>
                    <button className="transition-opacity hover:opacity-50">
                        <Icon name="arrow-next" />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Main;
