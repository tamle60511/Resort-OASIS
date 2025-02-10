import Image from "@/components/Image";

type SpaProps = {};

const Spa = ({}: SpaProps) => (
    <div className="py-12 bg-white">
        <div className="container-lg flex items-center md:block">
            <div className="grow md:mb-6">
                <Image
                    className="w-full h-full object-cover rounded-tl-[7.5rem] rounded-br-[7.5rem]"
                    src="/images/content/wellness-photo-1.jpg"
                    width={560}
                    height={540}
                    alt=""
                />
            </div>
            <div className="shrink-0 w-[28rem] ml-[8.5rem] xl:w-[24rem] xl:ml-20 lg:w-[20rem] lg:ml-12 md:w-full md:ml-0">
                <div className="mb-9 text-h2 md:text-h3">
                    Hidden Oasis Spa Facilities.
                </div>
                <ul className="list-disc pl-6 text-16r">
                    <li>Welcome lounge with retail area</li>
                    <li>Consultation room</li>
                    <li>Seven treatment rooms</li>
                    <li>Steam and sauna</li>
                    <li>Fitness center</li>
                    <li>Manicure and pedicure</li>
                    <li>Yoga pavilion</li>
                    <li>Outdoor jungle gym circuit</li>
                    <li>Meditation sala</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Spa;
