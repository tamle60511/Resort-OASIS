import Link from "next/link";

import { lastestNews } from "@/mocks/news";

type LastestNewsProps = {};

const LastestNews = ({}: LastestNewsProps) => (
    <div className="">
        <div className="mb-4 text-h4-libre">Lastest News.</div>
        <div className="">
            {lastestNews.map((article) => (
                <Link
                    className="group block mb-4 pb-4 border-b border-n-100 text-14m transition-colors hover:text-primary-500 last:mb-0 last:pb-0 last:border-b-0"
                    href="/news/2"
                    key={article.id}
                >
                    <div className="mb-2">{article.title}</div>
                    <div className="text-n-600">Posted on {article.date}</div>
                </Link>
            ))}
        </div>
    </div>
);

export default LastestNews;
