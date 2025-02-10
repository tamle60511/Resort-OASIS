"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import AboutUs from "./AboutUs";
import Offer from "./Offer";
import Details from "./Details";
import Services from "./Services";
import Discover from "./Discover";

const HomePage = () => {
    return (
        <Layout>
            <Main />
            <AboutUs />
            <Offer />
            <Details />
            <Services />
            <Discover />
        </Layout>
    );
};

export default HomePage;
