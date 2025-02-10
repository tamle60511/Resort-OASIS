import Image from "@/components/Image";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="relative mt-10 md:mt-0">
        <div className="md:relative md:h-[17.5rem]">
            <Image
                className="object-cover"
                src="/images/content/bg-reservation.jpg"
                fill
                alt=""
            />
        </div>
        <div className="container flex items-end h-[30rem] xl:h-[24rem] md:h-auto md:p-0">
            <div className="relative z-2 w-full max-w-[44rem] px-10 py-9 bg-primary-500 text-white xl:max-w-[36rem] xl:p-8 md:px-5">
                <div className="mb-4 text-h4-libre">Hidden Oasis.</div>
                <div className="text-16r">
                    <p>
                        Yen Ninh, Binh Son, Ninh Chu, Phan Rang, Ninh Thuan
                        59000 Vietnam
                    </p>
                    <p>Tel: +84 654 343 543</p>
                    <p>For reservations: +84 344 195 678</p>
                    <p>Mail: contact@naturalparadise.com</p>
                </div>
            </div>
        </div>
    </div>
);

export default Main;
