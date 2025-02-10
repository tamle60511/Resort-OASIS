import Image from "@/components/Image";
import Explore from "@/components/Explore";

type ItemType = {
    id: string;
    category: string;
    title: string;
    image: string;
};

type AccommodationItemProps = {
    className?: string;
    item: ItemType;
};

const AccommodationItem = ({ className, item }: AccommodationItemProps) => (
    <div className={`${className || ""}`}>
        <div className="h-[25.125rem] mb-8">
            <Image
                className="w-full h-full object-cover"
                src={item.image}
                width={704}
                height={402}
                alt=""
            />
        </div>
        <div className="mb-4 text-h7 uppercase text-n-500">{item.category}</div>
        <div className="mb-8 text-h4-libre text-primary-500 md:mb-6">
            {item.title}
        </div>
        <Explore url={`/accommodation/${item.id}`} />
    </div>
);

export default AccommodationItem;
