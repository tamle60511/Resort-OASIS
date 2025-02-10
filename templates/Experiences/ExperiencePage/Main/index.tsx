import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import LastestExperiences from "./LastestExperiences";

import { experiences } from "@/mocks/experiences";
import { socialsPost } from "@/constants/socials";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const experience = experiences.find((experience) => experience.id === id);

    return experience ? (
        <div className="py-20 md:pt-6 md:pb-10">
            <div className="container flex items-start lg:block">
                <div className="grow pr-20 xl:pr-12 lg:mb-12 lg:pr-0">
                    <div className="mb-6 text-h2">{experience.title}</div>
                    <div className="flex items-center mb-6 text-h7 uppercase md:block ">
                        <div className="mr-auto md:mb-4">
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
                    <div className="content-lg">
                        <figure>
                            <Image
                                className="w-full max-h-[31.75rem] object-cover md:min-h-[14rem]"
                                src={experience.image}
                                width={1028}
                                height={508}
                                alt=""
                            />
                        </figure>
                        <h4>The Cham Culture</h4>
                        <p>
                            Ninh Thuan, a province located in the south-central
                            region of Vietnam, offers a unique cultural
                            immersion experience for travelers. Rich in history
                            and traditions, Ninh Thuan is home to the Cham
                            people, an ethnic minority group with a distinct
                            culture and language.<br></br>For those seeking to
                            understand more about the Cham culture, a visit to
                            the Po Klong Garai Towers is a must. This historical
                            site, dating back to the early Champa Kingdom in the
                            ninth century, showcases the Hindu-Buddhist style of
                            Cham architecture and provides insight into the
                            religious beliefs of the Cham people.<br></br>
                            Another cultural attraction in Ninh Thuan is the
                            Rang Beach Sand Hills. These rolling sand dunes,
                            located near the coast, offer a picturesque setting
                            for visitors to experience the traditional folk
                            games of the Cham people, such as &quot;Bai
                            Cho&quot; and &quot;Sai Bat Dau.&quot; These games
                            involve the use of bamboo balls and require
                            precision and skill.<br></br>In addition to
                            experiencing the culture of the Cham people,
                            visitors to Ninh Thuan can also immerse themselves
                            in the local food scene. Ninh Thuan is famous for
                            its seafood dishes, particularly the &quot;banh
                            hoi&quot; (thin rice vermicelli sheets served with
                            grilled fish or shrimp) and &quot;banh can&quot;
                            (rice cake served with seafood and vegetables).
                            <br></br>To fully appreciate the culinary delights
                            of Ninh Thuan, visitors can take part in cooking
                            classes offered by local chefs. These classes
                            provide an opportunity to learn about the
                            ingredients used in traditional Cham cuisine and the
                            cooking techniques employed to create these
                            flavorful dishes.<br></br>
                            Overall, a cultural immersion trip to Ninh Thuan
                            offers a unique and enriching experience for
                            travelers. From exploring historical sites to
                            sampling delicious local cuisine, visitors can gain
                            a deeper understanding of the Cham culture and
                            traditions.
                        </p>
                        <p>
                            Ninh Thuan, a province located in the south-central
                            region of Vietnam, offers a unique cultural
                            immersion experience for travelers. Rich in history
                            and traditions, Ninh Thuan is home to the Cham
                            people, an ethnic minority group with a distinct
                            culture and language.<br></br>For those seeking to
                            understand more about the Cham culture, a visit to
                            the Po Klong Garai Towers is a must. This historical
                            site, dating back to the early Champa Kingdom in the
                            ninth century, showcases the Hindu-Buddhist style of
                            Cham architecture and provides insight into the
                            religious beliefs of the Cham people.<br></br>
                            Another cultural attraction in Ninh Thuan is the
                            Rang Beach Sand Hills. These rolling sand dunes,
                            located near the coast, offer a picturesque setting
                            for visitors to experience the traditional folk
                            games of the Cham people, such as &quot;Bai
                            Cho&quot; and &quot;Sai Bat Dau.&quot; These games
                            involve the use of bamboo balls and require
                            precision and skill.<br></br>In addition to
                            experiencing the culture of the Cham people,
                            visitors to Ninh Thuan can also immerse themselves
                            in the local food scene. Ninh Thuan is famous for
                            its seafood dishes, particularly the &quot;banh
                            hoi&quot; (thin rice vermicelli sheets served with
                            grilled fish or shrimp) and &quot;banh can&quot;
                            (rice cake served with seafood and vegetables).
                            <br></br>To fully appreciate the culinary delights
                            of Ninh Thuan, visitors can take part in cooking
                            classes offered by local chefs. These classes
                            provide an opportunity to learn about the
                            ingredients used in traditional Cham cuisine and the
                            cooking techniques employed to create these
                            flavorful dishes.<br></br>
                            Overall, a cultural immersion trip to Ninh Thuan
                            offers a unique and enriching experience for
                            travelers. From exploring historical sites to
                            sampling delicious local cuisine, visitors can gain
                            a deeper understanding of the Cham culture and
                            traditions.
                        </p>
                    </div>
                    <Link
                        className="btn-secondary min-w-[14.75rem] mt-6 md:min-w-full"
                        href="/request-for-proposal"
                    >
                        Make an enquiry
                    </Link>
                </div>
                <div className="sticky top-6 shrink-0 w-[20.25rem] xl:w-[17rem] lg:w-full">
                    <LastestExperiences />
                </div>
            </div>
        </div>
    ) : null;
};

export default Main;
