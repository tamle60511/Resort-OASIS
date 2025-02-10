import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";

type MainProps = {};

const Main = ({}: MainProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <>
            <div className="relative text-white after:absolute after:inset-0 after:bg-black/60">
                <Image
                    className="object-cover"
                    src="/images/content/bg-wellness.jpg"
                    fill
                    alt=""
                />
                <div className="relative z-2 container flex justify-center items-center min-h-[45.5rem] pt-20 pb-20 2xl:min-h-[40rem] xl:min-h-[36rem] md:min-h-max">
                    <div className="max-w-[53.125rem] text-center">
                        <div className="mb-6 text-h1 text-white md:mb-12 md:text-h2 md:text-white">
                            What Is Wellness Inclusive?
                        </div>
                        <div className="mb-12 md:hidden">
                            Offers a rejuvenating escape with Hidden Oasis,
                            nestled amidst stunning rocky mountains and pristine
                            coastlines. Immerse yourself in a natural healing
                            environment and indulge in signature treatments
                            designed to ease your worries. Experience the power
                            of touch with range of therapies that awaken your
                            senses. Inspired by Vietnam&apos;s beauty, our
                            therapists use native flowers and fruits to
                            invigorate your body and rediscover the pleasures of
                            your senses.
                        </div>
                        <button
                            className="play"
                            onClick={() => setVisibleModal(true)}
                        >
                            <Icon
                                className="w-14 h-14 fill-white"
                                name="play"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
                video="https://www.youtube.com/watch?v=4cR7E79X8Ys"
            />
        </>
    );
};

export default Main;
