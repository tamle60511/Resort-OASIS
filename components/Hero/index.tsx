import Image from "@/components/Image";

type HeroProps = {
    image: string;
    title: string;
    info?: string;
};

const Hero = ({ image, title, info }: HeroProps) => (
    <div className="relative flex items-center min-h-[17.5rem] py-10 after:absolute after:inset-0 after:bg-primary-500/60 after:backdrop-blur-[0.3125rem]">
        <Image className="object-cover" src={image} fill alt="" />
        <div className="container-lg relative z-2 w-full text-center">
            <div className="max-w-[35rem] mx-auto text-h2 text-white">
                {title}
            </div>
            {info && <div className="mt-6 text-16m text-white">{info}</div>}
        </div>
    </div>
);

export default Hero;
