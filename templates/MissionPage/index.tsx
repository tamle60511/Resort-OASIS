"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Values from "./Values";

const MissionPage = () => {
    return (
        <Layout>
            <Hero
                title="Mission & Vision."
                info="About Hidden Oasis Resort"
                image="/images/content/hero-pic-1.jpg"
            />
            <Values />
        </Layout>
    );
};

export default MissionPage;
