import Image from "@/components/Image";
import Сommunication from "@/components/Сommunication";

import { dining } from "@/mocks/dining";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const item = dining.find((item) => item.id === id);

    return item ? (
        <div className="py-20 lg:pt-10 md:pt-3 md:pb-10">
            <div className="container">
                <div className="mb-10 text-h2 md:text-center md:text-h3">
                    {item.title}
                </div>
                <div className="flex items-start lg:block">
                    <div className="grow pr-10 xl:pr-6 lg:mb-10 lg:pr-0">
                        <div className="mb-10">
                            <Image
                                className="w-full md:min-h-[14rem] md:object-cover"
                                src="/images/content/dining-pic.jpg"
                                width={981}
                                height={624}
                                alt=""
                            />
                        </div>
                        <div className="content-lg text-16r">
                            <p>
                                Start your day at the lively and vibrant The
                                Restaurant and Terrace, located at Hidden Oasis
                                Resort, with a sumptuous breakfast buffet spread
                                across various interactive live cooking stations
                                of the open show kitchen. For lunch and dinner,
                                enjoy specialties from Phu Quoc, regional
                                Vietnam, as well as international classics
                                crafted to perfection by our internationally
                                trained chef team. Choose to dine under the
                                soaring ceilings of the main dining room or
                                outdoors by the poolside with sea views.
                            </p>
                            <p>
                                Opening Hours:<br></br>Breakfast Buffet | 7:00 -
                                10:00 <br></br>Lunch | A la Carte | 12:00 -
                                15:00<br></br>Dinner | A la Carte | 18:00 -
                                22:00<br></br>Notice: Operating hours of our
                                restaurants and bars might be subject to change.
                            </p>
                            <p>
                                Menu:<br></br>The Restaurant and Terrace - Lunch
                                Menu<br></br>The Restaurant and Terrace - Dinner
                                Menu<br></br>The Restaurant and Terrace - Drink
                                Menu
                            </p>
                            <p>In Villa Dining Menu (24/7)</p>
                        </div>
                    </div>
                    <Сommunication className="sticky top-5 shrink-0 w-[25.75rem] 2xl:w-[24rem] lg:w-full" />
                </div>
            </div>
        </div>
    ) : null;
};

export default Main;
