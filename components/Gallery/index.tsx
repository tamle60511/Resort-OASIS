import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

type ImagesType = {
    id: string;
    src: string;
    width: number;
    height: number;
};

type GalleryProps = {
    images: ImagesType[];
    index: number;
};

const Gallery = ({ images, index }: GalleryProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const swiperRef = useRef<SwiperType>();

    return (
        <div className="">
            <div className="relative mb-10 md:mb-6">
                <Swiper
                    className="swiper-gallery-main"
                    loop={true}
                    spaceBetween={10}
                    navigation={false}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    initialSlide={index}
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <Image
                                className="w-full"
                                src={image.src}
                                width={image.width}
                                height={image.height}
                                alt=""
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="md:flex md:justify-center md:mt-5 md:space-x-6">
                    <button
                        className="absolute top-1/2 -left-20 w-14 h-14 -translate-y-1/2 transition-opacity outline-none hover:opacity-80 lg:z-3 lg:left-0 lg:w-10 lg:h-10 lg:bg-white md:static md:translate-y-0"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <Icon
                            className="w-12 h-12 fill-white lg:w-8 lg:h-8 lg:fill-black"
                            name="arrow-prev"
                        />
                    </button>
                    <button
                        className="absolute top-1/2 -right-20 w-14 h-14 -translate-y-1/2 transition-opacity outline-none hover:opacity-80 lg:z-3 lg:right-0 lg:w-10 lg:h-10 lg:bg-white md:static md:translate-y-0"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <Icon
                            className="w-12 h-12 fill-white lg:w-8 lg:h-8 lg:fill-black"
                            name="arrow-next"
                        />
                    </button>
                </div>
            </div>
            <Swiper
                className="swiper-gallery-thumbs md:!hidden"
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={8}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                breakpoints={{
                    1024: {
                        slidesPerView: 7,
                    },
                    768: {
                        slidesPerView: 5,
                        autoHeight: false,
                    },
                }}
            >
                {images.map((image) => (
                    <SwiperSlide className="cursor-pointer" key={image.id}>
                        <Image
                            className="w-full"
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Gallery;
