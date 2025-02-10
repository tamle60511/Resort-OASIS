import OfferPage from "@/templates/SpecialOffers/OfferPage";

const Offer = ({ params }: { params: { id: string } }) => {
    return <OfferPage id={params.id} />;
};

export default Offer;
