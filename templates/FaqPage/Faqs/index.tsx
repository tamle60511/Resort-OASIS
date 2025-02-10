import FaqItem from "./FaqItem";

import { faqs } from "@/mocks/faqs";

type FaqsProps = {};

const Faqs = ({}: FaqsProps) => (
    <div className="py-20">
        <div className="container-lg">
            <div className="mb-5 text-center text-h2">FAQs</div>
            <div className="">
                {faqs.map((item) => (
                    <FaqItem item={item} key={item.id} />
                ))}
            </div>
        </div>
    </div>
);

export default Faqs;
