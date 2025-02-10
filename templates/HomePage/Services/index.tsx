import Link from "next/link";
import Image from "@/components/Image";

type ServicesProps = {};

import { services } from "@/mocks/services";

const Services = ({}: ServicesProps) => (
    <div className="py-20 bg-white md:pb-18">
        <div className="container">
            <div className="mb-12 text-center text-h2">Services</div>
            <div className="flex space-x-14 2xl:space-x-8 lg:block lg:space-x-0 lg:space-y-12 md:space-y-8">
                {services.map((service) => (
                    <Link
                        className="group block flex-1 text-n-700"
                        key={service.id}
                        href={service.url}
                    >
                        <div className="h-[32.86rem] mb-8 overflow-hidden xl:h-[28rem] md:h-[32.86rem]">
                            <Image
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                src={service.image}
                                width={440}
                                height={526}
                                alt=""
                            />
                        </div>
                        <div className="mb-4 text-h5">{service.title}</div>
                        <div className="">{service.content}</div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

export default Services;
