"use client";

import Layout from "@/components/Layout";
import NewsItem from "@/components/NewsItem";

import { news } from "@/mocks/news";

const NewsPage = () => {
    return (
        <Layout>
            <div className="pt-10 pb-40 2xl:pb-30 md:pt-3 md:pb-20">
                <div className="container">
                    <div className="mb-20 text-center text-h2 lg:mb-10">
                        News & Press.
                    </div>
                    <div className="flex flex-wrap -mt-14 -mx-3 md:block md:m-0">
                        {news.map((article) => (
                            <NewsItem
                                className="w-[calc(33.333%-1.5rem)] mt-14 mx-3 lg:w-[calc(50%-1.5rem)] md:w-full md:mx-0 md:mt-6"
                                item={article}
                                key={article.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NewsPage;
