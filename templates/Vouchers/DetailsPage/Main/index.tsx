import Image from "@/components/Image";
import Form from "./Form";

import { vouchers } from "@/mocks/vouchers";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const voucher = vouchers.find((voucher) => voucher.id === id);

    return voucher ? (
        <div className="pt-10 pb-20 lg:pt-0 md:pb-10">
            <div className="container">
                <div className="mb-15 lg:-mx-8 lg:mb-10 md:-mx-5">
                    <Image
                        className="w-full"
                        src="/images/content/voucher-pic.jpg"
                        width={1432}
                        height={810}
                        alt=""
                    />
                </div>
                <div className="max-w-[71.375rem] mx-auto">
                    <div className="mb-10 pb-10 border-b border-n-200">
                        <div className="mb-6 text-h3">{voucher.title}</div>
                        <div className="">{voucher.content}</div>
                    </div>
                    <div className="mb-10 p-10 bg-white md:mb-6 md:px-6 md:p-6">
                        <div className="mb-6 text-h4-libre text-primary-500">
                            Stay & Dine package includes:
                        </div>
                        <ul className="list-disc pl-6">
                            <li>
                                Escape to Relaxation and Fine Dining with Our
                                Exclusive Stay & Dine Package Gift Card
                            </li>
                            <li>
                                Experience Unforgettable Hospitality and
                                Delectable Cuisine with Our Stay & Dine Gift
                                Card Package
                            </li>
                            <li>
                                Treat Yourself and a Loved One to a Luxurious
                                Getaway with Our Stay & Dine Package Gift Card
                            </li>
                            <li>
                                Unwind in Style and Savor Gourmet Cuisine with
                                Our Stay & Dine Package Gift Card for Two
                            </li>
                            <li>
                                Elevate Your Staycation with Our Stay & Dine
                                Package Gift Card, Featuring Premium Amenities
                                and Dining Options.
                            </li>
                            <li>
                                Give the Gift of a Relaxing Stay and Culinary
                                Delights with Our Stay & Dine Package Gift Card
                            </li>
                            <li>
                                Enjoy a Complete Escape with Our Stay & Dine
                                Package Gift Card, Featuring Accommodations and
                                Dining Experiences to Remember
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 p-10 bg-white md:mb-6 md:p-6">
                        <div className="mb-6 text-h4-libre text-primary-500">
                            Terms and Conditions:
                        </div>
                        <ul className="list-disc pl-6">
                            <li>
                                This gift card is redeemable only for the Stay &
                                Dine package at the designated property.
                            </li>
                            <li>
                                The gift card is non-transferable and cannot be
                                redeemed for cash.
                            </li>
                            <li>
                                The gift card must be presented at check-in to
                                receive the Stay & Dine package.
                            </li>
                            <li>
                                The Stay & Dine package is subject to
                                availability and blackout dates may apply.
                            </li>
                            <li>
                                The gift card is valid for one year from the
                                date of purchase.
                            </li>
                            <li>
                                The gift card cannot be replaced if lost,
                                stolen, or damaged.
                            </li>
                            <li>
                                Any unused portion of the gift card will be
                                forfeited.
                            </li>
                            <li>
                                The Stay & Dine package includes accommodations
                                for a specified number of nights and dining
                                experiences for a specified number of guests.
                                Any additional charges or expenses must be paid
                                by the gift card recipient at the time of
                                checkout.
                            </li>
                            <li>
                                The Stay & Dine package may be subject to
                                additional terms and conditions, which will be
                                communicated to the gift card recipient at the
                                time of booking.
                            </li>
                            <li>
                                The gift card cannot be combined with any other
                                offer, promotion, or discount.
                            </li>
                        </ul>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    ) : null;
};

export default Main;
