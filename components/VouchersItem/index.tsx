import Image from "@/components/Image";
import Explore from "@/components/Explore";

type ItemType = {
    id: string;
    title: string;
    content: string;
    image: string;
};

type VouchersItemProps = {
    className?: string;
    item: ItemType;
};

const VouchersItem = ({ className, item }: VouchersItemProps) => (
    <div className={`flex flex-col items-start ${className || ""}`}>
        <div className="h-[25.125rem] mb-8">
            <Image
                className="w-full h-full object-cover"
                src={item.image}
                width={704}
                height={402}
                alt=""
            />
        </div>
        <div className="mb-4 text-h4-libre text-primary-500">{item.title}</div>
        <div className="mb-8">{item.content}</div>
        <Explore className="mt-auto" url={`/vouchers/${item.id}`} />
    </div>
);

export default VouchersItem;
