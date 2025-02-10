type СommunicationProps = {
    className?: string;
};

const Сommunication = ({ className }: СommunicationProps) => (
    <div
        className={`p-6 border border-n-700 bg-white text-center ${
            className || ""
        }`}
    >
        <div className="mb-5 text-h4-libre text-primary-500">
            Request for Proposal.
        </div>
        <div className="mb-5 pb-5 border-b border-n-100">
            Whatever your occasion or event, everyone at Hidden Oasis Resort is
            dedicated to making it smooth, flawless and memorable. It’s what we
            live for, really.
        </div>
        <div className="mb-5">Contact us for more information</div>
        <a
            className="btn-secondary btn-lg min-w-[13.5rem] text-16m"
            href="tel:+84654343543"
            rel="noopener noreferrer"
        >
            Call:&nbsp;
            <span className="italic">+84 654 343 543</span>
        </a>
        <div className="my-5">Or</div>
        <a
            className="btn-primary btn-lg min-w-[13.5rem] text-16m"
            href="#"
            rel="noopener noreferrer"
        >
            E-mail Us
        </a>
    </div>
);

export default Сommunication;
