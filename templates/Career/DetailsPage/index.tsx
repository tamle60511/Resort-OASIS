"use client";

import Link from "next/link";
import Layout from "@/components/Layout";

import { career } from "@/mocks/career";

const DetailsPage = ({ id }: any) => {
    const item = career.find((item) => item.id === id);

    return item ? (
        <Layout>
            <div className="py-20 lg:pt-10 md:pt-3">
                <div className="container-lg">
                    <div className="mb-10 text-h2">{item.title}</div>
                    <div className="mb-6 text-14m">
                        Posted on March 26, 2023
                    </div>
                    <div className="flex items-center mb-10">
                        <div className="shrink-0 p-2.5 border border-primary-500 text-16m text-primary-500">
                            {item.employment}
                        </div>
                        <div className="ml-5">{item.location}</div>
                    </div>
                    <div className="">
                        <p className="mb-3 text-16m text-primary-500">
                            The incumbent herein invests an average of 50% of
                            time on leadership:
                        </p>
                        <ul className="mb-6 list-disc pl-6">
                            <li>
                                Motivates the sales force effectively through
                                performance-based recognition, and counsel
                                productively to reverse deficiencies.
                            </li>
                            <li>
                                Implement good account management and servicing
                                practices in accordance to BTHR principles.
                            </li>
                            <li>
                                Coaches the sales force by way of “coaching
                                calls”.
                            </li>
                            <li>
                                Articulates and evaluates business objectives on
                                a daily basis through departmental briefings and
                                during weekly sales meetings.
                            </li>
                            <li>
                                Provides oversight for the Catering Sales
                                Strategies in coordination with the head of
                                catering sales.
                            </li>
                        </ul>
                        <p className="mb-3 text-16m text-primary-500">
                            Invests an average of 20% of time on the selling
                            process:
                        </p>
                        <ul className="mb-6 list-disc pl-6">
                            <li>
                                Grows an active database of accounts with
                                comprehensive profiles in coordination with the
                                hotels, sales force, and the BTHR Customer
                                Relationship Management (CRM) team.
                            </li>
                            <li>
                                Develops working relationships with Regional
                                Sales Offices and General Sales Agencies to
                                solicit business opportunities.
                            </li>
                            <li>
                                Implements an active selling program to improve
                                system contribution via Central Reservations,
                                branded and non-branded web channels and the
                                Global Distribution System.
                            </li>
                            <li>
                                Ensures seamless conferences and events from
                                acquisition to delivery through the sales force
                                and events teams.
                            </li>
                            <li>
                                Conducts familiarization trips and
                                site-inspections proficiently.
                            </li>
                            <li>
                                Cross-sells all BTHR brands globally where
                                possible.
                            </li>
                            <li>
                                Attends tradeshows in related markets and
                                overseas sales trips.
                            </li>
                            <li>
                                Provides professional advisory to the Director
                                of Sales.
                            </li>
                        </ul>
                        <p className="mb-3 text-16m text-primary-500">
                            Invests an average of 10% of time on researching
                            designated markets by:
                        </p>
                        <ul className="mb-6 list-disc pl-6">
                            <li>
                                Directs the coordination of ongoing research of
                                the travel industry local, regional, and
                                international markets to detect market trends
                                and uncertainties, and related information for
                                development of new marketing strategies.
                            </li>
                            <li>
                                Providing professional advisory to the Area
                                General Manager and Field Sales Leader.
                            </li>
                        </ul>
                        <p className="mb-3 text-16m text-primary-500">
                            Invests an average of 20% of time on revenue with
                            the head of revenue management of the designated
                            area of sales:
                        </p>
                        <ul className="list-disc pl-6">
                            <li>
                                Understands the dynamics of competing hotels,
                                assigned or otherwise, to optimize positive and
                                reverse negative impacts on our business
                                strategies.
                            </li>
                            <li>
                                Understands the total revenue impact of accounts
                                on the hotels for better negotiation and
                                yielding opportunities, and reviews business
                                activities and its results to ensure goals are
                                on pace.
                            </li>
                            <li>
                                Produces, articulates, and implements the
                                hotels’ sales and marketing plans effectively.
                            </li>
                            <li>
                                Produces, articulates, and implements
                                competitive pricing and selling strategies and
                                tactics successfully in coordination with
                                revenue management, marketing communications,
                                and the sales force.
                            </li>
                            <li>
                                Reviews selling, convention, and city event
                                calendars to keep abreast of all demand
                                generators. Ensuring that each property under
                                the purview of the incumbent utilizes all
                                necessary demand information when planning
                                strategies.
                            </li>
                            <li>
                                Directs the preparation of reports pertaining to
                                the operation of the Sales and Marketing
                                Department to include, but not limited to the
                                annual and monthly Forecast, Marketing Budget,
                                Lead Management, Booking Pace, Opera Reports,
                                Sales Meetings and Marketing Meeting Minutes.
                            </li>
                            <li>
                                On a quarterly basis, completes the sales and
                                marketing audit.
                            </li>
                        </ul>
                    </div>
                    <Link
                        className="btn-primary h-10 mt-10 md:w-full"
                        href="/career/bid"
                    >
                        Apply for job
                    </Link>
                </div>
            </div>
        </Layout>
    ) : null;
};

export default DetailsPage;
