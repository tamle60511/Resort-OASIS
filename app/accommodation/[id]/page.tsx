import RoomPage from "@/templates/Accommodation/RoomPage";

const Room = ({ params }: { params: { id: string } }) => {
    return <RoomPage id={params.id} />;
};

export default Room;
