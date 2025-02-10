import Image from "@/components/Image";
import Icon from "@/components/Icon";
import LastestNews from "./LastestNews";

import { news } from "@/mocks/news";
import { socialsPost } from "@/constants/socials";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const article = news.find((article) => article.id === id);

    return article ? (
        <div className="py-20 md:py-10">
            <div className="container flex items-start lg:block">
                <div className="grow pr-20 2xl:pr-16 xl:pr-12 lg:pr-0">
                    <div className="mb-6 text-h2">{article.title}</div>
                    <div className="flex items-center mb-6 text-14m md:block">
                        <div className="mr-auto md:mr-0 md:mb-4">
                            Posted on March 26, 2023
                        </div>
                        <div className="flex items-center">
                            <div className="mr-4">Share on</div>
                            <div className="flex">
                                {socialsPost.map((social) => (
                                    <a
                                        className="group"
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={social.id}
                                    >
                                        <Icon
                                            className="w-10 h-10 fill-n-700 transition-colors group-hover:fill-primary-500"
                                            name={social.icon}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <Image
                            className="w-full max-h-[31.75rem] object-cover"
                            src={article.image}
                            width={1028}
                            height={480}
                            alt=""
                        />
                    </div>
                    <div className="content-lg">
                        <p>
                            Ninh Thuan, a province located in the South Central
                            Coast of Vietnam, is known for its beautiful beaches
                            and pristine coastline. With its crystal-clear
                            waters and abundant marine life, Ninh Thuan is a
                            haven for water sports enthusiasts. Discover the
                            beauty of Ninh Thuan by experiencing 1001 water
                            activities that will leave you breathless.<br></br>
                            Snorkeling and Diving: Explore the colorful
                            underwater world of Ninh Thuan and discover its rich
                            marine life. With a wide range of snorkeling and
                            diving sites to choose from, both beginners and
                            experienced divers will have an unforgettable
                            experience. The clear waters of Ninh Thuan offer
                            excellent visibility, making it possible to see a
                            variety of marine creatures such as colorful fish,
                            turtles, and even sharks.<br></br>Kayaking and
                            Canoeing: Paddle through the calm waters of Ninh
                            Thuan and admire the stunning scenery around you.
                            Kayaking and canoeing tours are perfect for those
                            who want to explore the hidden coves and beaches of
                            Ninh Thuan. The coastline of Ninh Thuan is full of
                            beautiful beaches and bays, and a kayaking or
                            canoeing tour is the perfect way to discover them.
                            <br></br>Jet Skiing and Parasailing: Experience the
                            thrill of speed as you ride the waves on a jet ski
                            or soar high above the water on a parasail. These
                            activities are perfect for adrenaline junkies who
                            want an exciting adventure. With trained instructors
                            and modern equipment, you can enjoy these activities
                            safely and securely.<br></br>Fishing and Crabbing:
                            Join local fishermen on their boats and learn how to
                            catch fish and crabs using traditional methods. This
                            activity is perfect for those who want to experience
                            the local way of life in Ninh Thuan. You&apos;ll get
                            to see how the fishermen catch fish and crabs using
                            nets, traps, and other traditional tools. After the
                            fishing or crabbing trip, you can enjoy a delicious
                            seafood meal prepared by the locals.<br></br>Sunset
                            Cruise: End your day in Ninh Thuan with a relaxing
                            sunset cruise and enjoy the breathtaking view of the
                            sun setting over the horizon. A sunset cruise is the
                            perfect way to unwind after a day of water
                            activities. You can sit back, relax, and enjoy the
                            view of the stunning coastline as the sun sets.
                            <br></br>In conclusion, Ninh Thuan is a paradise for
                            water sports enthusiasts, offering a wide variety of
                            activities that will leave you with unforgettable
                            memories. So, if you&apos;re looking for an
                            adventure, come to Ninh Thuan and discover the
                            beauty of this stunning province.
                        </p>
                    </div>
                </div>
                <div className="sticky top-6 shrink-0 w-[20.25rem] xl:w-[18rem] lg:w-full lg:mt-10">
                    <LastestNews />
                </div>
            </div>
        </div>
    ) : null;
};

export default Main;
