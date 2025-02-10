"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import ListRooms from "./ListRooms";

const ReservationPage = () => {
    return (
        <Layout>
            <Main />
            <ListRooms />
        </Layout>
    );
};

export default ReservationPage;
