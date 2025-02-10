import ExperiencePage from "@/templates/Experiences/ExperiencePage";

const Experience = ({ params }: { params: { id: string } }) => {
    return <ExperiencePage id={params.id} />;
};

export default Experience;
