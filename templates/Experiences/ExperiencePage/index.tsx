"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import Experiences from "./Experiences";

const ExperiencePage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
            <Experiences />
        </Layout>
    );
};

export default ExperiencePage;
