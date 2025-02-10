import Link from "next/link";

const items = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About Us",
        url: "/about-us",
    },
    {
        title: "Special Offers",
        url: "/special-offers",
    },
    {
        title: "Offer Details",
        url: "/special-offers/0",
    },
    {
        title: "Experiences",
        url: "/experiences",
    },
    {
        title: "Experience Details",
        url: "/experiences/0",
    },
    {
        title: "Accommodation",
        url: "/accommodation",
    },
    {
        title: "Room Details",
        url: "/accommodation/0",
    },
    {
        title: "Wedding & Events",
        url: "/wedding-and-events",
    },
    {
        title: "Wedding Detail",
        url: "/wedding-and-events/0",
    },
    {
        title: "Request for Proposal",
        url: "/request-for-proposal",
    },
    {
        title: "Dining",
        url: "/dining",
    },
    {
        title: "Dining Details",
        url: "/dining/0",
    },
    {
        title: "Wellness",
        url: "/wellness",
    },
    {
        title: "Wellness Details",
        url: "/wellness/0",
    },
    {
        title: "Make Reservation",
        url: "/reservation",
    },
    {
        title: "Reservation (Guest Details)",
        url: "/reservation-details",
    },
    {
        title: "Reservation (Confirmed)",
        url: "/reservation-confirmed",
    },
    {
        title: "Make Reservation (Not Paypent)",
        url: "/reservation-not-payment",
    },
    {
        title: "Contact Us",
        url: "/contact-us",
    },
    {
        title: "Career",
        url: "/career",
    },
    {
        title: "Career Details",
        url: "/career/0",
    },
    {
        title: "Career Bid",
        url: "/career/bid",
    },
    {
        title: "FAQs",
        url: "/faq",
    },
    {
        title: "Package",
        url: "/package",
    },
    {
        title: "Package Details",
        url: "/package/0",
    },
    {
        title: "Mission & Vision",
        url: "/mission",
    },
    {
        title: "Gallery",
        url: "/gallery",
    },
    {
        title: "History",
        url: "/history",
    },
    {
        title: "Vouchers",
        url: "/vouchers",
    },
    {
        title: "Vouchers Details",
        url: "/vouchers/0",
    },
    {
        title: "Vouchers Confirmed",
        url: "/vouchers/confirmed",
    },
    {
        title: "News and Press",
        url: "/news",
    },
    {
        title: "News and Press Details",
        url: "/news/0",
    },
    {
        title: "Data Protection Policy",
        url: "/policy",
    },
];

const PageListPage = () => {
    return (
        <div className="flex flex-col items-start px-12 py-8">
            {items.map((item, index) => (
                <Link
                    className="mb-1 text-16r transition-colors hover:text-primary-500"
                    href={item.url}
                    key={index}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default PageListPage;
