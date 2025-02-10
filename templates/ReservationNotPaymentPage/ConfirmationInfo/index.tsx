import Link from "next/link";
import Image from "@/components/Image";

type ConfirmationInfoProps = {};

const ConfirmationInfo = ({}: ConfirmationInfoProps) => (
    <>
        <div className="p-12 px-14 bg-white lg:p-8 md:mt-6 md:px-5 md:py-12">
            <div className="flex items-center md:block">
                <div className="shrink-0 w-20 md:mb-6">
                    <Image
                        className="w-full opacity-100"
                        src="/images/content/check-circle.svg"
                        width={80}
                        height={80}
                        alt=""
                    />
                </div>
                <div className="grow pl-6 md:pl-0">
                    <div className="mb-2 text-h4-libre text-primary-500">
                        Booking Confirmed
                    </div>
                    <div className="">
                        We&apos;re excited to confirm your resort stay! Please
                        review the check-in instructions for a seamless
                        experience. Let us know of any special requirements or
                        requests beforehand. We look forward to welcoming you!
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 text-center">
            <Link
                className="btn-secondary btn-lg min-w-[14.75rem] md:min-w-full"
                href="/"
            >
                Return to Homepage
            </Link>
        </div>
    </>
);

export default ConfirmationInfo;
