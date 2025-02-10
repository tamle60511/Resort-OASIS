import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import DiningItem from "@/components/DiningItem";

import { dining } from "@/mocks/dining";

type InterestedProps = {};

const Interested = ({}: InterestedProps) => (
    <div className="py-20 md:py-10">
        <div className="container">
            <div className="mb-10 text-h2">You Might Be Interested.</div>
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
                {dining.map((room) => (
                    <SwiperSlide className="" key={room.id}>
                        <DiningItem className="h-full" item={room} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
);

export default Interested;
