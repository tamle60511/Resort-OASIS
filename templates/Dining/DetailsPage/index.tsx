"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import Interested from "./Interested";

const DetailsPage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
            <Interested />
        </Layout>
    );
};

export default DetailsPage;
