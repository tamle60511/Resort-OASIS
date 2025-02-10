import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import PackageItem from "@/components/PackageItem";

import { packageList } from "@/mocks/packageList";

type InterestedProps = {};

const Interested = ({}: InterestedProps) => (
    <div className="py-20">
        <div className="container">
            <div className="mb-10 text-h2">You Might Be Interested.</div>
            <div className="flex space-x-6 lg:block lg:space-x-0 lg:space-y-6">
                {packageList.slice(0, 3).map((item) => (
                    <PackageItem className="" item={item} key={item.id} />
                ))}
            </div>
        </div>
    </div>
);

export default Interested;
