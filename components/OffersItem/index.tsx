import Image from "@/components/Image";
import Explore from "@/components/Explore";

type ItemType = {
    id: string;
    image: string;
    title: string;
    info: string;
    content: string;
};

type OffersItemProps = {
    className?: string;
    item: ItemType;
};

const OffersItem = ({ className, item }: OffersItemProps) => (
    <div className={`${className || ""}`}>
        <div className="h-[17.5rem] mb-8 md:h-54">
            <Image
                className="w-full h-full object-cover"
                src={item.image}
                width={704}
                height={280}
                alt=""
            />
        </div>
        <div className="mb-6 text-h4-libre text-primary-500">{item.title}</div>
        <div className="mb-4 text-h6-sans">“{item.info}”</div>
        <div className="mb-6">{item.content}</div>
        <Explore url={`/special-offers/${item.id}`} />
    </div>
);

export default OffersItem;
