"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import Offers from "./Offers";

const OfferPage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
            <Offers />
        </Layout>
    );
};

export default OfferPage;
