import Image from "@/components/Image";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="py-20">
        <div className="container-lg">
            <div className="mb-6 text-center text-subtitle text-n-500 md:text-left">
                NINH THUAN, VIETNAM
            </div>
            <div className="mb-10 text-center text-h2 md:text-left">
                Luxury Living in Pagadise.
            </div>
            <div className="content">
                <p>
                    Hidden Oasis is a beautiful resort in Ninh Thuan, Vietnam.
                    It&apos;s surrounded by mountains and the ocean, with lush
                    greenery and colorful flowers. The rooms are spacious and
                    luxurious with modern amenities. There are many activities
                    to enjoy, and the dining experience is exceptional. The
                    resort also has a world-class spa for relaxation and
                    rejuvenation. It&apos;s a paradise on earth and an
                    unforgettable destination in Vietnam.
                </p>
                <figure>
                    <Image
                        className="w-full md:min-h-[14rem] md:object-cover"
                        src="/images/content/main-pic-1.jpg"
                        width={1432}
                        height={625}
                        alt=""
                    />
                </figure>
                <p>
                    Escape to a world of natural beauty and luxurious comfort at
                    our Hidden Oasis resort. Nestled in a secluded area, our
                    resort offers the perfect getaway from the stresses of
                    modern life. Surrounded by lush greenery and the stunning
                    ocean, our accommodations are designed to provide the
                    ultimate in comfort and relaxation.<br></br>Whether
                    you&apos;re traveling alone, with a partner, or with a group
                    of friends or family, we have the perfect accommodation to
                    suit your needs. Our spacious villas offer plenty of room to
                    spread out, while our cozy bungalows provide a more intimate
                    setting. All of our accommodations feature private balconies
                    or terraces with breathtaking views of the surrounding
                    nature.<br></br>At our resort, you&apos;ll never run out of
                    things to do. Start your day with a refreshing hike through
                    the nearby trails, where you can enjoy the sights and sounds
                    of the local wildlife. If you prefer water activities, take
                    a kayaking excursion or simply relax on the pristine
                    beaches. In the evening, wind down with a restorative yoga
                    class or a dip in our infinity pool.<br></br>For those
                    seeking a more indulgent experience, our spa offers a range
                    of treatments and massages to soothe your body and mind.
                    From traditional Balinese massages to rejuvenating facials,
                    our skilled therapists will help you feel refreshed and
                    revitalized.
                </p>
                <div className="flex space-x-6 md:space-x-4">
                    <figure className="flex-1">
                        <Image
                            className="w-full"
                            src="/images/content/about-pic-3.jpg"
                            width={559}
                            height={722}
                            alt=""
                        />
                    </figure>
                    <figure className="flex-1">
                        <Image
                            className="w-full"
                            src="/images/content/about-pic-4.jpg"
                            width={559}
                            height={722}
                            alt=""
                        />
                    </figure>
                </div>
                <p>
                    When it comes to dining, our resort offers a range of
                    options to satisfy any palate. Sample local delicacies at
                    our restaurant, or enjoy a romantic dinner for two on the
                    beach. If you prefer a more private dining experience, we
                    can arrange for a chef to prepare a gourmet meal in your
                    villa or bungalow.<br></br>Our Hidden Oasis resort is the
                    perfect destination for those seeking a peaceful and
                    luxurious escape. Book your stay today and experience the
                    beauty of nature in style.
                </p>
                <p>
                    For those seeking a more indulgent experience, our spa
                    offers a range of treatments and massages to soothe your
                    body and mind. From traditional Balinese massages to
                    rejuvenating facials, our skilled therapists will help you
                    feel refreshed and revitalized.
                    <br></br>When it comes to dining, our resort offers a range
                    of options to satisfy any palate. Sample local delicacies at
                    our restaurant, or enjoy a romantic dinner for two on the
                    beach. If you prefer a more private dining experience, we
                    can arrange for a chef to prepare a gourmet meal in your
                    villa or bungalow.
                    <br></br>At our Hidden Oasis resort, you&apos;ll have the
                    opportunity to disconnect from the outside world and connect
                    with nature. It&apos;s the perfect place to escape the
                    stresses of modern life and recharge your batteries. Whether
                    you&apos;re seeking adventure, relaxation, or a little bit
                    of both, our resort is the perfect destination for you.
                </p>
            </div>
        </div>
    </div>
);

export default Main;
