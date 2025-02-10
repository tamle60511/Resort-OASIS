import Image from "@/components/Image";
import Explore from "@/components/Explore";

type ItemType = {
    id: string;
    title: string;
    content: string;
    image: string;
};

type PackageItemProps = {
    className?: string;
    item: ItemType;
};

const PackageItem = ({ className, item }: PackageItemProps) => (
    <div className={`flex flex-col bg-white ${className || ""}`}>
        <div className="h-[20.625rem]">
            <Image
                className="w-full h-full object-cover"
                src={item.image}
                width={462}
                height={330}
                alt=""
            />
        </div>
        <div className="flex flex-col items-start grow px-6 py-8">
            <div className="min-h-[7.2rem] mb-2 text-h3 text-primary-500 lg:min-h-max">
                {item.title}
            </div>
            <div className="mb-8 text-16r">{item.content}</div>
            <Explore
                className="mt-auto"
                text="Read More"
                url={`/package/${item.id}`}
            />
        </div>
    </div>
);

export default PackageItem;
