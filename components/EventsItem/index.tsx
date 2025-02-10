import Image from "@/components/Image";

type ItemType = {
    id: string;
    title: string;
    guestsSeated: number;
    guestsStanding: number;
    content: string;
    image: string;
};

type EventsItemProps = {
    className?: string;
    item: ItemType;
};

const EventsItem = ({ className, item }: EventsItemProps) => (
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
        <div className="mb-4 text-14m">
            <div className="">{item.guestsSeated} guests seated</div>
            <div className="">{item.guestsStanding} guests standing</div>
        </div>
        <div className="">{item.content}</div>
    </div>
);

export default EventsItem;
