import Image from "@/components/Image";
import Accord from "./Accord";

type FaqsProps = {};

const Faqs = ({}: FaqsProps) => (
    <div className="py-20">
        <div className="container-lg">
            <div className="mb-10 text-center text-h2">Our Core Values.</div>
            <div className="space-y-20 xl:space-y-15">
                <Accord title="Our Vision" defaultOpen>
                    <div className="flex lg:block">
                        <div className="shrink-0 w-[20.94rem] lg:w-full lg:mb-8 md:mb-6">
                            <Image
                                className="w-full"
                                src="/images/content/mission-pic-1.jpg"
                                width={355}
                                height={516}
                                alt=""
                            />
                        </div>
                        <div className="grow pl-10 lg:pl-0">
                            <ul className="list-square">
                                <li className="">
                                    At Hidden Oasis Resort, our vision is to
                                    provide our guests with a unique and
                                    transformative experience in the heart of
                                    Ninh Thuan, Vietnam. We believe that
                                    everyone should have the opportunity to
                                    connect with nature and experience the
                                    tranquility and beauty that it has to offer.
                                </li>
                                <li>
                                    We are committed to sustainable tourism
                                    practices that minimize our impact on the
                                    environment and support the local community.
                                    We believe that responsible tourism can not
                                    only benefit our guests but also the local
                                    economy and environment.
                                </li>
                                <li>
                                    Our vision is to create a resort that is
                                    both luxurious and eco-friendly. We use
                                    sustainable materials and methods in our
                                    construction and maintenance to minimize our
                                    carbon footprint. Our facilities are
                                    designed to blend in with the natural
                                    surroundings, allowing our guests to feel
                                    truly immersed in nature.
                                </li>
                                <li>
                                    We offer a range of activities and
                                    experiences that promote wellness,
                                    mindfulness, and connection with nature.
                                    From yoga and meditation to hiking and
                                    birdwatching, our guests can choose from a
                                    variety of activities that suit their
                                    interests and needs. We also offer cultural
                                    experiences, such as visits to local
                                    villages and learning about the traditional
                                    crafts and practices of the area.
                                </li>
                                <li>
                                    At Hidden Oasis Resort, we believe that
                                    everyone should have the opportunity to
                                    reconnect with nature and themselves. Our
                                    vision is to create a space where our guests
                                    can disconnect from the stresses of everyday
                                    life and reconnect with what is truly
                                    important. We hope that our guests leave
                                    feeling refreshed, inspired, and with a
                                    renewed appreciation for the natural world.
                                </li>
                                <li>
                                    Thank you for considering Hidden Oasis
                                    Resort as your destination for relaxation
                                    and rejuvenation. We look forward to
                                    welcoming you to our eco-friendly oasis in
                                    the heart of Ninh Thuan.
                                </li>
                            </ul>
                        </div>
                    </div>
                </Accord>
                <Accord title="Our Mission" defaultOpen>
                    <div className="flex lg:flex-col-reverse">
                        <div className="grow pr-10 lg:pr-0">
                            <div className="mb-3">
                                Our mission at Hidden Oasis Resort is to provide
                                our guests with exceptional service and
                                unforgettable experiences. We are dedicated to
                                upholding the highest standards of service
                                excellence, loyalty, passion, innovation, and
                                integrity in everything we do.
                            </div>
                            <ul className="list-square mb-3">
                                <li>
                                    <strong className="text-primary-500">
                                        Service Excellence Loyalty:
                                    </strong>{" "}
                                    We symbolize loyalty by working
                                    collaboratively with our guests, team
                                    members, partners, and suppliers to exceed
                                    shared goals. Our commitment to service
                                    excellence and loyalty means that we strive
                                    to build lasting relationships with our
                                    guests, anticipating their needs, and
                                    exceeding their expectations at every turn.
                                </li>
                                <li>
                                    <strong className="text-primary-500">
                                        Passionate:
                                    </strong>{" "}
                                    We are passionate about customer
                                    satisfaction and offering memorable stays
                                    and lasting memories. Our team members are
                                    passionate about creating a welcoming and
                                    comfortable atmosphere for our guests,
                                    ensuring that every aspect of their stay is
                                    enjoyable and unforgettable.
                                </li>
                                <li>
                                    <strong className="text-primary-500">
                                        Innovation:
                                    </strong>{" "}
                                    We constantly strive for a perfect blend of
                                    tradition and innovation as per global
                                    trends. Our commitment to innovation means
                                    that we are always looking for new and
                                    exciting ways to enhance our guests&apos;
                                    experience, whether it be through
                                    incorporating new technologies or offering
                                    unique activities and experiences.
                                </li>
                                <li>
                                    <strong className="text-primary-500">
                                        Integrity:
                                    </strong>{" "}
                                    We believe that integrity is essential in
                                    all our dealings. Our commitment to
                                    integrity means that we are honest and
                                    transparent in our interactions with our
                                    guests, team members, partners, and
                                    suppliers. We take pride in upholding
                                    ethical business practices and treating
                                    everyone with respect and fairness.
                                </li>
                            </ul>
                            <div className="">
                                At Hidden Oasis Resort, our mission is to
                                provide our guests with a truly unique and
                                transformative experience in the heart of Ninh
                                Thuan. We strive to create an environment that
                                fosters relaxation, rejuvenation, and a
                                connection with nature. Thank you for
                                considering us for your next getaway, and we
                                look forward to welcoming you to our resort.
                            </div>
                        </div>
                        <div className="shrink-0 w-[34.38rem] xl:w-[30rem] lg:w-full lg:mb-8 md:mb-6">
                            <Image
                                className="w-full"
                                src="/images/content/mission-pic-2.jpg"
                                width={550}
                                height={728}
                                alt=""
                            />
                        </div>
                    </div>
                </Accord>
            </div>
        </div>
    </div>
);

export default Faqs;
