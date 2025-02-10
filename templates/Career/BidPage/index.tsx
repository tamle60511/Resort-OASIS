"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Form from "./Form";

const BidPage = () => {
    return (
        <Layout>
            <Hero
                title="Grow Your Career With Us."
                image="/images/content/hero-pic-3.jpg"
            />
            <Form />
        </Layout>
    );
};

export default BidPage;
