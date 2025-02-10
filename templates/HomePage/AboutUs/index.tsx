import Link from "next/link";
import Image from "@/components/Image";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => (
    <div className="py-32 2xl:py-24 lg:py-20 md:pb-10">
        <div className="container flex items-center max-w-[76.875rem] lg:block md:max-w-full">
            <div className="relative shrink-0 w-[35rem] pr-[9.125rem] pb-[6.5rem] xl:w-[30rem] lg:w-[34rem] lg:mx-auto lg:mb-12 md:w-full md:pr-24 md:pb-15">
                <Image
                    className="w-full"
                    src="/images/content/about-pic-1.jpg"
                    width={413}
                    height={465}
                    alt=""
                />
                <div className="absolute right-0 bottom-0 w-[46.42%] aspect-square">
                    <Image
                        className="w-full h-full object-cover"
                        src="/images/content/about-pic-2.jpg"
                        width={260}
                        height={260}
                        alt=""
                    />
                </div>
                <div className="absolute top-4.5 right-9 -z-1 w-[46.42%]">
                    <Image
                        className="w-full"
                        src="/images/content/wave.svg"
                        width={260}
                        height={96}
                        alt=""
                    />
                </div>
                <div className="absolute -left-17 -bottom-17 z-1 w-[55.36%] 2xl:-left-6 2xl:bottom-8 2xl:w-[30%] md:hidden">
                    <Image
                        className="w-full"
                        src="/images/content/text-circle.svg"
                        width={260}
                        height={96}
                        alt=""
                    />
                </div>
            </div>
            <div className="grow pl-[10.625rem] 2xl:pl-20 xl:pl-12 lg:pl-0">
                <div className="subtitle">NINH THUAN, VIETNAM</div>
                <div className="mb-8 text-h2">Luxury Living in Pagadise.</div>
                <div className="mb-8">
                    Hidden Oasis is a beautiful resort in Ninh Thuan, Vietnam.
                    It&apos;s surrounded by mountains and the ocean, with lush
                    greenery and colorful flowers. The rooms are spacious and
                    luxurious with modern amenities. There are many activities
                    to enjoy, and the dining experience is exceptional. The
                    resort also has a world-class spa for relaxation and
                    rejuvenation. It&apos;s a paradise on earth and an
                    unforgettable destination in Vietnam.
                </div>
                <Link
                    className="btn-secondary min-w-[15.25rem] md:min-w-full"
                    href="/about-us"
                >
                    Read More
                </Link>
            </div>
        </div>
    </div>
);

export default AboutUs;
