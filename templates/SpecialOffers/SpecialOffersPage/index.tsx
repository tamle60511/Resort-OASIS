"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Offers from "./Offers";

const SpecialOffersPage = () => {
    return (
        <Layout>
            <Hero
                title="Special Offers."
                info="Relax in Paradise with Exclusive Special Offers from Hidden Oasis Resort."
                image="/images/content/hero-pic-1.jpg"
            />
            <Offers />
        </Layout>
    );
};

export default SpecialOffersPage;
