"use client";

import Layout from "@/components/Layout";
import Rooms from "@/components/Rooms";
import Main from "./Main";

const RoomPage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
            <Rooms />
        </Layout>
    );
};

export default RoomPage;
