"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Tabs from "@/components/Tabs";
import ExperiencesItem from "@/components/ExperiencesItem";

import { experiences } from "@/mocks/experiences";

const ExperiencesPage = () => {
    const [type, setType] = useState<
        | "overview"
        | "culture"
        | "food"
        | "sea"
        | "signature"
        | "sustainability"
        | "sport"
    >("overview");

    const typeOffers = [
        {
            title: "Overview",
            active: type === "overview",
            onClick: () => setType("overview"),
        },
        {
            title: "Culture",
            active: type === "culture",
            onClick: () => setType("culture"),
        },
        {
            title: "Food",
            active: type === "food",
            onClick: () => setType("food"),
        },
        {
            title: "Sea",
            active: type === "sea",
            onClick: () => setType("sea"),
        },
        {
            title: "Signature",
            active: type === "signature",
            onClick: () => setType("signature"),
        },
        {
            title: "Sustainability",
            active: type === "sustainability",
            onClick: () => setType("sustainability"),
        },
        {
            title: "Sport",
            active: type === "sport",
            onClick: () => setType("sport"),
        },
    ];

    return (
        <Layout>
            <div className="pt-10 pb-20 md:pt-6">
                <div className="container">
                    <div className="max-w-[38rem] mx-auto mb-10 text-center text-h2 md:text-h3">
                        Experience Exceptional Moments That Bring You To Life.
                    </div>
                    <Tabs className="mb-10" items={typeOffers} />
                    <div className="flex flex-wrap -mt-14 -mx-3">
                        {experiences.map((experience) => (
                            <ExperiencesItem
                                className="w-[calc(50%-1.5rem)] mt-14 mx-3 md:w-[calc(100%-1.5rem)]"
                                item={experience}
                                key={experience.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ExperiencesPage;
