import Image from "@/components/Image";

import { experts } from "@/mocks/experts";

type ExpertsProps = {};

const Experts = ({}: ExpertsProps) => (
    <div className="py-20 md:py-10">
        <div className="container-lg">
            <div className="mb-20 text-center md:mb-12 md:text-left">
                <div className="mb-4 text-h2">Wellness & Spa Experts.</div>
                <div className="text-16r">
                    Discover a multi-faceted approach to wellness. Whether you
                    choose to simply unwind or delve deeper to explore a new
                    version of yourself, our team of expert therapists and
                    visiting practitioners will guide you towards optimal
                    well-being in alignment with your wellness goals.
                </div>
            </div>
            <div className="flex flex-wrap max-w-[60rem] mx-auto -mt-22 md:-mt-10">
                {experts.map((expert) => (
                    <div
                        className="w-1/3 mt-22 text-center md:w-full md:mt-10"
                        key={expert.id}
                    >
                        <div className="w-[14.5rem] h-[14.5rem] mx-auto mb-6 lg:w-[10rem] lg:h-[10rem] md:w-[14.5rem] md:h-[14.5rem]">
                            <Image
                                className="w-full h-full object-cover rounded-full"
                                src={expert.avatar}
                                width={232}
                                height={232}
                                alt=""
                            />
                        </div>
                        <div className="text-14m">{expert.position}</div>
                        <div className="text-h4-libre text-primary-500">
                            {expert.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Experts;
