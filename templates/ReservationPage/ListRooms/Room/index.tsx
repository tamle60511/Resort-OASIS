import Link from "next/link";
import Image from "@/components/Image";

type ItemType = {
    id: string;
    category: string;
    title: string;
    price: string;
    options: Array<string>;
    image: string;
};

type RoomProps = {
    className?: string;
    item: ItemType;
};

const Room = ({ className, item }: RoomProps) => (
    <div className={`${className || ""}`}>
        <div className="flex -mx-3 md:block md:mx-0">
            <div className="relative w-[calc(50%-1.5rem)] min-h-[18.75rem] mx-3 md:w-full md:min-h-[17.125rem] md:mx-0 md:mb-6">
                <Image className="object-cover" src={item.image} fill alt="" />
            </div>
            <div className="flex flex-col items-start w-[calc(50%-1.5rem)] mx-3 md:w-full md:mx-0">
                <div className="mb-4 text-h7 uppercase text-n-500">
                    {item.category}
                </div>
                <div className="mb-4 text-h3">{item.title}</div>
                <div className="mb-4 text-14b text-n-600">
                    From {item.price}
                </div>
                <div className="mb-4">
                    {item.options.map((option, index) => (
                        <div className="text-14m text-n-600" key={index}>
                            {option}
                        </div>
                    ))}
                </div>
                <Link
                    className="mb-6 text-14m text-primary-500 transition-colors hover:text-primary-400"
                    href="/accommodation/0"
                >
                    Room Details
                </Link>
                <Link
                    className="btn-secondary min-w-[15.13rem] mt-auto md:min-w-full"
                    href="/reservation-details"
                >
                    Book Now
                </Link>
            </div>
        </div>
    </div>
);

export default Room;
