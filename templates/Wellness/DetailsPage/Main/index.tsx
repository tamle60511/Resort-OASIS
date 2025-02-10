import Image from "@/components/Image";
import Сommunication from "@/components/Сommunication";

import { wellness } from "@/mocks/wellness";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const item = wellness.find((item) => item.id === id);

    return item ? (
        <div className="py-20 lg:pt-10 md:pt-3 md:pb-10">
            <div className="container">
                <div className="mb-10 text-h2 md:text-center md:text-h3">
                    {item.title}
                </div>
                <div className="flex items-start lg:block">
                    <div className="grow pr-10 lg:mb-10 lg:pr-0">
                        <div className="mb-10">
                            <Image
                                className="w-full md:min-h-[30rem] md:object-cover"
                                src="/images/content/wellness-pic.jpg"
                                width={981}
                                height={624}
                                alt=""
                            />
                        </div>
                        <div className="content-lg text-16r">
                            <p>
                                he value of nature has always been present in
                                every aspect of our lives as human beings, it is
                                the essence of our breath and the laws of motion
                                within our bodies. A strong and vibrant body is
                                an image of the harmony between nature and
                                humanity. At Hidden Oasis Resort, we are
                                fortunate to care for our guests in Hoi An, a
                                region blessed by nature with true resort values
                                such as blue ocean, warm sunshine, fresh air,
                                and a cultural background focused on peace of
                                mind.<br></br>To bring this harmony to our
                                guests, we offer body care at our Palm Spa with
                                therapies that are entirely derived from
                                nature&apos;s essence. Our spa is equipped with
                                modern beauty methods and offers a variety of
                                choices for relaxation, including facial care,
                                full-body massage, foot therapy, and beauty care
                                services. Our professional staff is trained to
                                provide relaxation and energy recovery for both
                                the body and soul.
                            </p>
                            <div className="flex flex-wrap -mt-6 -mx-3 mb-6 md:block md:m-0 md:mb-6 md:space-y-6">
                                {[
                                    "/images/content/wellness-photo-3.jpg",
                                    "/images/content/wellness-photo-4.jpg",
                                    "/images/content/wellness-photo-5.jpg",
                                ].map((image, index) => (
                                    <div
                                        className="w-[calc(33.333%-1.5rem)] mt-6 mx-3 md:w-full md:m-0"
                                        key={index}
                                    >
                                        <Image
                                            className="w-full"
                                            src={image}
                                            width={311}
                                            height={214}
                                            alt=""
                                        />
                                    </div>
                                ))}
                            </div>
                            <p>
                                <span className="font-medium">
                                    Services offered at our spa include:
                                </span>
                            </p>
                            <ul className="-mt-6 list-disc pl-6">
                                <li>Facial care</li>
                                <li>Full-body massage</li>
                                <li>Foot therapy</li>
                                <li>Spa packages</li>
                                <li>Beauty care services</li>
                            </ul>
                            <p>
                                <span className="font-medium">
                                    OPENING HOURS: 9:00 AM – 10:00 PM
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">
                                    PROMOTIONS: See information
                                </span>
                            </p>
                        </div>
                    </div>
                    <Сommunication className="sticky top-5 shrink-0 w-[25.75rem] 2xl:w-[24rem] xl:w-[22rem] lg:w-full" />
                </div>
            </div>
        </div>
    ) : null;
};

export default Main;
