"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import EventSpaces from "./EventSpaces";

const RoomPage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
            <EventSpaces />
        </Layout>
    );
};

export default RoomPage;
