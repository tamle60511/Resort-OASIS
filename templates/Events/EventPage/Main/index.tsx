import Image from "@/components/Image";

import { events } from "@/mocks/events";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const event = events.find((event) => event.id === id);

    return event ? (
        <div className="py-20 md:py-10">
            <div className="container">
                <div className="mb-10 text-h2">{event.title}</div>
                <div className="content text-16r">
                    <p>
                        Hidden Oasis Resort is the perfect destination for your
                        dream wedding on the idyllic island of Phu Quoc. Located
                        on Vinh Hy Bay, one of the world&apos;s top 50 most
                        beautiful beaches, our resort offers a serene and
                        breathtaking backdrop for your special day.<br></br>Our
                        team of dedicated wedding planners are experts at
                        crafting bespoke experiences that cater to your every
                        desire. From the planning stages to the execution of
                        your special day, we will be with you every step of the
                        way, ensuring that your wedding day is nothing short of
                        perfect.
                    </p>
                    <figure>
                        <Image
                            className="w-full md:min-h-[14rem] md:object-cover"
                            src="/images/content/main-pic-2.jpg"
                            width={1432}
                            height={624}
                            alt=""
                        />
                    </figure>
                    <p>
                        Our stunning beachfront location allows for breathtaking
                        pre-wedding photoshoots, capturing the beauty of the
                        white sandy beach, turquoise waters, and lush tropical
                        foliage. Our talented team of photographers will work
                        with you to create the perfect memories that will last a
                        lifetime.<br></br>Our executive chef is available to
                        curate a personalized menu, creating culinary delights
                        that will tantalize your taste buds and leave a lasting
                        impression on your guests. We use only the freshest,
                        locally sourced ingredients to create dishes that are
                        not only delicious but also reflective of the vibrant
                        and diverse culture of Phu Quoc.<br></br>At Hidden Oasis
                        Resort, we understand that every couple is unique, and
                        we strive to make your wedding day a reflection of your
                        individual style and personality. Our attention to
                        detail and commitment to providing exceptional service
                        ensures that your wedding day will be one that you and
                        your guests will cherish forever.
                    </p>
                </div>
            </div>
        </div>
    ) : null;
};

export default Main;
