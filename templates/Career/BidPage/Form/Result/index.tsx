import Link from "next/link";
import Image from "@/components/Image";

type ResultProps = {};

const Result = ({}: ResultProps) => (
    <>
        <div className="px-12 py-14 bg-white md:px-5 md:py-12">
            <div className="flex items-center mb-4 text-16m text-primary-500">
                <div className="shrink-0 mr-2">
                    <Image
                        className="w-6 opacity-100"
                        src="/images/content/check-circle-stroke.svg"
                        width={24}
                        height={24}
                        alt=""
                    />
                </div>
                Thank You For Submitting Your Resume
            </div>
            <div className="mb-4">Dear Nguyen,</div>
            <div className="mb-4">
                We appreciate your interest in joining our team.<br></br>Our
                recruitment team is currently reviewing your application and
                will be in touch with you soon. We encourage you to check your
                email regularly for updates on the status of your application.
                <br></br>Thank you again for considering Hidden Oasis Resort as
                your potential employer. If you have any questions or concerns,
                please do not hesitate to reach out to us.
            </div>
            <div className="text-14m">Best regards,</div>
            <div className="text-14m italic">Hidden Oasis Recruitment Team</div>
        </div>
        <div className="mt-10 text-center">
            <Link
                className="btn-secondary btn-lg min-w-[20.9rem] text-16m md:min-w-full"
                href="/career"
            >
                Return to Careers Page
            </Link>
        </div>
    </>
);

export default Result;
