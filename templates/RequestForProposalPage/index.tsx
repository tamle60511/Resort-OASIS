"use client";

import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Icon from "@/components/Icon";
import Сommunication from "@/components/Сommunication";
import Form from "./Form";

const RequestForProposalPage = () => {
    const router = useRouter();

    return (
        <Layout>
            <div className="py-20 xl:pt-10">
                <div className="container">
                    <button
                        className="group inline-flex items-center mb-9 text-h2 xl:text-h3 md:mb-6 md:text-h4-libre"
                        onClick={() => router.back()}
                    >
                        <Icon
                            className="w-8 h-8 mr-6 fill-primary-500 transition-transform group-hover:-translate-x-1"
                            name="arrow-long-left"
                        />
                        Request for Proposal.
                    </button>
                    <div className="flex items-start lg:block">
                        <Form />
                        <Сommunication className="shrink-0 w-[25.75rem] 2xl:w-[24rem] xl:w-[22rem] lg:w-full" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RequestForProposalPage;
