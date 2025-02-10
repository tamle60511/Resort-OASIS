import YourStay from "./YourStay";
import Form from "./Form";
import SelectRoom from "./SelectRoom";
import Room from "./Room";

import { rooms } from "@/mocks/accommodation";

type ListRoomsProps = {};

const ListRooms = ({}: ListRoomsProps) => (
    <div className="py-20">
        <div className="container flex items-start lg:block">
            <div className="grow pr-6 lg:pr-0">
                <Form />
                <SelectRoom />
                <div className="mt-9 bg-white p-8 border border-n-100 md:p-6">
                    {rooms.map((room) => (
                        <Room
                            className="mb-10 pb-10 border-b border-n-100 last:mb-0 last:pb-0 last:border-b-0 md:mb-6 md:pb-6"
                            item={room}
                            key={room.id}
                        />
                    ))}
                </div>
            </div>
            <YourStay />
        </div>
    </div>
);

export default ListRooms;
