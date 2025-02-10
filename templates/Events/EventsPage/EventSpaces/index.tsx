import EventsItem from "@/components/EventsItem";

import { spaces } from "@/mocks/events";

type EventSpacesProps = {};

const EventSpaces = ({}: EventSpacesProps) => (
    <div className="pb-[11.25rem] 2xl:pb-30 xl:pb-24 lg:pb-20">
        <div className="container">
            <div className="mb-10 text-center text-h2 md:text-left">
                Discover Our Event Spaces.
            </div>
            <div className="flex flex-wrap -mt-10 -mx-3">
                {spaces.map((space) => (
                    <EventsItem
                        className="w-[calc(50%-1.5rem)] mt-10 mx-3 md:w-[calc(100%-1.5rem)]"
                        item={space}
                        key={space.id}
                    />
                ))}
            </div>
            <div className="mt-10 text-center">
                <button className="btn-secondary min-w-[15rem] h-13 text-16m">
                    Load More
                </button>
            </div>
        </div>
    </div>
);

export default EventSpaces;
