type YourStayProps = {};

const YourStay = ({}: YourStayProps) => (
    <div className="sticky top-6 shrink-0 w-[25.75rem] p-6 border border-n-700 bg-white text-n-600 2xl:w-[20rem] xl:w-[16rem] lg:w-full lg:mt-10">
        <div className="mb-5 text-h4-libre text-primary-500">Your Stay</div>
        <div className="flex mb-5 xl:block lg:flex">
            <div className="mr-12 xl:mr-0 xl:mb-5 lg:mb-0 lg:mr-8">
                <div className="mb-3">Check-in</div>
                <div>After 2:00 PM</div>
            </div>
            <div className="">
                <div className="mb-3">Check-out</div>
                <div>Before 12:00 PM</div>
            </div>
        </div>
        <div className="mb-5 pb-5 border-b border-n-100">
            <div className="mb-3">
                Sun, Mar 26, 2023 -{" "}
                <span className="xl:block lg:inline">Tue, Mar 28, 2023</span>
            </div>
            <div>2 Adults</div>
        </div>
        <div className="flex justify-between text-h4-libre text-primary-500">
            <div>Total:</div>
            <div>$0.00</div>
        </div>
    </div>
);

export default YourStay;
