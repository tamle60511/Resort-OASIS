import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import AccommodationItem from "@/components/AccommodationItem";

import { accommodation } from "@/mocks/accommodation";

type RoomsProps = {};

const Rooms = ({}: RoomsProps) => (
    <div className="py-20 md:py-10">
        <div className="container">
            <div className="mb-10 text-center text-h2">
                You Might Be Interested.
            </div>
            <Swiper
                modules={[Scrollbar]}
                scrollbar={{
                    hide: false,
                }}
                spaceBetween={24}
                slidesPerView={1}
                speed={500}
                autoHeight={true}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                        autoHeight: false,
                    },
                }}
            >
                {accommodation.map((room) => (
                    <SwiperSlide key={room.id}>
                        <AccommodationItem item={room} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
);

export default Rooms;
