import Link from "next/link";

import { lastestExperiences } from "@/mocks/experiences";

type LastestExperiencesProps = {};

const LastestExperiences = ({}: LastestExperiencesProps) => (
    <>
        <div className="mb-4 text-h4-libre">Lastest Experiences.</div>
        <div className="">
            {lastestExperiences.map((experience) => (
                <Link
                    className="group block mb-4 pb-4 border-b border-n-100 transition-colors hover:text-primary-500 last:mb-0 last:pb-0 last:border-b-0"
                    href="/experiences/2"
                    key={experience.id}
                >
                    <div className="mb-2 text-14m">{experience.title}</div>
                    <div className="text-h7 uppercase text-n-600">
                        Posted on {experience.date}
                    </div>
                </Link>
            ))}
        </div>
    </>
);

export default LastestExperiences;
