import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { sliderAccommodations } from "@/mocks/accommodations";

type DetailsProps = {};

const Details = ({}: DetailsProps) => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className="flex overflow-hidden lg:block lg:pb-20 md:pb-10">
            <div className="w-1/2 py-30 pl-8 pr-26 border-r border-t border-n-200 2xl:py-20 2xl:pr-12 lg:w-full lg:mb-20 lg:p-0 lg:pt-20 lg:px-8 lg:border-r-0 md:pt-10 md:px-5">
                <div className="max-w-[40.1rem] ml-auto text-center lg:flex lg:flex-col-reverse lg:max-w-full">
                    <div className="mb-10 lg:mb-0 lg:mt-10">
                        <Image
                            className="w-full"
                            src="/images/content/details-pic-1.jpg"
                            width={624}
                            height={702}
                            alt=""
                        />
                    </div>
                    <div className="">
                        <div className="w-[9.5rem] mx-auto">
                            <Image
                                className="w-full"
                                src="/images/content/style.svg"
                                width={624}
                                height={702}
                                alt=""
                            />
                        </div>
                        <div className="text-h3">
                            Luxurious and Opulent <br></br>Ambiance.
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 py-30 pl-30 2xl:py-20 2xl:pl-12 lg:w-full lg:pl-8 lg:py-0 md:px-5">
                <div className="overflow-hidden pr-8 lg:overflow-visible md:pr-0">
                    <div className="max-w-[37.25rem] lg:max-w-full">
                        <div className="flex justify-between items-center max-w-[39.2rem] mb-10 lg:max-w-full">
                            <div className="text-h2 2xl:text-h3 lg:text-h2">
                                Accommodations <br></br>& Suite.
                            </div>
                            <div className="flex shrink-0 ml-10 space-x-4 md:hidden">
                                <button
                                    className="group w-16 h-16 border border-primary-500 transition-colors hover:bg-primary-500 xl:w-12 xl:h-12"
                                    onClick={() =>
                                        swiperRef.current?.slidePrev()
                                    }
                                >
                                    <Icon
                                        className="fill-primary-500 transition-colors group-hover:fill-white"
                                        name="arrow-left"
                                    />
                                </button>
                                <button
                                    className="group w-16 h-16 border border-primary-500 transition-colors hover:bg-primary-500 xl:w-12 xl:h-12"
                                    onClick={() =>
                                        swiperRef.current?.slideNext()
                                    }
                                >
                                    <Icon
                                        className="fill-primary-500 transition-colors group-hover:fill-white"
                                        name="arrow-right"
                                    />
                                </button>
                            </div>
                        </div>
                        <Swiper
                            className="!overflow-visible lg:max-w-[34rem] lg:!ml-0 md:max-w-[17.5rem]"
                            modules={[Navigation]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            spaceBetween={24}
                            slidesPerView={1}
                            speed={500}
                            breakpoints={{
                                1024: {
                                    spaceBetween: 56,
                                },
                                786: {
                                    spaceBetween: 32,
                                },
                            }}
                        >
                            {sliderAccommodations.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <div className="aspect-[0.93] mb-8">
                                        <Image
                                            className="w-full h-full object-cover opacity-100"
                                            src={slide.image}
                                            width={606}
                                            height={640}
                                            alt=""
                                        />
                                    </div>
                                    <div className="mb-4 text-h5">
                                        {slide.title}
                                    </div>
                                    <div className="">{slide.content}</div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Link
                            className="btn-secondary min-w-[17.4rem] mt-10 md:w-full"
                            href="/accommodation"
                        >
                            View All Accommodations
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
