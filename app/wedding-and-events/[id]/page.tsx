import EventPage from "@/templates/Events/EventPage";

const Event = ({ params }: { params: { id: string } }) => {
    return <EventPage id={params.id} />;
};

export default Event;
