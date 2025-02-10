import Link from "next/link";
import Image from "@/components/Image";
import Explore from "@/components/Explore";

import { wellness } from "@/mocks/wellness";

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className="py-[11.25rem] 2xl:py-30 xl:py-24 lg:py-20">
        <div className="container">
            <div className="flex mb-6 lg:mb-15 md:block">
                <div className="shrink-0 w-[49%] md:w-full md:mb-6">
                    <Image
                        className="w-full min-h-[26.25rem] object-cover"
                        src="/images/content/wellness-pic.jpg"
                        width={703}
                        height={420}
                        alt=""
                    />
                </div>
                <div className="grow pl-15 pr-10 xl:pl-10 xl:pr-0 lg:pl-6 md:p-0">
                    <div className="mb-9 text-h2 md:mb-8 md:text-h3">
                        Wellness Menu.
                    </div>
                    <div className="mb-9 text-16r">
                        Indulge in a pampering environment that promotes
                        relaxation and allows you to explore wellness through
                        holistic treatments and activities designed to enhance
                        creativity and guide you towards a more meaningful life.
                        Our Wellness Inclusive program provides the perfect
                        opportunity to rejuvenate both body and mind.
                    </div>
                    <Link
                        className="btn-secondary min-w-[15.5rem] md:min-w-full"
                        href="/wellness"
                    >
                        View Detail
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap -mt-10 -mx-3">
                {wellness.map((item) => (
                    <div
                        className="w-[calc(33.333%-1.5rem)] mt-10 mx-3 lg:w-[calc(100%-1.5rem)]"
                        key={item.id}
                    >
                        <div className="h-[25.125rem] mb-8">
                            <Image
                                className="w-full h-full object-cover"
                                src={item.image}
                                width={703}
                                height={420}
                                alt=""
                            />
                        </div>
                        <div className="mb-4 text-h3">{item.title}</div>
                        <Explore url={`/wellness/${item.id}`} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Details;
