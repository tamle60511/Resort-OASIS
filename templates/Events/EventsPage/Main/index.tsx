import Image from "@/components/Image";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="py-10 lg:py-0">
        <div className="container lg:px-0">
            <Image
                className="w-full md:min-h-[17.5rem] md:object-cover"
                src="/images/content/main-pic-1.jpg"
                width={1432}
                height={810}
                alt=""
            />
        </div>
    </div>
);

export default Main;
