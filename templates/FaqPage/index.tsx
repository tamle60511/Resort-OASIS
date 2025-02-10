"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Faqs from "./Faqs";

const FaqPage = () => {
    return (
        <Layout>
            <Hero
                title="Frequently Asked Questions About Hidden Oasis."
                image="/images/content/hero-pic-4.jpg"
            />
            <Faqs />
        </Layout>
    );
};

export default FaqPage;
