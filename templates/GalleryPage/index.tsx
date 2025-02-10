"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Image from "@/components/Image";
import Modal from "@/components/Modal";
import Gallery from "@/components/Gallery";

import { gallery } from "@/mocks/gallery";

const GalleryPage = () => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        setVisibleModal(true);
        setActiveIndex(index);
    };

    return (
        <>
            <Layout>
                <div className="pt-10 pb-40 2xl:pb-30 md:pt-3 md:pb-20">
                    <div className="container">
                        <div className="mb-10 text-center">
                            <div className="mb-6 text-h2">Gallery.</div>
                            <div>
                                A glimpse into our resort&apos;s beauty through
                                the lens.
                            </div>
                        </div>
                        <div className="-mt-6 columns-3 gap-6 lg:columns-2 md:columns-1">
                            {gallery.map((image, index) => (
                                <div className="pt-6" key={index}>
                                    <div
                                        className="cursor-pointer"
                                        onClick={() => handleClick(index)}
                                    >
                                        <Image
                                            className="w-full"
                                            src={image.src}
                                            width={image.width}
                                            height={image.height}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 text-center md:mt-10">
                            <button className="btn-primary btn-lg min-w-[14.75rem] md:min-w-full">
                                Send messenge
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
            <Modal
                classWrap="bg-tranpsarent"
                classButtonClose="top-0 right-0 z-3 bg-white"
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <Gallery images={gallery} index={activeIndex} />
            </Modal>
        </>
    );
};

export default GalleryPage;
