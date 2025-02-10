import Image from "@/components/Image";

type SuccessProps = {};

const Success = ({}: SuccessProps) => (
    <div className="p-12 text-center md:py-8 md:px-6">
        <div className="w-20 mx-auto mb-6">
            <Image
                className="w-full opacity-100"
                src="/images/content/check-circle.svg"
                width={80}
                height={80}
                alt=""
            />
        </div>
        <div className="mb-4 text-h4-libre text-primary-500">
            Payment Success
        </div>
        <div className="max-w-[38.125rem] mx-auto">
            Great news! Your payment has been successfully processed and we'll
            now take you directly to the booking confirmation page. Sit back,
            relax, and enjoy your seamless user experience with us!
        </div>
    </div>
);

export default Success;
