import Link from "next/link";

type ItemType = {
    id: string;
    title: string;
    location: string;
    employment: string;
    date: string;
};

type PositionProps = {
    item: ItemType;
};

const Position = ({ item }: PositionProps) => (
    <div className="flex items-center py-6 border-b border-n-100 lg:flex-col lg:items-stretch">
        <div className="grow pr-6 text-14b text-primary-500 lg:mb-2 lg:pr-0">
            {item.title}
        </div>
        <div className="w-[26%] pr-6 lg:w-full lg:mb-2 lg:pr-0">
            {item.location}
        </div>
        <div className="w-[24%] pr-6 lg:w-full lg:mb-6 lg:pr-0">
            <div className="lg:mb-2">{item.employment}</div>
            <div>{item.date}</div>
        </div>
        <Link
            className="btn-secondary shrink-0 h-10 text-16m lg:ml-auto"
            href={`/career/${item.id}`}
        >
            Apply Now
        </Link>
    </div>
);

export default Position;
