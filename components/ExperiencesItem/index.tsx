import Image from "@/components/Image";
import Explore from "@/components/Explore";

type ItemType = {
    id: string;
    image: string;
    title: string;
    content: string;
};

type ExperiencesItemProps = {
    className?: string;
    classContent?: string;
    item: ItemType;
};

const ExperiencesItem = ({
    className,
    classContent,
    item,
}: ExperiencesItemProps) => (
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
        <div className="mb-4 text-h4-libre text-primary-500">{item.title}</div>
        <div className={`mb-8 ${classContent || ""}`}>{item.content}</div>
        <Explore url={`/experiences/${item.id}`} />
    </div>
);

export default ExperiencesItem;
