import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import ExperiencesItem from "@/components/ExperiencesItem";

import { experiences } from "@/mocks/experiences";

type ExperiencesProps = {};

const Experiences = ({}: ExperiencesProps) => (
    <div className="py-20 md:py-10">
        <div className="container">
            <div className="mb-10 text-h2">Featured Experiences.</div>
            <Swiper
                // className="swiper-discover"
                modules={[Scrollbar]}
                scrollbar={{
                    hide: false,
                }}
                spaceBetween={24}
                slidesPerView={1}
                autoHeight={true}
                speed={500}
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
                {experiences.map((experience) => (
                    <SwiperSlide key={experience.id}>
                        <ExperiencesItem
                            classContent="line-clamp-3"
                            item={experience}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
);

export default Experiences;
