import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import ReactPlayer from "react-player/youtube";
import Icon from "@/components/Icon";

type ModalProps = {
    className?: string;
    classWrap?: string;
    classButtonClose?: string;
    visible: boolean;
    onClose: () => void;
    initialFocus?: any;
    children?: React.ReactNode;
    video?: string;
};

const Modal = ({
    className,
    classWrap,
    classButtonClose,
    visible,
    onClose,
    initialFocus,
    children,
    video,
}: ModalProps) => {
    return (
        <Transition show={visible} as={Fragment}>
            <Dialog
                initialFocus={initialFocus}
                className={`fixed inset-0 z-50 flex p-6 overflow-auto scroll-smooth md:px-4 ${
                    className || ""
                }`}
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        aria-hidden="true"
                    />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel
                        className={twMerge(
                            `relative z-10 max-w-[53.13rem] w-full m-auto bg-white ${
                                video
                                    ? "max-w-[64rem] aspect-video bg-black"
                                    : ""
                            } ${classWrap || ""}`
                        )}
                    >
                        {video ? (
                            <ReactPlayer
                                width={"100%"}
                                height={"100%"}
                                url={video}
                                playing
                                controls
                                playsinline
                            />
                        ) : (
                            children
                        )}
                        <button
                            className={twMerge(
                                `absolute top-3 right-3 w-10 h-10 text-0 fill-n-700 hover:!fill-color-5 dark:fill-n-3 ${
                                    video
                                        ? "top-0 right-0 bg-white fill-n-700"
                                        : ""
                                } ${classButtonClose || ""}`
                            )}
                            onClick={onClose}
                        >
                            <Icon
                                className="w-6 h-6 fill-inherit transition-colors"
                                name="close-fat"
                            />
                        </button>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default Modal;
