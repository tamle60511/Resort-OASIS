import DetailsPage from "@/templates/Package/DetailsPage";

const Details = ({ params }: { params: { id: string } }) => {
    return <DetailsPage id={params.id} />;
};

export default Details;
