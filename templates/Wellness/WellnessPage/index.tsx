"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Spa from "./Spa";
import SpecialOffers from "./SpecialOffers";
import Experts from "./Experts";

const WellnessPage = () => {
    return (
        <Layout>
            <Main />
            <Details />
            <Spa />
            <SpecialOffers />
            <Experts />
        </Layout>
    );
};

export default WellnessPage;
