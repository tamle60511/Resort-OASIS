"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Details from "./Details";

const ContactUsPage = () => {
    return (
        <Layout>
            <Hero title="Contact Us." image="/images/content/hero-pic-2.jpg" />
            <Details />
        </Layout>
    );
};

export default ContactUsPage;
