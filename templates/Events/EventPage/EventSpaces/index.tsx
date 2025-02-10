import Link from "next/link";
import EventsItem from "@/components/EventsItem";

import { spaces } from "@/mocks/events";

type EventSpacesProps = {};

const EventSpaces = ({}: EventSpacesProps) => (
    <div className="pb-20 md:pb-10">
        <div className="container">
            <div className="flex flex-wrap -mt-10 -mx-3">
                {spaces.map((space) => (
                    <EventsItem
                        className="w-[calc(50%-1.5rem)] mt-10 mx-3 md:w-[calc(100%-1.5rem)]"
                        item={space}
                        key={space.id}
                    />
                ))}
            </div>
            <div className="mt-20 pt-20 border-t border-n-200 text-center md:mt-10 md:pt-10">
                <div className="mb-10 text-h2 md:mb-8 md:text-left">
                    Request for Proposal.
                </div>
                <div className="max-w-[49.5rem] mx-auto mb-10 md:mb-8 md:text-left">
                    Whatever your occasion or event, everyone at Hidden Oasis
                    Resort is dedicated to making it smooth, flawless and
                    memorable. It’s what we live for, really.
                </div>
                <div className="flex justify-center space-x-10 lg:space-x-6 md:block md:space-x-0 md:space-y-6">
                    <Link
                        className="btn-primary btn-lg min-w-[14.75rem] lg:min-w-[12.4rem] lg:px-4 md:min-w-full"
                        href="/request-for-proposal"
                    >
                        Request for Proposal
                    </Link>
                    <a
                        className="btn-secondary btn-lg min-w-[14.75rem] text-16m lg:min-w-[12.4rem] lg:px-4 md:min-w-full"
                        href="tel:+84654343543"
                        rel="noopener noreferrer"
                    >
                        Call:&nbsp;
                        <span className="italic">+84 654 343 543</span>
                    </a>
                    <a
                        className="btn-secondary btn-lg min-w-[14.75rem] text-16m lg:min-w-[12.4rem] lg:px-4 md:min-w-full"
                        href="#"
                        rel="noopener noreferrer"
                    >
                        E-mail Us
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default EventSpaces;
