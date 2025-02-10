import Link from "next/link";
import Image from "@/components/Image";

type ItemType = {
    id: string;
    title: string;
    details: string;
    food: string;
    operatingHours: string;
    image: string;
};

type DiningItemProps = {
    className?: string;
    item: ItemType;
    row?: boolean;
};

const DiningItem = ({ className, item, row }: DiningItemProps) => (
    <div
        className={`bg-white ${row ? "flex md:block" : "flex flex-col"} ${
            className || ""
        }`}
    >
        <div
            className={`${
                row
                    ? "shrink-0 w-[50.84%] min-h-[20.625rem] lg:w-1/2 md:w-full md:min-h-max md:h-[20.625rem]"
                    : "shrink-0 h-[20.625rem]"
            }`}
        >
            <Image
                className="w-full h-full object-cover"
                src={item.image}
                width={728}
                height={330}
                alt=""
            />
        </div>
        <div
            className={`${
                row
                    ? "grow pt-8 px-6 pb-7 md:px-6 md:py-8"
                    : "flex flex-col grow px-6 py-8"
            }`}
        >
            <div className="mb-2 text-h3">{item.title}</div>
            <div className="mb-8 text-16r">{item.details}</div>
            <div className="mb-8">
                <div className="flex items-center mb-2 text-16r text-n-500">
                    <div className="shrink-0 mr-2">
                        <Image
                            className="w-[1.875rem]"
                            src="/images/content/food.svg"
                            width={30}
                            height={30}
                            alt=""
                        />
                    </div>
                    {item.food}
                </div>
                <div className="flex items-center text-16r text-n-500">
                    <div className="shrink-0 mr-2">
                        <Image
                            className="w-[1.875rem]"
                            src="/images/content/clock.svg"
                            width={30}
                            height={30}
                            alt=""
                        />
                    </div>
                    Operating Hours: {item.operatingHours}
                </div>
            </div>
            <Link
                className={`btn-primary ${
                    row ? "min-w-[14.75rem] md:min-w-full" : "w-full mt-auto"
                }`}
                href={`/dining/${item.id}`}
            >
                VIEW DETAILS
            </Link>
        </div>
    </div>
);

export default DiningItem;
