type PoliciesProps = {};

const Policies = ({}: PoliciesProps) => (
    <div className="mb-10 p-6 border border-n-100">
        <div className="mb-3 text-h4-libre text-primary-500">Policies</div>
        <div className="flex mb-3">
            <div className="mr-12 md:mr-auto">
                <div className="mb-3">Check-in</div>
                <div>After 2:00 PM</div>
            </div>
            <div className="">
                <div className="mb-3">Check-out</div>
                <div>Before 12:00 PM</div>
            </div>
        </div>
        <div className="mb-3">1 King Bed Junior Suite</div>
        <div className="mb-3">
            <div className="font-medium underline">Guarantee Policy</div>
            <div className="">
                A credit card is required to guarantee a booking. Full
                prepayment is required 14 days prior to arrival.
            </div>
        </div>
        <div className="">
            <div className="font-medium underline">Cancel Policy</div>
            <div className="">
                Reservations can be cancelled or modified up to 14 days prior to
                arrival free of charge | 13-7 days before arrival 1 night charge
                | 6-3 days before arrival 50% charge of total amount |
                cancellation 2 days before, no-show or early departure 100%
                charge.
            </div>
        </div>
    </div>
);

export default Policies;
