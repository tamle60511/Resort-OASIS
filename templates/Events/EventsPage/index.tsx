"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import Events from "./Events";
import EventSpaces from "./EventSpaces";

const EventsPage = () => {
    return (
        <Layout>
            <Main />
            <Events />
            <EventSpaces />
        </Layout>
    );
};

export default EventsPage;
