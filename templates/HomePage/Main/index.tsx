import Image from "@/components/Image";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="py-10 lg:p-0">
        <div className="container lg:px-0">
            <Image
                className="w-full lg:min-h-[16rem] lg:object-cover"
                src="/images/content/main-pic-1.jpg"
                width={1432}
                height={810}
                alt=""
            />
        </div>
    </div>
);

export default Main;
