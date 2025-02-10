"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Career from "./Career";

const CareerPage = () => {
    return (
        <Layout>
            <Hero
                title="Grow Your Career With Us."
                image="/images/content/hero-pic-3.jpg"
            />
            <Career />
        </Layout>
    );
};

export default CareerPage;
