import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import Image from "@/components/Image";

import { deiscover } from "@/mocks/discover";

type DiscoverProps = {};

const Discover = ({}: DiscoverProps) => (
    <div className="py-24 md:py-10">
        <div className="container-lg">
            <div className="max-w-[52.81rem] mx-auto mb-12 text-center md:max-w-full md:text-left">
                <div className="mb-8 text-h2 md:text-h3">
                    Discover: Regional Highlights.
                </div>
                <div className="">
                    Ninh Thuan province in Vietnam boasts a unique beauty and
                    rich culture. With stunning landscapes, such as the famous
                    Vinh Hy Bay and Cham Island, along with the diverse
                    traditions of the Cham ethnic group, Ninh Thuan is a
                    must-visit destination for those seeking an authentic
                    cultural experience in Vietnam.
                </div>
            </div>
            <div className="lg:-mx-60">
                <Swiper
                    className="swiper-discover"
                    modules={[Scrollbar]}
                    scrollbar={{
                        hide: false,
                    }}
                    spaceBetween={30}
                    slidesPerView={3}
                    centeredSlides={true}
                    speed={500}
                    loop={true}
                >
                    {deiscover.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="image h-[28.625rem] mt-6 mb-8 transition-all duration-500">
                                <Image
                                    className="w-full h-full object-cover"
                                    src={slide.image}
                                    width={360}
                                    height={446}
                                    alt=""
                                />
                            </div>
                            <div className="text-center text-h5 truncate">
                                {slide.title}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-12 text-center">
                <Link
                    className="btn-secondary min-w-[14.5rem]"
                    href="/experiences"
                >
                    View All Experiences
                </Link>
            </div>
        </div>
    </div>
);

export default Discover;
