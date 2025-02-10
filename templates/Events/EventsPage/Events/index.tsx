import Link from "next/link";
import Image from "@/components/Image";

type EventsProps = {};

import { events } from "@/mocks/events";

const Events = ({}: EventsProps) => (
    <div className="py-[11.25rem] 2xl:py-30 xl:py-24 lg:py-20">
        <div className="container">
            <div className="flex space-x-14 2xl:space-x-8 xl:space-x-6 lg:block lg:space-x-0 lg:space-y-14">
                {events.map((event) => (
                    <Link
                        className="group block flex-1 text-n-700"
                        key={event.id}
                        href={`/wedding-and-events/${event.id}`}
                    >
                        <div className="h-[32.86rem] mb-8 overflow-hidden md:h-[25.125rem]">
                            <Image
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                src={event.image}
                                width={440}
                                height={526}
                                alt=""
                            />
                        </div>
                        <div className="mb-4 text-h4-libre text-primary-500">
                            {event.title}
                        </div>
                        <div className="">{event.content}</div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

export default Events;
