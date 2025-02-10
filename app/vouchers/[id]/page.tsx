import DetailsPage from "@/templates/Vouchers/DetailsPage";

const Details = ({ params }: { params: { id: string } }) => {
    return <DetailsPage id={params.id} />;
};

export default Details;
