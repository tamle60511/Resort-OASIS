"use client";

import Layout from "@/components/Layout";
import Rooms from "@/components/Rooms";
import Main from "./Main";

const DetailsPage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
            <Rooms />
        </Layout>
    );
};

export default DetailsPage;
