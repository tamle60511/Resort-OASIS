"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import Experiences from "./Experiences";

const ArticlePage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
            <Experiences />
        </Layout>
    );
};

export default ArticlePage;
